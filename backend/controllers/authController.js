const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const register = async (req, res) => {
  try {
    const { name, email, password, role, class: studentClass, section, subject, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student',
      class: studentClass,
      section,
      subject,
      phone
    });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        class: user.class
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        class: user.class,
        subject: user.subject
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Forgot Password – send reset link
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No user with that email' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Request',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Request</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      background-color: #f3f4f6;
    }
    .container {
      max-width: 560px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      padding: 32px 24px;
      text-align: center;
    }
    .logo {
      background: white;
      width: 64px;
      height: 64px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 16px;
      font-size: 32px;
      font-weight: 800;
      color: #1e3a8a;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .header h1 {
      color: white;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }
    .header p {
      color: #bfdbfe;
      font-size: 16px;
    }
    .content {
      padding: 40px 32px;
    }
    .greeting {
      font-size: 24px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 16px;
    }
    .message {
      color: #4b5563;
      font-size: 16px;
      margin-bottom: 32px;
      line-height: 1.6;
    }
    .button-container {
      text-align: center;
      margin: 32px 0;
    }
    .reset-button {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      text-decoration: none;
      display: inline-block;
      padding: 14px 32px;
      border-radius: 48px;
      font-weight: 600;
      font-size: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .reset-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    .info-box {
      background-color: #f9fafb;
      border-left: 4px solid #3b82f6;
      padding: 16px 20px;
      border-radius: 12px;
      margin: 24px 0;
    }
    .info-text {
      color: #6b7280;
      font-size: 14px;
      line-height: 1.5;
    }
    .info-text strong {
      color: #374151;
    }
    .alternative-link {
      margin-top: 20px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
    }
    .alternative-link a {
      color: #3b82f6;
      text-decoration: none;
      font-weight: 500;
    }
    .alternative-link a:hover {
      text-decoration: underline;
    }
    .divider {
      height: 1px;
      background: #e5e7eb;
      margin: 32px 0 24px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px 32px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer p {
      color: #6b7280;
      font-size: 12px;
      margin: 4px 0;
    }
    .footer .contact {
      margin-top: 12px;
      font-size: 13px;
    }
    .footer a {
      color: #3b82f6;
      text-decoration: none;
    }
    @media (max-width: 600px) {
      .content {
        padding: 32px 24px;
      }
      .greeting {
        font-size: 22px;
      }
      .reset-button {
        padding: 12px 28px;
        font-size: 15px;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 24px 16px; background-color: #f3f4f6; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div class="container" style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);">
    <!-- Header -->
    <div class="header" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 32px 24px; text-align: center;">
      <div class="logo" style="background: white; width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-size: 32px; font-weight: 800; color: #1e3a8a; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">📚</div>
      <h1 style="color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 8px; margin-top: 0;">Bright Future School</h1>
      <p style="color: #bfdbfe; font-size: 16px; margin: 0;">Excellence in Education</p>
    </div>
    
    <!-- Content -->
    <div class="content" style="padding: 40px 32px;">
      <div class="greeting" style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 16px;">Hello, ${user.name || 'User'} 👋</div>
      <div class="message" style="color: #4b5563; font-size: 16px; margin-bottom: 32px; line-height: 1.6;">
        We received a request to reset the password for your account associated with this email address. Click the button below to create a new password.
      </div>
      
      <div class="button-container" style="text-align: center; margin: 32px 0;">
        <a href="${resetUrl}" class="reset-button" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; text-decoration: none; display: inline-block; padding: 14px 32px; border-radius: 48px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">Reset Password →</a>
      </div>
      
      <div class="info-box" style="background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 16px 20px; border-radius: 12px; margin: 24px 0;">
        <div class="info-text" style="color: #6b7280; font-size: 14px; line-height: 1.5;">
          <strong style="color: #374151;">🔐 This link is valid for 1 hour.</strong><br />
          If you did not request a password reset, please ignore this email. Your password will remain unchanged.
        </div>
      </div>
      
      
      <div class="divider" style="height: 1px; background: #e5e7eb; margin: 32px 0 24px;"></div>
      
      <div style="text-align: center;">
        <p style="color: #9ca3af; font-size: 13px; margin: 0;">Need help? <a href="http://localhost:3000/contact" style="color: #3b82f6; text-decoration: none;">Contact Support</a></p>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="footer" style="background-color: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 12px; margin: 4px 0;">Bright Future School, Education City, Gujarat, India</p>
      <p style="color: #6b7280; font-size: 12px; margin: 4px 0;">© 2026 All rights reserved.</p>
      <div class="contact" style="margin-top: 12px; font-size: 13px;">
        📞 +91 98765 43210 &nbsp;|&nbsp; ✉️ <a href="mailto:info@brightfutureschool.com" style="color: #3b82f6; text-decoration: none;">info@brightfutureschool.com</a>
      </div>
    </div>
  </div>
</body>
</html>`,
    });

    res.json({ message: 'Reset link sent to your email' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reset Password using token
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Change Password (logged-in user)
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.id);

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { register, login, forgotPassword, resetPassword, changePassword };
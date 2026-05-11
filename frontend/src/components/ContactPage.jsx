import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle, AlertCircle, Clock 
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) 
      newErrors.phone = "Enter valid 10-digit mobile number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com", color: "hover:bg-blue-400" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: ["123, School Street", "Education City, Gujarat - 380001"], bg: "bg-blue-100", text: "text-blue-600" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: ["+91 98765 43210", "+91 81280 52078"], bg: "bg-green-100", text: "text-green-600" },
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: ["info@brightfutureschool.com", "admissions@brightfutureschool.com"], bg: "bg-red-100", text: "text-red-600" },
    { icon: <Clock className="w-6 h-6" />, title: "Office Hours", details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 1:00 PM"], bg: "bg-purple-100", text: "text-purple-600" },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section – extra small height on mobile */}
      <section className="relative h-[40vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-xs font-medium">📞 Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 leading-tight">
            Contact <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-2">
            We're here to answer your questions and help you with admissions.
          </p>
        </motion.div>
      </section>

      {/* Main Content – tight padding for 320px */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-10 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Contact Form – smaller padding on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-5 sm:p-8 md:p-10"
          >
            <div className="mb-5 sm:mb-8">
              <h2 className="text-xl sm:text-3xl font-bold mb-1">Send us a Message</h2>
              <p className="text-xs sm:text-base text-gray-500">Fill out the form and we'll get back within 24h.</p>
            </div>

            {submitSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 bg-green-50 border border-green-200 rounded-xl p-2.5 flex items-center gap-2 text-green-700 text-xs sm:text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Message sent! We'll contact you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2.5 sm:p-4 text-sm border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-0.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-2.5 sm:p-4 text-sm border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-0.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2.5 sm:p-4 text-sm border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-0.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className={`w-full p-2.5 sm:p-4 text-sm border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none transition`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-0.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>Sending <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards – smaller gap on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`${info.bg} p-2.5 sm:p-3 rounded-xl ${info.text} shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-xl mb-0.5">{info.title}</h4>
                    {info.details.map((line, i) => (
                      <p key={i} className="text-gray-600 text-xs sm:text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links – compact on mobile */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-bold text-base sm:text-xl mb-2">Follow Us</h4>
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-9 h-9 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition-all ${social.color} hover:text-white`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map – reduced height on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 lg:mt-20 rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.40169047475!2d72.4396548433165!3d23.020246237655293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd143%3A0x4f6a6f5c7b5f5e3d!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full sm:h-[300px]"
          ></iframe>
        </motion.div>

        {/* FAQ Section – single column on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 lg:mt-20 text-center"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto text-xs sm:text-base px-2">
            Find quick answers to common questions.
          </p>
          
          <div className="grid gap-4 text-left max-w-4xl mx-auto">
            {[
              { q: "What is the admission process?", a: "Fill out the online form, submit documents, and attend an interaction session with the principal." },
              { q: "What are the school timings?", a: "Pre-primary: 8:30 AM - 12:30 PM | Grades 1-12: 8:00 AM - 3:00 PM" },
              { q: "Is there a transport facility?", a: "Yes, we provide bus service across major routes in the city." },
              { q: "What is the student-teacher ratio?", a: "We maintain an ideal ratio of 15:1 for personalized attention." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
                <h4 className="font-bold text-sm sm:text-lg mb-1 text-blue-600">{faq.q}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button
              onClick={() => navigate("/about")}
              className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base"
            >
              Learn more about us →
            </button>
          </div>
        </motion.div>
      </div>

      {/* CTA Banner – compact padding */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-3">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Ready to Join Bright Future School?</h2>
          <p className="text-xs sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6">Take the first step towards a brilliant academic journey.</p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-gray-900 px-5 py-1.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg"
          >
            Apply for Admission
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
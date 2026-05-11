import React, { useState, useEffect } from "react";
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Activity,
  FlaskConical,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ChevronRight,
  Star,
  ArrowRight,
  Shield,
  Award,
  Users,
  Ambulance,
  Microscope,
  Pill,
  Heart,
  Utensils,
  Menu,
  X,
  GraduationCap,
  Trophy,
  Smile,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Quote,
  Sparkles,
  Zap,
  Feather,
  CheckCircle,
  Home,
  Info,
  Briefcase,
  Building,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

// ---------------------------------------- SERVICES DATA ----------------------------------------
const services = [
  {
    id: "maternity",
    name: "Maternity Care",
    icon: <Baby size={28} />,
    desc: "Complete pregnancy care with personalized attention",
    color: "from-pink-500 to-rose-500",
    image:
      "https://images.pexels.com/photos/4063862/pexels-photo-4063862.jpeg?w=600&h=400&fit=crop",
    features: [
      "24/7 Support",
      "Expert Doctors",
      "Modern Facilities",
      "Painless Delivery",
      "Breastfeeding Support",
    ],
    longDesc:
      "Our Maternity Care program provides comprehensive care throughout your pregnancy journey. From pre-conception counseling to postnatal support, we ensure the health and safety of both mother and baby. Our team of experienced gynecologists, obstetricians, and nurses work together to provide personalized care plans tailored to your specific needs.",
  },
  {
    id: "ivf",
    name: "IVF Treatment",
    icon: <FlaskConical size={28} />,
    desc: "Advanced fertility solutions with high success rate",
    color: "from-purple-500 to-indigo-500",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=600&h=400&fit=crop",
    features: [
      "High Success Rate",
      "Latest Technology",
      "Affordable Care",
      "Expert Embryologists",
      "Personalized Protocols",
    ],
    longDesc:
      "Our IVF center is equipped with state-of-the-art technology and follows international standards. We offer a full range of fertility treatments including IVF, ICSI, IUI, Egg Donation, and Embryo Freezing. Our team provides compassionate care and emotional support throughout your fertility journey.",
  },
  {
    id: "gynecology",
    name: "Gynecology",
    icon: <HeartPulse size={28} />,
    desc: "Complete women's health specialist care",
    color: "from-red-500 to-pink-500",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=600&h=400&fit=crop",
    features: [
      "Regular Checkups",
      "Cancer Screening",
      "Hormonal Care",
      "Menopause Management",
      "PCOS Treatment",
    ],
    longDesc:
      "Our gynecology department offers comprehensive healthcare services for women of all ages. From adolescent gynecology to menopause management, we provide expert care for all women's health issues including menstrual disorders, hormonal imbalances, fibroids, endometriosis, and preventive screenings.",
  },
  {
    id: "sonography",
    name: "Sonography",
    icon: <Activity size={28} />,
    desc: "4D Ultrasound & advanced scanning",
    color: "from-blue-500 to-cyan-500",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=600&h=400&fit=crop",
    features: [
      "4D Imaging",
      "Color Doppler",
      "Expert Radiologists",
      "Quick Reports",
      "Safe & Painless",
    ],
    longDesc:
      "Our sonography department features advanced ultrasound machines for high-quality imaging. We offer 2D, 3D, 4D ultrasound, Color Doppler, and fetal echocardiography. Our expert radiologists provide accurate reports to help your doctor make informed decisions about your healthcare.",
  },
  {
    id: "neonatal",
    name: "Neonatal Care",
    icon: <Stethoscope size={28} />,
    desc: "Newborn intensive care unit",
    color: "from-green-500 to-emerald-500",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=600&h=400&fit=crop",
    features: [
      "NICU Facility",
      "24/7 Monitoring",
      "Expert Pediatricians",
      "Ventilator Support",
      "Phototherapy",
    ],
    longDesc:
      "Our Neonatal Intensive Care Unit (NICU) provides specialized care for premature babies and newborns with medical complications. Our team of neonatologists, pediatricians, and trained nurses provide round-the-clock monitoring and advanced medical support to ensure the best outcomes for your little one.",
  },
  {
    id: "postnatal",
    name: "Postnatal Care",
    icon: <User size={28} />,
    desc: "Mother & baby recovery support",
    color: "from-orange-500 to-amber-500",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=600&h=400&fit=crop",
    features: [
      "Lactation Support",
      "Physiotherapy",
      "Mental Wellness",
      "Newborn Care Guidance",
      "Nutrition Counseling",
    ],
    longDesc:
      "Our postnatal care program supports new mothers during the crucial recovery period after delivery. We provide lactation support, postpartum physiotherapy, mental wellness counseling, and newborn care guidance to help you navigate the challenges of new parenthood with confidence.",
  },
];

// ---------------------------------------- SERVICE DETAIL PAGE COMPONENT ----------------------------------------
const ServiceDetailPage = ({ service, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-pink-500 font-semibold hover:gap-3 transition-all mb-6"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10">
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-10">
            <div
              className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg`}
            >
              {service.icon}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {service.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
            <p className="text-gray-700 leading-relaxed">{service.longDesc}</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-3xl p-6 md:p-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-md"
              >
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Appointment CTA */}
        <div
          className={`bg-gradient-to-r ${service.color} rounded-3xl p-6 md:p-10 text-center text-white`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Book an Appointment
          </h2>
          <p className="mb-6 opacity-90">
            Consult with our {service.name} specialists today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-bold hover:shadow-xl transition flex items-center justify-center gap-2">
              <Phone size={18} /> Call: +91 99240 50939
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Calendar size={18} /> Online Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------- HOME PAGE ----------------------------------------
const HomePage = ({ onServiceClick }) => {
  // Fixed services with working images from reliable sources
  const servicesWithImages = [
    {
      name: "Maternity Care",
      icon: <Baby size={28} />,
      desc: "Complete pregnancy care",
      color: "from-pink-500 to-rose-500",
      image:
        "https://images.pexels.com/photos/4063862/pexels-photo-4063862.jpeg?w=500&h=300&fit=crop",
      id: "maternity",
    },
    {
      name: "IVF Treatment",
      icon: <FlaskConical size={28} />,
      desc: "Advanced fertility solutions",
      color: "from-purple-500 to-indigo-500",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=500&h=300&fit=crop",
      id: "ivf",
    },
    {
      name: "Gynecology",
      icon: <HeartPulse size={28} />,
      desc: "Women's health specialist",
      color: "from-red-500 to-pink-500",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=500&h=300&fit=crop",
      id: "gynecology",
    },
    {
      name: "Sonography",
      icon: <Activity size={28} />,
      desc: "4D Ultrasound & Scanning",
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=500&h=300&fit=crop",
      id: "sonography",
    },
    {
      name: "Neonatal Care",
      icon: <Stethoscope size={28} />,
      desc: "Newborn intensive care",
      color: "from-green-500 to-emerald-500",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=500&h=300&fit=crop",
      id: "neonatal",
    },
    {
      name: "Postnatal Care",
      icon: <User size={28} />,
      desc: "Mother & baby recovery",
      color: "from-orange-500 to-amber-500",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=500&h=300&fit=crop",
      id: "postnatal",
    },
  ];

  const doctors = [
    {
      name: "Dr. Jigna Patel",
      specialty: "Gynecologist & Obstetrician",
      experience: "15+ years",
      icon: <Stethoscope size={20} />,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      education: "MD - Gynecology",
      patients: "5000+",
    },
    {
      name: "Dr. Meena Shah",
      specialty: "IVF Specialist",
      experience: "12+ years",
      icon: <FlaskConical size={20} />,
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      education: "Fellowship in Reproductive Medicine",
      patients: "3000+",
    },
    {
      name: "Dr. Nisha Desai",
      specialty: "Pediatrician",
      experience: "10+ years",
      icon: <Baby size={20} />,
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      education: "MD - Pediatrics",
      patients: "8000+",
    },
  ];

  const testimonials = [
    {
      name: "Neha Patel",
      text: "Amazing experience! The doctors and staff are very caring. Best maternity hospital in Ahmedabad. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      location: "Ahmedabad",
    },
    {
      name: "Riya Shah",
      text: "Successfully completed my IVF treatment here. Very supportive team. The facilities are world-class.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      location: "Gandhinagar",
    },
    {
      name: "Priya Mehta",
      text: "Excellent care during my pregnancy. The facilities are top-notch. Thank you Shreeji Hospital!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      location: "Ahmedabad",
    },
  ];

  const blogs = [
    {
      title: "Tips for a Healthy Pregnancy",
      date: "Dec 15, 2024",
      category: "Maternity",
      image:
        "https://images.pexels.com/photos/4063862/pexels-photo-4063862.jpeg?w=500&h=300&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "Understanding IVF Process",
      date: "Dec 10, 2024",
      category: "IVF",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?w=500&h=300&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "Newborn Care Guide",
      date: "Dec 5, 2024",
      category: "Baby Care",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=500&h=300&fit=crop",
      readTime: "4 min read",
    },
  ];

  const maternitySteps = [
    {
      step: "01",
      title: "Pre-consultation",
      desc: "Understanding your health",
      icon: <Users size={24} />,
      image:
        "https://images.pexels.com/photos/4063862/pexels-photo-4063862.jpeg?w=300&h=200&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Pregnancy Care",
      desc: "Regular checkups & scans",
      icon: <Heart size={24} />,
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=300&h=200&fit=crop",
      color: "from-pink-500 to-rose-500",
    },
    {
      step: "03",
      title: "Safe Delivery",
      desc: "24/7 emergency care",
      icon: <Ambulance size={24} />,
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?w=300&h=200&fit=crop",
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Postnatal Support",
      desc: "Mother & baby wellness",
      icon: <Baby size={24} />,
      image:
        "https://images.pexels.com/photos/4063862/pexels-photo-4063862.jpeg?w=300&h=200&fit=crop",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-5 animate-pulse">
                <Sparkles size={16} /> 25+ Years of Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
                Shreeji Hospital & <br />
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Maternity Home
                </span>
              </h1>
              <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                Best Gynecology, Maternity & IVF hospital in Ahmedabad.
                Specialized care for women and newborns with modern facilities
                and expert doctors.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3.5 rounded-full font-bold hover:shadow-2xl transition duration-300 hover:scale-105 flex items-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </button>
                <button className="border-2 border-pink-400 text-pink-500 px-8 py-3.5 rounded-full font-bold hover:bg-pink-50 transition duration-300">
                  Emergency Help
                </button>
              </div>

              <div className="flex flex-wrap gap-8 mt-12">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Shield
                    size={32}
                    className="text-green-500 group-hover:scale-110 transition"
                  />
                  <div>
                    <p className="font-bold text-gray-800">ISO Certified</p>
                    <p className="text-xs text-gray-500">Quality Healthcare</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Award
                    size={32}
                    className="text-yellow-500 group-hover:scale-110 transition"
                  />
                  <div>
                    <p className="font-bold text-gray-800">Award Winner</p>
                    <p className="text-xs text-gray-500">Best Hospital 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Users
                    size={32}
                    className="text-blue-500 group-hover:scale-110 transition"
                  />
                  <div>
                    <p className="font-bold text-gray-800">5000+ Patients</p>
                    <p className="text-xs text-gray-500">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=500&h=500&fit=crop"
                  alt="Doctor"
                  className="w-72 sm:w-80 md:w-96 rounded-full shadow-2xl object-cover relative z-10 border-4 border-white animate-float"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-3 shadow-xl z-20 animate-bounce">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold">
                    24/7 Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-5 text-center shadow-xl hover:scale-105 transition duration-300 cursor-pointer group">
            <p className="text-3xl sm:text-4xl font-bold group-hover:scale-110 transition">
              10+
            </p>
            <p className="text-xs opacity-90 mt-1">Years of Excellence</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-5 text-center shadow-xl hover:scale-105 transition duration-300 cursor-pointer group">
            <p className="text-3xl sm:text-4xl font-bold group-hover:scale-110 transition">
              5000+
            </p>
            <p className="text-xs opacity-90 mt-1">Happy Patients</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-5 text-center shadow-xl hover:scale-105 transition duration-300 cursor-pointer group">
            <p className="text-3xl sm:text-4xl font-bold group-hover:scale-110 transition">
              24/7
            </p>
            <p className="text-xs opacity-90 mt-1">Emergency Services</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-5 text-center shadow-xl hover:scale-105 transition duration-300 cursor-pointer group">
            <p className="text-3xl sm:text-4xl font-bold group-hover:scale-110 transition">
              100+
            </p>
            <p className="text-xs opacity-90 mt-1">Expert Doctors</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION with Learn More buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Our Specialties
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive healthcare services for women & children with
            cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithImages.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=500&h=300&fit=crop";
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-60 transition duration-500`}
                ></div>
              </div>
              <div className="p-6 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-xl group-hover:scale-110 transition duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
                <button
                  onClick={() => {
                    const service = services.find((s) => s.id === item.id);
                    if (service) onServiceClick(service);
                  }}
                  className="mt-5 text-pink-500 font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATERNITY JOURNEY */}
      <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-3">
              Your Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Maternity Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Complete care from conception to recovery with personalized
              attention
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {maternitySteps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6 text-center relative">
                  <div
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold shadow-xl group-hover:scale-110 transition`}
                  >
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-pink-500 group-hover:scale-110 transition mt-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Meet Our Experts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Dedicated team of experienced specialists with years of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
            >
              <div className="h-72 overflow-hidden relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg group-hover:scale-110 transition">
                  {doctor.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-xl">
                  {doctor.name}
                </h3>
                <p className="text-sm text-pink-500 font-semibold mt-1">
                  {doctor.specialty}
                </p>
                <p className="text-xs text-gray-500 mt-2">{doctor.education}</p>
                <div className="flex justify-center gap-4 mt-3">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    ⭐ {doctor.experience}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    👥 {doctor.patients}
                  </span>
                </div>
                <button className="mt-5 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 rounded-xl text-sm font-bold hover:shadow-lg transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Patient Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">
              What our patients say about their experience with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <Quote size={40} className="text-pink-300 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400"
                  />
                  <div>
                    <p className="font-bold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span className="bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-3">
            Health Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Stay updated with the latest health tips and news
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span>📖 {blog.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-pink-500 transition">
                  {blog.title}
                </h3>
                <button className="text-pink-500 font-semibold flex items-center gap-1 group-hover:gap-2 transition">
                  Read Article <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get expert consultation from our experienced doctors
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold hover:shadow-2xl transition duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Phone size={18} /> Call Now: +91 99240 50939
            </button>
            <button className="border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Calendar size={18} /> Online Booking
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// ---------------------------------------- MAIN APP ----------------------------------------
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.title =
      "Shreeji Hospital & Maternity Home ,Jamkhambhaliya. Best Gynecology, Maternity & IVF hospital in Jamkhambhaliya. Specialized";

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "Doctors",
    "Maternity",
    "IVF",
    "Facilities",
    "Contact",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setActivePage("ServiceDetail");
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    setActivePage("Home");
  };

  // Render based on active page
  const renderContent = () => {
    if (activePage === "ServiceDetail" && selectedService) {
      return (
        <ServiceDetailPage
          service={selectedService}
          onBack={handleBackToHome}
        />
      );
    }

    if (activePage === "Home") {
      return <HomePage onServiceClick={handleServiceClick} />;
    }

    // Simple placeholder pages for other navigation items
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {activePage}
          </h1>
          <p className="text-gray-600">
            This page is under construction. Coming soon!
          </p>
          <button
            onClick={() => setActivePage("Home")}
            className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-pink-50 min-h-screen font-sans overflow-x-hidden">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-xs py-2.5 px-4 hidden md:block border-b border-blue-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-pink-300 transition cursor-pointer">
              <Phone size={12} /> +91 99240 50939
            </span>
            <span className="flex items-center gap-2 hover:text-pink-300 transition cursor-pointer">
              <Mail size={12} /> info@shreejihospital.com
            </span>
            <span className="flex items-center gap-2 hover:text-pink-300 transition cursor-pointer">
              <MapPin size={12} /> Ahmedabad, Gujarat
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2">
              <Clock size={12} /> 24/7 Emergency: +91 99240 50939
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xl py-2" : "bg-white shadow-lg py-3"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                setActivePage("Home");
                setSelectedService(null);
              }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2.5 rounded-2xl shadow-lg group-hover:scale-110 transition duration-300">
                <HeartPulse className="text-white" size={30} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  Shreeji Hospital
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Maternity  & IVF Centre | Since 2014
                </p>
              </div>
            </div>

            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActivePage(item);
                    setSelectedService(null);
                  }}
                  className={`relative text-gray-700 font-semibold transition duration-300 hover:text-pink-500 group ${activePage === item ? "text-pink-500" : ""}`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 transform transition-all duration-300 ${activePage === item ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  ></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl transition duration-300 hover:scale-105 items-center gap-2">
                <Calendar size={16} /> Book Appointment
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t mt-2 animate-fadeIn">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActivePage(item);
                    setSelectedService(null);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 text-gray-700 hover:text-pink-500 transition font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
              <button className="w-full mt-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-5 py-3 rounded-xl text-sm font-bold">
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>{renderContent()}</main>

      {/* FOOTER (only show on non-service pages) */}
      {activePage !== "ServiceDetail" && (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-xl">
                    <HeartPulse size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Shreeji Hospital & Maternity Home
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Best Maternity & IVF Hospital in Ahmedabad providing quality
                  healthcare since 2014.
                </p>
                <div className="flex gap-3 mt-5">
                  <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.15 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.87 3.77-3.87 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22c4.78-.78 8.44-4.92 8.44-9.93z" />
                    </svg>
                  </div>
                  <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                  </div>

                  {/* Twitter */}
                  <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 5.92c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.79a4.27 4.27 0 001.32 5.71 4.25 4.25 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54 12.14 12.14 0 008.56 21c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0022 5.92z" />
                    </svg>
                  </div>

                  {/* YouTube */}
                  <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-pink-500 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.9 3.5 12 3.5 12 3.5s-7.9 0-9.5.7a2.9 2.9 0 00-2 2C0 7.8 0 12 0 12s0 4.2.5 5.8a2.9 2.9 0 002 2c1.6.7 9.5.7 9.5.7s7.9 0 9.5-.7a2.9 2.9 0 002-2c.5-1.6.5-5.8.5-5.8s0-4.2-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-5 text-lg">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          setActivePage(item);
                          setSelectedService(null);
                        }}
                        className="hover:text-pink-400 transition flex items-center gap-2"
                      >
                        <ChevronRight size={14} /> {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-5 text-lg">
                  Our Services
                </h3>
                <ul className="space-y-3 text-sm">
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="hover:text-pink-400 transition flex items-center gap-2"
                      >
                        <ChevronRight size={14} /> {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-5 text-lg">
                  Contact Info
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-pink-400"
                    />
                    <span>2 ND FLOOR, opp. GVJ HIGH SCHOOL, near by BUS DEPO GOLAI, Daglawa, Khambhalia, Gujarat 361305, India</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-pink-400" />
                    <span>+91 99240 50939</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-pink-400" />
                    <span>info@shreejihospital.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock size={18} className="text-pink-400" />
                    <span>24/7 Emergency Services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
              <p>
                &copy; 2024 Shreeji Hospital & Maternity Home ,Jamkhambhaliya. All rights
                reserved. 
              </p>
            </div>
          </div>
        </footer>
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance.",
      features: [
        "React, Next.js, & Laravel",
        "Full-stack Solutions",
        "API Integration",
        "Performance Optimization",
      ],
      category: "development",
      price: "From $600 - $2,500 USD",
      duration: "2-8 weeks",
      gradient: "from-blue-500 to-cyan-500",
    },
    // {
    //   id: 2,
    //   icon: Smartphone,
    //   title: "Mobile App Development",
    //   description:
    //     "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    //   features: [
    //     "iOS & Android",
    //     "React Native",
    //     "App Store Optimization",
    //     "Push Notifications",
    //   ],
    //   category: "development",
    //   price: "From $5,000",
    //   duration: "4-12 weeks",
    //   gradient: "from-purple-500 to-pink-500",
    // },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that captivate users and drive conversions through thoughtful user experience.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      category: "design",
      price: "From $61.64 ",
      duration: "1-4 weeks",
      gradient: "from-orange-500 to-red-500",
    },
    // {
    //   id: 4,
    //   icon: Globe,
    //   title: "Digital Marketing",
    //   description:
    //     "Comprehensive digital marketing strategies that boost your online presence and drive meaningful growth.",
    //   features: [
    //     "SEO Optimization",
    //     "Social Media",
    //     "Content Strategy",
    //     "Analytics",
    //   ],
    //   category: "marketing",
    //   price: "From $800/mo",
    //   duration: "Ongoing",
    //   gradient: "from-green-500 to-emerald-500",
    // },
    {
      id: 5,
      icon: Database,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and data management solutions for modern business needs.",
      features: [
        "AWS/Azure Setup",
        "Database Design",
        "Auto Scaling",
        "Backup Solutions",
      ],
      category: "development",
      price: "From $300",
      duration: "1-3 weeks",
      gradient: "from-indigo-500 to-purple-500",
    },
    // {
    //   id: 6,
    //   icon: Shield,
    //   title: "Cybersecurity",
    //   description:
    //     "Comprehensive security audits and implementation of robust protection measures for your digital assets.",
    //   features: [
    //     "Security Audits",
    //     "Penetration Testing",
    //     "Compliance",
    //     "Monitoring",
    //   ],
    //   category: "security",
    //   price: "From $2,000",
    //   duration: "2-6 weeks",
    //   gradient: "from-red-500 to-orange-500",
    // },
  ];

  const categories = [
    { id: "all", name: "All Services", count: services.length },
    {
      id: "development",
      name: "Development",
      count: services.filter((s) => s.category === "development").length,
    },
    {
      id: "design",
      name: "Design",
      count: services.filter((s) => s.category === "design").length,
    },
    {
      id: "marketing",
      name: "Marketing",
      count: services.filter((s) => s.category === "marketing").length,
    },
    {
      id: "security",
      name: "Security",
      count: services.filter((s) => s.category === "security").length,
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const stats = [
    { icon: Users, value: "12+", label: "Happy Clients" },
    { icon: Zap, value: "2+", label: "Projects Completed" },
    { icon: Star, value: "99%", label: "Satisfaction Rate" },
    // { icon: Globe, value: "50+", label: "Countries Served" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div> */}
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/80 text-sm font-medium">
              Premium Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that elevate your business to new
            heights. From concept to deployment, we're your trusted partner in
            digital transformation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mb-4 group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 border border-white/20"
              }`}
            >
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-white/60 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing & Duration */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div>
                    <div className="text-white/50">Starting at</div>
                    <div className="text-cyan-400 font-bold text-lg">
                      {service.price}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/50">Timeline</div>
                    <div className="text-white font-medium">
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Hover Overlay Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;

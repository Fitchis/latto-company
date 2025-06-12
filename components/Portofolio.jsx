"use client";

import React, { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Latihin.AI",
      description:
        "Platform pembelajaran adaptif menggunakan AI untuk latihan Interview",
      category: "ai",
      image: "/api/placeholder/400/300",
      tech: ["Next", "Drizzle", "Neon", "Gemini API", "Node.js"],
      status: "Development",
      link: "#",
    },
    // {
    //   id: 2,
    //   title: "Smart Analytics Dashboard",
    //   description:
    //     "Dashboard analitik real-time untuk monitoring performa bisnis",
    //   category: "web",
    //   image: "/api/placeholder/400/300",
    //   tech: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    //   status: "Live",
    //   link: "#",
    // },
    // {
    //   id: 3,
    //   title: "Mobile Learning App",
    //   description:
    //     "Aplikasi mobile untuk pembelajaran interaktif dengan gamifikasi",
    //   category: "mobile",
    //   image: "/api/placeholder/400/300",
    //   tech: ["React Native", "Firebase", "Redux", "Expo"],
    //   status: "Development",
    //   link: "#",
    // },
    {
      id: 4,
      title: "Chatbot Customer Service",
      description: "AI chatbot untuk layanan pelanggan 24/7 dengan NLP",
      category: "ai",
      image: "/api/placeholder/400/300",
      tech: ["React JS", "Gemini AI", "FastAPI"],
      status: "Development",
      link: "#",
    },
    // {
    //   id: 5,
    //   title: "E-Commerce Platform",
    //   description: "Platform e-commerce dengan fitur AI recommendation engine",
    //   category: "web",
    //   image: "/api/placeholder/400/300",
    //   tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
    //   status: "Live",
    //   link: "#",
    // },
    // {
    //   id: 6,
    //   title: "IoT Monitoring System",
    //   description: "Sistem monitoring IoT untuk smart building management",
    //   category: "iot",
    //   image: "/api/placeholder/400/300",
    //   tech: ["Arduino", "MQTT", "InfluxDB", "Grafana"],
    //   status: "Development",
    //   link: "#",
    // },
  ];

  const categories = [
    { id: "all", label: "Semua Project", count: portfolioItems.length },
    {
      id: "ai",
      label: "AI & ML",
      count: portfolioItems.filter((item) => item.category === "ai").length,
    },
    {
      id: "web",
      label: "Web Development",
      count: portfolioItems.filter((item) => item.category === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile App",
      count: portfolioItems.filter((item) => item.category === "mobile").length,
    },
    {
      id: "iot",
      label: "IoT Solutions",
      count: portfolioItems.filter((item) => item.category === "iot").length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portofolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Portfolio Kami
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Koleksi project terbaik kami yang menghadirkan solusi teknologi
            inovatif untuk berbagai industri dan kebutuhan bisnis modern
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-purple-500"
              }`}
            >
              <span className="relative z-10">
                {category.label}
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              </span>
              {activeFilter === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30"></div>
              )}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm">Project Preview</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-semibold">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .grid > div:nth-child(1) {
          animation-delay: 0.1s;
        }
        .grid > div:nth-child(2) {
          animation-delay: 0.2s;
        }
        .grid > div:nth-child(3) {
          animation-delay: 0.3s;
        }
        .grid > div:nth-child(4) {
          animation-delay: 0.4s;
        }
        .grid > div:nth-child(5) {
          animation-delay: 0.5s;
        }
        .grid > div:nth-child(6) {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}

export default Portfolio;

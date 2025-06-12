"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { number: "2+", label: "Project Selesai", icon: "🚀" },
    { number: "12+", label: "Client Terpuaskan", icon: "⭐" },
    { number: "1+", label: "Tahun Pengalaman", icon: "📈" },
    { number: "100%", label: "Kepuasan Client", icon: "💯" },
  ];

  const values = [
    {
      icon: "🧠",
      title: "Inovasi AI",
      description:
        "Mengintegrasikan kecerdasan buatan dalam setiap solusi untuk memberikan nilai tambah yang signifikan",
    },
    {
      icon: "⚡",
      title: "Teknologi Terdepan",
      description:
        "Menggunakan teknologi cutting-edge untuk membangun solusi yang scalable dan future-proof",
    },
    {
      icon: "🎯",
      title: "Fokus Hasil",
      description:
        "Berorientasi pada hasil nyata yang measurable dan memberikan ROI yang tinggi bagi klien",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "Membangun hubungan jangka panjang dengan klien sebagai partner teknologi terpercaya",
    },
  ];

  const technologies = [
    {
      name: "Artificial Intelligence",
      level: 68,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Machine Learning",
      level: 52,
      color: "from-purple-500 to-pink-500",
    },
    { name: "Web Development", level: 89, color: "from-green-500 to-teal-500" },
    {
      name: "Mobile Development",
      level: 50,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Cloud Computing",
      level: 57,
      color: "from-indigo-500 to-purple-500",
    },
    // { name: "Data Analytics", level: 92, color: "from-pink-500 to-rose-500" },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Founding",
      description:
        "Latto didirikan dengan visi menghadirkan solusi AI terjangkau",
    },
    {
      year: "2025",
      title: "First AI Product",
      description:
        "Meluncurkan Latihin.AI sebagai platform pembelajaran adaptif",
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Memperluas layanan ke enterprise solutions dan consulting",
    },
    {
      year: "2025",
      title: "Growth",
      description: "Mencapai 2+ project dan membangun tim teknologi terbaik",
    },
  ];

  const tabs = [
    { id: "story", label: "Cerita Kami", icon: "📖" },
    { id: "values", label: "Nilai & Prinsip", icon: "💎" },
    { id: "tech", label: "Teknologi", icon: "⚙️" },
    { id: "timeline", label: "Perjalanan", icon: "🗓️" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Tentang Latto
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Perusahaan teknologi yang berdedikasi menghadirkan solusi AI dan
            digital transformation untuk membantu bisnis berkembang di era
            digital
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-purple-500"
              }`}
            >
              <span className="relative z-10">
                {tab.icon} {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          {/* Story Tab */}
          {activeTab === "story" && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Membangun Masa Depan dengan
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {" "}
                      AI
                    </span>
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Latto lahir dari visi sederhana namun ambisius: membuat
                      teknologi AI yang canggih dapat diakses oleh semua
                      kalangan bisnis, dari startup hingga enterprise.
                    </p>
                    <p>
                      Dengan brand unggulan{" "}
                      <strong className="text-purple-400">Latihin.AI</strong>,
                      kami menghadirkan platform pembelajaran adaptif yang
                      menggunakan machine learning untuk personalisasi
                      pengalaman belajar setiap individu.
                    </p>
                    <p>
                      Tim kami terdiri dari para ahli teknologi, AI engineers,
                      dan business strategists yang berpengalaman membangun
                      solusi scalable untuk berbagai industri.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
                  <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">L</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        Misi Kami
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        "Democratizing AI technology untuk memberdayakan setiap
                        bisnis dalam menghadapi tantangan digital
                        transformation"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Values Tab */}
          {activeTab === "values" && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === "tech" && (
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Keahlian Teknologi Kami
                  </h3>
                  <p className="text-gray-400">
                    Teknologi cutting-edge yang kami kuasai untuk membangun
                    solusi terbaik
                  </p>
                </div>
                {technologies.map((tech, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">
                        {tech.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${tech.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                      <div className="ml-16 group">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                          <div className="flex items-center mb-3">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                              {milestone.year}
                            </span>
                            <h4 className="text-xl font-bold text-white">
                              {milestone.title}
                            </h4>
                          </div>
                          <p className="text-gray-400">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap Berkolaborasi dengan Kami?
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Mari berdiskusi bagaimana teknologi AI dapat mengakselerasi
                pertumbuhan bisnis Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#portofolio">
                  <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
                    Lihat Portfolio
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

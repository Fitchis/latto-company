"use client";

import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portofolio";
import Team from "../components/Team";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 sm:px-20 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Latto
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-4 font-light">
              Perusahaan Teknologi dengan Brand{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Latihin.Ai
              </span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Membangun masa depan dengan teknologi AI yang inovatif dan solusi
              digital yang mengubah cara kerja bisnis modern
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500">
                <span className="relative z-10">Jelajahi Layanan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-2xl hover:border-purple-400 hover:text-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                Lihat Portfolio
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Section Wrapper */}
        <div className="space-y-32 py-20">
          {/* About Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative z-10 px-8 sm:px-20">
              <About />
            </div>
          </section>

          {/* Services Section */}
          <section className="px-8 sm:px-20">
            <Services />
          </section>

          {/* Portfolio Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-purple-500/5 to-pink-500/5 rounded-3xl"></div>
            <div className="relative z-10 px-8 sm:px-20">
              <Portfolio />
            </div>
          </section>

          {/* Team Section */}
          <section className="px-8 sm:px-20">
            <Team />
          </section>

          {/* FAQ Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-3xl"></div>
            <div className="relative z-10 px-8 sm:px-20">
              <FAQ />
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-8 sm:px-20">
            <Contact />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-32 py-16 px-8 sm:px-20 border-t border-gray-800">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Latto
            </h3>
            <p className="text-gray-400">
              Inovasi teknologi untuk masa depan yang lebih baik
            </p>
          </div>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            &copy; 2025 Latto. All rights reserved. | Dibuat dengan ❤️ untuk
            masa depan teknologi
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}

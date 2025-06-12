"use client";

import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portofolio";
import Team from "../components/Team";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Advanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-pink-600/20"></div>

          {/* Animated Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/25 rounded-full mix-blend-multiply filter blur-2xl animate-float-delayed"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/15 rounded-full mix-blend-multiply filter blur-2xl animate-float-reverse"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-pink-400/50 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-indigo-400/70 rounded-full animate-ping delay-3000"></div>
        </div>

        {/* Interactive Mouse Tracking Background */}
        <div className="absolute inset-0 opacity-30" id="mouse-tracker">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-transform duration-1000 ease-out"
            id="mouse-glow"
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 sm:px-20 text-center">
          <div className="animate-fade-in-up">
            {/* Logo Section */}
            <div className="mb-8 group">
              <div className="relative inline-block">
                {/* Logo Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110 z-0"></div>

                {/* Logo Container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 z-10">
                  {/* Animated Borders */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-24 h-24 rounded-full border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow"></div>
                    <div className="absolute w-20 h-20 rounded-full border-2 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-spin-reverse"></div>
                  </div>

                  {/* Logo Image */}
                  <img
                    src="/images/logo/Latto.png"
                    alt="Logo"
                    className="relative w-24 h-24 mx-auto rounded-3xl object-cover z-10"
                  />
                </div>

                {/* Logo Label */}
                <div className="mt-4 text-sm text-gray-400 font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  LATTO TECH
                </div>
              </div>
            </div>

            {/* Main Title with Enhanced Effects */}
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x relative z-10">
                Latto
              </h1>

              {/* Title Glow Effect */}
              <div className="absolute inset-0 text-6xl sm:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>

              {/* Floating Letters Effect */}
              <div className="absolute -top-4 -right-4 text-blue-400/30 text-2xl animate-bounce delay-100">
                ✦
              </div>
              <div className="absolute -top-6 -left-6 text-purple-400/30 text-xl animate-bounce delay-300">
                ★
              </div>
              <div className="absolute -bottom-2 left-1/2 text-pink-400/30 text-lg animate-bounce delay-500">
                ◆
              </div>
            </div>

            {/* Animated Divider */}
            <div className="relative mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              <div className="absolute inset-0 h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -left-2 top-1/2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -right-2 top-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 mb-12">
              <div className="text-2xl sm:text-3xl text-gray-300 font-light">
                Perusahaan Teknologi dengan Brand{" "}
                <div className="relative inline-block font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Latihin.Ai
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
                </div>
              </div>
              <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                <span className="inline-block animate-fade-in-up delay-100">
                  Membangun masa depan dengan teknologi AI yang inovatif
                </span>
                <span className="inline-block animate-fade-in-up delay-200">
                  {" "}
                  dan solusi digital yang mengubah
                </span>
                <span className="inline-block animate-fade-in-up delay-300">
                  {" "}
                  cara kerja bisnis modern
                </span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col pb-26 sm:flex-row gap-6 justify-center items-center">
              <Link href="#portofolio">
                <button className="group relative px-10 py-5 border-2 border-gray-500 text-gray-300 font-bold rounded-2xl hover:border-purple-400 hover:text-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Lihat Portfolio
                    <div className="w-0 h-0.5 bg-purple-400 group-hover:w-6 transition-all duration-300"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <div className="group cursor-pointer">
              <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300 relative overflow-hidden">
                <div className="w-1.5 h-4 bg-gradient-to-b from-gray-400 to-transparent rounded-full mt-3 animate-scroll group-hover:from-purple-400"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-xs text-gray-500 mt-2 group-hover:text-purple-400 transition-colors duration-300 text-center">
                Scroll
              </div>
            </div>
          </div>
        </div>

        {/* Interactive JavaScript */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      document.addEventListener('mousemove', (e) => {
        const mouseGlow = document.getElementById('mouse-glow');
        if (mouseGlow) {
          const x = e.clientX;
          const y = e.clientY;
          mouseGlow.style.transform = \`translate(\${x - 192}px, \${y - 192}px)\`;
        }
      });
    `,
          }}
        />
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Section Wrapper */}
        <div className="space-y-2">
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
      <footer className="relative z-10 mt-32 py-10 px-8 sm:px-20 border-t border-gray-800">
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

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(-1deg);
          }
          66% {
            transform: translateY(-25px) rotate(1deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(2deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes orbit-reverse {
          0% {
            transform: rotate(360deg) translateX(45px) rotate(0deg);
          }
          100% {
            transform: rotate(0deg) translateX(45px) rotate(360deg);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 6s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-2000 {
          animation-delay: 2000ms;
        }
        .delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </div>
  );
}

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function Faq() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "Apa itu Latto?",
      answer:
        "Latto adalah perusahaan teknologi yang menyediakan layanan pengembangan website, aplikasi, dan solusi digital lainnya untuk bisnis. Kami berkomitmen memberikan solusi teknologi terbaik untuk membantu bisnis Anda berkembang di era digital.",
    },
    {
      question: "Apa itu Latihin.Ai?",
      answer:
        "Latihin.Ai adalah brand dari Latto yang berfokus pada solusi kecerdasan buatan untuk bisnis dan pendidikan. Platform ini menyediakan tools AI yang mudah digunakan untuk meningkatkan produktivitas dan efisiensi kerja.",
    },
    {
      question: "Bagaimana cara menghubungi Latto?",
      answer: (
        <span>
          Anda dapat menghubungi kami melalui berbagai cara: Email di{" "}
          <a
            href="mailto:info@latto.com"
            className="text-purple-400 hover:text-pink-400 underline transition-colors duration-300"
          >
            info@latto.com
          </a>
          , WhatsApp, atau form kontak di website kami. Tim support kami siap
          membantu Anda 24/7.
        </span>
      ),
    },
    {
      question: "Apakah Latto menerima proyek custom?",
      answer:
        "Ya, kami menerima pengembangan website, aplikasi, dan solusi digital sesuai kebutuhan bisnis Anda. Tim developer berpengalaman kami siap membantu mewujudkan ide digital Anda menjadi kenyataan.",
    },
    {
      question: "Berapa lama waktu pengerjaan proyek?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website sederhana biasanya 1-2 minggu, aplikasi mobile 1-3 bulan, dan sistem enterprise 3-6 bulan. Kami akan memberikan timeline yang jelas setelah analisis kebutuhan.",
    },
    {
      question: "Apakah ada layanan maintenance setelah proyek selesai?",
      answer:
        "Tentu! Kami menyediakan layanan maintenance dan support berkelanjutan untuk memastikan website atau aplikasi Anda selalu berjalan optimal. Paket maintenance tersedia dengan berbagai pilihan sesuai kebutuhan.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-transparent">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
            <MessageCircle className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Berikut adalah beberapa pertanyaan yang sering diajukan tentang
            Latto dan brand Latihin.Ai. Tidak menemukan jawaban yang Anda cari?
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors duration-300 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-6 h-6 text-purple-400 transform transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transform transition-all duration-300" />
                    )}
                  </div>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4"></div>
                  <div className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Masih Ada{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pertanyaan?
                </span>
              </h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Tim support kami siap membantu Anda. Jangan ragu untuk
                menghubungi kami kapan saja.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:info@latto.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Support
                </a>

                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:border-purple-400 hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

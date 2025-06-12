import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@latto.com",
      link: "mailto:info@latto.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      value: "+62 21 1234 5678",
      link: "tel:+622112345678",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      value: "Jl. Sudirman No. 123, Jakarta Pusat",
      link: "#",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      value: "Senin - Jumat, 09:00 - 18:00 WIB",
      link: "#",
    },
  ];

  return (
    <section className="py-2 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
            <MessageSquare className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Hubungi{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kami
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hubungi Latto untuk konsultasi, kerja sama, atau pertanyaan seputar
            layanan dan brand Latihin.Ai. Tim kami siap membantu mewujudkan visi
            digital Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Kirim Pesan
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-300">
                    Terima kasih, kami akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-white">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                        placeholder="Masukkan nama lengkap"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                        placeholder="email@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-white">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300"
                      placeholder="Tentang apa pesan ini?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-white">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                        <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {info.title}
                        </h3>
                        {info.link && info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-slate-300 hover:text-purple-400 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Hubungi Langsung
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:info@latto.com"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-3 hover:border-purple-400 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                    <span className="text-white group-hover:text-purple-300">
                      Email Support
                    </span>
                  </a>

                  <a
                    href="https://wa.me/622112345678"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-3 hover:border-green-400 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                    <span className="text-white group-hover:text-green-300">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

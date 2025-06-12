import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 10+ years in tech innovation and startup growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@company.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack architect passionate about scalable solutions and emerging tech.",
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@company.com",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user-centered design and brand innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@company.com",
      },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Senior developer with expertise in React, Node.js, and cloud architecture.",
      social: {
        github: "#",
        linkedin: "#",
        email: "david@company.com",
      },
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      bio: "Strategic marketer driving growth through data-driven campaigns and partnerships.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@company.com",
      },
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist with a track record of launching successful digital products.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@company.com",
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full mb-6 border border-purple-500/30">
            <span className="text-2xl">👥</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate innovators, creative thinkers, and problem solvers
            working together to build the future. Our diverse team brings unique
            perspectives and expertise to every challenge.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

              {/* Card Content */}
              <div className="relative p-8 z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-400/40 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-2 right-1/2 transform translate-x-6 w-6 h-6 bg-green-400 border-4 border-slate-900 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold text-sm uppercase tracking-wide mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/10 hover:bg-purple-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-purple-400"
                    >
                      <Linkedin className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white/10 hover:bg-pink-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-pink-400"
                    >
                      <Twitter className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-white/10 hover:bg-slate-700 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-slate-400"
                    >
                      <Github className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/10 hover:bg-emerald-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-emerald-400"
                    >
                      <Mail className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </a>
                  )}
                </div>

                {/* Hover Effect Indicator */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                    hoveredMember === member.id
                      ? "bg-purple-400 scale-100 shadow-lg shadow-purple-400/50"
                      : "bg-white/20 scale-75"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

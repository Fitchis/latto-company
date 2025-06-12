import React, { useState } from "react";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";
import Link from "next/link";

function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dimas Yudha Rahmattulloh",
      role: "CEO & Founder",
      image: "./images/dimas.jpg?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with a decade of experience spearheading technological innovation and fostering startup expansion. Dimas is committed to driving the company's strategic vision and achieving sustainable growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@company.com",
      },
    },
    {
      id: 2,
      name: "A.Luthfi Mohammad Abdillah A",
      role: "CTO",
      image: "./images/lupi.jpg?w=400&h=400&fit=crop&crop=face",
      bio: "A highly skilled full-stack architect, Luthfi specializes in crafting scalable and robust solutions while staying at the forefront of emerging technologies. His expertise ensures the development of cutting-edge and efficient systems.",
      social: {
        linkedin: "www.linkedin.com/in/andilthfi",
        github: "https://github.com/Fitchis",
        email: "andilthfi@gmail.com",
      },
    },
    {
      id: 3,
      name: "Fuad Ramdhan Nugroho",
      role: "COO",
      image: "./images/fuadd.jpg?w=400&h=400&fit=crop&crop=face",
      bio: "As Chief Operating Officer, Fuad orchestrates seamless operations and maximizes efficiency across all departments. His focus on strategic planning and operational excellence ensures smooth execution and optimal performance.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@company.com",
      },
    },
    {
      id: 4,
      name: "Haydar Thoriq Abdullah",
      role: "CMO",
      image: "./images/haydar.jpg?w=400&h=400&fit=crop&crop=face",
      bio: "Haydar, our Chief Marketing Officer, is a strategic powerhouse adept at driving impactful marketing campaigns and forging strong partnerships. He leverages data-driven insights to expand market reach and brand visibility.",
      social: {
        github: "#",
        linkedin: "#",
        email: "david@company.com",
      },
    },
    {
      id: 5,
      name: "Muhammad Faiz Albar",
      role: "CFO",
      image: "./images/faiz.jpg?w=400&h=400&fit=crop&crop=face",
      bio: "Muhammad Faiz, the Chief Financial Officer, brings strong financial acumen and strategic oversight to ensure fiscal health and sustainable growth. He manages financial planning, analysis, and reporting to support key business decisions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@company.com",
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
                    <Link
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white/10 hover:bg-purple-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-purple-400"
                    >
                      <Linkedin className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white/10 hover:bg-pink-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-pink-400"
                    >
                      <Twitter className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </Link>
                  )}
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      className="w-10 h-10 bg-white/10 hover:bg-slate-700 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-slate-400"
                    >
                      <Github className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </Link>
                  )}
                  {member.social.email && (
                    <Link
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white/10 hover:bg-emerald-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group/social border border-white/20 hover:border-emerald-400"
                    >
                      <Mail className="w-5 h-5 text-slate-300 group-hover/social:text-white transition-colors duration-300" />
                    </Link>
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

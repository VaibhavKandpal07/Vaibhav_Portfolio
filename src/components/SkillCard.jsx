import React from 'react';
const SkillCard = ({ title, skills }) => {
  return (
      
    <div className="relative bg-white/10 translucency border border-white/30 rounded-2xl p-6 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,255,0.1)] hover:scale-[1.100] group">
      <h2 className="text-xl text-cyan-300 font-semibold mb-6 text-center">{title}</h2>

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl flex flex-col items-center justify-center shadow-inner
                       transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]"
          >
            <div className="text-3xl text-cyan-200 mb-1 group-hover:animate-rotate-fast">{skill.icon}</div>
            <p className="text-sm text-gray-300 text-center">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

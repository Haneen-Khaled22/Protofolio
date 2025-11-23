import React, { useState } from 'react'
import { cn } from './../../lib/utils';
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiBootstrap,
  SiPostman,

} from "react-icons/si";

import mui from '../../assets/mui icon.png'

function Skills() {
    const [activeCategory,setActiveCategory] = useState("all");

 const skills = [
  // Frontend
  { name: "HTML", icon: SiHtml5, color: "#E44D26", category: "frontend" },
  { name: "CSS", icon: SiCss3, color: "#264DE4", category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "frontend" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", category: "ui" },
   { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "ui" },
   { name: "MUI", icon: null, color: "#007FFF", category: "ui" },
   
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "tools" },

   
 
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  

  // Backend
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "backend" },

  // Tools
  { name: "Git", icon: SiGit, color: "#F05032", category: "tools" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "tools" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "tools" },
//{ name: "VS Code", icon: SiVisualStudioCode, color: "#007ACC", category: "tools" },
];


const categories = ["all", "frontend", "backend", "tools","ui"];

 const filteredSkills = skills.filter((skill)=> skill.category === activeCategory || activeCategory === "all");
    return (
       <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className='max-w-5xl mx-auto container'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>
            <div className='    flex justify-center mb-8 gap-4 flex-wrap'>
                 {categories.map((category,key)=>
            <button
            key={key}
            onClick={()=>setActiveCategory(category)}
            className={cn( "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
             activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary")}>
                {category}
            </button>
            )}

            </div>
           
   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
  {filteredSkills.map((skill, key) => {
  return (
    <div
      key={key}
      className="flex flex-col items-center p-4 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all"
    >
      {skill.name === "MUI" ? (
        <img src={mui} alt="MUI" className="w-12 h-12 mb-2" />
      ) : (
        <skill.icon className="w-10 h-10 mb-2" style={{ color: skill.color }} />
      )}
      <p className="font-medium">{skill.name}</p>
    </div>
  );
})}

</div>







        </div>

       </section>
    )
}

export default Skills

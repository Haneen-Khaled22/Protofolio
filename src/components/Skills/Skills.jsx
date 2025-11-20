import React, { useState } from 'react'
import { cn } from './../../lib/utils';

function Skills() {
    const [activeCategory,setActiveCategory] = useState("all");

   
    const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Backend
  { name: "Supabase", level: 75, category: "backend" },
 

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
 
  { name: "Figma", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

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
           
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredSkills.map((skill,key)=>
                <div key={key} className='bg-card rounded-lg shadow-xs p-3 card-hover'>
                    <div className='text-left mb-3'>
                        <h3 className='text-xl font-semibold mb-4'> 
                            {skill.name}
                        </h3>
                    </div>
                    <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                    <div className='w-full bg-primary h-2 rounded-full originate-left animate-[grow-1.5s-ease-out]' style={{width: `${skill.level}%`}}
                    
                    />

                    </div>
                    <div className='text-right mb-1'>
                        <span className='text-sm font-medium'>{skill.level}%</span>

                    </div>


                </div>

                )}

            </div>


        </div>

       </section>
    )
}

export default Skills

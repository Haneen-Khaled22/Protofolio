import { Briefcase, Code, Github, Layers, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer 
            </h3>

            <p className="text-muted-foreground">
    With around one year of hands-on experience in front-end development,
    I build responsive, user-friendly interfaces using modern technologies
    like React, JavaScript, and CSS frameworks.
  </p>

  <p className="text-muted-foreground">
    I'm always exploring new tools and best practices to improve performance,
    enhance user experience, and deliver clean, maintainable code.
  </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
               href="CV/CVHaneen.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 cursor-pointer">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
         
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 cursor-pointer">
               <div className="p-3 rounded-full bg-primary/10">
  <Layers className="h-6 w-6 text-primary" />
</div>

<div className="text-left">
  <h4 className="font-semibold text-lg">State Management</h4>
  <p className="text-muted-foreground">
     Managing and organizing application state like using Context API and Redux to
    ensure consistent and scalable UI behavior.
  </p>
</div>

              </div>
            </div>
               <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 cursor-pointer">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Github</h4>
                    Experienced in using GitHub for version control, repository management,
    and collaborative development workflows.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
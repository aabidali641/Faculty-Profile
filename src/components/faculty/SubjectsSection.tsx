import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const subjects = [
  {
    title: "Web Technologies",
    semester: "BCA – 2nd Semester",
    icon: "🌐",
    description:
      "Comprehensive coverage of modern web development including HTML5, CSS3, JavaScript, and responsive design principles. Students learn to build real-world websites and web applications.",
    topics: ["HTML5 & CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Web Standards"],
    hasLab: true,
    labDesc:
      "Web Technologies Laboratory — Hands-on implementation of HTML, CSS, JavaScript, Bootstrap, and related web development technologies.",
  },
  {
    title: "Emerging Trends in Technology",
    semester: "BCA – 1st Semester",
    icon: "🚀",
    description:
      "An exploration of cutting-edge technologies shaping the future of computing and industry. Students gain awareness of modern technological paradigms and their real-world applications.",
    topics: [
      "Internet of Things (IoT)",
      "Cloud Computing",
      "Robotics",
      "Blockchain Technology",
      "Industry 4.0",
    ],
    hasLab: false,
  },
];

const SubjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".subject-card",
        { y: 80, opacity: 0, rotateX: 5 },
        {
          y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.3,
          scrollTrigger: { trigger: ".subject-card", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".topic-chip",
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.4, stagger: 0.06,
          scrollTrigger: { trigger: ".topic-chip", start: "top 85%" },
          ease: "back.out(1.7)",
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary/60 text-xs tracking-[0.3em] uppercase mb-3">
            Curriculum
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Subjects <span className="text-gradient-gold">Taught</span>
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        <div className="space-y-8">
          {subjects.map((subject, idx) => (
            <div
              key={subject.title}
              className="subject-card glass-card-hover hover-lamp hover-glossy hover-tilt rounded-2xl p-6 md:p-10 group"
              style={{
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = `perspective(800px) rotateY(${idx % 2 === 0 ? '-3' : '3'}deg) rotateX(2deg) translateY(-8px) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-[2]">
                <div className="flex-shrink-0 text-5xl md:text-6xl group-hover:scale-125 group-hover:drop-shadow-[0_0_30px_hsl(40,65%,55%,0.5)] transition-all duration-500">{subject.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient-gold transition-all duration-300">
                      {subject.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(40,65%,55%,0.2)] transition-all duration-300 cursor-default">
                      {subject.semester}
                    </span>
                    {subject.hasLab && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono hover:bg-accent/20 hover:shadow-[0_0_15px_hsl(200,60%,45%,0.2)] transition-all duration-300 cursor-default">
                        + Lab
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/60 font-body leading-relaxed mb-5">
                    {subject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {subject.topics.map((topic) => (
                      <span
                        key={topic}
                        className="topic-chip px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-body border border-border hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_20px_hsl(40,65%,55%,0.15)] hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {subject.hasLab && subject.labDesc && (
                    <div className="mt-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:shadow-[0_0_25px_hsl(40,65%,55%,0.1)] transition-all duration-400">
                      <p className="text-sm text-foreground/70 font-body">
                        <span className="text-primary font-semibold">🔬 Laboratory: </span>
                        {subject.labDesc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;

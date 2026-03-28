import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    title: "Web Development Technologies",
    desc: "Strong foundation in HTML, CSS, JavaScript, Bootstrap, and modern web standards with hands-on laboratory experience.",
    icon: "🌐",
    percent: 95,
  },
  {
    title: "Emerging & Modern Technologies",
    desc: "Experience in teaching IoT, Cloud Computing, Robotics, Blockchain, and Industry 4.0 concepts.",
    icon: "🚀",
    percent: 90,
  },
  {
    title: "Institutional Development",
    desc: "Active participation in admission cell, cultural fests, hobby clubs, and various institutional committees.",
    icon: "🏛️",
    percent: 92,
  },
  {
    title: "Student-Centric Learning",
    desc: "Commitment to outcome-based education, mentoring, practical examples, and continuous improvement.",
    icon: "🎓",
    percent: 96,
  },
];

const StrengthsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".strength-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15,
          scrollTrigger: { trigger: ".strength-card", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".strength-bar-fill",
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, stagger: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: ".strength-bar-fill", start: "top 85%" },
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
            Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Professional <span className="text-gradient-gold">Strengths</span>
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {strengths.map((s, idx) => (
            <div
              key={s.title}
              className="strength-card glass-card-hover hover-lamp hover-glossy rounded-2xl p-6 md:p-8 group cursor-default"
              style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', transformStyle: 'preserve-3d' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = `perspective(800px) rotateY(${idx % 2 === 0 ? '-5' : '5'}deg) rotateX(3deg) translateY(-8px) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
              }}
            >
              <div className="flex items-start gap-4 mb-4 relative z-[2]">
                <span className="text-4xl group-hover:scale-125 group-hover:drop-shadow-[0_0_25px_hsl(40,65%,55%,0.5)] transition-all duration-400">{s.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-foreground/60 font-body mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden relative z-[2]">
                <div
                  className="strength-bar-fill h-full rounded-full origin-left group-hover:shadow-[0_0_20px_hsl(40,65%,55%,0.4)] transition-shadow duration-500"
                  style={{
                    width: `${s.percent}%`,
                    background: "linear-gradient(90deg, hsl(40 65% 55%), hsl(45 80% 65%))",
                  }}
                />
              </div>
              <p className="text-right text-xs text-primary/70 font-mono mt-1 relative z-[2]">{s.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;

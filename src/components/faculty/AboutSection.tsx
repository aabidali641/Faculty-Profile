import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { x: -80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: ".about-title", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".about-text",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
          scrollTrigger: { trigger: ".about-text", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".about-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15,
          scrollTrigger: { trigger: ".about-card", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-section relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="font-mono text-primary/60 text-xs tracking-[0.3em] uppercase mb-3 about-title">
              Academic Profile
            </p>
            <h2 className="about-title font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Teaching & <span className="text-gradient-gold">Academic Excellence</span>
            </h2>
            <div className="space-y-5">
              <p className="about-text text-foreground/70 font-body leading-relaxed text-base md:text-lg">
                Aabid Ali is currently working as an <strong className="text-foreground">Assistant Professor</strong> in the Department of Computer Application at <strong className="text-foreground">Meerut Institute of Technology, Meerut</strong>.
              </p>
              <p className="about-text text-foreground/70 font-body leading-relaxed text-base md:text-lg">
                He is actively involved in teaching undergraduate students of the <strong className="text-foreground">Bachelor of Computer Applications (BCA)</strong> programme with a strong focus on conceptual clarity, practical exposure, and industry-oriented learning.
              </p>
              <p className="about-text text-foreground/70 font-body leading-relaxed text-base md:text-lg">
                His teaching philosophy centers around <strong className="text-foreground">outcome-based education (OBE)</strong> and the use of practical examples to enhance student understanding. He encourages students to participate in technical activities, debates, and skill-development programs.
              </p>
            </div>
          </div>

          {/* Right - Stats with tilt + lamp glow */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard number="2+" label="Subjects Taught" icon="📚" tilt="left" />
            <StatCard number="BCA" label="Programme Focus" icon="🎯" tilt="right" />
            <StatCard number="5+" label="Institutional Roles" icon="🏆" tilt="right" />
            <StatCard number="MIT" label="Meerut Institute" icon="🏛️" tilt="left" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, icon, tilt }: { number: string; label: string; icon: string; tilt: "left" | "right" }) => (
  <div className={`about-card glass-card-hover hover-lamp hover-glossy rounded-xl p-6 text-center group cursor-default`}
    style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
    onMouseEnter={(e) => {
      const el = e.currentTarget;
      el.style.transform = `perspective(800px) rotateY(${tilt === 'left' ? '-8' : '8'}deg) rotateX(4deg) translateY(-8px) scale(1.05)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
    }}
  >
    <span className="text-3xl mb-3 block group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_hsl(40,65%,55%,0.5)] transition-all duration-400">{icon}</span>
    <p className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{number}</p>
    <p className="text-sm text-muted-foreground mt-1 font-body group-hover:text-foreground/80 transition-colors duration-300">{label}</p>
  </div>
);

export default AboutSection;

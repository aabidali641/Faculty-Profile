import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConclusionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".conclusion-content",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: ".conclusion-content", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="max-w-4xl mx-auto text-center conclusion-content">
        <p className="font-mono text-primary/60 text-xs tracking-[0.3em] uppercase mb-3">
          Summary
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          In <span className="text-gradient-gold">Conclusion</span>
        </h2>

        <div className="glass-card-hover hover-lamp hover-glossy rounded-2xl p-8 md:p-12 cursor-default"
          style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(800px) rotateX(2deg) translateY(-6px) scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) translateY(0) scale(1)';
          }}
        >
          <p className="text-foreground/70 font-body leading-relaxed text-base md:text-lg mb-6 relative z-[2]">
            The faculty member plays a <strong className="text-foreground">significant role</strong> in both academic delivery and institutional development. As an active member of the <strong className="text-foreground">Admission Cell</strong> and a dedicated <strong className="text-foreground">Admission Counselor</strong>, he contributes effectively to student engagement and enrollment.
          </p>
          <p className="text-foreground/70 font-body leading-relaxed text-base md:text-lg relative z-[2]">
            Along with achieving departmental and institutional objectives through <strong className="text-foreground">teaching excellence</strong> and <strong className="text-foreground">co-curricular involvement</strong>, he continues to inspire and guide students toward a brighter academic and professional future.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <FooterChip icon="🏫" text="Meerut Institute of Technology" />
          <FooterChip icon="📍" text="Meerut, India" />
          <FooterChip icon="💼" text="Dept. of Computer Application" />
        </div>

        <div className="gold-line w-32 mx-auto mt-12" />
        <p className="mt-6 text-xs text-muted-foreground font-mono tracking-wider">
          © {new Date().getFullYear()} • Faculty Profile • Aabid Ali
        </p>
      </div>
    </section>
  );
};

const FooterChip = ({ icon, text }: { icon: string; text: string }) => (
  <div className="glass-card-hover hover-lamp hover-glossy rounded-xl px-6 py-4 text-center cursor-default group hover-bounce">
    <p className="text-2xl mb-1 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_hsl(40,65%,55%,0.5)] transition-all duration-300 relative z-[2]">{icon}</p>
    <p className="text-xs text-muted-foreground font-body group-hover:text-foreground/80 transition-colors duration-300 relative z-[2]">{text}</p>
  </div>
);

export default ConclusionSection;

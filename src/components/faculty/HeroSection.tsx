import { useRef, useEffect } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2 })
        .fromTo(
          nameRef.current,
          { y: 80, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1 },
          "-=0.6"
        )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          detailsRef.current?.children ? Array.from(detailsRef.current.children) : [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        );

      // Floating particles
      if (particlesRef.current) {
        Array.from(particlesRef.current.children).forEach((particle) => {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.1,
          });
          gsap.to(particle, {
            y: `-=${50 + Math.random() * 100}`,
            x: `+=${(Math.random() - 0.5) * 80}`,
            opacity: 0,
            duration: 4 + Math.random() * 4,
            repeat: -1,
            delay: Math.random() * 3,
            ease: "none",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-primary/5 animate-pulse-gold" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] rounded-full border border-accent/5 animate-float" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div ref={lineRef} className="gold-line w-32 mx-auto mb-8 origin-center" />

        <p className="font-mono text-primary/70 tracking-[0.3em] uppercase text-xs mb-6">
          Meerut Institute of Technology
        </p>

        <h1
          ref={nameRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-gold leading-tight mb-6 cursor-default hover:drop-shadow-[0_0_40px_hsl(40,65%,55%,0.4)] transition-all duration-500"
        >
          Aabid Ali
        </h1>

        <div ref={titleRef} className="mb-10">
          <p className="text-xl md:text-2xl font-body font-light text-foreground/80 tracking-wide">
            Assistant Professor
          </p>
          <p className="text-base md:text-lg font-body text-muted-foreground mt-2">
            Department of Computer Application
          </p>
        </div>

        <div ref={detailsRef} className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <InfoChip icon="🎓" text="BCA Programme" />
          <InfoChip icon="💻" text="Web Technologies" />
          <InfoChip icon="🚀" text="Emerging Tech" />
          <InfoChip icon="🏫" text="MIT Meerut" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-pulse-gold" />
        </div>
      </div>
    </section>
  );
};

const InfoChip = ({ icon, text }: { icon: string; text: string }) => (
  <div className="glass-card-hover hover-lamp hover-glossy px-5 py-2.5 rounded-full flex items-center gap-2 text-sm text-foreground/80 cursor-default group">
    <span className="group-hover:scale-125 transition-transform duration-300">{icon}</span>
    <span className="font-body group-hover:text-primary transition-colors duration-300">{text}</span>
  </div>
);

export default HeroSection;

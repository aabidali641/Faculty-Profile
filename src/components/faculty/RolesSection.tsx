import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    title: "Coordinator, Hobby Club Team",
    icon: "🎨",
    details: [
      "Organized Collage Competition at B Block Seminar Hall",
      "Waste to Energy — Faculty & Students Development Program",
      "Slogan Writing Competition at B Block Seminar Hall",
    ],
  },
  {
    title: "Member, CodeTantra Team",
    icon: "💻",
    details: [
      "Assisted students in solving programming problems on CodeTantra platform",
      "Provided guidance in Java and C programming concepts and coding practices",
      "Helped students debug code and improve problem-solving skills",
      "Actively supported lab sessions and hands-on coding activities",
    ],
  },
  {
    title: "Member, Project Development Team",
    icon: "🛠️",
    details: [
      "Supervised final year BCA student project submissions and evaluations",
      "Conducted project viva sessions to assess technical understanding",
      "Reviewed project documentation including reports and project files",
      "Guided students in improving project quality and technical implementation",
    ],
  },
  {
    title: "Admission Counselor (BCA)",
    icon: "🎯",
    details: [
      "Academic counseling to prospective students",
      "Guiding students & parents on course structure and career opportunities",
      "Key role in student admissions and enrollment process",
      "Information about institutional facilities",
    ],
  },
  {
    title: "Mridang (Annual Cultural Fest) Team",
    icon: "🎭",
    details: [
      "Coordinated prize distribution and ensured smooth execution",
      "Organized fun games and cultural activities",
      "Collaborated with team for effective event management",
      "Ensured active student participation and engagement",
    ],
  },
  {
    title: "Debate Competition Coordinator & Judge",
icon: "🗣️",
details: [
  "Coordinated and managed debate competition activities",
  "Served as a judge, evaluating participants’ performance",
  "Ensured smooth execution of the event",
  "Organized under the guidance of Ms. Suchitra Pal (Soft Skills Development Trainer)"
]
  },
];

const RolesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".role-card",
        { x: (i) => (i % 2 === 0 ? -60 : 60), opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.12,
          scrollTrigger: { trigger: ".role-card", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-section relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-primary/60 text-xs tracking-[0.3em] uppercase mb-3">
            Responsibilities
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Institutional <span className="text-gradient-gold">Roles</span>
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((role, idx) => (
            <RoleCard key={role.title} role={role} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const RoleCard = ({ role, idx }: { role: typeof roles[0]; idx: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="role-card hover-flip-container cursor-pointer"
      style={{ perspective: '1200px', minHeight: '220px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: '220px',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card-hover hover-lamp rounded-2xl p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-5xl mb-4 drop-shadow-[0_0_20px_hsl(40,65%,55%,0.3)]">
            {role.icon}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            {role.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-2 font-mono">Hover to see details →</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: 'hsl(40 65% 55% / 0.3)',
            boxShadow: '0 0 40px hsl(40 65% 55% / 0.1), inset 0 1px 0 hsl(40 65% 55% / 0.15)',
          }}
        >
          <h3 className="font-display text-base font-semibold text-gradient-gold mb-3">
            {role.icon} {role.title}
          </h3>
          <ul className="space-y-2">
            {role.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/70 font-body">
                <span className="glow-dot mt-1.5 flex-shrink-0" style={{ width: 6, height: 6 }} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RolesSection;

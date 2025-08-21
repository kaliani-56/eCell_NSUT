import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid1 = ({
  items,
  className = "",
  radius = 200,
  damping = 0.45,
  fadeOut = 0,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    // ... other demo items
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-auto px-4 py-8 flex justify-center bg-transparent ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 z-0">
        {data.map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col w-full max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            style={{
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.2)",
              minHeight: "320px",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex-1 p-3">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-[200px] object-cover rounded-xl"
              />
            </div>
            <footer className="relative z-10 p-4 text-white font-sans">
              <h3 className="m-0 text-lg font-bold mb-1 truncate">{c.title}</h3>
              <p className="m-0 text-sm opacity-90 truncate">{c.subtitle}</p>
              {c.handle && (
                <span className="text-xs opacity-75 mt-1 block truncate">
                  {c.handle}
                </span>
              )}
            </footer>
          </article>
        ))}
      </div>
      
      {/* Interactive overlay effects */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "brightness(0.85)",
          WebkitBackdropFilter: "brightness(0.85)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.1) 35%,rgba(0,0,0,0.3) 55%,rgba(0,0,0,0.6) 75%,rgba(0,0,0,0.9) 95%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.1) 35%,rgba(0,0,0,0.3) 55%,rgba(0,0,0,0.6) 75%,rgba(0,0,0,0.9) 95%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.7)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.7)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.8) 35%,rgba(255,255,255,0.6) 55%,rgba(255,255,255,0.4) 75%,rgba(255,255,255,0.1) 95%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.8) 35%,rgba(255,255,255,0.6) 55%,rgba(255,255,255,0.4) 75%,rgba(255,255,255,0.1) 95%,transparent 100%)",
        }}
      />
    </div>
  );
}

export default ChromaGrid1;

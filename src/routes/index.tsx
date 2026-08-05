import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import coverAsset from "@/assets/cover.png.asset.json";
import authorVisual from "@/assets/author.png.asset.json";
import mapaAsset from "@/assets/mapa-valesthia.png.asset.json";
import saelAsset from "@/assets/sael.png.asset.json";
import dravAsset from "@/assets/drav.png.asset.json";
import marenAsset from "@/assets/maren.png.asset.json";
import yssenAsset from "@/assets/yssen.png.asset.json";

const BUY_URL = "https://www.amazon.es/dp/B0HCX12D31";
const AMAZON_URL = "https://www.amazon.es/dp/B0HCX12D31";

export const Route = createFileRoute("/")({
head: () => ({
  links: [
    {
      rel: "canonical",
      href: "https://www.valesthia.com/",
    },

    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },

    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      href: "/favicon-48x48.png",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png",
    },

    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicon-192x192.png",
    },

    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
    },

    {
      rel: "manifest",
      href: "/site.webmanifest",
    },

    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },

    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },

    // Cuando tengas el SVG
    // {
    //   rel: "mask-icon",
    //   href: "/safari-pinned-tab.svg",
    //   color: "#0b6cff",
    // },
  ],

  meta: [
    {
      title:
        "Valesthia – La luz que duerme | Novela de Fantasía Épica de Samuel Rodríguez Alleres",
    },

    {
      name: "description",
      content:
        "Descubre Valesthia, una novela de fantasía épica donde la magia, la política y los secretos antiguos decidirán el destino de un continente.",
    },

    {
      name: "author",
      content: "Samuel Rodríguez Alleres",
    },

    {
      name: "creator",
      content: "Samuel Rodríguez Alleres",
    },

    {
      name: "publisher",
      content: "Samuel Rodríguez Alleres",
    },

    {
      name: "copyright",
      content: "© Samuel Rodríguez Alleres",
    },

    {
      name: "application-name",
      content: "Valesthia",
    },

    {
      name: "apple-mobile-web-app-title",
      content: "Valesthia",
    },

    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },

    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },

    {
      name: "theme-color",
      content: "#090909",
    },

    {
      name: "color-scheme",
      content: "dark",
    },

    {
      name: "msapplication-TileColor",
      content: "#090909",
    },

    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },

    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },

    {
      name: "googlebot",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },

    {
      name: "referrer",
      content: "strict-origin-when-cross-origin",
    },

    {
      name: "format-detection",
      content: "telephone=no,address=no,email=no",
    },

    {
      property: "og:locale",
      content: "es_ES",
    },

    {
      property: "og:type",
      content: "website",
    },

    {
      property: "og:site_name",
      content: "Valesthia",
    },

    {
      property: "og:url",
      content: "https://www.valesthia.com/",
    },

    {
      property: "og:title",
      content: "Valesthia – La luz que duerme",
    },

    {
      property: "og:description",
      content:
        "Una novela de fantasía épica donde la magia, la política y los secretos antiguos decidirán el destino de un continente.",
    },

    {
      property: "og:image",
      content: "https://www.valesthia.com/img/portadaValesthia.png",
    },

    {
      property: "og:image:secure_url",
      content: "https://www.valesthia.com/img/portadaValesthia.png",
    },

    {
      property: "og:image:type",
      content: "image/png",
    },

    {
      property: "og:image:width",
      content: "1200",
    },

    {
      property: "og:image:height",
      content: "630",
    },

    {
      property: "og:image:alt",
      content: "Portada oficial de Valesthia - La luz que duerme",
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },

    {
      name: "twitter:title",
      content: "Valesthia – La luz que duerme",
    },

    {
      name: "twitter:description",
      content:
        "Una novela de fantasía épica de Samuel Rodríguez Alleres.",
    },

    {
      name: "twitter:image",
      content: "https://www.valesthia.com/img/portadaValesthia.png",
    },

    {
      name: "twitter:image:alt",
      content: "Portada oficial de Valesthia",
    },
  ],
});

/* ============================== Helpers ============================== */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-8 blur-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#C99A39]/70 to-[#F2D27A]" />
      <svg width="42" height="42" viewBox="0 0 42 42" className="text-[#F2D27A]">
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <circle cx="21" cy="21" r="16" opacity="0.5" />
          <circle cx="21" cy="21" r="10" opacity="0.7" />
          <path d="M21 5 L21 37 M5 21 L37 21" opacity="0.35" />
          <path d="M21 9 L25 17 L33 18 L27 24 L28 32 L21 28 L14 32 L15 24 L9 18 L17 17 Z" opacity="0.9" />
        </g>
      </svg>
      <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-[#C99A39]/70 to-[#F2D27A]" />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-[#C99A39]" />
      <span className="font-display text-[10px] uppercase tracking-[0.5em] text-[#C99A39]">
        {children}
      </span>
      <span className="h-px w-8 bg-[#C99A39]" />
    </div>
  );
}

function GoldButton({
  href,
  children,
  primary = false,
  large = false,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
  onClick?: () => void;
}) {
  const cls = `group relative inline-flex items-center gap-3 ${
    large ? "px-12 py-6 text-sm" : "px-8 py-4 text-xs"
  } font-display uppercase tracking-[0.35em] transition-all duration-500 ${
    primary ? "text-[#050608]" : "text-[#F5F2EA] hover:text-[#F2D27A]"
  }`;
  const style = primary
    ? {
        background: "linear-gradient(180deg, #F2D27A 0%, #C99A39 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.4), 0 0 0 1px rgba(242,210,122,0.6), 0 12px 40px rgba(242,210,122,0.35), 0 0 60px rgba(29,108,255,0.35)",
      }
    : {
        background: "linear-gradient(180deg, rgba(9,22,38,0.7), rgba(5,6,8,0.9))",
        boxShadow:
          "inset 0 1px 0 rgba(242,210,122,0.35), 0 0 0 1px rgba(201,154,57,0.5), 0 8px 30px rgba(29,108,255,0.2)",
      };
  const inner = (
    <>
      <span className="pointer-events-none absolute -inset-px">
        <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[#F2D27A]" />
        <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-[#F2D27A]" />
        <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[#F2D27A]" />
        <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#F2D27A]" />
      </span>
      <span className="relative">{children}</span>
      <span className="relative transition-transform duration-500 group-hover:translate-x-1">→</span>
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls} style={style}>
        {inner}
      </button>
    );
  }
  return (
    <a href={href} className={cls} style={style}>
      {inner}
    </a>
  );
}

/* ============================== Layout ============================== */

function Landing() {
  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F2EA] antialiased">
      <MouseGlow />
      <Particles />
      <Nav />
      <main className="relative">
        <Hero />
        <MainPhrase />
        <Synopsis />
        <AboutBook />
        <Features />
        <World />
        <Characters />
        <TheThread />
        <Gallery />
        <BigQuote />
        <Author />
        <Buy />
        <Support />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

/* ============================== Mouse Glow ============================== */

function MouseGlow() {
  const [p, setP] = useState({ x: 0.5, y: 0.3 });
  useEffect(() => {
    const on = (e: MouseEvent) =>
      setP({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{
        background: `radial-gradient(600px circle at ${p.x * 100}% ${p.y * 100}%, rgba(29,108,255,0.10), transparent 60%)`,
        transition: "background 400ms ease",
      }}
    />
  );
}

/* ============================== Golden Particles ============================== */

function Particles() {
  const dots = Array.from({ length: 24 }).map((_, i) => ({
    l: (i * 37) % 100,
    t: (i * 53) % 100,
    d: (i % 6) * 1.4,
    s: 6 + ((i * 3) % 10),
  }));
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: 2,
            height: 2,
            background: "rgba(242,210,122,0.75)",
            boxShadow: "0 0 8px rgba(242,210,122,0.9)",
            animation: `drift ${p.s}s ease-in-out ${p.d}s infinite, twinkle 3.5s ease-in-out ${p.d}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ============================== Nav ============================== */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-night border-b border-[#C99A39]/25 py-3"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-[#F2D27A]">
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="20" cy="20" r="16" opacity="0.4" />
              <path d="M20 5 L28 24 L20 20 L12 24 Z" fill="currentColor" opacity="0.9" />
              <path d="M20 20 L20 35" strokeWidth="1.5" />
            </g>
          </svg>
          <div>
            <div className="font-display text-lg tracking-[0.35em] leading-none text-[#F2D27A]">
              VALESTHIA
            </div>
            <div className="mt-1 font-display text-[9px] uppercase tracking-[0.5em] text-[#C99A39]/70">
              La luz que duerme
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            ["Sinopsis", "#sinopsis"],
            ["Mundo", "#mundo"],
            ["Personajes", "#personajes"],
            ["Autor", "#autor"],
          ].map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="font-display text-[10px] uppercase tracking-[0.35em] text-[#F5F2EA]/70 transition-colors duration-500 hover:text-[#F2D27A]"
            >
              {l}
            </a>
          ))}
        </nav>
        <GoldButton href={BUY_URL} primary>
          Comprar
        </GoldButton>
      </div>
    </header>
  );
}

/* ============================== Hero ============================== */

function Hero() {
  const [mx, setMx] = useState({ x: 0, y: 0 });
  return (
    <section
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setMx({
          x: (e.clientX - r.left) / r.width - 0.5,
          y: (e.clientY - r.top) / r.height - 0.5,
        });
      }}
      className="relative min-h-screen overflow-hidden bg-nebula pt-40 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 stars opacity-90" />
      <div
        className="pointer-events-none absolute inset-0 stars opacity-60 animate-twinkle"
        style={{ backgroundPosition: "40% 60%" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-20 animate-spin-slower" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-30 animate-spin-slow" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/4 h-[140%] w-40 rotate-12 animate-lightray"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(242,210,122,0.15), transparent)",
          }}
        />
        <div
          className="absolute -top-40 right-1/4 h-[140%] w-24 -rotate-6 animate-lightray"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(29,108,255,0.2), transparent)",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <Reveal>
          <Eyebrow>Samuel Rodríguez Alleres · Libro Primero</Eyebrow>
        </Reveal>

        {/* Cover */}
        <Reveal delay={150}>
          <div
            className="relative mt-16 w-full max-w-[520px]"
            style={{
              transform: `perspective(1400px) rotateY(${mx.x * 6}deg) rotateX(${-mx.y * 5}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div
              className="absolute -inset-20 rounded-full opacity-70"
              style={{
                background: "radial-gradient(circle, rgba(29,108,255,0.55), transparent 60%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="absolute -inset-16 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(242,210,122,0.35), transparent 65%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute -inset-4 border border-[#C99A39]/50"
              style={{ transform: "translateZ(20px)" }}
            >
              <span className="absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-[#F2D27A]" />
              <span className="absolute -right-1 -top-1 h-4 w-4 border-r-2 border-t-2 border-[#F2D27A]" />
              <span className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-[#F2D27A]" />
              <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-[#F2D27A]" />
            </div>
            <img
              src={coverAsset.url}
              alt="Valesthia: La luz que duerme"
              className="relative w-full animate-float-slow"
              style={{
                transform: "translateZ(60px)",
                boxShadow:
                  "0 60px 140px -30px rgba(0,0,0,0.95), 0 0 80px rgba(29,108,255,0.35), 0 0 40px rgba(242,210,122,0.25)",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={350}>
          <h1 className="mt-16 font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-[0.08em] text-gold">
            VALESTHIA
          </h1>
        </Reveal>

        <Reveal delay={500}>
          <p
            className="mt-6 font-serif italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#F5F2EA]/85"
            style={{ fontWeight: 300 }}
          >
            La luz que duerme
          </p>
        </Reveal>

        <Reveal delay={700}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <GoldButton href={BUY_URL} primary>
              Comprar ahora
            </GoldButton>
            <GoldButton href="#mundo">Explorar Valesthia</GoldButton>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 gold-hairline" />
    </section>
  );
}

/* ============================== Main Phrase ============================== */

function MainPhrase() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-40 md:py-56">
      <div className="pointer-events-none absolute inset-0 stars opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-15 animate-spin-slower" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <blockquote
            className="font-serif italic text-[clamp(2rem,5vw,4.25rem)] leading-[1.15] text-[#F5F2EA] text-balance"
            style={{ fontWeight: 300 }}
          >
            El conocimiento puede{" "}
            <span
              className="text-gold not-italic font-display"
              style={{ fontWeight: 500 }}
            >
              iluminar
            </span>
            …
            <br />o convertirse en{" "}
            <span
              className="text-gold not-italic font-display"
              style={{ fontWeight: 500 }}
            >
              sombra
            </span>
            .
          </blockquote>
        </Reveal>
        <Reveal delay={400}>
          <Ornament className="mt-16" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Synopsis ============================== */

function Synopsis() {
  const paragraphs = [
    "En la Torre de Cristal de Aerenthal nada permanece oculto. El Hilo —el don que permite leer la verdad emocional de cualquier persona— ha convertido a Sael Vordain en una intérprete perfecta del alma ajena, y en una pieza más de una maquinaria que no perdona errores.",
    "Todo cambia el día en que interroga a un prisionero que no defiende su inocencia ni oculta su culpa: solo pronuncia dos palabras prohibidas.",
  ];
  return (
    <section id="sinopsis" className="relative overflow-hidden bg-vael py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Sinopsis</Eyebrow>
          </div>
        </Reveal>

        <div className="mt-16 space-y-10">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <p
                className="font-serif text-xl md:text-2xl leading-relaxed text-[#F5F2EA]/85 text-pretty"
                style={{ fontWeight: 300 }}
              >
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="py-10 text-center">
              <div
                className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-gold tracking-[0.15em]"
                style={{ fontWeight: 500 }}
              >
                La Grieta.
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p
              className="font-serif text-xl md:text-2xl leading-relaxed text-[#F5F2EA]/85 text-pretty"
              style={{ fontWeight: 300 }}
            >
              Lo que empieza como un caso rutinario se convierte en un viaje por un
              continente que Aerenthal lleva generaciones fingiendo controlar.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <p
              className="font-serif text-xl md:text-2xl leading-relaxed text-[#F5F2EA]/85 text-pretty"
              style={{ fontWeight: 300 }}
            >
              Sael descubrirá que hay verdades que el Hilo no puede leer porque nadie
              las ha nombrado todavía…
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p
              className="font-serif italic text-xl md:text-2xl leading-relaxed text-[#F2D27A] text-pretty"
              style={{ fontWeight: 300 }}
            >
              …y que ella misma puede ser una de las piezas que decidan si Valesthia
              despierta o sigue durmiendo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== About Book ============================== */

function AboutBook() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-35" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(29,108,255,0.25), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Sobre el libro</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] text-balance">
              ¿Por qué leer{" "}
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                Valesthia
              </span>
              ?
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {[
            "Valesthia es una novela de fantasía épica con un fuerte componente político y psicológico.",
            "Su mundo gira alrededor del Hilo, una forma de magia capaz de percibir la verdad emocional de las personas.",
            "Lejos de limitarse a una historia de héroes y villanos, explora el poder, la vigilancia, la memoria, la manipulación de la verdad y el precio de la lealtad.",
          ].map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <p
                className="font-serif text-xl md:text-[1.4rem] leading-relaxed text-[#F5F2EA]/85 text-pretty"
                style={{ fontWeight: 300 }}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-20 grid grid-cols-1 gap-px bg-[#C99A39]/20 md:grid-cols-3">
            {[
              ["Cada decisión", "tiene consecuencias."],
              ["Cada personaje", "guarda secretos."],
              ["Ninguna verdad", "permanece enterrada."],
            ].map(([a, b], i) => (
              <div
                key={i}
                className="bg-[#050608] p-10 text-center"
              >
                <div className="font-display text-lg tracking-wide text-[#F2D27A]">
                  {a}
                </div>
                <div
                  className="mt-3 font-serif italic text-lg text-[#F5F2EA]/70"
                  style={{ fontWeight: 300 }}
                >
                  {b}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Features ============================== */

function Features() {
  const items = [
    "Fantasía épica",
    "Intriga política",
    "Misterios",
    "Magia original",
    "Civilizaciones antiguas",
    "Personajes complejos",
    "Secretos",
    "Viaje por un continente",
    "Lore profundo",
    "Primer libro de una saga",
  ];
  return (
    <section className="relative bg-vael py-32">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Lo que encontrarás</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] leading-tight">
              Diez razones para{" "}
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                cruzar la puerta
              </span>
              .
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-px bg-[#C99A39]/20 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it} delay={i * 40}>
              <div className="group flex h-full flex-col items-center gap-4 bg-[#050608] p-8 text-center transition-colors duration-500 hover:bg-[#091626]">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  className="text-[#F2D27A] transition-transform duration-700 group-hover:scale-110"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="17" cy="17" r="14" opacity="0.4" />
                    <path
                      d="M10 17 L15 22 L24 12"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <div className="font-display text-sm tracking-[0.15em] text-[#F5F2EA]">
                  {it}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== World / Map ============================== */

function World() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="mundo" className="relative overflow-hidden bg-obsidian py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[900px] w-[1400px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(29,108,255,0.22), transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(201,154,57,0.14), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative mx-auto max-w-[1800px] px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>El mundo</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-balance">
              Descubre{" "}
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                Valesthia
              </span>
            </h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-5">
              <p
                className="font-serif text-xl leading-relaxed italic text-[#F5F2EA]/80"
                style={{ fontWeight: 300 }}
              >
                Valesthia es un continente dividido por reinos, fronteras, antiguas
                cicatrices y secretos olvidados.
              </p>
              <p
                className="font-serif text-xl leading-relaxed italic text-[#F5F2EA]/80"
                style={{ fontWeight: 300 }}
              >
                Cada territorio posee su propia identidad, historia y conflictos.
              </p>
              <p
                className="font-display text-lg tracking-wide text-[#F2D27A]"
                style={{ fontWeight: 500 }}
              >
                El viaje apenas comienza.
              </p>
            </div>
          </div>
        </Reveal>

        <div ref={ref} className="mt-16 md:mt-20">
          <div
            className={`relative mx-auto transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
              shown
                ? "opacity-100 translate-y-0 blur-0 scale-100"
                : "opacity-0 translate-y-12 blur-md scale-[0.96]"
            }`}
            style={{ transitionDuration: "1800ms" }}
          >
            <div
              className="pointer-events-none absolute -inset-8 md:-inset-16"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(242,210,122,0.28), transparent 60%)",
                filter: "blur(60px)",
              }}
            />
            <div
              className="pointer-events-none absolute -inset-4"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(29,108,255,0.28), transparent 55%)",
                filter: "blur(80px)",
              }}
            />

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir mapa en pantalla completa"
              className="group relative block w-full cursor-zoom-in overflow-hidden border border-[#C99A39]/40"
              style={{
                boxShadow:
                  "0 60px 160px -30px rgba(0,0,0,0.95), 0 0 0 1px rgba(242,210,122,0.15), 0 0 120px rgba(29,108,255,0.25), inset 0 1px 0 rgba(242,210,122,0.35)",
                background:
                  "linear-gradient(180deg, rgba(9,22,38,0.4), rgba(5,6,8,0.6))",
              }}
            >
              <span className="pointer-events-none absolute left-3 top-3 z-10 h-5 w-5 border-l-2 border-t-2 border-[#F2D27A]/80" />
              <span className="pointer-events-none absolute right-3 top-3 z-10 h-5 w-5 border-r-2 border-t-2 border-[#F2D27A]/80" />
              <span className="pointer-events-none absolute bottom-3 left-3 z-10 h-5 w-5 border-b-2 border-l-2 border-[#F2D27A]/80" />
              <span className="pointer-events-none absolute bottom-3 right-3 z-10 h-5 w-5 border-b-2 border-r-2 border-[#F2D27A]/80" />

              <img
                src={mapaAsset.url}
                alt="Mapa político oficial de Valesthia"
                loading="lazy"
                decoding="async"
                className="relative block w-full transition-transform duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                style={{
                  filter:
                    "drop-shadow(0 10px 40px rgba(0,0,0,0.6)) contrast(1.05) saturate(1.05)",
                }}
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(242,210,122,0.12), transparent 40%), radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.55), transparent 55%), radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)",
                }}
              />
            </button>
          </div>

          <Reveal delay={300}>
            <div className="mt-12 flex justify-center">
              <GoldButton onClick={() => setOpen(true)} primary>
                Explorar mapa
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050608]/95 p-4 backdrop-blur-md"
          style={{ animation: "reveal-up 500ms cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-[#F2D27A]/60 bg-[#050608]/70 font-display text-[#F2D27A] transition-all hover:border-[#F2D27A] hover:bg-[#091626]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3 L15 15 M15 3 L3 15" />
            </svg>
          </button>
          <img
            src={mapaAsset.url}
            alt="Mapa político oficial de Valesthia"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[96vw] cursor-default object-contain"
            style={{
              boxShadow:
                "0 80px 160px rgba(0,0,0,0.9), 0 0 120px rgba(29,108,255,0.35), 0 0 60px rgba(242,210,122,0.25)",
            }}
          />
        </div>
      )}
    </section>
  );
}

/* ============================== Characters ============================== */

function Characters() {
  const cast = [
    {
      key: "sael",
      img: saelAsset.url,
      name: "Sael Vordain",
      role: "Intérprete emocional de la Torre de Cristal",
      lines: [
        "Capaz de leer aquello que otros intentan ocultar.",
        "Su mayor fortaleza podría convertirse también en su mayor condena.",
      ],
    },
    {
      key: "drav",
      img: dravAsset.url,
      name: "Drav Skeld",
      role: "Un hombre marcado por errores imposibles de olvidar",
      lines: [
        "Carga con un pasado que aún proyecta su sombra sobre el presente.",
      ],
    },
    {
      key: "maren",
      img: marenAsset.url,
      name: "Maren Vel",
      role: "Architejedora · Figura de autoridad dentro de la Torre",
      lines: [
        "Fría. Calculadora.",
        "Convencida de que el orden siempre tiene un precio.",
      ],
    },
    {
      key: "yssen",
      img: yssenAsset.url,
      name: "Yssen",
      role: "Un niño imposible de comprender",
      lines: [
        "Su mera presencia parece alterar la realidad.",
        "Hay preguntas que comienzan con él… y otras que terminan.",
      ],
    },
  ];

  return (
    <section id="personajes" className="relative overflow-hidden bg-obsidian py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-15 animate-spin-slower" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Dramatis Personae</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-balance">
              Los rostros de{" "}
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                Valesthia
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-2 lg:gap-20">
          {cast.map((c, i) => (
            <Reveal key={c.key} delay={i * 120}>
              <article className="group relative">
                <div className="relative overflow-hidden">
                  <div
                    className="pointer-events-none absolute -inset-6 opacity-40 transition-opacity duration-1000 group-hover:opacity-90"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 30%, rgba(29,108,255,0.35), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(242,210,122,0.18), transparent 60%)",
                      filter: "blur(50px)",
                    }}
                  />

                  <div
                    className="relative aspect-[4/5] overflow-hidden border border-[#C99A39]/40"
                    style={{
                      boxShadow:
                        "0 40px 100px -20px rgba(0,0,0,0.9), inset 0 1px 0 rgba(242,210,122,0.35), 0 0 60px rgba(29,108,255,0.18)",
                    }}
                  >
                    <span className="pointer-events-none absolute left-3 top-3 z-20 h-4 w-4 border-l border-t border-[#F2D27A]/80" />
                    <span className="pointer-events-none absolute right-3 top-3 z-20 h-4 w-4 border-r border-t border-[#F2D27A]/80" />
                    <span className="pointer-events-none absolute bottom-3 left-3 z-20 h-4 w-4 border-b border-l border-[#F2D27A]/80" />
                    <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-4 w-4 border-b border-r border-[#F2D27A]/80" />

                    <img
                      src={c.img}
                      alt={`${c.name} — ${c.role}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      style={{ filter: "contrast(1.05) saturate(1.05)" }}
                    />

                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(5,6,8,0.4) 45%, rgba(5,6,8,0.95) 100%)",
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                      <div className="font-display text-3xl tracking-wide text-[#F5F2EA] md:text-4xl">
                        {c.name}
                      </div>
                      <div
                        className="mt-2 font-serif text-base italic text-[#F2D27A]"
                        style={{ fontWeight: 300 }}
                      >
                        {c.role}
                      </div>
                    </div>

                    <div className="absolute left-0 top-0 z-10 flex items-center gap-2 border-b border-r border-[#C99A39]/50 bg-[#050608]/70 px-4 py-2 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F2D27A]" />
                      <span className="font-display text-[9px] uppercase tracking-[0.4em] text-[#F2D27A]">
                        Retrato {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="relative -mt-2 space-y-3 border border-t-0 border-[#C99A39]/30 p-6 md:p-8"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(9,22,38,0.65), rgba(5,6,8,0.9))",
                  }}
                >
                  {c.lines.map((l, k) => (
                    <p
                      key={k}
                      className="font-serif text-lg italic leading-relaxed text-[#F5F2EA]/85"
                      style={{ fontWeight: 300 }}
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== The Thread ============================== */

function TheThread() {
  return (
    <section className="relative overflow-hidden bg-vael py-40 md:py-48">
      <div className="pointer-events-none absolute inset-0 stars opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(29,108,255,0.4), transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-20 animate-spin-slower" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <Eyebrow>La magia</Eyebrow>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="mt-8 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-gold tracking-[0.06em]">
            El Hilo
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {[
            "El Hilo permite percibir la verdad emocional de las personas.",
            "Durante generaciones ha sido la herramienta que sostiene el equilibrio de Aerenthal.",
            "Pero incluso aquello capaz de revelar la verdad tiene límites.",
          ].map((p, i) => (
            <Reveal key={i} delay={250 + i * 120}>
              <p
                className="font-serif text-xl md:text-2xl leading-relaxed text-[#F5F2EA]/85"
                style={{ fontWeight: 300 }}
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700}>
          <div className="mt-16 grid grid-cols-1 gap-px bg-[#C99A39]/25 sm:grid-cols-2">
            {[
              "No todo puede ser leído.",
              "No todo puede ser comprendido.",
            ].map((t) => (
              <div
                key={t}
                className="bg-[#050608] p-10 font-serif italic text-xl md:text-2xl text-[#F2D27A]"
                style={{ fontWeight: 300 }}
              >
                {t}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Gallery ============================== */

function Gallery() {
  const items = [
    { src: coverAsset.url, label: "Portada" },
    { src: mapaAsset.url, label: "Mapa de Valesthia" },
    { src: saelAsset.url, label: "Sael Vordain" },
    { src: dravAsset.url, label: "Drav Skeld" },
    { src: marenAsset.url, label: "Maren Vel" },
    { src: yssenAsset.url, label: "Yssen" },
  ];
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="relative bg-obsidian py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Galería</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] leading-tight">
              El universo{" "}
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                en imágenes
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 60}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block aspect-[3/4] w-full cursor-zoom-in overflow-hidden border border-[#C99A39]/30"
                style={{
                  boxShadow:
                    "0 30px 80px -20px rgba(0,0,0,0.9), inset 0 1px 0 rgba(242,210,122,0.2)",
                }}
                aria-label={`Ampliar ${it.label}`}
              >
                <span className="pointer-events-none absolute left-2 top-2 z-10 h-3 w-3 border-l border-t border-[#F2D27A]/70" />
                <span className="pointer-events-none absolute right-2 top-2 z-10 h-3 w-3 border-r border-t border-[#F2D27A]/70" />
                <span className="pointer-events-none absolute bottom-2 left-2 z-10 h-3 w-3 border-b border-l border-[#F2D27A]/70" />
                <span className="pointer-events-none absolute bottom-2 right-2 z-10 h-3 w-3 border-b border-r border-[#F2D27A]/70" />
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(5,6,8,0.9))",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-left">
                  <div className="font-display text-[10px] uppercase tracking-[0.4em] text-[#F2D27A]">
                    {it.label}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050608]/95 p-4 backdrop-blur-md"
          style={{ animation: "reveal-up 500ms cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Cerrar"
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-[#F2D27A]/60 bg-[#050608]/70 font-display text-[#F2D27A] transition-all hover:border-[#F2D27A] hover:bg-[#091626]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3 L15 15 M15 3 L3 15" />
            </svg>
          </button>
          <img
            src={items[open].src}
            alt={items[open].label}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[96vw] cursor-default object-contain"
            style={{
              boxShadow:
                "0 80px 160px rgba(0,0,0,0.9), 0 0 120px rgba(29,108,255,0.35), 0 0 60px rgba(242,210,122,0.25)",
            }}
          />
        </div>
      )}
    </section>
  );
}

/* ============================== Big Quote ============================== */

function BigQuote() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-48">
      <div className="pointer-events-none absolute inset-0 stars opacity-50" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(29,108,255,0.4), transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto text-[#F2D27A]">
            <g fill="none" stroke="currentColor" strokeWidth="0.8">
              <circle cx="30" cy="30" r="26" opacity="0.4" />
              <circle cx="30" cy="30" r="18" opacity="0.6" />
              <path d="M30 6 L36 26 L30 22 L24 26 Z" fill="currentColor" opacity="0.9" />
            </g>
          </svg>
        </Reveal>
        <Reveal delay={200}>
          <blockquote
            className="mt-12 font-serif italic text-[clamp(1.85rem,4.5vw,3.5rem)] leading-[1.2] text-balance text-[#F5F2EA]"
            style={{ fontWeight: 300 }}
          >
            “La verdad no siempre necesita ser{" "}
            <span
              className="text-gold not-italic font-display"
              style={{ fontWeight: 500 }}
            >
              ocultada
            </span>
            .
            <br />
            A veces basta con que nadie se atreva a{" "}
            <span
              className="text-gold not-italic font-display"
              style={{ fontWeight: 500 }}
            >
              nombrarla
            </span>
            .”
          </blockquote>
        </Reveal>
        <Reveal delay={400}>
          <Ornament className="mt-16" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Author ============================== */

function Author() {
  return (
    <section id="autor" className="relative overflow-hidden bg-vael py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-8 opacity-70"
              style={{
                background: "radial-gradient(circle, rgba(29,108,255,0.35), transparent 65%)",
                filter: "blur(50px)",
              }}
            />
            <div className="relative border border-[#C99A39]/40 p-2">
              <span className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#F2D27A]" />
              <span className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#F2D27A]" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#F2D27A]" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#F2D27A]" />
              <img
                src={authorVisual.url}
                alt="Samuel Rodríguez Alleres"
                className="w-full"
                style={{ filter: "grayscale(0.15) contrast(1.05)" }}
              />
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Sobre el autor</Eyebrow>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="mt-8 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
              Samuel <br />
              <span
                className="italic font-serif text-gold"
                style={{ fontWeight: 400 }}
              >
                Rodríguez Alleres
              </span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            <Reveal delay={250}>
              <p
                className="font-serif text-xl leading-relaxed italic text-[#F5F2EA]/85"
                style={{ fontWeight: 300 }}
              >
                Apasionado de la fantasía épica y la construcción de mundos, ha
                creado Valesthia como el inicio de una saga donde la política, la
                magia y la condición humana se entrelazan en un universo propio.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p
                className="font-serif text-xl leading-relaxed italic text-[#F5F2EA]/85"
                style={{ fontWeight: 300 }}
              >
                Su objetivo no es solo contar una historia, sino construir un mundo
                que el lector pueda explorar durante años.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== Buy ============================== */

function Buy() {
  return (
    <section
      id="comprar"
      className="relative overflow-hidden py-48"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(29,108,255,0.35), #050608 60%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 stars opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rune-overlay opacity-25 animate-spin-slower" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-1/3 h-[140%] w-32 rotate-6 animate-lightray"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(242,210,122,0.2), transparent)",
          }}
        />
        <div
          className="absolute -top-40 right-1/3 h-[140%] w-20 -rotate-6 animate-lightray"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(29,108,255,0.25), transparent)",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <Eyebrow>Comienza el viaje</Eyebrow>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1] text-balance">
            Empieza tu viaje a{" "}
            <span
              className="italic font-serif text-gold"
              style={{ fontWeight: 400 }}
            >
              Valesthia
            </span>
          </h2>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-16 flex justify-center">
            <GoldButton href={AMAZON_URL} primary large>
              Comprar en Amazon
            </GoldButton>
          </div>
        </Reveal>

        <Reveal delay={700}>
          <p
            className="mt-10 font-serif text-lg italic text-[#F5F2EA]/70"
            style={{ fontWeight: 300 }}
          >
            Disponible en tapa blanda y eBook Kindle.
          </p>
        </Reveal>

        <Reveal delay={900}>
          <Ornament className="mt-20" />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Newsletter ============================== */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="relative overflow-hidden bg-obsidian py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 stars opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(29,108,255,0.3), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow>Newsletter</Eyebrow>
          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] leading-tight">
            Entra en la{" "}
            <span
              className="italic font-serif text-gold"
              style={{ fontWeight: 400 }}
            >
              Torre de Cristal
            </span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p
            className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-[#F5F2EA]/80"
            style={{ fontWeight: 300 }}
          >
            Recibe ilustraciones inéditas, avances de los próximos libros, mapas,
            contenido exclusivo y noticias sobre Valesthia.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mx-auto mt-12 flex w-full max-w-xl flex-col gap-4 sm:flex-row"
          >
            <div className="relative flex-1">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#C99A39]/40 bg-[#050608]/70 px-5 py-4 font-serif text-base text-[#F5F2EA] placeholder:text-[#F5F2EA]/40 outline-none transition-colors focus:border-[#F2D27A]"
                style={{ boxShadow: "inset 0 1px 0 rgba(242,210,122,0.15)" }}
              />
            </div>
            <GoldButton primary>{sent ? "Enviado" : "Unirme"}</GoldButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Support ============================== */

function Support() {
  return (
    <section className="relative bg-vael py-32">
      <div className="pointer-events-none absolute inset-0 stars opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow>Apoya el proyecto</Eyebrow>
          <h2 className="mt-8 font-display text-[clamp(1.85rem,4.5vw,3.5rem)] leading-tight">
            Ayuda a que{" "}
            <span
              className="italic font-serif text-gold"
              style={{ fontWeight: 400 }}
            >
              Valesthia
            </span>{" "}
            crezca
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p
            className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-[#F5F2EA]/80"
            style={{ fontWeight: 300 }}
          >
            Valesthia es un proyecto independiente creado con pasión y dedicación. Si deseas apoyar el crecimiento de este universo, puedes hacerlo mediante una donación voluntaria. Tu ayuda contribuirá a financiar nuevas ilustraciones, mapas, traducciones y las futuras entregas de la saga. Todas las donaciones se procesan de forma segura a través de PayPal. Gracias por formar parte de este viaje.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <GoldButton href="https://www.paypal.com/donate/?hosted_button_id=QHRKGHM2532KW">✨ Apoyar Valesthia </GoldButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Social ============================== */

function Social() {
  const links = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/p/Da7PTeZMJze/",
      icon: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </>
      ),
    }
  ];
  return (
    <section className="relative bg-obsidian py-24">
      <div className="pointer-events-none absolute inset-0 stars opacity-25" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow>Sígueme en Instagram</Eyebrow>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                aria-label={l.name}
                className="group flex h-14 w-14 items-center justify-center border border-[#C99A39]/50 text-[#F2D27A] transition-all duration-500 hover:border-[#F2D27A] hover:bg-[#091626]"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(242,210,122,0.3), 0 8px 30px rgba(29,108,255,0.15)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-500 group-hover:scale-110"
                >
                  {l.icon}
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================== Footer ============================== */

function Footer() {
  return (
    <footer className="relative border-t border-[#C99A39]/25 bg-obsidian py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 40 40" className="text-[#F2D27A]">
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="20" cy="20" r="16" opacity="0.4" />
              <path d="M20 5 L28 24 L20 20 L12 24 Z" fill="currentColor" opacity="0.9" />
            </g>
          </svg>
          <div>
            <div className="font-display text-sm tracking-[0.4em] text-[#F2D27A]">
              VALESTHIA
            </div>
            <div className="mt-1 font-display text-[9px] uppercase tracking-[0.5em] text-[#C99A39]/60">
              La luz que duerme
            </div>
          </div>
        </div>
        <div className="text-center font-serif text-sm italic text-[#F5F2EA]/60 md:text-right">
          © {new Date().getFullYear()} Samuel Rodríguez Alleres. Todos los derechos reservados.
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:justify-end">

            <a
              href="mailto:valesthiaofficial@gmail.com"
              className="font-display text-[10px] uppercase tracking-[0.35em] text-[#C99A39] transition-colors hover:text-[#F2D27A]"
            >
              Envíame tus sugerencias
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

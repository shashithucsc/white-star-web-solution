"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, MotionConfig } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";

function useScrolled(threshold: number = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function Header() {
  const scrolled = useScrolled(10);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full bg-[#F5FAFF]/90 ${scrolled ? "glass border-b" : ""}`}
      style={{
        borderColor: "rgba(11, 31, 68, 0.1)",
        backdropFilter: scrolled ? "blur(20px)" : undefined,
      }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#top" className="flex items-center gap-3" aria-label="White Star Web Solutions">
          <div className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
            <Image src="/WSWB_logo.png" alt="White Star Web Solutions logo" fill sizes="(max-width: 768px) 48px, 56px" className="object-contain mix-blend-darken" priority unoptimized />
          </div>
          <div className="select-none leading-tight">
            <div className="text-base font-extrabold tracking-tight text-[#0B1F44] md:text-lg">WHITE STAR</div>
            <div className="text-xs font-medium tracking-[0.18em] text-[#475569] md:text-[13px]">WEB SOLUTIONS</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {[
            { 
              href: "#about", 
              label: "About",
              icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
              )
            },
            { 
              href: "#products", 
              label: "Companies",
              icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              )
            },
            { 
              href: "#contact", 
              label: "Contact",
              icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              )
            },
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative flex flex-col items-center py-2.5 text-[15px] font-semibold text-[#0B1F44] transition-all duration-300 hover:text-[#1E90FF]"
            >
              <span className="relative z-10 text-center px-2">{item.label}</span>
              
              {/* Fixed width container for underlines */}
              <div className="relative mt-1 w-[100px]">
                {/* Permanent navy blue underline */}
                <span className="absolute left-0 right-0 h-[2px] bg-[#0B1F44]" />
                
                {/* Animated hover underline - expands from left to right */}
                <span className="absolute left-0 h-[2px] w-0 bg-[#1E90FF] transition-all duration-300 ease-out group-hover:w-full" />
              </div>
              
              {/* Subtle background glow on hover */}
              <span className="absolute inset-0 -z-10 scale-95 rounded-lg bg-[#1E90FF]/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#1E90FF]/8 group-hover:opacity-100" />
            </a>
          ))}
          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 rounded-full bg-[#0B1F44] px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1a2f5c] hover:shadow-lg"
          >
            Get Started
          </a>
        </nav>
        </div>
      {/* Thin navy blue line at bottom of navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#0B1F44]/30" />
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  return (
    <section ref={ref} id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-white">
      {/* Full-section animated mesh gradient background */}
      <div className="mesh-bg" aria-hidden />

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-7xl"
          style={{ backgroundImage: "linear-gradient(90deg, #0B1F44, #1E90FF)" }}
        >
          <span className="[background-size:200%_100%] [animation:shimmer_6s_linear_infinite]">Building Digital Futures, One Solution at a Time</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-secondary opacity-0 md:text-xl [animation:blurIn_0.8s_ease-out_forwards]"
        >
          White Star Web Solutions is a holding company powering innovative software and technology-driven businesses.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center rounded-full bg-[#0B1F44] px-6 py-3 text-white shadow-lg transition-transform duration-300 ease-out hover:scale-[1.06] hover:bg-[#1a2f5c] hover:shadow-xl"
          >
            <span className="text-sm font-semibold tracking-wide">Explore Our Ventures</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
        {/* <div className="pointer-events-none relative mt-8 flex justify-center gap-4 text-xs font-medium text-secondary">
          {["6+ Products", "AI-Powered", "Enterprise Grade"].map((t) => (
            <div key={t} className="glass rounded-full px-3 py-1">{t}</div>
          ))}
        </div> */}
      </motion.div>
      <style>{`@keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}@keyframes blurIn{to{filter:blur(0);opacity:1}}`}</style>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const progressEl = document.createElement("div");
    progressEl.className = "scroll-progress";
    document.body.appendChild(progressEl);
    const onScroll = () => {
      const st = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (st / h) * 100 : 0;
      progressEl.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      progressEl.remove();
    };
  }, []);
  return (
    <MotionConfig reducedMotion="never">
      <main className="relative min-h-screen bg-white text-primary">
        <Header />
        <Hero />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <CTASection />
        <Footer />
      </main>
    </MotionConfig>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-60" aria-hidden>
        <div className="h-full w-full bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_100%)]" />
      </div>
      <div className="absolute inset-0" aria-hidden>
        {/* subtle dot grid */}
        <svg className="h-full w-full text-[rgba(11,31,68,0.03)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold md:text-4xl"
        >
          ABOUT WHITE STAR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-4 max-w-3xl text-center text-secondary"
        >
          White Star Web Solutions is a technology and software solutions holding company that incubates and
          manages innovative businesses and products across digital marketing, SaaS, e-commerce, and wellness sectors.
        </motion.p>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-extrabold md:text-4xl"
          >
            Our Mission
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-4 max-w-3xl text-center text-secondary"
          >
            We combine innovation, engineering excellence, and business insight to build market-leading products and
            long-term value across our portfolio.
          </motion.p>
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col items-center rounded-2xl border border-[#0B1F44]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0B1F44] hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F44]/10">
                <svg className="h-6 w-6 text-[#0B1F44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4m6.36 1.64l-2.83 2.83M22 12h-4M17.17 17.17l-2.83-2.83M12 22v-4M7.64 17.36l2.83-2.83M2 12h4M6.83 6.83l2.83 2.83" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-[#0B1F44]">AI-first Solutions</h4>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col items-center rounded-2xl border border-[#0B1F44]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0B1F44] hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F44]/10">
                <svg className="h-6 w-6 text-[#0B1F44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  <path d="M3 21a9 9 0 0118 0" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-[#0B1F44]">Design with Accessibility</h4>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col items-center rounded-2xl border border-[#0B1F44]/30 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#0B1F44] hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F44]/10">
                <svg className="h-6 w-6 text-[#0B1F44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-4-8-10V5l8-3 8 3v7c0 6-8 10-8 10z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-[#0B1F44]">Reliable, Secure Platforms</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Product = { title: string; description: string; icon: ReactElement };

const products: Product[] = [
  {
    title: "Artslab Creatives",
    description:
      "Full-service digital marketing and technology agency delivering creative and data-driven solutions to scale brands.",
    icon: (
      <Image src="/logos/artslab.png" alt="Artslab" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
  {
    title: "Legistant",
    description:
      "AI-powered case management software designed for lawyers to streamline legal workflows, manage cases efficiently, and enhance client experiences.",
    icon: (
      <Image src="/logos/legistant.png" alt="Legistant" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
  {
    title: "Aumerix",
    description:
      "An HR and work management platform for small to medium-sized businesses, streamlining attendance, leave management, payroll, and employee productivity.",
    icon: (
      <Image src="/logos/aumerix.png" alt="Aumerix" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
  {
    title: "FlowCart",
    description:
      "A WordPress to Shopify migration plugin simplifying store transitions while maintaining design, functionality, and SEO integrity.",
    icon: (
      <Image src="/logos/flow_cart.png" alt="FlowCart" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
  {
    title: "Nyvara",
    description:
      "A wellness and mindfulness app helping users set goals, form habits, and build lifestyles centered around personal growth and productivity.",
    icon: (
      <Image src="/logos/nyvara.png" alt="Nyvara" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
  {
    title: "Influencer Showcase",
    description:
      "A Shopify plugin that integrates user-generated content (UGC) from influencers directly onto your e-commerce site to boost engagement and conversions.",
    icon: (
      <Image src="/logos/influencer_showcase.png" alt="Influencer Showcase" width={40} height={40} unoptimized className="object-contain" />
    ),
  },
];

function ProductsSection() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };
  return (
    <section id="products" className="relative bg-white py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold md:text-4xl"
        >
          Our Companies & Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-4 max-w-3xl text-center text-secondary"
        >
          Explore our portfolio spanning digital marketing, SaaS platforms, e‑commerce tools, and wellness technology.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p, idx) => (
            <motion.a
              key={p.title}
              variants={item}
              href="#contact"
              className="group flex cursor-pointer flex-col rounded-2xl border border-[#0B1F44]/30 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0B1F44] hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5FAFF] p-2 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-6 text-secondary">{p.description}</p>
              <div className="mt-5 h-px w-full bg-[#0B1F44]/20" />
              <div className="mt-4 inline-flex items-center text-sm font-medium text-[#0B1F44]">
                Learn more
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    {
      title: "Innovation-Driven",
      text:
        "We combine innovation, technology, and business acumen to launch and grow market-leading products.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 2v4m6.36 1.64l-2.83 2.83M22 12h-4M17.17 17.17l-2.83-2.83M12 22v-4M7.64 17.36l2.83-2.83M2 12h4M6.83 6.83l2.83 2.83" />
        </svg>
      ),
    },
    {
      title: "Deep Expertise",
      text: "Expertise in AI, SaaS, e-commerce, digital marketing, and wellness solutions.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Proven Results",
      text: "Proven track record of building profitable, scalable digital businesses.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M3 17h18M6 17V7m6 10V4m6 13V10" />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="h-full w-full bg-[linear-gradient(135deg,#FFFFFF_0%,#F8FAFC_100%)]" />
      </div>
      <div className="absolute inset-0" aria-hidden>
        <svg className="h-full w-full text-[rgba(11,31,68,0.03)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M30 0H0v30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold md:text-4xl"
        >
          Why Choose White Star
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group relative rounded-2xl border border-[var(--glass-border)] bg-white/90 p-6 shadow-[0_4px_24px_rgba(11,31,68,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(11,31,68,0.12)]"
            >
              <div className="absolute inset-x-0 -top-0.5 h-1 rounded-t-2xl bg-transparent transition-colors duration-300 group-hover:bg-[#0B1F44]" />
              <div className="inline-grid h-12 w-12 place-items-center rounded-full bg-[rgba(11,31,68,0.12)] text-[#0B1F44] transition-transform duration-300 group-hover:scale-105">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-secondary">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold md:text-3xl text-[#0B1F44]"
          >
            Ready to partner with us or learn more?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mx-auto mt-3 max-w-2xl text-secondary"
          >
            Let's build something amazing together.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Details - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#0B1F44]/10 bg-[#F5FAFF] p-8 space-y-6 h-full"
          >
            <div>
              <h4 className="text-lg font-bold text-[#0B1F44] mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#1E90FF] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-[#0B1F44]">Email</p>
                    <a href="mailto:info@whitestarwebsolutions.com" className="text-sm text-secondary hover:text-[#1E90FF] transition-colors">
                      info@whitestarwebsolutions.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#1E90FF] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-[#0B1F44]">Phone</p>
                    <a href="tel:+94778385938" className="text-sm text-secondary hover:text-[#1E90FF] transition-colors block">
                      +94 77 838 5938
                    </a>
                    <a href="tel:+946273901" className="text-sm text-secondary hover:text-[#1E90FF] transition-colors block">
                      +94 77 627 3901
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#1E90FF] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-[#0B1F44]">Company</p>
                    <p className="text-sm text-secondary">White Star Web Solutions (Pvt) Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#0B1F44]/10 bg-white p-8 shadow-sm h-full"
          >
            <form id="contact" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#0B1F44] mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full rounded-lg border border-[#0B1F44]/20 bg-[#F5FAFF] px-4 py-2.5 text-[#0B1F44] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-shadow" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0B1F44] mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full rounded-lg border border-[#0B1F44]/20 bg-[#F5FAFF] px-4 py-2.5 text-[#0B1F44] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-shadow" placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#0B1F44] mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full rounded-lg border border-[#0B1F44]/20 bg-[#F5FAFF] px-4 py-2.5 text-[#0B1F44] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] resize-none transition-shadow" placeholder="Type your message here..." />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center rounded-lg bg-[#0B1F44] px-6 py-3 text-white shadow-md transition-all duration-300 ease-out hover:bg-[#1a2f5c] hover:shadow-lg text-sm font-semibold"
              >
                Send Message
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(11,31,68,0.1)] bg-[#F8FAFC] py-10 text-primary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-base font-medium">White Star Web Solutions (Pvt) Ltd</div>
          <div className="mt-4 grid gap-2 text-sm text-secondary md:grid-cols-3">
            <a className="transition-colors hover:text-[var(--accent)]" href="mailto:info@whitestarwebsolutions.com">info@whitestarwebsolutions.com</a>
            <a className="transition-colors hover:text-[var(--accent)]" href="tel:+94778385938">+94 77 838 5938</a>
            <a className="transition-colors hover:text-[var(--accent)]" href="tel:+946273901">+94 77 627 3901</a>
          </div>
          <div className="mt-6 text-xs text-secondary">© 2025 White Star Web Solutions. All rights reserved.</div>
        </div>
    </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // ── Animation Variants ──────────────────────────────────────────
 const menuVariants: Variants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.6
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.5 } },
    open:   { opacity: 1, transition: { duration: 0.5 } },
  };

  const linkContainerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open:   { transition: { delayChildren: 0.3, staggerChildren: 0.1 } },
  };

  const linkVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 }
  }
};

  const menuItems = ['Home', 'About', 'Works', 'Services', 'Contact'];
  const socials   = ['X/Twitter', 'LinkedIn', 'Instagram', 'Facebook'];

  return (
    <>
      {/* ── Fixed Top Navbar ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between
                      px-8 py-6 sm:px-12 sm:py-7 lg:px-20 lg:py-8
                      mix-blend-difference pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="pointer-events-auto text-2xl sm:text-3xl lg:text-4xl
                     font-extrabold tracking-tighter text-white leading-none"
        >
          Ayik<span className="text-[#00d4ff]">Solution</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          onClick={() => setIsOpen(true)}
          className="group pointer-events-auto flex items-center gap-3
                     text-white hover:text-[#00d4ff] transition-colors duration-300"
          aria-label="Open navigation"
        >
          <span className="hidden sm:block text-[11px] font-bold tracking-[0.2em] uppercase">
            Menu
          </span>
          <div className="flex w-6 flex-col gap-[5px]">
            <span className="block h-[2px] w-full  bg-current transition-all duration-300" />
            <span className="block h-[2px] w-2/3 ml-auto bg-current transition-all duration-300
                             group-hover:w-full" />
          </div>
        </motion.button>
      </nav>

      {/* ── Full-screen Slide-in Menu ─────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed" animate="open" exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 cursor-pointer
                         bg-[rgba(5,5,8,0.85)] backdrop-blur-[12px]"
            />

            {/* Slide Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed" animate="open" exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50
                         w-full md:w-[600px]
                         bg-[#090912] border-l border-[#1a1a30]
                         flex flex-col
                         shadow-2xl overflow-y-auto overflow-x-hidden"
            >

              {/* ── Panel Header ───────────────────────────────────── */}
              <div className="flex items-center justify-between flex-shrink-0
                              px-10 pt-8 pb-7 sm:px-14 sm:pt-9 sm:pb-8
                              border-b border-[#1a1a30]">

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 text-[10px] font-bold
                             tracking-[0.2em] text-[#5a5a7a] uppercase"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse
                                   shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
                  Navigation
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                  className="group relative w-11 h-11 flex items-center justify-center
                             rounded-full border border-[#1e1e3a] bg-[#111122] text-white
                             hover:border-[#00d4ff] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]
                             transition-all duration-300 overflow-hidden flex-shrink-0"
                >
                  <span className="absolute inset-0 bg-[#00d4ff] translate-y-full
                                   group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <svg className="relative z-10 group-hover:text-[#050508] transition-colors duration-300"
                       width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M1 13L13 1" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </motion.button>
              </div>

              {/* ── Navigation Links ───────────────────────────────── */}
              <motion.nav
                variants={linkContainerVariants}
                initial="closed" animate="open" exit="closed"
                className="flex-1 flex flex-col justify-center
                           px-10 py-10 sm:px-14 sm:py-12 gap-0"
                style={{ perspective: '1000px' }}
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={linkVariants}
                    className="overflow-hidden transition-colors duration-300"
                  >
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      className="group relative flex items-baseline gap-4 py-3 sm:py-4 w-full"
                      whileHover={{ x: 12 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Index number */}
                      {/* <span className="text-[11px] font-bold tracking-[0.1em] text-[#3a3a58]
                                       group-hover:text-[#F40000] transition-colors duration-300
                                       min-w-[24px] pb-1">
                        {String(i + 1).padStart(2, '0')}
                      </span> */}

                      {/* Link text */}
                      <span className="text-[44px] sm:text-[52px] md:text-[60px] lg:text-[68px]
                                       leading-[0.92] font-extrabold tracking-tight text-[#ddddf0]
                                       uppercase group-hover:text-[#00d4ff] transition-colors duration-300
                                       relative">
                        {item}
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 h-[2px] w-0
                                         bg-gradient-to-r from-[#2563ff] to-[#F40000]
                                         group-hover:w-full transition-all duration-500
                                         ease-out rounded-full" />
                      </span>

                      {/* Arrow icon */}
                      {/* <span className="ml-auto text-[#2a2a45] text-lg
                                       group-hover:text-[#F40000] opacity-0 group-hover:opacity-100
                                       transition-all duration-300 rotate-[-45deg]
                                       group-hover:rotate-0 self-center">
                        →
                      </span> */}
                    </motion.a>
                  </motion.div>
                ))}
              </motion.nav>

              {/* ── Footer: Contact & Socials ──────────────────────── */}
              <motion.footer
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex-shrink-0 border-t border-[#1a1a30]
                           px-10 pt-8 pb-10 sm:px-14 sm:pt-9 sm:pb-12
                           flex flex-col gap-7"
              >
                {/* Email */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#4a4a6a] uppercase">
                    ( Let's Work Together )
                  </p>
                  <a
                    href="mailto:hello@ayiksolution.com"
                    className="text-[17px] sm:text-[22px] font-bold tracking-tight
                               text-[#ddddf0] hover:text-[#00d4ff] transition-colors
                               inline-block relative group pb-0.5 w-fit"
                  >
                    hello@ayiksolution.com
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00d4ff]
                                     group-hover:w-full transition-all duration-500 rounded-full" />
                  </a>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#4a4a6a] uppercase">
                    ( Connect )
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
                    {socials.map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="group flex items-center gap-1.5 text-[20px] font-semibold
                                   tracking-wide text-[#8888aa] hover:text-[#00d4ff]
                                   transition-colors duration-300"
                      >
                        {social}
                        <span className="text-[10px] group-hover:translate-x-0.5
                                         group-hover:-translate-y-0.5 transition-transform duration-300">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.footer>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
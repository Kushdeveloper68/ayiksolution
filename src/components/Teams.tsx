import { useEffect, useRef } from "react";
import { kushImg, krishnaImg, satyabrataImg, vishanImg, jagritiImg } from "../assets/"
type TeamMember = {
  id: string;
  name: string;
  role: string;
  img?: string;
  link: string;
};

const DESKTOP_MEMBERS: TeamMember[] = [
  {
    id: "dc0",
    name: "Ramkrishna",
    role: "Founder & CEO",
    img: krishnaImg,
    link: "https://in.linkedin.com/in/ramkrishna-giri",
  },
  {
    id: "dc1",
    name: "Kush",
    role: "Chief Technology Officer (CTO)",
    img: kushImg,
    link: "https://kushdeveloper.me/",
  },
  {
    id: "dc2",
    name: "Satyabrata",
    role: "Client Success & Operations Manager",
    img: satyabrataImg,
    link: "https://in.linkedin.com/in/satyabrata-pradhan-ba0a51294",
  },
  {
    id: "dc3",
    name: "Vishan",
    role: "Social Media & Marketing Manager",
    img: vishanImg,
    link: "https://vishandeveloper.me/",
  },
  {
    id: "dc4",
    name: "Jagriti",
    role: "Business Development Executive",
    img: jagritiImg,
    link: "",
  },
];

const MOBILE_MEMBERS: TeamMember[] = [
  {
    id: "mc0",
    name: "RamKrishna",
    role: "Founder & CEO",
    img: krishnaImg,
    link: "https://in.linkedin.com/in/ramkrishna-giri",
  },
  {
    id: "mc1",
    name: "Kush",
    role: "Chief Technology Officer (CTO)",
    img: kushImg,
    link: "https://kushdeveloper.me/",
  },
  {
    id: "mc2",
    name: "Satyabrata",
    role: "Client Success & Operations Manager",
    img: satyabrataImg,
    link: "https://in.linkedin.com/in/satyabrata-pradhan-ba0a51294",
  },
  {
    id: "mc3",
    name: "Vishan",
    role: "Social Media & Marketing Manager",
    img: vishanImg,
    link: "https://vishandeveloper.me/",
  },
  {
    id: "mc4",
    name: "Jagriti",
    role: "Business Development Executive",
    img: jagritiImg,
    link: "",
  },
];

const FALLBACK_IMG =
  "https://tse1.mm.bing.net/th/id/OIP.7jytxS1MYjRRk1_jkShsiAHaHa?w=900&h=900&rs=1&pid=ImgDetMain&o=7&rm=3";

/* ─── Blueprint SVG decoration ─── */
function BlueprintSVG() {
  return (
    <svg
      className="ts-bp"
      viewBox="0 0 1440 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="55"
        y="26"
        width="388"
        height="282"
        rx="36"
        stroke="#90ffff"
        strokeWidth="1"
      />
      <rect
        x="908"
        y="56"
        width="478"
        height="388"
        rx="46"
        stroke="#90ffff"
        strokeWidth="1"
      />
      <rect
        x="212"
        y="432"
        width="298"
        height="208"
        rx="26"
        stroke="white"
        strokeWidth=".6"
      />
      <rect
        x="1148"
        y="16"
        width="248"
        height="174"
        rx="22"
        stroke="white"
        strokeWidth=".6"
      />
      <rect
        x="658"
        y="466"
        width="196"
        height="136"
        rx="18"
        stroke="#90ffff"
        strokeWidth=".5"
      />
      <line
        x1="0"
        y1="400"
        x2="1440"
        y2="400"
        stroke="white"
        strokeWidth=".3"
        strokeDasharray="9 15"
      />
      <circle cx="720" cy="390" r="228" stroke="#90ffff" strokeWidth=".6" />
      <circle cx="1348" cy="116" r="98" stroke="white" strokeWidth=".5" />
      <path
        d="M0 626 Q365 508 728 598 T1440 530"
        stroke="white"
        strokeWidth=".4"
        fill="none"
      />
      <path
        d="M0 134 Q228 80 470 154 T930 114"
        stroke="#90ffff"
        strokeWidth=".4"
        fill="none"
      />
      <path
        d="M0 770 Q508 708 910 748 T1440 714"
        stroke="#90ffff"
        strokeWidth=".28"
        fill="none"
      />
    </svg>
  );
}

/* ─── Individual member card ─── */
type MemberCardProps = TeamMember;

function MemberCard({ id, name, role, img, link }: MemberCardProps) {
  return (
    <div className="cw">
      <article
        className="card"
        id={id}
        tabIndex={0}
        aria-label={`${name}, ${role}`}
      >
        <div className="card-img">
          <img src={img || FALLBACK_IMG} alt={`${name} photo`} />
          {/* Portfolio button overlay — shown on hover */}
          <div className="card-overlay">
            {link != "" && (
              <button className="portfolio-btn">
                <a href={link} target="_blank">
                  Profile
                </a>
              </button>
            )}
          </div>
        </div>
        <div className="card-foot">
          <div className="card-name">{name}</div>
          <div className="card-role">
            <span className="card-dot" />
            {role}
          </div>
        </div>
      </article>
    </div>
  );
}

/* ─── Main TeamSection component ─── */
export default function TeamSection() {
  const secRef = useRef<HTMLElement | null>(null);
  const vpRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wordRef = useRef<HTMLDivElement | null>(null);
  const mobTrackRef = useRef<HTMLDivElement | null>(null);
  const mobLabelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sec = secRef.current;
    const vp = vpRef.current;
    const track = trackRef.current;
    const word = wordRef.current;
    const mobTrack = mobTrackRef.current;
    const mobLabel = mobLabelRef.current;

    if (!sec || !vp || !track) return;

    const dCards = Array.from(
      track.querySelectorAll<HTMLElement>("article.card"),
    );
    const mCards = Array.from(
      mobTrack?.querySelectorAll<HTMLElement>("article.card") ?? [],
    );
    const isMob = () => window.innerWidth <= 680;
    const clamp = (v: number, lo: number, hi: number) =>
      Math.max(lo, Math.min(hi, v));
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* ── Scroll-into-view reveal ── */
    const revealObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        word && word.classList.add("on");
        mobLabel && mobLabel.classList.add("on");
        const cards = isMob() ? mCards : dCards;
        const interval = isMob() ? 120 : 130;
        cards.forEach((c, i) => {
          if (reduced) {
            c.classList.add("on");
            return;
          }
          setTimeout(() => c.classList.add("on"), 60 + i * interval);
        });
        revealObs.disconnect();
      },
      { threshold: 0.08 },
    );
    revealObs.observe(sec);

    const mobObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        mobLabel && mobLabel.classList.add("on");
        mCards.forEach((c, i) => {
          if (reduced) {
            c.classList.add("on");
            return;
          }
          setTimeout(() => c.classList.add("on"), 60 + i * 110);
        });
        mobObs.disconnect();
      },
      { threshold: 0.05 },
    );
    if (mobTrack) mobObs.observe(mobTrack);

    /* ── SMOOTH SCROLL — simple lerp, no physics/bounce ── */
    let currentX = 0;
    let targetX = 0;
    let raf: number | null = null;
    let isDrag = false;

    const maxPos = () =>
      Math.min(0, -(track.scrollWidth - vp.offsetWidth + 30));
    const applyPos = (x: number) => {
      track.style.transform = `translateY(-50%) translateX(${x}px)`;
    };

    function tick() {
      const diff = targetX - currentX;
      if (Math.abs(diff) < 0.2) {
        currentX = targetX;
        applyPos(currentX);
        raf = null;
        return;
      }
      // Simple lerp — smooth, no overshoot, no bounce
      currentX += diff * 0.1;
      applyPos(currentX);
      raf = requestAnimationFrame(tick);
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const nudge = (delta: number) => {
      if (isMob()) return;
      targetX = clamp(targetX + delta, maxPos(), 0);
      kick();
    };

    const cardStep = () => {
      const cw = track.querySelector<HTMLElement>(".cw");
      return cw ? cw.offsetWidth + 28 : 246;
    };

    /* Arrow buttons */
    const prevBtn = sec.querySelector("#tsPrev");
    const nextBtn = sec.querySelector("#tsNext");
    const onPrev = () => nudge(+cardStep());
    const onNext = () => nudge(-cardStep());
    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);

    /* Mouse drag */
    let dragStartX = 0,
      dragStartPos = 0;
    const onMouseDown = (e: MouseEvent) => {
      if (isMob()) return;
      isDrag = true;
      dragStartX = e.clientX;
      dragStartPos = currentX;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      e.preventDefault();
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDrag) return;
      const newX = clamp(
        dragStartPos + (e.clientX - dragStartX),
        maxPos() - 60,
        60,
      );
      currentX = newX;
      targetX = clamp(newX, maxPos(), 0);
      applyPos(currentX);
    };
    const onMouseUp = () => {
      if (!isDrag) return;
      isDrag = false;
      targetX = clamp(currentX, maxPos(), 0);
      kick();
    };
    track.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    /* Touch (tablet) */
    let tStartX = 0,
      tStartPos = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (isMob()) return;
      tStartX = e.touches[0].clientX;
      tStartPos = currentX;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isMob()) return;
      const x = e.touches[0].clientX;
      const newX = clamp(tStartPos + (x - tStartX), maxPos() - 60, 60);
      currentX = newX;
      targetX = clamp(newX, maxPos(), 0);
      applyPos(currentX);
    };
    const onTouchEnd = () => {
      if (isMob()) return;
      targetX = clamp(currentX, maxPos(), 0);
      kick();
    };
    vp.addEventListener("touchstart", onTouchStart, { passive: true });
    vp.addEventListener("touchmove", onTouchMove, { passive: true });
    vp.addEventListener("touchend", onTouchEnd, { passive: true });

    /* Wheel — only intercept when there is horizontal room left to scroll */
    const onWheel = (e: WheelEvent) => {
      if (isMob()) return;

      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const lo = maxPos();

      // If scrolling forward (right) and already at the end → let page scroll vertically
      if (d > 0 && targetX <= lo) return;
      // If scrolling backward (left) and already at the start → let page scroll vertically
      if (d < 0 && targetX >= 0) return;

      e.preventDefault();
      nudge(-d * 0.9);
    };
    sec.addEventListener("wheel", onWheel, { passive: false });

    /* Keyboard */
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nudge(-cardStep());
      if (e.key === "ArrowLeft") nudge(+cardStep());
    };
    sec.addEventListener("keydown", onKeyDown);

    /* Resize */
    const onResize = () => {
      if (!isMob()) {
        targetX = clamp(currentX, maxPos(), 0);
        currentX = targetX;
        applyPos(currentX);
      } else {
        track.style.transform = "";
      }
    };
    window.addEventListener("resize", onResize);

    /* ── Cleanup ── */
    return () => {
      revealObs.disconnect();
      mobObs.disconnect();
      prevBtn?.removeEventListener("click", onPrev);
      nextBtn?.removeEventListener("click", onNext);
      track.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      vp.removeEventListener("touchstart", onTouchStart);
      vp.removeEventListener("touchmove", onTouchMove);
      vp.removeEventListener("touchend", onTouchEnd);
      sec.removeEventListener("wheel", onWheel);
      sec.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="ts" id="ts" aria-label="Meet the team" ref={secRef}>
      {/* Blueprint decoration */}
      <BlueprintSVG />

      {/* Nav arrows */}
      <nav className="ts-nav" aria-label="Team navigation">
        <button className="ts-btn" id="tsPrev" aria-label="Previous">
          ←
        </button>
        <button className="ts-btn" id="tsNext" aria-label="Next">
          →
        </button>
      </nav>

      {/* Vertical TEAM label (desktop + tablet) */}
      <div className="ts-word" id="tsWord" aria-hidden="true" ref={wordRef}>
        TEAM
      </div>

      {/* Desktop / Tablet viewport + track */}
      <div className="ts-vp" id="tsVP" ref={vpRef}>
        <div className="ts-track" id="tsTrack" ref={trackRef}>
          {DESKTOP_MEMBERS.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      </div>

      {/* Mobile track (shown only on ≤680px) */}
      <div className="ts-mob-track" id="tsMobTrack" ref={mobTrackRef}>
        {MOBILE_MEMBERS.map((member) => (
          <MemberCard key={member.id} img={FALLBACK_IMG} {...member} />
        ))}
      </div>

      {/* Mobile TEAM label */}
      <div
        className="ts-mob-label"
        id="tsMobLabel"
        aria-hidden="true"
        ref={mobLabelRef}
      >
        TEAM
      </div>
    </section>
  );
}

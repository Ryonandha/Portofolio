import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

const BEHIND_GRADIENT_BALATRO = `
conic-gradient(
  from 0deg at 50% 50%,
  #ff3cac,
  #784ba0,
  #2b86c5,
  #ff3cac
)
`;

const INNER_GRADIENT = "linear-gradient(145deg, rgba(96,73,110,0.6) 0%, rgba(113,196,255,0.3) 100%)";

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);

const ProfileCard = ({ avatarUrl, miniAvatarUrl, name = "Ryonandha", title = "Frontend Developer", handle = "ryonandha", status = "Available", email = "ryonandhar@gmail.com" }) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const handlePointerMove = useCallback((e) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const x = clamp(((e.clientX - rect.left) / rect.width) * 100);
    const y = clamp(((e.clientY - rect.top) / rect.height) * 100);

    wrap.style.setProperty("--pointer-x", `${x}%`);
    wrap.style.setProperty("--pointer-y", `${y}%`);
    wrap.style.setProperty("--rotate-x", `${(50 - x) / 6}deg`);
    wrap.style.setProperty("--rotate-y", `${(y - 50) / 6}deg`);
  }, []);

  const handleEnter = () => {
    wrapRef.current.classList.add("active");
  };

  const handleLeave = () => {
    wrapRef.current.classList.remove("active");
    wrapRef.current.style.setProperty("--rotate-x", `0deg`);
    wrapRef.current.style.setProperty("--rotate-y", `0deg`);
  };

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerenter", handleEnter);
    card.addEventListener("pointerleave", handleLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerenter", handleEnter);
      card.removeEventListener("pointerleave", handleLeave);
    };
  }, [handlePointerMove]);

  const styleVars = useMemo(
    () => ({
      "--behind-gradient": BEHIND_GRADIENT_BALATRO,
      "--inner-gradient": INNER_GRADIENT,
    }),
    [],
  );

  return (
    <div ref={wrapRef} className="pc-card-wrapper" style={styleVars}>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />

          {/* Avatar */}
          <div className="pc-avatar-content">
            <img className="avatar" src={avatarUrl} alt="avatar" />
          </div>

          {/* Text */}
          <div className="pc-details">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>

          {/* Bottom info */}
          <div className="pc-user-info">
            <div className="pc-user-details">
              <div className="pc-mini-avatar">
                <img src={miniAvatarUrl || avatarUrl} alt="mini avatar" />
              </div>
              <div>
                <div className="pc-handle">@{handle}</div>
                <div className="pc-status">{status}</div>
              </div>
            </div>

            <button className="pc-contact-btn" onClick={() => (window.location.href = `mailto:${email}?subject=Portfolio Inquiry`)}>
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;

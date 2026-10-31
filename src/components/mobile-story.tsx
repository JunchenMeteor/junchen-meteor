"use client";

import { useEffect, useRef } from "react";

export type StoryScene = {
  kicker: string;
  title: string;
  body: string;
  meta: string[];
};

type MobileStoryProps = {
  label: string;
  title: string;
  hint: string;
  scenes: StoryScene[];
};

/**
 * Scroll narrative: each scene fades, scales and slides as the page
 * advances through a pinned stage. Without JavaScript or with reduced
 * motion the scenes simply stack and stay readable.
 */
export function MobileStory({ label, title, hint, scenes }: MobileStoryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.dataset.mode = "static";
      return;
    }

    track.dataset.mode = "motion";
    track.style.setProperty("--scenes", String(scenes.length));

    const panels = Array.from(stage.querySelectorAll<HTMLElement>("[data-scene]"));
    if (panels.length === 0) return;

    let frame = 0;

    const render = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const cursor = progress * (panels.length - 1);
      const active = Math.min(panels.length - 1, Math.floor(cursor));
      const fraction = cursor - active;
      const handover = 0.88;

      panels.forEach((panel, index) => {
        let opacity = 0;
        let offset = 0;

        if (index === active) {
          const exit = fraction <= handover ? 0 : (fraction - handover) / (1 - handover);
          opacity = 1 - exit;
          offset = -exit * 56;
        } else if (index === active + 1) {
          const enter = fraction <= handover ? 0 : (fraction - handover) / (1 - handover);
          opacity = enter;
          offset = (1 - enter) * 56;
        }

        panel.style.opacity = String(opacity);
        panel.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        panel.style.visibility = opacity <= 0.01 ? "hidden" : "visible";
      });
    };

    const requestRender = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [scenes.length]);

  return (
    <section className="story-section">
      <div className="section-heading story-heading">
        <span>{label}</span>
        <h2>{title}</h2>
        <p>{hint}</p>
      </div>
      <div className="story-track" ref={trackRef}>
        <div className="story-stage" ref={stageRef}>
          {scenes.map((scene, index) => (
            <article className="story-scene" data-scene={index} key={scene.title}>
              <span className="story-numeral" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="story-kicker">
                {String(index + 1).padStart(2, "0")} · {scene.kicker}
              </span>
              <h3>{scene.title}</h3>
              <p>{scene.body}</p>
              <ul className="story-meta">
                {scene.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <div className="story-progress" aria-hidden="true">
            <span ref={progressRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

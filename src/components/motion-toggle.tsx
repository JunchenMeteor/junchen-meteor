"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Sparkles } from "lucide-react";

type MotionToggleProps = {
  label: string;
  onLabel: string;
  offLabel: string;
};

const storageKey = "jc-meteor-motion";
const changeEvent = "jc-meteor-motion-change";

function subscribe(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  return () => window.removeEventListener(changeEvent, onChange);
}

function getSnapshot() {
  return document.documentElement.dataset.motion ?? "on";
}

function getServerSnapshot() {
  return "on";
}

/**
 * Lets a visitor turn ambient motion on even when the operating system asks
 * for reduced motion. The choice is remembered and applied instantly.
 */
export function MotionToggle({ label, onLabel, offLabel }: MotionToggleProps) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const enabled = mode !== "off";

  const toggle = useCallback(() => {
    const next = document.documentElement.dataset.motion === "off" ? "on" : "off";
    document.documentElement.dataset.motion = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* storage can be blocked; the attribute still applies */
    }
    window.dispatchEvent(new Event(changeEvent));
  }, []);

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={label}
      title={enabled ? onLabel : offLabel}
    >
      <Sparkles size={16} />
      <span className="motion-toggle-dot" data-on={enabled} />
      <span className="sr-only">{enabled ? onLabel : offLabel}</span>
    </button>
  );
}

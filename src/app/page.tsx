"use client";
import Avatar from "./components/avatar";
import { useState } from "react";
import ColorPicker from "./components/color-picker";
import ColorPreset from "./components/color-preset";

export default function Home() {
  const [color, setColor] = useState("#000000");

  const resetColor = () => setColor("#000000");

  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center">
        <ColorPicker color={color} setColor={setColor} />
        <Avatar color={color} />
        <div className="flex flex-wrap gap-4 w-full justify-center">
          <ColorPreset color="#800080" setColor={setColor} />
          <ColorPreset color="#FF0000" setColor={setColor} />
          <ColorPreset color="#00FF00" setColor={setColor} />
          <ColorPreset color="#0000FF" setColor={setColor} />
          <ColorPreset color="#FFFF00" setColor={setColor} />
        </div>

        <button
          className="p-2 sm:p-4 self-center rounded-xl bg-white text-background text-lg sm:text-xl md:text-2xl   hover:bg-gray-200 hover:cursor-pointer"
          type="button"
          onClick={resetColor}
        >
          Reset
        </button>
      </main>
      <footer className="row-start-3 mt-8 py-4 border-t border-gray-200 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://harveytseng.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <line x1="2" y1="12" x2="22" y2="12"></line>
          </svg>
          <span>My Website</span>
        </a>
        <a
          href="https://github.com/Verdenroz/playtoon-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub Repository</span>
        </a>
      </footer>
    </div>
  );
}

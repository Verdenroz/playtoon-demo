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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

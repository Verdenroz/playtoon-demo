interface ColorPresetProps {
  color: string;
  setColor: (color: string) => void;
}

export default function ColorPreset({ color, setColor }: ColorPresetProps) {
return (
    <button
        className="flex items-center justify-center p-4 sm:p-6 md:p-8 border-2 border-white rounded-full"
        style={{ backgroundColor: color }}
        onClick={() => setColor(color)}
    />
);
}

interface ColorPickerProps {
  color: string;
  setColor: (color: string) => void;
}

export default function ColorPicker({ color, setColor }: ColorPickerProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <label htmlFor="color-picker">Pick a color:</label>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full rounded-full"
      />
    </div>
  );
}

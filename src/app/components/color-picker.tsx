interface ColorPickerProps {
    color: string;
    setColor: (color: string) => void;
  }
  
  export default function ColorPicker({ color, setColor }: ColorPickerProps) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <label htmlFor="color-picker" className="text-lg text-center">Pick a color:</label>
        <input
          id="color-picker"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full max-w-xs h-8 sm:h-12 cursor-pointer rounded"
        />
        <div className="text-sm font-mono">{color}</div>
      </div>
    );
  }
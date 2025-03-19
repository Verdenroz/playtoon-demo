export default function Avatar({ color }: { color: string }) {
  return (
    <div
      className="flex items-center justify-center p-6 sm:p-24 border-4 border-white transition-colors duration-300 ease-in-out rounded-full"
      style={{ backgroundColor: color }}
    >
      <span className="inline-block w-16 h-16 sm:w-32 sm:h-32 md:w-64 md:h-64 bg-white border-4 border-black rounded-full" />
    </div>
  );
}

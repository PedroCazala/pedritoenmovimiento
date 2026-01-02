import Button from './Button';

export default function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="
        border-2
        border-blue-600
        text-blue-600
        hover:bg-blue-600
        hover:text-white
        font-semibold
        px-6 py-3
        rounded-lg
        transition-all duration-300
        transform hover:scale-105
      "
    >
      {children}
    </Button>
  );
}

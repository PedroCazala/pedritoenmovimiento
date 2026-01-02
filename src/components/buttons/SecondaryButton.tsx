import Button from './Button';

export default function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="
        bg-gray-200
        hover:bg-gray-300
        text-gray-800
        font-semibold
        px-6 py-3
        rounded-lg
        transition-all duration-300
        transform hover:scale-105
        shadow hover:shadow-lg
      "
    >
      {children}
    </Button>
  );
}

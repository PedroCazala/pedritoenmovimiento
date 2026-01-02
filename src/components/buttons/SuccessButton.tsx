import Button from './Button';

export default function SuccessButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        font-semibold
        px-6 py-3
        rounded-lg
        transition-all duration-300
        transform hover:scale-105
        shadow-lg hover:shadow-xl
      "
    >
      {children}
    </Button>
  );
}

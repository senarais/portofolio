import { Howl } from "howler";

interface CardProps {
  src: string;
  label: string;
  onClick?: () => void; 
}

function Card({ src, label, onClick }: CardProps) {
  const handleClick = () => {
    // 🔊 Play click sound
    const sound = new Howl({
      src: ["/audio/click.mp3"],
      volume: 0.8,
    });
    sound.play();

    // panggil event parent (buka modal, dll)
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className="relative shadow-sm shadow-black-primary cursor-pointer bg-blue-secondary flex justify-center items-center w-[90px] h-[90px] rounded-xl"
    >
      <img
        className="w-[70px] transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={src}
        alt={label}
      />
      <p className="absolute -bottom-8 text-black-primary text-xl">{label}</p>
    </div>
  );
}

export default Card;

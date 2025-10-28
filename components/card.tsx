interface CardProps {
  src: string;
  label: string;
}

function Card({ src, label }: CardProps) {
  return (
    <div className="relative cursor-pointer  flex justify-center items-center w-[120px] h-[120px] rounded-xl group">
      <img
        className="w-[90px] transition-transform duration-300 ease-in-out group-hover:scale-110"
        src={src}
        alt={label}
      />
      <p className="absolute -bottom-8 text-black text-xl">{label}</p>
    </div>
  );
}

export default Card;

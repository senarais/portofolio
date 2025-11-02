interface SocialLinkProps {
  src: string;       // path ke icon, misal "/links/youtube.png"
  label: string;     // teks di bawah icon, misal "YouTube"
  href: string;      // link tujuan
}

export default function SocialLink({ src, label, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative cursor-pointer flex justify-center items-center w-[120px] h-[120px] rounded-xl"
    >
      <img
        className="w-[90px] transition-transform duration-300 ease-in-out hover:scale-105"
        src={src}
        alt={label}
      />
      <p className="absolute -bottom-1 text-black-primary font-medium text-md">{label}</p>
    </a>
  );
}

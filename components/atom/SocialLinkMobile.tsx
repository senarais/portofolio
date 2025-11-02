interface SocialLinkProps {
  src: string;
  label: string;
  href: string;
}

export default function SocialLinkMobile({ src, label, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[90%] border border-gray-400 rounded-xl p-3 flex items-center gap-4 cursor-pointer hover:bg-white-secondary transition-colors duration-300"
    >
      <img
        className="w-[50px] transition-transform duration-300 ease-in-out hover:scale-105"
        src={src}
        alt={label}
      />
      <p className="text-black-primary font-medium text-lg">{label}</p>
    </a>
  );
}

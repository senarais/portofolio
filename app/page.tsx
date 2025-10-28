import Card from "@/components/card";
import Text from "@/components/text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white-primary flex justify-center items-center">
      <div className="relative w-[60%] h-[500px] p-4 bg-white-primary rounded-xl border border-gray-400 shadow-xl">
        <div className="absolute top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center pl-6 text-xl"><p>home</p></div>
        
        <Text />
        <div className="mt-5 flex justify-center gap-12 w-full h-fit p-5">
          <Card src="/info.png" label="about" />
          <Card src="/link.png" label="links" />
          <Card src="/folder.png" label="projects" />
          <Card src="/mail.png" label="contact" />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-[850px] h-[500px] p-4 pb-0 bg-white-primary rounded-xl border border-gray-400 shadow-xl overflow-hidden">
      {/* header */}
      <div className="absolute top-0 left-0 rounded-t-xl w-full h-[60px] bg-blue-primary flex items-center pl-6 text-xl z-10">
        <p>about</p>
      </div>

      {/* content wrapper */}
      <div className="pt-[50px] flex flex-col h-full -mx-4"> 
        {/* top (profile) */}
        <div className="h-[200px] bg-white-secondary flex gap-10 items-center border-b border-black/40 pl-15 pr-4">
          <Image width={170} height={170} src="/sena.png" alt="" className="rounded-full"/>
          <div className="text-black text-lg font-light">
            <h1 className="text-5xl text-blue-tertiary mb-2 font-medium">Abisena Rais</h1>
            <p>Constantly evolving web developer. <br /> Versatile skills, modern solutions.</p>
          </div>
        </div>

        {/* scrollable content */}
        <div className="flex-1 flex flex-col gap-10 overflow-y-auto pl-15 pr-25 py-8 ">
          {/* introduction */}
          <div className="flex flex-col gap-4">
            <p className="text-blue-primary text-xl leading-relaxed">hi! i'm sena, world's greatest samurai! 
              but right now i'm shifting to software engineering. so... about what i do, </p>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-xl leading-relaxed">i develop modern web applications.</li>
              <li className="text-blue-primary text-xl leading-relaxed">work across front-end and back-end stacks.</li>
              <li className="text-blue-primary text-xl leading-relaxed">develop brilliant project ideas that solve real-world problems</li>
              <li className="text-blue-primary text-xl leading-relaxed">keep learning, because even samurais need training</li>
            </ul>
            <p className="text-blue-primary text-xl leading-relaxed">need me to develop your app? email me anytime!</p>

          </div>
          {/* story */}
          <div className="flex flex-col gap-4">
            <h2 className="text-blue-primary font-semibold text-3xl">short life story</h2>
            <p className="text-blue-primary text-xl leading-relaxed">so... i have some interesting stories about my life. i used to live in a dorm during high school — why? that’s the interesting part. my goal was actually to seek discomfort. i truly believe that to grow in life, you need to step out of your comfort zone. the things you don’t like are often what shape you into a better individual.</p>
            <p className="text-blue-primary text-xl leading-relaxed">and that mindset has become a strong foundation for pursuing my dreams. my career path is to become a software engineer, but my ultimate dream is to contribute to the educational growth of our nation — ensuring that everyone has equal access to quality education. right now, i’m still figuring out the path to make that dream come true, hehe.</p>
          </div>
          {/* education */}
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-primary font-semibold text-3xl">education</h2>
            <p className="text-blue-primary text-xl leading-relaxed">Undergraduate in Information Systems</p>
            <p className="text-blue-primary font-extralight text-md leading-relaxed">(Universitas Islam Negeri Syarif Hidayatullah Jakarta)</p>
          </div>
          {/* certificate */}
          <div className="flex flex-col gap-2">
            <h2 className="text-blue-primary font-semibold text-3xl">certificate</h2>
            <div className="">
              <p className="text-blue-primary text-xl leading-relaxed">The Complete Full-stack Web Development Boothcamp</p>
              <p className="text-blue-primary font-extralight text-md leading-relaxed">(Dr. Angela Yu)</p>
              <a href="https://www.udemy.com/certificate/UC-d3d7a52d-c1c5-4582-b719-e372cd92cc98/" target="_blank" rel="noopener noreferrer" className="text-blue-tertiary underline font-extralight text-md leading-relaxed">see more</a>
            </div>
          </div>
          {/* interest */}
          <div className="flex flex-col gap-4">
            <h2 className="text-blue-primary font-semibold text-3xl">other interest</h2>
            <ul className="list-disc list-inside flex flex-col gap-1">
              <li className="text-blue-primary text-xl leading-relaxed">glory glory man unitedd!!</li>
              <li className="text-blue-primary text-xl leading-relaxed">developing cool apps, like for reall, i enjoy it.</li>
              <li className="text-blue-primary text-xl leading-relaxed">love indomie, i do think it's the best ever food.</li>
              <li className="text-blue-primary text-xl leading-relaxed">lately i've been studying history, it's actually pretty interesting</li>
              <li className="text-blue-primary text-xl leading-relaxed">i like to see different perspective of people.</li>
              <li className="text-blue-primary text-xl leading-relaxed">enjoy reading fiction and high fantasy creative things.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

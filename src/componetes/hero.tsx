import Image from "next/image";
import img01 from "public/img01.jpg";
export const HeroPage = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 w-scerrn">
        <Image
          src={img01}
          alt="Next.js Logo"
          priority
          className="h-auto w-full object-cover -z-10"
        />
      </div>
      <div className="flex items-center justify-center">
      <h1 className="text-6xl font-bold text-white mt-[20rem] drop-shadow-[0_0_10px_#FFC107]">Professional Gym Trainer</h1>
      </div>
    </div>
  );
};

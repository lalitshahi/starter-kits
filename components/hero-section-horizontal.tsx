import Image from "next/image";
import { Button } from "@/components/ui/button";
import { range } from "lodash";
import Badge from "@/components/badge";

const HeroSectionHorizontal = () => (
  <div className="flex flex-col lg:flex-row gap-12 p-10 md:p-24">
    <div className="flex flex-col flex-1 gap-7 relative items-center lg:items-start">
      <Badge />
      <h1 className="text-[50px] md:text-[65px] font-bold text-foreground text-center lg:text-left">
        Launch your SaaS NOW, 🚀
        <br /> not weeks later
      </h1>
      <p className="leading-loose text-center lg:text-left">
        <strong>NextJS Boilerplate</strong> - All you need to Launch your Idea
        into market without losing your time on basic stuff.
        <br />
        Inception to Market Validation in just minutes. ✨
      </p>
      <div className="flex gap-10 justify-center items-center lg:items-start flex-col">
        <Button variant={"default"} className="w-[fit-content]">
          Launch Now
        </Button>
        <AvatarGroup />
      </div>
    </div>
    <div className="lg:flex-1 w-[full] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative bg-black rounded-xl overflow-hidden">
      <Image src={"/hero.jpg"} alt={"hero-section"} fill />
    </div>
  </div>
);

export default HeroSectionHorizontal;

const AvatarGroup = () => {
  return (
    <div className="flex flex-col md:flex-row relative justify-center lg:justify-start items-center gap-4">
      <div className="flex">
        {range(1, 5).map((avatar) => (
          <div
            key={avatar}
            className="w-[45px] h-[45px] relative rounded-full overflow-hidden border-background border-4 ml-[-10px]"
          >
            <Image
              src={`/user${avatar}.jpg`}
              alt="userAvatar"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex-col ml-[10px]">
        <Rating />
        <p>100+ users have launched</p>
      </div>
    </div>
  );
};

const Rating = () => {
  return (
    <div className="flex justify-center md:justify-start relative gap-2">
      {range(5).map((star) => (
        <span key={star}>⭐</span>
      ))}
    </div>
  );
};

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { range } from "lodash";

const HeroSectionHorizontal = () => (
  <div className="flex h-full items-center gap-12 p-24">
    <div className="flex flex-col flex-1 gap-7">
      <h1 className="text-[65px] font-bold text-foreground">
        Launch your SaaS NOW, 🚀
        <br /> not weeks later
      </h1>
      <h2 className="text-[25px] font-semibold"></h2>
      <p className="leading-loose">
        <strong>NextJS Boilerplate</strong> - All you need to Launch your Idea
        into market without losing your time on basic stuff.
        <br />
        Inception to Market Validation in just minutes. ✨
      </p>
      <div className="flex gap-10">
        <Button variant={"default"} className="w-[fit-content]">
          Launch Now
        </Button>
        <AvatarGroup />
      </div>
    </div>
    <div className="flex-1 h-[600px] relative bg-black rounded-xl overflow-hidden">
      <Image src={"/hero.jpg"} alt={"hero-section"} fill />
    </div>
  </div>
);

export default HeroSectionHorizontal;

const AvatarGroup = () => {
  return (
    <div className="flex relative">
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
      <div className="flex-col ml-[10px]">
        <Rating />
        <p>100+ users have launched</p>
      </div>
    </div>
  );
};

const Rating = () => {
  return (
    <div className="flex relative gap-2">
      {range(5).map((star) => (
        <span key={star}>⭐</span>
      ))}
    </div>
  );
};

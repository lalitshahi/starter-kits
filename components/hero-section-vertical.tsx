import Image from "next/image";
import { Button } from "@/components/ui/button";
import { range } from "lodash";

const HeroSectionVertical = () => (
  <div className="flex-col justify-center h-full items-center gap-12 p-24">
    <div className="flex flex-col justify-center flex-1 gap-7 mb-5">
      <h1 className="text-[65px] font-bold text-foreground text-center">
        Launch your SaaS NOW, 🚀
        <br /> not weeks later
      </h1>
      <p className="leading-loose text-center">
        <strong>NextJS Boilerplate</strong> - All you need to Launch your Idea
        into market without losing your time on basic stuff.
        <br />
        Inception to Market Validation in just minutes. ✨
      </p>
      <div className="flex gap-10 items-center justify-center flex-col">
        <Button variant={"default"} className="w-[200px]">
          Launch Now
        </Button>
        <AvatarGroup />
      </div>
    </div>
    <div className="flex-1 h-[800px] mx-[100px] relative rounded-xl overflow-hidden">
      <Image src={"/hero2.png"} alt={"hero-section"} fill />
    </div>
  </div>
);

export default HeroSectionVertical;

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

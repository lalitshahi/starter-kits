import HeroSectionHorizontal from "@/components/hero-section-horizontal";
import HeroSectionVertical from "@/components/hero-section-vertical";
// import NavBar from "@/components/top-navbar";
export default function Home() {
  return (
    <div className="h-full">
      <div className="bg-black p-5 m-20 rounded-2xl">
        <HeroSectionHorizontal />
      </div>
      <div className="bg-black p-5 m-20 rounded-2xl">
        <HeroSectionVertical />
      </div>
    </div>
  );
}

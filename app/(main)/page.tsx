import Feature from "@/components/features/features";
import HeroSectionHorizontal from "@/components/hero/hero-section-horizontal";
import HeroSectionVertical from "@/components/hero/hero-section-vertical";
import NavBar from "@/components/navbar/top-navbar";
export default function Home() {
  return (
    <div className="h-full">
      <NavBar />
      <Feature />
      {/* <div className="flex flex-col gap-5 mt-20 ml-20">
        <h1 className="font-bold text-3xl">Hero Section</h1>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Hero Section split horizontally</h3>
          <span className="bg-muted px-4 py-2 rounded-lg w-fit text-xs">
            Variant 1
          </span>
        </div>
      </div>
      <div className="bg-black/5 p-5 m-20 mt-5 rounded-2xl border">
        <NavBar />
        <HeroSectionHorizontal />
      </div>
      <div className="flex flex-col gap-5 m-5 ml-20">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Hero Section split vertically</h3>
          <span className="bg-muted px-4 py-2 rounded-lg w-fit text-xs">
            Variant 2
          </span>
        </div>
      </div>
      <div className="bg-black/5 p-5 m-20 mt-0 rounded-2xl border">
        <NavBar />
        <HeroSectionVertical />
      </div> */}
    </div>
  );
}

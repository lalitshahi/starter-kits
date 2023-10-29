import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageProps {
  imageLight: string;
  imageDark: string;
  width: number;
  height: number;
  className?: string;
  alt: string;
}
const ThemeBasedImage = ({
  imageLight,
  imageDark,
  alt,
  width,
  height,
  className,
}: ImageProps) => {
  return (
    <>
      <Image
        src={imageLight}
        alt={alt}
        width={width}
        height={height}
        className={cn("hidden dark:flex", className)}
      />

      <Image
        src={imageDark}
        alt={alt}
        width={width}
        height={height}
        className={cn("flex dark:hidden", className)}
      />
    </>
  );
};

export default ThemeBasedImage;

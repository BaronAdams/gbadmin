import type { V2_MetaFunction } from "@remix-run/node";
import AboutUsSection from "~/components/AboutUsSection";
import HeroSection from "~/components/HeroSection";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroSection/>
      <AboutUsSection/>
    </>
  );
}

import Box1 from "@/app/components/Box1";
import Box2 from "@/app/components/Box2";
import Box3 from "@/app/components/Box3";
import "@/app/globals.css";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <>
      <RootLayout>
        <Box1/>
        <Box2/>
        <Box3/>
      </RootLayout>
    </>
  );
}
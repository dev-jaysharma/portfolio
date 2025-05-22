import Container from "@/components/container";
import Blob from "@/components/blob";
import HeroText from "@/components/heroText";
import HeroIcons from "@/components/heroIcons";
export default function Home() {
  return (
    <Container className="p-4 md:p-10 h-screen">
      <div>
      <HeroText/>
      </div>
      <div className="absolute z-10 right-2 md:h-[99vh] md:w-24 w-full h-24 bottom-0 flex items-center justify-center">
        <HeroIcons/>
      </div>
      <div>
        <Blob/>
      </div>
    </Container>
  );
}

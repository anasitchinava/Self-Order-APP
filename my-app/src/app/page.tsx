import Navigation from "@/components/nav/navigation";
import Banner from "./banner/page";
import Testimonials from "./testimonials/page";
import Footer from "@/components/nav/footer";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

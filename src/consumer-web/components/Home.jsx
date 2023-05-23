import About from "./About";
import Action from "./CTA";
import Events from "./Events";
import Services from "./Services";
import Starts from "./Starts";
import Testimonials from "./Testimonials";
import HeroPage from "./Hero";

export default function Home() {
    return (
        <main>
            <HeroPage />
            <About />        
            <Services />
            <Starts />
            <Testimonials />
            <Events />
            <Action />
        </main>
    );
}
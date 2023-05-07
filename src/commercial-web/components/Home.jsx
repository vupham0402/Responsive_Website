import About from "./About";
import Action from "./CTA";
import Events from "./Events";
import Services from "./Services";
import Starts from "./Starts";
import Testimonials from "./Testimonials";

export default function Home() {
    return (
        <main>
            <About />        
            <Services />
            <Starts />
            <Testimonials />
            <Events />
            <Action />
        </main>
    );
}
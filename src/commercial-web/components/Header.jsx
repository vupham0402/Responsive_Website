import HeroPage from "./Hero";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className = "header bg-blue" id="eyeprogpo">
            <NavBar />
            <HeroPage />
        </header>
    );
};
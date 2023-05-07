import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState} from "react";

export default function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTop(true);
            }
            else {
                setBackToTop(false);
            }
        }, [])
    })

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            {backToTop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '50px',
                        height: '50px',
                        width: '50px',
                        fontSize: '50px',
                        backgroundColor: 'transparent'
                    }}
                    onClick={scrollUp}
                >
                    <FontAwesomeIcon icon={faArrowUp} style={{color: "var(--light-gray)",}} />
                </button>
            )}
        </>
    );
}
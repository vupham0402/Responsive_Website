import { ArticleOne, ArticleSecond, ArticleThird, PDFOne, PDFSecond, EventOne, EventSecond, EventThird, Dot } from "../../assets/assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Events() {
    return (
        <section id = "posts" className = "posts py">
            <div className = "container">
                <div className = "section-head">
                    <h2>Articles</h2>
                </div>
                <div className = "posts-inner grid">
                    <div className = "img">
                        <a href={PDFOne} target="_blank"><img src = {ArticleOne} alt="article"/></a>
                    </div>

                    <div className = "img">
                        <a href={PDFSecond} target="_blank"><img src = {ArticleSecond} alt="article"/></a>
                    </div>

                    <div className = "img">
                        <a href="https://digital.eyeworld.org/i/1475139-sep-2022/86?" target="_blank"><img src = {ArticleThird} alt="article"/></a>
                    </div>
                </div>
            </div>
            <br />
            <div className = "line-art flex">
                <div></div>
                    <img src = {Dot} atl="dot" />
                <div></div>
            </div>
            <br />
            <div className = "section-head">
                <h2>Upcoming Events</h2>
            </div>
            <Carousel autoPlay={true} showArrows={false} showStatus={false} showIndicators={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img className="eventOne" src = {EventOne} atl="event" />
                </div>
                <div>
                    <img className="eventSecond" src= {EventSecond} atl="event" />
                </div>
                <div>
                    <img className="eventThird" src= {EventThird} atl="event" />
                </div>
            </Carousel>
        </section>
    );
}
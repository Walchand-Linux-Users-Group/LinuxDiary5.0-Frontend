import { useEffect, useRef, useState } from "react";
import "./session.css";
import OpenSourceiImg from "../../assets/roadmap/Open_Souce.png";
import PenguinGiftImg from "../../assets/roadmap/penguin_gift.webp";
import FilesImg from "../../assets/roadmap/files.png";
import NetworkImg from "../../assets/roadmap/network.png";

const Session = () => {
    return (
        <div className="py-20">
            <div className="title-sess">
                <h1 className="text-white font-bold text-center text-3xl lg:text-5xl">
                    Roadmap
                </h1>
            </div>
            <div className="card-area">
                <TravelCard
                    type="city"
                    title="Into open source"
                    description="Into open source"
                    text="Worried about being an absolute beginner in Linux? Don't fret! We've got you covered with a beginner-friendly session that serves as the perfect introduction to open-source and Linux. You'll gain a solid foundation and discover real-life applications of these technologies."
                    imageSrc={OpenSourceiImg}
                />
                <TravelCard
                    type="ski"
                    title="Linux Unleashed"
                    description="Linux Unleashed"
                    text="With a strong foundation in place, we will dive into the world of open-source and Linux, empowering you with comprehensive knowledge of crucial commands, the booting process, text editors, process management and the seamless integration of pipelining techniques."
                    imageSrc={PenguinGiftImg}
                />
                <TravelCard
                    type="beach"
                    title="File Fortress"
                    description="File Fortress"
                    text="Guess what? Everything in Linux is a file! Here we'll explore the file system in Linux. In this enlightening session, we will familiarise ourselves with file systems, groups, users and the diverse range of commands vital for their successful management."
                    imageSrc={FilesImg}
                />
                <TravelCard
                    type="camping"
                    title="Net-Wars"
                    description="Net-Wars"
                    text="Seeking knowledge and excitement? Join our captivating journey through the intricate worlds of GUI and CLI, unveiling the remarkable advantages of CLI. Together, we'll explore advanced commands, essential networking techniques and many more."
                    imageSrc={NetworkImg}
                />
            </div>
        </div>
    );
};

const TravelCard = ({ type, title, description, text, imageSrc }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const curCard = useRef(null);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            if (curCard.current) {
                const top = curCard.current.getBoundingClientRect().top;
                const bottom = curCard.current.getBoundingClientRect().bottom;
                if (top < window.innerHeight - 200 && bottom > 200 ) {
                    setIsFlipped(true);
                } else {
                    setIsFlipped(false);
                }
            }
        });
    }, []);
    return (
        <div
            ref={curCard}
            className="card-section"
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
        >
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                <div className={`card-front card-front--${type}`}>
                    <img src={imageSrc} alt={title} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-front__heading">{title}</h2>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-content">
                        <h3 className="card-front__heading">{description}</h3>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Session;

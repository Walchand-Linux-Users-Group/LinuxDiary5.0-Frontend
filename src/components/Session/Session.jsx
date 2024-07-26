import { useState } from "react";
import "./session.css";

const Session = () => {
  return (
    <div className="card-area">
      <TravelCard
        type="city"
        title="Into open source"
        description="Into open source"
        text="Worried about being an absolute beginner in Linux? Don't fret! We've got you covered with a beginner-friendly session that serves as the perfect introduction to open-source and Linux. You'll gain a solid foundation and discover real-life applications of these technologies."
        imageSrc="/src/assets/roadmap/Open_Souce.png"
      />
      <TravelCard
        type="ski"
        title="Linux Unleashed"
        description="Linux Unleashed"
        text="With a strong foundation in place, we will dive into the world of open-source and Linux, empowering you with comprehensive knowledge of crucial commands, the booting process, text editors, process management and the seamless integration of pipelining techniques."
        imageSrc="/src/assets/roadmap/penguin_gift.webp"
      />
      <TravelCard
        type="beach"
        title="File Fortress"
        description="File Fortress"
        text="Guess what? Everything in Linux is a file! Here we'll explore the file system in Linux. In this enlightening session, we will familiarise ourselves with file systems, groups, users and the diverse range of commands vital for their successful management."
        imageSrc="/src/assets/roadmap/files.png"
      />
      <TravelCard
        type="camping"
        title="Net-Wars"
        description="Net-Wars"
        text="Seeking knowledge and excitement? Join our captivating journey through the intricate worlds of GUI and CLI, unveiling the remarkable advantages of CLI. Together, we'll explore advanced commands, essential networking techniques and many more."
        imageSrc="/src/assets/roadmap/network.png"
      />
    </div>
  );
};

const TravelCard = ({ type, title, description, text, imageSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-section">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className={`card-front card-front--${type}`}>
          <img src={imageSrc} alt={title} className="card-image" />

          <div className="card-content">
            <div className="card-oms">
              <h2 className="card-front__heading">{title}</h2>

              <button
                className="card-button"
                onClick={() => setIsFlipped(true)}
              >
                View more
              </button>
            </div>
          </div>
        </div>
        <div className="card-back">
          {/* <img src={imageSrc} alt={title} className="card-image" /> */}
          <div className="card-content">
            <div>
              <h3 className="card-front__heading">{description}</h3>
              <p className="card-text">{text}</p>
            </div>
            <button className="card-button" onClick={() => setIsFlipped(false)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;

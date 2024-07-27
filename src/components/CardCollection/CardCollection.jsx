// import React from 'react';
import styles from "./cardc.module.css";
import WarGameImg1 from "../../assets/wargames/Wargame1.png";
import WarGameImg2 from "../../assets/wargames/output-onlinepngtools-removebg-preview.png";
import WarGameImg3 from "../../assets/wargames/wargame2.webp";

const Card = ({ coverImage, titleImage, characterImage }) => (
    <div className={styles.cardContainer}>
        <a
            alt="Mythrill"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
        >
            <div className={styles.wrapper}>
                <img
                    src={coverImage}
                    className={styles.coverImage}
                    alt="Cover"
                />
            </div>
            <img src={titleImage} className={styles.title} alt="Title" />

            <img
                src={characterImage}
                className={styles.character}
                alt="Character"
            />
        </a>
    </div>
);

const CardCollection = () => (
    <>
        <Card
            coverImage={WarGameImg1}
            titleImage={WarGameImg2}
            characterImage={WarGameImg3}
        />
    </>
);

export default CardCollection;

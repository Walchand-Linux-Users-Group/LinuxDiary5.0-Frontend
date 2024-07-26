// import React from 'react';
import styles from "./cardc.module.css"; // Assuming you're using CSS modules

const Card = ({ href, coverImage, titleImage, characterImage }) => (
    <div className={styles.cardContainer}>
        <a
            href={href}
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
            href="https://www.mythrillfiction.com/the-dark-rider"
            coverImage="/src/assets/wargames/Wargame1.png"
            titleImage="https://example.com/dark_rider-title.png"
            characterImage="/src/assets/wargames/wargame2.webp"
        />
    </>
);

export default CardCollection;

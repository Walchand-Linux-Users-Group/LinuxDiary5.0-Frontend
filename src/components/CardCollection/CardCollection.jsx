// import React from 'react';
import styles from "./cardc.module.css"; // Assuming you're using CSS modules

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
            coverImage="/src/assets/wargames/Wargame1.png"
            titleImage="/src/assets/wargames/output-onlinepngtools-removebg-preview.png"
            characterImage="/src/assets/wargames/wargame2.webp"
        />
    </>
);

export default CardCollection;

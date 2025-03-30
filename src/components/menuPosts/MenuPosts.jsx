import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Traveling is not just about visiting places; it's about experiencing
            cultures, traditions, and the essence of humanity. One such
            extraordinary journey is to the Maha Kumbh Mela, the world's largest
            religious gathering, held once every 12 years in Prayagraj, India.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Er. Mahato G</span>
            <span className={styles.date}> - 25.01.2025</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Culture is the invisible thread that weaves together the identity of
            a society. It encompasses language, traditions, values, art, music,
            food, and social norms—shaping the way people think, behave, and
            interact. Culture is dynamic, constantly evolving with time,
            influenced by history, globalization, and technological
            advancements.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Er. Mahato G</span>
            <span className={styles.date}> - 27.01.2025</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Food is more than just sustenance—it is a reflection of culture,
            history, and identity. Every dish tells a story, shaped by
            geography, tradition, and the people who prepare it. From the rich
            spices of Indian curries to the delicate flavors of Japanese sushi,
            food connects us to our roots and brings people together.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Er. Mahato G</span>
            <span className={styles.date}> - 05.02.2025</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Fashion is a powerful form of self-expression, reflecting
            individuality, culture, and societal trends. It is more than just
            clothing—it is a statement, an art, and a way to communicate
            identity. From the elegance of haute couture to the comfort of
            streetwear, fashion continuously evolves, influenced by history,
            technology, and global cultures.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Er. Mahato G</span>
            <span className={styles.date}> - 08.02.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;

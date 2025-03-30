import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.spritual}`}
        >
          <Image
            src="/spritual.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Spritual
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.healthAndFitness}`}>
        <Image
            src="/Fitness_1.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Health&Fitness
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.scienceAndTechnology}`}>
          <Image
            src="/science_technology.jpeg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Science&Tech
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.sports}`}>
          <Image
            src="/sports.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Sports
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.loveAndRomance}`}>
          <Image
            src="/Love_2.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Love&Romance
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.entertainment}`}>
          <Image
            src="/entertainment.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Entertainment
        </Link>

        {/* <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image
            src="/culture.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/coding.jpeg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image
            src="/travel.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image
            src="/food.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>

        <Link href={`/blog`} className={`${styles.category} ${styles.artAndArtist}`}>
          <Image
            src="/artAndArtist.jpg"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Art&Artist
        </Link> */}
      </div>
    </div>
  );
};

export default CategoryList;

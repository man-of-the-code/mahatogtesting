import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, MahatoG is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/aiRevolution.jpg" alt="" width={0} height={0} sizes="100vw" className={styles.featuredImage} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          The AI Revolution: Transforming the Future
          </h1>
          <p className={styles.postDesc}>
          The world is witnessing a profound transformation driven by artificial intelligence (AI). From automation to deep learning, AI is reshaping industries, economies, and societies at an unprecedented pace. What once seemed like science fiction is now a reality, as intelligent systems power everything from customer service chatbots to self-driving cars and advanced medical diagnoses. The AI revolution is not just an evolution of technology—it is a seismic shift in the way we live and work.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

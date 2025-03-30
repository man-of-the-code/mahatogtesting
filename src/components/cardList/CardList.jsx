import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {/* Spritual post */}
        <Card postImage={"/mindBodySpirit.webp"} postDate={"28-01-2025"} postCategory={"Spritual"} postTitle={"The Mind, Body, and Spirit Connection: Achieving Holistic Well-being"} postDesc={"In today’s fast-paced world, finding balance between mind, body, and spirit is essential for a fulfilling life. The interconnectedness of these three elements plays a crucial role in overall well-being, influencing physical health, emotional stability, and spiritual fulfillment. By nurturing each aspect, we can lead a harmonious and enriched life."} />

        {/* Entertainment post */}
        <Card postImage={"/shahrukhKhanKing.jpg"} postDate={"31-01-2025"} postCategory={"Entertainment"} postTitle={"Shah Rukh Khan Announces 'King': A Potential Blockbuster from Sujoy Ghosh & Siddharth Anand"} postDesc={"Shah Rukh Khan has revealed that his next movie will be titled King. The movie is being directed by Kahaani's Sujoy Ghosh and produced by Pathaan's Siddharth Anand. The movie has a chance of being a hit at the level of Srk's record-breaking 2023 movies Pathaan and Jawan."} />

        {/* Sports post */}
        <Card postImage={"/pujaMahato.jpg"} postDate={"01-02-2025"} postCategory={"Sports"} postTitle={"Puja Mahato: Rising Star of Nepalese Women's Cricket"} postDesc={"Puja Mahato (Nepali: पुजा महताे; born 17 February 2006) is making waves in Nepalese women's cricket with her remarkable performances and leadership. As a key player for the Nepal women's national cricket team, she has demonstrated exceptional talent and dedication to the sport."} />

        {/* Science&Technology post */}
        <Card postImage={"/deepSeek.jpeg"} postDate={"03-02-2025"} postCategory={"Science&Technology"} postTitle={"DeepSeek: Pioneering AI Innovation in China"} postDesc={"DeepSeek is a Chinese artificial intelligence software company making significant strides in the AI industry. Established in 2023, the company has already made a mark with its first product—an open-source large language model—aimed at revolutionizing the AI landscape."} />

        {/* Culture post */}
        <Card postImage={"/jhijhiyaDance.webp"} postDate={"05-02-2025"} postCategory={"Culture"} postTitle={"Mithila's Jhijhiya Dance: A Vibrant Expression of Cultural Devotion"} postDesc={"Jhijhiya is a traditional folk dance of the Mithila region in Nepal's Madhesh, Bihar and eastern Uttar Pradesh, celebrated with great enthusiasm during the Navratri festival. This unique and captivating dance form is a symbol of devotion, joy, and cultural heritage, showcasing the deep-rooted traditions of the region."} />

        {/* Politics post */}
        <Card postImage={"/modiAtMahakumbh.jpeg"} postDate={"05-02-2025"} postCategory={"Politics"} postTitle={"Prime Minister Narendra Modi participated in the Maha Kumbh Mela at Prayagraj, taking a holy dip at the Triveni Sangam"} postDesc={"The Maha Kumbh Mela, held every 12 years, is one of the world's largest religious gatherings, attracting millions of devotees seeking spiritual cleansing through ritual baths at the Sangam. This year's festival, which commenced on January 13 and will conclude on February 26, has already witnessed over 380 million pilgrims. The Prime Minister's visit occurred a week after a tragic stampede on January 29, which resulted in the deaths of at least 30 people and injuries to many others. Authorities have since implemented enhanced safety measures to manage the vast crowds and prevent further incidents."} />
        
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;

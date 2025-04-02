import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () =>{
    return (
        <div className={styles.container} >
            <div className={styles.info}>
                <div className={styles.logo} >
                    <Image src="/Rn.png" alt='mahatog' width={50} height={50} />
                    <h1 className={styles.logoText} >Er. Mahato G</h1>
                </div>

                <p className={styles.desc} >
                Er. Mahato G is the CEO & Founder of www.mahatog.com . He is passionate about Robotics, space science, software development, engeneering and Spirituality. He is also on YouTube as well on Instagram.
                <br/>
                Youtube : Er. Mahato G
                <br/>   
                Instagram : Er. Mahato G
                <br/>
                Contact :- engineermahatog@gmail.com
                </p>

                <div className={styles.icons} >
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list} >
                    <span className={styles.listTitle} >Links</span>
                    <Link href="/" >Homepage</Link>
                    <Link href="/" >Blog</Link>
                    <Link href="/" >About</Link>
                    <Link href="/" >Contact</Link>
                </div>
                <div className={styles.list} >
                    <span className={styles.listTitle} >Tags</span>
                    <Link href="/" >Style</Link>
                    <Link href="/" >Fashion</Link>
                    <Link href="/" >Coding</Link>
                    <Link href="/" >Travel</Link>
                </div>
                <div className={styles.list} >
                    <span className={styles.listTitle} >Social</span>
                    <Link href="/" >Facebook</Link>
                    <Link href="/" >Instagram</Link>
                    <Link href="/" >Tiktok</Link>
                    <Link href="/" >Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer 
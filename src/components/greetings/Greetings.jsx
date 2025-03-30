import React from "react";
import styles from "./greetings.module.css";
import Image from "next/image";
const Greetings = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/spritual.jpg"
          alt=""
          width={50}
          height={50}
          className={styles.image}
        />

        <p>OM Namaste Ji</p>

        <Image
          src="/namaste_3.jpg"
          alt=""
          width={50}
          height={50}
          className={styles.image}
        />
      </div>
      <div>
        <p>Jay Sita Ram</p>

        <Image
          src="/sita_ram.jpg"
          alt=""
          width={50}
          height={50}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Greetings;

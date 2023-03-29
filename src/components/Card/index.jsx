import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image
          alt="12"
          src={props.data?.images?.webp?.image_url}
          loading="lazy"
          width="200"
          height={100}
          loader={() => props.data?.images?.webp?.image_url}
          className={styles.img}
        />
      </div>
      <div className={styles.card_text}>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
}

export default Card;

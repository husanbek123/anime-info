import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

function Home({ data }) {
  // console.log(data);
  return (
    <div className="">
      <h1>Hello world</h1>
      <br />
      <div className={styles.animes}>
        {data.data.map((anime) => (
          <Link href={`/all/${encodeURI(anime.title)}`}>
            <Card data={anime} {...anime} />
          </Link>
        ))}
      </div>
      <Link href="/all" className={styles.btnLink}>
        <button>See More</button>
      </Link>
    </div>
  );
}

export let getServerSideProps = async () => {
  let res = await fetch("https://api.jikan.moe/v4/anime?limit=10000");
  let data = await res.json();

  return {
    props: { data },
  };
};

export default Home;

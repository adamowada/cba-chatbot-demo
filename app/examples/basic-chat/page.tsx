"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";

const Home = () => {
  useEffect(() => {
    function setVhUnit() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    // Call the function initially and on resize
    setVhUnit();
    window.addEventListener("resize", setVhUnit);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setVhUnit);
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <main className={styles.main}>
      <div
        className={styles.container}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Chat />
      </div>
    </main>
  );
};

export default Home;

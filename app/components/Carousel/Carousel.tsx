"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Slide from "./Slide";
import Button from "./Button";

interface Props {
  children: React.JSX.Element[];
}

export default function Carousel({ children }: Props) {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);

  useEffect(
    function () {
      const element = document.getElementById(`slide-${currentActiveSlide}`);
      let timeoutId: NodeJS.Timeout;

      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
        setCurrentActiveSlide(currentActiveSlide);

        // change slide in 10 seconds
        timeoutId = setTimeout(() => {
          setCurrentActiveSlide((prevSlide) =>
            prevSlide === children.length ? 0 : prevSlide + 1
          );
        }, 10000);
      }

      // Cleanup the timeout on component unmount or slide change
      return () => clearTimeout(timeoutId);
    },
    [currentActiveSlide]
  );

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {children.map((child, i) => (
          <Slide id={i} key={i}>
            {child}
          </Slide>
        ))}
      </div>
      <div className={styles.controls}>
        {children.map((child, i) => (
          <Button
            id={i}
            currentActiveSlide={currentActiveSlide}
            onPress={() => setCurrentActiveSlide(i)}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

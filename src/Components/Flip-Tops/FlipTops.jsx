import React from "react";
import styles from "./FlipTops.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
export default function FlipTops() {
  const { clickedItem } = useItemContext();
  let active = true;
 
  
  return (
    <div
      className={`${styles.container}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div className={styles.box}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" shapeRendering="geometricPrecision" textRendering="geometricPrecision" stroke="inherit" fill="inherit">
      <rect
        width="1700"
        height="500"
        rx="10"
        ry="10"
        transform="matrix(1.05882 0 0 1 50 20)"
        fill="none"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <rect
        width="1700"
        height="500"
        rx="10"
        ry="10"
        transform="matrix(1.05882 0 0 1 50 550)"
        fill="none"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 600)"
        fill="none"
        strokeWidth="36"
        d="M-850 0H850"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 647.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H850"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 997.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H850"
      />
      <path
        transform="matrix(0 .2 1 0 500 817.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 300 817.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 1250 817.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 1450 817.534)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 470)"
        fill="none"
        strokeWidth="36"
        d="M-850 0H850"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 70)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H850"
      />
      <path
        transform="matrix(.35294 0 0 1 350 170)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H850"
      />
      <path
        transform="matrix(1.05882 0 0 1 950 420)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H850"
      />
      <path
        transform="matrix(0 .2 1 0 650 240)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 850 240)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 450 240)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 1250 240)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(0 .2 1 0 1450 240)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H900"
      />
      <path
        transform="matrix(.22941 0 0 1 1645 170)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H893.588"
      />
      <path
        transform="matrix(.24118 0 0 1 1655 900)"
        fill="none"
        strokeWidth="4"
        d="M-850 0H808.533"
      />

    </svg>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./VolumeSlider.module.scss";

export default function VolumeSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  function handleSlider(e) {
    setSliderValue(e.target.value);
    console.log(sliderValue)
  }
  return (
    <div className={styles.rangeslider}>
      <input
      onChange={(e)=>handleSlider(e)}
      className={styles.rangesliderrange}
        type="range"
        value={sliderValue}
        min="0"
        max="100"
      />



    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import styles from "./Shades.module.scss";
import "animate.css";
import { useItemContext } from "../../Hooks/ItemProvider";
import ThemesAdd from "../Lighting/Themes/ThemesAdd";
import Zaluzje from "../Zaluzje/Zaluzje";

const Data = [
  {
    id: 1,
    name: "morning",
    color: "#004A7F",
    active: true,
  },
  {
    id: 2,
    name: "meeting",
    color: "#7AB801",
    active: true,
  },
  {
    id: 3,
    name: "demo",
    color: "#FF2800 ",
    active: true,
  },
  {
    id: 4,
    name: "preset 4",
    color: "#00088B",
    active: true,
  },

  {
    id: 5,
    name: "preset 5",
    color: "#E3242B",
    active: true,
  },
  {
    id: 6,
    name: "preset 6",
    color: " #EA3C53",
    active: true,
  },
  {
    id: 7,
    name: "preset 7",
    color: " #8D021F",
    active: true,
  },
  {
    id: 8,
    name: "preset 8",
    color: "#ED7117",
    active: true,
  },

  {
    id: 9,
    name: "preset 9",
    color: "#E34A27",
    active: true,
  },
  {
    id: 10,
    name: "preset 10",
    color: "#B0FC38",
    active: true,
  },

  {
    id: 11,
    name: "preset 11",
    color: "#98BF64",
    active: true,
  },
];

export default function Shades() {
  const [items, setItems] = useState(Data);
  const { clickedItem } = useItemContext();
  const [love, setId] = useState("");
  let active = true;
  const deleteTimer = 1300;

  function handleClickDelete(id) {
    setId(id);

    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, deleteTimer);
  }

  return (
    <div
      className={`${styles.box}  ${
        active ? "animate__animated animate__fadeIn animate__slower 2s " : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.topLeft}>
          <ThemesAdd />

          {items.map((data) => (
            <div
              className={`${styles.boxTwo}  ${
                data.id === love ? "animate__animated animate__fadeOut" : ""
              }  `}
              key={data.id}
            >
              <div className={styles.boxTwoLeft}>
                {/* <div
                  style={{ background: data.color }}
                  className={styles.sample}
                ></div> */}
                <span>{data.name}</span>
              </div>

              <div
                onClick={() => handleClickDelete(data.id)}
                className={styles.icon}
              >
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.topRight}>
          <Zaluzje gridColumn={`2 /span 4`} gridRow={`1 / span 4`}     />
          <Zaluzje gridColumn={`7 /span 4`} gridRow={`1 / span 4`} />
          <Zaluzje gridColumn={`2 /span 4`} gridRow={`5 / span 4`} />
          <Zaluzje gridColumn={`2 /span 4`} gridRow={`9/ span 4`} />
          <Zaluzje gridColumn={`7 /span 4`} gridRow={`5 / span 4`} />
        </div>
      </div>
    </div>
  );
}

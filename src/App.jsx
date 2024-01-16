import styles from "./App.module.scss";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import SideNav from "./Components/SideNav/SideNav";
import { ThemeProvider } from "./Hooks/ThemeProvider";
import { ClickedThemeProvider } from "./Hooks/ClickedThemeProvider";
import Main from "./Components/Main/Main";
import { useState } from "react";

import { ItemProvider } from "./Hooks/ItemProvider";

function App() {
  const [active, setActive] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const handleItemClick = (itemName) => {
    setClickedItem(itemName);
  };

  return (
    <div className={styles.container}>
      <ThemeProvider>
        <ClickedThemeProvider>
          <ItemProvider>
            <Header />
            <SideNav
              active={active}
              setActive={setActive}
              onItemClick={handleItemClick}
            />

            <Main clickedItem={clickedItem} active={active} />

            <Footer />
          </ItemProvider>
        </ClickedThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

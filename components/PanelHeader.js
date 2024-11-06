import React from "react";
import styles from "./PanelHeader.module.css";

import { LuSearch } from "react-icons/lu";
function PanelHeader({ searchValue, setSearchValue }) {
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <h3>محمود مقدسی</h3>
          <p>مدیر</p>
        </div>
        <img src="../../public/Felix-Vogel-4.jpg" alt="" />
      </div>
      <div className={styles.right}>
        <input
          placeholder="جستجو کالا"
          type="text"
          onChange={searchHandler}
          value={searchValue}
        />

        <LuSearch color="rgba(40, 40, 40, 1)" size={26} />
      </div>
    </div>
  );
}

export default PanelHeader;

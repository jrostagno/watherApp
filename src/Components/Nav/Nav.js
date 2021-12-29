import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({ apiRequest }) {
  return (
    <div className={styles.nav}>
      <h2>The wheather App</h2>

      <div className={styles.searchbar}>
        <SearchBar apiRequest={apiRequest} />
      </div>
    </div>
  );
}

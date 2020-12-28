import React from "react";
import styles from "../../App.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container_skeleton} />
      <header className={styles.container_Header}>
        <p>Country</p>
        <p>CountryCode</p>
        <p>New Confirmed</p>
        <p>New Deaths</p>
        <p>Total Deaths</p>
        <p>New Recovered</p>
        <p>Total Recovered</p>
      </header>
    </>
  );
};

export default Header;

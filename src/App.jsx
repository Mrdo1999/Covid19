import React from "react";
import { Header, InfoCovid } from "./components";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <InfoCovid />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../App.module.scss";

const InfoCovid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        setData(response.data.Countries);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(true);
        alert(e);
      });
  }, []);

  const renderCovidInfo = data.map((item) => (
    <div key={item.Slug} className={styles.container__section}>
      <div>
        <span>{item.Country}</span>
        <img
          src={`https://www.countryflags.io/${item.CountryCode}/flat/64.png`}
          alt=""
        />
      </div>
      <p>{item.CountryCode}</p>
      <p>{item.NewConfirmed}</p>
      <p>{item.NewDeaths}</p>
      <p>{item.NewRecovered}</p>
      <p>{item.TotalRecovered}</p>
      <p>{item.TotalDeaths}</p>
    </div>
  ));

  return (
    <section>
      {loading}
      {renderCovidInfo}
    </section>
  );
};

export default InfoCovid;

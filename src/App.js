import Header from "./components/Header";
import Personal from "./components/Personal";
import ISSPosition from "./components/ISSPosition";

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./styles/global.css";

function App() {
  let sec = 11
  const [timer, setTimer] = useState(5);
  const [responce, setResponce] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    const getCord = async () => {
      const responce = await axios.get(
        `http://api.open-notify.org/iss-now.json`
      );
      setCoordinates(responce.data.iss_position);
      const personalList = await axios.get(
        "http://api.open-notify.org/astros.json"
      );
      setPersonal(personalList.data.people);
    };
    getCord();
    setResponce(false);
  }, [responce]);

  useEffect(() => {
    const interval = setInterval(() => {
      let time = timer;
      setTimer(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  if (timer < 1) {
    setTimer(5);
    setResponce(true);
    axios
      .get(`http://api.open-notify.org/iss-now.json`)
      .then((res) => setCoordinates(res.data));
  }
  const pers = useMemo(() => {
    return (
      <Personal people={personal} />
    )
  }, [personal])

  return (
    <div className="App">
      <Header
        long={coordinates.longitude}
        lang={coordinates.latitude}
        sec={timer}
      />
      <div id="app_field">
        {pers}
        <ISSPosition long={coordinates.longitude} lang={coordinates.latitude} />
      </div>
    </div>
  );
}

export default App;
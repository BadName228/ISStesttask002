import React from "react";
import "../styles/header.css";

function Header({ long, lang, sec }) {
    let date = new Date()
  return (
    <header>
      <div id="header">
        <div id="block">
          <h2>Координаты МКС:</h2>
          <h4>Долгота: {long}</h4>
          <h4>Широта: {lang}</h4>
        </div>
        <div id="block">
            <h2>Обновление данных через:</h2>
            <h4>{sec}: cек</h4>
        </div>
        <div>
            <h2>Время в UTC:</h2>
            <h4>{date.toString()}</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;

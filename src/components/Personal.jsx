import React from "react";
import { useMemo } from "react";
import "../styles/sidebar.css";

function Personal({ people }) {
  const peopleStation = people.filter((el) => el.craft == "ISS");
  
  const personal = useMemo(() => {
    return (
      <div className="sidebar">
        <h3>Персонал МКС</h3>
        <h3>Кол-во: {peopleStation.length}</h3>
        {peopleStation.map((member) => {
          return (
            <div key={member.name} className="personal_card">
              <h3>Имя Сотрудника:</h3>
              <p>{member.name}</p>
            </div>
          );
        })}
      </div>
    )
  }, [peopleStation]);

  return (
    <>
      {personal}  
    </>
  );
}

export default Personal;

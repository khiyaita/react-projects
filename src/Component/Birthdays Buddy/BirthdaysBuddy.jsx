import Articles from "./Articles";
import "./BirthdaysBuddy.css";
import { useState } from "react";
import Article from "./Article";
function Birhday() {
  const [clear, setClear] = useState(true);
  const handleOnClick = () => {
    setClear(false);
  };
  const number = Articles.reduce((num, user) => {
    if (
      new Date(user.birthDate).getMonth() === new Date().getMonth() &&
      new Date(user.birthDate).getDate() === new Date().getDate()
    )
      num += 1;
    return num;
  }, 0);
  return (
    <div className="main">
      <div className="continner">
        {clear ? (
          <>
            <h1 className="h1">{number} Birthdays Today</h1>
            {Articles.map((user) => {
              if (
                new Date(user.birthDate).getMonth() === new Date().getMonth() &&
                new Date(user.birthDate).getDate() === new Date().getDate()
              ) {
                return (
                  <div key={user.id}>
                    <Article
                      nom={user.firstName + " " + user.lastName}
                      age={user.age}
                      img={user.image}
                    />
                  </div>
                );
              }
            })}
          </>
        ) : (
          <h1 className="h1">0 Birthdays Today</h1>
        )}
        <button className="btnn" onClick={handleOnClick}>
          clear all
        </button>
      </div>
    </div>
  );
}
export default Birhday;

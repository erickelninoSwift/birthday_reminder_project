import "./index.css";
import { data } from "./data";
import { useState } from "react";

function App() {
  console.log(data);
  const [persons, setPerson] = useState(data);

  const buttonSyle = {
    height: "50px",
    width: "100%",
    fontSize: "12px",
    marginTop: "30px",
    alignSelf: "center",
  };

  const clearList = () => {
    setPerson([]);
  };

  return (
    <>
      <h3 className="title">{persons.length} Birthday Reminder</h3>
      <section className="container">
        <article>
          <ul className="">
            {persons.map((currentPerson) => {
              return (
                <UserPerson
                  key={currentPerson.id}
                  currentPerson={currentPerson}
                />
              );
            })}
          </ul>
        </article>
        <article>
          <button
            style={buttonSyle}
            type="button"
            className="btn btn-block"
            onClick={clearList}
          >
            Clear list
          </button>
        </article>
      </section>
    </>
  );
}

export const UserPerson = ({ currentPerson }) => {
  const { image, name, age } = currentPerson;
  const style1 = {
    width: "80px",
    height: "80px",
    borderRadius: "40px",
    objectFit: "cover",
    marginTop: "10px",
  };
  return (
    <li className="list">
      <section>
        <img src={image} alt="erick#1" style={style1}></img>
      </section>
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Age : {age}</p>
      </div>
    </li>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const result = await axios.get("http://localhost:8080/characters");
    setCharacters(result.data);
  };

  const deleteCharacter = async (id) => {
    await axios.delete(`http://localhost:8080/character/${id}`);
    loadCharacters();
  };

  return (
    <div className="home-container">
      <table className="table">
        <thead className="table__header">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Character name</th>
            <th scope="col">Class</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={character.charName}>
              <th scope="row" key={index} data-label="#">
                {index + 1}
              </th>
              <td data-label="Name:">{character.charName}</td>
              <td data-label="Class:">{character.charClass}</td>
              <td
                className="table__header--description"
                data-label="Description:"
              >
                {character.charDescription}
              </td>
              <td>
                <Link to={`/editcharacter/${character.id}`}>
                  <button className="table__button--edit">Edit</button>
                </Link>
                <button
                  className="table__button--delete"
                  onClick={() => deleteCharacter(character.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

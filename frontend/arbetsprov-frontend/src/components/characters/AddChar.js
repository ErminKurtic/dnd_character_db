import React, { useState } from "react";
import "./AddChar.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddChar = () => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState({
    charName: "",
    charClass: "",
    charDescription: "",
  });

  const { name, charClass, description } = character;

  const onInputChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/character", character);
    navigate("/");
  };

  return (
    <div className="addchar-container">
      <div className="formBox">
        <h2 className="formBox__header">Register your D&D character</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="formBox__title">
            <label>Character name</label>
            <input
              type={"text"}
              className="formBox__inputField"
              placeholder="Enter your character name..."
              name="charName"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="formBox__title">
            <label>Class type</label>
            <input
              type={"text"}
              className="formBox__inputField"
              placeholder="Enter your class..."
              name="charClass"
              value={charClass}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="formBox__title">
            <label>Character description</label>
            <textarea
              className="formBox__inputField--description"
              placeholder="Describe your character..."
              name="charDescription"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="formbox__button--wrapper">
            <button type="submit" className="formBox__button--submit">
              Submit
            </button>
            <Link to="/">
              <button type="submit" className="formBox__button--cancel">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddChar;

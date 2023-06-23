import React, { useEffect, useState } from "react";
import "./AddChar.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditChar = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [character, setCharacter] = useState({
    charName: "",
    charClass: "",
    charDescription: "",
  });

  const { charName, charClass, charDescription } = character;

  const onInputChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadCharacter = async () => {
      const result = await axios.get(`http://localhost:8080/character/${id}`);
      setCharacter(result.data);
    };
    loadCharacter();
  }, []); // Empty array inside hook gives error (missing id dependency)

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/character/${id}`, character);
    navigate("/");
  };

  return (
    <div className="addchar-container">
      <div className="formBox">
        <h2 className="formBox__header">Edit your character</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="formBox__title">
            <label>Character name</label>
            <input
              type={"text"}
              className="formBox__inputField"
              placeholder="Enter your character name"
              name="charName"
              value={charName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="formBox__title">
            <label>Class type</label>
            <input
              type={"text"}
              className="formBox__inputField"
              placeholder="Enter your class"
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
              value={charDescription}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="formBox__button--submit">
            Submit
          </button>
          <Link to="/">
            <button type="submit" className="formBox__button--cancel">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default EditChar;

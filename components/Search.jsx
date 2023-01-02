import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom"

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    navigate("/searched/" + input);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      submitHandler(event);
    }
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          value={input}
          placeholder="Search..."
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-right: 10rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;

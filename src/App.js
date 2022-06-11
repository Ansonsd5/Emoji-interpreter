import { useState } from "react";
import "./styles.css";
import React from "react";
import emoji from "emoji";
const emojiDic = emoji["EMOJI_MAP"];

var emojiWeKnow = Object.keys(emojiDic);

export default function App() {
  var [meaning, setOutput] = useState("enter an emoji or choose from below");
  function clickHandler(event) {
    if (event.target.value === "") {
      setOutput("Please Input somthing");
    } else if (emojiDic[event.target.value] === undefined) {
      setOutput("Sorry I don't have this in my Database");
    } else setOutput(emojiDic[event.target.value][1]);
  }
  function emojiClickHandler(emoji) {
    setOutput(emojiDic[emoji][1]);
  }
  return (
    <div className="App">
      <h1>Emoji inside Out</h1>
      <input onChange={clickHandler}></input>
      <h3>
        meaning:<p> {meaning}</p>
      </h3>

      <h2>Emoji We Know</h2>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "5rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

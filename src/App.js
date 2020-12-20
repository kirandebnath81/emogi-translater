import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "😃": "Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙃": " Upside-Down Face",
  "😉 ": "Winking Face",
  "🙂": "Slightly Smiling Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": " Thinking Face",
  "🤐 ": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐 ": "Neutral Face",
  "😑 ": "Expressionless Face",
  "😶 ": "Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😎": "Smiling Face with Sunglasses",
  "😷": "Face with Medical Mask",
  "😱": "Face Screaming in Fear",
  "😡": "Pouting Face",
  "🤓": "Nerd Face",
  "🤐": "Zipper-Mouth Face",
  "🤕": "Face with Head-Bandage",
  "🤯": "Exploding Head",
  "🤧": " Sneezing Face",
  "😤": "Face with Steam From Nose",
  "😰": "Anxious Face with Sweat",
  "🥳": "Partying Face"
};

var allEmogies = Object.keys(emojiDictionary);

export default function App() {
  var [inputHandler, setInputHandler] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    inputHandler = emojiDictionary[userInput];
    if (inputHandler === undefined) {
      inputHandler = "Sorry!! it does not exist in our database.";
    }
    setInputHandler(inputHandler);
  }

  function clickHandler(item) {
    setInputHandler(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <div className="mainText">
        <h1>Confuse with emojies?</h1>
        <h2>Here is the solution 👇</h2>
      </div>
      <p className="insideText">
        Enter any emoji or choose any emoji from below to know it's actual
        meaning.
      </p>

      <input className="input" onChange={changeHandler}></input>
      <p className="emojiResult">{inputHandler}</p>

      <div className="emojiBox">
        {allEmogies.map(function (item) {
          return (
            <span onClick={() => clickHandler(item)} className="eachEmoji">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

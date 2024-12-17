import React, { useState } from "react";

const TextAreaWithCounter = () => {
  const [text, setText] = useState(""); // State to hold the text value
  const maxLength = 200; // Maximum allowed characters

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        rows="5"
        style={{
          width: "100%",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
        }}
        placeholder="Type something..."
      />
      <div
        style={{
          textAlign: "right",
          marginTop: "5px",
          color: text.length === maxLength ? "red" : "#000",
        }}
      >
        {text.length} / {maxLength}
      </div>
    </div>
  );
};

export default TextAreaWithCounter;

import React, { useState } from "react";

const Home = () => {
    
  const names = ["James", "John", "Paul", "Ringo", "George"];
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
<>
<div>
      <h1>Top job picks for you</h1>
      <p> Based on your profile and search history</p>

      {names
        .filter((name) => name.toLowerCase().includes(inputValue.toLowerCase()))
        .map((filteredName, index) => (
          <li key={index}>{filteredName}</li>
        ))}
    </div>
    <div></div>
</>
  );
};

export default Home;

import React, { useState } from "react";
import '../../style/sectionsStyle/section8.scss';


function BookingForm() {
  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [choice, setChoice] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [choiceDetails, setChoiceDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email with form data
  };

  const handleChoiceChange = (e) => {
    setAdditionalInfo("");
    const choiceValue = e.target.value;
    setChoice(choiceValue);

    if (choiceValue === "choice1") {
      setChoiceDetails("Details for choice 1");
      setPrice("$100");
    } else if (choiceValue === "choice2") {
      setChoiceDetails("Details for choice 2");
      setPrice("$150");
    } else if (choiceValue === "choice3") {
      setChoiceDetails("Details for choice 3");
      setPrice("$200");
    } else if (choiceValue === "choice4") {
      setChoiceDetails("Details for choice 4");
      setPrice("$250");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="Type your message here"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      ></textarea>
      <input type="date" placeholder="Select a date" />
      <label>
        <input
          type="radio"
          value="choice1"
          checked={choice === "choice1"}
          onChange={handleChoiceChange}
        />
        Choice 1 - $100
      </label>
      <label>
        <input
          type="radio"
          value="choice2"
          checked={choice === "choice2"}
          onChange={handleChoiceChange}
        />
        Choice 2 - $150
      </label>
      <label>
        <input
          type="radio"
          value="choice3"
          checked={choice === "choice3"}
          onChange={handleChoiceChange}
        />
        Choice 3 - $200
      </label>
      <label>
        <input
          type="radio"
          value="choice4"
          checked={choice === "choice4"}
          onChange={handleChoiceChange}
        />
        Choice 4 - $250
      </label>
      {choiceDetails && (
        <div>
          <p>{choiceDetails}</p>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
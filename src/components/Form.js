import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([])
  const [error, setError] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    if(firstName.length> 0 ){
    const data={
      firstName:firstName,
      lastName:lastName
    }  
    const dataArray=[...submittedData, data]
    setSubmittedData(dataArray)
    console.log(dataArray)
    setFirstName("")
    setLastName("")
  }else{
    setError(["First name is required"])
    console.error("First name is required")
  }
  }

  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {error.length > 0 ? error.map((error, index)=>(
      <p key={index} style={{ color: "red" }}>{error}</p>
    )): null}
    </div>
  );
}

export default Form;

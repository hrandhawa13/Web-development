import React, { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('Luigi');
    setAge(age => age+1);
  }
  return (
    <div>
      <h2>Homepage</h2>
      <p> Hey {name} is {age} years old</p>
      <button onClick={handleClick}>Click me </button>
    </div>
  )
}

import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="#contact">Contact</a>


 
  </div>
  
  <div class="form-container">
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username"/>

      <label for="username">Password:</label>
      <input type="text" id="username" name="username" placeholder="Enter your password"/>
      
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
}

export default Home

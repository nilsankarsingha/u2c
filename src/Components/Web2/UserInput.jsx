import React from 'react'
import './User.css'

const UserInput = () => {
  return (
    <div className='container'>
    <div class="form-container">
    <form>
      <div class="form-row">
        <div class="form-col">
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" placeholder="Enter first name"/>
        </div>
        
        <div class="form-col">
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" placeholder="Enter last name"/>
        </div>
        
        <div class="form-col">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Enter email"/>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-col">
          <label for="age">Age:</label>
          <input type="text" id="age" name="age" placeholder="Enter age"/>
        </div>
        
        <div class="form-col">
          <label for="city">City:</label>
          <input type="text" id="city" name="city" placeholder="Enter city"/>
        </div>
        
        <div class="form-col">
          <label for="country">Country:</label>
          <input type="text" id="country" name="country" placeholder="Enter country"/>
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </div>
    </div>
  )
}

export default UserInput

import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth =()=>{
return(
  <div className="Auth">
    <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>Social Media</h1>
            <h6>Explore the ideas throughout the world</h6>
        </div>
    </div>
    <Signup/>
  </div>
)
}

function Signup(){

  return(
    <div className="a-right">
      <form className="infoForm authForm">

        <h3>Sign up</h3>
        <div>
          <input type="text"
           placeholder='First Name' 
            className='infoInput'
             name="firstname"
             />
              <input type="text"
           placeholder='Last Name' 
            className='infoInput'
             name="Lastname"/>



        </div>
        <div>
            <input type="text"
            className="infoInput"
            name="username"
            placeholder='Usernames' />
        
          </div>
          <div>
            <input type='text' 
            className='infoInput' 
            name="password"
            placeholder='password'
            /> 

            
            <input type='text' 
            className='infoInput' 
            name="confirmpass"
            placeholder='confirmpassword'
            /> 

          </div>
          <div>
            <span style={{fontSize: '12px'}}>Already have an account. LOGIN!</span>
      
          </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  )
}


export default Auth
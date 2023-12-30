import * as React from 'react';
import './App.css'

function App() {
  const [name, setName] = React.useState('John Doe');
  const [role, setRole] = React.useState('Web Developer');
  const [email, setEmail] = React.useState('johndoe@gmail.com');
  const [number, setNumber] = React.useState(('+01-1234567890'));
  const [city, setCity] = React.useState('New York');
  const [website, setWebsite] = React.useState('linkedin.com/in/johndoe');
  const [source, setSource] = React.useState("https://i.imgur.com/ppI00bo.jpeg");

  return (
    <div>
        <form className="personal-info">
          <div className='text-elements'>
              <input name='name' className='user-name' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              <input name='role' className='user-role' type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
            <input type="text" name='phone' value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number"/>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="text" name='website' value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website"/>
            <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"/>
          </div>
          <div className='img-element'>
            <label className='img-holder'>
              <img className='user-img' src={source}  />
              <svg className='upload-svg' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                <input type="file" className='img-upload' onChange={(e) => setSource(URL.createObjectURL(e.target.files[0]))}/>
            </label>
          </div>
        </form>
        
    </div>
  );
}

export {App}

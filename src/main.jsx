import React from 'react'
import ReactDOM from 'react-dom/client'
import {Summary} from './components/Summary.jsx'
import {Download} from './components/Download.jsx'
import Experience from './components/Experience.jsx'
import {PersonalInfo} from './components/PersonalInfo.jsx'
import Education from './components/Education.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Download/>
    <div className='display-modal' id='print'>
    <PersonalInfo className='cv-element'/>
    <Summary/>
    <Experience/>  
    <Education/>
    </div>
   
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {Summary} from './components/Summary.jsx'
import Experience from './components/Experience.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='display-modal'>
    <App className='input-block' />
    <Summary/>
    <Experience/>  
    </div>
   
    
  </React.StrictMode>,
)

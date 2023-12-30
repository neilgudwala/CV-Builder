import * as React from 'react';
import '../styles/Summary.css'

function Summary() {
  const [summary, setSummary] = React.useState('Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget.');
  return (
    <div>
      <h1 className='summary'>About Me</h1>
      <div className='line'></div>
      <div className='text-container'>
      <textarea className='summary-box' name="summary" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder='What makes you stand out?' cols="30" rows="5"></textarea>
      </div>
    </div>
  );
}


export {Summary}
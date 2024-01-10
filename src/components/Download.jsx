import * as React from 'react';
import '../styles/Download.css'
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

function Download() {
  // const [summary, setSummary] = React.useState('Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget.');
  console.log("inside download")
  const downloadClicked = () => {
    const cv = document.getElementById('print');
    const options = {
      margin: 0.5,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(cv).save();
  };
  return(
    <button className='download-btn' onClick={downloadClicked}>Download as PDF</button>
  );
}


export {Download}
import React,{useState} from 'react';
import '../styles/Education.css'
import uniqid from 'uniqid'
import { render } from 'react-dom';

function Education(){
    const [education, setEducation] = useState([
        {
          id: uniqid(),
          degree: "Bachelor of Engineering - Computer Science",
          college: "University of ABC",
          from: "2018-01-01",
          to: "2020-12-31",
        }
      ]);

   const onEducationChange = (e) =>{
    const { name, value } = e.target;
    const index = e.target.dataset.index;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setEducation(updatedEducation);
  };

    const addEducation = (e) => {
    e.preventDefault();
    const newEducation = {
      id: uniqid(),
      degree: "",
      college: "",
      from: "",
      to: "",
    };
    setEducation([...education, newEducation]);
  };

    const removeEducation = (e) =>{
    const id = e.target.dataset.id;
    const updatedExperience = education.filter((item) => item.id !== id);
    setEducation(updatedExperience);
  };

    return(<div className='cv-element secondary'>
      <h1 className='education'>Education</h1>
      <div className='line'></div>
      <div className="educations-container">
        {education.map((item, i) => (
          <div className={item.id} key={item.id}>
            <form>
                <input className="degree"
                  type="text"
                  name="jobTitle"
                  placeholder="Degree and Field of Study"
                  data-index={i}
                  value={item.degree}
                  onChange={onEducationChange}
                /> <br />
                <input className="college"
                  type="text"
                  name="company"
                  placeholder="College"
                  data-index={i}
                  value={item.college}
                  onChange={onEducationChange}
                /> <br />
              <div className='date-input'>
                  <label htmlFor="from"> From </label>
                  <input className="dates"
                    type="date"
                    name="from"
                    placeholder="From"
                    data-index={i}
                    value={item.from}
                    onChange={onEducationChange}
                  />
                  <label htmlFor="to"> To </label>
                  <input className="dates"
                    type="date"
                    name="to"
                    placeholder="To"
                    data-index={i}
                    value={item.to}
                    onChange={onEducationChange}
                  />
              </div>
              <div >
                <button className="remove-education"
                  type="button"
                  data-id={item.id}
                  onClick={removeEducation}
                >
                  Remove
                </button>
              </div>
            </form>
          </div>
        ))}
        <div >
          <button className="add-education" type="button" onClick={addEducation}>
            Add Education
          </button>
        </div>
      </div>
    </div>
    );
  }



export default Education
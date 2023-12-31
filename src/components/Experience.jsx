import React,{useState} from 'react';
import '../styles/Experience.css'
import uniqid from 'uniqid'
import { render } from 'react-dom';

function Experience(){
    const [experience, setExperience] = useState([
        {
          id: uniqid(),
          jobTitle: "Front End Developer",
          company: "ABC Corp",
          city: "New York",
          from: "2018-01-01",
          to: "2020-12-31",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: uniqid(),
            jobTitle: "UI/UX Designer",
            company: "XYZ Org",
            city: "San Fransisco",
            from: "2016-01-01",
            to: "2017-12-31",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
      ]);

   const onExperienceChange = (e) =>{
    const { name, value } = e.target;
    const index = e.target.dataset.index;
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setExperience(updatedExperience);
  };

    const addExperience = (e) => {
    e.preventDefault();
    const newExperience = {
      id: uniqid(),
      jobTitle: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: "",
    };
    setExperience([...experience, newExperience]);
  };

    const removeExperience = (e) =>{
    const id = e.target.dataset.id;
    const updatedExperience = experience.filter((item) => item.id !== id);
    setExperience(updatedExperience);
  };

    return(<div className='cv-element secondary'>
      <h1 className='experience'>Experience</h1>
      <div className='line'></div>
      <div className="experiences-container">
        {experience.map((item, i) => (
          <div className={item.id} key={item.id}>
            <form>
                <input className="job-title"
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  data-index={i}
                  value={item.jobTitle}
                  onChange={onExperienceChange}
                /> <br />
                <input className="company"
                  type="text"
                  name="company"
                  placeholder="Company"
                  data-index={i}
                  value={item.company}
                  onChange={onExperienceChange}
                /> <br />
                <input className="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  data-index={i}
                  value={item.city}
                  onChange={onExperienceChange}
                /> <br />
              <div className='date-input'>
                  <label htmlFor="from"> From </label>
                  <input className="dates"
                    type="date"
                    name="from"
                    placeholder="From"
                    data-index={i}
                    value={item.from}
                    onChange={onExperienceChange}
                  />
                  <label htmlFor="to"> To </label>
                  <input className="dates"
                    type="date"
                    name="to"
                    placeholder="To"
                    data-index={i}
                    value={item.to}
                    onChange={onExperienceChange}
                  />
              </div>
                <textarea className="description"
                  type="text"
                  name="description"
                  placeholder="What did you do?"
                  data-index={i}
                  value={item.description}
                  onChange={onExperienceChange}
                  cols='30'
                  rows='2.5'
                />
              <div >
                <button className="remove-experience"
                  type="button"
                  data-id={item.id}
                  onClick={removeExperience}
                >
                  Remove
                </button>
              </div>
            </form>
          </div>
        ))}
        <div >
          <button className="add-experience" type="button" onClick={addExperience}>
            Add Experience
          </button>
        </div>
      </div>
    </div>
    );
  }



export default Experience
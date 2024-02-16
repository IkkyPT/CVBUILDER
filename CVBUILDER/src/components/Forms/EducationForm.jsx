import { useState } from 'react';

const EducationForm = ({ handleAddForm }) => {
  const [educationData, setEducationData] = useState({
    form: 'education',
    name: '',
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddForm(educationData);
    setEducationData({
      form: 'education',
      name: '',
      startDate: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={educationData.name}
          onChange={handleChange}
          placeholder="Education Name"
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={educationData.startDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
};

export default EducationForm;

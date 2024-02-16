import { useState } from 'react';

const ProfessionalForm = ({ handleAddForm }) => {
  const [professionalData, setProfessionalData] = useState({
    form: 'professional',
    name: '',
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessionalData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddForm(professionalData);
    setProfessionalData({
      form: 'professional',
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
          value={professionalData.name}
          onChange={handleChange}
          placeholder="Education Name"
          required
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={professionalData.startDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Professional</button>
      </form>
    </div>
  );
};

export default ProfessionalForm;

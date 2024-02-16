import { useState } from 'react';
import './App.css';
import EducationForm from './components/Forms/EducationForm';
import ProfessionalForm from './components/Forms/ProfessionalForm';
import PreviewForm from './components/Forms/PreviewForm';

function App() {
  const [educationForm, setEducationForm] = useState([]);
  const [professionalForm, setProfessionalForm] = useState([]);

  console.log(educationForm)

  const handleAddForm = (formData) => {
    if(formData.form === 'education') {
      setEducationForm((prevEducationForm) => [...prevEducationForm, formData]);
    } else if (formData.form === 'professional') {
      setProfessionalForm((prevProfessionalForm) => [...prevProfessionalForm, formData]);
    }
  }

  const handleDeleteForm = (index, formType) => {
    if(formType === 'education') {
      setEducationForm((prevEducationForm) =>
        prevEducationForm.filter((_, i) => i !== index)
      );
    } else if (formType === 'professional') {
      setProfessionalForm((prevProfessionalForm) =>
        prevProfessionalForm.filter((_, i) => i !== index)
      );
    }
  };

  const handleEditForm = (index, formData, formType) => {
    if (formType === 'education') {
      const updatedEducationForm = [...educationForm];
      updatedEducationForm[index] = formData;
      setEducationForm(updatedEducationForm);
    } else if (formType === 'professional') {
      const updatedProfessionalForm = [...professionalForm];
      updatedProfessionalForm[index] = formData;
      setProfessionalForm(updatedProfessionalForm);
    }
  };

  return (
    <>
      <EducationForm handleAddForm={handleAddForm} />
      <PreviewForm 
        forms={educationForm} 
        formType="education" 
        handleDeleteForm={handleDeleteForm}
        handleEditForm={handleEditForm} 
      />
      <ProfessionalForm handleAddForm={handleAddForm} />
      <PreviewForm 
        forms={professionalForm} 
        formType="professional" 
        handleDeleteForm={handleDeleteForm} 
        handleEditForm={handleEditForm}
      />
    </>
  );
}

export default App;

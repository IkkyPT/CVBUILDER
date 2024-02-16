import { useState } from 'react'

const PreviewForm = ({ forms, formType, handleDeleteForm, handleEditForm }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editFormData, setEditFormData] = useState({});
  
    const handleEditClick = (index, formData) => {
      setEditIndex(index);
      setEditFormData(formData);
    };
  
    const handleSaveEdit = () => {
      handleEditForm(editIndex, editFormData, formType);
      setEditIndex(null);
      setEditFormData({});
    };
  
    return (
      <div className="education-list">
        {forms.map((formData, index) => (
          <div key={index} className="education-item">
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editFormData.startDate}
                  onChange={(e) => setEditFormData({ ...editFormData, startDate: e.target.value })}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </div>
            ) : (
              <div>
                <strong>Name:</strong> {formData.name}
                <strong>Start Date:</strong> {formData.startDate}
                <button onClick={() => handleEditClick(index, formData)}>Edit</button>
                <button onClick={() => handleDeleteForm(index, formType)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
export default PreviewForm
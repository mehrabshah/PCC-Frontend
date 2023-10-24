import React, { useState } from 'react';

export default function Info() {
  const initialFormData = [
    { label: 'Full Name', type: 'text', id: 'name', value: 'John Doe', readOnly: true },
    { label: 'Email', type: 'email', id: 'email', value: 'johndoe@example.com', readOnly: true },
    { label: 'Age', type: 'number', id: 'age', value: '25', readOnly: true },
    { label: 'Gender', type: 'text', id: 'gender', value: 'Male', readOnly: true },
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e, id) => {
    const updatedFormData = formData.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          value: e.target.value,
        };
      }
      return field;
    });
    setFormData(updatedFormData);
  };

  return (
    <>
      <div className="w-full bg-[#262A56] border border-gray-200">
        <div className="flex flex-col w-full">
          <div>
            <form className="flex flex-col space-y-4 p-8">
              {formData.map((field) => (
                <div className="flex flex-row justify-between" key={field.id}>
                  <label className="block mb-2 text-[#E3CCAE]" htmlFor={field.id}>
                    {field.label}
                  </label>
                  <input
                    className="w-[70%] px-4 py-2 border rounded-sm bg-[#B8621B] text-[#E3CCAE]"
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    readOnly={!isEditMode}
                    onChange={(e) => handleChange(e, field.id)}
                  />
                </div>
              ))}
              <div className="flex flex-row">
                {!isEditMode ? (
                  <button
                    type="button"
                    className="bg-[#B8621B] w-[20%] h-[3rem] text-[#E3CCAE]"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-[#B8621B] w-[20%] h-[3rem] text-[#E3CCAE]"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

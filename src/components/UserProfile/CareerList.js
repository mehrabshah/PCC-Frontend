import React from 'react';

const CareerList = () => {
  // Sample list of careers
  const careers = [
    'Software Engineer',
    'Data Scientist',
    'Web Developer',
    'UX Designer',
    'Product Manager',
    'Doctor',
    'Teacher',
    'Mechanical Engineer',
    'Lawyer',
    'Chef',
    'Graphic Designer',
    'Accountant',
    'Nurse',
    'Artist',
    'Electrician',
    'Pharmacist',
    'Architect',
    'Police Officer',
    'Firefighter',
    'Marketing Manager',
    'Biologist',
    'Pilot',
    'Veterinarian',
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#002b36', // Dark blue background color
    color: 'white', // Text color
  };

  const listStyle = {
    width: '50%',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
  };

  const listItemStyle = {
    textAlign: 'center',
  };

  const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        <h2 style={headingStyle}>List of Careers</h2>
        <ul className="list-group">
          {careers.map((career, index) => (
            <li key={index} className="list-group-item" style={listItemStyle}>
              {career}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerList;

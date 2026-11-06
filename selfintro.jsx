import React from 'react';

// 1. The component function layout goes first
const SelfIntro = (props) => {
  return (
    <div style={cardStyle}>
      <h3>{props.name}</h3>
      <p><strong>📍 City:</strong> {props.city}</p>
      <p><strong>⏳ Age:</strong> {props.age} years old</p>
      <p><strong>✉️ Email:</strong> {props.email}</p>
      <p><strong>📞 Phone:</strong> {props.phone}</p>
    </div>
  );
};

// 2. The styles object goes right below the function
const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  padding: '20px',
  margin: '15px 0',
  backgroundColor: '#ffffff',
  fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
};

// 3. The export goes at the very bottom
export default SelfIntro;

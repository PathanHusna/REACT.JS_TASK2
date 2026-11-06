import React from 'react';
import SelfIntro from './SelfIntro'; // Importing your professional component

function App() {
  // 5 distinct user profiles with 5 required details each
  const user1 = { name: "Rosi", city: "Bengaluru", age: 25, email: "rosi@example.com", phone: "+91 98765 43010" };
  const user2 = { name: "Priya Patel", city: "Mumbai", age: 28, email: "priya@example.com", phone: "+91 98785 43211" };
  const user3 = { name: "Rohan Das", city: "Kolkata", age: 22, email: "das@example.com", phone: "+91 98765 23212" };
  const user4 = { name: "Deepika Reddy", city: "Hyderabad", age: 30, email: "deepika@example.com", phone: "+91 78765 43213" };
  const user5 = { name: "Vikram Singh", city: "Delhi", age: 27, email: "vikram@example.com", phone: "+91 98765 93214" };

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', fontFamily: 'sans-serif', marginBottom: '30px' }}>
        Task 2: Professional User Introductions
      </h1>
      
      {/* Rendering the SelfIntro child component 5 times with distinct data via props */}
      <SelfIntro name={user1.name} city={user1.city} age={user1.age} email={user1.email} phone={user1.phone} />
      <SelfIntro name={user2.name} city={user2.city} age={user2.age} email={user2.email} phone={user2.phone} />
      <SelfIntro name={user3.name} city={user3.city} age={user3.age} email={user3.email} phone={user3.phone} />
      <SelfIntro name={user4.name} city={user4.city} age={user4.age} email={user4.email} phone={user4.phone} />
      <SelfIntro name={user5.name} city={user5.city} age={user5.age} email={user5.email} phone={user5.phone} />
    </div>
  );
}

export default App;


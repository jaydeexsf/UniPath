import { Input } from '../components/ui/input'
import React, { useState } from 'react';

const ApplicationPage = () => {

  const universities = [
    {
      id: 1,
      name: 'University of Cape Town',
      status: 'Open for Applications',
      openingDate: '2024-09-01',
    },
    {
      id: 2,
      name: 'University of Johannesburg',
      status: 'Opening Soon',
      openingDate: '2024-10-15',
    },
    // Add more universities as needed
  ];
  

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idDocument: null,
    grade11Results: null,
    grade12Results: null,
  });
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted', formData, selectedUniversity, selectedCourse);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">University Application</h1>
      
      {/* Personal Information Form */}
      <form className="space-y-4">
        <Input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          value={formData.fullName} 
          onChange={handleChange} 
          className="input"
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="input"
        />
        <Input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          className="input"
        />
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Upload ID Document</label>
          <input 
            type="file" 
            name="idDocument" 
            onChange={handleChange} 
            className="file-input"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Upload Grade 11 Results</label>
          <input 
            type="file" 
            name="grade11Results" 
            onChange={handleChange} 
            className="file-input"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-semibold">Upload Grade 12 Final Results</label>
          <input 
            type="file" 
            name="grade12Results" 
            onChange={handleChange} 
            className="file-input"
          />
        </div>
      </form>

      {/* University Selection */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Select University</h2>
        <div className="grid grid-cols-1 gap-4">
          {universities.map((university) => (
            <button 
              key={university.id} 
              onClick={() => handleUniversitySelect(university)} 
              className={`p-4 border rounded-lg ${selectedUniversity?.id === university.id ? 'border-blue-500' : 'border-gray-300'}`}
            >
              <h3 className="font-semibold">{university.name}</h3>
              <p className="text-sm">{university.status}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Course Selection */}
      {selectedUniversity && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Select Course</h2>
          <input 
            type="text" 
            placeholder="Type or Select Course" 
            value={selectedCourse} 
            onChange={(e) => setSelectedCourse(e.target.value)} 
            className="input"
          />
        </div>
      )}

      {/* Application Submission */}
      {selectedCourse && (
        <div className="mt-8">
          <button 
            onClick={handleSubmit} 
            className="btn-primary"
          >
            Submit Application
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicationPage;

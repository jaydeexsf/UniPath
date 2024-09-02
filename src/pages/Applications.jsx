import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    idNumber: '',
    selectedUniversity: '',
    documents: {
      idDocument: null,
      grade11Results: null,
      grade12Results: null,
    },
  });

  const universities = [
    'University of Limpopo',
    'University of Cape Town',
    'University of Johannesburg',
    'University of Pretoria',
    'Stellenbosch University'
    // Add more universities as necessary
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      documents: { ...formData.documents, [name]: files[0] }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending data to the backend
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">University Application Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="idNumber">ID Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* File Upload Section */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload ID Document</label>
          <input
            type="file"
            name="idDocument"
            onChange={handleFileChange}
            required
            className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Grade 11 Results</label>
          <input
            type="file"
            name="grade11Results"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Grade 12 Final Results</label>
          <input
            type="file"
            name="grade12Results"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        {/* University Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select University</label>
          <select
            name="selectedUniversity"
            value={formData.selectedUniversity}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select a university</option>
            {universities.map((uni, index) => (
              <option key={index} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;

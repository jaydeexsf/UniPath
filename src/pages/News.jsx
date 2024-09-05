import React, { useState, useEffect } from 'react';

const NewsPage = () => {

  const newsData = [
    {
      "id": 1,
      "title": "New Study Techniques for High School Students",
      "date": "2024-09-01",
      "description": "Explore the latest study techniques to help you excel in your final year of high school."
    },
    {
      "id": 2,
      "title": "Scholarship Opportunities for 2024",
      "date": "2024-09-05",
      "description": "Learn about the new scholarships available for Grade 12 students and how to apply."
    },
    {
      "id": 3,
      "title": "College Application Tips",
      "date": "2024-09-10",
      "description": "Get tips on preparing your college applications and standing out from the competition."
    }
  ]
  

  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setNews(newsData);
  }, []);

  return (
    <div className="min-h-screen py-10 px-5">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold ">Grade 12 News</h1>
        <p className="text-lg text-gray-600">Stay updated with the latest news and resources for Grade 12 students.</p>
      </header>
      <main>
        <div className="max-w-4xl mx-auto">
          {news.length === 0 ? (
            <p className="text-center text-gray-600">Loading news...</p>
          ) : (
            <ul className="space-y-4">
              {news.map((article) => (
                <li key={article.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold text-gray-100">{article.title}</h2>
                  <p className="text-sm text-blue-700 mb-2">{new Date(article.date).toLocaleDateString()}</p>
                  <p className="text-gray-500">{article.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default NewsPage;

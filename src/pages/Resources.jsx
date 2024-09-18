// src/ResourcesPage.js
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import React, { useState } from 'react';

const resourcesData  = [
  {
    "subject": "Mathematics",
    "papers": [
      {
        "year": 2018,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2018_paper1.pdf"
          },
          {
            "type": "paper 1 Memo ",
            "file": "/resources/maths/2018_memo1.pdf"
          },
          {
            "type": "Paper 2",
            "file": "/resources/maths/2018_paper2.pdf"
          },
          {
            "type": "paper 2 Memo",
            "file": "/resources/maths/2018_memo2.pdf"
          }
        ]
      },
      {
        "year": 2019,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2019_paper1.pdf"
          },
          {
            "type": "Memo 1",
            "file": "/resources/maths/2019_memo1.pdf"
          }
        ]
      }
    ]
  },
  {
    "subject": "Physics",
    "papers": [
      {
        "year": 2018,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/physics/2018_paper1.pdf"
          },
          {
            "type": "paper 1 Memo ",
            "file": "/resources/physics/2018_memo1.pdf"
          }
        ]
      }
    ]
  },
  {
    "subject": "Life sciences",
    "papers": [
      {
        "year": 2018,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2018_paper1.pdf"
          },
          {
            "type": "paper 1 Memo ",
            "file": "/resources/maths/2018_memo1.pdf"
          },
          {
            "type": "Paper 2",
            "file": "/resources/maths/2018_paper2.pdf"
          },
          {
            "type": "paper 2 Memo",
            "file": "/resources/maths/2018_memo2.pdf"
          }
        ]
      },
      {
        "year": 2019,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2019_paper1.pdf"
          },
          {
            "type": "Memo 1",
            "file": "/resources/maths/2019_memo1.pdf"
          }
        ]
      }
    ]
  },
  {
    "subject": "Geaography",
    "papers": [
      {
        "year": 2018,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2018_paper1.pdf"
          },
          {
            "type": "paper 1 Memo ",
            "file": "/resources/maths/2018_memo1.pdf"
          },
          {
            "type": "Paper 2",
            "file": "/resources/maths/2018_paper2.pdf"
          },
          {
            "type": "paper 2 Memo",
            "file": "/resources/maths/2018_memo2.pdf"
          }
        ]
      },
      {
        "year": 2019,
        "papers": [
          {
            "type": "Paper 1",
            "file": "/resources/maths/2019_paper1.pdf"
          },
          {
            "type": "Memo 1",
            "file": "/resources/maths/2019_memo1.pdf"
          }
        ]
      }
    ]
  },
]


///////////////

const ResourcesPage = () => {
  const [subjects, setSubjects] = useState(resourcesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setSelectedYear(null); // Reset year selection
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.subject.toLowerCase().includes(searchTerm)
  );


  return (
    <div className="min-h-screen p-5">
      <header className="text-cente mb-8">
        <h1 className="text-2xl font-bold ">Grade 12 Past Papers</h1>
        <p className="text-md text-gray-600">Download past papers and memoranda for your studies.</p>
        {!selectedSubject ? <Input
          type="text"
          placeholder="Search subjects..."
          value={searchTerm}
          onChange={handleSearch}
          className=" bg-gray-700 border border-gray-600 mt-6 w-full text-gray-700 rounded"
        /> : '' }
      </header>
      <main>
        {!selectedSubject ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray- mb-4">Subjects</h2>
            <ul className="space-y-4">
              {filteredSubjects.map((subject) => (
                <li
                  key={subject.subject}
                  className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700"
                  onClick={() => handleSubjectClick(subject)}
                >
                  {subject.subject}
                </li>
              ))}
            </ul>
          </div>
        ) : !selectedYear ? (
          <div>
            <Button
              className="mb-4 px-3 py-5 text-white rounded"
              onClick={() => setSelectedSubject(null)}
            >
              Back to Subjects
            </Button>
            <h2 className="text-2xl font-semibold text-gray- mb-4">{selectedSubject.subject} Papers</h2>
            <ul className="space-y-4">
              {selectedSubject.papers.map((paper) => (
                <div key={paper.year} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{paper.year}</h3>
                  <ul className="space-y-2">
                    {paper.papers.map((item) => (
                      <li key={item.file} className="text-blue-500 underline">
                        <a href={item.file} target="_blank" rel="noopener noreferrer">
                          {item.type}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <button
              className="mb-4 p-2 bg-blue-500 text-white rounded"
              onClick={() => setSelectedYear(null)}
            >
              Back to Years
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Year {selectedYear} Papers</h2>
            <ul className="space-y-4">
              {selectedSubject.papers
                .find((paper) => paper.year === selectedYear)
                ?.papers.map((item) => (
                  <li key={item.file} className="text-blue-500 underline">
                    <a href={item.file} target="_blank" rel="noopener noreferrer">
                      {item.type}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default ResourcesPage;

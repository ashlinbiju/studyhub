import React, { useState, useEffect } from 'react';

function A1() {
  const [notes, setNotes] = useState([]);
  const [previousYearPapers, setPreviousYearPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [youtubeLinks, setYoutubeLinks] = useState([
    { id: 1, title: 'Introduction to Linear Algebra', url: 'https://youtu.be/xxQd2W_JZFA?si=Y3Bzw9FPDPAOZnyk' }
  ]);

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const notesResponse = await fetch('http://localhost:5000/api/notes');
      const papersResponse = await fetch('http://localhost:5000/api/previousYearPapers');

      if (!notesResponse.ok || !papersResponse.ok) {
        throw new Error('Failed to fetch resources');
      }

      const notesData = await notesResponse.json();
      const papersData = await papersResponse.json();

      setNotes(notesData);
      setPreviousYearPapers(papersData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ marginTop: '50px' }}> {/* Added margin to move content down */}
      <div className="module-page">
        <div className="module-content">
          <h1>Module 1: Linear Algebra and Calculus</h1>

          <div className="syllabus">
            <h2>Syllabus</h2>
            <p>
              <strong>Linear Algebra:</strong> Systems of linear equations, Solution by Gauss elimination, row echelon
              form and rank of a matrix, fundamental theorem for linear systems (homogeneous and non-homogeneous, without proof), Eigenvalues and eigenvectors. Diagonalization of matrices, orthogonal transformation, quadratic forms and their canonical forms.
            </p>
          </div>

          <div className="notes">
            <h2>Notes</h2>
            {loading ? (
              <p>Loading notes...</p>
            ) : error ? (
              <p style={{ color: '#ff0000' }}>Error: {error}</p>
            ) : notes.length > 0 ? (
              <ul>
                {notes.map((note) => (
                  <li key={note._id}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '10px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      marginBottom: '10px'
                    }}>
                      <div>
                        <h3 style={{ color: '#3700b3', marginBottom: '5px' }}>{note.title}</h3>
                        <p style={{ fontSize: '14px', color: '#555555', margin: 0 }}>{note.description}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(note.fileUrl, note.fileName)}
                        style={{
                          backgroundColor: '#6200ea',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#3700b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#6200ea'}
                      >
                        Download
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No notes available yet.</p>
            )}
          </div>

          <div className="previous-year-papers">
            <h2>Previous Year Papers</h2>
            {loading ? (
              <p>Loading previous year papers...</p>
            ) : error ? (
              <p style={{ color: '#ff0000' }}>Error: {error}</p>
            ) : previousYearPapers.length > 0 ? (
              <ul>
                {previousYearPapers.map((paper) => (
                  <li key={paper._id}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '10px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '4px',
                      marginBottom: '10px'
                    }}>
                      <div>
                        <h3 style={{ color: '#3700b3', marginBottom: '5px' }}>{paper.title}</h3>
                        <p style={{ fontSize: '14px', color: '#555555', margin: 0 }}>{paper.description}</p>
                      </div>
                      <button
                        onClick={() => handleDownload(paper.fileUrl, paper.fileName)}
                        style={{
                          backgroundColor: '#6200ea',
                          color: 'white',
                          border: 'none',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#3700b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#6200ea'}
                      >
                        Download
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No previous year papers available yet.</p>
            )}
          </div>

          <div className="youtube-links">
            <h2>YouTube Links</h2>
            {youtubeLinks.length > 0 ? (
              <ul>
                {youtubeLinks.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No YouTube links available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default A1;

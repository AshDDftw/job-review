import React, { useState } from 'react';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [acceptedCandidates, setAcceptedCandidates] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Accepted');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  function handleAddCandidate(event) {
    event.preventDefault();
    setCandidates([...candidates, { name, status }]);
    if (status === 'Accepted') {
      setAcceptedCandidates([...acceptedCandidates, { name }]);
    }
    setName('');
    setStatus('Accepted');
  }

  return (
    <div>
      <form onSubmit={handleAddCandidate}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Status:
          <select value={status} onChange={handleStatusChange}>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>
        <button type="submit">Add Candidate</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Serial Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{index + 1}</td>
              <td>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Serial Number</th>
          </tr>
        </thead>
        <tbody>
          {acceptedCandidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

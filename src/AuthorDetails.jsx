import React from 'react';

function AuthorDetails({ name, bio }) {
  return (
    <div style={{ marginTop: '10px', fontStyle: 'italic', color: '#555' }}>
      <p>Автор: {name}</p>
      <p>{bio}</p>
    </div>
  );
}

export default AuthorDetails;
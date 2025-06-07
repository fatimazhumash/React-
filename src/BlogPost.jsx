import React from 'react';
import AuthorDetails from './AuthorDetails';

function BlogPost({ title, content, author }) {
  return (
    <div style={{ marginBottom: '30px', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <AuthorDetails name={author.name} bio={author.bio} />
    </div>
  );
}

export default BlogPost;
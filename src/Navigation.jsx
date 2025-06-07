import React from 'react';

function Navigation() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', padding: 0 }}>
        <li><a href="#">Басты бет</a></li>
        <li><a href="#">Жазбалар</a></li>
        <li><a href="#">Байланыс</a></li>
      </ul>
    </div>
  );
}

export default Navigation;

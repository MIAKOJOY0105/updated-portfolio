import React from 'react';
export default function Footer(){
  return (
    <footer style={{padding:'22px 18px', textAlign:'center', color:'var(--muted)'}}>
      joycemiakonjeri © {new Date().getFullYear()}
    </footer>
  );
}

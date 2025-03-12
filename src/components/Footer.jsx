// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Pritam's Portfolio. All rights reserved.</p>
    </footer>
  );
}

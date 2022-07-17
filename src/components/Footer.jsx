import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ intropextro {currentYear}</p>
    </footer>
  );
}

export default Footer;
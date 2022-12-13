import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with Love ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

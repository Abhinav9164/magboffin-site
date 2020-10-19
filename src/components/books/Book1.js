import React from "react";
import "./Book1.css";

function Book1() {
  return (
    <div class="thumb book-1">
      <a href="/bookdetails">
        <img src={require("../../assets/images/shelf-1.png")} />
      </a>
    </div>
  );
}

export default Book1;

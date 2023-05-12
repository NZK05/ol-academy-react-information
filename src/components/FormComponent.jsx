import React from "react";
import General from "../components/General.jsx";
import Contact from "../components/Contact.jsx";
export default function FormComponent() {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div className="general">
          <General />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Draggable from "react-draggable";
import "../styles/Draggable.css"

import { FaWhatsapp } from "react-icons/fa";


export default function DraggableDiv() {
    
    return (
      <Draggable>
        <div className="box">
          <a
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
          >
            <h1 className="whatsapp">
              <FaWhatsapp />
            </h1>
          </a>
        </div>
      </Draggable>
    );
}
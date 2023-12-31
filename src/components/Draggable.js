import React from "react";
import Draggable from "react-draggable";
import "../styles/Draggable.css"

import { FaWhatsapp } from "react-icons/fa";


export default function DraggableDiv() {
    
    return (
      <Draggable axis="y">
        <div className="bigBox">
          <div className="box">
            <a
              href="https://api.whatsapp.com/send?phone=16475291390"
              target="_blank"
            >
              <h1 className="whatsapp">
                <FaWhatsapp />
              </h1>
            </a>
          </div>
        </div>
      </Draggable>
    );
}
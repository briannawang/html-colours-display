import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            HTML Colours Display
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/html-colours-display/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/html-colours-display">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/html-colours-display/colour-sheet" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/html-colours-display/colour-sheet">
                  Colour Sheet
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/html-colours-display/colour-filter" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/html-colours-display/colour-filter">
                  Colour Filter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
import React from "react";
import "../styles/Search.css";

export default function Search() {
  return (
    <form>
      <input
        className="search"
        type="text"
        placeholder="Enter a city..."
        autoComplete="off"
      />
      <input className="go-button" type="submit" value="Go" />
    </form>
  );
}

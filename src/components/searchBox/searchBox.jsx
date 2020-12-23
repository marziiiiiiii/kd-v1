import React from "react";
import "./searchBox.css";

export const SearhBox = ({ placeholder, onChange }) => {
  return (
    <input
      className="search"
      type="seach"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearhBox;

//e => this.setState({searchField :e.target.value} ,()=> console.log(searchField))

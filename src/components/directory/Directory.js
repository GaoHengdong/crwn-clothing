import React from "react";
import "../menu-item/MenuItem";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
// import { Link } from "react-router-dom";

const Directory = ({ sections }) => (
  <div className="Directory">
    {sections.map((section) => (
      <MenuItem {...section} key={section.id} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

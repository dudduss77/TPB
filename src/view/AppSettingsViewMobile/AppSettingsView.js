import React from "react";

const AppSettingsView = ({ view, leftColumn, midColumn, rightColumn }) => {
  switch (view) {
    case 1:
      return leftColumn;
    case 2:
      return midColumn;
    case 3:
      return rightColumn;
    default:
      return "error";
  }
};

export default AppSettingsView;

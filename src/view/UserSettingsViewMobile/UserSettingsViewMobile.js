import React from 'react'

const UserSettingsViewMobile = ({view, leftColumn, midColumn, rightColumn}) => {
  switch(view) {
    case 1:
      return leftColumn;
    case 2:
      return midColumn;
    case 3:
      return rightColumn;
    default:
      return "Error"
  }
}

export default UserSettingsViewMobile

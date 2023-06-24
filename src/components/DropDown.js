import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router";




const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/*
  Dropdown menu which will show if user is owner of task or pack 
  allowing the user to edit / delete dependant on the object in 
  question by calling the handleEdit or handleDelete
  functions
*/
export const DropDown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" /><span >Edit</span>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" /><span>Delete</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/*
  Dropdown menu which will show if user is owner of viewed profile 
  allowing the user to edit profile inputs or the change the password 
  calling the handleEdit function
*/
export const EditProfileDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 `} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit text-dark"/> <span className="text-dark">Edit profile</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};


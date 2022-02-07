import { NavLink } from "react-router-dom";

function BreadCrumb() {
  return (
    <div className="bread-crumb">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
    </div>
  );
}

export default BreadCrumb;

import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fs-4"
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-4" to="#">
          {props.title}
        </a>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
};

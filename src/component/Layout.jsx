import Navbar from "./Nav";
// import Admin from "./Admin";
// import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Admin /> */}
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;

import PropTypes from "prop-types";
import Footer from "./Footer.jsx";
import Header from "./Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 100px)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

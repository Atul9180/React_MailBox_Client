import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Header from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";
import Main from "./pages/Main.jsx";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Main />
      {/* <Header /> */}
      <Container className="my-1">
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default App;

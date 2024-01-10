import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container className="my-1">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default App;

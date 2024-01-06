import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "../components/loader/Loader.jsx";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const navigate = useNavigate();

  const emptyInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }
    if (password.length <= 4) {
      toast.error("Password should have at least 5 characters!");
      console.log("Password should have at least 5 characters!");
      return;
    }

    try {
      setIsLoading(true);
      //   const result = await signUpWithEmailPassword(email, password);

      const result = { email, password };
      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        emptyInputFields();
        // navigate("/");
      }
    } catch (error) {
      toast.error(`Error during login. ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row className="p-2 shadow border-rounded" style={{ minWidth: "50vw" }}>
        <Col>
          <div className="mb-2 text-center">
            <h2 style={{ color: "orange" }}>Login</h2>
            <hr />
          </div>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="email" className="p-1">
              <Form.Label className="font-weight-bold mb-1">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password" className="p-1">
              <Form.Label className="font-weight-bold mb-1">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {isLoading && <Loader />}

            <Button type="submit" variant="primary" className="w-100 mt-3 mb-2">
              Login
            </Button>

            <div className="text-center">
              <span
                style={{
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Create an account ?{" "}
                <Link to="/signup" style={{ color: "black" }}>
                  Signup
                </Link>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

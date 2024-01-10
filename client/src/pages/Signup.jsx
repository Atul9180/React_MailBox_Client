import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../ui/FormContainer.jsx";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { useSignupMutation } from "../redux/slices/usersApiSlice.js";
import { setCredentials } from "../redux/slices/authSlice.js";
import Loader from "../components/loader/Loader.jsx";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await signup({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      console.log(err?.error);
      toast.error(err?.data?.message);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <FormContainer>
      {isLoading && <Loader />}
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Signup;

// import { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import Loader from "../components/loader/Loader.jsx";

// const Signup = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigate = useNavigate();

//   const emptyInputFields = () => {
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const emailRegex = /\S+@\S+\.\S+/;

//     if (!email || !password || !confirmPassword) {
//       toast.error("All fields are required.");
//       return;
//     }
//     if (!emailRegex.test(email)) {
//       toast.error("Enter a valid email address.");
//       return;
//     }
//     if (password.length <= 4) {
//       toast.error("Password should have at least 5 characters!");
//       console.log("Password should have at least 5 characters!");
//       return;
//     }
//     if (password !== confirmPassword) {
//       toast.error("Password and Confirm Password do not match");
//       console.log("Password and Confirm Password do not match");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       //   const result = await signUpWithEmailPassword(email, password);

//       const result = { email, password };
//       if (!result.success) {
//         toast.error(result.message);
//       } else {
//         toast.success(result.message);
//         emptyInputFields();
//         navigate("/login");
//       }
//     } catch (error) {
//       toast.error(`Error during signup. ${error}`);
//       console.log(`Error during signup. ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <Row
//         className="p-4 pt-2 shadow border-rounded"
//         style={{ minWidth: "50vw" }}
//       >
//         <Col>
//           <div className="mb-2 text-center">
//             <h2 style={{ color: "orange" }}>Sign Up</h2>
//             <hr />
//           </div>
//           <Form onSubmit={handleSignup}>
//             <Form.Group controlId="email" className="p-1">
//               <Form.Label className="font-weight-bold mb-1">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="password" className="p-1">
//               <Form.Label className="font-weight-bold mb-1">
//                 Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="confirmpassword" className="p-1">
//               <Form.Label className="font-weight-bold mb-1">
//                 Confirm Password
//               </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </Form.Group>

//             {isLoading && <Loader />}

//             <Button type="submit" variant="primary" className="w-100 mt-3 mb-2">
//               Signup
//             </Button>

//             <div className="text-center">
//               <span
//                 style={{
//                   fontWeight: "bold",
//                   color: "gray",
//                 }}
//               >
//                 Already have an account ?{" "}
//                 <Link to="/login" style={{ color: "black" }}>
//                   Login
//                 </Link>
//               </span>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;

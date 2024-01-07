//code splitting:to avoid loading all js at once load components js ongo:
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout.jsx";

// dynamic import or code splitting:
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Layout from "./components/Layout.jsx";
// import { Home, Login, Signup, Profile, PageNotFound } from "./pages";

// const App = () => {
//   return (
//     <Router>
//       <ToastContainer />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

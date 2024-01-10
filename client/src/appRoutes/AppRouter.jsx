import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loader from "../components/loader/Loader.jsx";

const LazyApp = lazy(() => import("../App.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Signup = lazy(() => import("../pages/Signup.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Profile = lazy(() => import("../pages/Profile.jsx"));
const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"));
const PrivateRoute = lazy(() => import("./PrivateRoute.jsx"));

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <LazyApp />
          </Suspense>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}
        <Route path="" element={<PrivateRoute />}>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default AppRouter;

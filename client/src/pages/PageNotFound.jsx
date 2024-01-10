import { useNavigate } from "react-router-dom";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const PageNotFound = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="text-center  text-black w-1">
      <h1 style={{ fontSize: "200px", fontWeight: "600" }}>404</h1>
      <p
        className="mx-auto mt-3"
        style={{ fontSize: "20px", fontWeight: "500" }}
      >
        Page Not Available.
      </p>
      <div className="text-center mt-4 text-white">
        {userInfo ? (
          <button
            className="btn border mx-2 font-size-btn"
            onClick={() => navigate("/")}
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <FaHome /> Home
          </button>
        ) : (
          <button
            className="btn border mx-2 font-size-btn"
            onClick={() => navigate("/login")}
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            <FaSignInAlt /> Login
          </button>
        )}
      </div>
    </div>
  );
};

export default PageNotFound;

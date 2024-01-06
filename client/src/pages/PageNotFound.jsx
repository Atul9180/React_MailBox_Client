import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

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
        <button
          className="btn border mx-2 font-size-btn"
          onClick={handleHome}
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <FaHome /> Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

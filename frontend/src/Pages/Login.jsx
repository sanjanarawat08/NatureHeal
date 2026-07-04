import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      setIsError(false);
      setMessage("Login successful! Redirecting...");

      // Store user data
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      setIsError(true);
      setMessage(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {message && (
          <div
            className={
              isError ? "error-message" : "success-message"
            }
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={loginData.role}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="hotelOwner">Hotel Owner</option>
          </select>

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="show-password-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("Ramu@gmail.com");
  const [passWord, setPassword] = useState("Ramu@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          emailId,
          passWord,
        },
        { withCredentials: true }
      );
      console.log(res);
    } catch (err) {
      console.error("error while calling api" + err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

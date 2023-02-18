import React from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ForgetPassword from "./pages/forgetpassword/ForgetPassword";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useUser } from "./context/UserContext";

const App = () => {
  const { user } = useUser();
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <ProtectedRoute user={user} redirectPath={"/login"}>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <ProtectedRoute user={user ? false : true} redirectPath={"/"}>
            <Login />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedRoute user={user ? false : true} redirectPath={"/"}>
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/forget-password"
        element={
          <ProtectedRoute user={user ? false : true} redirectPath={"/"}>
            <ForgetPassword />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;

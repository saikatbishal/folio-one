import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import UserProfile from "./finta/UserProfile.tsx";
import "./App.css";
import {users} from '../public/db/users.json'
import FintaHome from "./finta/FintaHome.tsx";
import Founders from "./finta/Founders.tsx";
import Guide from "./finta/Guide.tsx";
import Pricing from "./finta/Pricing.tsx";
import Login from "./finta/Login.tsx";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FintaLogo } from "../public/Icons.tsx";
import ComingSoon from "./finta/ComingSoon.tsx";
function App() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  // PrivateRoute component
  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? <>{children}</> : <Login />;
  };
  return (
    <motion.div
      initial={{
        backgroundColor: "linear-gradient(to bottom, transparent, #90caf9)",
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      className="h-lvh w-full bg-linear-to-b from-transparent via-blue-200 to-transparent"
    >
      <div
        className="w-20 ml-10 mt-4 fixed z-999 -top-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FintaLogo />
      </div>
      <Routes>
        <Route path="/" element={<FintaHome />} />
        <Route path="*" element={<ComingSoon />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/userprofile"
          element={
            <PrivateRoute>
              <UserProfile
                id={user?.id ?? 0}
                name={user?.username}
                username={user?.username}
                email={user?.email}
                image={users.find((u) => u.username === user?.username)?.image}
              />
            </PrivateRoute>
          }
        />
      </Routes>
    </motion.div>
  );
}

export default App;

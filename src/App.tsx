import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
// import UserProfile from "./finta/UserProfile.tsx";
import "./App.css";
import { users } from '../public/db/users.json'
// import FintaHome from "./finta/FintaHome.tsx";
// import Founders from "./finta/Founders.tsx";
// import Guide from "./finta/Guide.tsx";
// import Pricing from "./finta/Pricing.tsx";
// import Login from "./finta/Login.tsx";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ComingSoon from "./finta/ComingSoon.tsx";
const FintaLogo = lazy(()=>import('../public/Icons.tsx').then(module => ({ default: module.FintaLogo })));
const Founders = lazy(() => import('./finta/Founders.tsx'))
const Guide = lazy(() => import('./finta/Guide.tsx'))
const Pricing = lazy(() => import('./finta/Pricing.tsx'))
const FintaHome = lazy(() => import('./finta/FintaHome.tsx'))
const UserProfile = lazy(() => import('./finta/UserProfile.tsx'))
const Login = lazy(() => import('./finta/Login.tsx'))

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
        <Route path="/" element={<Suspense><FintaHome /></Suspense>} />
        <Route path="*" element={<Suspense><ComingSoon /></Suspense>} />
        <Route path="/founders" element={<Suspense><Founders /></Suspense>} />
        <Route path="/guide" element={<Suspense><Guide /></Suspense>} />
        <Route path="/pricing" element={<Suspense><Pricing /></Suspense>} />
        <Route path="/login" element={<Suspense><Login /></Suspense>} />
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

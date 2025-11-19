import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import FintaModal from "./FintaModal";
import google from "../../public/google.svg";
import apple from "../../public/apple.svg";
import facebook from "../../public/facebook.svg";

import {
  LoginIcon,
  PasswordIcon,
  EmailIcon,
  VisibilityOffIcon,
  VisibilityOnIcon,
} from "../../public/Icons";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import FintaButton from "./FintaButton";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [modalOpen, setModalOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname); // e.g., "/users/123"
  // console.log(location.search);    // e.g., "?tab=profile"
  // console.log(location.hash);      // e.g., "#section"
  // console.log(location.state);

  // Memoize social login icons array to prevent recreation
  const icons = useMemo(() => [
    {
      icon: google,
      name: "Google",
      url: "/auth/google",
    },
    {
      icon: facebook,
      name: "Facebook",
      url: "/auth/facebook",
    },
    {
      icon: apple,
      name: "Apple",
      url: "/auth/apple",
    },
  ], []);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setIsLoading(true);
    setError("");
    const result = await login(username, password);
    if (result.success) {
      navigate(location.state?.from || "/");
    } else {
      setError(result.message || "Invalid username or password");
    }
    setIsLoading(false);
  };
  return (
    <div className="h-screen overflow-y-hidden w-full bg-background">
      {isAuthenticated && modalOpen && (
        <FintaModal
          setIsOpen={setModalOpen}
          data={
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 text-green-600">
                Logged in
              </h2>
              <p className="text-lg">You can close the page now.</p>
            </div>
          }
          width="max-w-[350px]"
          height="max-h-[200px]"
          padding="p-8"
          position="center"
          top="center"
        />
      )}
      <div
        className="h-screen w-full bg-cover bg-center absolute top-0 left-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1545377446-446f9f6bd95b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740")`,
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card w-[360px] h-[430px] bg-card/90 shadow-md rounded-4xl p-6 relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          // initial={{ opacity: 0, y: -20, scale:0.1}}
          // animate={{ opacity: 1, y: 0, scale:1}}
          // transition={{ duration: 0.5 }}
          className="card items-center flex flex-col w-full h-[430px] bg-gradient-to-b from-[var(--input-bg)] to-[var(--card)] rounded-4xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className=" mt-4 p-1 rounded-3xl shadow-md bg-linear-to-b from-white via-white to-[#97e5ff2e] max-w-max">
            <LoginIcon />
          </div>
          <h1 className="p-4 mt-2 text-2xl font-stretch-105% font-semibold text-foreground tracking-wide">
            Sign in with email
          </h1>
          <p className="-mt-2.5 tracking-wide text-center text-muted-foreground">
            Make a new doc to bring your words, data,
            <br /> and teams together. For free
          </p>
          <div className="w-[300px] mt-8 mb-4 flex flex-col gap-4.5">
            <InputGroup className="flex gap-0.7 pl-2 bg-(--input-bg) border-input shadow-2xs">
              <InputGroupInput
                className="pt-3 pb-3 text-foreground placeholder:text-muted-foreground"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus={false}
              />
              <InputGroupAddon
                align="inline-start"
                className="pl-2 text-muted-foreground"
              >
                <EmailIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="pt-2 pb-2 gap-0.8 bg-(--input-bg) border-input shadow-2xs">
              <InputGroupInput
                type={visibility ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-foreground placeholder:text-muted-foreground"
              />
              <InputGroupAddon
                align="inline-start"
                className="text-muted-foreground"
              >
                <PasswordIcon />
              </InputGroupAddon>
              <InputGroupAddon
                align="inline-end"
                onClick={() => {
                  setVisibility((v) => !v);
                }}
                className="cursor-pointer text-muted-foreground"
              >
                {!visibility ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
              </InputGroupAddon>
            </InputGroup>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <p className="text-right text-[11px] -mt-2 text-muted-foreground hover:text-foreground cursor-pointer">
              Forgot password?
            </p>
          </div>

          <motion.button
            onClick={handleLogin}
            disabled={isLoading}
            className="px-4 py-2 ml-0.5 rounded-xl bg-primary text-primary-foreground w-[300px] tracking-wide text-lg cursor-pointer hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Get Started"}
          </motion.button>
          <p className="mt-4.5 text-[10px] text-center w-[260px]">
            Or sign in with
          </p>
          <div className="flex justify-between gap-3 mt-7">
            {icons.map((obj, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: (index + 1) * 0.2,
                    duration: (index + 1) * 0.2 + 0.5,
                  }}
                >
                  <FintaButton
                    id={index}
                    text={
                      <img src={obj.icon} className="w-5 h-5" alt={obj.name} />
                    }
                    size="sm"
                    className="shadow-[0px_1px_1px_rgba(0,0,100,0.15)] w-30 h-10"
                    rounded="lg"
                    variant="transparent"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

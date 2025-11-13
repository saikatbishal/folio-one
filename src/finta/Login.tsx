import { motion } from "motion/react";
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
import { useState } from "react";
import FintaButton from "./FintaButton";

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const icons = [
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
  ];
  return (
    <div className="h-screen overflow-y-hidden w-full bg-background">
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
            <InputGroup className="flex gap-0.7 pl-2 bg-[var(--input-bg)] border-input shadow-2xs">
              <InputGroupInput
                className="pt-3 pb-3 text-foreground placeholder:text-muted-foreground"
                placeholder="Email"
                autoFocus={false}
              />
              <InputGroupAddon
                align="inline-start"
                className="pl-2 text-muted-foreground"
              >
                <EmailIcon />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="pt-2 pb-2 gap-0.8 bg-[var(--input-bg)] border-input shadow-2xs">
              <InputGroupInput
                type={visibility ? "text" : "password"}
                placeholder="Password"
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
            <p className="text-right text-[11px] -mt-2 text-muted-foreground hover:text-foreground cursor-pointer">
              Forgot password?
            </p>
          </div>

          <motion.button className="px-4 py-2 ml-0.5 rounded-xl bg-primary text-primary-foreground w-[300px] tracking-wide text-lg cursor-pointer hover:opacity-90">
            Get Started
          </motion.button>
          <p className="mt-4.5 text-[10px] text-center w-[260px]">
            Or sign in with
          </p>
          <div className="flex justify-between gap-3 mt-7">
            {
              icons.map((obj, index)=>{
                console.log(index);
                return (
                  <motion.div
                  initial={{
                    opacity:0,
                    scale:0.5
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    delay:(index+1)*0.2,
                    duration: (index+1)*0.2+0.5
                  }}
                  ><FintaButton id={index} text = {<img src={obj.icon} className="w-5 h-5" alt={obj.name}/>} size="sm" className="shadow-[0px_1px_1px_rgba(0,0,100,0.15)] w-30 h-10" rounded="lg"
                  variant="transparent"
                  />
                    </motion.div>
                )
              })
            }
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

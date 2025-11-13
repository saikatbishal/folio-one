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

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       width="48"
//       height="48"
//       fill="none"
//       stroke="#222"
//       strokeWidth="2.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       style={{ transform: "scale(0.6)" }}
//     >
//       <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
//       <path d="M10 8l4 4-4 4" />
//       <path d="M4 12h10" />
//     </svg>
//   );
// };
// const PasswordIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       className="icon icon-tabler icons-tabler-outline icon-tabler-lock"
//       style={{ transform: "scale(1.6)" }}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
//       <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
//       <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
//     </svg>
//   );
// };
// const EmailIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
//       style={{ transform: "scale(1.6)" }}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
//       <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
//     </svg>
//   );
// };
// const VisibilityOffIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
//       style={{ transform: "scale(1.6)" }}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
//       <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
//       <path d="M3 3l18 18" />
//     </svg>
//   );
// };
// const VisibilityOnIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       stroke-width="2"
//       stroke-linecap="round"
//       stroke-linejoin="round"
//       className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
//       style={{ transform: "scale(1.6)" }}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
//       <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
//     </svg>
//   );
// };

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
          className="card items-center flex flex-col w-full h-[430px] bg-gradient-to-b from-[var(--input-bg)] via-[var(--card)] to-[var(--card)] rounded-4xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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

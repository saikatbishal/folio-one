import { motion } from "motion/react";
export const LoginIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="48"
      height="48"
      fill="none"
      stroke="#222"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "scale(0.6)" }}
    >
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 8l4 4-4 4" />
      <path d="M4 12h10" />
    </svg>
  );
};
export const PasswordIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-lock"
      style={{ transform: "scale(1.6)" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </svg>
  );
};
export const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
      style={{ transform: "scale(1.6)" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
    </svg>
  );
};
export const VisibilityOffIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
      style={{ transform: "scale(1.6)" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
      <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
      <path d="M3 3l18 18" />
    </svg>
  );
};
export const LightModeIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`icon icon-tabler icons-tabler-filled icon-tabler-sun ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" />
      <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" />
      <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" />
      <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" />
      <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  );
};
export const DarkModeIcon = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-sun ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
};
export const FintaLogo = () => {
  return (
    <motion.svg
      width="68"
      height="24"
      viewBox="0 0 68 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
      color="white"
      initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5, // total animation time
          ease: "easeInOut", // smooth drawing
        }}
        d="M19.2812 4.85986H29.3506V7.74125H22.6142V11.888H28.6942V14.5492H22.6142V20.3028H19.2812V4.85986ZM31.4841 20.3028H34.7564V9.07527H31.4841V20.3028ZM31.4538 7.71877H34.7867V4.87673H31.4538V7.71877ZM46.0352 9.45186C45.4527 9.10712 44.7676 8.93467 43.9799 8.93467C43.0035 8.93467 42.2175 9.19924 41.6216 9.72807C41.1267 10.1673 40.7391 10.7426 40.4556 11.4497L40.4046 9.07527H37.3242V20.3028H40.5965V13.8454C40.5965 13.3769 40.6839 12.9785 40.8591 12.6504C41.0341 12.3225 41.2765 12.0714 41.5862 11.8972C41.8959 11.7232 42.2529 11.6361 42.6568 11.6361C43.2628 11.6361 43.7375 11.8236 44.0809 12.1985C44.4243 12.5735 44.596 13.0957 44.596 13.7651V20.3028H47.8683V13.1626C47.8683 12.2989 47.7082 11.5508 47.3885 10.918C47.0687 10.2854 46.6175 9.79677 46.0352 9.45186ZM55.6728 17.8575C55.4607 17.8875 55.294 17.9026 55.1728 17.9026C54.8295 17.9026 54.582 17.824 54.4305 17.6666C54.279 17.5094 54.2033 17.2666 54.2033 16.9385V11.5256H56.2838V9.07527H54.2033V6.40396H50.9309V9.07527H49.4059V11.5256H50.9309V17.2298C50.9309 18.2809 51.2355 19.0826 51.845 19.635C52.4543 20.1873 53.3414 20.4634 54.5062 20.4634C54.8226 20.4634 55.1559 20.4434 55.5061 20.4032C55.8562 20.363 56.2164 20.2894 56.5868 20.1822L56.1424 17.7721C56.0414 17.7989 55.8848 17.8273 55.6728 17.8575ZM68.0019 12.7106V20.3028H64.9114V18.7361H64.8104C64.6219 19.1044 64.3744 19.4208 64.0681 19.6852C63.7616 19.9497 63.398 20.1539 62.9773 20.2978C62.5564 20.4416 62.0734 20.5136 61.528 20.5136C60.8075 20.5136 60.1646 20.3897 59.5989 20.1421C59.0333 19.8945 58.5905 19.5229 58.2708 19.0274C57.951 18.532 57.7911 17.9161 57.7911 17.1795C57.7911 16.5503 57.9038 16.0247 58.1294 15.6029C58.355 15.1811 58.6647 14.8381 59.0586 14.5736C59.4525 14.3091 59.9035 14.1083 60.412 13.971C60.9203 13.8339 61.4573 13.7417 62.0229 13.6948C62.6693 13.6346 63.1894 13.5743 63.5833 13.514C63.9772 13.4538 64.2666 13.3619 64.4519 13.2379C64.637 13.1141 64.7297 12.9351 64.7297 12.7006V12.6504C64.7297 12.3626 64.6655 12.1182 64.5377 11.9173C64.4097 11.7164 64.2229 11.5625 63.9772 11.4553C63.7313 11.3484 63.43 11.2946 63.0733 11.2946C62.7163 11.2946 62.4032 11.3484 62.134 11.4553C61.8646 11.5625 61.6441 11.7064 61.4725 11.8872C61.3008 12.0679 61.1778 12.2788 61.1038 12.5198L58.1143 12.088C58.2825 11.4387 58.589 10.8796 59.0333 10.4109C59.4778 9.94236 60.0433 9.57911 60.7302 9.32134C61.4169 9.06364 62.2047 8.93467 63.0935 8.93467C63.7464 8.93467 64.3694 9.01172 64.9619 9.16567C65.5544 9.31977 66.078 9.55226 66.5325 9.86359C66.9869 10.1749 67.3455 10.5666 67.6081 11.0386C67.8706 11.5106 68.0019 12.0679 68.0019 12.7106ZM64.7498 15.1509C64.6555 15.2112 64.5259 15.2665 64.361 15.3167C64.1959 15.3669 64.0125 15.4121 63.8105 15.4523C63.6086 15.4924 63.4081 15.5275 63.2096 15.5577C63.0109 15.5878 62.8274 15.6164 62.6592 15.6431C62.3022 15.69 61.9926 15.772 61.73 15.8891C61.4674 16.0063 61.2655 16.1603 61.1241 16.3511C60.9827 16.5419 60.9119 16.7746 60.9119 17.049C60.9119 17.3168 60.9809 17.5446 61.1189 17.7319C61.2569 17.9194 61.4438 18.06 61.6795 18.1536C61.9151 18.2475 62.1845 18.2942 62.4875 18.2942C62.925 18.2942 63.3139 18.2074 63.654 18.0332C63.9939 17.8592 64.2616 17.6215 64.4569 17.3201C64.6522 17.0189 64.7498 16.6774 64.7498 16.2958V15.1509Z"
        fill="#202E47"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
        d="M0 14.4L8.36126 9.60002L12.2203 11.8154L3.85904 16.6154V24L0 21.7846V14.4ZM0 9.23078L3.85904 11.4462V7.0154L12.2203 2.21539L8.36126 0L0 4.80001V9.23078Z"
        fill="#2870E9"
      />
    </motion.svg>
  );
};
export const VisibilityOnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
      style={{ transform: "scale(1.6)" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
    </svg>
  );
};

import CardParallax from "../CardParallax";
import Navbar from "./Navbar";
const Guide = () => {
  return (
    <div>
      <Navbar className="fixed top-0 z-50 bg-background shadow-2xl w-full p-4 flex justify-end pr-4 " />
      
      <CardParallax/>
    <div className="jusify-center items-center bg-blue-500 border-2 border-black text-white"> This is a guide book</div>
    </div>
  );
};

export default Guide;

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "motion/react";
export const Card = ({data}:{data: any}) => {
    const { headline, description, content } = data;
  return (
    <>
      <div className="flex flex-col gap-4 w-1/2 justify-center items-center mb-20">
        <h2 className="text-lg">{headline}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="overflow-hidden rounded-xl w-1/2">
        <img src={content} alt={headline} className="w-80 h-80 object-cover object-center"/>
      </div>
    </>
  );
};
const CardParallax = () => {
  const data = [
    {
      id: 1,
      headline: "Founder",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima porro aliquam dicta exercitationem repellat. Minus corrupti, laborum nisi exercitationem rerum quisquam quaerat fugit harum debitis aliquam vero? Iusto, suscipit ad?",
      content:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=922",
    },
    {
      id: 2,
      headline: "CTO",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima porro aliquam dicta exercitationem repellat. Minus corrupti, laborum nisi exercitationem rerum quisquam quaerat fugit harum debitis aliquam vero? Iusto, suscipit ad?",
      content:
        "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      id: 3,
      headline: "CFO",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima porro aliquam dicta exercitationem repellat. Minus corrupti, laborum nisi exercitationem rerum quisquam quaerat fugit harum debitis aliquam vero? Iusto, suscipit ad?",
      content:
        "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
  ];
  // const cardRef = useRef(null);
  // const { scrollY } = useScroll({
  //     target: cardRef,
  //     offset: ["start end", "end start"]
  // });
  // const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  // const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  // const y3 = useTransform(scrollY, [0, 300], [0, -10]
  // );
  return (
    <div className="flex flex-col gap-8 my-[100px] justify-center items-center mt-40 mb-40 w-[50%] mx-auto">
      {data.map((each) => {
        return (
          <div
            key={each.id}
            className="card-container flex gap-8 justify-center"
          >
            <Card data={each} />
          </div>
        );
      })}
    </div>
    
  );
};
export default CardParallax;




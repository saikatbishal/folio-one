import FintaButton from "./FintaButton";
import Navbar from "./Navbar";
import { Button } from "../components/ui/button";
import { ButtonGroup } from "../components/ui/button-group";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
// import Content from "../Content";

interface PlanCardProps {
  id?: number;
  isMonthly: boolean;
  image: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonLabel: string;
  highlighted?: boolean;
  index: number;
}

// Utility component for letter-by-letter animation
const AnimatedText: React.FC<{ text: string; id?: number }> = ({
  text,
  id,
}) => {
  const letters = text.split("");

  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delay: 0.1 * (id || 1),
          },
        },
      }}
    >
      {/* {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, filter: "blur(1px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.05, ease: "easeIn" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))} */}
      {letters}
    </motion.span>
  );
};

// Card animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      ease: "easeInOut",
      y: 0,
    },
  }),
};

const PlanCard: React.FC<PlanCardProps> = ({
  id,
  isMonthly,
  image,
  title,
  price,
  description,
  features,
  buttonLabel,
  highlighted = false,
  index,
}) => {
  const [imageOpacity, setImageOpacity] = useState(0);

  return (
    <motion.div
      id={id + "_card"}
      className={`group relative flex flex-col justify-between rounded-2xl border shadow-sm p-8 w-[320px] h-[550px]  ${
        highlighted ? "border-blue-100 border-4 p-2" : "bg-white"
      }`}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image Layer */}
      <motion.img
        src={image}
        alt={`${title}-background`}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-300"
        style={{ opacity: imageOpacity || "0.2" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none" />

      {/* Highlight badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full z-10">
          Recommended for you
        </div>
      )}

      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          <AnimatedText text={title} />
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          <AnimatedText text={description} />
        </p>

        <div className="text-center mt-6">
          <span className="text-4xl font-bold text-gray-900">
            <AnimatedText text={price} />
          </span>
          <span className="text-gray-500 text-lg">
            <AnimatedText text={isMonthly ? "/month" : "/year"} />
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            <AnimatedText text="What’s included:" />
          </h3>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-sm">
                  <AnimatedText text={feature} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex justify-center">
        <div
          onMouseEnter={() => setImageOpacity(0.4)}
          onMouseLeave={() => setImageOpacity(0.2)}
          onMouseDown={() => setImageOpacity(0.5)}
          onMouseUp={() => setImageOpacity(0.4)}
          className="w-full"
        >
          <FintaButton
            variant={highlighted ? "primary" : "muted"}
            text={buttonLabel}
            size="lg"
            className="w-full"
          />
          {/* <Content text={buttonLabel}/> */}
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(false);
  const handlePlanTermChange = (isMonthly: boolean) => {
    setMonthlyPayment(isMonthly);
  };

  const plans = [
    {
      id: 1,
      title: "Basic",
      price: monthlyPayment ? "$10" : "$100",
      description: "For individuals and small teams getting started.",
      features: [
        "Task management essentials",
        "Team messaging & file sharing",
        "Activity feed & project overview",
        "Mobile & desktop access",
        "Email support",
      ],
      buttonLabel: "Get started",
      image:
        "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Pro",
      price: monthlyPayment ? "$25" : "$250",
      description: "For teams that need more organization.",
      features: [
        "Time tracking & workload management",
        "Advanced reporting & filters",
        "Custom labels, priorities & checklists",
        "Project insights & team analytics",
        "Billing & usage tracking",
      ],
      buttonLabel: "Get started",
      highlighted: true,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Enterprise",
      price: monthlyPayment ? "$80" : "$800",
      description: "For large organizations with advanced needs.",
      features: [
        "Dedicated account manager",
        "Custom integrations & automation",
        "Unlimited projects & users",
        "KPI dashboards & reporting tools",
        "Onboarding support",
      ],
      buttonLabel: "Get started",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar className="fixed top-0 z-50 bg-white shadow-md w-full p-4 flex justify-end pr-6" />

      {/* Page Container */}
      <div className="min-h-screen flex flex-col items-center bg-linear-to-b from-gray-50 to-white pt-32 pb-20 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Plan</h1>
          <p className="text-gray-600 mt-2">
            Affordable and adaptable pricing to suit your goals.
          </p>

          <div className="flex self-center justify-center my-10">
            <ButtonGroup>
              <Button
                variant="outline"
                className={`${
                  monthlyPayment
                    ? "bg-blue-500 text-white hover:bg-blue-300"
                    : "bg-white text-black hover:bg-blue-300"
                }`}
                onClick={() => handlePlanTermChange(true)}
              >
                Monthly
              </Button>
              <Button
                variant="outline"
                className={`${
                  !monthlyPayment
                    ? "bg-blue-500 text-white hover:bg-blue-300"
                    : "bg-white text-black hover:bg-blue-300"
                }`}
                onClick={() => handlePlanTermChange(false)}
              >
                Yearly
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <PlanCard
              id={plan.id}
              isMonthly={monthlyPayment}
              image={plan.image}
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonLabel={plan.buttonLabel}
              highlighted={plan.highlighted}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;

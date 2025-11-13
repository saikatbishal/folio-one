import { Link } from "react-router-dom";

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <ul className={` ${className || ""} flex gap-6 items-center`}>
        <Link
          to="/founders"
          className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
        >
          Founders
        </Link>
        <Link
          to="/guide"
          className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
        >
          Guide
        </Link>
        <Link
          to="/pricing"
          className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
        >
          Pricing
        </Link>
        <li>
          <a
            href="/login"
            target="_blank"
            className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-sm"
          >
            Log In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

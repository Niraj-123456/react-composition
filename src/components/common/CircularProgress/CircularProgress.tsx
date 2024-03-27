import { cn } from "@/lib/utils";
import styles from "./circular-progress.module.css";

type CircularProgress = {
  className?: string;
  thickness?: number;
  color?: string;
  size?: string;
};

const CircularProgress = ({
  size = "2.5rem",
  thickness = 3,
  color = "currentColor",
  className,
}: CircularProgress) => {
  return (
    <svg
      viewBox="25 25 50 50"
      width={size}
      className={cn(className, styles.container)}
    >
      <circle
        r="20"
        cy="50"
        cx="50"
        style={{
          strokeWidth: thickness,
          stroke: color,
        }}
      ></circle>
    </svg>
  );
};

export default CircularProgress;

import classNames from "classnames";
import { Loader2 } from "lucide-react";

type CircularProgress = {
  className?: string;
};

const CircularProgress = ({ className }: CircularProgress) => {
  return (
    <div className={classNames("animate-spin w-6 h-6", className)}>
      <Loader2 className="w-full h-full text-gray-500" />
    </div>
  );
};

export default CircularProgress;

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Rating = {
  rating: {
    rate: number;
    count: number;
  };
};

const ProductRating = ({ rating }: Rating) => {
  return (
    <div className="ml-1 flex items-center">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rate) => (
            <Star
              key={rate}
              className={cn(
                rating.rate > rate ? "text-yellow-500" : "text-gray-300",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rating.rate} out of 5 stars</p>
      </div>
    </div>
  );
};

export default ProductRating;

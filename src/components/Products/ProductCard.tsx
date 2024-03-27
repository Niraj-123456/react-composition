import { type ReactNode } from "react";

type ProductCard = {
  image: ReactNode;
  info: ReactNode;
  action: ReactNode;
};

const ProductCard = ({ image, info, action }: Partial<ProductCard>) => {
  return (
    <div className="border border-gray-300 rounded-md w-80 overflow-hidden flex flex-col h-[510px] hover:cursor-pointer hover:shadow-lg">
      <div className="relative w-full h-64 bg-white overflow-hidden grid place-items-center">
        {image}
      </div>
      {info}
      {action}
    </div>
  );
};

export default ProductCard;

import { type ReactNode } from "react";

type ProductCard = {
  image: ReactNode;
  info: ReactNode;
  action: ReactNode;
};

const ProductCard = ({ image, info, action }: Partial<ProductCard>) => {
  

  return (
    <div
      className="border border-gray-400 rounded-md w-96 overflow-hidden flex flex-col h-[590px] hover:cursor-pointer hover:shadow-lg"
    
    >
      <div className="relative w-96 h-[280px] bg-white overflow-hidden grid place-items-center">
        {image}
      </div>
      {info}
      {action}
    </div>
  );
};

export default ProductCard;

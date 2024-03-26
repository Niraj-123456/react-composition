import { ReactNode } from "react";

type ProductInfo = {
  children: ReactNode;
};

const ProductInfo = ({ children }: ProductInfo) => {
  return <div className="p-2">{children}</div>;
};

export default ProductInfo;

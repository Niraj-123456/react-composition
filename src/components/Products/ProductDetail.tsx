import { fetchProduct } from "@/services/products/products";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, isFetching } = useQuery("product", () =>
    fetchProduct(id)
  );

  console.log("Product", product);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return <div>ProductDetail</div>;
};

export default ProductDetail;

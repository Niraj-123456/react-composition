import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/products/products";
import { Product } from "../../types/products";
import { useQuery } from "react-query";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";
import { Link } from "react-router-dom";

const Products = () => {
  const { data: products, isFetching } = useQuery("products", fetchProducts);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid place-items-center grid-cols-4 gap-4 py-8 px-2">
      {products?.data?.map((product: Product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ProductCard
            image={<ProductImage image={product.image} alt={product.title} />}
            info={
              <ProductInfo>
                <h1 className="text-lg font-bold">{product.title}</h1>
                <p className="pt-1 text-gray-500 line-clamp-4">
                  {product.description}
                </p>
                <p className="pt-2 text-lg">${product.price}</p>
              </ProductInfo>
            }
            action={<ProductActions />}
          />
        </Link>
      ))}
    </div>
  );
};

export default Products;

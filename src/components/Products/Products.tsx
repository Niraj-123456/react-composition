import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/products/products";
import { Product } from "../../types/products";
import { useQuery } from "react-query";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProductRating from "./ProductRating";

const Products = () => {
  const { data: products, isFetching } = useQuery("products", fetchProducts);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="grid place-items-center grid-cols-1 gap-8 py-2 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 xl:px-28 md:py-8">
      {products?.data?.map((product: Product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ProductCard
            image={<ProductImage image={product.image} alt={product.title} />}
            info={
              <ProductInfo>
                <h1
                  className="text-lg font-bold line-clamp-2"
                  title={product.title}
                >
                  {product.title}
                </h1>

                <div className="py-1 mt-1">
                  <ProductRating rating={product.rating} />
                </div>
                {/* <p className="pt-1 text-gray-500 line-clamp-4">
                  {product.description}
                </p> */}
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

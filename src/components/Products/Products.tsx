import ProductCard from "./ProductCard";
import { fetchProducts } from "../../services/products/products";
import { Product } from "../../types/products";
import { useQuery } from "react-query";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProductRating from "./ProductRating";
import { imageFormatter } from "@/lib/imageUtils";
import Pagination from "../common/Pagination/Pagination";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "0");

  const handleChangePageNmuber = (page: number) => {
    setSearchParams((prev) => {
      prev.set("page", (page + 1).toString());
      return prev;
    });
  };

  const { data: products, isFetching } = useQuery(
    ["products", currentPage],
    () => fetchProducts(currentPage, 20),
    {
      retry: 2,
    }
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="py-2 px-8 xl:px-28 md:py-8">
      <div className="grid place-items-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
        {products?.data?.map((product: Product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard
              image={
                <ProductImage
                  image={imageFormatter(product.images[0])}
                  alt={product.title}
                />
              }
              info={
                <ProductInfo>
                  <h1
                    className="text-lg font-bold line-clamp-2"
                    title={product.title}
                  >
                    {product.title}
                  </h1>

                  <div className="py-1 mt-1">
                    <ProductRating rating={{ rate: 4, count: 240 }} />
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
      <div className="p-2 flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          onChangePageNumber={handleChangePageNmuber}
        />
      </div>
    </div>
  );
};

export default Products;

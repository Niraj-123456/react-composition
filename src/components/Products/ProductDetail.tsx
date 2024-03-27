import { fetchProduct } from "@/services/products/products";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Product } from "@/types/products";
import ProductRating from "./ProductRating";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const form = useForm();

  const { data, isFetching } = useQuery("product", () => fetchProduct(id));

  const product: Product = data?.data;

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col gap-6 p-2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain object-center"
            />

            <div className="flex items-center justify-center gap-3">
              <div className="border-2 border-gray-400 rounded-md p-1 cursor-pointer transition-all hover:border-gray-800 hover:shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-24 object-contain object-center"
                />
              </div>
              <div className="border-2 border-gray-400 rounded-md p-1 cursor-pointer transition-all hover:border-gray-800 hover:shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-24 object-contain object-center"
                />
              </div>
              <div className="border-2 border-gray-400 rounded-md p-1 cursor-pointer transition-all hover:border-gray-800 hover:shadow-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-24 object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <ProductRating rating={product.rating} />
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <div className="mt-6">
              <Form {...form}>
                <form>
                  <div className="flex gap-2 items-center">
                    <Button className="text-xl py-6">
                      <Plus />
                    </Button>
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Quantity"
                              {...field}
                              className="py-6 text-lg"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button className="text-xl py-6">
                      <Minus />
                    </Button>
                  </div>
                  <div className="mt-6 flex gap-2 flex-col sm:flex-row">
                    <Button
                      type="submit"
                      className="bg-indigo-600 px-8 py-6 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    >
                      Add To Cart
                    </Button>

                    <Button
                      type="submit"
                      className="px-8 py-6 text-base font-medium sm:w-full"
                    >
                      Buy Now
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

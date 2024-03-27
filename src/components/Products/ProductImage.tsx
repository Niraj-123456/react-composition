const ProductImage = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="absolute w-full h-full object-cover object-center"
    />
  );
};

export default ProductImage;

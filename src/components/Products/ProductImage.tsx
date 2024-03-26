const ProductImage = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="absolute w-full h-56 object-contain object-center"
    />
  );
};

export default ProductImage;

import "./ProductCard.css";
const ProductCard = ({ id, name, price, in_stock }) => {
  return (
    <div
      className={
        in_stock ? "product_in_stock product" : "product_unavailable  product"
      }
    >
      <p style={{ marginRight: "10px" }}>{id}</p>
      <p style={{ marginRight: "10px" }}>{name}</p>
      <p style={{ marginRight: "10px" }}>{price}</p>
      <p style={{ marginRight: "10px" }}>
        {in_stock ? "In Stock" : "UnAvailable"}
      </p>
    </div>
  );
};

export default ProductCard;

import env from "../../utils/enviroment";
import "../../styles/pages/product.css";

const ProductContainer = ({ product }) => {
  
  const setProductOnLS = () => {
    window.localStorage.setItem("product", product.id);
    console.log(`Producto con Id: ${product.id} guardado`);
    window.location.href = `${env.frontUrl}/product`;
  }

  return (
    <div className="product-container" onClick={setProductOnLS}>
      <img src={product.imageURL} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <span>{product.price}</span>
      </div>
    </div>
  );
};

export default ProductContainer;

import { useSelector } from "react-redux";
import "./Details.css";

function Detail() {
  const productID = useSelector((state) => state.product.productID);

  console.log("productID", productID);

  return (
    <div className="details-container">
      <div className="product-image">
        <img
          className="product-detail-image"
          src="https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product image"
        />
      </div>
      <div className="product-info">
        <div className="title">
          <div>Product Title</div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            sunt consectetur similique doloribus vitae, expedita vero rerum quo
            repellat nam autem veritatis, sapiente accusantium laborum
            praesentium obcaecati! Velit, ipsam quod.
          </p>
        </div>
        <div className="group">
          <button className="group-button">+</button>
          <input className="item-number" type="number" readOnly value={0} />
          <button className="group-button">-</button>
        </div>
        <div className="checkout">
          <div className="price">
            Price: <span>$500</span>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

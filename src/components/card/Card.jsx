import "./Card.css";
import { Rating } from "react-simple-star-rating";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="product-image">
          <img className="image" src={props.image} alt="product image" />
        </div>
        <div className="product-details">
          <h3>{props.title}</h3>
          <div className="rating">
            <Rating readonly initialValue={props.rating} size={25} />
          </div>
          <div className="cart1">
            <div className="price">${props.price}</div>
            <button className="button">Buy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

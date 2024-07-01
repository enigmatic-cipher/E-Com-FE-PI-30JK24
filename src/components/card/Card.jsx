import { useDispatch } from "react-redux";
import "./Card.css";
import { Rating } from "react-simple-star-rating";
import { setProductID } from "../../redux/slice/product";
import { Link } from "react-router-dom";

function Card(props) {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    console.log("buy clicked", props.id);
  };

  const handleProductClicked = () => {
    dispatch(setProductID(props.id));
  };

  return (
    <>
      <div className="card-container">
        <div className="product-image">
          <Link to="/checkout">
            <img
              className="image"
              src={props.image}
              alt="product image"
              onClick={(e) => handleProductClicked(e)}
            />
          </Link>
        </div>
        <div className="product-details">
          <h3 onClick={() => handleProductClicked()}>{props.title} </h3>
          <div className="rating">
            <Rating readonly initialValue={props.rating} size={25} />
          </div>
          <div className="cart1">
            <div className="price">${props.price}</div>
            <button className="button" onClick={() => handleBuyClick()}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

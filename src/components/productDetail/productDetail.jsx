import { useSelector } from "react-redux";
import "./productDetail.css";
import { useEffect } from "react";
// import { useEffect } from "react";

function productDetail() {
  //   const productID = useSelector((state) => state.selectedProductID);

  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    console.log("first", data);
  }, [data]);

  return (
    <>
      <div className="productDetailContainer">
        <div className="productImage"></div>
        <div className="productSpecipication">
          <div className="productTitle"></div>
          <div className="productPrice"></div>
          <div className="info"></div>
          <div className="product-button">ADD TO CART</div>
        </div>
      </div>
    </>
  );
}

export default productDetail;

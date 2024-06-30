import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/slice/product";

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { isLoading, isError, data } = useSelector((state) => state.product);

  useEffect(() => {
    setProducts(data.products);
  }, [data]);

  console.log("product", data.products);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something Went Worng</div>;

  return (
    <>
      <Navbar />
      <div className="product-list-container">
        {products?.map((product) => (
          <Card
            key={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;

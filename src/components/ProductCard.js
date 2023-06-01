import React, { useState, useEffect } from "react";
import "../styles.css";
import Pagination from "../components/Pagination";
export default function Productcard() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProduct = async () => {
    let pdtData = await fetch("https://dummyjson.com/products?limit=100");
    let data = await pdtData.json();
    console.log(data);
    if (data && data.products) {
      setProduct(data.products);
    }
  };
  console.log(product, "pdt");
  const handlePage = (pagenumber) => {
    console.log(pagenumber, "a");
    setPage(pagenumber);
  };
  useEffect(() => {
    fetchProduct();
  }, [page]);

  return (
    <div>
      {product.length > 0 && (
        <div className="product">
          {product.slice(page * 10 - 10, page * 10).map((pdt, i) => {
            return (
              <div className="pdt__single" key={pdt.id}>
                <img alt={pdt.title} src={pdt.thumbnail} />
                <p>{pdt.title}</p>
              </div>
            );
          })}
        </div>
      )}
      <Pagination product={product} handlepage={handlePage} />
    </div>
  );
}

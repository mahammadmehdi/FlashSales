import React, { useEffect, useState } from "react";
import "./index.scss";

function FlashSalesCard() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="flashSalesPages">
      <div className="flashSalesCards">
        {product.map((x) => (
          <div className="flashSalesCard">
            <div className="cardImages">
            <img className="cardImage" src={x.image} />
            <li className="cardPersentage">{x.persentage}</li>
            <div className="icons">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-eye"></i>
            </div>
            <div className="imagesText">Add To Cart</div>
            </div>
            <li className="cardName">{x.name}</li>
            <div className="mainPrice">
              {/* {" "} */}
              <li className="cardPrice">${x.price}</li>
              <li className="cardOldPrice">${x.oldPrice}</li>
            </div>
            <div className="iconsComment">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <li className="nameComments">({x.comments})</li>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashSalesCard;

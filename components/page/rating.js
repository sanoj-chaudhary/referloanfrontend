import React, { useState } from "react";
import axios from "axios";

const StarRating = ({data}) => {
  
  const mySentence = data.name.trim();
  const productName = mySentence.split(" ");

  const newProductName = productName.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join("_");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  const addRating = async (index) =>
  {
    let data1 = {'bank_product_id':data.bank_product_id,'rating':index,'session_id':'sdee2344'}
    const res = await axios.post(`https://api.referloan.in/api/add-rating/`, data1);
    console.log(data1)
  }

  

  return (
    <>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => addRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
         
          
        );
      })}
      <br/>
      /5
    </div>

    {/* google structure - product schema */}
    <div itemType="https://schema.org/Product" itemScope>
      <meta itemProp="sku" content={data.id} />
      <meta itemProp="name" content={data.name} />
      <link itemProp="image" href={`/uploads/product_bank/${newProductName}.webp`} />
      <meta itemProp="description" content={data.meta_description} />
      <div itemProp="aggregateRating" itemType="https://schema.org/AggregateRating" itemScope>
        <meta itemProp="reviewCount" content="" />
        <meta itemProp="ratingValue" content="" />
      </div>
    </div>

    </>
  );
};

export default StarRating;
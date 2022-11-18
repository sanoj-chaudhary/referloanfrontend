import React, { useState, useEffect } from "react";
import axios from "axios";
import { db } from './../../config/db'

const StarRating = ({ data }) => {

  const mySentence = data.name.trim();
  const productName = mySentence.split(" ");

  const newProductName = productName.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  }).join("_");

  // Insert Rating
  const addRating = async (index) => {
    let data1 = { 'bank_product_id': data.bank_product_id, 'rating': index, 'session_id': 'sdee2344' }
    const res = await axios.post(`https://api.referloan.in/api/add-rating/`, data1);
  }

  // Get Rating
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratinginfo, setRatinginfo] = useState(0);

  const getRating = async (index) => {
    const response1 = await axios.get(`${process.env.APP_URL}/get_rating_bybpid/` + data.bank_product_id);
    setRatinginfo(response1.data[0]);
  }

  useEffect(() => {
    getRating()
  },[])

  return (
    <>
        <div className="ratingWrapper">
          <span className="heading">Product Rating</span>
          <p>{ratinginfo?ratinginfo['average_rating']:0} /5</p>
          
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
            
          <p>Total - {ratinginfo?ratinginfo['total_ratings']:0} ratings</p>

          <div className="row">
            
            {/* Rating 5 */}
            <div className="side">
              5 <span className="star fafa">&#9733;</span>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{ width: ratinginfo?ratinginfo['total_rating_5']/ratinginfo['total_ratings']*100+'%':"0%"}}> </div>
              </div>
            </div>
            <div className="side right">
              <div>{ratinginfo?ratinginfo['total_rating_5']:0}</div>
            </div>

            {/* Rating 4 */}
            <div className="side">
              4 <span className="star fafa">&#9733;</span>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{ width: ratinginfo?ratinginfo['total_rating_4']/ratinginfo['total_ratings']*100+'%':"0%"}}></div>
              </div>
            </div>
            <div className="side right">
            <div>{ratinginfo?ratinginfo['total_rating_4']:0}</div>
            </div>

            {/* Rating 3 */}
            <div className="side">
              3 <span className="star fafa">&#9733;</span>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{ width: ratinginfo?ratinginfo['total_rating_3']/ratinginfo['total_ratings']*100+'%':"0%"}}></div>
              </div>
            </div>
            <div className="side right">
            <div>{ratinginfo?ratinginfo['total_rating_3']:0}</div>
            </div>

            {/* Rating 2 */}
            <div className="side">
              2 <span className="star fafa">&#9733;</span>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{ width: ratinginfo?ratinginfo['total_rating_2']/ratinginfo['total_ratings']*100+'%':"0%"}}></div>
              </div>
            </div>
            <div className="side right">
            <div>{ratinginfo?ratinginfo['total_rating_2']:0}</div>
            </div>

            {/* Rating 1 */}
            <div className="side">
              1 <span className="star fafa">&#9733;</span>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div className="bar" style={{ width: ratinginfo?ratinginfo['total_rating_1']/ratinginfo['total_ratings']*100+'%':"0%"}}></div>
              </div>
            </div>
            <div className="side right">
            <div>{ratinginfo?ratinginfo['total_rating_1']:0}</div>
            </div>

          </div>

        </div>

      {/* google structure - product schema */}
      <div itemType="https://schema.org/Product" itemScope>
        <meta itemProp="sku" content={data.id} />
        <meta itemProp="name" content={data.name} />
        <link itemProp="image" href={`/uploads/product_bank/${newProductName}.webp`} />
        <meta itemProp="description" content={data.meta_description} />
        <div itemProp="aggregateRating" itemType="https://schema.org/AggregateRating" itemScope>
          <meta itemProp="reviewCount" content={ ratinginfo?ratinginfo['total_ratings']:"0"} />
          <meta itemProp="ratingValue" content={ ratinginfo?ratinginfo['average_rating']:"0"} />
        </div>
      </div>

    </>
  );
};

export default StarRating;
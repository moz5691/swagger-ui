import React from "react";
import SwaggerUI from "swagger-ui-react";
import shopapiBooksJson from "../swagger-docs/shopapi-books.json";

const ShopApiBooks = () => {
  return   (
    <div style={{marginTop:"10vh"}}>
      <SwaggerUI spec={shopapiBooksJson} />
    </div>
  )
  
  ;
};

export default ShopApiBooks;
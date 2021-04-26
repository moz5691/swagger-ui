import React from "react";
import SwaggerUI from "swagger-ui-react";
import shopApiJson from "../swagger-docs/shopapi.json";

const ShopApi = () => {

  return  (
    <div style={{marginTop:"10vh"}}>
        <SwaggerUI spec={shopApiJson} />
    </div>)  ;
};

export default ShopApi;
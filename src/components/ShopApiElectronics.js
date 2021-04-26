import React from "react";
import SwaggerUI from "swagger-ui-react";
import shopapiElectronicsJson from "../swagger-docs/shopapi-electronics.json";

const ShopApiElectronics = () => {
  return (
    <div style={{marginTop:"10vh"}}>
      <SwaggerUI spec={shopapiElectronicsJson} />
    </div>
  )   
};

export default ShopApiElectronics;
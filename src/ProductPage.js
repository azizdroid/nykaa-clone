import React, { useEffect, useContext } from "react";
import { NykaContext } from "./NykaContext";

export default function ProductPage() {
  const context = useContext(NykaContext);

  useEffect(() => {
    console.log(context.details.product);
  }, []);

  return (
    <div>
      <p>Product pageeee</p>
      <p>{context.details.product.name} </p>
    </div>
  );
}

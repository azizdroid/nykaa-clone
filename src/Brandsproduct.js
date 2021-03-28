import React, { useEffect, useContext, useState } from "react";
import { NykaContext } from "./NykaContext";
import axios from "axios";

export default function Brandsproduct() {
  const context = useContext(NykaContext);
  const [data, setData] = useState();

  useEffect(() => {
    console.log(context.details.brand);
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${context.details.brand}`
      )
      .then((res) => {
        console.log("hereeee");
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  }, []);

  return <div>{data && data.map((value) => <p>{value.name}</p>)}</div>;
}

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("estp se ejecuto");
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return (
    <>
      <h3> {category}</h3>
      <ol>
        {images.map((imagen) => {
         return  <li key={imagen.id}> {imagen.title} </li>;
        })}
      </ol>
    </>
  );
};

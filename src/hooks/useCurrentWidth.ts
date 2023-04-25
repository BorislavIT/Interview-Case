import { useState, useEffect } from "react";

const useCurrentWidth = () => {
  const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let [width, setWidth] = useState(getWidth());

    useEffect(() => {
      const resizeListener = () => {
        setWidth(getWidth());
      };
      window.addEventListener("resize", resizeListener);

      return () => {
        window.removeEventListener("resize", resizeListener);
      };
    }, []);

    return width;
  };

  export default useCurrentWidth;
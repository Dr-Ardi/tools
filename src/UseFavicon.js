import { useEffect } from "react";

const useFavicon = (faviconUrl) => {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");
    
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = faviconUrl 
  }, [faviconUrl]);
};

export default useFavicon;
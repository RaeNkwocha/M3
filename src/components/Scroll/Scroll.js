import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
const Scroll = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default Scroll;

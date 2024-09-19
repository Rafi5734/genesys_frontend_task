import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return loading ? (
    <div className="flex justify-center items-center w-full h-screen">
      <HashLoader color="#d82424" loading />
    </div>
  ) : null;
};

export default Loader;

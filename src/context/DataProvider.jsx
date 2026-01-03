import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // important

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

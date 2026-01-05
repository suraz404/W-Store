import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");

        const products = res.data.products;

        setData(products);

        // ✅ GET UNIQUE CATEGORIES
        const uniqueCategories = [
          "ALL",
          ...new Set(products.map((item) => item.category.toUpperCase())),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{ data, categories }}>
      {children}
    </DataContext.Provider>
  );
};

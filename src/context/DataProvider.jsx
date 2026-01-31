import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=200");
        const products = res.data.products;

        setData(products);

        const uniqueCategories = [
          "ALL",
          ...new Set(
            products
              .map((item) => item.category?.toUpperCase())
              .filter(Boolean),
          ),
        ];

        const uniqueBrands = [
          "ALL",
          ...new Set(
            products.map((item) => item.brand?.toUpperCase()).filter(Boolean),
          ),
        ];

        setCategories(uniqueCategories);
        setBrands(uniqueBrands);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <DataContext.Provider value={{ data, categories, brands }}>
      {children}
    </DataContext.Provider>
  );
};

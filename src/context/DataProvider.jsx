import axios from "axios";
import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const ALLOWED_CATEGORIES = [
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Miscellaneous",
];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");

        const filteredProducts = res.data.filter((item) =>
          ALLOWED_CATEGORIES.includes(item.category?.name)
        );

        setData(filteredProducts);

        const uniqueCategories = [
          "All",
          ...new Set(filteredProducts.map((p) => p.category.name)),
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

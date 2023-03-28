import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list/list";
import Cart from "./pages/cart/cart";
import About from "./pages/about/about";
import Item from "./pages/item/item";
import itemcontext from "./context/itemcontext";
import cartContext from "./context/cartcontext";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setList(result);
    };
    getData();
  }, []);

  return (
    <BrowserRouter>
      <itemcontext.Provider value={list}>
        <cartContext.Provider value={{cart, setCart}} >
        <Navbar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/item" element={<Item />}>
            <Route path="/item/:itemID" element={<Item />}/>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </cartContext.Provider>
      </itemcontext.Provider>
    </BrowserRouter>
  );
}

export default App;

import Banner from "./Banner";
import Cart from "./Cart";
import Description from "./Description";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner/>
      <Description/>
      <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      {/*<QuestionForm/>*/}
      <Footer/>
    </div>
  );
}

export default App;

import Banner from "./Banner";
import Cart from "./Cart";
import Description from "./Description";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div>
      <Banner/>
      <Description/>
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      {/*<QuestionForm/>*/}
      <Footer/>
    </div>
  );
}

export default App;

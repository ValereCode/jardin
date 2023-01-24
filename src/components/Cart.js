import "../styles/Cart.css";

const Cart = () => {
    const pMonterea = 8
    const pLierre = 10
    const pBouquet = 15
                  
    return (
      <div className="lmj-cart">
        <ul>
          <li>montera: {pMonterea}</li>
          <li>lierre: {pLierre}</li>
          <li>bouquet: {pBouquet}</li>
        </ul>
        <p>Total: {pMonterea + pLierre + pBouquet}</p>
      </div>
    );
}

export default Cart
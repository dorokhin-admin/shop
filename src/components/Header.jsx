import React, { useState } from "react";
import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order.jsx";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(order =>
        sum += Number.parseFloat(order.price))
    return (<div>
        {props.orders.map(order => (
            <Order
                key={order.id}
                item={order}
                onDelete={props.onDelete}
            />
        ))}
        <p className='sum'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
const [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>HouseStaf</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>

        <FaShoppingCart onClick={() => setCartOpen (!cartOpen)} 
        className={`shop-cart-button ${cartOpen && 'active'}`}/>

          {cartOpen && (
              <div className="shop-cart">
                  {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
          )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

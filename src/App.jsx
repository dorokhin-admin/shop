import React, {Component} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Items  from "./components/Items.jsx";
import CartItem from "./components/CartItem.jsx";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        products: [
            { id:1, title: "iPhone 14", price: 999, quantity: 1 },
            { id:2, title: "iPhone 15", price: 199, quantity: 1 },
            { id:3, title: "iPhone 16", price: 799, quantity: 1 }
            ],
        cartItems:[
            {id:1, title:'sadasd', price:100,quantity:100}
        ],
        orders : [],
      items: [
          {
            id: 1,
            title: "iPhone 14",
            img: "img/iphone.jpg",
            desc: "Современный смартфон с отличной камерой и производительностью.",
            category: "electronics",
            price: 999
          },
          {
            id: 2,
            title: "Ноутбук Lenovo IdeaPad",
            img: "img/lenobo.png",
            desc: "Лёгкий и быстрый ноутбук для работы и учебы.",
            category: "electronics",
            price: 850
          },
          {
            id: 3,
            title: "Кроссовки Nike Air",
            img: "img/cros.png",
            desc: "Удобные кроссовки для бега и повседневной носки.",
            category: "clothes",
            price: 120
          },
          {
            id: 4,
            title: "Рюкзак городской",
            img: "img/backpack.jpg",
            desc: "Стильный рюкзак для города и путешествий.",
            category: "accessories",
            price: 60
          },
          {
              id: 5,
              title: "Ноутбук Lenovo IdeaPad",
              img: "img/lenobo.png",
              desc: "Лёгкий и быстрый ноутбук для работы и учебы.",
              category: "electronics",
              price: 350.32
          },
          {
              id: 6,
              title: "Кроссовки Nike Air",
              img: "img/cros.png",
              desc: "Удобные кроссовки для бега и повседневной носки.",
              category: "clothes",
              price: 220.21
          }
      ]
    }
      this.addToOrder = this.addToOrder.bind(this);
      this.deleteOrder = this.deleteOrder.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);

  }
  render(){
      const res = this.state.products.map(({price, ...rest}) =>({
              ...rest,
                price,
              priceWithTax: price + price * 0.1
          })
          )
      const filter = res.filter((item) =>item.priceWithTax > 500)
        const iphone = filter.find({title} => title === "iPhone 14")
      console.log(iphone)
  return (
    <div className="wrapper">


        {this.state.cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    inAdd = {this.handleAdd}
                    inDel = {this.handleRemove}
                />
            )
        )}
      <Header
          orders={this.state.orders}
          onDelete={this.deleteOrder}
      />
      <Items
          items={this.state.items}
          onAdd={this.addToOrder}
      />

        <Footer
      />

    </div>
    );
  }

    handleAdd(item){
      this.setState(
          prevState => ({
            cartItems: prevState.cartItems.map(ci =>
            ci.id === item.id ? {...ci, quantity: ci.quantity + 1}: ci)
        })
      )
    }

    handleRemove(item){
      this.setState(prevState => ({
          cartItems: prevState.cartItems.map(ci =>
          ci.id === item.id ? {...ci, quantity: ci.quantity - 1}: ci)
      }))
    }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(order =>
            order.id !== id)})
  }

  addToOrder(item){
      let isInArray = false
     this.state.orders.forEach(order => {
         if(order.id === item.id){
            isInArray = true
         }
     })
      if(!isInArray){
          this.setState({orders: [...this.state.orders, item]})
      }
  }
}


export default App;

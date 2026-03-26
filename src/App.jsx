import React, {Component} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Items  from "./components/Items.jsx";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        products: [
            { id:1, title: "iPhone 14", price: 999, quantity: 1 },
            { id:2, title: "iPhone 15", price: 199, quantity: 1 },
            { id:3, title: "iPhone 16", price: 799, quantity: 1 }
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
  }


    componentDidMount(){
      this.setState(prevState => ({
           products: prevState.products.map(product =>
            product.id === 1
                ? {...product, quantity: 5}
                : product)
            }))
    }

    plus(id){
      this.setState(prevState => ({
          products: prevState.products.map(product =>
              product.id === id
              ?{...product, quantity: product.quantity + 1}
                : product)
      }))
    }

    minus(id){
      this.setState(prevState => ({
          products: prevState.products.map(product =>
          product.id === id
          ?{...product,quantity:product.quantity - 1}
          : product)
      }))
    }//dsddыфыeesdadss


  render(){
      const products = this.state.products;

  return (
    <div className="wrapper">

        {products.map((product) => (
            <div key={product.id}>
                {this.showItem(product)}
                <button onClick={() => this.plus(product.id)}>+</button>
                <button onClick={() => this.minus(product.id)}>-</button>
            </div>
        ))}


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


    showItem({title, price, id, quantity}){
        return <div>{title} - {price}$ - {quantity}</div>
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

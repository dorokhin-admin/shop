import React, {Component} from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0}
    }
    render() {
        const {item} = this.props;
        return (
            <div>
                <p>{item.title}: {item.price}</p>

                <button onClick={()=> this.props.inAdd(this.props.item)}>+</button>
                <button onClick={()=> this.props.inDel(this.props.item)}>-</button>

                <p>{item.title}: Number({item.price})$ * {this.state.quantity} </p>
            </div>


        );
    }
}

export default CartItem;
import React, {Component} from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0}
    }
    render() {
        const {item,inAdd,inDel} = this.props;
        const { quantity } = this.state;
        const total = Number(item.price) * quantity
        return (
            <div>
                <p>{item.title}: {item.price}</p>

                <button onClick={()=> inAdd(item)}>+</button>
                <button onClick={()=> inDel(item)}>-</button>

                <p>{item.title}: {total} </p>
            </div>
        );
    }
}

export default CartItem;
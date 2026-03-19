import React, {Component} from 'react';
import { FaTrash } from 'react-icons/fa'

class Order extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.img} alt={this.props.item.title}/>
                <p>{this.props.item.title}</p>
                <b>{this.props.item.price}$</b>
                <FaTrash className="delete-icon"
                         onClick={() => {
                             this.props.onDelete(this.props.item.id)
                         }}
                />
            </div>
        );
    }
}

export default Order;
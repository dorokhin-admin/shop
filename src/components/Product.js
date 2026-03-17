import React, {Component} from 'react';

class Product extends Component {
    render() {
        console.log(this)
        return (
            <div>
                <p>
                    {this.props.title}: {this.props.price}$
                </p>

            </div>
        );
    }
}

export default Product;
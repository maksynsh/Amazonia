import React from 'react'
import styles from './Cart.module.css'
import CartProduct from './CartProduct/CartProduct'
import {useSelector} from 'react-redux'
import {getCart} from '../../../redux/selectors/checkout-selectors'

const Cart: React.FC = () => {
    const cart = useSelector(getCart)

    const cartItems = cart.map(item =>
        <CartProduct
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
            rating={item.rating}
            quantity={item.quantity}
        />
    )

    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Shopping Cart</h2>
            <p>Price</p>
            {cartItems}
        </div>
    )
}

export default Cart
import {useState} from 'react';
import {useSelector} from "react-redux";
import {createPortal} from "react-dom";
import ShoppingCart from "../assets/shopping-cart.svg";
import Cart from "./Cart.jsx";

export default function FloatingCartButtons() {
    const [showModal, setShowModal] = useState(false);
    const cart = useSelector(state => state.cart);

    return (
        <>
            <button
                onClick={() => setShowModal(!showModal)}
                className="fixed py-2 px-4 top-5 right-5 bg-slate-100 rounded flex justify-center items-center">
                <img className="w-6 h-6 mr-4" src={ShoppingCart} alt=""/>
                <span className="text-lg font-semibold">
                    View your cart: {cart.cartItems.length}
                </span>
            </button>
            {showModal && createPortal(
                <Cart onClose={() => setShowModal(false)}/>, document.body
            )}
        </>
    )
}
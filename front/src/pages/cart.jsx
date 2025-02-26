import { useEffect, useState } from "react";
import DashboardHeader from "../components/headers/dashboardHeader";

import "../styles/pages/cart.css"


const CartPage = () => {

    const [cartState, setCartState] = useState([]);

    const getProductsFromCart = () => {

        const serializedCart = window.localStorage.getItem("cart");

        if(!serializedCart){}else{
            const cart = JSON.parse(serializedCart);
            setCartState(cart)
        }

    };

    const resetCart = () => {
        //borramos la variable del localstorage
        window.localStorage.removeItem("cart");

        //recargamos la pagina
        window.location.reload()
    };

    const buyCart = () => {

        const serializedCart = window.localStorage.getItem("cart");

        if(!serializedCart){
            alert(`No hay productos en tu carrito`)
        }else{

            const cart = JSON.parse(serializedCart);
            setCartState(cart)

            let total = 0;

            cart.map((element)=>{

                total += element.price * element.quantity;

            });

            alert(`El total de tu compra es: ${total}`)

        }

    }

    useEffect(()=>{

        getProductsFromCart();

    }, []);


    
    return (
        <div className="cart-container">
            <DashboardHeader />
            <div className="cart-content">
                <h1>🛒 Tu Carrito</h1>

                {cartState.length === 0 ? (
                    <h3 className="empty-cart">Carrito Vacío</h3>
                ) : (
                    <div className="cart-items">
                        {cartState.map((element, index) => (
                            <div key={index} className="cart-item">
                                <img src={element.imageURL} alt={element.title} />
                                <div className="item-details">
                                    <h3>{element.title}</h3>
                                    <p>Precio: <strong>${element.price}</strong></p>
                                    <p>Cantidad: {element.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="cart-actions">
                    <a href="/dashboard" className="add-more">← Seguir Comprando</a>
                    <div className="buttons">
                        <button onClick={resetCart} className="reset-btn">Vaciar Carrito</button>
                        <button onClick={buyCart} className="buy-btn">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CartPage;
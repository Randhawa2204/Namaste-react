import { useSelector } from "react-redux"
import ItemList from "./ItemList"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const findTotal = () => {
        let totalSum = 0
        cartItems.map((el) => { 
            totalSum += el.card.info.price ? el.card.info.price / 100 : el.card.info.defaultPrice / 100
        })
        return totalSum
    }

    return (
        <div className="w-6/12 mx-auto">
            <h1 className="text-center font-semibold text-2xl">My Cart</h1>
            <div className="border-b border-dashed my-4" />
            {
                cartItems.length === 0 ? 
                    <div className="text-center my-12">
                        <h1 className="font-bold text-gray-500 text-2xl">🛒Cart is Empty.</h1>
                    </div>
                :
                <>
                    <ItemList items={cartItems} />
                    <div className="border-b border-dashed my-4" />
                    <div className="flex flex-row-reverse mb-10">
                        <h1 className="font-bold text-xl">Total : ₹{findTotal()}</h1>
                    </div>
                </>
            }
        </div>
    )
}

export default Cart
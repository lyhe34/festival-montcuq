import Agenda from "./Programs/Calendar";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import Cart from './Cart';
import Footer from "./Footer";

export default function TicketPage()
{
    return (
        <>
        <Header/>
        <Agenda/>
        <ShoppingList/>
        <Cart/>
        <Footer/>
        </>
    )
}
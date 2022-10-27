import {Link} from "react-router-dom"

function Home () {
    return (
    <div>
    <h1>Home</h1>
    <button><Link to="/Waiter">Waiter</Link></button>
    <button><Link to="/Kitchen">Kitchen</Link></button>
    </div>
    )

}
export default Home 
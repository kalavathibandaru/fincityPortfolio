
import "./home.css"

const Home = () => {
    return (
        <div className="bg-container">
            <nav className="header">
                <div className="logo">
                    <p>Modelyn Torff</p>
                </div>
                <ul className="list-container">
                    <li className="list-items">About</li>
                    <li className="list-items">Projects</li>
                    <li className="list-items">Contacts</li>
                </ul>
            </nav>
            <div className="card-container">
                <div className="card">
                    <p className="designatio">UI/UX DESIGNER</p>
                    <h1 className="heading">Hello, my name is Madelyn Torff</h1>
                    <p className="paragraph">Short text with details about you, what you do or your professional career. You can add more information on the about page</p>
                    <div>
                        <button className="button yellow-button">Projects</button>
                        <button className="button transperant-button">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
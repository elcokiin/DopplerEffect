import Slide from "../components/Slideshow"
import Nav from "../components/Nav"

function Home() {
    return (
        <div>
            <Slide />
            <footer className="footer">
                <Nav />
            </footer>
        </div>
    )
}

export default Home
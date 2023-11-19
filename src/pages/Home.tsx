import Nav from "../components/Nav"

function Home() {
    return (
        <div className="principal">
            {/* "position: relative; width: 100%; height: 0; padding-top: 56.2225%;padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;border-radius: 8px; will-change: transform;" */}
            <div style={{ position: "relative", width: "80%", height: "0", paddingTop: "20%", paddingBottom: "20%", boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",  marginBottom: "0.9em", overflow: "hidden", borderRadius: "8px", willChange: "transform"}}>
                {/* "position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" */}
                <iframe loading="lazy" style={{position: "absolute", width: "100%", height: "100%", top: "0", left: "0%", border: "none", padding: "0", margin: "0"}}
                    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFzhF6lI1U&#x2F;view?embed" allowFullScreen allow="fullscreen">
                </iframe>
            </div>
            <footer className="footer">
                <Nav />
            </footer>
        </div>
    )
}

export default Home
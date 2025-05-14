import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const App = () => {
    return (
        <Router>
            <div className="md:scale-90 transition-all duration-300">
                <div className="flex flex-col md:flex-row min-h-screen md:rounded-lg overflow-hidden shadow">
                    <Navbar />

                    <main className="flex-1 bg-stone-900 md:p-6 p-3 text-white">
                        {/* <Banner banner="Home" /> */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </main>
                </div>
            </div>

        </Router>
    )
}

export default App
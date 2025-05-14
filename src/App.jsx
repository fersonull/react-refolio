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

                    <main className="flex-1 bg-stone-900 md:p-6 p-3 text-white overflow-hidden">
                        <div className="md:max-h-[93vh] max-h-[85vh] overflow-y-auto p-4 custom-scrollbar">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                            </Routes>
                        </div>
                    </main>
                </div>
            </div>

        </Router>
    )
}

export default App
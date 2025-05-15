import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Maximize2, Minimize2 } from "lucide-react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { useState } from "react"

const App = () => {

    const [isMax, setMax] = useState(true)

    return (
        <Router>
            <div className={`transition-all duration-300 ${isMax ? 'md:scale-90' : 'md:scale-100'}`}>
                <div className="flex flex-col md:flex-row min-h-screen md:rounded-lg overflow-hidden shadow">
                    <Navbar />

                    <main className="flex-1 bg-stone-900 md:p-6 p-3 text-white overflow-hidden">
                        <div className="md:flex items-center justify-end hidden">
                            <button onClick={() => setMax(!isMax)}>
                                {isMax ? <Maximize2 /> : <Minimize2 />}
                            </button>
                        </div>
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
import { motion } from "framer-motion"
import { InstagramIcon, Facebook, Github } from "lucide-react"

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-[88vh] w-full flex flex-col items-start justify-center">
                <h1 className="text-7xl text-stone-200 font-bold font-serif uppercase">
                    <p><span className="text-stone-300 hover:underline">Jasfer Monton</span>.</p>
                    <p className="text-3xl text-primary normal-case font-poppins">Web Developer.</p>
                </h1>
                <div className="flex items-center justify-center gap-3 mt-2">
                    <a href="#" target="blank" className="p-2 rounded-lg text-stone-300 hover:bg-stone-300 hover:text-amber-600 transition-all">
                        <InstagramIcon />
                    </a>
                    <a href="#" target="blank" className="p-2 rounded-lg text-stone-300 hover:bg-stone-300 hover:text-amber-600 transition-all">
                        <Facebook />
                    </a>
                    <a href="#" target="blank" className="p-2 rounded-lg text-stone-300 hover:bg-stone-300 hover:text-amber-600 transition-all">
                        <Github />
                    </a>
                </div>
            </div>
        </motion.div>
    )

}

export default Home
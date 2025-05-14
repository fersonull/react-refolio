import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p>Project page.</p>

        </motion.div>
    )

}

export default Projects
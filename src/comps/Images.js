import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Images = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="images">
            { docs && docs.map(doc => (
                <motion.div className="image-wrap" 
                     key={doc.id}
                     onClick={() => setSelectedImg(doc.url)}
                     whileHover={{ opacity: 1 }}
                     layout
                >
                    <motion.img src={doc.url} alt="image" 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}            
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Images;
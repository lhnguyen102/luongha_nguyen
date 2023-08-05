import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { publications } from "../constants";
import { urllink } from "../assets";

const PublicationCard = ({index, title, authors, year, journal, link }) =>{
    return (
        <motion.div 
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] relative overflow-hidden"
            >
                <div className="mt-5]">
                    <h3 className="text-white font-bold text-[18px]">{title}</h3>
                    <p className="mt-2 text-secondary text=[12px]">{authors}, {journal}, {year}</p>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end items-end m-3 card-img_hover">
                    <div
                    onClick={() => window.open(link, "_blank")}
                    className="violet-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                    <img 
                        src={urllink}
                        alt={urllink}
                        className="w-1/2 h-1/2 object-contain"
                    />
                    </div> 
                </div>
            </Tilt>
        </motion.div>
    )
};
const Publications = () => {
  return (
    <>
        <motion.div 
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={textVariant()}
        >
            <h2 className={styles.sectionHeadText}>Publication</h2>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-7">
            {publications.map((publication, index) => (
                <PublicationCard 
                    key={`publication-${index}`}
                    index={index}
                    {...publication}
                />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Publications, "publication");

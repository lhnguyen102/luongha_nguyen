import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc"; 
import { technologies } from "../constants"; 


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex flex-col items-center justify-center" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <span className="">{technology.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");
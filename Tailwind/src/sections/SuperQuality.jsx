import { shoe8 } from "../assets/images"
import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col gap-5">
      <h2 className="font-palanquin text-4xl capitalize font-bold max-w-lg" ></h2>
 

 <h2 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold ">
     We provide you  <span className="text-coral-red ">Super</span>  <span className="text-coral-red"> Quality</span>  Shoes
   
 </h2>
 <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike Arrivals </p>
 <div className="mt-11">
 <Button label="View Details"/> 
 </div>
 
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <img src={shoe8} alt="shoe " width={570} height={522} className="object-contain" ></img>
      </div>
    </section>
  )
}

export default SuperQuality
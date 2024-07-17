import swagImg from "../assets/Prizes/swags.webp"
import merchandiseImg from "../assets/Prizes/merchandise.png"
import cashPrizeImg from "../assets/Prizes/cashPrize.webp"

const Prizes = () => {
    return (
        <>
    <h1 className="text-black font-bold text-center text-3xl lg:text-5xl mt-20">
    Participate and win
    </h1>

    <div className="lg:flex justify-center lg:gap-16 m-16 lg:mx-32 mb-10">
  <div className="lg:w-1/3 lg:h-1/3 lg:mt-8 bg-transparent border-solid border-2 border-blue-200 rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-purple-700 hover:border-purple-200">
    <img className="h-60 lg:h-72 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110" src={swagImg} alt="Swags" />
    <h2 className="text-black text-center text-3xl font-bold pb-10 group-hover:text-white">Exciting Swags</h2>
  </div>

  <div className="lg:w-1/3 lg:h-3/4 mt-10 lg:mt-0 bg-transparent border-solid border-2 border-blue-200 rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-yellow-500 hover:border-purple-200">
    <img className="h-80 lg:h-80 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110" src={merchandiseImg} alt="Merchandise" />
    <h2 className="text-black text-center text-3xl font-bold pb-10 group-hover:text-white">Interesting Merchandise</h2>
  </div>

  <div className="lg:w-1/3 lg:h-1/3 mt-10 lg:mt-8 bg-transparent border-solid border-2 border-blue-200 rounded-xl flex flex-col items-center justify-center shadow-2xl group hover:bg-purple-700 hover:border-purple-200">
    <img className="h-60 lg:h-72 object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110" src={cashPrizeImg} alt="Cash Prize" />
    <h2 className="text-black text-center text-3xl font-bold pb-10 pt-5 lg:pt-0 group-hover:text-white">Cash Prizes</h2>
  </div>
</div>

        </>
    )
}

export default Prizes;
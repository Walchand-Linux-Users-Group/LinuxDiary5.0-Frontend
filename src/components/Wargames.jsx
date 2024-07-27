// import wargameImg from "../assets/wargames/wargames.png"
import wargameImg1 from "../assets/wargames/Wargame1.png";
import wargameImg2 from "../assets/wargames/wargame2.webp";

import cashPrizeImg from "../assets/Prizes/cashPrize.webp";

const Wargames = () => {
    return (
        <div id="more" className="pt-10">
            <h1 className="text-white font-bold text-center text-3xl lg:text-5xl lg:mx-10 mb-4">
                Wargames
            </h1>

            <div class="flex items-center justify-center h-full lg:h-full">
                <div class="lg:w-6/12 w-10/12 h-96 lg:h-96 lg:mt-8 items-center justify-center bg-transparent border-solid border-2 border-blue-200 rounded-xl relative overflow-hidden shadow-2xl group hover:shadow-2xl hover:border-blue-500 hover:bg-gradient-to-br from-blue-500 to-blue-300 transition-all duration-500 transform perspective-2500">
                    <div class="absolute inset-0 flex items-center justify-center flex-col bg-transparent transition-all duration-500 transform rotate-x-25 group-hover:rotate-x-0 perspective-900">
                        <img
                            class="h-60 lg:h-72 object-cover rounded-xl transition-opacity duration-500 opacity-100 group-hover:opacity-15"
                            src={wargameImg2}
                            alt="Cash Prize"
                        />
                    </div>

                    <div class="absolute inset-0 flex items-center justify-center flex-col bg-transparent transition-all duration-500 transform rotate-x-25 group-hover:rotate-x-0 perspective-900">
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100"></div>

                        <img
                            class="h-72 lg:h-80 object-cover  rounded-xl transition-all duration-500 transform translate-y-10 opacity-0 group-hover:opacity-100  group-hover:z-50 group-hover:translate-y-[-0%] "
                            src={wargameImg1}
                            alt="Cash Prize"
                        />

                        <h2 class="text-white mt-10  mb-10 hover:mt-0 text-center text-3xl font-bold pb-0 group-hover:hidden transition-all duration-500 transform translate-y-0  group-hover:translate-y-[-30%] group-hover:mb-[-10px]   group-hover:text-4xl group-hover:text-white">
                            Wargames
                        </h2>

                        <h5 class="text-white  opacity-0 hover:mt-0 text-center text-sm lg:text-2xl font-bold   group-hover:opacity-100 transition-transform duration-500 transform translate-y-0  group-hover:translate-y-[-30%] group-hover:mb-[-10px]  group-hover:text-blue">
                        Play thrilling Wargames at the end to test the knowledge and win 
                        </h5>
                    </div>
                </div>
            </div>

            {/* <div class="flex items-center justify-center min-h-screen bg-gray-900">
  <div class="relative w-2/3 h-96 lg:w-1/3 lg:h-72 bg-gray-800 border-2 border-blue-200 rounded-xl overflow-hidden shadow-2xl group hover:bg-purple-700 hover:border-purple-200 transform transition-transform duration-500">
    <img class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" alt="Cover Image"/>
    <div class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-800 to-gray-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    <img class="absolute bottom-0 left-0 w-full transition-transform duration-500 group-hover:translate-y-0 group-hover:-translate-y-20" src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" alt="Title Image"/>
    <img class="absolute bottom-0 right-0 w-1/3 transition-transform duration-500 group-hover:translate-y-0 group-hover:-translate-y-20" src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" alt="Character Image"/>
    <h2 class="absolute bottom-4 left-4 text-white text-2xl font-bold transition-transform duration-500 group-hover:text-opacity-0 group-hover:-translate-y-10">The Dark Rider</h2>
  </div>
</div> */}

            {/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card relative w-card-width h-card-height flex justify-center items-end p-9 perspective-2500 mx-12">
    <div class="wrapper absolute w-full z--1 transition-all duration-500">
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" class="cover-image w-full h-full object-cover" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" class="title w-full transition-transform duration-500" />
    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" class="character absolute z--1 transition-all duration-500" />
  </div>
</a> */}
        </div>
    );
};

export default Wargames;

import NetworkImg from "../assets/roadmap/network.png";
import FilesImage from "../assets/roadmap/files.png";
import PenguinImg from "../assets/roadmap/penguin_gift.webp";
import OpenSourceImg from "../assets/roadmap/Open_Souce.png";

const Roadmap = () => (
    <div id="sessions" className="py-12">
        <h1 className="text-white font-bold text-center text-4xl lg:text-5xl m-10">
            Session Roadmap
        </h1>

        <div className="grid md:grid-cols-2  gap-24  w-fit mx-auto">
            {/* Card1 */}
            <div className="lg:flex">
                <div className="flex-1 max-w-sm bg-cardBlue rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex items-center justify-center">
                    {/* image */}
                    <img
                        className="h-48 lg:h-65 md:h-60 object-cover px-5"
                        src={OpenSourceImg}
                        alt="Open Source 101"
                    ></img>
                </div>
                <div className="flex-2 max-w-sm bg-gray-400 rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex flex-col justify-center">
                    <div className="text-2xl text-center p-5 font-bold lg:pb-2">
                        Session 1: Open Source 101
                    </div>
                    <div className="text-center px-10 pt-0 pb-3">
                        <p>
                            Worried about being an absolute beginner in Linux?
                            Don't fret! We've got you covered with a
                            beginner-friendly session that serves as the perfect
                            introduction to open-source and Linux. You'll gain a
                            solid foundation and discover real-life applications
                            of these technologies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card2 */}
            <div className="lg:flex">
                <div className="flex-1 max-w-sm bg-cardBlue rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex items-center justify-center">
                    {/* image */}
                    <img
                        className="h-48 lg:h-65 md:h-60 object-cover px-5"
                        src={PenguinImg}
                        alt="Echo Linux"
                    ></img>
                </div>
                <div className="flex-2 max-w-sm bg-gray-400 rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex flex-col justify-center">
                    <div className="text-2xl text-center p-5 font-bold lg:pb-2">
                        Session 2: Echo Linux
                    </div>
                    <div className="text-center px-10 pt-0 pb-3">
                        <p>
                            With a strong foundation in place, we will dive into
                            the world of open-source and Linux, empowering you
                            with comprehensive knowledge of crucial commands,
                            the booting process, text editors, process
                            management, and the seamless integration of
                            pipelining techniques.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="lg:flex">
                <div className="flex-1 max-w-sm bg-cardBlue rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex items-center justify-center">
                    {/* image */}
                    <img
                        className="h-48 lg:h-65 md:h-60 object-cover px-5"
                        src={FilesImage}
                        alt="The File Maze"
                    ></img>
                </div>
                <div className="flex-2 max-w-sm bg-gray-400 rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex flex-col justify-center">
                    <div className="text-2xl text-center p-5 font-bold lg:pb-2">
                        Session 3: The File Maze
                    </div>
                    <div className="text-center px-10 pt-0 pb-3">
                        <p>
                            Guess what? Everything in Linux is a file! Here
                            we'll explore the file system in Linux. In this
                            enlightening session, we will familiarise ourselves
                            with file systems, groups, users, and the diverse
                            range of commands vital for their successful
                            management.
                        </p>
                    </div>
                </div>
            </div>
            {/* Card4 */}
            <div className="lg:flex">
                <div className="flex-1 max-w-sm bg-cardBlue rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex items-center justify-center">
                    {/* image */}
                    <img
                        className="h-48 lg:h-65 md:h-60 object-cover px-5"
                        src={NetworkImg}
                        alt="NetVerse"
                    ></img>
                </div>
                <div className="flex-2 max-w-sm bg-gray-400 rounded-2xl overflow-hidden md:max-w-lg lg:max-w-xs flex flex-col justify-center">
                    <div className="text-2xl text-center p-5 font-bold lg:pb-2">
                        Session 4: NetVerse
                    </div>
                    <div className="text-center px-10 pt-0 pb-3">
                        <p>
                            Seeking knowledge and excitement? Join our
                            captivating journey through the intricate worlds of
                            GUI and CLI, unveiling the remarkable advantages of
                            CLI. Together, we'll explore advanced commands,
                            essential networking techniques, and many more.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default Roadmap;

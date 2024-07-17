import React, { useState } from "react";
import RegistrationImg from "../assets/registration.png";
import Selector from "./Selector";

const Register = () => {
    const [year, setYear] = useState("");
    return (
        <div className="min-h-screen flex items-center w-full p-8 lg:px-24 lg:py-12 [background:linear-gradient(138.62deg,_#62cff4,_#2c67f2_98.7%)] ">
            <div className="w-full h-full bg-black/40 lg:flex space-x-8 rounded-lg">
                <div className="w-full p-6 flex flex-col items-center">
                    <h1 className="text-5xl font-[1000] m-8 w-11/12">
                        Register
                    </h1>
                    <div className="h-full w-full flex items-center justify-center">
                        <img
                            src={RegistrationImg}
                            className="w-11/12 mx-auto"
                        ></img>
                    </div>
                </div>
                <div className="w-full flex flex-col ">
                    <form className="w-full p-6">
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-3 px-3 text-white leading-tight outline-none border-none bg-black/50"
                                id="name"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-3 px-3 text-white leading-tight outline-none border-none bg-black/50"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-3 px-3 text-white leading-tight outline-none border-none bg-black/50"
                                id="phone"
                                type="text"
                                placeholder="Phone"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="collegeName"
                            >
                                College Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-3 px-3 text-white leading-tight outline-none border-none bg-black/50"
                                id="collegeName"
                                type="text"
                                placeholder="College"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="yearOfStudy"
                            >
                                Year of study
                            </label>
                            <Selector />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="collegeName"
                            >
                                College Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded-md w-full py-3 px-3 text-white leading-tight outline-none border-none bg-black/50"
                                id="collegeName"
                                type="text"
                                placeholder="College"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

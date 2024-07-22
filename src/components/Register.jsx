import React, { useEffect, useState } from "react";
import MainImg from "../assets/main/chillingPengs.png";
import SnowfallEffect from "./SnowfallEffect";
import RegisterTux from "../assets/registerTux.png";
import { BiCross, BiUpload } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
const Input = ({
    label,
    type,
    placeholder,
    onChange,
    required,
    minLength,
    maxLength,
    id,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative bg-white rounded-xl p-4 text-black shadow-md">
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setIsFocused(false);
                    }
                }}
                id={id}
                className=" bg-transparent outline-none border-b pt-4 py-1 text-base border-black w-full"
                autoComplete="off"
            ></input>
            <label
                htmlFor={id}
                className={`absolute transition-all ${
                    isFocused
                        ? "text-black text-sm top-2 left-4"
                        : "text-gray-500 text-base top-7 left-4"
                }`}
            >
                {label}
            </label>
        </div>
    );
};

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [year, setYear] = useState("");
    const [branch, setBranch] = useState("");
    const [transaction, setTransaction] = useState("");
    const [referral, setReferral] = useState("");
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const validatePhone = (phone) => {
        const pattern = /^[5-9]\d{9}$/;
        return pattern.test(phone);
    };

    const isValidInput = () => {
        if(name.length < 3 || name.length > 50){
            alert("Name should be between 3 and 50 characters");
            return false;
        }
        if(email.length === 0){
            alert("Email is required");
            return false;
        }
        if(!validatePhone(phone)){
            alert("Invalid phone number");
            return false;
        }
        if(college.length === 0){
            alert("College name is required");
            return false;
        }
        if(year.length === 0){
            alert("Year of study is required");
            return false;
        }
        if(branch.length === 0){
            alert("Branch is required");
            return false;
        }
        if(transaction.length === 0){
            alert("Transaction ID is required");
            return false;
        }
        return true;
    }
    const register = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if(!isValidInput()){
            setIsLoading(false);
            return
        }
        if(file === null){
            alert("Please upload payment screenshot");
            setIsLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("transactionId", transaction);
        formData.append("collegeName", college);
        formData.append("yearOfStudy", year);
        formData.append("branch", branch);
        formData.append("isDualBooted", true);
        formData.append("referralCode", referral);
        formData.append("paymentImg", file);
        try{
            const res = await fetch(
                "https://linuxdiary5-0-backend-cjli.onrender.com/user/registration",
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await res.json();
            if (data.success) {
                alert("Registered Successfully");
            } else {
                alert("Failed to register");
            }
        }catch(err){
            alert("Failed to register");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        document.title = "Register | Linux Diary";
    }, []);
    return (
        <div className="min-h-screen p-6 md:p-14 relative flex items-center justify-center">
            <SnowfallEffect />
            <img
                src={MainImg}
                className="w-[80%] z-5 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
            ></img>
            <div className="bg-white/30  shadow-md rounded-lg md:flex md:space-x-4 justify-center items-center z-50 w-full">
                <div className="w-full p-6 h-full">
                    <h1 className="text-4xl font-[900]">Register!</h1>
                    <p className="my-2 mb-4 text-sm sm:text-base">
                        Fill the details below to secure your seat
                    </p>
                    <form className="flex flex-col space-y-6 md:p-4">
                        <Input
                            label="Name"
                            type="text"
                            required={true}
                            minLength={3}
                            maxLength={50}
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="Email"
                            type="email"
                            required={true}
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label={"Phone No."}
                            type={"number"}
                            required={true}
                            id={"phone"}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            label={"College Name"}
                            type={"text"}
                            required={true}
                            id={"college"}
                            onChange={(e) => setCollege(e.target.value)}
                        />
                        <Input
                            label={"Year of Study"}
                            type={"text"}
                            required={true}
                            id={"year"}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <Input
                            label={"Branch"}
                            type={"text"}
                            required={true}
                            id={"branch"}
                            onChange={(e) => setBranch(e.target.value)}
                        />
                        <Input
                            label={"Transaction ID"}
                            type={"text"}
                            required={true}
                            id={"transaction"}
                            onChange={(e) => setTransaction(e.target.value)}
                        />
                        <Input
                            label={"Referral Code"}
                            type={"text"}
                            id={"referral"}
                            onChange={(e) => setReferral(e.target.value)}
                        />

                        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-end sm:space-x-4">
                            <button
                                className=" text-white rounded-lg w-full sm:w-fit px-12 bg-cyan-500 py-3 text-xl font-semibold shadow-xl cursor-pointer hover:bg-cyan-600 hover:scale-105 transition-all min-w-48"
                                type="submit"
                                onClick={register}
                            >
                                {
                                    isLoading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-6 h-6 border-2 border-t-2 border-white rounded-full animate-spin"></div>
                                        </div>
                                    ) : (
                                        "Register"
                                    )
                                }
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full flex flex-col space-y-2 justify-center items-center p-4 md:p-24 mb:p-48">
                    <img src={RegisterTux} className="lg:w-[80%] w-full "></img>
                    <div className="bg-white w-full cursor-pointer shadow-lg rounded-xl p-4 flex flex-col space-y-2 items-center justify-center ">
                        {!file ? (
                            <>
                                <BiUpload
                                    className="text-4xl font-bold text-black"
                                    onClick={() =>
                                        document
                                            .getElementById("paymentImgUpload")
                                            .click()
                                    }
                                />
                                <p className="text-sm text-black">
                                    Upload Payment Screenshot
                                </p>{" "}
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    id="paymentImgUpload"
                                ></input>
                            </>
                        ) : (
                            <>
                                <div className="flex text-black justify-between w-full p-2 text-lg">
                                    <p>{file.name}</p>
                                    <RxCrossCircled
                                        className="text-black text-3xl ml-2"
                                        onClick={() => setFile(null)}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

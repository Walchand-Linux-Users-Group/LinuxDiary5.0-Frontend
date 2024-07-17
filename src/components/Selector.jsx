import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Select an option");
    const [searchTerm, setSearchTerm] = useState("");

    const items = ["Option 1", "Option 2", "Option 3", "Option 4"];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="relative w-64">
            <div
                className="flex items-center justify-between p-2 bg-black/50 text-white rounded cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedItem}</span>
                <BiChevronDown />
            </div>
            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-black/50 rounded shadow-lg">
                    <div className="p-2">
                        <div className="flex items-center bg-white/10 rounded p-2 mb-2">
                            <AiOutlineSearch className="text-white mr-2" />
                            <input
                                type="text"
                                className="w-full bg-transparent border-none text-white focus:outline-none"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className="p-2 cursor-pointer hover:bg-white/20 text-white"
                                onClick={() => handleItemClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Selector;

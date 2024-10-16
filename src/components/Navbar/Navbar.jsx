import "./Navbar.css";
import { useState } from "react";
import down from "../../assets/down.svg";
import option from "../../assets/Display.svg";
export default function Navbar({ config, setConfig }) {
    const [isOpen, setIsOpen] = useState(false);
    const onSelect = (label, val) => {
        setConfig({ ...config, [label]: val })
    }
    return (
        <div className="navbar">
            <div>
                <button type="button" className="button" onClick={() => setIsOpen(!isOpen)}>
                    <img className="icon" src={option} alt="" />

                    Display
                    <img className="icon" src={down} alt="" />
                </button>
                <div className={`modal-body ${isOpen && "visible"}`}>
                    <div className={"modal-option"}>
                        <p>Grouping</p>
                        <select value={config.grouping} onInput={(e) => onSelect("grouping", e.target.value)}>
                            <option value={"status"}>Status</option>
                            <option value={"user"}>User</option>
                            <option value={"priority"}>Priority</option>
                        </select>
                    </div>
                    <div className="modal-option ">
                        <p>Ordering</p>
                        <select value={config.ordering} onInput={(e) => onSelect("ordering", e.target.value)}>
                            <option value={"priority"}>Priority</option>
                            <option value={"title"}>Title</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )

}
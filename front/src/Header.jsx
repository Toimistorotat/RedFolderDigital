import "./tailwind.css"
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate();
    return (
        <>
            <div className="flex justify-center sticky top-0">
                <div className="flex justify-between items-center px-6 py-4 mt-3 max-w-400 z-50 bg-black/90 rounded-3xl">
                    <div className="backdrop-blur">
                        <h1
                            className="text-4xl font-bold px-4 py-2 border-4 rounded-2xl text-[rgb(244,68,55)] border-[rgb(244,68,55)] hover:cursor-pointer"
                            onClick={() => navigate("/RedFolderDigital/")}>
                            RedFolder Digital
                        </h1>
                    </div>
                    <div className="w-90"></div>
                    <div className="flex justify-end">
                        <nav>
                            <div>
                                <ul className="flex p-1 text-lg border border-[rgb(244,68,55)] rounded-2xl">
                                    <li
                                        className="text-[rgb(244,68,55)] text-2xl cursor-pointer transition"
                                        onClick={() => navigate("/RedFolderDigital/Websites-for-sale")}
                                    >
                                        Services
                                    </li>
                                    <li className="text-[rgb(244,68,55)] mr-3 ml-3 text-xl">|</li>
                                    <li
                                        className="text-[rgb(244,68,55)] text-2xl cursor-not-allowed transition"
                                    //onClick={() => navigate("/RedFolderDigital/Contact")}
                                    >
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header
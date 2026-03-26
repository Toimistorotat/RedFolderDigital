import "./tailwind.css"
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between items-center px-6 py-4 sticky top-0 z-50">
                <div className="backdrop-blur">
                    <h1
                        className="text-4xl font-bold px-4 py-2 border rounded-2xl text-[rgb(244,68,55)] border-[rgb(244,68,55)] hover:cursor-pointer"
                        onClick={() => navigate("/")}>
                        RedFolder Digital
                    </h1>
                </div>
                <div className="flex justify-end">
                    <nav>
                        <div>
                            <ul className="flex p-1 text-lg border border-black rounded-2xl">
                                <li
                                    className="hover:text-[rgb(244,68,55)] text-2xl cursor-pointer transition"
                                    onClick={() => navigate("/Websites-for-sale")}
                                >
                                    Services
                                </li>
                                <li className="mr-3 ml-3 text-xl">|</li>
                                <li
                                    className="hover:text-[rgb(244,68,55)] text-2xl cursor-not-allowed transition"
                                    //onClick={() => navigate("/Contact")}
                                >
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="w-90"></div>
                </div>
            </div>
        </>
    )
}
export default Header
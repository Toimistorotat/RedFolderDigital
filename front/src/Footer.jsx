import "./tailwind.css"
import { useNavigate } from "react-router";

function Footer() {
    let navigate = useNavigate();
    return (
        <footer className="mt-7">
            <div className="flex flex-col items-center">
                <div className="border-3 rounded-3xl border-[rgb(244,68,55)] p-2">
                    <p>RedFolderDigital Is A NYT Corporation</p>

                    <div className="grid grid-cols-2 gap-8 mt-3 text-sm">

                        <div>
                            <p className="font-semibold mb-2">Company</p>
                            <ul className="space-y-1">
                                <li className="hover:text-[rgb(244,68,55)] transition cursor-pointer">About</li>
                                <li className="hover:text-[rgb(244,68,55)] transition cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">Legal</p>
                            <ul className="space-y-1">
                                <li onClick={() => navigate("/RedFolderDigital/Legal#Privacy-Policy")} className="hover:text-[rgb(244,68,55)] transition cursor-pointer">Privacy Policy</li>
                                <li onClick={() => navigate("/RedFolderDigital/Legal#Terms-of-Service")} className="hover:text-[rgb(244,68,55)] transition cursor-pointer">Terms of Service</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
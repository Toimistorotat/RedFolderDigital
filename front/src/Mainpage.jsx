import "./tailwind.css"
import Header from "./Header"
import Footer from "./Footer"
import { useNavigate } from "react-router";
function Home() {
    let navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1">
                    <div className="flex justify-center flex-col items-center content-center">
                        <p>TEST headline</p>
                        <h1>TEST desc</h1>
                    </div>

                    <div className="flex flex-col items-center mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-6">
                            <div
                                className="md:col-span-1 md:row-span-2 rounded-xl bg-white border-2 border-gray-300 p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.28)] hover:-translate-x-2.5 hover:-translate-y-1.5 hover:scale-[1.02] transition duration-200 ease-out"
                                onClick={() => navigate("/RedFolderDigital/Websites-for-sale")}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Website</h3>
                                <p className="text-gray-600">
                                    Modern, mobile-friendly websites built for your business.
                                </p>
                            </div>

                            <div
                                className="md:col-span-2 rounded-xl bg-white border-2 border-gray-300 p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.28)] hover:-translate-x-2.5 hover:-translate-y-0.5 hover:scale-[1.02] transition duration-200 ease-out"
                                onClick={() => navigate("/RedFolderDigital/Hosting")}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hosting</h3>
                                <p className="text-gray-600">
                                    Reliable VPS hosting for your website.
                                </p>
                            </div>

                            <div
                                className="md:col-span-2 rounded-xl bg-white border-2 border-gray-300 p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.25)] hover:shadow-[10px_10px_0px_rgba(0,0,0,0.28)] hover:-translate-x-2.5 hover:-translate-y-0.5 hover:scale-[1.02] transition duration-200 ease-out"
                                onClick={() => navigate("/RedFolderDigital/Websites-for-sale#updates")}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Updates</h3>
                                <p className="text-gray-600">
                                    Paid changes and maintenance when needed.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Home
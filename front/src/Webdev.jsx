import { useLocation } from "react-router";
import { useEffect } from "react";

import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function Webdev() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace("#", ""));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <Header />
            <div className="flex flex-col items-center mt-16 px-6">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Website Packages
                </h1>

                <p className="text-gray-600 text-center max-w-2xl mb-10">
                    Websites are built based on your needs. More customization means more time and cost.
                </p>

                <div className="flex justify-center mt-16 px-6">
                    <div className="w-full max-w-6xl">

                        <h1 className="text-3xl font-bold text-center mb-10">
                            Compare Packages
                        </h1>

                        <table className="w-full border-separate border-spacing-y-4 text-center">

                            {/* Header */}
                            <thead>
                                <tr className="text-lg rounded-l-xl rounded-r-xl">
                                    <td className="bg-gray-900 text-white p-6 "></td>

                                    <th className="bg-gray-900 text-white p-6">
                                        <div className="text-xl font-semibold">Starter</div>
                                        <div className="text-sm text-gray-300 mt-1">Basic websites</div>
                                    </th>

                                    <th className="bg-gray-900 text-white p-6">
                                        <div className="text-xl font-semibold text-red-400">Standard</div>
                                        <div className="text-sm text-gray-300 mt-1">Most common</div>
                                    </th>

                                    <th className="bg-gray-900 text-white p-6">
                                        <div className="text-xl font-semibold">Custom</div>
                                        <div className="text-sm text-gray-300 mt-1">Full flexibility</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-700">

                                {/* Pages */}
                                <tr className="bg-gray-100 shadow-sm transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6 font-semibold">Pages</td>

                                    <td className="p-6">
                                        1–3
                                        <div className="text-sm text-gray-500 mt-1">Simple structure</div>
                                    </td>

                                    <td className="p-6">
                                        3–6
                                        <div className="text-sm text-gray-500 mt-1">More content & sections</div>
                                    </td>

                                    <td className="p-6">
                                        Unlimited
                                        <div className="text-sm text-gray-500 mt-1">Fully scalable</div>
                                    </td>
                                </tr>

                                {/* Mobile */}
                                <tr className="bg-gray-100 shadow-sm transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6 font-semibold">Mobile optimized</td>
                                    <td className="p-6">✔</td>
                                    <td className="p-6">✔</td>
                                    <td className="p-6">✔</td>
                                </tr>

                                {/* Contact */}
                                <tr className="bg-gray-100 shadow-sm transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6 font-semibold">Contact form</td>
                                    <td className="p-6">✔</td>
                                    <td className="p-6">✔</td>
                                    <td className="p-6">✔</td>
                                </tr>

                                {/* Customization */}
                                <tr className="bg-gray-100 shadow-sm transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6 font-semibold">Customization</td>

                                    <td className="p-6">
                                        Basic
                                        <div className="text-sm text-gray-500 mt-1">Simple styling</div>
                                    </td>

                                    <td className="p-6">
                                        Moderate
                                        <div className="text-sm text-gray-500 mt-1">More flexibility</div>
                                    </td>

                                    <td className="p-6">
                                        Full
                                        <div className="text-sm text-gray-500 mt-1">Custom features</div>
                                    </td>
                                </tr>

                                {/* Support */}
                                <tr className="bg-gray-100 shadow-sm transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6 font-semibold">Support</td>

                                    <td className="p-6">
                                        Essential
                                        <div className="text-sm text-gray-500 mt-1">Basic help</div>
                                    </td>

                                    <td className="p-6">
                                        Standard
                                        <div className="text-sm text-gray-500 mt-1">Faster response</div>
                                    </td>

                                    <td className="p-6">
                                        Priority
                                        <div className="text-sm text-gray-500 mt-1">Top priority</div>
                                    </td>
                                </tr>

                                {/* Price */}
                                <tr className="bg-gray-100 shadow-md text-lg font-semibold transition duration-150 hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]">
                                    <td className="p-6">Price</td>

                                    <td className="p-6">150–300€</td>

                                    <td className="p-6 text-red-500">300–600€
                                        <div className="text-sm text-gray-500 mt-1">Best value</div>
                                    </td>

                                    <td className="p-6">Custom</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Note */}
                <p className="text-gray-500 text-sm mt-8 text-center max-w-xl">
                    Additional updates and changes are billed separately.
                </p>

                {/* Hosting */}
                <div id="hosting" className="mt-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Hosting</h2>

                    <p className="text-gray-600 text-xl">
                        Hosting is simple and fast. Whether you already have a website or request one through us, your site can be set up and running quickly.
                    </p>

                    <p className="text-gray-600 mt-3 text-xl">
                        Once everything is ready, your website is typically online within minutes.
                    </p>

                    <p className="text-gray-500 mt-3">
                        Setup is handled manually, so requests made outside working hours may be completed the next day.
                    </p>
                    <div className="mt-6 flex flex-col items-center gap-3">

                        {/* Price */}
                        <p className="text-2xl font-bold text-gray-900">
                            5–15€/month
                        </p>

                        {/* Small note */}
                        <p className="text-sm text-gray-500">
                            Billed monthly • setup included
                        </p>

                        {/* Button */}
                        <button className="
                            mt-2
                            rounded-xl
                            bg-red-500
                            px-6 py-3
                            text-white
                            font-medium
                            cursor-pointer
                        ">
                            Request Hosting
                        </button>

                    </div>
                    <div className="mt-100"></div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Webdev
import ReactMarkdown from "react-markdown"
import { useEffect } from "react";
import { useLocation } from "react-router";
import ppContent from "./PP.md?raw"
import termsContent from "./Terms.md?raw"
import "./tailwind.css"

import Header from "./Header.jsx"

function Legal() {
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
            <div className="min-h-screen px-6 py-12">
                <div className="mx-auto max-w-3xl space-y-12">

                    <div id="Privacy-Policy" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                        {/*<h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>*/}

                        <div className="prose prose-gray max-w-none prose-a:text-red-500">
                            <ReactMarkdown>{ppContent}</ReactMarkdown>
                        </div>
                    </div>

                    <div id="Terms-of-Service" className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                        {/*<h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>*/}

                        <div className="prose prose-gray max-w-none prose-a:text-red-500">
                            <ReactMarkdown>{termsContent}</ReactMarkdown>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Legal
import "./tailwind.css"
function Header() {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-5xl ml-5 mt-5 text-[rgb(244,68,55)] font-bold">RedFolder Ditigal</h1>
                </div>
                <div>
                    <nav className="mr-5 mt-5">
                        <div className="grid grid-cols-2 gap-4">
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                            </ul>
                            <ul>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header
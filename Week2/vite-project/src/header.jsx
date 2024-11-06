function Header() {
    return (
        <header className="flex items-center w-full bg-gray-700 p-6">
            <h1 className="text-white">My website</h1>
            <nav className="ml-auto">
                <ul className="flex space-x-4">
                    <li><a href="google.com" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Service</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

import { Link, Route, Routes } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600">
                        <Link to="#">BrandName</Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                        <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
                            Log In
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                            Sign Up
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            <div className='h-full bg-blue-200'>
                <Routes path='/*'>
                    <Route path='/' element={<h2>Home Page</h2>} />
                    <Route path="/about" element={<h2>About Page</h2>} />
                    <Route path="/products" element={<h2>Products Page</h2>} />
                    <Route path="/contact" element={<h2>Contact page</h2>} />
                    <Route path="/contact" element={<h2>Contact page</h2>} />
                    <Route path="/*" element={<h2>Page Not Found</h2>} />
                </Routes>
            </div>
        </>
    );
}
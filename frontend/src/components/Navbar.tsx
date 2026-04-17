import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyLibrary</div>
      <div className="flex gap-8 items-center font-medium">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Feed</Link>
        <Link to="/library" className="text-gray-600 hover:text-blue-600 transition-colors">My Library</Link>
        <Link to="/add" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95">
          Add New
        </Link>
      </div>
    </nav>
  );
};

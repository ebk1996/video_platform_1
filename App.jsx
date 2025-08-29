import React, { useState } from 'react';
import { Search, User, Menu, Home, TrendingUp, Heart, Clock, Settings, Upload } from 'lucide-react';

const VideoCard = ({ title, views, duration }) => (
  <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-4 rounded-lg">
    <div className="aspect-video bg-gray-200 rounded mb-2 flex items-center justify-center">
      <span className="text-gray-500">Video Thumbnail</span>
    </div>
    <h3 className="font-medium text-sm truncate">{title}</h3>
    <div className="text-xs text-gray-600 mt-1">
      <span>{views} views</span>
      <span className="ml-2">{duration}</span>
    </div>
  </div>
);

const Sidebar = ({ isOpen }) => (
  <div className={`fixed left-0 top-16 h-full bg-white border-r transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-10`}>
    <div className="p-4 space-y-2">
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
        <Home size={20} />
        <span>Home</span>
      </div>
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
        <TrendingUp size={20} />
        <span>Trending</span>
      </div>
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
        <Heart size={20} />
        <span>Favorites</span>
      </div>
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
        <Clock size={20} />
        <span>Watch Later</span>
      </div>
      <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
        <Settings size={20} />
        <span>Settings</span>
      </div>
    </div>
    
    <div className="border-t p-4">
      <h3 className="font-medium text-sm mb-2">Categories</h3>
      <div className="space-y-1 text-sm">
        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Popular</div>
        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Recent</div>
        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Featured</div>
        <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">Premium</div>
      </div>
    </div>
  </div>
);

const Header = ({ toggleSidebar, searchTerm, setSearchTerm }) => (
  <header className="fixed top-0 left-0 right-0 bg-white border-b z-20 px-4 py-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="p-1">
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold text-orange-600">VideoHub</h1>
      </div>
      
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-full pr-10"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded">
          <Upload size={16} />
          <span>Upload</span>
        </button>
        <button className="p-2 border rounded-full">
          <User size={20} />
        </button>
      </div>
    </div>
  </header>
);

const FilterBar = () => (
  <div className="bg-gray-50 p-4 border-b">
    <div className="flex space-x-2 overflow-x-auto">
      {['All', 'Popular', 'Recent', 'HD', 'Long', 'Short', 'Featured'].map((filter) => (
        <button
          key={filter}
          className="px-4 py-2 bg-white border rounded-full whitespace-nowrap hover:bg-gray-100"
        >
          {filter}
        </button>
      ))}
    </div>
  </div>
);

const VideoGrid = () => {
  const videos = [
    { title: "Sample Video Title 1", views: "1.2M", duration: "10:23" },
    { title: "Sample Video Title 2", views: "856K", duration: "15:47" },
    { title: "Sample Video Title 3", views: "2.1M", duration: "8:12" },
    { title: "Sample Video Title 4", views: "634K", duration: "12:35" },
    { title: "Sample Video Title 5", views: "1.8M", duration: "9:18" },
    { title: "Sample Video Title 6", views: "923K", duration: "14:22" },
    { title: "Sample Video Title 7", views: "1.5M", duration: "11:09" },
    { title: "Sample Video Title 8", views: "742K", duration: "13:44" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

const TechStackInfo = () => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 m-4">
    <h3 className="font-bold text-blue-800 mb-2">Proposed Tech Stack</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 className="font-medium text-blue-700">Frontend</h4>
        <ul className="text-blue-600 space-y-1">
          <li>• React 18 + Vite</li>
          <li>• TailwindCSS</li>
          <li>• Apollo Client (GraphQL)</li>
          <li>• React Router</li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-blue-700">Backend</h4>
        <ul className="text-blue-600 space-y-1">
          <li>• Node.js + Express</li>
          <li>• Apollo Server</li>
          <li>• GraphQL</li>
          <li>• JWT Authentication</li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium text-blue-700">Database & Storage</h4>
        <ul className="text-blue-600 space-y-1">
          <li>• MongoDB + Mongoose</li>
          <li>• AWS S3 (Video storage)</li>
          <li>• Redis (Caching)</li>
          <li>• CloudFront (CDN)</li>
        </ul>
      </div>
    </div>
  </div>
);

const WireframeApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        toggleSidebar={toggleSidebar} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <Sidebar isOpen={sidebarOpen} />
      
      <main className={`pt-16 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <FilterBar />
        <TechStackInfo />
        <VideoGrid />
      </main>
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default WireframeApp;

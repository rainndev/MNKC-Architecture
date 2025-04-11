const Navigation = () => {
  return (
    <div className="fixed top-5 left-0 w-full flex justify-center ">
      <nav className="w-full flex justify-between items-center max-w-7xl">
        {/* logo */}
        <div>
          <img src="/images/icon.svg" alt="logo" />
        </div>
        {/* links */}
        <div className="text-white ">
          <ul className="flex space-x-5 font-sans">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Featured</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

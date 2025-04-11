const Navigation = () => {
  return (
    <div className="fixed top-5 left-0 z-10 flex w-full justify-center">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        {/* logo */}
        <div>
          <img src="/images/icon.svg" alt="logo" />
        </div>
        {/* links */}
        <div className="text-white">
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

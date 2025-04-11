const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex w-full justify-center border-b border-b-[#504F4F] bg-[#1E1E1E]/40 p-5 backdrop-blur-md">
      <nav className="flex w-full max-w-7xl items-center justify-between">
        {/* logo */}
        <div>
          <img src="/images/icon-fixed.svg" alt="logo" />
        </div>
        {/* links */}
        <div className="text-[#D9D9D9]">
          <ul className="flex space-x-10 font-sans">
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

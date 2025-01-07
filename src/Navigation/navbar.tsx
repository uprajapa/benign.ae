
export default function Navbar() {
  return (
    <div className="navbar w-auto mx-auto">
      <div className="logo w-32">
        <img src="./" alt="" className="md:shrink-0"></img>
      </div>
      <div className="menu-bar md:flex-row">
        <ul className="">
          <li className="">Home page</li>
          <li>Contact us</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  )
}
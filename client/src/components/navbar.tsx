import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link></li>
          
          <li>
            <Link href="/create-pokemon">Add new Pokemon</Link></li>
          <li>
          <Link href="/fire">Fire Type</Link>
          </li>
          <li><Link href="/grass">Grass Type</Link></li>
          <li><Link href="/water">Water Type</Link></li>
        </ul>
      </div>
    </div>
  )
}
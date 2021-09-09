import { NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => (
  <header className="fixed z-10 top-0 left-0 w-full bg-white shadow-md hover:shadow-lg transition duration-500">
    <nav className="container mx-auto flex items-center justify-between p-6 h-20">
      <h2 className="text-xl lg:text-3xl text-blue-600 font-bold">
        Hacker News
      </h2>
      <ul>
        <li className="block space-x-5 text-xl">
          <NavLink
            to={`${process.env.PUBLIC_URL}/`}
            exact
            activeClassName="text-blue-500"
            className="hover:text-blue-500"
          >
            Главная
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

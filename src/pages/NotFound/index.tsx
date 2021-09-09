import { NavLink } from 'react-router-dom';

const NotFound = (): JSX.Element => (
  <div className="bg-gray-100 justify-center">
    <div className="mt-24 m-auto">
      <span className="text-gray-500 text-6xl block text-center">4 0 4</span>
      <span className="mt-6 text-gray-500 text-xl block text-center">
        Страница не найдена
      </span>
    </div>
    <div className="mt-6 flex justify-center">
      <NavLink
        to={`${process.env.PUBLIC_URL}/`}
        className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md "
      >
        На главную
      </NavLink>
    </div>
  </div>
);

export default NotFound;

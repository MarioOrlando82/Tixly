import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import ROUTES from '../configs/RouteConfig';
import Button from './Button';

function Navbar() {
  return (
    <nav className="py-6 flex justify-around items-center w-full sticky top-0">
      <Icon className="w-26 h-12" />
      <div className="flex justify-center gap-20">
        {ROUTES.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive }) =>
              isActive
                ? 'text-customWhite font-semibold text-base'
                : 'text-customWhite opacity-50'
            }
          >
            {route.name}
          </NavLink>
        ))}
      </div>
      <Button text="Login with Internet Identity" />
    </nav>
  );
}

export default Navbar;
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
            Home
        </NavLink>

        <NavLink
            to="/stopwatch"
            exact
            className={s.link}
            activeClassName={s.activeLink}
        >
            Stopwatch
        </NavLink>

        <NavLink
            to="/countdown"
            className={s.link}
            activeClassName={s.activeLink}
        >
            Countdown
        </NavLink>
    </nav>
);
export default Navigation;

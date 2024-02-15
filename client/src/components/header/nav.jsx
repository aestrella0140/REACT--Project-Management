import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {

    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <ul>
                        <li>
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to='/Signup'>
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link to='/Login'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }
}

export default Nav;
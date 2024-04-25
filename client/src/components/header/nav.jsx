import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {

    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <div  className='custom-nav' >
                    <ul className='ul-nav'>
                        <li>
                            <Link to='/Profile' className='link'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className='link'>
                                dashboard
                            </Link>
                        </li>
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
                <div className='custom-nav' >
                    <ul className='ul-nav'>
                        <li>
                            <Link to='/Signup' className='link'>
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link to='/Login' className='link'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        }
    }

    return (
        <header>
            <div className='custom-nav' >
                <h2>
                    <Link to='/'className='link'>
                        Continuous Improvement
                    </Link>
                </h2>

                <nav>
                    {showNav()}
                </nav>
            </div>
        </header>
    )
}

export default Nav;
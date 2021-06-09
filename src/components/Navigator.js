import React, {useState} from 'react';
import ApplicationLogo from "../mediaFiles/My_app_Logo.png";
import '../cssFiles/app.css';

const Navigator = () => {
    const [buttons, setButtons] = useState([
            {
                buttonName: 'Home',
                url: '/home'
            },
            {
                buttonName: 'Latest Content',
                url: '/latestContent'
            },
            {
                buttonName: 'Upcoming Content',
                url: '/upcomingcontent'
            },
    ]);

    const navLogo = (<img className="rounded my-logo" src={ApplicationLogo} />);
    const navButtons = buttons.map( buttonDetails => (<li class="nav-item"><a class="nav-link btn navbar-button m-1"  key={buttonDetails.buttonName} href={buttonDetails.url}>{buttonDetails.buttonName}</a></li>));
       

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <div className="navbar-brand">{navLogo}</div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {navButtons}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigator;
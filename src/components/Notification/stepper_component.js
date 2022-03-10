import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory, Link } from 'react-router-dom'

function StepperNotification() {

    const history = useHistory()
    const location = useLocation()

    function getStep() {
        switch (location.pathname) {
            case "/notification/NSelectPage":
                return 1;
            case "/notification/SelectBusiness":
                return 2;
            case "/notification/SelectUser":
                return 3;
            case "/notification/NotificationMode":
                return 4;
            case "/notification/NMembership":
                return 5;
            case "/notification/NotificationContent":
                return 6;
            default:
                return 1;
        }

    }
    return (
        <div className="process-wrapper">
            <ul className="Create-Notification">
                <li className={`process-stap ${(getStep() >= 1) ? 'active' : ""}`}>
                    <Link to="/notification/NSelectPage" >
                        <input type="checkbox" id="cb1" hidden className="cb-btn" />
                        <span>01</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb1">
                        Select Page
                    </label>
                </li>
                <li className={`process-stap ${(getStep() >= 2) ? 'active' : ""}`}>
                    <Link to="/notification/SelectBusiness" >
                        <input type="checkbox" id="cb2" hidden className="cb-btn" />
                        <span>02</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb2">
                        Select Business
                    </label>
                </li>
                <li className={`process-stap ${(getStep() >= 3) ? 'active' : ""}`}>
                    <Link to="/notification/SelectUser" >
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>03</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb3">
                        Select User
                    </label>
                </li>
                <li className={`process-stap ${(getStep() >= 4) ? 'active' : ""}`}>
                    <Link to="/notification/NotificationMode" >
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>04</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb3">
                        Notification Mode
                    </label>
                </li>
                <li className={`process-stap ${(getStep() >= 5) ? 'active' : ""}`}>
                    <Link to="/notification/NMembership" >
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>05</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb3">
                        Membership & Payment
                    </label>
                </li>
                <li className={`process-stap ${(getStep() >= 6) ? 'active' : ""}`}>
                    <Link to="/notification/NotificationContent" >
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>06</span>
                    </Link>
                    <br />
                    <label className="selact-btn" for="cb3">
                        Notification Content
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default StepperNotification
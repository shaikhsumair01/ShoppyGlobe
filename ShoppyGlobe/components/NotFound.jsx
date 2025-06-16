import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="Error-Message">
            <h1 className="Error-title">404 - Page Not Found</h1>
            <p className="Error-para">Hmmm...Cannot understand your request <i className="fa-solid fa-face-sad-tear icon-error"></i></p>
            <Link to="/"><button className="back-btn">Go Back</button></Link>
        </div>
    );
}

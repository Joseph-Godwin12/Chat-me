import festus from './assets/festus.jpg'
import send from './assets/sendicon.png'
import { useNavigate } from 'react-router-dom'
import back from './assets/back icon.png'

export default function Festus() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="page-header-div">
                <img
                    src={back}
                    alt="back icon"
                    className="back-icon"
                    onClick={handleGoBack} />
                <img src={festus} alt="confidence image" className="festus" />
                <p className="page-header-div-text">Sir Festus</p>
            </div>

            <div className="input-container">
                <input type="text" className="input-text-for-all" placeholder="Type message" />
                <button className="send-icon-btn">
                    <img src={send} alt="send icon" className="send-icon" />
                </button>
            </div>
        </>
    )
}
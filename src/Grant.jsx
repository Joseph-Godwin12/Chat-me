import grant from './assets/grant.jpg'
import send from './assets/sendicon.png'
import { useNavigate } from 'react-router-dom'
import back from './assets/back icon.png'


export default function Grant() {
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
                <img src={grant} alt="confidence image" className="grant" />
                <p className="page-header-div-text">Sir Grant</p>
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
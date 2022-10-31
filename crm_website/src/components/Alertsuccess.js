import { useNavigate } from 'react-router-dom';
import './Alertsuccess.css';
import img1 from './images/alertsuccess_righttick.png';
export default function Success({ setshow1 }) {
    const navigate = useNavigate();
    function OK() {
        navigate('/Login')
    }
    return <>
        <div className='alertsuccess'>
            <div className='alertsuccess_popup'>
                <img src={img1} />
                <label>Success!</label>
                <button type='Button' onClick={(e) => { setshow1(false) }}/* onClick={OK}*/>OK</button>
            </div>
        </div>
    </>
}
import { useState } from "react";
import { FaRegClock, FaCalendarAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Appointment = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="appointment">
            <div className="appointment-left">
                <p onClick={handleOpen}><FaRegClock style={{ paddingTop: '2px'}}  />  View All ER Wait Times <MdArrowDropDown /></p>
            </div>
            <div className="appointment-right">
                <button type="button" className="appointment-btn"><FaCalendarAlt size={20}/>  Make an Appointment</button>
                <button type="button" className="alert-btn"><FontAwesomeIcon icon={faExclamationTriangle} size="lg" color="red"/> Alerts <span>2</span></button>
            </div>
        </div>
    )
};

export default Appointment;





import React, {useContext} from "react";
import {AlertContext} from "./Context/Alert/alertContext";


export const Alert = () => {
    const { alert ,   hide } = useContext( AlertContext  )

    if (!alert) return null

    return (
    <div className={`alert alert-${alert.type} || 'secondary' alert-dismissible fade show`} role="alert">
        {alert.text}
        <button type="button" className="close"  aria-label="Close" onClick={hide} >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    )

}
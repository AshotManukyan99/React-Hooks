import React from "react";
import {Link} from "react-router-dom";

export const Card = ({user}) => (
    <div className='card'>
        <img src={user.avatar_url} alt={user.login} className='card-img-top'/>
        <div className='card-body'>
            <h5 className='card-img-top'>{user.login}</h5>
            <Link to={'/contact' + user.login} className='btn btn-primary'> Open </Link>
        </div>
    </div>
)
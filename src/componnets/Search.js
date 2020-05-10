import React, {useContext, useState} from "react";
import {AlertContext} from "./Context/Alert/alertContext";
import {GitHubContext} from "./Context/GitHub/gitHubContent";

export const Search = () => {
    const alert = useContext(AlertContext)
    let [ value , setValue ] = useState('')
    const github = useContext(GitHubContext)

    const onsubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if ( value.trim() ) {
            // console.log(`Make request with ${value}`)
            alert.hide()
            github.search( value )
            setValue( '')
        }  else {
            alert.show('Check name user !')

        }
    }
    return (
        <div className='form-group' >
            <input
                type="text"
                className='form-control'
                placeholder='Check @userName'
                onChange={event => setValue(event.target.value) }
                onKeyPress={ onsubmit}
                value={value}
            />
        </div>
    )
}


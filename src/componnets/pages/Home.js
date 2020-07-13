import React, {useState, useContext} from "react";
import {Search} from "../Search";
import {Card} from '../Card'
import {GitHubContext} from "../Context/GitHub/gitHubContent";


export default function Home() {

    const {loading, users} = useContext(GitHubContext)
    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <>
            <Search/>
            <div className="row">

                {
                    loading ? <h1> Loading ... </h1>
                        :
                        users.map((user, index) =>
                        <div className='col-sm-4 mb-4' key={index}>
                            <Card user={user} />
                        </div>)
                }
            </div>
        </>
    )

}
import React, {useContext, useEffect} from "react";
import {GitHubContext} from "../Context/GitHub/gitHubContent";

export default function Contact({match}) {
    const {getRepos, getUser, loading, user, repos} = useContext(GitHubContext)
    useEffect(() => {
        getUser(match.params.name)
        getRepos(match.params.name)
        // eslint-disable-next-line
    }, [])
    const {
        avatar_url,
        login,
        location,
        following,
        followers,
        html_url,
        email,
        company,
        bio
    } = user


    return (
        <>
            {
                loading ? <p className='text-center'> Load! ... </p>
                    :
                    <div className="card-group  ">
                        <div className="card p-2 ">
                            <img className="card-img-top" style={{width: '100px'}} src={avatar_url} alt={login}/>
                            <p className="card-text"><a href={html_url}> <strong>GitHub link: </strong>{html_url} </a>
                            </p>
                            <div className="card-body">
                                <h5 className="card-title"><strong>Name: </strong> {login}</h5>
                                <p className="card-text"><strong>Bio: </strong>{bio}</p>
                                <p className="card-text"><strong>City: </strong>{location}</p>
                                <p className="card-text"><strong>Follow: </strong>{following}</p>
                                <p className="card-text"><strong>Followers: </strong>{followers}</p>
                                <p className="card-text"><strong>Email: </strong>{email}</p>
                                <p className="card-text"><strong>Company: </strong>{company}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins
                                    ago</small></p>
                            </div>
                        </div>
                        {repos.join()}

                    </div>


            }

        </>
    )

}
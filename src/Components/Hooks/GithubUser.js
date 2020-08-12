import React, { useState ,useEffect, Fragment} from 'react';
import axios from 'axios';

function GithubUser() {
    const [Users, setUsers] = useState([]);
    const [time, setTime] = useState(null);

    useEffect(() => {
        let GitApi = async () => {
            let response = await axios.get("https://api.github.com/users");
            console.log(response);
            let data = response.data;
            setUsers([...data ]);
        };
        GitApi();

        setInterval(() => {
            let date = new Date().toLocaleTimeString();
            setTime(date);
        }, 1000);

    }, []);

    return (
        <div>
            <h1>List of Git Users{time}</h1>
            <h1>
                {Users.map((user) => (
                    <Fragment>
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt={user.login}/>
                    </Fragment>
                ))}
            </h1>
        </div>
    );
}

export default GithubUser;

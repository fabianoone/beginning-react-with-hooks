import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Figure from 'react-bootstrap/Figure';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=fabiano`)
            .then(res => {
//                console.log(res.data.items)
                    setData(res.data.items);
                    setIsLoading(false);
            });
    }, []);

    const listUsers = data.map((user) =>
        <Figure key={user.id} className="d-flex">
            <a href={user.html_url}>
                <Figure.Image
                    width={64}
                    height={64}
                    className="mr-3"
                    src={user.avatar_url}
                    alt={user.login}
                />
            </a>
            <Figure.Caption>
                <h5>Login: {user.login}</h5>
                <p>Id: {user.id}</p>
              </Figure.Caption>
        </Figure>
    );

    return (
        <div className="d-flex flex-column">
            {isLoading &&
                <Spinner animation="grow" variant="warning" />
            }
            {listUsers}
        </div>
    );
}

export default GitHub;
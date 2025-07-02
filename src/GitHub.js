import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Figure from 'react-bootstrap/Figure';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState( false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then((res) => {
                setData(res.data.items)
                setIsLoading(true);
                getData();
            })
    };

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    };

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
        <div>
            <h3>GitHub Users Results</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-row align-items-center">

                  <div className="col-sm-6 my-1 p-0">
                    <label className="sr-only" for="inlineFormInputGroupUsername">GitHub Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroupUsername"
                          placeholder="GitHub Username"
                          onChange={event => setSearchTerm(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-auto my-1 p-0">
                    <button type="submit" className="btn btn-primary">Search</button>
                  </div>
                </div>
              </form>


            <div className="d-flex flex-column mt-5">
                {isLoading &&
                    <Spinner animation="grow" variant="warning" />
                }
                {listUsers}
            </div>
        </div>
    );
}

export default GitHub;
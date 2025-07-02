import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
//                console.log(res.data.items)
                    setData(res.data.items);
                    setIsLoading(false);
            });
    }, []);
    return (
        <div>
            {isLoading &&
                <Spinner animation="grow" variant="warning" />
            }
        </div>
    );
}

export default GitHub;
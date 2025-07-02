import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Figure from "react-bootstrap/Figure";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // será atualizado no submit
  const [inputValue, setInputValue] = useState(""); // controla o campo de input
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return; // evita chamada na inicialização

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
        setData(res.data.items);
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]); // chamada só ocorre quando o user submete e searchTerm muda

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      setSearchTerm(trimmed); // isso dispara o useEffect
      setInputValue("");      // limpa o input
    }
  };

  const listUsers = data.map((user) => (
    <Figure key={user.id} className="d-flex align-items-center my-2">
      <a href={user.html_url} target="_blank" rel="noreferrer">
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
        <p>ID: {user.id}</p>
      </Figure.Caption>
    </Figure>
  ));

  return (
    <div className="container mt-4">
      <h3>GitHub Users Search</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-sm-6 my-1 p-0">
            <label className="sr-only" htmlFor="githubUsername">
              GitHub Username
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="githubUsername"
                placeholder="GitHub Username"
                value={inputValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-auto my-1 p-0">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>

      <div className="d-flex flex-column mt-5">
        {isLoading && <Spinner animation="border" variant="primary" className="mx-auto" />}
        {!isLoading && listUsers}
        {error && <div className="text-danger mt-3">Erro: {error.message}</div>}
      </div>
    </div>
  );
}

export default GitHub;

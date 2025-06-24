import Products from "./Products";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function App() {
    const user = {
        firstName: 'Fabiano',
        lastName: 'Oliveira',
        imageUrl: 'https://avatars.githubusercontent.com/u/3976796?u=204d7abe10e367637229876cac02d3af9351ec78&v=4&size=64'
    };

    return (
        <div>
            <h1>Hello, {formatName(user)}</h1> <img src={user.imageUrl} alt={formatName(user)} />
            <Products />
        </div>
    );
}

export default App;

import Products from "./Products";
import { Button } from "react-bootstrap";
import JumbotronComponent from "./JumbotronComponent";
import UserForm from "./UserForm";
import Example from "./Example";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function App() {
    const isValid = true;

    const user = {
        firstName: 'Fabiano',
        lastName: 'Oliveira',
        imageUrl: 'https://avatars.githubusercontent.com/u/3976796?u=204d7abe10e367637229876cac02d3af9351ec78&v=4&size=64'
    };

    return (
        <div>
            <Example />
            <UserForm />
            <JumbotronComponent>
                Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
            </JumbotronComponent>
            <h1>Hello, {formatName(user)}</h1> <img src={user.imageUrl} alt={formatName(user)} />
            <Products />
            <Button variant="danger" disabled={!isValid}>Default</Button>
        </div>
    );
}

export default App;

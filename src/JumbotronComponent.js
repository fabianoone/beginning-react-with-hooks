import Button from 'react-bootstrap/Button';

function JumbotronComponent(props) {
    return (
        <div>
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">The Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">{props.children}
                    </p>
                    <Button className="btn btn-primary btn-lg" type="button">Example button</Button>
                </div>
            </div>
        </div>
    );
}

export default JumbotronComponent;

import React from 'react';
import ReactDOM from 'react-dom';

class Create extends React.Component {
    constructor(props) {
        super();
        this.state = {
            LinkClick: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2> ProdList</h2> <div align="right"><button className="btn btn-secondary">Create Button</button></div>

            </React.Fragment >
        )
    }
}
export default Create;

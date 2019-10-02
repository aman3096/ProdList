import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ""
        };
        this.fetchProducts = this.fetchProducts.bind(this);
    }
    componentDidMount() {
        this.fetchProducts();
    }
    fetchProducts() {
        axios
            .get("http://localhost:1234/retrieveProducts")
            .then(response => {
                this.setState({
                    result: response.data,
                    error: ""
                });
            });
        axios
            .post("http://localhost:1234/postProducts")
            .then(response => {
                this.setState({
                    result: response.data,
                    error: ""
                });
            });
    }

    render() {
        const { result } = this.state;
        return (
            <div className="card" style={{ width: "18rem" }} >
                <div className="card" style={{ width: "18rem" }} >
                    <div className="row">
                        <div className="col-8 offset-2">
                            <h3>Employee Data:</h3>
                            <br />
                            {result ? <Table list={result} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const Table = ({ list }) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Image URL</th>
                <th>Desc</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {list.map(item => (
                <tr key={item.ProdName}>
                    <td>
                        <span>{item.ProdName}</span>
                    </td>
                    <td>
                        <span><img src={item.ImageURL} alt={item.ImageURL} /></span>
                    </td>
                    <td>
                        <span>{item.Desc}</span>
                    </td>
                    <td>
                        <span>{item.Price}</span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Card;

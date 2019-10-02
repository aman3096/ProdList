import React from 'react';
import Card from './card';
class Start extends React.Component {
    constructor() {
        super();
        this.state = {
            ProdName: "",
            ImageURL: "",
            Desc: "",
            Price: "",
            addProdClicked: false,
            formErrors: {
                ProdNameERR: '',
                ImageURLERR: '',
                DescERR: '',
                PriceERR: '',
            },
            fieldValidity: {
                ProdName: false,
                ImageURL: false,
                Desc: false,
                Price: false,
            },
            formValid: false,
        }
        this.validateProdName = this.validateProdName.bind(this);
        this.validateImageURL = this.validateImageURL.bind(this);
        this.validateDesc = this.validateDesc.bind(this);
        this.validatePrice = this.validatePrice.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);


    }

    validateProdName(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        this.setState({ value: event.target.ProdName });

        const prod = event.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ ProdName: event.target.value });
        if (prod.length < 5) {
            formErrors.ProdNameERR = "Cannot be less than 5 letters";
            fieldValidity.ProdName = false;
        } else {
            formErrors.ProdNameERR = "";
            fieldValidity.ProdName = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.ProdName })
    }

    validateDesc(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        this.setState({ value: event.target.ProdName });

        const Desc = event.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ Desc: event.target.value });
        if (Desc.length < 10) {
            formErrors.DescERR = "Desc should greater than 10 characters";
            fieldValidity.Desc = false;
        } else {
            formErrors.DescERR = "";
            fieldValidity.Desc = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.Desc })
    }

    validateImageURL(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        this.setState({ value: event.target.ImageURL });

        const ImageURL = event.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ ImageURL: event.target.value });
        if (ImageURL.length < 1) {
            formErrors.ImageURLERR = "Enter something";
            fieldValidity.ImageURL = false;
        } else {
            formErrors.ImageURLERR = "";
            fieldValidity.ImageURL = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.ImageURL })
    }

    validatePrice(event) {
        const Price = event.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ Price: event.target.value });
        if (Price.length < 1) {
            formErrors.PriceERR = "Enter something";
            fieldValidity.Price = false;
        } else {
            formErrors.PriceERR = "";
            fieldValidity.Price = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.Price })
    }


    handleChange(event) {
        this.validateProdName(event);
        this.validateDesc(event);
    }
    handleSubmit(event) {
        this.setState({ addProdClicked: !this.state.addProdClicked })
        alert('A product was created in catlog: ' + this.state.ProdName + this.state.Desc + this.state.ImageURL + this.state.Price);
        event.preventDefault();
    }
    render() {
        return (
            <React.Fragment>
                <h2> ProdList</h2>
                <center>
                    <form
                        className="form"
                        onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            {/* <label for="ProdName"> */}
                            Product Name:
                                {/* </label> */}
                        </div>
                        <div className="form-group">
                            <input
                                name="ProdName"
                                value={this.state.ProdName}
                                type="text"
                                onChange={this.validateProdName}
                                placeholder="enter Product Name" />

                        </div>
                        <div className="text-danger">{this.state.formErrors.ProdNameERR}</div>
                        <div className="form-group">
                            {/* <label for="ProdName"> */}
                            Image URL:
                                {/* </label> */}
                        </div>
                        <div className="form-group">
                            <input
                                name="ImageURL"
                                type="text"
                                id="ImageURL"
                                value={this.state.ImageURL}
                                onChange={this.validateImageURL}
                                placeholder="enter Image URL"
                            />
                        </div>
                        <div className="text-danger">{this.state.formErrors.ImageURLERR}</div>

                        <div className="form-group">
                            {/* <label for="Desc"> */}
                            Description:
                                {/* </label> */}
                        </div>
                        <div className="form-group">
                            <input
                                name="Desc"
                                type="text"
                                value={this.state.Desc}
                                onChange={this.validateDesc}
                                placeholder="enter Description"
                            />
                        </div>

                        <div className="text-danger">{this.state.formErrors.DescERR}</div>

                        <div className="form-group">
                            Price:
                        </div>
                        <div className="form-group">
                            <input
                                name="Price"
                                type="number"
                                value={this.state.Price}
                                onChange={this.validatePrice}
                                min="1"
                                placeholder="enter Price" />
                        </div>
                        <div className="text-danger">{this.state.formErrors.PriceERR}</div>
                        <div className="form-group">
                            <div align="right"><button className="btn btn-secondary" >Add Product</button></div>
                        </div>
                    </form>
                </center>
                {this.state.addProdClicked ? <Card ProdName={this.state.ProdName} ImageURL={this.state.ImageURL} Desc={this.state.desc} Price={this.state.Price} /> : null}


            </React.Fragment >)
    }
}
export default Start;

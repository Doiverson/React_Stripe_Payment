import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Moon from './connection/Moon'


const moon = new Moon();

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            currency:"cad",
            chargeAmount:"1000",
            token:null,
            email:'goten@gmail.com'

        };


        this.submit = this.submit.bind(this);
    }

    async submit(ev) {

        let {token} = await this.props.stripe.createToken({name: "Sho"});
        this.setState({token: token.id})

        console.log(token.id)



        let data = {};
        data.currency = this.state.currency;
        data.chargeAmount = this.state.chargeAmount;
        data.token = this.state.token;
        data.email = this.state.email;
        console.log(data);

        moon.post("api/payment/charge/5ce089b150072409c3d68464",data)
            .then(res => {
                console.log(res.data);
                console.log("Purchase Complete!")
                this.setState({complete: true});
            })
            .catch(err =>{
                console.log(JSON.stringify(err));
                this.setState({complete: false});
            });
    }

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;

        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);

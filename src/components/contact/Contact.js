import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
submitted: false,
formData: {
    firstName: '',
    lastName: ''
}
        };
    }
handleChange = (event) =>{
const formData = {...this.state.formData};
formData[event.target.name] = event.target.value;

this.setState({ formData });
}

handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
        submitted: true
    });
}

resetForm = (event) => {
    this.setState({
        submitted: false,
        formData: {
            firstName: '',
            lastName: ''

        }
    });
}

    render() {
        if (this.state.submitted){
            return(
                <div className ="contact">
                   
                    <p>Thank You!,{this.state.formData.firstName}, for submitting this form.</p>
                    <button onClick={this.restForm}>Reset Form</button>
                </div>
            )
        }
        return (
            <div classNmae="Contact">
                <form onSubmit={this.handleChange}>
                    <div>
                        <label htmlfor="FirstName">First name</label>
                        <input 
                        type="text" 
                        name="firstName"
                        value={this.state.formData.firstName} 
                        onChange= {this.handleSubmit}
                        />

                        <div>
                            <label htmlFor="lastName">Last name</label>
                            <input 
                            type="text" 
                            name="lastName"
                            value={this.state.formData.lastName}
                            onChange= {this.handleChange}
                             />

                        </div>

                        <button>Submit Form</button>
                    </div>

                </form>
                <div>
                    {this.state.formData.firstName}
                    <br/>
                    {this.state.formData.lastName}
                </div>
            </div>


        );
    }

}
export default Contact;
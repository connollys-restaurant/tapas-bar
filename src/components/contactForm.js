import React, { Component } from "react"

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      message:'',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  clearInputs(){
    console.log("clearing inputs");
    this.setState({
      name:'',
      email:'',
      phone:'',
      message:'',
    })
  }

  toggleSuccessMsg(){
    document.getElementById("successMessage").style.display = "inline"
  }

  toggleErrorMsg(){
    document.getElementById("errorMessage").style.display = "inline"
  }

  displaySpinner(){
    document.getElementById("spinner").removeAttribute('hidden');
  }

  hideSpinner(){
    document.getElementById("spinner").setAttribute('hidden', '');
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  async handleSubmit(e){
    e.preventDefault();

    const {name, email, phone, message} = this.state;
    const to_send = {
      name: name,
      email: email,
      subject : phone,
      message : message
    }

    try{
      this.displaySpinner();
      const response = await fetch("/.netlify/functions/sendmail", {
        method: "POST",
        body: JSON.stringify(to_send),
      } )

      if (!response.ok){
        this.hideSpinner();
        this.toggleErrorMsg();
        return
      }
      this.hideSpinner();
      this.clearInputs();
      this.toggleSuccessMsg();
    } catch (e) {
      this.toggleErrorMsg();
      console.log(e);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class={"contactForm"}>
        <p type="Name:">
          <input required placeholder="Name" name={"name"} type={"text"} value={this.state.name} onChange={this.handleChange}/>
        </p>

        <p type="Email:">
          <input required placeholder="Email address" name={"email"} type={"email"} value={this.state.email} onChange={this.handleChange}/>
        </p>

        <p type="Phone number:">
          <input required placeholder="Phone" name={"phone"} type={"text"} value={this.state.phone} onChange={this.handleChange}/>
        </p>

        <p type="Message:">
          <textarea required placeholder="Message" rows={3} name={"message"} value={this.state.message} onChange={this.handleChange}/>
        </p>

        <div class={"submitBtnCntnr"}>
          <button type={"submit"}>Send</button>
          <div hidden id="spinner"/>
          <span id={"successMessage"}>Thanks for getting in touch!</span>
          <span id={"errorMessage"}>Message could not be sent. Please try again.</span>
        </div>
      </form>
    )
  }
}

export default ContactForm
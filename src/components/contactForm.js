import React, { Component } from "react"

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      subject:'',
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
      subject:'',
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

    const {name, email, subject, message} = this.state;
    const to_send = {
      name: name,
      email: email,
      subject : subject,
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

        <p type="Subject:">
          <input required placeholder="Subject" name={"subject"} type={"text"} value={this.state.subject} onChange={this.handleChange}/>
        </p>

        <p type="Message:">
          <textarea required placeholder="Message" rows={3} name={"message"} value={this.state.message} onChange={this.handleChange}/>
        </p>

        <div class={"submitBtnCntnr"}>
          <button type={"submit"} className="button">Send</button>
          <div hidden id="spinner"/>
          <p><span id={"successMessage"}>Message sent - we'll get back to you ASAP</span></p>
          <p><span id={"errorMessage"}>Message could not be sent - please try again</span></p>
        </div>
      </form>
    )
  }
}

export default ContactForm
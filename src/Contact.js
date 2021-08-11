
import React,{useState} from "react";

const Contact = () => {
  const[data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });
  const Inputevent = (event) => {
    const{name,value} = event.target;

    setData((preval) => {
      return{
        ...preval,
        [name]: value,
      }
    });
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My email is ${data.email}. My phonnumber is ${data.phone}. massage ${data.msg}`);
  };
  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
          <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fullname" value={data.fullname} onChange={Inputevent}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email" name="email" value={data.email} onChange={Inputevent}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Number</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Number" name="phone" value={data.phone} onChange={Inputevent}/>
        </div>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your Massage" rows="3" name="msg" value={data.msg} onChange={Inputevent}></textarea>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
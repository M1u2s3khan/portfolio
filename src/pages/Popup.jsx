import React, { useEffect, useState } from 'react'

const Popup = () => {
    const [showModal, setShowModal] = useState(false);

const [enquiryData, setEnquiryData] = useState({
  name: "",
  email: "",
  message: ""
});

useEffect(() => {
  setTimeout(() => {
    setShowModal(true);
  }, 1500);
}, []);

const handleChange = (e) => {
  const { name, value } = e.target;

  setEnquiryData({
    ...enquiryData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!enquiryData.name || !enquiryData.email || !enquiryData.number || !enquiryData.message) {
    alert("Please fill all fields");
    return;
  }

  console.log("Enquiry Data:", enquiryData);

  alert("Enquiry Sent Successfully ✅");

  setShowModal(false);

  setEnquiryData({
    name: "",
    number: "",
    email: "",
    message: ""
  });
};

  return (
   <>
   
  {showModal && (
<div className="custom-modal">

  <div className="modal-box">

    <div className="modal-header">
      <h4>Quick Enquiry</h4>

      <button
        className="close-btn"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>
    </div>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
value={enquiryData.name}
onChange={handleChange}
placeholder="Your Name"
/>
<input
type="text"
name="number"
value={enquiryData.number}
onChange={handleChange}
placeholder="Your Number"
/>

<input
type="email"
name="email"
value={enquiryData.email}
onChange={handleChange}
placeholder="Your Email"
/>

<textarea
name="message"
rows="3"
value={enquiryData.message}
onChange={handleChange}
placeholder="Your Message"
/>

<button className="send-btn">
Send Enquiry
</button>

</form>

  </div>

</div>
)}


   </>
  )
}

export default Popup
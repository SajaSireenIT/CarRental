import React, { useState } from 'react';

export default function Payment() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === '') {
      alert('Please enter amount');
    } else {
      var options = {
        key: 'rzp_test_AG6kBFMcUzLWip',
        key_secret: '7IV8gkWGTJ4o3jarpoSL5F0c',
        amount: amount * 100,
        currency: 'INR',
        name: 'STARTUP_PROJECTS',
        description: 'For testing purpose',
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: 'Saja Sireen',
          email: 'saj@gmail.com',
          contact: '9150435525',
        },
        notes: {
          address: 'Razorpay Corporate office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var razorpay = new window.razorpay(options) 
      razorpay.open();
    }
  };

  return (
    <div className="App">
      <h2>Enter your RENT amount</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>

    
  );
}

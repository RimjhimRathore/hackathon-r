document.getElementById('payButton').onclick = function() {
    var amount = document.getElementById('amount').value;
  
    var options = {
      key: 'rzp_test_0yx0AGbEbJaWtH', // Enter your Razorpay API Key here
      amount: amount * 100, // Amount is in currency subunits. 100 refers to 100 paise = ₹1
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for Product/Service',
      image: 'https://example.com/logo.png', // Your company logo
      handler: function(response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // You can handle the payment success response here
      },
      prefill: {
        name: 'John Doe', // Pre-fill user's name
        email: 'john@example.com', // Pre-fill user's email
        contact: '9999999999' // Pre-fill user's phone number
      },
      notes: {
        address: 'Razorpay Corporate Office' // Add any additional notes if required
      },
      payment_method: {
        external: ['upi'] // Enable UPI payment option
      }
    };
  
    var rzp = new Razorpay(options);
    rzp.open();
  
    // Generate QR code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: 'upi://pay?pa=YOUR_UPI_ID@razorpay&pn=Your%20Company%20Name&mc=YOUR_MERCHANT_CODE&tid=YOUR_TRANSACTION_ID&tn=Payment%20for%20Product/Service&am=' + (amount * 100) + '&cu=INR',
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
  
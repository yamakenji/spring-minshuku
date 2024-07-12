const stripe = Stripe('pk_test_51OQQDtEj8221YeUAXNQRFneOyAMveMTcv2EATaceGTrUH2HPTNvULdSUeMcZBPDmFEC1MfQAvaCKwW0i5KUoZrgc00csKB1xA0');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});
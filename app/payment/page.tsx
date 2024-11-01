
// function page() {
//     const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');  // Clé publique Stripe

// async function handleCheckout() {
//     const response = await fetch('/create-checkout-session', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             product_name: 'Produit Test',
//             amount: 5000,  // Montant en centimes, ici 50,00 €
//         }),
//     });
//     const session = await response.json();

//     // Redirige vers Stripe Checkout
//     const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//     });

//     if (result.error) {
//         console.error(result.error.message);
//     }
// }

export default function Home() {
    return (
      <div>test</div>
    )
  }
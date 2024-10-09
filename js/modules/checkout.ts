const stripe = new Stripe("pk_test_51OVrkAKRJZh6zFUfBacC3LqERZdFX5vpqlrDWhC0tm4kFkpBxNpA6acRQzepJnaOeYeb0nCCnIid7UhCQAmtqylb00N8QLQF7v");

(async () => {
  const basket = JSON.parse(sessionStorage.getItem('basket') || '[]')
  const items = basket.map((item) => ({
    name: item.title,
    amount: item.price,
    currency: 'usd',
    quantity: item.quantity,
    images: [item.image]
  }))

  try {
    const response = await fetch(`${global['path']}/checkout.php`, {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    const { clientSecret } = await response.json()

    const checkout = await stripe.initEmbeddedCheckout({
      clientSecret,
    })

    checkout.mount('#checkout')
  } catch (error) {
    console.error(error)
  }
})()

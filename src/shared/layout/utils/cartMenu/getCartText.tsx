export function getCartText(cartLength: number) {
  if (cartLength === 0) {
    return <span>Seu carrinho está vazio.</span>
  } else if (cartLength === 1) {
    return (
      <span>
        Seu carrinho tem <strong>1 item!</strong>
      </span>
    )
  } else {
    return <span>Seu carrinho tem {cartLength} itens!</span>
  }
}

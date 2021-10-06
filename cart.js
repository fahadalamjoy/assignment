if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  var removeCart = document.getElementsByClassName('delete')
  console.log(removeCart)
  for (var i = 0; i < removeCart.length; i++) {
    var button = removeCart[i]
    button.addEventListener('click', function (e) {
      var buttonClick = e.target
      buttonClick.parentElement.remove()
    })
  }
  var addToCartButtons = document.getElementsByClassName('addcart')
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }
}
function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement
  var title = shopItem.getElementsByClassName('title')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('image')[0].src
  addItemToCart(title, imageSrc)
}
function addItemToCart(title, imageSrc) {
  var cartRow = document.createElement('div')
  var cartItems = document.getElementsByClassName('cart')[0]
  var cartRowContent = `
        <div class="add">
        <img class="addimage" src="${imageSrc}" alt="" srcset="">
        <p>${title}</p>
        <button class="delete">Remove</button>
        </div>
  `
  cartRow.innerHTML = cartRowContent
  cartRow
    .getElementsByClassName('delete')[0]
    .addEventListener('click', function (e) {
      var buttonClick = e.target
      buttonClick.parentElement.remove()
    })
  cartItems.append(cartRow)
}

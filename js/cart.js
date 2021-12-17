/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}
// elementNameHere.remove() ?

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body DONE
  let tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart (Setup a FOR loop)
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR  DONE
    let tr = document.createElement('tr')
    // id row for editing & removal; temlplate literals for programmatic naming? DONE
    tr.setAttribute('id', `${cart.items[i].product}`);
    tbody.appendChild(tr);
    // TODO: Create a TD for the delete link, quantity,  and the item
    let td = document.createElement('td')
    //TODO: Add content to the td
    td.textContent = `${cart.items[i].product}`
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(td)
    // Create new data 
    td = document.createElement('td')
    td.textContent = `${cart.items[i].quantity}`
    tr.appendChild(td)
    // Remove item
    // td = document.createElement('td')
    // let remove = document.createElement('a')

    tr.appendChild(td)
    //TBODY.appendChild(childElementName)
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  //
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();

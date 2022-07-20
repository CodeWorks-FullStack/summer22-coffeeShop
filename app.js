console.log('java(script) time');


const coffeeItems = [
  {
    name: 'Amickcano Craft Deluxe',
    price: 12,
    oz: 2,
    img: 'https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Supreme Drip 4ever',
    price: 100,
    oz: 8,
    img: 'https://images.stockx.com/images/Supreme-Bialetti-Moka-Express-Red.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1623271204'
  },
  {
    name: 'Truffle Latte',
    price: 13,
    oz: 7,
    img: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: "Iz just ice",
    price: 0.1,
    oz: 12,
    img: 'https://images.unsplash.com/photo-1622322816396-4363b777eee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGljZWQlMjBjb2ZmZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: "Frappe Attack",
    price: 15,
    oz: 32,
    img: 'https://images.unsplash.com/photo-1595981266586-1541a5a4307f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'A Live Performance of spilled coffee',
    price: 25,
    oz: 0,
    img: 'https://images.unsplash.com/photo-1643694290559-13d4e3606a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
  },
  {
    name: 'Ying Yang',
    price: 18,
    oz: 16,
    img: 'https://images.unsplash.com/photo-1422207049116-cfaf69531072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1435&q=80'
  },
  {
    name: 'Ole Natural',
    price: 28,
    oz: 12,
    img : 'https://images.unsplash.com/photo-1534617770564-74885716b23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
]
let orders = []

function drawMenu(){
  let template = ''
  coffeeItems.forEach( item => {
    template += `
    <div class="col-6 coffee-item px-1 mb-2" onclick="order('${item.name}')">
      <div>
        <img class="img-fluid"
          src="${item.img}"
          alt="">
        <p class="bg-black p-2 coffee-name mb-0">${item.name} | ${item.oz}oz</p>
        <p class="bg-black p-2 price">$${item.price}</p>
      </div>
    </div>
  `})
  // console.log(template);
  let menuElm = document.getElementById('menu-items')
  console.log(menuElm);
  menuElm.innerHTML = template
}
drawMenu()


function drawOrders(){
let template = ''
// NOTE to access the index of the item from the forEach you can get it like below 
orders.forEach((order, i) => template += `
  <div class="col-12 order-item" onclick="deleteItem(${i})">
    <p><span>${order.name}</span> - <span class="text-end ms-auto">$${order.price}</span></p>
  </div>
`)
// console.log(template);
let orderElm = document.getElementById('order-items')
orderElm.innerHTML = template
drawTotal()
}

function drawTotal(){
  let subtotal = 0
  orders.forEach( order => subtotal += order.price)
  console.log('subtotal', subtotal);
  let totalElm = document.getElementById('total')
  // NOTE add tax
  subtotal *= 1.06
  totalElm.innerText = subtotal.toFixed(2)
}

function order(selectedName){
  console.log('ordering', selectedName);
  let foundCoffee = coffeeItems.find(coffee => coffee.name == selectedName)
  console.log(foundCoffee);
  // NOTE push adds items to the array it's targeting
  orders.push(foundCoffee)
  console.log('current Orders',orders);
  drawOrders()
}

function clearOrders(){
  orders = []
  drawOrders()
}

function deleteItem(index){
  console.log('deleting', index);
  let order = orders[index]
  if(window.confirm(`Are you sure you want to delete 1 ${order.name}?`)){
    if(window.confirm('are you for sure for sure? this is irreversible')){
      let input = window.prompt(`ok your funeral, please confirm by typing "delete/${order.name}"`)
      if(input == 'delete/'+ order.name){
        orders.splice(index, 1)
        drawOrders()
      } else {
        window.alert('please try again')
      }
    }
  }
}
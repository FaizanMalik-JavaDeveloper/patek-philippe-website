let cart = [];

function showDetails(name, price, collection, description){

    document.getElementById("watchName").innerText = name;
    document.getElementById("watchPrice").innerText = price;
    document.getElementById("watchCollection").innerText = collection;
    document.getElementById("watchDescription").innerText = description;

    document.getElementById("watchModal").style.display = "block";
}

function closeModal(){
    document.getElementById("watchModal").style.display = "none";
}

function addToCart(watchName){

    cart.push(watchName);

    document.getElementById("cartCount").innerText = cart.length;

    alert(watchName + " added to cart!");
}

function openCart(){

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if(cart.length === 0){

        cartItems.innerHTML = "<li>Your cart is empty</li>";

    }else{

        cart.forEach(item => {

            let li = document.createElement("li");

            li.innerText = item;

            cartItems.appendChild(li);

        });
    }

    document.getElementById("cartModal").style.display = "block";
}

function closeCart(){
    document.getElementById("cartModal").style.display = "none";
}

window.onclick = function(event){

    if(event.target == document.getElementById("watchModal")){
        closeModal();
    }

    if(event.target == document.getElementById("cartModal")){
        closeCart();
    }
}
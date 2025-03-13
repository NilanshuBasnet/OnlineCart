document.addEventListener('DOMContentLoaded', function() {
    const products =[
        {id:1, name:"Chicken MO:MO", shop:"Momo Ghar", price: 150, img: "https://cdn.pixabay.com/photo/2024/05/21/23/54/ai-generated-8779349_1280.jpg"},
        {id:2, name:"Sekuwa", shop:"Pahadi Zaika", price: 180, img: "https://cdn.pixabay.com/photo/2024/08/23/10/29/ai-generated-8991387_1280.jpg"},
        {id:3, name:"Chicken Biryani", shop:"Namaste Bites", price: 200, img: "https://cdn.pixabay.com/photo/2024/08/23/13/24/ai-generated-8991738_1280.jpg"},
        {id:4, name:"Thali", shop:"Himalaya Den", price: 170, img: "https://cdn.pixabay.com/photo/2023/08/28/11/35/ai-generated-8219058_1280.jpg"}
    ];

    const cart=[];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalAmount = document.getElementById("total-amount");
    const checkoutButton = document.getElementById("checkout-btn");

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-container');
        productDiv.innerHTML = `
        <div class="image-container">
                    <img class="product-image" src=${product.img} alt="ProductImage">
                </div>
                <div class="product-details">
                    <h2 class="product-price">रु ${product.price.toFixed(2)}</h2>
                    <p class="product-name">${product.name}</p>
                    <p class="product-origin">${product.shop}</p>
                </div>
                <button data-id=${product.id} class="addItem-btn">Add to Cart</button>
        `
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON'){
            console.log("Button Clicked!")
           const productId = parseInt( e.target.getAttribute('data-id'));
                const product = products.find(product => product.id === productId);
                console.log(product);
                addToCart(product);
        }
    });

    function addToCart(product){
        cart.push(product);
        renderCard();

    };

    function renderCard(){
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if(cart.length > 0){
            emptyCartMessage.classList.add('hidden');
            cartTotal.classList.remove('hidden');
            

            cart.forEach((item, index) =>{
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                ${item.name} - रु ${item.price.toFixed(2)}
                `
                cartItems.appendChild(cartItem);
            });
            totalAmount.innerHTML = `रु ${totalPrice.toFixed(2)}`;
        }else{
            cartTotal.classList.add('hidden');
            cartItems.innerHTML = `<p id="empty-cart">Your Cart is Empty!</p>`;
        }
    };

    checkoutButton.addEventListener('click', function(){
        alert("Thank you for shopping with us!");
        cart.length = 0;
        renderCard();
    });
});

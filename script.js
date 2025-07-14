let cart = [];
let user = {};

// Show the login/signup form
function showSignup() {
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'none';
}

// Show the product page
function showProducts() {
    if (!user.username || !user.email) {
        alert('Please log in or sign up first.');
        showSignup();
        return;
    }
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'none';
}

// Show the cart page
function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    document.getElementById('cartSection').style.display = 'block';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('paymentSection').style.display = 'none';
    updateCartTable();
}

// Show the payment page
function showPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items to the cart first.');
        return;
    }
    document.getElementById('paymentSection').style.display = 'block';
    document.getElementById('cartSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
}

// Handle login/signup form
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    user = { username, email };
    alert(`Welcome, ${username}!`);
    showProducts();
}

// Add product to cart
function addToCart(name, price) {
    cart.push({ name, price });
    alert(`${name} has been added to your cart.`);
}

// Update cart table with current cart items
function updateCartTable() {
    const cartTable = document.querySelector('#cartTable tbody');
    cartTable.innerHTML = ''; // Clear the table
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
    });
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartTable();
}

// Complete payment process
function completePayment(event) {
    event.preventDefault();
    alert('Payment Successful! Thank you for your purchase.');
    cart = []; // Clear the cart after payment
    showProducts();
}

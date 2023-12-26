<template>
    <div class="container">
        <h1>Food</h1>
        <div class="con-row">
            <!-- Items -->
            <div class="row-item">
                <h3>Pepsi</h3>
                <img src="../assets/pictures/pepsi.png" alt="">
                <p><strong>Price : </strong> 2$</p>
            </div>
            <div class="row-item">
                <h3>Organic Blueberries</h3>
                <img src="../assets/pictures/blue.png" alt="">
                <p><strong>Price : </strong> 4.49$ per pint</p>
            </div>
            <div class="row-item">
                <h3>Quinoa Pasta </h3>
                <img src="../assets/pictures/quinoa.png" alt="">
                <p><strong>Price : </strong> 3$ per 12-ounce</p>
            </div>
            <div class="row-item">
                <h3>Avocado Oil</h3>
                <img src="../assets/pictures/oil.png" alt="">
                <p><strong>Price : </strong> 8.99$ per 16.9 oz</p>
            </div>
            <div class="row-item">
                <h3>Grass-fed Greek Yogurt</h3>
                <img src="../assets/pictures/yogurt.png" alt="">
                <p><strong>Price : </strong> 3$ per 8-oz </p>
            </div>
            <div class="row-item">
                <h3>Artisanal Sourdough Bread</h3>
                <img src="../assets/pictures/bread.png" alt="">
                <p><strong>Price : </strong> 5.49$ per loaf</p>
            </div>
        </div>
        <!-- Second category -->
        <h1>Electronics</h1>
        <div class="con-row">
            <!-- Items -->
            <div class="row-item">
                <h3>Iphone 15 Pro Max</h3>
                <img src="../assets/pictures/iphone.png" alt="">
                <p><strong>Price : </strong> 1200$</p>
            </div>
            <div class="row-item">
                <h3>4K Smart TV</h3>
                <img src="../assets/pictures/tv.png" alt="">
                <p><strong>Price : </strong> 1000.99$ </p>
            </div>
            <div class="row-item">
                <h3>Apple Macbook Pro</h3>
                <img src="../assets/pictures/mac.png" alt="">
                <p><strong>Price : </strong> 1600$</p>
            </div>
            <div class="row-item">
                <h3>Smart Life Watch</h3>
                <img src="../assets/pictures/watch.png" alt="">
                <p><strong>Price : </strong> 199.99$</p>
            </div>
            <div class="row-item">
                <h3>Wireless Headphones</h3>
                <img src="../assets/pictures/headphone.png" alt="">
                <p><strong>Price : </strong> 149.99$</p>
            </div>
            <div class="row-item">
                <h3>Digital Camera</h3>
                <img src="../assets/pictures/cam.png" alt="">
                <p><strong>Price : </strong> 449.99$</p>
            </div>
        </div>
        <!-- Next Category -->
        <h1>Sports and Outdoors</h1>
        <div class="con-row">
            <!-- Items -->
            <div class="row-item">
                <h3>Camping Tent</h3>
                <img src="../assets/pictures/camp.png" alt="">
                <p><strong>Price : </strong> 149.99$</p>
            </div>
            <div class="row-item">
                <h3>Bicycle</h3>
                <img src="../assets/pictures/cycle.png" alt="">
                <p><strong>Price : </strong> 349.99$ </p>
            </div>
            <div class="row-item">
                <h3>Fitness Tracker</h3>
                <img src="../assets/pictures/fit.png" alt="">
                <p><strong>Price : </strong> 99.99$</p>
            </div>
            <div class="row-item">
                <h3>Golf Clubs Set</h3>
                <img src="../assets/pictures/golf.png" alt="">
                <p><strong>Price : </strong> 299.99$</p>
            </div>
            <div class="row-item">
                <h3>Hiking Backpack</h3>
                <img src="../assets/pictures/bag.png" alt="">
                <p><strong>Price : </strong> 119.99$</p>
            </div>
            <div class="row-item">
                <h3>Tennis Racquet Set</h3>
                <img src="../assets/pictures/racket.png" alt="">
                <p><strong>Price : </strong> 129.99$</p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    /* border: 2px solid black; */
    margin-top: 2vw;
    width: 92vw;
    margin-left: 2.5vw;
    padding: 20px;
}
.con-row {
    /* border: 2px solid green; */
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container h1 {
    padding: 5px 0;
    color: #4fbac0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vw;
    text-decoration: underline;
}
.row-item {
    border: 1px solid #4fbac0;
    border-radius: 5px;
    height: 225px;
    width: 200px;
    padding: 10px;
    margin: 0 35px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.row-item:hover {
    color: white;
    background-color: #4fbac0;
}
h3, p {
    padding: 5px;
}
.row-item img {
    height: 150px;  
}
</style>

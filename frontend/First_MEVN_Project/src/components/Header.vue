<template>
    <div class="nav-bar">
        <ul class="nav-items">
            <li><router-link to="/">Cart</router-link></li>
            <li><router-link to="/">Shop</router-link></li>
            <li><router-link to="/">Queries</router-link></li>
            <img src="../assets/pictures/d2.png" alt="">
            <li><router-link to="/">About</router-link></li>
            <li><router-link to="/">Upcoming!</router-link></li>
            <li><router-link to="/">Affiliate</router-link></li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>

.nav-bar {
    background-color: #64c6cb;
    height: 20vh;
}
.nav-bar ul img {
    height: 200px;
    cursor: pointer;
}
.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.nav-items li {
    list-style: none;
    margin: 20px 50px;
}
.nav-items li a {
    text-decoration: none;
    color: white;
    
}

/* Media Queries */
@media screen and (max-width: 1000px) {
    .nav-bar {
        height: auto; /* Adjust height for smaller screens */
    }
    .nav-items li {
        margin: 2vw; /* Adjust margin for smaller screens */
    }
    
}
</style>

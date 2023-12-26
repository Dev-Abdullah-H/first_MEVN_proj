<template>
    <div class="nav-bar">
    <div class="nav-items">
        <router-link to="/"><img src="../assets/pictures/insta.png" alt=""></router-link>
        <router-link to="/"><img src="../assets/pictures/t.png" alt=""></router-link>
        <router-link to="/"><img src="../assets/pictures/email.png" alt=""></router-link> 
    </div>
    <p>Duson is a official trademark of Duson,Inc</p>
</div>
</template>

<script setup></script>

<style scoped>
.nav-bar {
    background-color: #64c6cb;
}
.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    height: 30px;
    padding: 20px;
}
p {
    text-align: center;
    color: black;
}
</style>

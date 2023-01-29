<template>
  <button @click="onClick" class="buttonlogOut"> LogOut</button>
  <p data-item='Rohit'>Fake Shop</p>
  <ul class="nav justify-content-center">

    <li class="nav-item">

      <router-link to="productsList" class="nav-item nav-link" active-class="active" exact>
        Products
      </router-link>
    </li>


    <li class="nav-item">

      <router-link to="profile" class="nav-item nav-link" active-class="active" exact>
      Profile
      </router-link>
    </li>
    <li class="nav-item">

      <router-link to="about" class="nav-item nav-link" active-class="active" exact>
        About
      </router-link>
    </li>

    <li class="nav-item">
    

    
      </li>
  </ul>
</template>



<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import VueRouter from 'vue-router'
export default defineComponent({
  name: 'NavBar',
  setup(){
    const onClick= () =>{
      localStorage.removeItem('access_token'); 
      router.push('login')
     }
     return{
      onClick,
     }
  }
});

 
</script>


<style scoped>
.nav-link {
  color: rgb(66, 65, 65);
}

p {
  margin: 16px;
  font-size: 80px;
  color: #ccc;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 1s ease-in-out;
  position: relative;
  text-align: center;
}
.buttonlogOut{
  border-style: none;
    border-radius: 5px;
    background-color: #FFE6D4;
    padding: 8px 20px;
    font-family: 'system-ui';
    text-transform: uppercase;
    letter-spacing: .8px;
    display: block;
    margin: auto;
margin-left:80%;
    margin-top: 10px;
    box-shadow: 2px 2px 5px rgb(0,0,0,0.2);
    cursor: pointer;
}
</style>
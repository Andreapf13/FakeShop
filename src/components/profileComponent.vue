<template>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4">
            <div class=" image d-flex flex-column justify-content-center align-items-center"> <button
                    class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100"
                        width="100" /></button> <span class="name mt-3">{{ data.name }}</span>

                <div class=" px-2 rounded mt-4 date "> <span class="join">Joined May,2021</span> </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

body {
    background-color: #000
}

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}
</style>

<script lang="ts">
import { defineComponent, onMounted} from 'vue';
import router from '@/router';
import axios from 'axios';
import {ref}from 'vue';
export default defineComponent({
    name: 'profileComponent',
    setup() {
        const data = ref([])
        const getItems = async () => {
            const access_token = localStorage.getItem('access_token');
            const config = {
                headers: { Authorization: `Bearer ${access_token}` }
            };
            const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",config);
            data.value = response.data;
        }
        //Cuando arranque que llame a getItems y así cargue todo por defecto y no aparezca vacío. A parte de comprobar getItems comprobamos 

        onMounted(() => {
            const access_token = localStorage.getItem('access_token');
            //si no tenemos nada volvemos al login.
            if (!access_token) {
                router.push('/login')
            }
            getItems()
        })
        return {
data,
        }
    }


})
</script>

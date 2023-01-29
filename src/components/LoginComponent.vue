<template>
  <div class=" container " >
    <form  id="login_form" class="form_class" @submit="onSubmit">
      <div class="form_div">
      <label class="form-label">Email </label>
      <input v-model="email.value" :ref="email.ref" type="email"  placeholder="Email " d="form2Example1" class="field_class" />
      <p v-if="email.error">{{ email.error.message }}</p>
      </div>
      <div class="passwordcontainer">
      <label class="form-label">Password</label>
      <input v-model="password.value" :ref="password.ref" type="password"  placeholder="password"  d="form2Example2" id="pass" class="field_class"  />
      <p v-if="password.error">{{ password.error.message }}</p>
      <div class="info_div"> </div>
    </div>
      <button type="submit" class="submit_class"  > Submit</button>
    </form>
  </div>
  </template>
  <style scoped>
.container{
  margin-top: 50px;
}
  * {
    padding: 0 auto ;
    margin: 0 auto ;

}
body {
    background-color: lightgreen;
}
header {
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    box-shadow: 5px 5px 10px rgb(0,0,0,0.3);
}
h1 {
    letter-spacing: 1.5vw;
    font-family: 'system-ui';
    text-transform: uppercase;
    text-align: center;
}
main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    width: 100%;
    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mountains-1412683.svg/1280px-Mountains-1412683.svg.png) no-repeat center center;
    background-size: cover;
}
.form_class {
    width: 500px;
    padding: 40px;
    border-radius: 8px;
    background-color: white;
    font-family: 'system-ui';
    box-shadow: 5px 5px 10px rgb(0,0,0,0.3);
}
.form_div {
    text-transform: uppercase;
}
.form_div > label {
    letter-spacing: 3px;
    font-size: 1rem;
}
.info_div {
    text-align: center;
    margin-top: 20px;
}
.info_div {
    letter-spacing: 1px;
}
.field_class {
    width: 100%;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    padding: 5px 0px;
    text-indent: 6px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'system-ui';
    font-size: 0.9rem;
    letter-spacing: 2px;
}
.submit_class {
    border-style: none;
    border-radius: 5px;
    background-color: #FFE6D4;
    padding: 8px 20px;
    font-family: 'system-ui';
    text-transform: uppercase;
    letter-spacing: .8px;
    display: block;
    margin: auto;
    margin-top: 10px;
    box-shadow: 2px 2px 5px rgb(0,0,0,0.2);
    cursor: pointer;
}

  </style>
  
  <script>
  import {defineComponent} from 'vue'
  import { useForm } from 'vue-hooks-form'
  import axios from 'axios'
  import router from '@/router'

  export default defineComponent({
    name: 'LoginComponent',
    setup() {
      const { useField, handleSubmit } = useForm({
        defaultValues: {},
      })
      const email = useField('email', {
        rule: { required: true },
      })
      const password = useField('password', {
        rule: {
          required: true,
  
          min: 6,
          max: 10,
        },
      })
      const onSubmit = async (data) => {
        console.log({
          username: data.email,
          password: data.password
        })
  
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login",
          {
            email: data.email,
            password: data.password
          }
        );
        console.log(response)
        if(response.status===201){
            localStorage.setItem('access_token',response.data.access_token);
            router.push('/productsList')
        }
        
      }                                                             
      return {
        email,
        password,
        onSubmit: handleSubmit(onSubmit),
      }
    },
  })


  </script>
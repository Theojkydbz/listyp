<template>
  <div id="app">
    <Navbar/>
      <div class="page-wrapper">
        <router-view />
      </div>
    <MyFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar.vue'
import MyFooter from '@/components/shared/MyFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MyFooter
  },
  computed:{
    isAuthResolved(){
      return this.$store.state.auth.isAuthResolved
    }
  },
  created () {
    this.$store.dispatch('auth/getAuthUser')
  }
}
</script>


<style>

html {
  font-family: Poppins;
  text-align: center;
  color: #023047;
  margin-top: 0;
  background-color: #FAFAFA;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after{
  box-sizing: border-box;
  margin: 0;
}


section{
  margin-top: 5vh;
}

.page-wrapper {
  min-height: 70vh;
  margin-inline: 10vw;
  margin-top: 7vw;
}

a{
  text-decoration:none; 
  color: inherit;
}

h1{
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  
  margin-top: 20px;
  margin-bottom: 20px;
}
h2{
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
}
h3{
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
}
h4{
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}
h5{
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.08em;
  text-align: left;

  text-transform: uppercase;
}
p{
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
p.small{
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}

.centered{
  text-align: center;
}

</style>

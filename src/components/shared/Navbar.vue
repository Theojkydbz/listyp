<template>
        <div class="head">
            <div class="navbar-left">
                <router-link :to="'/'" >
                <div class="logo-label">
                    <img class="logohead" alt="Listyp logo" src="">
                </div>
                </router-link>
            </div>

            <div v-if="user" class="navbar-right">
                <div class="dropdown">
                    <p class="dropbtn">Welcome {{user.firstname}} {{user.surname}} <img class="icon" src="@/assets/expand.svg" alt=""></p>
                    <div class="dropdown-content">
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="" @click.prevent="logout">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
            
            <div v-else class="navbar-right">
                <div v-if="main()">
                    <p>already have an account?</p>
                    <router-link to="/login">Login</router-link>
                </div>
                <div v-else>
                    <p>Don't have an account?</p>
                    <router-link to="/">Register</router-link>
                </div>
            </div>
        
        </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
      name: 'MaterialIcons',
    computed:{
      ...mapGetters({
        'user': 'auth/authUser'
      }),
    },
    methods:{
        logout () {
        this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon{
    width: 1rem;
}
.head{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height: 13vh;

    margin-inline: 10vw;
    padding-top: 5vw;
    padding-bottom: 2vw;
    .navbar-right{
        display: flex;
        flex-direction: row;
        p{
            display: inline
        }
        a{
            margin-left:20px;
        }
    }
}



.dropbtn {
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;

}

.dropdown {
    position: relative;
    display: inline-block;

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        border-radius: 10px;

        min-width: 100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            margin:0px;
            border-radius: 10px;
        }
        a:hover{
            background-color: #FAFAFA;
        }
        
    }
}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #ffffff;}
</style>
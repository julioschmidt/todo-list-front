<template>
    <div id="app">
        <div class="header">

            <img alt="STW logo" class="logo-header" src="../../assets/logo.png"  height="50" />

            <div v-if="loggedIn" class="filler-login"></div>
            <div v-if="!loggedIn" class="filler-logout"></div>

            <ul class="nav">
            <!-- <li><a href="/">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Register</a></li> -->
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'app' }">App</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
            <li v-if="!loggedIn"><router-link :to="{ name: 'register' }">Register</router-link></li>
            <li v-if="loggedIn"><router-link :to="{ name: 'logout' }">Logout</router-link></li>
            </ul>
            
        </div>
        
        <transition name="router-animation" 
                    enter-active-class="animated fadeIn" 
                    leave-active-class="animated fadeOut">

          <router-view></router-view>

        </transition>

    </div>
</template>

<script>

export default {
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    }
}

</script>

<style lang="scss">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 24px;
        height: 100vh;
    }

    .flex-center {
        display: flex;
        justify-content: center;
    }

    .header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #eef5fa;
        border-bottom: 1px solid lightgray;
        margin-bottom: 24px;

    }

    .nav {
        display: flex;
        list-style: none;
        padding: 15px 0;
        margin: 0;
        justify-content: flex-end;
        
    }

    .nav a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
        &:hover {
          color: darken(#636b6f, 20%);
        }       
    }

    ul li:hover {
      transform: scale(1.1);
    }

    .filler-login {
      padding-right: 550px;
    }

    .filler-logout {
      padding-right: 500px;
    }


    label {
        display: block;
        margin-bottom: 4px;
      }

  .login-heading {
    margin-bottom: 16px;
  }
  .form-control {
    margin-bottom: 24px;
  }
  .mb-more {
    margin-bottom: 42px;
  }
  .login-form {
    max-width: 500px;
    margin: auto;
  }

  .login-input {
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    outline: 0;
    border-radius: 3px;
    border: 1px solid lightgrey;
  }

  .btn-submit {
    width: 100%;
    padding: 14px 12px;
    font-size: 18px;
    font-weight: bold;
    background: darkblue;
    color: white;
    border-radius: 3px;
    cursor: pointer;

     &:hover {
      background: darken(darkblue, 10%);
    }

     &:disabled {
      background: lighten(darkblue, 25%);
      cursor: not-allowed;
    } 
  }

  .server-error {
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    color: #a94442;
    background: #F3DEDE;
    border-radius: 4px;
  }

  .success-message {
    background-color: #dff0d8;
    color: #3c763d;
    margin-bottom: 12px;
    font-size: 16px;
    padding: 10px 16px;
    border-radius: 4px;
  }


  //Spinner
  .lds-ring-container {
    position: absolute;
    right: 50%;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
<template>

    <div class="login-form">
        <h2 class="login-heading">Register</h2>

        <form action="#" @submit.prevent="register">

            <!-- <div v-if="successMessage" class="success-message">{{ successMessage }}</div> -->

            <div v-if="serverErrors" class="server-error">
                <div v-for="(value, key) in serverErrors" :key="key" >{{ value[0] }}</div>
            </div>
            

            <div class="form-control">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="login-input" v-model="name">
            </div>

            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="login-input" v-model="email">
            </div>

            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="login-input" v-model="password">
            </div>

            <div class="form-control">
                <button type="submit" class="btn-submit">Register</button>
            </div>


        </form>

    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                serverErrors: '',
                successMessage: '',
            }
        },

        methods: {
            register() {
                this.$store.dispatch('registerUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                    .then(response => {
                        this.successMessage = 'Usuário Registrado com sucesso!'
                        this.$store.dispatch('defineSuccessMessage', {
                            successMessage: this.successMessage
                        })
                        this.$router.push({name: 'login'})
                    })
                    .catch(error => {
                        this.serverErrors = Object.values(error.response.data.errors)
                    })
            }
        }
    }
</script>
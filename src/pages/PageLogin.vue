<template>

    <div class="box">
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <Form @submit="handleLogin">
              <div class="field">
                <div class="control">
                    <Field  name="email" :rules="validateEmail"
                            class="input is-large"
                            type="email"
                            placeholder="Your Email"
                            autofocus=""
                            autocomplete="email"/>
                    <ErrorMessage name="email" />

                    
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <Field  name="password"
                            class="input is-large"
                            type="password"
                            placeholder="Your Password"
                            autocomplete="current-password"/>
                    
                </div>
              </div>
              <button 
                        class="button is-block is-info is-large is-fullwidth">
                        Login</button>
            </Form>
          </div>
</template>

<script>
</script>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

    export default {
        components: {
            Form,
            Field,
            ErrorMessage,

        },
        methods: {
            handleLogin(values){
                this.$store.dispatch('auth/loginWithEmailAndPassword', values)
                  .then(() => this.$router.push('/home'))
                  .catch(errMessage => {
                    this.$toasted.error(errMessage, {duration: 5000})
                  })
            },
            validateEmail(value) {
                // if the field is empty
                if (!value) {
                    return 'This field is required';
                }
                // if the field is not a valid email
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'This field must be a valid email';
                }
                // All is good
                return true;
            },
        }
    }
</script>

 <style scoped>
  
</style>
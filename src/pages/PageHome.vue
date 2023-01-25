<template>
  <div>
    <section>
      <h3>🎉 Welcome</h3>
      <p>
        We're adding people gradually. if you don't yet have an
        <b>invite passcode</b> please come back when someone gives you one
      </p>

      <div>
            <figure class="avatar">
                <img src="https://placehold.it/128x128">
            </figure>
            <Form @submit="handleRegister">
              <div class="field">
                <div class="control">
                    <Field  name="firstname"
                            class="input is-large"
                            type="text"
                            placeholder="Firstname"/>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <Field  name="surname"
                            class="input is-large"
                            type="text"
                            placeholder="Surname"/>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <Field  name="email"
                            class="input is-large"
                            type="email"
                            placeholder="Your Email"/>

                </div>
              </div>
              <div class="field">
                <div class="control">
                    <Field  name="password"
                            class="input is-large"
                            type="password"
                            placeholder="Your Password"
                            autocomplete="new-password"/>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <Field  name="passwordConfirmation"
                            class="input is-large"
                            type="password"
                            placeholder="Password Confirmation"
                            autocomplete="off"/>

                </div>
              </div>
              <button   
                        type="submit" 
                        class="button is-block is-info is-large is-fullwidth">
                        Register</button>
            </form>
          </div>
    </section>
  </div>
</template>

 <script>
 import { Form, Field } from 'vee-validate';

export default {
    components: {
        Form,
        Field,
    },
    methods: {
        handleRegister(values){
            this.$store.dispatch('auth/registerUser', values)
                .then(() => this.$router.push('/login'))
                .catch((errMessage ) => {
                this.$toasted.error(errMessage , {duration: 5000})
            })
        }
    }
}
   
</script>
<style lang="scss" scoped>
</style>

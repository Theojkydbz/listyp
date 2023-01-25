<template>
  <div class="box">
    <h2>Liste tes 3 film prefere</h2>
    <Form class="lister">
      <Field  name="Item1"
              class="list"/>
      <Field  name="Item2"
              class="list"/>
      <Field  name="Item3"
              class="list"/>
      <button 
              class="button list">
              Send</button>
    </Form>
  </div>
</template>

 <script>
 import { Form, Field,  } from 'vee-validate';

        export default {
        components: {
            Form,
            Field,

        },
        methods: {
            createList(values){
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
<style lang="scss" scoped>
.lister{
  display: flex;
  flex-direction: column;
  
}
.list{
  height: 50px;
  margin-bottom: 1rem;
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  border-radius: 10px;
}
.button{
  background: #1c35a3;
  color: #ECECEC;
  font-size: 1rem;
  font-weight: 600;
}
</style>

<template>
  <div class="notFoundContainer">
    <div class="m-b-xxl">
      <h2 class="title">{{title}}</h2>
    </div>
    <h2 class="subtitle">{{status}}<span> 😣</span></h2>
        <router-link :to="{name: navigateToPage}" class="button is-primary">{{navigateToText}}</router-link>

  </div>
</template>

<script>
  export default {
    props: {
      title: {
        required: true,
        type: String
      },
      status: {
        required: true,
        type: String
      },
      navigateToPage: {
        required: true,
        type: String
      },
      navigateToText: {
        required: true,
        type: String
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 40px;
  }
  .subtitle {
    text-align: center;
  }
  .notFoundContainer {
    margin-top: 80px;
  }
</style>
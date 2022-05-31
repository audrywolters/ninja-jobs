<template>
  <h1>Job Detail Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props: ['id']
    // props replaces data (make sure to set props: true in index)
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>
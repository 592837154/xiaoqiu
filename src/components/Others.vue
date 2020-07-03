<template>
  <div class="aaa">
    1111
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aaa{
  display: flex;
    width: 50%;
    margin: 0 auto;
}
</style>

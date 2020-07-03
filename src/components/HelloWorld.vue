<template>
  <div class="aaa">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" v-on:click="getData">百度一下</el-button>
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
  },
  methods: {
    getData: function() {
      this.axios.get('http://localhost:8081').then(response => {
        console.log('response.data');
        console.log(response.data);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aaa {
  display: flex;
  width: 50%;
  margin: 0 auto;
}
</style>

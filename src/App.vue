<template>
  <div id="app">
    <div class="aaa">
      <router-link to="/HelloWorld">页面1</router-link>
      <router-link to="/Others">页面2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.aaa {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}
</style>

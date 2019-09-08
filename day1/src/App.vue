<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
  }
  .nav{
    width: 100%;
    height: 1rem;
    background: #000;
    color:#ccc;
  }
  .nav a{
      display: inline-block;
      width: 24%;
      height: 100%;
      text-align: center;
      line-height: 1rem;
      text-decoration: none;
      color:#ccc;
  }
  .active{
      background: rgb(53, 53, 53);
      color:#fff;
  }
</style>

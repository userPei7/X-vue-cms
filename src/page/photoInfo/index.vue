<template>
  <div class="poto-container">
   <h3>{{ photoinfo.title }}</h3>
   <p class="subtile">
     <span>发表时间:{{ photoinfo.add_time | dateFormat }}</span>
     <span>点击: {{ photoinfo.click }}次</span>
   </p>
   
  </div>
</template>

<script>
  
</script>

<style>

</style>
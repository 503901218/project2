<template>
  <div>
    <head-button style="height: 8vh"/>
    <div class="about" style="height: 76vh;overflow-y: auto">
      <about-table/>
    </div>
  </div>

</template>
<script>
import AboutTable from "@/components/pages/AboutComponents/AboutTable";
import headButton from "@/components/pages/AboutComponents/headButton";
export default {
  name:'About',
  components:{
    AboutTable,
    headButton,
  }
}
</script>
<style scoped>
 .about{
   height: 100%;
   background-color: orange;
 }

</style>
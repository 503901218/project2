<template>
  <div>
<!--    <p>home</p>-->
    <home-table id="homeTable">123</home-table>
    <home-charts>2131</home-charts>
  </div>
</template>

<script>
import homeTable from './homeComponents/homeTable';
import homeCharts from "@/components/pages/homeComponents/homeCharts";
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components:{
    homeTable,
    homeCharts
  }
}
</script>
<style scoped>
#homeTable{
  width: 100%;
  height: 30%;

  padding-bottom: 10px;
  /*overflow: scroll;*/
}
</style>

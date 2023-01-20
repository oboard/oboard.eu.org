<script setup lang="ts">
// import china from '@/assets/china.json'
import china from "@/assets/china.json";

const { $eChart } = useNuxtApp();
const myMap = ref<HTMLElement>();

// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  $eChart.registerMap("CHINA", JSON.stringify(china), {});
  const myChart = $eChart.init(myMap.value!);
  // 指定图表的配置项和数据
  const option = {
    title: {
      text: "中国地图",
      subtext: "来自DataV.GeoAtlas",
      left: "right",
    },
    series: [
      {
        name: "中国地图",
        type: "map",
        data: [],
        map: "CHINA",
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
});
</script>

<template>
  <div>
    <div id="myMap" ref="myMap" style="width: 600px; height: 600px"></div>
  </div>
</template>

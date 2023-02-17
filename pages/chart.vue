<template>
    <div>
        <v-chart class="chart" :option="option" autoresize />
    </div>
</template>

<script>
import * as echarts from 'echarts';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

/* use([
  echarts
]); */

//------------
const myOptions={
  title: {
    text: 'Pasta Grafik',
    subtext: 'pasta',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 200, name: 'Aile' },
        { value: 150, name: 'Yaşam' },
        { value: 100, name: 'Geçimsizlik' },
        { value: 100, name: 'Sevgi' },
        { value: 50, name: 'Şiddet' },
        { value: 350, name: 'Ekonomi' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
//------------
export default defineComponent({
    name: 'HelloWorld',
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'light',
    },
    setup() {
    const option = ref(myOptions);

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
<template>
    <v-chart :style="options.style" class="chart" :option="option" autoresize />
</template>

<script>
import * as echarts from 'echarts';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, defineComponent } from 'vue';

/* use([
  echarts
]); */

//------------

//------------
export default defineComponent({
    name: 'HelloWorld',
    props:["options"],
    components: {
        VChart,
    },
    provide: {
        [THEME_KEY]: 'light',
    },
    setup({options}) {
        const myOptions={
            title: {
                text: options.text,
                subtext: options.subtext,
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
                data: options.data,
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
        const option = ref(myOptions);
        return { option };
    },
});
</script>

<style scoped>
.chart{
    height: 200px;
}
</style>
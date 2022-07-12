<!-- <template>
    <div>
        <div id="activeLine" style="width:600px;height:400px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'ActiveLine',
    data() {
        let data = []
        var now = new Date(2022, 6, 7);
        var onDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;
        for (let i = 0; i < 20; i++) {
            // new Date().getTime()获取方法的返回值一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数
            now = new Date(now.getTime() + onDay);
            value = value + Math.random() * 21;
            data.push({
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            })
        }
        return {
            now: new Date(2022, 6, 7),
            onDay: 24 * 3600 * 1000,
            data:[],
            option: {
                title: {
                    text: '动态折线图'
                },
                // 图标离容器的距离
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    // 如果containLabel为true，那么前几行的位移就是包括了坐标轴标签在内的所有内容所形成的矩形的位置，如果为false，仅位移内容不包括坐标轴
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'time',
                        // 网格线是否显示
                        splitLine: {
                            show: false
                        },

                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        // 坐标轴留白（此处不留白）
                        boundaryGap: [0, '100%']
                    }
                ],
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        data = params[0].data.value
                        let x = data[0]
                        let y = data[1]
                        return `时间：${x}-值：${y}`
                    }
                },
                series: [
                    {
                        // 因为只有一条线，所以只一个obj就行了
                        name: '股票数据',   // 鼠标悬浮上时显示文字
                        type: 'line',
                        // 数据用一个二维数组表示。如下，每一列被称为一个『维度』。此时xAxis与yAxis中data可以没有值
                        data: data
                    }
                ]
            }
        }
    },
    created() {

    },
    mounted() {
        this.ActiveLine = echarts.init(document.getElementById('activeLine'));
        ActiveLine.setOption(this.option);
        // setInterval(()=>{
        //     this.option.series[0].data.shift();
        // },1000)
    },
    watch: {
        option: {
            handler() {
                this.option.series[0].data.push({

                })
            },
            deep: true
        }
    }
}
</script>

<style>
</style> -->

<template>
    <div id="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'ActiveLine',
    data() {
        return {
            // 实时数据数组
            t1:123,
            t2:this.t1,
            date: [],
            yieldRate: [],
            yieldIndex: [],
            // 折线图echarts初始化选项
            echartsOption: {
                legend: {
                    data: ['实际收益率', '大盘收益率'],
                },
                xAxis: {
                    name: '时间',
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    },
                    type: 'category',
                    boundaryGap: false,
                    data: this.date,	// 绑定实时数据数组
                },
                yAxis: {
                    name: '实际收益率',
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    },
                    type: 'value',
                    scale: true,
                    boundaryGap: ['15%', '15%'],
                    axisLabel: {
                        interval: 'auto',
                        formatter: '{value} %'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                },
                series: [
                    {
                        name: '实际收益率',
                        type: 'line',
                        // 是否平滑曲线显示
                        smooth: true,
                        data: this.yieldRate,	// 绑定实时数据数组
                    },
                    {
                        name: '大盘收益率',
                        type: 'line',
                        smooth: true,
                        data: this.yieldIndex,	// 绑定实时数据数组
                    }
                ]
            }
        }
    },
    mounted() {
        // 放在this上，虽然没有响应式，但我们可以手动给myChar配置新的options，在计时器里
        this.myChart = echarts.init(document.getElementById('myChart'), 'light');	// 初始化echarts, theme为light
        this.myChart.setOption(this.echartsOption);	// echarts设置初始化选项
        setInterval(this.addData, 3000);	// 每三秒更新实时数据到折线图
    },
    methods: {
        // 获取当前时间
        getTime: function () {
            var ts = arguments[0] || 0;
            var t, h, i, s;
            t = ts ? new Date(ts * 1000) : new Date();
            h = t.getHours();
            i = t.getMinutes();
            s = t.getSeconds();
            // 定义时间格式
            return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
        },
        // 添加实时数据
        addData: function () {
            // 从接口获取数据并添加到数组
                this.yieldRate.push((Math.random() * 100).toFixed(3));
                this.yieldIndex.push((Math.random() * 100).toFixed(3));
                this.date.push(this.getTime(Math.round(new Date().getTime() / 1000)));
                // 重新将数组赋值给echarts选项
                this.echartsOption.xAxis.data = this.date;
                this.echartsOption.series[0].data = this.yieldRate;
                this.echartsOption.series[1].data = this.yieldIndex;
                this.myChart.setOption(this.echartsOption);
        }
    }
}
</script>

<style>
/*设定宽高，不然超出windows会显示不出来 */
#myChart {
    width: 100%;
    height: 500px;
    margin: 0 auto;
}
</style>

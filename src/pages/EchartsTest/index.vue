<template>
    <div>
        <div style="display:flex;justify-content:space-around;flex-wrap:wrap;">
            <!-- 树状图与堆叠图 -->
            <div id="demo1" style="width:600px;height:500px;">我是echarts</div>
            <div id="demo2" style="width:600px;height:400px;"></div>
            <router-view></router-view>
        </div>
        <div class="button_group">
            <button @click="changeOptions">修改图表数据</button>
            <button @click="$router.push('/echarts/activeline')">展示折线图</button>
            <button @click="$router.push('/echarts')">回到最开始</button>
        </div>
    </div>

</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'EchartsTest',
    data() {
        return {
            option1: {
                // 标题
                title: {
                    text: 'ECharts 入门示例'
                },
                // 图例组件
                legend: {
                    left: '75%',
                    top: '25%',
                    right: '25%',
                    bottom: "25%"
                },

                toolbox: {
                    show: true,
                    // 各工具配置项，除了内置的，还可以自定义
                    feature: {
                        // 缩放相关
                        dataZoom: {
                            yAxisIndex: 'none',
                            // 自定义缩放显示字体
                            title: {
                                zoom: '快去缩放',
                                back: '快返回缩放'
                            }
                        },
                        // 数据视图
                        dataView: { readOnly: false },
                        // 动态切换图的类型
                        magicType: { type: ['line', 'bar'] },
                        // 配置项还原
                        restore: {},
                        // 保存为图片
                        saveAsImage: {}
                    }
                },

                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            },
            // 渐变堆叠面积图
            option2: {
                // 调色盘颜色列表，好像是legend的颜色，如果单个series没设置颜色的话就按这个
                color: ['rgb(128, 255, 165)', 'rgb(0, 221, 255)', 'rgb(55, 162, 255)', 'rgb(255, 0, 135)', 'rgb(255, 191, 0)'],
                // color :['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                    text: 'Gradient Stacked Area Chart'
                },
                legend: {
                    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
                    left: '50%'
                },
                // 鼠标悬浮在上面时展示的东西
                tooltip: {
                    // 坐标轴触发
                    trigger: 'axis',
                    // 对于数值轴、时间轴，如果开启了 snap，则 axisPointer 会自动吸附到最近的点上
                    axisPointer: {
                        // 十字准星指示器
                        type: 'cross'
                    },
                },
                // 坐标轴指示器是指示坐标轴当前刻度的工具，在图表的左边显示具体数值
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    // 如果containLabel为true，那么前几行的位移就是包括了坐标轴标签在内的所有内容所形成的矩形的位置，如果为false，仅位移内容不包括坐标轴
                    containLabel: true
                },
                // 绘制图表
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        // 开启堆叠，堆起来漏出自己的，其他人盖在他上面，数据堆叠，同个类目轴上系列配置相同的 stack 值可以堆叠放置
                        // stack叫 Total 的line会被堆叠
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        // 区域填充样式1，设置后显示成区域面积图
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(128, 255, 165)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(1, 191, 236)'
                                }
                            ])
                            // color:'#000'
                        },
                        // 折线图的高亮状态
                        emphasis: {
                            // 在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果
                            focus: 'series'
                        },
                        data: [140, 232, 101, 264, 90, 340, 250]
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(0, 221, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(77, 119, 255)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 282, 111, 234, 220, 340, 310]
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(55, 162, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(116, 21, 219)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 132, 201, 334, 190, 130, 220]
                    },
                    {
                        name: 'Line 4',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 0, 135)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(135, 0, 157)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 402, 231, 134, 190, 230, 120]
                    },
                    {
                        name: 'Line 5',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 191, 0)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(224, 62, 76)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 302, 181, 234, 210, 290, 150]
                    }]
            }
        }
    },
    methods: {
        changeOptions() {
            this.option1 = {
                // 标题
                title: {
                    text: 'ECharts 入门示例2'
                },
                // 鼠标悬浮在图标上的样子
                tooltip: {
                    trigger: 'axis',
                    // 鼠标悬浮上要展示什么样的动画效果
                    axisPointer: {
                        type: 'cross'
                    },
                },
                // 图例组件
                legend: {
                    left: '75%',
                    top: '25%',
                    right: '25%',
                    bottom: "25%"
                },

                toolbox: {
                    show: true,
                    // 各工具配置项，除了内置的，还可以自定义
                    feature: {
                        // 缩放相关
                        dataZoom: {
                            yAxisIndex: 'none',
                            // 自定义缩放显示字体
                            title: {
                                zoom: '快去缩放',
                                back: '快返回缩放'
                            }
                        },
                        // 数据视图
                        dataView: { readOnly: false },
                        // 动态切换图的类型
                        magicType: { type: ['line', 'bar'] },
                        // 配置项还原
                        restore: {},
                        // 保存为图片
                        saveAsImage: {}
                    }
                },

                xAxis: [
                    // 一级x轴（最里面）
                    {
                        type: 'category',
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']

                    },
                    // 二级X轴
                    {
                        type: 'category',
                        position: 'bottom',
                        offset: 25,
                        // 指示器类型，鼠标悬浮到二级X轴上时
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: ['省份1', '省份2']
                    },
                    {
                        type: 'category',
                        position: 'bottom',
                        offset: 45,
                        axisPointer: {
                            type: 'none'
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        data: ['季度']
                    }
                ],
                yAxis: {},
                // 图标下面的类似视频进度条的东西
                dataZoom: [
                    {
                        // 这个是指在图表里面拖动的
                        type: 'inside',
                        // 设置 dataZoom-inside 组件控制的 x轴,控制xAxis中的前两层x轴
                        xAxisIndex: [0, 1],
                        start: 20,
                        end: 100
                    },
                    {
                        type: 'slider',
                        show: true,
                        // 设置 dataZoom-inside 组件控制的 x轴,控制xAxis中的前两层x轴
                        xAxisIndex: [0, 1],
                        top: '95%',
                        start: 98,
                        end: 100
                    }
                ],
                series: [
                    {
                        name: '销量2',
                        type: 'bar',
                        data: [500, 200, 360, 100, 100, 200]
                    }
                ]
            }
            // 因为echarts是在mounted上面挂载的，数据响应式也必须要经历mounted才能更新，
        }
    },
    mounted: function () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('demo1'));
        // 绘制图表
        myChart.setOption(this.option1);

        // 渐变堆叠面积图
        var myChart2 = echarts.init(document.getElementById('demo2'), 'dark');
        // 绘制图标
        myChart2.setOption(this.option2)
    },
    watch: {
        // 由于图表是在mounted上挂的，每次更新视图都改不到那里，所以需要监视一下挂上最新的
        option1: function () {
            var myChart = echarts.init(document.getElementById('demo1'));
            // 绘制图表
            myChart.setOption(this.option1);
        }
    }

}
</script>

<style>
</style>
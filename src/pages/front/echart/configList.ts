import {axisPointer, legend, series, title, toolTip, xAxis, yAxis} from "pages/front/echart/data";

export const configList = [
    {
        label: 'title',
        icon: 'settings',
        desc: '标题',
        children: title
    },
    {
        label: 'legend',
        icon: 'settings',
        desc: '图例',
        children: legend
    },
    {
        label: 'xAxis',
        icon: 'settings',
        desc: 'X 轴',
        children: xAxis
    },
    {
        label: 'yAxis',
        icon: 'settings',
        desc: 'Y 轴',
        children: yAxis
    },
    {
        label: 'tooTip',
        icon: 'settings',
        desc: '提示框',
        children: toolTip
    },
    {
        label: 'axisPointer',
        icon: 'settings',
        desc: '坐标轴指示器',
        children: axisPointer
    }, {
        label: 'series',
        icon: 'settings',
        desc: 'series',
        children: series
    },

];
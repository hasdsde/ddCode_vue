export const title = [
    {
        label: 'title.id',
        desc: 'id',
        type: 'string',
        default: "' '",
    },
    {
        label: 'title.show',
        type: 'boolean',
        default: true,
        desc: '是否展示标题',
    },
    {
        label: 'title.text',
        type: 'string',
        default: "''",
        desc: '主标题文本',
    },
    {
        label: 'title.link',
        type: 'string',
        default: "''",
        desc: '超链接',
    },
    {
        label: 'title.target',
        type: 'string',
        default: "blank",
        desc: '指定窗口',
        option: ['blank', 'self']
    },
    {
        label: 'title.textStyle',
        icon: 'settings',
        desc: '文字样式',
        children: [
            {
                label: 'title.textStyle.fontStyle',
                type: 'option',
                default: 'normal',
                desc: '字体的风格。',
                option: ['normal', 'italic', 'oblique']
            },
            {
                label: 'title.textStyle.fontWeight',
                type: 'string | number',
                default: 'bolder',
                desc: '字体的粗细。',
                option: ['normal', 'bold', 'bolder', 'lighter']
            },
            {
                label: 'title.textStyle.fontFamily',
                type: 'string',
                default: 'bolder',
                desc: '字体',
                option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
            },
            {
                label: 'title.textStyle.fontSize',
                type: 'number',
                default: '18',
                desc: '字体大小',
            }, {
                label: 'title.textStyle.lineHeight',
                type: 'number',
                default: '""',
                desc: '行高',
            }, {
                label: 'title.textStyle.width',
                type: 'number',
                default: '""',
                desc: '宽度',
            }, {
                label: 'title.textStyle.height',
                type: 'number',
                default: '""',
                desc: '高度',
            }, {
                label: 'title.textStyle.textBorderColor',
                type: 'string',
                default: '""',
                desc: '描边颜色',
            }, {
                label: 'title.textStyle.textBorderWidth',
                type: 'string',
                default: '""',
                desc: '描边宽度',
            }, {
                label: 'title.textStyle.textBorderType',
                type: 'string',
                default: 'solid',
                desc: '描边风格',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'title.textStyle.textBorderDashOffset',
                type: 'string',
                default: '""',
                desc: '虚线偏移量',
            }, {
                label: 'title.textStyle.textShadowColor',
                type: 'string',
                default: '""',
                desc: '文字阴影',
            }, {
                label: 'title.textStyle.textShadowBlur',
                type: 'string',
                default: '""',
                desc: '文字阴影长度',
            }, {
                label: 'title.textStyle.textShadowOffsetX',
                type: 'string',
                default: '""',
                desc: '文字阴影X偏移',
            }, {
                label: 'title.textStyle.textShadowOffsetY',
                type: 'string',
                default: '""',
                desc: '文字阴影Ys偏移',
            }, {
                label: 'title.textStyle.overflow',
                type: 'string',
                default: 'none',
                desc: '是否换行',
                option: ['truncate', 'break', 'breakAll']
            }, {
                label: 'title.textStyle.ellipsis',
                type: 'string',
                default: 'none',
                desc: 'truncate时，末尾显示的文本',
            }, {
                label: 'title.textStyle.rich',
                type: 'string',
                default: '""',
                desc: '自定义富文本样式',
            },

        ]
    },
    {
        label: 'title.subtext',
        type: 'string',
        default: "''",
        desc: '副标题文本',
    }, {
        label: 'title.sublink',
        type: 'string',
        default: "''",
        desc: '副标题文本超链接',
    }, {
        label: 'title.subtarget',
        type: 'string',
        default: "blank",
        desc: '指定窗口打开副标题超链接',
        option: ['blank', 'self']
    },
    {
        label: 'title.subtextStyle',
        icon: 'settings',
        desc: '文字样式',
        children: [
            {
                label: 'title.subtextStyle.color',
                type: 'string',
                default: '#aaa',
                desc: '副标题颜色',
            },
            {
                label: 'title.subtextStyle.fontStyle',
                type: 'option',
                default: 'normal',
                desc: '字体的风格。',
                option: ['normal', 'italic', 'oblique']
            },
            {
                label: 'title.subtextStyle.fontWeight',
                type: 'string | number',
                default: 'bolder',
                desc: '字体的粗细。',
                option: ['normal', 'bold', 'bolder', 'lighter']
            },
            {
                label: 'title.subtextStyle.fontFamily',
                type: 'string',
                default: 'bolder',
                desc: '字体',
                option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
            },
            {
                label: 'title.subtextStyle.fontSize',
                type: 'number',
                default: '18',
                desc: '字体大小',
            }, {
                label: 'title.subtextStyle.lineHeight',
                type: 'number',
                default: '""',
                desc: '行高',
            }, {
                label: 'title.subtextStyle.width',
                type: 'number',
                default: '""',
                desc: '宽度',
            }, {
                label: 'title.subtextStyle.height',
                type: 'number',
                default: '""',
                desc: '高度',
            }, {
                label: 'title.subtextStyle.textBorderColor',
                type: 'string',
                default: '""',
                desc: '描边颜色',
            }, {
                label: 'title.subtextStyle.textBorderWidth',
                type: 'string',
                default: '""',
                desc: '描边宽度',
            }, {
                label: 'title.subtextStyle.textBorderType',
                type: 'string',
                default: 'solid',
                desc: '描边风格',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'title.subtextStyle.textBorderDashOffset',
                type: 'string',
                default: '""',
                desc: '虚线偏移量',
            }, {
                label: 'title.subtextStyle.textShadowColor',
                type: 'string',
                default: '""',
                desc: '文字阴影',
            }, {
                label: 'title.subtextStyle.textShadowBlur',
                type: 'string',
                default: '""',
                desc: '文字阴影长度',
            }, {
                label: 'title.subtextStyle.textShadowOffsetX',
                type: 'string',
                default: '""',
                desc: '文字阴影X偏移',
            }, {
                label: 'title.subtextStyle.textShadowOffsetY',
                type: 'string',
                default: '""',
                desc: '文字阴影Ys偏移',
            }, {
                label: 'title.subtextStyle.overflow',
                type: 'string',
                default: 'none',
                desc: '是否换行',
                option: ['truncate', 'break', 'breakAll']
            }, {
                label: 'title.subtextStyle.ellipsis',
                type: 'string',
                default: 'none',
                desc: 'truncate时，末尾显示的文本',
            }, {
                label: 'title.subtextStyle.rich',
                type: 'string',
                default: '""',
                desc: '自定义富文本样式',
            },

        ]
    },
    {
        label: 'title.textAlign',
        type: 'string',
        default: "auto",
        desc: '整体水平对齐',
        option: ['auto', 'left', 'right', 'center']
    }, {
        label: 'title.textVerticalAlign',
        type: 'string',
        default: "auto",
        desc: '整体垂直对齐',
        option: ['auto', 'top', 'bottom', 'middle']
    }, {
        label: 'title.triggerEvent',
        type: 'bool',
        default: "''",
        desc: '是否触发事件',
    }, {
        label: 'title.padding',
        type: 'number | Array',
        default: "5",
        desc: '标题内边距',
    }, {
        label: 'title.itemGap',
        type: 'number',
        default: "10",
        desc: '主副标题之间的间距',
    }, {
        label: 'title.zlevel',
        type: 'number',
        default: "''",
        desc: '所有图形的 zlevel 值',
    }, {
        label: 'title.Z',
        type: 'number',
        default: "2",
        desc: 'z相比zlevel优先级更低',
    }, {
        label: 'title.left',
        type: 'string',
        default: "auto",
        desc: '距离左侧的距离',
        option: ['20', '20%', 'left', 'center', 'right']
    }, {
        label: 'title.right',
        type: 'string',
        default: "auto",
        desc: '距离右侧的距离',
        option: ['20', '20%', 'left', 'center', 'right']
    }, {
        label: 'title.top',
        type: 'string',
        default: "auto",
        desc: '距离上侧的距离',
        option: ['20', '20%', 'top', 'middle', 'bottom']
    }, {
        label: 'title.bottom',
        type: 'string',
        default: "auto",
        desc: '距离下侧的距离',
        option: ['20', '20%', 'top', 'middle', 'bottom']
    }, {
        label: 'title.backgroundColor',
        type: 'string',
        default: "transparent",
        desc: '标题背景色',
        option: ['rgb(128, 128, 128)', '#ccc']
    }, {
        label: 'title.borderColor',
        type: 'string',
        default: "transparent",
        desc: '标题的边框颜色',
        option: ['rgb(128, 128, 128)', '#ccc']
    }, {
        label: 'title.borderRadius',
        type: 'string | array',
        default: "''",
        desc: '圆角半径',
        option: ['5', '[5, 5, 0, 0]']
    }, {
        label: 'title.shadowBlur',
        type: 'number',
        default: "''",
        desc: '图形阴影的模糊大小',
    }, {
        label: 'title.shadowColor',
        type: 'string',
        default: "''",
        desc: '阴影颜色',
    }, {
        label: 'title.shadowOffsetX',
        type: 'string',
        default: "''",
        desc: '阴影水平方向上的偏移距离',
    }, {
        label: 'title.shadowOffsetY',
        type: 'string',
        default: "''",
        desc: '阴影水平方向下的偏移距离',
    },
]
export const legend = [
    {
        label: 'legend.type',
        desc: '图例的类型 普通|滚动',
        type: 'string',
        default: "' '",
        option: ['plain', 'scroll']
    },
    {
        label: 'legend.id',
        desc: 'id',
        type: 'string',
        default: "' '",
    },
    {
        label: 'legend.show',
        type: 'boolean',
        default: true,
        desc: '是否展示标题',
    },
    {
        label: 'legend.Z',
        type: 'number',
        default: "2",
        desc: 'z相比zlevel优先级更低',
    }, {
        label: 'legend.left',
        type: 'string',
        default: "auto",
        desc: '距离左侧的距离',
        option: ['20', '20%', 'left', 'center', 'right']
    }, {
        label: 'legend.right',
        type: 'string',
        default: "auto",
        desc: '距离右侧的距离',
        option: ['20', '20%', 'left', 'center', 'right']
    },
    {
        label: 'legend.top',
        type: 'string',
        default: "auto",
        desc: '距离上侧的距离',
        option: ['20', '20%', 'top', 'middle', 'bottom']
    }, {
        label: 'legend.bottom',
        type: 'string',
        default: "auto",
        desc: '距离下侧的距离',
        option: ['20', '20%', 'top', 'middle', 'bottom']
    },
    {
        label: 'legend.width',
        type: 'string',
        default: "auto",
        desc: '图例组件的宽度',
    },
    {
        label: 'legend.height',
        type: 'string',
        default: "auto",
        desc: '图例组件的高度',
    },
    {
        label: 'legend.orient',
        type: 'string',
        default: "horizontal",
        desc: '图例列表的布局朝向。',
        option: ['horizontal', 'vertical']
    },
    {
        label: 'legend.align',
        type: 'string',
        default: "auto",
        desc: '图例标记和文本的对齐',
        option: ['auto', 'left', 'right']
    },
    {
        label: 'legend.padding',
        type: 'number | array',
        default: "5",
        desc: '图例内边距',
    }, {
        label: 'legend.itemGap',
        type: 'number',
        default: "10",
        desc: '图例每项之间的间隔',
    }, {
        label: 'legend.itemWidth',
        type: 'number',
        default: "25",
        desc: '图例标记的图形宽度',
    }, {
        label: 'legend.itemHeight',
        type: 'number',
        default: "14",
        desc: '图例标记的图形高度',
    },
    {
        label: 'legend.itemStyle',
        icon: 'settings',
        desc: '文字样式',
        children: [
            {
                label: 'legend.itemStyle.color',
                type: 'Color',
                default: 'normal',
                desc: '线的颜色。',
                option: ['rgb(255,255,255)', '#fff']
            },
            {
                label: 'legend.itemStyle.borderColor',
                type: 'string',
                default: 'inherit',
                desc: '图形的描边颜色',
            },
            {
                label: 'legend.itemStyle.borderWidth',
                type: 'number',
                default: 'auto',
                desc: '宽度',
            },
            {
                label: 'legend.itemStyle.borderType',
                type: 'string|number|Array',
                default: 'inherit',
                desc: '描边类型',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'legend.itemStyle.borderDashOffset',
                type: 'number',
                default: 'inherit',
                desc: '线的类型',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'legend.itemStyle.borderCap ',
                type: 'string',
                default: 'inherit',
                desc: '用于指定线段末端的绘制方式',
            },
            {
                label: 'legend.itemStyle.borderJoin',
                type: 'string',
                default: 'inherit',
                desc: '描边风格',
                option: ['bevel', 'round', 'miter']
            },
            {
                label: 'legend.itemStyle.borderMiterLimit',
                type: 'number',
                default: 'inherit',
                desc: '用于设置斜接面限制比例',
            }, {
                label: 'legend.itemStyle.shadowBlur',
                type: 'number',
                default: '""',
                desc: '图形阴影的模糊大小',
            }, {
                label: 'legend.itemStyle.shadowColor',
                type: 'Color',
                default: '""',
                desc: '阴影颜色',
            }, {
                label: 'legend.itemStyle.shadowOffsetX',
                type: 'string',
                default: '""',
                desc: '阴影水平方向上的偏移距离。',
            }, {
                label: 'legend.itemStyle.shadowOffsetY',
                type: 'string',
                default: '""',
                desc: '阴影垂直方向上的偏移距离。',
            }, {
                label: 'legend.itemStyle.opacity',
                type: 'number',
                default: 'inherit',
                desc: '图形透明度',
            }, {
                label: 'legend.itemStyle.decal',
                type: 'Object',
                default: 'inherit',
                desc: '图形的贴花图案',
            },
        ]
    },
    {
        label: 'legend.lineStyle',
        icon: 'settings',
        desc: '图例图形中线的样式',
        children: [
            {
                label: 'legend.lineStyle.color',
                type: 'string',
                default: 'inherit',
                desc: '线的颜色',
            },
            {
                label: 'legend.lineStyle.width',
                type: 'number',
                default: 'auto',
                desc: '线宽',
            },
            {
                label: 'legend.lineStyle.type',
                type: 'string|number|Array',
                default: 'inherit',
                desc: '线的类型。',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'legend.lineStyle.dashOffset',
                type: 'number',
                default: 'bolder',
                desc: '置虚线的偏移量',
            },
            {
                label: 'legend.lineStyle.cap',
                type: 'number',
                default: '18',
                desc: '制定线段末端的绘制方式',
                option: ['butt', 'round', 'square']
            }, {
                label: 'legend.lineStyle.miterLimit',
                type: 'number',
                default: 'inherit',
                desc: '用于设置斜接面限制比例',
            }, {
                label: 'legend.lineStyle.shadowBlur',
                type: 'number',
                default: 'inherit',
                desc: '图形阴影的模糊大小',
            }, {
                label: 'legend.lineStyle.shadowColor',
                type: 'string',
                default: "''",
                desc: '阴影颜色',
            }, {
                label: 'legend.lineStyle.shadowOffsetX',
                type: 'string',
                default: "''",
                desc: '阴影水平方向上的偏移距离',
            }, {
                label: 'legend.lineStyle.shadowOffsetY',
                type: 'string',
                default: "''",
                desc: '阴影水平方向下的偏移距离',
            },
            {
                label: 'legend.lineStyle.inactiveColor',
                type: 'Color',
                default: "#ccc",
                desc: '图例关闭时的线条描边颜色',
            },
            {
                label: 'legend.lineStyle.inactiveWidth',
                type: 'number',
                default: "2",
                desc: '图例关闭时的线条宽度',
            },
        ]
    },

    {
        label: 'legend.symbolRotate',
        desc: '图形旋转角度',
        type: 'string',
        default: "inherit",
    }, {
        label: 'legend.formatter',
        desc: '用来格式化图例文本',
        type: 'string',
    }, {
        label: 'legend.selectedMode',
        desc: '图例选择的模式',
        type: 'bool',
        default: "true",
    }, {
        label: 'legend.inactiveColor',
        desc: '图例关闭时的描边颜色',
        type: 'Color',
        default: "'#ccc'",
    }, {
        label: 'legend.inactiveBorderColor',
        desc: '图例关闭时的描边粗细',
        type: 'Color',
        default: "'auto'",
    },
    {
        label: 'legend.textStyle',
        icon: 'settings',
        desc: '文字样式',
        children: [
            {
                label: 'legend.textStyle.color',
                type: 'Color',
                default: '""',
                desc: '文字的颜色。',
            },
            {
                label: 'legend.textStyle.fontStyle',
                type: 'option',
                default: 'normal',
                desc: '字体的风格。',
                option: ['normal', 'italic', 'oblique']
            },
            {
                label: 'legend.textStyle.fontWeight',
                type: 'string | number',
                default: 'bolder',
                desc: '字体的粗细。',
                option: ['normal', 'bold', 'bolder', 'lighter']
            },
            {
                label: 'legend.textStyle.fontFamily',
                type: 'string',
                default: 'bolder',
                desc: '字体',
                option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
            },
            {
                label: 'legend.textStyle.fontSize',
                type: 'number',
                default: '18',
                desc: '字体大小',
            }, {
                label: 'legend.textStyle.lineHeight',
                type: 'number',
                default: '""',
                desc: '行高',
            }, {
                label: 'legend.textStyle.width',
                type: 'number',
                default: '""',
                desc: '宽度',
            }, {
                label: 'legend.textStyle.height',
                type: 'number',
                default: '""',
                desc: '高度',
            }, {
                label: 'legend.textStyle.textBorderColor',
                type: 'string',
                default: '""',
                desc: '描边颜色',
            }, {
                label: 'legend.textStyle.textBorderWidth',
                type: 'string',
                default: '""',
                desc: '描边宽度',
            }, {
                label: 'legend.textStyle.textBorderType',
                type: 'string',
                default: 'solid',
                desc: '描边风格',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'legend.textStyle.textBorderDashOffset',
                type: 'string',
                default: '""',
                desc: '虚线偏移量',
            }, {
                label: 'legend.textStyle.textShadowColor',
                type: 'string',
                default: '""',
                desc: '文字阴影',
            }, {
                label: 'legend.textStyle.textShadowBlur',
                type: 'string',
                default: '""',
                desc: '文字阴影长度',
            }, {
                label: 'legend.textStyle.textShadowOffsetX',
                type: 'string',
                default: '""',
                desc: '文字阴影X偏移',
            }, {
                label: 'legend.textStyle.textShadowOffsetY',
                type: 'string',
                default: '""',
                desc: '文字阴影Ys偏移',
            }, {
                label: 'legend.textStyle.overflow',
                type: 'string',
                default: 'none',
                desc: '是否换行',
                option: ['truncate', 'break', 'breakAll']
            }, {
                label: 'legend.textStyle.ellipsis',
                type: 'string',
                default: 'none',
                desc: 'truncate时，末尾显示的文本',
            }, {
                label: 'legend.textStyle.rich',
                type: 'string',
                default: '""',
                desc: '自定义富文本样式',
            },

        ]
    },
    {
        label: 'legend.tooltip',
        desc: '图例的 tooltip 配置',
        type: 'Object',
        default: "''",
    },
    {
        label: 'legend.icon',
        desc: '图例项的 icon',
        type: 'icon',
        default: "''",
    }, {
        label: 'legend.data',
        desc: '图例项的图例的数据数组',
        type: 'Array',
        default: "''",
        children: [
            {
                label: 'legend.data.name',
                desc: '图例项的名称',
                type: 'string',
                default: "''",
            }, {
                label: 'legend.data.icon',
                desc: '图例项的 icon',
                type: 'icon',
                default: "''",
            },
            {
                label: 'legend.data.itemStyle',
                icon: 'settings',
                desc: '文字样式',
                children: [
                    {
                        label: 'legend.data.itemStyle.color',
                        type: 'Color',
                        default: 'normal',
                        desc: '线的颜色。',
                        option: ['rgb(255,255,255)', '#fff']
                    },
                    {
                        label: 'legend.data.itemStyle.borderColor',
                        type: 'string',
                        default: 'inherit',
                        desc: '图形的描边颜色',
                    },
                    {
                        label: 'legend.data.itemStyle.borderWidth',
                        type: 'number',
                        default: 'auto',
                        desc: '宽度',
                    },
                    {
                        label: 'legend.data.itemStyle.borderType',
                        type: 'string|number|Array',
                        default: 'inherit',
                        desc: '描边类型',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.data.itemStyle.borderDashOffset',
                        type: 'number',
                        default: 'inherit',
                        desc: '线的类型',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.data.itemStyle.borderCap ',
                        type: 'string',
                        default: 'inherit',
                        desc: '用于指定线段末端的绘制方式',
                    },
                    {
                        label: 'legend.data.itemStyle.borderJoin',
                        type: 'string',
                        default: 'inherit',
                        desc: '描边风格',
                        option: ['bevel', 'round', 'miter']
                    },
                    {
                        label: 'legend.data.itemStyle.borderMiterLimit',
                        type: 'number',
                        default: 'inherit',
                        desc: '用于设置斜接面限制比例',
                    }, {
                        label: 'legend.data.itemStyle.shadowBlur',
                        type: 'number',
                        default: '""',
                        desc: '图形阴影的模糊大小',
                    }, {
                        label: 'legend.data.itemStyle.shadowColor',
                        type: 'Color',
                        default: '""',
                        desc: '阴影颜色',
                    }, {
                        label: 'legend.data.itemStyle.shadowOffsetX',
                        type: 'string',
                        default: '""',
                        desc: '阴影水平方向上的偏移距离。',
                    }, {
                        label: 'legend.data.itemStyle.shadowOffsetY',
                        type: 'string',
                        default: '""',
                        desc: '阴影垂直方向上的偏移距离。',
                    }, {
                        label: 'legend.data.itemStyle.opacity',
                        type: 'number',
                        default: 'inherit',
                        desc: '图形透明度',
                    }, {
                        label: 'legend.data.itemStyle.decal',
                        type: 'Object',
                        default: 'inherit',
                        desc: '图形的贴花图案',
                    },
                ]
            },
            {
                label: 'legend.data.linestyle',
                icon: 'settings',
                desc: '图例图形中线的样式',
                children: [
                    {
                        label: 'legend.data.lineStyle.color',
                        type: 'string',
                        default: 'inherit',
                        desc: '线的颜色',
                    },
                    {
                        label: 'legend.data.lineStyle.width',
                        type: 'number',
                        default: 'auto',
                        desc: '线宽',
                    },
                    {
                        label: 'legend.data.lineStyle.type',
                        type: 'string|number|Array',
                        default: 'inherit',
                        desc: '线的类型。',
                        option: ['solid', 'dashed', 'dotted']
                    },
                    {
                        label: 'legend.data.lineStyle.dashOffset',
                        type: 'number',
                        default: 'bolder',
                        desc: '置虚线的偏移量',
                    },
                    {
                        label: 'legend.data.lineStyle.cap',
                        type: 'number',
                        default: '18',
                        desc: '制定线段末端的绘制方式',
                        option: ['butt', 'round', 'square']
                    }, {
                        label: 'legend.data.lineStyle.miterLimit',
                        type: 'number',
                        default: 'inherit',
                        desc: '用于设置斜接面限制比例',
                    }, {
                        label: 'legend.data.lineStyle.shadowBlur',
                        type: 'number',
                        default: 'inherit',
                        desc: '图形阴影的模糊大小',
                    }, {
                        label: 'legend.data.lineStyle.shadowColor',
                        type: 'string',
                        default: "''",
                        desc: '阴影颜色',
                    }, {
                        label: 'legend.data.lineStyle.shadowOffsetX',
                        type: 'string',
                        default: "''",
                        desc: '阴影水平方向上的偏移距离',
                    }, {
                        label: 'legend.data.lineStyle.shadowOffsetY',
                        type: 'string',
                        default: "''",
                        desc: '阴影水平方向下的偏移距离',
                    },
                    {
                        label: 'legend.data.lineStyle.inactiveColor',
                        type: 'Color',
                        default: "#ccc",
                        desc: '图例关闭时的线条描边颜色',
                    },
                    {
                        label: 'legend.data.lineStyle.inactiveWidth',
                        type: 'number',
                        default: "2",
                        desc: '图例关闭时的线条宽度',
                    },
                ]
            },
            {
                label: 'legend.data.symbolRotate',
                desc: '图形旋转角度',
                type: 'string',
                default: "inherit",
            }, {
                label: 'legend.data.formatter',
                desc: '用来格式化图例文本',
                type: 'string',
            }, {
                label: 'legend.data.selectedMode',
                desc: '图例选择的模式',
                type: 'bool',
                default: "true",
            }, {
                label: 'legend.data.inactiveColor',
                desc: '图例关闭时的描边颜色',
                type: 'Color',
                default: "'#ccc'",
            }, {
                label: 'legend.data.inactiveBorderColor',
                desc: '图例关闭时的描边粗细',
                type: 'Color',
                default: "'auto'",
            },
        ]
    },
    {
        label: 'legend.data.textStyle',
        icon: 'settings',
        desc: '文字样式',
        children: [
            {
                label: ' legend.data.textStyle.color',
                type: 'color',
                default: 'normal',
                desc: '字体的颜色。',
            },
            {
                label: ' legend.data.textStyle.fontStyle',
                type: 'option',
                default: 'normal',
                desc: '字体的风格。',
                option: ['normal', 'italic', 'oblique']
            },
            {
                label: 'legend.data.textStyle.fontWeight',
                type: 'string | number',
                default: 'bolder',
                desc: '字体的粗细。',
                option: ['normal', 'bold', 'bolder', 'lighter']
            },
            {
                label: 'legend.data.textStyle.fontFamily',
                type: 'string',
                default: 'bolder',
                desc: '字体',
                option: ['serif', 'monospace', 'Arial', 'Microsoft YaHei']
            },
            {
                label: 'legend.data.textStyle.fontSize',
                type: 'number',
                default: '18',
                desc: '字体大小',
            }, {
                label: 'legend.data.textStyle.lineHeight',
                type: 'number',
                default: '""',
                desc: '行高',
            }, {
                label: 'legend.data.textStyle.width',
                type: 'number',
                default: '""',
                desc: '宽度',
            }, {
                label: 'legend.data.textStyle.height',
                type: 'number',
                default: '""',
                desc: '高度',
            }, {
                label: 'legend.data.textStyle.textBorderColor',
                type: 'string',
                default: '""',
                desc: '描边颜色',
            }, {
                label: 'legend.data.textStyle.textBorderWidth',
                type: 'string',
                default: '""',
                desc: '描边宽度',
            }, {
                label: 'legend.data.textStyle.textBorderType',
                type: 'string',
                default: 'solid',
                desc: '描边风格',
                option: ['solid', 'dashed', 'dotted']
            },
            {
                label: 'legend.data.textStyle.textBorderDashOffset',
                type: 'string',
                default: '""',
                desc: '虚线偏移量',
            }, {
                label: 'legend.data.textStyle.textShadowColor',
                type: 'string',
                default: '""',
                desc: '文字阴影',
            }, {
                label: 'legend.data.textStyle.textShadowBlur',
                type: 'string',
                default: '""',
                desc: '文字阴影长度',
            }, {
                label: 'legend.data.textStyle.textShadowOffsetX',
                type: 'string',
                default: '""',
                desc: '文字阴影X偏移',
            }, {
                label: 'legend.data.textStyle.textShadowOffsetY',
                type: 'string',
                default: '""',
                desc: '文字阴影Ys偏移',
            }, {
                label: 'legend.data.textStyle.overflow',
                type: 'string',
                default: 'none',
                desc: '是否换行',
                option: ['truncate', 'break', 'breakAll']
            }, {
                label: 'legend.data.textStyle.ellipsis',
                type: 'string',
                default: 'none',
                desc: 'truncate时，末尾显示的文本',
            },

        ]
    },
    {
        label: 'legend.backgroundColor',
        desc: '图例背景色',
        type: 'icon',
        default: "transparent",
    }, {
        label: 'legend.borderColor',
        desc: '图例的边框颜色',
        type: 'Color',
        default: "'#ccc'",
    }, {
        label: 'legend.borderWidth',
        desc: '图例的边框线宽。',
        type: 'number',
        default: "1",
    },
    {
        label: 'legend.borderRadius',
        type: 'string | array',
        default: "''",
        desc: '圆角半径',
        option: ['5', '[5, 5, 0, 0]']
    }, {
        label: 'legend.shadowBlur',
        type: 'number',
        default: "''",
        desc: '图形阴影的模糊大小',
    }, {
        label: 'legend.shadowColor',
        type: 'string',
        default: "''",
        desc: '阴影颜色',
    }, {
        label: 'legend.shadowOffsetX',
        type: 'string',
        default: "''",
        desc: '阴影水平方向上的偏移距离',
    }, {
        label: 'legend.shadowOffsetY',
        type: 'string',
        default: "''",
        desc: '阴影水平方向下的偏移距离',
    }, {
        label: 'legend.scrollDataIndex',
        type: 'number',
        default: "''",
        desc: '图例当前最左上显示项的 dataIndex。',
    },
]
export const xAxis = [
    {
        "label": "data.id",
        "desc": "组件 ID"
    },
    {
        "label": "data.show",
        "desc": "是否显示 x 轴",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "data.gridIndex",
        "desc": "x 轴所在的 grid 的索引，默认位于第一个 grid"
    },
    {
        "label": "data.position",
        "desc": "x 轴的位置",
        "type": "enum",
        "default": "bottom",
        "options": [
            "top",
            "bottom"
        ]
    },
    {
        "label": "data.offset",
        "desc": "X 轴相对于默认位置的偏移，在相同的上有多个 X 轴的时候有用",
        "type": "number"
    },
    {
        "label": "data.type",
        "desc": "坐标轴类型"
    },
    {
        "label": "data.name",
        "desc": "坐标轴名称",
        "type": "text"
    },
    {
        "label": "data.nameLocation",
        "desc": "坐标轴名称显示位置",
        "type": "enum",
        "default": "end",
        "options": [
            "start",
            "middle",
            "end"
        ]
    },
    {
        "label": "data.nameTextStyle",
        "desc": "坐标轴名称的文字样式",
        "children": [
            {
                "label": "data.nameTextStyle.color",
                "desc": "坐标轴名称的颜色，默认取 axisLine.lineStyle.color",
                "type": "color"
            },
            {
                "label": "data.nameTextStyle.fontStyle",
                "desc": "坐标轴名称文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "data.nameTextStyle.fontWeight",
                "desc": "坐标轴名称文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "data.nameTextStyle.fontFamily",
                "desc": "坐标轴名称文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "data.nameTextStyle.fontSize",
                "desc": "坐标轴名称文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "data.nameTextStyle.align",
                "desc": "文字水平对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "left",
                    "center",
                    "right"
                ]
            },
            {
                "label": "data.nameTextStyle.verticalAlign",
                "desc": "文字垂直对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "top",
                    "middle",
                    "bottom"
                ]
            },
            {
                "label": "data.nameTextStyle.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "data.nameTextStyle.backgroundColor",
                "desc": "文字块背景色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "data.nameTextStyle.borderColor",
                "desc": "文字块边框颜色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "data.nameTextStyle.borderWidth",
                "desc": "文字块边框宽度",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.borderRadius",
                "desc": "文字块的圆角",
                "type": "vector"
            },
            {
                "label": "data.nameTextStyle.padding",
                "desc": "文字块的内边距",
                "type": "vector"
            },
            {
                "label": "data.nameTextStyle.shadowColor",
                "desc": "文字块的背景阴影颜色",
                "type": "color"
            },
            {
                "label": "data.nameTextStyle.shadowBlur",
                "desc": "文字块的背景阴影长度",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.shadowOffsetX",
                "desc": "文字块的背景阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.shadowOffsetY",
                "desc": "文字块的背景阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "data.nameTextStyle.height",
                "desc": "文字块的高度"
            },
            {
                "label": "data.nameTextStyle.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "data.nameTextStyle.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "data.nameTextStyle.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "data.nameTextStyle.rich",
                "desc": "在 里面，可以自定义富文本样式"
            }
        ]
    },
    {
        "label": "data.nameGap",
        "desc": "坐标轴名称与轴线之间的距离",
        "type": "number",
        "default": "15"
    },
    {
        "label": "data.nameRotate",
        "desc": "坐标轴名字旋转，角度值",
        "type": "angle"
    },
    {
        "label": "data.inverse",
        "desc": "是否是反向坐标轴",
        "type": "boolean"
    },
    {
        "label": "data.boundaryGap",
        "desc": "坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样",
        "type": "boolean"
    },
    {
        "label": "data.min",
        "desc": "坐标轴刻度最小值",
        "type": "number"
    },
    {
        "label": "data.max",
        "desc": "坐标轴刻度最大值",
        "type": "number"
    },
    {
        "label": "data.scale",
        "desc": "只在数值轴中有效",
        "type": "boolean"
    },
    {
        "label": "data.splitNumber",
        "desc": "坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整",
        "type": "number",
        "default": "5"
    },
    {
        "label": "data.minInterval",
        "desc": "自动计算的坐标轴最小间隔大小",
        "type": "number"
    },
    {
        "label": "data.maxInterval",
        "desc": "自动计算的坐标轴最大间隔大小",
        "type": "number"
    },
    {
        "label": "data.interval",
        "desc": "强制设置坐标轴分割间隔",
        "type": "number"
    },
    {
        "label": "data.logBase",
        "desc": "对数轴的底数，只在对数轴中有效",
        "type": "number",
        "default": "10"
    },
    {
        "label": "data.silent",
        "desc": "坐标轴是否是静态无法交互"
    },
    {
        "label": "data.triggerEvent",
        "desc": "坐标轴的标签是否响应和触发鼠标事件，默认不响应"
    },
    {
        "label": "data.axisLine",
        "desc": "坐标轴轴线相关设置",
        "children": [
            {
                "label": "data.axisLine.show",
                "desc": "是否显示坐标轴轴线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.axisLine.onZero",
                "desc": "X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.axisLine.onZeroAxisIndex",
                "desc": "当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上"
            },
            {
                "label": "data.axisLine.symbol",
                "desc": "轴线两边的箭头",
                "type": "icon",
                "default": "none"
            },
            {
                "label": "data.axisLine.symbolSize",
                "desc": "轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）",
                "type": "vector",
                "default": "10,15"
            },
            {
                "label": "data.axisLine.symbolOffset",
                "desc": "轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移",
                "type": "vector",
                "default": "0,0"
            },
            {
                "label": "data.axisLine.lineStyle.",
                "desc": "坐标轴线线",
                "children": [
                    {
                        "label": "data.axisLine.lineStyle.color",
                        "desc": "坐标轴线线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.axisLine.lineStyle.width",
                        "desc": "坐标轴线线宽",
                        "type": "number"
                    },
                    {
                        "label": "data.axisLine.lineStyle.type",
                        "desc": "坐标轴线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "data.axisLine.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.axisLine.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.axisLine.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.axisLine.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.axisLine.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.axisTick",
        "desc": "坐标轴刻度相关设置",
        "children": [
            {
                "label": "data.axisTick.show",
                "desc": "是否显示坐标轴刻度",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.axisTick.alignWithLabel",
                "desc": "类目轴中在为  的时候有效，可以保证刻度线和标签对齐",
                "type": "boolean",
                "default": "false"
            },
            {
                "label": "data.axisTick.interval",
                "desc": "坐标轴刻度的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "data.axisTick.inside",
                "desc": "坐标轴刻度是否朝内，默认朝外",
                "type": "boolean"
            },
            {
                "label": "data.axisTick.length",
                "desc": "坐标轴刻度的长度",
                "type": "number",
                "default": "5"
            },
            {
                "label": "data.axisTick.lineStyle",
                "desc": "刻度线的样式设置",
                "children": [
                    {
                        "label": "data.axisTick.lineStyle.color",
                        "desc": "刻度线的颜色"
                    },
                    {
                        "label": "data.axisTick.lineStyle.width",
                        "desc": "坐标轴刻度线宽",
                        "type": "number"
                    },
                    {
                        "label": "data.axisTick.lineStyle.type",
                        "desc": "坐标轴刻度线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "data.axisTick.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.axisTick.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.axisTick.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.axisTick.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.axisTick.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.minorTick",
        "desc": "坐标轴次刻度线相关设置",
        "children": [
            {
                "label": "data.minorTick.show",
                "desc": "是否显示次刻度线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.minorTick.splitNumber",
                "type": "number",
                "default": "5"
            },
            {
                "label": "data.minorTick.length",
                "desc": "次刻度线的长度",
                "type": "number",
                "default": "3"
            },
            {
                "label": "data.minorTick.lineStyle",
                "desc": "刻度线样式",
                "children": [
                    {
                        "label": "data.minorTick.lineStyle.color",
                        "desc": "刻度线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.minorTick.lineStyle.width",
                        "desc": "次刻度线线宽",
                        "type": "number"
                    },
                    {
                        "label": "data.minorTick.lineStyle.type",
                        "desc": "次刻度线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "data.minorTick.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.minorTick.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.minorTick.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.minorTick.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.minorTick.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.axisLabel",
        "desc": "坐标轴刻度标签的相关设置",
        "children": [
            {
                "label": "data.axisLabel.show",
                "desc": "是否显示刻度标签",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.axisLabel.interval",
                "desc": "坐标轴刻度标签的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "data.axisLabel.inside",
                "desc": "刻度标签是否朝内，默认朝外",
                "type": "boolean"
            },
            {
                "label": "data.axisLabel.rotate",
                "desc": "刻度标签旋转的角度",
                "type": "angle"
            },
            {
                "label": "data.axisLabel.margin",
                "desc": "刻度标签与轴线之间的距离",
                "type": "number",
                "default": "8"
            },
            {
                "label": "data.axisLabel.formatter",
                "desc": "刻度标签的内容格式器，支持字符串模板和回调函数两种形式"
            },
            {
                "label": "data.axisLabel.showMinLabel",
                "desc": "是否显示最小 tick 的 label",
                "type": "boolean"
            },
            {
                "label": "data.axisLabel.showMaxLabel",
                "desc": "是否显示最大 tick 的 label",
                "type": "boolean"
            },
            {
                "label": "data.axisLabel.color",
                "desc": "刻度标签文字的颜色",
                "type": "color"
            },
            {
                "label": "data.axisLabel.fontStyle",
                "desc": "文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "data.axisLabel.fontWeight",
                "desc": "文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "data.axisLabel.fontFamily",
                "desc": "文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "data.axisLabel.fontSize",
                "desc": "文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "data.axisLabel.align",
                "desc": "文字水平对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "left",
                    "center",
                    "right"
                ]
            },
            {
                "label": "data.axisLabel.verticalAlign",
                "desc": "文字垂直对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "top",
                    "middle",
                    "bottom"
                ]
            },
            {
                "label": "data.axisLabel.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "data.axisLabel.backgroundColor",
                "desc": "文字块背景色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "data.axisLabel.borderColor",
                "desc": "文字块边框颜色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "data.axisLabel.borderWidth",
                "desc": "文字块边框宽度",
                "type": "number"
            },
            {
                "label": "data.axisLabel.borderRadius",
                "desc": "文字块的圆角",
                "type": "vector"
            },
            {
                "label": "data.axisLabel.padding",
                "desc": "文字块的内边距",
                "type": "vector"
            },
            {
                "label": "data.axisLabel.shadowColor",
                "desc": "文字块的背景阴影颜色",
                "type": "color"
            },
            {
                "label": "data.axisLabel.shadowBlur",
                "desc": "文字块的背景阴影长度",
                "type": "number"
            },
            {
                "label": "data.axisLabel.shadowOffsetX",
                "desc": "文字块的背景阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "data.axisLabel.shadowOffsetY",
                "desc": "文字块的背景阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "data.axisLabel.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "data.axisLabel.height",
                "desc": "文字块的高度"
            },
            {
                "label": "data.axisLabel.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "data.axisLabel.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "data.axisLabel.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "data.axisLabel.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "data.axisLabel.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "data.axisLabel.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "data.axisLabel.rich",
                "desc": "可以自定义富文本样式"
            }
        ]
    },
    {
        "label": "data.splitLine",
        "desc": "坐标轴在grid区域中的分隔线",
        "children": [
            {
                "label": "data.splitLine.show",
                "desc": "是否显示分隔线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.splitLine.interval",
                "desc": "坐标轴分隔线的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "data.splitLine.lineStyle",
                "desc": "分隔线样式",
                "children": [
                    {
                        "label": "data.splitLine.lineStyle.color",
                        "desc": "分隔线颜色，可以设置成单个颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.splitLine.lineStyle.width",
                        "desc": "分隔线线宽",
                        "type": "number"
                    },
                    {
                        "label": "data.splitLine.lineStyle.type",
                        "desc": "分隔线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "data.splitLine.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.splitLine.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.splitLine.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.splitLine.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.splitLine.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.minorSplitLine",
        "desc": "坐标轴在区域中的次分隔线",
        "children": [
            {
                "label": "data.minorSplitLine.show",
                "desc": "是否显示次分隔线",
                "type": "boolean",
                "default": "true",
                "children": [
                    {
                        "label": "data.minorSplitLine.show.color",
                        "desc": "次分隔线线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.minorSplitLine.show.width",
                        "desc": "次分隔线线宽",
                        "type": "number"
                    },
                    {
                        "label": "data.minorSplitLine.show.type",
                        "desc": "次分隔线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "data.minorSplitLine.show.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.minorSplitLine.show.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.minorSplitLine.show.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.minorSplitLine.show.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.minorSplitLine.show.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.splitArea",
        "desc": "坐标轴在grid区域中的分隔区域，默认不显示",
        "children": [
            {
                "label": "data.splitArea.interval",
                "desc": "坐标轴分隔区域的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "data.splitArea.show",
                "desc": "是否显示分隔区域",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "data.splitArea.areaStyle",
                "desc": "分隔区域的样式设置",
                "children": [
                    {
                        "label": "data.splitArea.areaStyle.color",
                        "desc": "分隔区域颜色"
                    },
                    {
                        "label": "data.splitArea.areaStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "data.splitArea.areaStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.splitArea.areaStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.splitArea.areaStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "data.splitArea.areaStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.data",
        "desc": "类目数据",
        "children": [
            {
                "label": "data.data.value",
                "desc": "单个类目名称"
            },
            {
                "label": "data.data.textStyle",
                "desc": "类目标签的文字样式",
                "children": [
                    {
                        "label": "data.data.textStyle.color",
                        "desc": "文字的颜色",
                        "type": "color",
                        "default": "null"
                    },
                    {
                        "label": "data.data.textStyle.fontStyle",
                        "desc": "文字字体的风格",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "italic",
                            "oblique"
                        ]
                    },
                    {
                        "label": "data.data.textStyle.fontWeight",
                        "desc": "文字字体的粗细",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter"
                        ]
                    },
                    {
                        "label": "data.data.textStyle.fontFamily",
                        "desc": "文字的字体系列",
                        "type": "enum",
                        "default": "sans-serif",
                        "options": [
                            "sans-serif",
                            "serif",
                            "monospace",
                            "Arial",
                            "Courier New"
                        ]
                    },
                    {
                        "label": "data.data.textStyle.fontSize",
                        "desc": "文字的字体大小",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "data.data.textStyle.align",
                        "desc": "文字水平对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "left",
                            "center",
                            "right"
                        ]
                    },
                    {
                        "label": "data.data.textStyle.verticalAlign",
                        "desc": "文字垂直对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "top",
                            "middle",
                            "bottom"
                        ]
                    },
                    {
                        "label": "data.data.textStyle.lineHeight",
                        "desc": "行高",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "data.data.textStyle.backgroundColor",
                        "desc": "文字块背景色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "data.data.textStyle.borderColor",
                        "desc": "文字块边框颜色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "data.data.textStyle.borderWidth",
                        "desc": "文字块边框宽度",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.borderRadius",
                        "desc": "文字块的圆角",
                        "type": "vector"
                    },
                    {
                        "label": "data.data.textStyle.padding",
                        "desc": "文字块的内边距",
                        "type": "vector"
                    },
                    {
                        "label": "data.data.textStyle.shadowColor",
                        "desc": "文字块的背景阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.data.textStyle.shadowBlur",
                        "desc": "文字块的背景阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.shadowOffsetX",
                        "desc": "文字块的背景阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.shadowOffsetY",
                        "desc": "文字块的背景阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.width",
                        "desc": "文字块的宽度"
                    },
                    {
                        "label": "data.data.textStyle.height",
                        "desc": "文字块的高度"
                    },
                    {
                        "label": "data.data.textStyle.textBorderColor",
                        "desc": "文字本身的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "data.data.textStyle.textBorderWidth",
                        "desc": "文字本身的描边宽度",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.textShadowColor",
                        "desc": "文字本身的阴影颜色",
                        "type": "color",
                        "default": "#000"
                    },
                    {
                        "label": "data.data.textStyle.textShadowBlur",
                        "desc": "文字本身的阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.textShadowOffsetX",
                        "desc": "文字本身的阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.textShadowOffsetY",
                        "desc": "文字本身的阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "data.data.textStyle.rich",
                        "desc": "自定义富文本样式"
                    }
                ]
            }
        ]
    },
    {
        "label": "data.zlevel",
        "desc": "X 轴所有图形的 zlevel 值"
    },
    {
        "label": "data.z",
        "desc": "X 轴组件的所有图形的值"
    }
]
export const yAxis = [
    {
        "label": "yAxis.id",
        "desc": "组件 ID"
    },
    {
        "label": "yAxis.show",
        "desc": "是否显示 x 轴",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "yAxis.gridIndex",
        "desc": "x 轴所在的 grid 的索引，默认位于第一个 grid"
    },
    {
        "label": "yAxis.position",
        "desc": "x 轴的位置",
        "type": "enum",
        "default": "bottom",
        "options": [
            "top",
            "bottom"
        ]
    },
    {
        "label": "yAxis.offset",
        "desc": "X 轴相对于默认位置的偏移，在相同的上有多个 X 轴的时候有用",
        "type": "number"
    },
    {
        "label": "yAxis.type",
        "desc": "坐标轴类型"
    },
    {
        "label": "yAxis.name",
        "desc": "坐标轴名称",
        "type": "text"
    },
    {
        "label": "yAxis.nameLocation",
        "desc": "坐标轴名称显示位置",
        "type": "enum",
        "default": "end",
        "options": [
            "start",
            "middle",
            "end"
        ]
    },
    {
        "label": "yAxis.nameTextStyle",
        "desc": "坐标轴名称的文字样式",
        "children": [
            {
                "label": "yAxis.nameTextStyle.color",
                "desc": "坐标轴名称的颜色",
                "type": "color"
            },
            {
                "label": "yAxis.nameTextStyle.fontStyle",
                "desc": "坐标轴名称文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "yAxis.nameTextStyle.fontWeight",
                "desc": "坐标轴名称文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "yAxis.nameTextStyle.fontFamily",
                "desc": "坐标轴名称文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "yAxis.nameTextStyle.fontSize",
                "desc": "坐标轴名称文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "yAxis.nameTextStyle.align",
                "desc": "文字水平对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "left",
                    "center",
                    "right"
                ]
            },
            {
                "label": "yAxis.nameTextStyle.verticalAlign",
                "desc": "文字垂直对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "top",
                    "middle",
                    "bottom"
                ]
            },
            {
                "label": "yAxis.nameTextStyle.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "yAxis.nameTextStyle.backgroundColor",
                "desc": "文字块背景色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "yAxis.nameTextStyle.borderColor",
                "desc": "文字块边框颜色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "yAxis.nameTextStyle.borderWidth",
                "desc": "文字块边框宽度",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.borderRadius",
                "desc": "文字块的圆角",
                "type": "vector"
            },
            {
                "label": "yAxis.nameTextStyle.padding",
                "desc": "文字块的内边距",
                "type": "vector"
            },
            {
                "label": "yAxis.nameTextStyle.shadowColor",
                "desc": "文字块的背景阴影颜色",
                "type": "color"
            },
            {
                "label": "yAxis.nameTextStyle.shadowBlur",
                "desc": "文字块的背景阴影长度",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.shadowOffsetX",
                "desc": "文字块的背景阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.shadowOffsetY",
                "desc": "文字块的背景阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "yAxis.nameTextStyle.height",
                "desc": "文字块的高度"
            },
            {
                "label": "yAxis.nameTextStyle.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "yAxis.nameTextStyle.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "yAxis.nameTextStyle.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.nameTextStyle.rich",
                "desc": "在里面，可以自定义富文本样式"
            }
        ]
    },
    {
        "label": "yAxis.nameGap",
        "desc": "坐标轴名称与轴线之间的距离",
        "type": "number",
        "default": "15"
    },
    {
        "label": "yAxis.nameRotate",
        "desc": "坐标轴名字旋转，角度值",
        "type": "angle"
    },
    {
        "label": "yAxis.inverse",
        "desc": "是否是反向坐标轴",
        "type": "boolean"
    },
    {
        "label": "yAxis.boundaryGap",
        "desc": "坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样",
        "type": "boolean"
    },
    {
        "label": "yAxis.min",
        "desc": "坐标轴刻度最小值",
        "type": "number"
    },
    {
        "label": "yAxis.max",
        "desc": "坐标轴刻度最大值",
        "type": "number"
    },
    {
        "label": "yAxis.scale",
        "desc": "只在数值轴中type有效",
        "type": "boolean"
    },
    {
        "label": "yAxis.splitNumber",
        "desc": "坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整",
        "type": "number",
        "default": "5"
    },
    {
        "label": "yAxis.minInterval",
        "desc": "自动计算的坐标轴最小间隔大小",
        "type": "number"
    },
    {
        "label": "yAxis.maxInterval",
        "desc": "自动计算的坐标轴最大间隔大小",
        "type": "number"
    },
    {
        "label": "yAxis.interval",
        "desc": "强制设置坐标轴分割间隔",
        "type": "number"
    },
    {
        "label": "yAxis.logBase",
        "desc": "对数轴的底数",
        "type": "number",
        "default": "10"
    },
    {
        "label": "yAxis.silent",
        "desc": "坐标轴是否是静态无法交互"
    },
    {
        "label": "yAxis.triggerEvent",
        "desc": "坐标轴的标签是否响应和触发鼠标事件，默认不响应"
    },
    {
        "label": "yAxis.axisLine",
        "desc": "坐标轴轴线相关设置",
        "children": [
            {
                "label": "yAxis.axisLine.show",
                "desc": "是否显示坐标轴轴线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.axisLine.onZero",
                "desc": "X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.axisLine.onZeroAxisIndex",
                "desc": "当有双轴时，可以用这个属性手动指定，在哪个轴的 0 刻度上"
            },
            {
                "label": "yAxis.axisLine.symbol",
                "desc": "轴线两边的箭头",
                "type": "icon",
                "default": "none"
            },
            {
                "label": "yAxis.axisLine.symbolSize",
                "desc": "轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）",
                "type": "vector",
                "default": "10,15"
            },
            {
                "label": "yAxis.axisLine.symbolOffset",
                "desc": "轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移",
                "type": "vector",
                "default": "0,0"
            },
            {
                "label": "yAxis.axisLine.lineStyle.",
                "desc": "坐标轴线线",
                "children": [
                    {
                        "label": "yAxis.axisLine.lineStyle.color",
                        "desc": "坐标轴线线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.width",
                        "desc": "坐标轴线线宽",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.type",
                        "desc": "坐标轴线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.axisLine.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.axisTick",
        "desc": "坐标轴刻度相关设置",
        "children": [
            {
                "label": "yAxis.axisTick.show",
                "desc": "是否显示坐标轴刻度",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.axisTick.alignWithLabel",
                "desc": "类目轴中在为的时候有效可以保证刻度线和标签对齐",
                "type": "boolean",
                "default": "false"
            },
            {
                "label": "yAxis.axisTick.interval",
                "desc": "坐标轴刻度的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "yAxis.axisTick.inside",
                "desc": "坐标轴刻度是否朝内，默认朝外",
                "type": "boolean"
            },
            {
                "label": "yAxis.axisTick.length",
                "desc": "坐标轴刻度的长度",
                "type": "number",
                "default": "5"
            },
            {
                "label": "yAxis.axisTick.lineStyle",
                "desc": "刻度线的样式设置",
                "children": [
                    {
                        "label": "yAxis.axisTick.lineStyle.color",
                        "desc": "刻度线的颜色"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.width",
                        "desc": "坐标轴刻度线宽",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.type",
                        "desc": "坐标轴刻度线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.axisTick.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.minorTick",
        "desc": "坐标轴次刻度线相关设置",
        "children": [
            {
                "label": "yAxis.minorTick.show",
                "desc": "是否显示次刻度线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.minorTick.splitNumber",
                "type": "number",
                "default": "5"
            },
            {
                "label": "yAxis.minorTick.length",
                "desc": "次刻度线的长度",
                "type": "number",
                "default": "3"
            },
            {
                "label": "yAxis.minorTick.lineStyle",
                "desc": "刻度线样式",
                "children": [
                    {
                        "label": "yAxis.minorTick.lineStyle.color",
                        "desc": "刻度线的颜色axisLine.lineStyle.color",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.width",
                        "desc": "次刻度线线宽",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.type",
                        "desc": "次刻度线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.minorTick.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.axisLabel",
        "desc": "坐标轴刻度标签的相关设置",
        "children": [
            {
                "label": "yAxis.axisLabel.show",
                "desc": "是否显示刻度标签",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.axisLabel.interval",
                "desc": "坐标轴刻度标签的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.inside",
                "desc": "刻度标签是否朝内，默认朝外",
                "type": "boolean"
            },
            {
                "label": "yAxis.axisLabel.rotate",
                "desc": "刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠",
                "type": "angle"
            },
            {
                "label": "yAxis.axisLabel.margin",
                "desc": "刻度标签与轴线之间的距离",
                "type": "number",
                "default": "8"
            },
            {
                "label": "yAxis.axisLabel.formatter",
                "desc": "刻度标签的内容格式器，支持字符串模板和回调函数两种形式"
            },
            {
                "label": "yAxis.axisLabel.showMinLabel",
                "desc": "是否显示最小 tick 的 label",
                "type": "boolean"
            },
            {
                "label": "yAxis.axisLabel.showMaxLabel",
                "desc": "是否显示最大 tick 的 label",
                "type": "boolean"
            },
            {
                "label": "yAxis.axisLabel.color",
                "desc": "刻度标签文字的颜色axisLine.lineStyle.color",
                "type": "color"
            },
            {
                "label": "yAxis.axisLabel.fontStyle",
                "desc": "文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "yAxis.axisLabel.fontWeight",
                "desc": "文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "yAxis.axisLabel.fontFamily",
                "desc": "文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "yAxis.axisLabel.fontSize",
                "desc": "文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "yAxis.axisLabel.align",
                "desc": "文字水平对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "left",
                    "center",
                    "right"
                ]
            },
            {
                "label": "yAxis.axisLabel.verticalAlign",
                "desc": "文字垂直对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "top",
                    "middle",
                    "bottom"
                ]
            },
            {
                "label": "yAxis.axisLabel.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "yAxis.axisLabel.backgroundColor",
                "desc": "文字块背景色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "yAxis.axisLabel.borderColor",
                "desc": "文字块边框颜色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "yAxis.axisLabel.borderWidth",
                "desc": "文字块边框宽度",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.borderRadius",
                "desc": "文字块的圆角",
                "type": "vector"
            },
            {
                "label": "yAxis.axisLabel.padding",
                "desc": "文字块的内边距",
                "type": "vector"
            },
            {
                "label": "yAxis.axisLabel.shadowColor",
                "desc": "文字块的背景阴影颜色",
                "type": "color"
            },
            {
                "label": "yAxis.axisLabel.shadowBlur",
                "desc": "文字块的背景阴影长度",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.shadowOffsetX",
                "desc": "文字块的背景阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.shadowOffsetY",
                "desc": "文字块的背景阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "yAxis.axisLabel.height",
                "desc": "文字块的高度"
            },
            {
                "label": "yAxis.axisLabel.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "yAxis.axisLabel.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "yAxis.axisLabel.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "yAxis.axisLabel.rich",
                "desc": "自定义富文本样式"
            }
        ]
    },
    {
        "label": "yAxis.splitLine",
        "desc": "坐标轴在区域中的分隔线",
        "children": [
            {
                "label": "yAxis.splitLine.show",
                "desc": "是否显示分隔线",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.splitLine.interval",
                "desc": "坐标轴分隔线的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "yAxis.splitLine.lineStyle",
                "desc": "分隔线样式",
                "children": [
                    {
                        "label": "yAxis.splitLine.lineStyle.color",
                        "desc": "分隔线颜色，可以设置成单个颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.width",
                        "desc": "分隔线线宽",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.type",
                        "desc": "分隔线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.splitLine.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.minorSplitLine",
        "desc": "坐标轴在区域中的次分隔线",
        "children": [
            {
                "label": "yAxis.minorSplitLine.show",
                "desc": "是否显示次分隔线",
                "type": "boolean",
                "default": "true",
                "children": [
                    {
                        "label": "yAxis.minorSplitLine.show.color",
                        "desc": "次分隔线线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.width",
                        "desc": "次分隔线线宽",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.type",
                        "desc": "次分隔线线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.minorSplitLine.show.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.splitArea",
        "desc": "坐标轴在区域中的分隔区域，默认不显示",
        "children": [
            {
                "label": "yAxis.splitArea.interval",
                "desc": "坐标轴分隔区域的显示间隔，在类目轴中有效",
                "type": "number"
            },
            {
                "label": "yAxis.splitArea.show",
                "desc": "是否显示分隔区域",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "yAxis.splitArea.areaStyle",
                "desc": "分隔区域的样式设置",
                "children": [
                    {
                        "label": "yAxis.splitArea.areaStyle.color",
                        "desc": "分隔区域颜色"
                    },
                    {
                        "label": "yAxis.splitArea.areaStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.splitArea.areaStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.splitArea.areaStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.splitArea.areaStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "yAxis.splitArea.areaStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.data",
        "desc": "类目数据",
        "children": [
            {
                "label": "yAxis.data.value",
                "desc": "单个类目名称"
            },
            {
                "label": "yAxis.data.textStyle",
                "desc": "类目标签的文字样式",
                "children": [
                    {
                        "label": "yAxis.data.textStyle.color",
                        "desc": "文字的颜色",
                        "type": "color",
                        "default": "null"
                    },
                    {
                        "label": "yAxis.data.textStyle.fontStyle",
                        "desc": "文字字体的风格",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "italic",
                            "oblique"
                        ]
                    },
                    {
                        "label": "yAxis.data.textStyle.fontWeight",
                        "desc": "文字字体的粗细",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter"
                        ]
                    },
                    {
                        "label": "yAxis.data.textStyle.fontFamily",
                        "desc": "文字的字体系列",
                        "type": "enum",
                        "default": "sans-serif",
                        "options": [
                            "sans-serif",
                            "serif",
                            "monospace",
                            "Arial",
                            "Courier New"
                        ]
                    },
                    {
                        "label": "yAxis.data.textStyle.fontSize",
                        "desc": "文字的字体大小",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "yAxis.data.textStyle.align",
                        "desc": "文字水平对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "left",
                            "center",
                            "right"
                        ]
                    },
                    {
                        "label": "yAxis.data.textStyle.verticalAlign",
                        "desc": "文字垂直对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "top",
                            "middle",
                            "bottom"
                        ]
                    },
                    {
                        "label": "yAxis.data.textStyle.lineHeight",
                        "desc": "行高",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "yAxis.data.textStyle.backgroundColor",
                        "desc": "文字块背景色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "yAxis.data.textStyle.borderColor",
                        "desc": "文字块边框颜色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "yAxis.data.textStyle.borderWidth",
                        "desc": "文字块边框宽度",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.borderRadius",
                        "desc": "文字块的圆角",
                        "type": "vector"
                    },
                    {
                        "label": "yAxis.data.textStyle.padding",
                        "desc": "文字块的内边距",
                        "type": "vector"
                    },
                    {
                        "label": "yAxis.data.textStyle.shadowColor",
                        "desc": "文字块的背景阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.data.textStyle.shadowBlur",
                        "desc": "文字块的背景阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.shadowOffsetX",
                        "desc": "文字块的背景阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.shadowOffsetY",
                        "desc": "文字块的背景阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.width",
                        "desc": "文字块的宽度"
                    },
                    {
                        "label": "yAxis.data.textStyle.height",
                        "desc": "文字块的高度"
                    },
                    {
                        "label": "yAxis.data.textStyle.textBorderColor",
                        "desc": "文字本身的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "yAxis.data.textStyle.textBorderWidth",
                        "desc": "文字本身的描边宽度",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.textShadowColor",
                        "desc": "文字本身的阴影颜色",
                        "type": "color",
                        "default": "#000"
                    },
                    {
                        "label": "yAxis.data.textStyle.textShadowBlur",
                        "desc": "文字本身的阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.textShadowOffsetX",
                        "desc": "文字本身的阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.textShadowOffsetY",
                        "desc": "文字本身的阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "yAxis.data.textStyle.rich",
                        "desc": "自定义富文本样式"
                    }
                ]
            }
        ]
    },
    {
        "label": "yAxis.zlevel",
        "desc": "X 轴所有图形的 zlevel 值"
    },
    {
        "label": "yAxis.z",
        "desc": "X 轴组件的所有图形的"
    }
]

export const toolTip = [
    {
        "label": "tooltip.show",
        "desc": "是否显示提示框组件",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "tooltip.trigger",
        "desc": "触发类型",
        "type": "enum",
        "default": "item,axis,none"
    },
    {
        "label": "tooltip.axisPointer",
        "desc": "坐标轴指示器配置项",
        "children": [
            {
                "label": "tooltip.axisPointer.type",
                "desc": "指示器类型",
                "type": "enum",
                "default": "none,line,shadow,cross"
            },
            {
                "label": "tooltip.axisPointer.axis",
                "desc": "指示器的坐标轴"
            },
            {
                "label": "tooltip.axisPointer.snap",
                "desc": "坐标轴指示器是否自动吸附到点上"
            },
            {
                "label": "tooltip.axisPointer.z",
                "desc": "坐标轴指示器的 z 值"
            },
            {
                "label": "tooltip.axisPointer.label",
                "desc": "坐标轴指示器的文本标签",
                "children": [
                    {
                        "label": "tooltip.axisPointer.label.show",
                        "desc": "是否显示文本标签"
                    },
                    {
                        "label": "tooltip.axisPointer.label.precision",
                        "desc": "文本标签中数值的小数点精度"
                    },
                    {
                        "label": "tooltip.axisPointer.label.formatter",
                        "desc": "文本标签文字的格式化器"
                    },
                    {
                        "label": "tooltip.axisPointer.label.margin",
                        "desc": "label 距离轴的距离"
                    },
                    {
                        "label": "tooltip.axisPointer.label.color",
                        "desc": "文字的颜色",
                        "type": "color",
                        "default": "'#fff'"
                    },
                    {
                        "label": "tooltip.axisPointer.label.fontStyle",
                        "desc": "文字字体的风格",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "italic",
                            "oblique"
                        ]
                    },
                    {
                        "label": "tooltip.axisPointer.label.fontWeight",
                        "desc": "文字字体的粗细",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter"
                        ]
                    },
                    {
                        "label": "tooltip.axisPointer.label.fontFamily",
                        "desc": "文字的字体系列",
                        "type": "enum",
                        "default": "sans-serif",
                        "options": [
                            "sans-serif",
                            "serif",
                            "monospace",
                            "Arial",
                            "Courier New"
                        ]
                    },
                    {
                        "label": "tooltip.axisPointer.label.fontSize",
                        "desc": "文字的字体大小",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "tooltip.axisPointer.label.lineHeight",
                        "desc": "行高",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "tooltip.axisPointer.label.width",
                        "desc": "文字块的宽度"
                    },
                    {
                        "label": "tooltip.axisPointer.label.height",
                        "desc": "文字块的高度"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textBorderColor",
                        "desc": "文字本身的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textBorderWidth",
                        "desc": "文字本身的描边宽度",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textShadowColor",
                        "desc": "文字本身的阴影颜色",
                        "type": "color",
                        "default": "#000"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textShadowBlur",
                        "desc": "文字本身的阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textShadowOffsetX",
                        "desc": "文字本身的阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.label.textShadowOffsetY",
                        "desc": "文字本身的阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.label.padding",
                        "desc": "axisPointer内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距",
                        "type": "vector"
                    },
                    {
                        "label": "tooltip.axisPointer.label.backgroundColor",
                        "desc": "文本标签的背景颜色，默认是和 axis.axisLine.lineStyle.color相同"
                    },
                    {
                        "label": "tooltip.axisPointer.label.borderColor",
                        "desc": "文本标签的边框颜色"
                    },
                    {
                        "label": "tooltip.axisPointer.label.borderWidth",
                        "desc": "文本标签的边框宽度"
                    },
                    {
                        "label": "tooltip.axisPointer.label.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number",
                        "default": "3"
                    },
                    {
                        "label": "tooltip.axisPointer.label.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color",
                        "default": "#aaa"
                    },
                    {
                        "label": "tooltip.axisPointer.label.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.label.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    }
                ]
            },
            {
                "label": "tooltip.axisPointer.lineStyle",
                "desc": "axisPointer.type 为 时有效",
                "children": [
                    {
                        "label": "tooltip.axisPointer.lineStyle.color",
                        "desc": "线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.width",
                        "desc": "线宽",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.type",
                        "desc": "线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle",
                        "desc": "为shadow时有效"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.color",
                        "desc": "填充的颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.shadowStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            },
            {
                "label": "tooltip.axisPointer.crossStyle",
                "desc": "axisPointer.type为时有效",
                "children": [
                    {
                        "label": "tooltip.axisPointer.crossStyle.color",
                        "desc": "线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.width",
                        "desc": "线宽",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.type",
                        "desc": "线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "tooltip.axisPointer.crossStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            },
            {
                "label": "tooltip.axisPointer.animation",
                "desc": "是否开启动画",
                "type": "boolean",
                "default": "true"
            },
            {
                "label": "tooltip.axisPointer.animationThreshold",
                "desc": "是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画"
            },
            {
                "label": "tooltip.axisPointer.animationDuration",
                "type": "number",
                "default": "1000"
            },
            {
                "label": "tooltip.axisPointer.animationEasing",
                "desc": "初始动画的缓动效果",
                "type": "enum",
                "options": [
                    "linear",
                    "quadraticIn",
                    "quadraticOut",
                    "quadraticInOut",
                    "cubicIn",
                    "cubicOut",
                    "cubicInOut",
                    "quarticIn",
                    "quarticOut",
                    "quarticInOut",
                    "quinticIn",
                    "quinticOut",
                    "quinticInOut",
                    "sinusoidalIn",
                    "sinusoidalOut",
                    "sinusoidalInOut",
                    "exponentialIn",
                    "exponentialOut",
                    "exponentialInOut",
                    "circularIn",
                    "circularOut",
                    "circularInOut",
                    "elasticIn",
                    "elasticOut",
                    "elasticInOut",
                    "backIn",
                    "backOut",
                    "backInOut",
                    "bounceIn",
                    "bounceOut",
                    "bounceInOut"
                ]
            },
            {
                "label": "tooltip.axisPointer.animationDelay",
                "desc": "初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果"
            },
            {
                "label": "tooltip.axisPointer.animationDurationUpdate",
                "desc": "数据更新动画的时长",
                "type": "number",
                "default": "1000"
            },
            {
                "label": "tooltip.axisPointer.animationEasingUpdate",
                "desc": "数据更新动画的缓动效果",
                "type": "enum",
                "options": [
                    "linear",
                    "quadraticIn",
                    "quadraticOut",
                    "quadraticInOut",
                    "cubicIn",
                    "cubicOut",
                    "cubicInOut",
                    "quarticIn",
                    "quarticOut",
                    "quarticInOut",
                    "quinticIn",
                    "quinticOut",
                    "quinticInOut",
                    "sinusoidalIn",
                    "sinusoidalOut",
                    "sinusoidalInOut",
                    "exponentialIn",
                    "exponentialOut",
                    "exponentialInOut",
                    "circularIn",
                    "circularOut",
                    "circularInOut",
                    "elasticIn",
                    "elasticOut",
                    "elasticInOut",
                    "backIn",
                    "backOut",
                    "backInOut",
                    "bounceIn",
                    "bounceOut",
                    "bounceInOut"
                ]
            },
            {
                "label": "tooltip.axisPointer.animationDelayUpdate",
                "desc": "数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果"
            }
        ]
    },
    {
        "label": "tooltip.showContent",
        "desc": "是否显示提示框浮层，默认显示",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "tooltip.alwaysShowContent",
        "desc": "是否永远显示提示框内容",
        "type": "boolean",
        "default": "false"
    },
    {
        "label": "tooltip.triggerOn",
        "desc": "提示框触发的条件",
        "type": "enum",
        "options": [
            "mousemove",
            "click"
        ]
    },
    {
        "label": "tooltip.showDelay",
        "desc": "浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置",
        "type": "number"
    },
    {
        "label": "tooltip.hideDelay",
        "desc": "浮层隐藏的延迟",
        "type": "number",
        "default": "100"
    },
    {
        "label": "tooltip.enterable",
        "desc": "鼠标是否可进入提示框浮层中",
        "type": "boolean",
        "default": "false"
    },
    {
        "label": "tooltip.renderMode",
        "desc": "浮层的渲染模式",
        "type": "enum",
        "default": "html",
        "options": [
            "html",
            "richText"
        ]
    },
    {
        "label": "tooltip.confine",
        "desc": "是否将 tooltip 框限制在图表的区域内",
        "type": "boolean",
        "default": "false"
    },
    {
        "label": "tooltip.appendToBody",
        "desc": "是否将 tooltip 的 DOM 节点添加为 HTML 的 body的子节点",
        "type": "boolean",
        "default": "false"
    },
    {
        "label": "tooltip.transitionDuration",
        "desc": "提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动",
        "type": "number",
        "default": "0.4"
    },
    {
        "label": "tooltip.position",
        "desc": "提示框浮层的位置，默认不设置时位置会跟随鼠标的位置"
    },
    {
        "label": "tooltip.formatter",
        "desc": "提示框浮层内容格式器，支持字符串模板和回调函数两种形式"
    },
    {
        "label": "tooltip.backgroundColor",
        "desc": "提示框浮层的背景颜色"
    },
    {
        "label": "tooltip.borderColor",
        "desc": "提示框浮层的边框颜色",
        "type": "color",
        "default": "#333"
    },
    {
        "label": "tooltip.borderWidth",
        "desc": "提示框浮层的边框宽",
        "type": "number",
        "default": "0"
    },
    {
        "label": "tooltip.padding",
        "desc": "提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距",
        "type": "vector"
    },
    {
        "label": "tooltip.textStyle",
        "desc": "提示框浮层的文本样式",
        "children": [
            {
                "label": "tooltip.textStyle.color",
                "desc": "文字的颜色",
                "type": "color",
                "default": "'#fff'"
            },
            {
                "label": "tooltip.textStyle.fontStyle",
                "desc": "文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "tooltip.textStyle.fontWeight",
                "desc": "文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "tooltip.textStyle.fontFamily",
                "desc": "文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "tooltip.textStyle.fontSize",
                "desc": "文字的字体大小",
                "type": "number",
                "default": "14"
            },
            {
                "label": "tooltip.textStyle.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "tooltip.textStyle.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "tooltip.textStyle.height",
                "desc": "文字块的高度"
            },
            {
                "label": "tooltip.textStyle.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "tooltip.textStyle.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "tooltip.textStyle.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "tooltip.textStyle.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "tooltip.textStyle.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "tooltip.textStyle.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            }
        ]
    },
    {
        "label": "tooltip.extraCssText",
        "desc": "额外附加到浮层的 css 样式"
    }
]

export const axisPointer = [
    {
        "label": "axisPointer.id",
        "desc": "组件 ID"
    },
    {
        "label": "axisPointer.show",
        "desc": "默认不显示",
        "type": "boolean"
    },
    {
        "label": "axisPointer.type",
        "desc": "指示器类型",
        "type": "enum",
        "options": [
            "line",
            "shadow",
            "none"
        ]
    },
    {
        "label": "axisPointer.snap",
        "desc": "坐标轴指示器是否自动吸附到点上"
    },
    {
        "label": "axisPointer.z",
        "desc": "坐标轴指示器的 z 值"
    },
    {
        "label": "axisPointer.label",
        "desc": "坐标轴指示器的文本标签",
        "children": [
            {
                "label": "axisPointer.label.show",
                "desc": "是否显示文本标签"
            },
            {
                "label": "axisPointer.label.precision",
                "desc": "文本标签中数值的小数点精度"
            },
            {
                "label": "axisPointer.label.formatter",
                "desc": "文本标签文字的格式化器"
            },
            {
                "label": "axisPointer.label.margin",
                "desc": "label 距离轴的距离"
            },
            {
                "label": "axisPointer.label.color",
                "desc": "文字的颜色",
                "type": "color",
                "default": "'#fff'"
            },
            {
                "label": "axisPointer.label.fontStyle",
                "desc": "文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "axisPointer.label.fontWeight",
                "desc": "文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "axisPointer.label.fontFamily",
                "desc": "文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "axisPointer.label.fontSize",
                "desc": "文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "axisPointer.label.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "axisPointer.label.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "axisPointer.label.height",
                "desc": "文字块的高度"
            },
            {
                "label": "axisPointer.label.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.label.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "axisPointer.label.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "axisPointer.label.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "axisPointer.label.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "axisPointer.label.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "axisPointer.label.padding",
                "desc": "axisPointer内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距",
                "type": "vector"
            },
            {
                "label": "axisPointer.label.backgroundColor",
                "desc": "文本标签的背景颜色，默认是和axis.axisLine.lineStyle.color相同"
            },
            {
                "label": "axisPointer.label.borderColor",
                "desc": "文本标签的边框颜色"
            },
            {
                "label": "axisPointer.label.borderWidth",
                "desc": "文本标签的边框宽度"
            },
            {
                "label": "axisPointer.label.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number",
                "default": "3"
            },
            {
                "label": "axisPointer.label.shadowColor",
                "desc": "阴影颜色",
                "type": "color",
                "default": "#aaa"
            },
            {
                "label": "axisPointer.label.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "axisPointer.label.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            }
        ]
    },
    {
        "label": "axisPointer.lineStyle",
        "desc": "axisPointer.type时有效",
        "children": [
            {
                "label": "axisPointer.lineStyle.color",
                "desc": "线的颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.lineStyle.width",
                "desc": "线宽",
                "type": "number"
            },
            {
                "label": "axisPointer.lineStyle.type",
                "desc": "线的类型",
                "type": "enum",
                "default": "solid",
                "options": [
                    "solid",
                    "dashed",
                    "dotted"
                ]
            },
            {
                "label": "axisPointer.lineStyle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number"
            },
            {
                "label": "axisPointer.lineStyle.shadowColor",
                "desc": "阴影颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.lineStyle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "axisPointer.lineStyle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "axisPointer.lineStyle.opacity",
                "desc": "图形透明度",
                "type": "number",
                "default": "1"
            }
        ]
    },
    {
        "label": "axisPointer.shadowStyle",
        "desc": "axisPointer.type为shadow 时有效",
        "children": [
            {
                "label": "axisPointer.shadowStyle.color",
                "desc": "填充的颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.shadowStyle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number"
            },
            {
                "label": "axisPointer.shadowStyle.shadowColor",
                "desc": "阴影颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.shadowStyle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "axisPointer.shadowStyle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "axisPointer.shadowStyle.opacity",
                "desc": "图形透明度",
                "type": "number",
                "default": "1"
            }
        ]
    },
    {
        "label": "axisPointer.triggerTooltip",
        "desc": "是否触发 tooltip",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "axisPointer.value",
        "desc": "当前的 value"
    },
    {
        "label": "axisPointer.status",
        "desc": "当前的状态，可取值为show和hide",
        "type": "enum",
        "options": [
            "show",
            "hide"
        ]
    },
    {
        "label": "axisPointer.handle",
        "desc": "拖拽手柄，适用于触屏的环境",
        "children": [
            {
                "label": "axisPointer.handle.show",
                "desc": "当 show 设为true< 时开启，这时显示手柄，并且 axisPointer 会一直显示",
                "type": "boolean"
            },
            {
                "label": "axisPointer.handle.icon",
                "desc": "手柄的图标",
                "type": "icon"
            },
            {
                "label": "axisPointer.handle.size",
                "desc": "手柄的尺寸",
                "type": "vector",
                "default": "45,45"
            },
            {
                "label": "axisPointer.handle.margin",
                "desc": "手柄与轴的距离",
                "type": "number",
                "default": "50"
            },
            {
                "label": "axisPointer.handle.color",
                "desc": "手柄颜色",
                "type": "color"
            },
            {
                "label": "axisPointer.handle.throttle",
                "desc": "手柄拖拽时触发视图更新周期，单位毫秒，调大这个数值可以改善性能，但是降低体验",
                "type": "number",
                "default": "40"
            },
            {
                "label": "axisPointer.handle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number",
                "default": "3"
            },
            {
                "label": "axisPointer.handle.shadowColor",
                "desc": "阴影颜色",
                "type": "color",
                "default": "#aaa"
            },
            {
                "label": "axisPointer.handle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "2"
            },
            {
                "label": "axisPointer.handle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            }
        ]
    },
    {
        "label": "axisPointer.link",
        "desc": "不同轴的 axisPointer 可以进行联动，在这里设置"
    },
    {
        "label": "axisPointer.triggerOn",
        "desc": "提示框触发的条件",
        "type": "enum",
        "options": [
            "mousemove",
            "click",
            "none"
        ]
    }
]

export const series = [
    {
        "label": "series.id",
        "desc": "组件 ID"
    },
    {
        "label": "series.name",
        "desc": "系列名称"
    },
    {
        "label": "series.type",
        "desc": "类型",
        "option": ['line', 'bar', 'pie']
    },
    {
        "label": "series.coordinateSystem",
        "desc": "该系列使用的坐标系"
    },
    {
        "label": "series.xAxisIndex",
        "desc": "使用的x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用"
    },
    {
        "label": "series.yAxisIndex",
        "desc": "使用的y 轴的 index，在单个图表实例中存在多个 y轴的时候有用"
    },
    {
        "label": "series.polarIndex",
        "desc": "使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用"
    },
    {
        "label": "series.symbol",
        "desc": "标记的图形",
        "type": "icon",
        "default": "circle"
    },
    {
        "label": "series.symbolSize",
        "desc": "标记的大小",
        "type": "number"
    },
    {
        "label": "series.symbolRotate",
        "desc": "标记的旋转角度（而非弧度）",
        "type": "angle"
    },
    {
        "label": "series.symbolKeepAspect",
        "desc": "是否在缩放时保持该图形的长宽比",
        "type": "boolean"
    },
    {
        "label": "series.symbolOffset",
        "desc": "标记相对于原本位置的偏移",
        "type": "vector"
    },
    {
        "label": "series.showSymbol",
        "desc": "是否显示 symbol",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "series.showAllSymbol",
        "desc": "只在主轴为类目轴为 category时有效",
        "type": "boolean"
    },
    {
        "label": "series.hoverAnimation",
        "desc": "是否开启 hover 在拐点标志上的提示动画效果",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "series.legendHoverLink",
        "desc": "是否启用图例hover 时的联动高亮",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "series.stack",
        "desc": "数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加"
    },
    {
        "label": "series.cursor",
        "desc": "鼠标悬浮时在图形元素上时鼠标的样式是什么",
        "type": "enum",
        "default": "pointer",
        "options": [
            "auto",
            "pointer",
            "move"
        ]
    },
    {
        "label": "series.connectNulls",
        "desc": "是否连接空数据",
        "type": "boolean"
    },
    {
        "label": "series.clip",
        "desc": "是否裁剪超出坐标系部分的图形",
        "type": "boolean",
        "default": "true"
    },
    {
        "label": "series.step",
        "desc": "是否是阶梯线图",
        "type": "enum",
        "options": [
            "start",
            "middle",
            "end"
        ]
    },
    {
        "label": "series.label",
        "desc": "图形上的文本标签",
        "children": [
            {
                "label": "series.label.show",
                "desc": "是否显示标签",
                "type": "boolean",
                "default": "false"
            },
            {
                "label": "series.label.position",
                "desc": "标签的位置",
                "type": "enum",
                "options": [
                    "top",
                    "left",
                    "right",
                    "bottom",
                    "inside",
                    "insideLeft",
                    "insideRight",
                    "insideTop",
                    "insideBottom",
                    "insideTopLeft",
                    "insideBottomLeft",
                    "insideTopRight",
                    "insideBottomRight",
                    "outside"
                ]
            },
            {
                "label": "series.label.distance",
                "desc": "距离图形元素的距离",
                "type": "number",
                "default": "5"
            },
            {
                "label": "series.label.rotate",
                "desc": "标签旋转",
                "type": "angle",
                "default": "0"
            },
            {
                "label": "series.label.offset",
                "desc": "是否对文字进行偏移",
                "type": "vector"
            },
            {
                "label": "series.label.formatter",
                "desc": "标签内容格式器"
            },
            {
                "label": "series.label.color",
                "desc": "文字的颜色",
                "type": "color",
                "default": "null"
            },
            {
                "label": "series.label.fontStyle",
                "desc": "文字字体的风格",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "italic",
                    "oblique"
                ]
            },
            {
                "label": "series.label.fontWeight",
                "desc": "文字字体的粗细",
                "type": "enum",
                "default": "normal",
                "options": [
                    "normal",
                    "bold",
                    "bolder",
                    "lighter"
                ]
            },
            {
                "label": "series.label.fontFamily",
                "desc": "文字的字体系列",
                "type": "enum",
                "default": "sans-serif",
                "options": [
                    "sans-serif",
                    "serif",
                    "monospace",
                    "Arial",
                    "Courier New"
                ]
            },
            {
                "label": "series.label.fontSize",
                "desc": "文字的字体大小",
                "type": "number",
                "default": "12"
            },
            {
                "label": "series.label.align",
                "desc": "文字水平对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "left",
                    "center",
                    "right"
                ]
            },
            {
                "label": "series.label.verticalAlign",
                "desc": "文字垂直对齐方式，默认自动",
                "type": "enum",
                "options": [
                    "top",
                    "middle",
                    "bottom"
                ]
            },
            {
                "label": "series.label.lineHeight",
                "desc": "行高",
                "type": "number",
                "default": "12"
            },
            {
                "label": "series.label.backgroundColor",
                "desc": "文字块背景色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "series.label.borderColor",
                "desc": "文字块边框颜色",
                "type": "color",
                "default": "#fff"
            },
            {
                "label": "series.label.borderWidth",
                "desc": "文字块边框宽度",
                "type": "number"
            },
            {
                "label": "series.label.borderRadius",
                "desc": "文字块的圆角",
                "type": "vector"
            },
            {
                "label": "series.label.padding",
                "desc": "文字块的内边距",
                "type": "vector"
            },
            {
                "label": "series.label.shadowColor",
                "desc": "文字块的背景阴影颜色",
                "type": "color"
            },
            {
                "label": "series.label.shadowBlur",
                "desc": "文字块的背景阴影长度",
                "type": "number"
            },
            {
                "label": "series.label.shadowOffsetX",
                "desc": "文字块的背景阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "series.label.shadowOffsetY",
                "desc": "文字块的背景阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "series.label.width",
                "desc": "文字块的宽度"
            },
            {
                "label": "series.label.height",
                "desc": "文字块的高度"
            },
            {
                "label": "series.label.textBorderColor",
                "desc": "文字本身的描边颜色",
                "type": "color"
            },
            {
                "label": "series.label.textBorderWidth",
                "desc": "文字本身的描边宽度",
                "type": "number"
            },
            {
                "label": "series.label.textShadowColor",
                "desc": "文字本身的阴影颜色",
                "type": "color",
                "default": "#000"
            },
            {
                "label": "series.label.textShadowBlur",
                "desc": "文字本身的阴影长度",
                "type": "number"
            },
            {
                "label": "series.label.textShadowOffsetX",
                "desc": "文字本身的阴影 X 偏移",
                "type": "number"
            },
            {
                "label": "series.label.textShadowOffsetY",
                "desc": "文字本身的阴影 Y 偏移",
                "type": "number"
            },
            {
                "label": "series.label.rich",
                "desc": "可以自定义富文本样式"
            }
        ]
    },
    {
        "label": "series.itemStyle",
        "desc": "折线拐点标志的样式",
        "children": [
            {
                "label": "series.itemStyle.color",
                "desc": "图形的颜色",
                "type": "color"
            },
            {
                "label": "series.itemStyle.borderColor",
                "desc": "图形的描边颜色",
                "type": "color"
            },
            {
                "label": "series.itemStyle.borderWidth",
                "desc": "描边线宽",
                "type": "number"
            },
            {
                "label": "series.itemStyle.borderType",
                "desc": "柱条的描边类型",
                "type": "enum",
                "default": "solid",
                "options": [
                    "solid",
                    "dashed",
                    "dotted"
                ]
            },
            {
                "label": "series.itemStyle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number"
            },
            {
                "label": "series.itemStyle.shadowColor",
                "desc": "阴影颜色",
                "type": "color"
            },
            {
                "label": "series.itemStyle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.itemStyle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.itemStyle.opacity",
                "desc": "图形透明度",
                "type": "number",
                "default": "1"
            },
            {
                "label": "series.lineStyle",
                "desc": "线条样式"
            },
            {
                "label": "series.lineStyle.color",
                "desc": "线的颜色",
                "type": "color"
            },
            {
                "label": "series.lineStyle.width",
                "desc": "线宽",
                "type": "number"
            },
            {
                "label": "series.lineStyle.type",
                "desc": "线的类型",
                "type": "enum",
                "default": "solid",
                "options": [
                    "solid",
                    "dashed",
                    "dotted"
                ]
            },
            {
                "label": "series.lineStyle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number"
            },
            {
                "label": "series.lineStyle.shadowColor",
                "desc": "阴影颜色",
                "type": "color"
            },
            {
                "label": "series.lineStyle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.lineStyle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.lineStyle.opacity",
                "desc": "图形透明度",
                "type": "number",
                "default": "1"
            }
        ]
    },
    {
        "label": "series.areaStyle",
        "desc": "区域填充样式",
        "children": [
            {
                "label": "series.areaStyle.color",
                "desc": "填充的颜色",
                "type": "color"
            },
            {
                "label": "series.areaStyle.origin",
                "desc": "图形区域的起始位置"
            },
            {
                "label": "series.areaStyle.shadowBlur",
                "desc": "图形阴影的模糊大小",
                "type": "number"
            },
            {
                "label": "series.areaStyle.shadowColor",
                "desc": "阴影颜色",
                "type": "color"
            },
            {
                "label": "series.areaStyle.shadowOffsetX",
                "desc": "阴影水平方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.areaStyle.shadowOffsetY",
                "desc": "阴影垂直方向上的偏移距离",
                "type": "number",
                "default": "0"
            },
            {
                "label": "series.areaStyle.opacity",
                "desc": "图形透明度",
                "type": "number",
                "default": "1"
            }
        ]
    },
    {
        "label": "series.emphasis",
        "desc": "图形的高亮样式",
        "children": [
            {
                "label": "series.emphasis.label",
                "desc": "标签",
                "children": [
                    {
                        "label": "series.emphasis.label.show",
                        "desc": "是否显示标签",
                        "type": "boolean",
                        "default": "false"
                    },
                    {
                        "label": "series.emphasis.label.position",
                        "desc": "标签的位置",
                        "type": "enum",
                        "options": [
                            "top",
                            "left",
                            "right",
                            "bottom",
                            "inside",
                            "insideLeft",
                            "insideRight",
                            "insideTop",
                            "insideBottom",
                            "insideTopLeft",
                            "insideBottomLeft",
                            "insideTopRight",
                            "insideBottomRight",
                            "outside"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.distance",
                        "desc": "距离图形元素的距离",
                        "type": "number",
                        "default": "5"
                    },
                    {
                        "label": "series.emphasis.label.rotate",
                        "desc": "标签旋转",
                        "type": "angle",
                        "default": "0"
                    },
                    {
                        "label": "series.emphasis.label.offset",
                        "desc": "是否对文字进行偏移",
                        "type": "vector"
                    },
                    {
                        "label": "series.emphasis.label.formatter",
                        "desc": "标签内容格式器"
                    },
                    {
                        "label": "series.emphasis.label.color",
                        "desc": "文字的颜色",
                        "type": "color",
                        "default": "null"
                    },
                    {
                        "label": "series.emphasis.label.fontStyle",
                        "desc": "文字字体的风格",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "italic",
                            "oblique"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.fontWeight",
                        "desc": "文字字体的粗细",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.fontFamily",
                        "desc": "文字的字体系列",
                        "type": "enum",
                        "default": "sans-serif",
                        "options": [
                            "sans-serif",
                            "serif",
                            "monospace",
                            "Arial",
                            "Courier New"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.fontSize",
                        "desc": "文字的字体大小",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "series.emphasis.label.align",
                        "desc": "文字水平对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "left",
                            "center",
                            "right"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.verticalAlign",
                        "desc": "文字垂直对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "top",
                            "middle",
                            "bottom"
                        ]
                    },
                    {
                        "label": "series.emphasis.label.lineHeight",
                        "desc": "行高",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "series.emphasis.label.backgroundColor",
                        "desc": "文字块背景色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "series.emphasis.label.borderColor",
                        "desc": "文字块边框颜色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "series.emphasis.label.borderWidth",
                        "desc": "文字块边框宽度",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.borderRadius",
                        "desc": "文字块的圆角",
                        "type": "vector"
                    },
                    {
                        "label": "series.emphasis.label.padding",
                        "desc": "文字块的内边距",
                        "type": "vector"
                    },
                    {
                        "label": "series.emphasis.label.shadowColor",
                        "desc": "文字块的背景阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.emphasis.label.shadowBlur",
                        "desc": "文字块的背景阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.shadowOffsetX",
                        "desc": "文字块的背景阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.shadowOffsetY",
                        "desc": "文字块的背景阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.width",
                        "desc": "文字块的宽度"
                    },
                    {
                        "label": "series.emphasis.label.height",
                        "desc": "文字块的高度"
                    },
                    {
                        "label": "series.emphasis.label.textBorderColor",
                        "desc": "文字本身的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.emphasis.label.textBorderWidth",
                        "desc": "文字本身的描边宽度",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.textShadowColor",
                        "desc": "文字本身的阴影颜色",
                        "type": "color",
                        "default": "#000"
                    },
                    {
                        "label": "series.emphasis.label.textShadowBlur",
                        "desc": "文字本身的阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.textShadowOffsetX",
                        "desc": "文字本身的阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.textShadowOffsetY",
                        "desc": "文字本身的阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.label.rich",
                        "desc": "可以自定义富文本样式"
                    }
                ]
            },
            {
                "label": "series.emphasis.itemStyle",
                "desc": "图形",
                "children": [
                    {
                        "label": "series.emphasis.itemStyle.color",
                        "desc": "图形的颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.emphasis.itemStyle.borderColor",
                        "desc": "图形的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.emphasis.itemStyle.borderWidth",
                        "desc": "描边线宽",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.itemStyle.borderType",
                        "desc": "柱条的描边类型，默认为实线",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "series.emphasis.itemStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "series.emphasis.itemStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.emphasis.itemStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.emphasis.itemStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.emphasis.itemStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "series.smooth",
        "desc": "是否平滑曲线显示"
    },
    {
        "label": "series.smoothMonotone",
        "desc": "折线平滑后是否在一个维度上保持单调性"
    },
    {
        "label": "series.sampling",
        "desc": "折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点"
    },
    {
        "label": "series.dimensions",
        "desc": "使用 dimensions 定义 series.data或者dataset.source的每个维度的信息"
    },
    {
        "label": "series.encode",
        "desc": "可以定义 data的哪个维度被编码成什么"
    },
    {
        "label": "series.seriesLayoutBy",
        "desc": "当使用 dataset时，seriesLayoutBy 指定了 dataset 中用行还是列对应到系列上"
    },
    {
        "label": "series.datasetIndex",
        "desc": "如果series.data 没有指定，并且dataset存在，那么就会使用 dataset"
    },
    {
        "label": "series.data",
        "desc": "系列中的数据内容数组",
        "children": [
            {
                "label": "series.data.name",
                "desc": "数据项名称"
            },
            {
                "label": "series.data.value",
                "desc": "单个数据项的数值"
            },
            {
                "label": "series.data.symbol",
                "desc": "单个数据标记的图形",
                "type": "icon",
                "default": "circle"
            },
            {
                "label": "series.data.symbolSize",
                "desc": "单个数据标记的大小",
                "type": "number"
            },
            {
                "label": "series.data.symbolRotate",
                "desc": "单个数据标记的旋转角度（而非弧度）",
                "type": "angle"
            },
            {
                "label": "series.data.symbolKeepAspect",
                "desc": "如果symbol 是 path://的形式，是否在缩放时保持该图形的长宽比",
                "type": "boolean"
            },
            {
                "label": "series.data.symbolOffset",
                "desc": "单个数据标记相对于原本位置的偏移",
                "type": "vector"
            },
            {
                "label": "series.data.label",
                "desc": "单个拐点文本的样式设置",
                "children": [
                    {
                        "label": "series.data.label.show",
                        "desc": "是否显示标签",
                        "type": "boolean",
                        "default": "false"
                    },
                    {
                        "label": "series.data.label.position",
                        "desc": "标签的位置",
                        "type": "enum",
                        "options": [
                            "top",
                            "left",
                            "right",
                            "bottom",
                            "inside",
                            "insideLeft",
                            "insideRight",
                            "insideTop",
                            "insideBottom",
                            "insideTopLeft",
                            "insideBottomLeft",
                            "insideTopRight",
                            "insideBottomRight",
                            "outside"
                        ]
                    },
                    {
                        "label": "series.data.label.distance",
                        "desc": "距离图形元素的距离",
                        "type": "number",
                        "default": "5"
                    },
                    {
                        "label": "series.data.label.rotate",
                        "desc": "标签旋转",
                        "type": "angle",
                        "default": "0"
                    },
                    {
                        "label": "series.data.label.offset",
                        "desc": "是否对文字进行偏移",
                        "type": "vector"
                    },
                    {
                        "label": "series.data.label.color",
                        "desc": "文字的颜色",
                        "type": "color",
                        "default": "null"
                    },
                    {
                        "label": "series.data.label.fontStyle",
                        "desc": "文字字体的风格",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "italic",
                            "oblique"
                        ]
                    },
                    {
                        "label": "series.data.label.fontWeight",
                        "desc": "文字字体的粗细",
                        "type": "enum",
                        "default": "normal",
                        "options": [
                            "normal",
                            "bold",
                            "bolder",
                            "lighter"
                        ]
                    },
                    {
                        "label": "series.data.label.fontFamily",
                        "desc": "文字的字体系列",
                        "type": "enum",
                        "default": "sans-serif",
                        "options": [
                            "sans-serif",
                            "serif",
                            "monospace",
                            "Arial",
                            "Courier New"
                        ]
                    },
                    {
                        "label": "series.data.label.fontSize",
                        "desc": "文字的字体大小",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "series.data.label.align",
                        "desc": "文字水平对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "left",
                            "center",
                            "right"
                        ]
                    },
                    {
                        "label": "series.data.label.verticalAlign",
                        "desc": "文字垂直对齐方式，默认自动",
                        "type": "enum",
                        "options": [
                            "top",
                            "middle",
                            "bottom"
                        ]
                    },
                    {
                        "label": "series.data.label.lineHeight",
                        "desc": "行高",
                        "type": "number",
                        "default": "12"
                    },
                    {
                        "label": "series.data.label.backgroundColor",
                        "desc": "文字块背景色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "series.data.label.borderColor",
                        "desc": "文字块边框颜色",
                        "type": "color",
                        "default": "#fff"
                    },
                    {
                        "label": "series.data.label.borderWidth",
                        "desc": "文字块边框宽度",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.borderRadius",
                        "desc": "文字块的圆角",
                        "type": "vector"
                    },
                    {
                        "label": "series.data.label.padding",
                        "desc": "文字块的内边距",
                        "type": "vector"
                    },
                    {
                        "label": "series.data.label.shadowColor",
                        "desc": "文字块的背景阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.label.shadowBlur",
                        "desc": "文字块的背景阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.shadowOffsetX",
                        "desc": "文字块的背景阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.shadowOffsetY",
                        "desc": "文字块的背景阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.width",
                        "desc": "文字块的宽度"
                    },
                    {
                        "label": "series.data.label.height",
                        "desc": "文字块的高度"
                    },
                    {
                        "label": "series.data.label.textBorderColor",
                        "desc": "文字本身的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.label.textBorderWidth",
                        "desc": "文字本身的描边宽度",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.textShadowColor",
                        "desc": "文字本身的阴影颜色",
                        "type": "color",
                        "default": "#000"
                    },
                    {
                        "label": "series.data.label.textShadowBlur",
                        "desc": "文字本身的阴影长度",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.textShadowOffsetX",
                        "desc": "文字本身的阴影 X 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.textShadowOffsetY",
                        "desc": "文字本身的阴影 Y 偏移",
                        "type": "number"
                    },
                    {
                        "label": "series.data.label.rich",
                        "desc": "可以自定义富文本样式"
                    }
                ]
            },
            {
                "label": "series.data.itemStyle",
                "desc": "单个拐点标志的样式设置",
                "children": [
                    {
                        "label": "series.data.itemStyle.color",
                        "desc": "图形的颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.itemStyle.borderColor",
                        "desc": "图形的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.itemStyle.borderWidth",
                        "desc": "描边线宽",
                        "type": "number"
                    },
                    {
                        "label": "series.data.itemStyle.borderType",
                        "desc": "柱条的描边类型，默认为实线",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "series.data.itemStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "series.data.itemStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.itemStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.data.itemStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.data.itemStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            },
            {
                "label": "series.data.emphasis",
                "desc": "单个拐点的高亮样式和标签设置",
                "children": [
                    {
                        "label": "series.data.emphasis.itemStyle.color",
                        "desc": "图形的颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.borderColor",
                        "desc": "图形的描边颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.borderWidth",
                        "desc": "描边线宽",
                        "type": "number"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.borderType",
                        "desc": "柱条的描边类型，默认为实线",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.data.emphasis.itemStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    }
                ]
            }
        ]
    },
    {
        "label": "series.markLine",
        "desc": "图表标线",
        "children": [
            {
                "label": "series.markLine.silent",
                "desc": "图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件",
                "type": "boolean"
            },
            {
                "label": "series.markLine.symbol",
                "desc": "标线两端的标记类型"
            },
            {
                "label": "series.markLine.symbolSize",
                "desc": "标线两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定"
            },
            {
                "label": "series.markLine.precision",
                "desc": "标线数值的精度，在显示平均值线的时候有用"
            },
            {
                "label": "series.markLine.label",
                "desc": "标线的文本",
                "children": [
                    {
                        "label": "series.markLine.label.show",
                        "desc": "是否显示标签"
                    },
                    {
                        "label": "series.markLine.label.position",
                        "desc": "标签位置"
                    },
                    {
                        "label": "series.markLine.label.distance",
                        "desc": "标签与线之间的间距"
                    },
                    {
                        "label": "series.markLine.label.formatter",
                        "desc": "标签内容格式器"
                    }
                ]
            },
            {
                "label": "series.markLine.lineStyle",
                "children": [
                    {
                        "label": "series.markLine.lineStyle.color",
                        "desc": "线的颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.markLine.lineStyle.width",
                        "desc": "线宽",
                        "type": "number"
                    },
                    {
                        "label": "series.markLine.lineStyle.type",
                        "desc": "线的类型",
                        "type": "enum",
                        "default": "solid",
                        "options": [
                            "solid",
                            "dashed",
                            "dotted"
                        ]
                    },
                    {
                        "label": "series.markLine.lineStyle.shadowBlur",
                        "desc": "图形阴影的模糊大小",
                        "type": "number"
                    },
                    {
                        "label": "series.markLine.lineStyle.shadowColor",
                        "desc": "阴影颜色",
                        "type": "color"
                    },
                    {
                        "label": "series.markLine.lineStyle.shadowOffsetX",
                        "desc": "阴影水平方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.markLine.lineStyle.shadowOffsetY",
                        "desc": "阴影垂直方向上的偏移距离",
                        "type": "number",
                        "default": "0"
                    },
                    {
                        "label": "series.markLine.lineStyle.opacity",
                        "desc": "图形透明度",
                        "type": "number",
                        "default": "1"
                    },
                    {
                        "label": "series.markLine.lineStyle.curveness",
                        "desc": "边的曲度，支持从 0 到 1 的值，值越大曲度越大",
                        "type": "number",
                        "default": "0"
                    }
                ]
            },
            {
                "label": "series.markLine.emphasis",
                "desc": "标线的高亮样式",
                "children": [
                    {
                        "label": "series.markLine.emphasis.label",
                        "desc": "标签",
                        "children": [
                            {
                                "label": "series.markLine.emphasis.label.show",
                                "desc": "是否显示标签"
                            },
                            {
                                "label": "series.markLine.emphasis.label.position",
                                "desc": "标签位置"
                            },
                            {
                                "label": "series.markLine.emphasis.label.distance",
                                "desc": "标签与线之间的间距"
                            },
                            {
                                "label": "series.markLine.emphasis.label.formatter",
                                "desc": "标签内容格式器"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
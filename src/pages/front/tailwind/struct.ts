interface ICss {
    name: string,
    children: {
        name: string,
        children: {
            "value": string,
            "desc": string
        }[],
    }[]
}

interface ITag {
    name: string,
    desc: string,
    props: {
        name: string,
        children: ITagInfo[]
    }[] | undefined,
    slots: ITagInfo[],
    events: ITagInfo[],
    methods: ITagInfo[],
}

interface ITagInfo {
    name: string,
    desc: string,
    example: string[] | any
}

export const QuasarSize = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"]
export const QuasarColors = ["primary", "secondary", "accent", "dark", "positive", "negative", "info", "warning", "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey",]
export const DataType = ['number', 'string', 'boolean', 'null', 'object', 'array', 'function', 'any', 'void', 'never']
const quasarColorsExample = ["text-primary", "text-secondary", "text-accent", "text-dark", "text-positive", "text-negative", "text-info", "text-warning", "text-red", "text-pink", "text-purple", "text-deep-purple", "text-indigo", "text-blue", "text-light-blue", "text-cyan", "text-teal", "text-green", "text-light-green", "text-lime", "text-yellow", "text-amber", "text-orange", "text-deep-orange", "text-brown", "text-grey", "text-blue-grey",]
const quasarFontSizeExample = ["2px", "16px", "2rem"]
const quasarSizeExample = ["xs", "sm", "md", "lg", "xl"]
const quasarAllSize = [...quasarFontSizeExample, ...quasarSizeExample]
const quasarBoolExample = ["true", "false"]
const quasarAlignExample = ["middle", "top", "bottom"]
// 可用的标签

const size = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48",
}
// vue属性
export const vueAttrList = [
    {
        name: "条件", children: [
            {value: "v-if", desc: "条件渲染"},
            {value: "v-else", desc: ""},
            {value: "v-else-if", desc: ""},
            {value: "v-show", desc: ""},
        ]
    },
    {
        name: "列表", children: [
            {value: "v-for", desc: ""},
        ]
    },
    {
        name: "事件", children: [
            {value: "v-on", desc: ""},
            {value: "@", desc: ""},
            {value: "@click", desc: ""},
            {value: "@keyup", desc: ""},
            {value: "@keydown", desc: ""},
            {value: "@scroll", desc: ""},
        ]
    },
    {
        name: "表单", children: [
            {value: "v-model", desc: ""},
        ]
    },

]
export const CssList: ICss[] = [
    {
        name: "quasar文字", children: [
            {
                name: "文字大小", children: [
                    {value: "text-h1", desc: "一级标题"},
                    {value: "text-h2", desc: "二级标题"},
                    {value: "text-h3", desc: "三级标题"},
                    {value: "text-h4", desc: "四级标题"},
                    {value: "text-h5", desc: "五级标题"},
                    {value: "text-h6", desc: "六级标题"},
                    {value: "text-subtitle1", desc: "小标题1"},
                    {value: "text-subtitle2", desc: "小标题2"},
                    {value: "text-body1", desc: "正文1"},
                    {value: "text-body2", desc: "正文2"},
                    {value: "text", desc: "bbb"},
                ],
            },
            {
                name: "文字位置", children: [
                    {value: "text-right", desc: "右对齐"},
                    {value: "text-left", desc: "左对齐"},
                    {value: "text-center", desc: "居中对齐"},
                    {value: "text-justify", desc: "两侧对齐"},
                ],
            },
            {
                name: "文字样式", children: [
                    {value: "text-bold", desc: "加粗"},
                    {value: "text-italic", desc: "斜体"},
                    {value: "text-uppercase", desc: "全部大写"},
                    {value: "text-lowercase", desc: "全部小写"},
                    {value: "text-capitalize", desc: "首字母大写"},
                ],
            },
        ]
    },
    {
        name: "Quasar颜色", children: [
            {
                name: "文字颜色(品牌)", children: [
                    {value: "text-primary", desc: "#1976D2"},
                    {value: "text-secondary", desc: "#26A69A"},
                    {value: "text-accent", desc: "#9C27B0"},
                    {value: "text-dark", desc: "#1D1D1D"},
                    {value: "text-positive", desc: "#21BA45"},
                    {value: "text-negative", desc: "#C10015"},
                    {value: "text-info", desc: "#31CCEC"},
                    {value: "text-warning", desc: "#F2C037"},
                ],
            },
            {
                name: "文字颜色(全部)", children: [
                    {value: "text-red", desc: "#f44336"},
                    {value: "text-pink", desc: "#e91e63"},
                    {value: "text-purple", desc: "#9c27b0"},
                    {value: "text-deep-purple", desc: "#673ab7"},
                    {value: "text-indigo", desc: "#3f51b5"},
                    {value: "text-blue", desc: "#2196f3"},
                    {value: "text-light-blue", desc: "#03a9f4"},
                    {value: "text-cyan", desc: "#00bcd4"},
                    {value: "text-teal", desc: "#009688"},
                    {value: "text-green", desc: "#4caf50"},
                    {value: "text-light-green", desc: "#8bc34a"},
                    {value: "text-lime", desc: "#cddc39"},
                    {value: "text-yellow", desc: "#ffeb3b"},
                    {value: "text-amber", desc: "#ffc107"},
                    {value: "text-orange", desc: "#ff9800"},
                    {value: "text-deep-orange", desc: "#ff5722"},
                    {value: "text-brown", desc: "#795548"},
                    {value: "text-grey", desc: "#9e9e9e"},
                    {value: "text-blue-grey", desc: "#607d8b"},
                ],
            },
            {
                name: "背景颜色(品牌)", children: [
                    {value: "bg-primary", desc: "#1976D2"},
                    {value: "bg-secondary", desc: "#26A69A"},
                    {value: "bg-accent", desc: "#9C27B0"},
                    {value: "bg-dark", desc: "#1D1D1D"},
                    {value: "bg-positive", desc: "#21BA45"},
                    {value: "bg-negative", desc: "#C10015"},
                    {value: "bg-info", desc: "#31CCEC"},
                    {value: "bg-warning", desc: "#F2C037"},
                ],
            },
            {
                name: "背景颜色(全部)", children: [
                    {value: "bg-red", desc: "#f44336"},
                    {value: "bg-pink", desc: "#e91e63"},
                    {value: "bg-purple", desc: "#9c27b0"},
                    {value: "bg-deep-purple", desc: "#673ab7"},
                    {value: "bg-indigo", desc: "#3f51b5"},
                    {value: "bg-blue", desc: "#2196f3"},
                    {value: "bg-light-blue", desc: "#03a9f4"},
                    {value: "bg-cyan", desc: "#00bcd4"},
                    {value: "bg-teal", desc: "#009688"},
                    {value: "bg-green", desc: "#4caf50"},
                    {value: "bg-light-green", desc: "#8bc34a"},
                    {value: "bg-lime", desc: "#cddc39"},
                    {value: "bg-yellow", desc: "#ffeb3b"},
                    {value: "bg-amber", desc: "#ffc107"},
                    {value: "bg-orange", desc: "#ff9800"},
                    {value: "bg-deep-orange", desc: "#ff5722"},
                    {value: "bg-brown", desc: "#795548"},
                    {value: "bg-grey", desc: "#9e9e9e"},
                    {value: "bg-blue-grey", desc: "#607d8b"},
                ],
            },
        ]
    },
    {
        name: "Quasar外边距", children: [
            {
                name: "margin-all", children: [
                    {value: "q-ma-none", desc: "margin-top: 0"},
                    {value: "q-ma-xs", desc: "margin: " + size.xs},
                    {value: "q-ma-sm", desc: "margin: " + size.sm},
                    {value: "q-ma-md", desc: "margin: " + size.md},
                    {value: "q-ma-lg", desc: "margin: " + size.lg},
                    {value: "q-ma-xl", desc: "margin: " + size.xl},
                ],
            },
            {
                name: "margin-x", children: [
                    {value: "q-mx-none", desc: "margin-left-right-top: 0"},
                    {value: "q-mx-xs", desc: "margin-left-right: " + size.xs},
                    {value: "q-mx-sm", desc: "margin-left-right: " + size.sm},
                    {value: "q-mx-md", desc: "margin-left-right: " + size.md},
                    {value: "q-mx-lg", desc: "margin-left-right: " + size.lg},
                    {value: "q-mx-xl", desc: "margin-left-right: " + size.xl},
                ],
            },
            {
                name: "margin-y", children: [
                    {value: "q-my-none", desc: "margin-top-bottom-top: 0"},
                    {value: "q-my-xs", desc: "margin-top-bottom: " + size.xs},
                    {value: "q-my-sm", desc: "margin-top-bottom: " + size.sm},
                    {value: "q-my-md", desc: "margin-top-bottom: " + size.md},
                    {value: "q-my-lg", desc: "margin-top-bottom: " + size.lg},
                    {value: "q-my-xl", desc: "margin-top-bottom: " + size.xl},
                ],
            },
            {
                name: "margin-top", children: [
                    {value: "q-mt-none", desc: "margin-top: 0"},
                    {value: "q-mt-xs", desc: "margin-top: " + size.xs},
                    {value: "q-mt-sm", desc: "margin-top: " + size.sm},
                    {value: "q-mt-md", desc: "margin-top: " + size.md},
                    {value: "q-mt-lg", desc: "margin-top: " + size.lg},
                    {value: "q-mt-xl", desc: "margin-top: " + size.xl},
                ],
            },
            {
                name: "margin-bottom", children: [
                    {value: "q-mb-none", desc: "margin-bottom: 0"},
                    {value: "q-mb-xs", desc: "margin-bottom: " + size.xs},
                    {value: "q-mb-sm", desc: "margin-bottom: " + size.sm},
                    {value: "q-mb-md", desc: "margin-bottom: " + size.md},
                    {value: "q-mb-lg", desc: "margin-bottom: " + size.lg},
                    {value: "q-mb-xl", desc: "margin-bottom: " + size.xl},
                ],
            },
            {
                name: "margin-right", children: [
                    {value: "q-mr-none", desc: "margin-right: 0"},
                    {value: "q-mr-xs", desc: "margin-right: " + size.xs},
                    {value: "q-mr-sm", desc: "margin-right: " + size.sm},
                    {value: "q-mr-md", desc: "margin-right: " + size.md},
                    {value: "q-mr-lg", desc: "margin-right: " + size.lg},
                    {value: "q-mr-xl", desc: "margin-right: " + size.xl},
                ],
            },
            {
                name: "margin-left", children: [
                    {value: "q-ml-none", desc: "margin-left: 0"},
                    {value: "q-ml-xs", desc: "margin-left: " + size.xs},
                    {value: "q-ml-sm", desc: "margin-left: " + size.sm},
                    {value: "q-ml-md", desc: "margin-left: " + size.md},
                    {value: "q-ml-lg", desc: "margin-left: " + size.lg},
                    {value: "q-ml-xl", desc: "margin-left: " + size.xl},
                ],
            },
        ]
    },
    {
        name: "Quasar内边距", children: [
            {
                name: "padding-all", children: [
                    {value: "q-pa-none", desc: "padding-top: 0"},
                    {value: "q-pa-xs", desc: "padding: " + size.xs},
                    {value: "q-pa-sm", desc: "padding: " + size.sm},
                    {value: "q-pa-md", desc: "padding: " + size.md},
                    {value: "q-pa-lg", desc: "padding: " + size.lg},
                    {value: "q-pa-xl", desc: "padding: " + size.xl},
                ],
            },
            {
                name: "padding-x", children: [
                    {value: "q-px-none", desc: "padding-left-right-top: 0"},
                    {value: "q-px-xs", desc: "padding-left-right: " + size.xs},
                    {value: "q-px-sm", desc: "padding-left-right: " + size.sm},
                    {value: "q-px-md", desc: "padding-left-right: " + size.md},
                    {value: "q-px-lg", desc: "padding-left-right: " + size.lg},
                    {value: "q-px-xl", desc: "padding-left-right: " + size.xl},
                ],
            },
            {
                name: "padding-y", children: [
                    {value: "q-py-none", desc: "padding-top-bottom-top: 0"},
                    {value: "q-py-xs", desc: "padding-top-bottom: " + size.xs},
                    {value: "q-py-sm", desc: "padding-top-bottom: " + size.sm},
                    {value: "q-py-md", desc: "padding-top-bottom: " + size.md},
                    {value: "q-py-lg", desc: "padding-top-bottom: " + size.lg},
                    {value: "q-py-xl", desc: "padding-top-bottom: " + size.xl},
                ],
            },
            {
                name: "padding-top", children: [
                    {value: "q-pt-none", desc: "padding-top: 0"},
                    {value: "q-pt-xs", desc: "padding-top: " + size.xs},
                    {value: "q-pt-sm", desc: "padding-top: " + size.sm},
                    {value: "q-pt-md", desc: "padding-top: " + size.md},
                    {value: "q-pt-lg", desc: "padding-top: " + size.lg},
                    {value: "q-pt-xl", desc: "padding-top: " + size.xl},
                ],
            },
            {
                name: "padding-bottom", children: [
                    {value: "q-pb-none", desc: "padding-bottom: 0"},
                    {value: "q-pb-xs", desc: "padding-bottom: " + size.xs},
                    {value: "q-pb-sm", desc: "padding-bottom: " + size.sm},
                    {value: "q-pb-md", desc: "padding-bottom: " + size.md},
                    {value: "q-pb-lg", desc: "padding-bottom: " + size.lg},
                    {value: "q-pb-xl", desc: "padding-bottom: " + size.xl},
                ],
            },
            {
                name: "padding-right", children: [
                    {value: "q-pr-none", desc: "padding-right: 0"},
                    {value: "q-pr-xs", desc: "padding-right: " + size.xs},
                    {value: "q-pr-sm", desc: "padding-right: " + size.sm},
                    {value: "q-pr-md", desc: "padding-right: " + size.md},
                    {value: "q-pr-lg", desc: "padding-right: " + size.lg},
                    {value: "q-pr-xl", desc: "padding-right: " + size.xl},
                ],
            },
            {
                name: "padding-left", children: [
                    {value: "q-ml-none", desc: "padding-left: 0"},
                    {value: "q-ml-xs", desc: "padding-left: " + size.xs},
                    {value: "q-ml-sm", desc: "padding-left: " + size.sm},
                    {value: "q-ml-md", desc: "padding-left: " + size.md},
                    {value: "q-ml-lg", desc: "padding-left: " + size.lg},
                    {value: "q-ml-xl", desc: "padding-left: " + size.xl},
                ],
            },
        ]
    },
    {
        name: "Quasar阴影", children: [
            {
                name: "底部阴影", children: [
                    {value: "no-shadow", desc: "移除任何阴影"},
                    {value: "inset-shadow", desc: "顶部插入阴影"},
                    {value: "inset-shadow-down", desc: "在顶部设置一个插入阴影"},
                    {value: "shadow-transition", desc: "在底部设置一个插入阴影"},
                    {value: "shadow-1", desc: "设置1的深度"},
                    {value: "shadow-2", desc: "设置2的深度"},
                    {value: "shadow-3", desc: "设置3的深度"},
                    {value: "shadow-4", desc: "设置4的深度"},
                    {value: "shadow-5", desc: "设置5的深度"},
                    {value: "shadow-6", desc: "设置6的深度"},
                    {value: "shadow-7", desc: "设置7的深度"},
                    {value: "shadow-8", desc: "设置8的深度"},
                    {value: "shadow-9", desc: "设置9的深度"},
                    {value: "shadow-10", desc: "设置10的深度"},
                    {value: "shadow-$", desc: "范围1-24"},
                ],
            },
            {
                name: "顶部阴影", children: [
                    {value: "shadow-up-1", desc: "设置1的深度"},
                    {value: "shadow-up-2", desc: "设置2的深度"},
                    {value: "shadow-up-3", desc: "设置3的深度"},
                    {value: "shadow-up-4", desc: "设置4的深度"},
                    {value: "shadow-up-5", desc: "设置5的深度"},
                    {value: "shadow-up-6", desc: "设置6的深度"},
                    {value: "shadow-up-7", desc: "设置7的深度"},
                    {value: "shadow-up-8", desc: "设置8的深度"},
                    {value: "shadow-up-9", desc: "设置9的深度"},
                    {value: "shadow-up-10", desc: "设置10的深度"},
                    {value: "shadow-up-$", desc: "范围1-24"},
                ],
            },
        ]
    },
    {
        name: "Quasar可见性", children: [
            {
                name: "DIV可见性", children: [
                    {value: "disabled", desc: "游标更改为“disable”，不透明度设置为较低值。"},
                    {value: "hidden", desc: "display:none"},
                    {value: "invisible", desc: "visibility:hidden"},
                    {value: "transparent", desc: "透明背景"},
                    {value: "dimmed", desc: "深色覆盖层"},
                    {value: "light-dimmed", desc: "白色覆盖层"},
                    {value: "ellipsis", desc: "显示省略号"},
                    {value: "ellipsis-2", desc: "显示省略号2行"},
                    {value: "ellipsis-3", desc: "显示省略号3行"},
                    {value: "z-top", desc: "置顶(不包括弹窗)"},
                    {value: "z-max", desc: "置顶(所有组件)"},
                ],
            },
            {
                name: "平台可见性", children: [
                    {value: "desktop-only", desc: "仅在桌面上可见"},
                    {value: "mobile-only", desc: "仅在移动设备上可见"},
                    {value: "native-mobile-only", desc: "仅在Cordova/Capacitor上可见"},
                    {value: "cordova-only", desc: "仅在Cordova/Capacitor上可见"},
                    {value: "capacitor-only", desc: "仅在Capacitor包装的应用上可见"},
                    {value: "electron-only", desc: "仅在Electron包装的应用上可见"},
                    {value: "touch-only", desc: "仅在具有触摸功能的平台上可见"},
                    {value: "platform-ios-only", desc: "仅在iOS平台上可见"},
                    {value: "platform-android-only", desc: "仅在Android平台上可见"},
                    {value: "within-iframe-only", desc: "仅当整个网站在IFRAME标记下时才可见"},
                ],
            },
            {
                name: "平台不可见性", children: [
                    {value: "desktop-hide", desc: "仅在桌面上隐藏"},
                    {value: "mobile-hide", desc: "仅在移动设备上隐藏"},
                    {value: "native-mobile-hide", desc: "仅在Cordova/Capacitor上隐藏"},
                    {value: "cordova-hide", desc: "仅在Cordova/Capacitor上隐藏"},
                    {value: "capacitor-hide", desc: "仅在Capacitor包装的应用上隐藏"},
                    {value: "electron-hide", desc: "仅在Electron包装的应用上隐藏"},
                    {value: "touch-hide", desc: "仅在具有触摸功能的平台上隐藏"},
                    {value: "platform-ios-hide", desc: "仅在iOS平台上隐藏"},
                    {value: "platform-android-hide", desc: "仅在Android平台上隐藏"},
                    {value: "within-iframe-hide", desc: "仅当整个网站在IFRAME标记下时才隐藏"},
                ],
            },
            {
                name: "方向/打印", children: [
                    {value: "orientation-portrait", desc: "仅当屏幕方向为纵向时才可见"},
                    {value: "orientation-landscape", desc: "仅当屏幕方向为横向时才可见"},
                    {value: "print-only", desc: "仅在打印媒体上可见 - 在屏幕媒体隐藏"},
                    {value: "print-hide", desc: "屏幕媒体上可见 - 在打印媒体隐藏"},
                ],
            },
        ]
    },
    {
        name: "Quasar定位", children: [
            {
                name: "定位", children: [
                    {value: "fullscreen", desc: "全屏"},
                    {value: "fixed", desc: "position:fixed"},
                    {value: "fixed-center", desc: "position:fixed center"},
                ],
            },
            {
                name: "固定定位", children: [
                    {value: "fixed-top", desc: "固定定位在屏幕顶部"},
                    {value: "fixed-right", desc: "固定定位在屏幕右边缘"},
                    {value: "fixed-bottom", desc: "固定定位在屏幕底部"},
                    {value: "fixed-left", desc: "固定定位在屏幕左边缘"},
                    {value: "fixed-top-left", desc: "固定定位在屏幕左上角"},
                    {value: "fixed-top-right", desc: "固定定位在屏幕右上角"},
                    {value: "fixed-bottom-left", desc: "固定定位在屏幕左下角"},
                    {value: "fixed-bottom-right", desc: "固定定位在屏幕右下角"},
                    {value: "fixed-full", desc: "从固定位置继承边框半径到所有屏幕边缘元素"},
                ],
            },
            {
                name: "绝对定位", children: [
                    {value: "absolute-top", desc: "绝对定位在屏幕顶部"},
                    {value: "absolute-right", desc: "绝对定位在屏幕右边缘"},
                    {value: "absolute-bottom", desc: "绝对定位在屏幕底部"},
                    {value: "absolute-left", desc: "绝对定位在屏幕左边缘"},
                    {value: "absolute-top-left", desc: "绝对定位在屏幕左上角"},
                    {value: "absolute-top-right", desc: "绝对定位在屏幕右上角"},
                    {value: "absolute-bottom-left", desc: "绝对定位在屏幕左下角"},
                    {value: "absolute-bottom-right", desc: "绝对定位在屏幕右下角"},
                    {value: "absolute-full", desc: "从绝对位置继承边框半径到所有屏幕边缘元素"},
                ],
            },
            {
                name: "对齐", children: [
                    {value: "float-left", desc: "float:left"},
                    {value: "float-right", desc: "float:right"},
                    {value: "on-left", desc: "在右侧设置一个小边距;通常用于有兄弟元素的图标元素"},
                    {value: "on-right", desc: "在左侧设置一个小边距;通常用于有兄弟元素的图标元素"},
                    {value: "vertical-top", desc: "vertical-align:top"},
                    {value: "vertical-middle", desc: "vertical-align:middle"},
                    {value: "vertical-bottom", desc: "vertical-align:bottom"},
                ],
            },
        ]
    },
    {
        name: "布局", children: [
            {
                name: "比例", children: [
                    {value: "aspect-auto", desc: "aspect-ratio: auto"},
                    {value: "aspect-square", desc: "aspect-ratio: 1 / 1"},
                    {value: "aspect-video", desc: "aspect-ratio: 16 / 9"},
                ],
            },
            {
                name: "容器大小", children: [
                    {value: "None", desc: "width: 100%;"},
                    {value: "sm:$", desc: "max-width: 640px;"},
                    {value: "md:$", desc: "max-width: 768px;"},
                    {value: "lg:$", desc: "max-width: 1024px;"},
                    {value: "xl:$", desc: "max-width: 1280px;"},
                    {value: "2xl:$", desc: "max-width: 1536px;"},

                ],
            },
            {
                name: "Columns列", children: [
                    {value: "columns-1", desc: "columns: 1;"},
                    {value: "columns-2", desc: "columns: 2;"},
                    {value: "columns-3", desc: "columns: 3;"},
                    {value: "columns-4", desc: "columns: 4;"},
                    {value: "columns-5", desc: "columns: 5;"},
                    {value: "columns-6", desc: "columns: 6;"},
                    {value: "columns-auto", desc: "columns: auto;"},
                    {value: "columns-3xs", desc: "columns: 16rem;"},
                    {value: "columns-2xs", desc: "columns: 10rem;"},
                    {value: "columns-xs", desc: "columns: 24rem;"},
                    {value: "columns-md", desc: "columns: 28rem;"},
                    {value: "columns-lg", desc: "columns: 32rem;"},
                    {value: "columns-xl", desc: "columns: 36rem;"},
                    {value: "columns-2xl", desc: "columns: 42rem;"},
                    {value: "columns-3xl", desc: "columns: 48rem;"},
                ],
            },
            {
                name: "装饰切片", children: [
                    {value: "box-decoration-clone", desc: "box-decoration-break: clone;"},
                    {value: "box-decoration-slice", desc: "box-decoration-break: slice;"},

                ],
            },
            {
                name: "包装盒尺寸", children: [
                    {value: "box-border", desc: "box-sizing: border-box;(包括)"},
                    {value: "box-content", desc: "box-sizing: content-box;(不包括)"},
                ],
            },
            {
                name: "display", children: [
                    {value: "block", desc: "display: block;"},
                    {value: "inline-block", desc: "display: inline-block;"},
                    {value: "inline", desc: "display: inline;"},
                    {value: "flex", desc: "display: flex;"},
                    {value: "inline-flex", desc: "display: inline-flex;"},
                    {value: "table", desc: "display: table;"},
                    {value: "grid", desc: "display: grid;"},
                    {value: "inline-grid", desc: "display: inline-grid;"},
                    {value: "contents", desc: "display: contents;"},
                    {value: "list-item", desc: "display: list-item;"},
                    {value: "hidden", desc: "display: none;"},
                ],
            },
            {
                name: "float浮动", children: [
                    {value: "float-start", desc: "float: inline-start;"},
                    {value: "float-end", desc: "float: inline-end;"},
                    {value: "float-right", desc: "float: right;"},
                    {value: "float-left", desc: "float: left;"},
                    {value: "float-none", desc: "float: none;"},
                ],
            },
            {
                name: "clear清除浮动", children: [
                    {value: "clear-start", desc: "clear: inline-start;"},
                    {value: "clear-end", desc: "clear: inline-end;"},
                    {value: "clear-left", desc: "clear: left;"},
                    {value: "clear-right", desc: "clear: right;"},
                    {value: "clear-both", desc: "clear: both;"},
                    {value: "clear-none", desc: "clear: none;"},
                ],
            },
            {
                name: "堆叠上下文", children: [
                    {value: "isolate", desc: "isolation: isolate;"},
                    {value: "isolation-auto", desc: "isolation: auto;"},
                ],
            },
            {
                name: "对象拟合", children: [
                    {value: "object-contain", desc: "object-fit: contain;"},
                    {value: "object-cover", desc: "object-fit: cover;"},
                    {value: "object-fill", desc: "object-fit: fill;"},
                    {value: "object-none", desc: "object-fit: none;"},
                    {value: "object-scale-down", desc: "object-fit: scale-down;"},
                ],
            },
            {
                name: "定位替换元素", children: [
                    {value: "object-bottom", desc: "object-position: bottom;"},
                    {value: "object-center", desc: "object-position: center;"},
                    {value: "object-left", desc: "object-position: left;"},
                    {value: "object-left-bottom", desc: "object-position: left bottom;"},
                    {value: "object-left-top", desc: "object-position: left top;"},
                    {value: "object-right", desc: "object-position: right;"},
                    {value: "object-right-bottom", desc: "object-position: right bottom;"},
                    {value: "object-right-top", desc: "object-position: right top;"},
                    {value: "object-top", desc: "object-position: top;"}
                ],
            },
            {
                name: "overflow溢出", children: [
                    {"value": "overflow-auto", "desc": "overflow: auto;"},
                    {"value": "overflow-hidden", "desc": "overflow: hidden;"},
                    {"value": "overflow-clip", "desc": "overflow: clip;"},
                    {"value": "overflow-visible", "desc": "overflow: visible;"},
                    {"value": "overflow-scroll", "desc": "overflow: scroll;"},
                    {"value": "overflow-x-auto", "desc": "overflow-x: auto;"},
                    {"value": "overflow-y-auto", "desc": "overflow-y: auto;"},
                    {"value": "overflow-x-hidden", "desc": "overflow-x: hidden;"},
                    {"value": "overflow-y-hidden", "desc": "overflow-y: hidden;"},
                    {"value": "overflow-x-clip", "desc": "overflow-x: clip;"},
                    {"value": "overflow-x-visible", "desc": "overflow-x: visible;"},
                    {"value": "overflow-y-visible", "desc": "overflow-y: visible;"},
                    {"value": "overflow-x-scroll", "desc": "overflow-x: scroll;"},
                    {"value": "overflow-y-scroll", "desc": "overflow-y: scroll;"},
                ],
            },
            {
                name: "overScroll滚动", children: [
                    {
                        "value": "overscroll-auto",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-contain",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-none",
                        "desc": "overscroll-behavior:"
                    },
                    {
                        "value": "overscroll-y-auto",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-y-contain",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-y-none",
                        "desc": "overscroll-behavior-y:"
                    },
                    {
                        "value": "overscroll-x-auto",
                        "desc": "overscroll-behavior-x:"
                    },
                    {
                        "value": "overscroll-x-contain",
                        "desc": "overscroll-behavior-x:"
                    },
                    {
                        "value": "overscroll-x-none",
                        "desc": "overscroll-behavior-x:"
                    }
                ],
            },
            {
                name: "position位置", children: [
                    {
                        "value": "static",
                        "desc": "position:"
                    },
                    {
                        "value": "fixed",
                        "desc": "position:"
                    },
                    {
                        "value": "absolute",
                        "desc": "position:"
                    },
                    {
                        "value": "relative",
                        "desc": "position:"
                    },
                    {
                        "value": "sticky",
                        "desc": "position:"
                    }
                ],
            }
            ,
            {
                name: "position位置", children: [
                    {
                        "value": "static",
                        "desc": "position:"
                    },
                    {
                        "value": "fixed",
                        "desc": "position:"
                    },
                    {
                        "value": "absolute",
                        "desc": "position:"
                    },
                    {
                        "value": "relative",
                        "desc": "position:"
                    },
                    {
                        "value": "sticky",
                        "desc": "position:"
                    },
                    {
                        "value": "bottom-0",
                        "desc": "bottom: 0px;"
                    },
                    {
                        "value": "left-0",
                        "desc": "left: 0px;"
                    },
                    {
                        "value": "inset-px",
                        "desc": "inset: 1px;"
                    }
                ],
            },
            {
                name: "visibility可见性", children: [
                    {
                        "value": "visible",
                        "desc": "visibility: visible;"
                    },
                    {
                        "value": "invisible",
                        "desc": "visibility: hidden;"
                    },
                    {
                        "value": "collapse",
                        "desc": "visibility: collapse;"
                    }
                ],
            },
            {
                name: "可见性", children: [
                    {
                        "value": "visible",
                        "desc": "visibility: visible;"
                    },
                    {
                        "value": "invisible",
                        "desc": "visibility: hidden;"
                    },
                    {
                        "value": "collapse",
                        "desc": "visibility: collapse;"
                    }
                ]
            }
        ]
    },
    {
        name: "flexBox Gird", children: [
            {
                name: "flex", children: [
                    {
                        "value": "basis-0",
                        "desc": "flex-basis: 0px;"
                    },
                    {
                        "value": "basis-1",
                        "desc": "flex-basis: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "basis-2",
                        "desc": "flex-basis: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "basis-3",
                        "desc": "flex-basis: 0.75rem; /* 12px */"
                    },
                    {
                        "value": "basis-4",
                        "desc": "flex-basis: 1rem; /* 16px */"
                    },
                    {
                        "value": "basis-5",
                        "desc": "flex-basis: 1.25rem; /* 20px */"
                    },
                    {
                        "value": "basis-0.5",
                        "desc": "flex-basis: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "basis-1.5",
                        "desc": "flex-basis: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "basis-2.5",
                        "desc": "flex-basis: 0.625rem; /* 10px */"
                    },
                    {
                        "value": "basis-3.5",
                        "desc": "flex-basis: 0.875rem; /* 14px */"
                    },
                    {
                        "value": "basis-full",
                        "desc": "flex-basis: 100%;"
                    }
                ],
            },
            {
                name: "Flex Direction", children: [
                    {
                        "value": "flex-row",
                        "desc": "flex-direction: row;"
                    },
                    {
                        "value": "flex-row-reverse",
                        "desc": "flex-direction: row-reverse;"
                    },
                    {
                        "value": "flex-col",
                        "desc": "flex-direction: column;"
                    },
                    {
                        "value": "flex-col-reverse",
                        "desc": "flex-direction: column-reverse;"
                    }
                ],
            },
            {
                name: "flex wrap", children: [
                    {
                        "value": "flex-wrap",
                        "desc": "flex-wrap: wrap;"
                    },
                    {
                        "value": "flex-wrap-reverse",
                        "desc": "flex-wrap: wrap-reverse;"
                    },
                    {
                        "value": "flex-nowrap",
                        "desc": "flex-wrap: nowrap;"
                    }
                ],
            },
            {
                name: "Flex", children: [
                    {
                        "value": "flex-1",
                        "desc": "flex: 1 1 0%;"
                    },
                    {
                        "value": "flex-auto",
                        "desc": "flex: 1 1 auto;"
                    },
                    {
                        "value": "flex-initial",
                        "desc": "flex: 0 1 auto;"
                    },
                    {
                        "value": "flex-none",
                        "desc": "flex: none;"
                    }
                ],
            },
            {
                name: "Flex Grow", children: [
                    {
                        "value": "grow",
                        "desc": "flex-grow: 1;"
                    },
                    {
                        "value": "grow-0",
                        "desc": "flex-grow: 0;"
                    }
                ],
            }, {
                name: "Flex Shrink", children: [
                    {
                        "value": "shrink",
                        "desc": "flex-shrink: 1;"
                    },
                    {
                        "value": "shrink-0",
                        "desc": "flex-shrink: 0;"
                    }
                ],
            }, {
                name: "Order", children: [
                    {
                        "value": "order-1",
                        "desc": "order: 1;"
                    },
                    {
                        "value": "order-2",
                        "desc": "order: 2;"
                    },
                    {
                        "value": "order-3",
                        "desc": "order: 3;"
                    },
                    {
                        "value": "order-4",
                        "desc": "order: 4;"
                    },
                    {
                        "value": "order-5",
                        "desc": "order: 5;"
                    },
                    {
                        "value": "order-6",
                        "desc": "order: 6;"
                    }
                ],
            }, {
                name: "Grid Template Columns", children: [
                    {
                        "value": "grid-cols-1",
                        "desc": "grid-template-columns: repeat(1, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-2",
                        "desc": "grid-template-columns: repeat(2, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-3",
                        "desc": "grid-template-columns: repeat(3, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-4",
                        "desc": "grid-template-columns: repeat(4, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-5",
                        "desc": "grid-template-columns: repeat(5, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-cols-6",
                        "desc": "grid-template-columns: repeat(6, minmax(0, 1fr));"
                    }
                ],
            }, {
                name: "Grid Column Start / End", children: [
                    {
                        "value": "col-auto",
                        "desc": "grid-column: auto;"
                    },
                    {
                        "value": "col-span-1",
                        "desc": "grid-column: span 1 / span 1;"
                    },
                    {
                        "value": "col-span-2",
                        "desc": "grid-column: span 2 / span 2;"
                    },
                    {
                        "value": "col-span-3",
                        "desc": "grid-column: span 3 / span 3;"
                    },
                    {
                        "value": "col-span-4",
                        "desc": "grid-column: span 4 / span 4;"
                    },
                    {
                        "value": "col-span-5",
                        "desc": "grid-column: span 5 / span 5;"
                    }
                ],
            }, {
                name: "Grid Template Rows", children: [
                    {
                        "value": "grid-rows-1",
                        "desc": "grid-template-rows: repeat(1, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-2",
                        "desc": "grid-template-rows: repeat(2, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-3",
                        "desc": "grid-template-rows: repeat(3, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-4",
                        "desc": "grid-template-rows: repeat(4, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-5",
                        "desc": "grid-template-rows: repeat(5, minmax(0, 1fr));"
                    },
                    {
                        "value": "grid-rows-6",
                        "desc": "grid-template-rows: repeat(6, minmax(0, 1fr));"
                    }
                ],
            }, {
                name: "Grid Row Start / End", children: [
                    {
                        "value": "row-auto",
                        "desc": "grid-row: auto;"
                    },
                    {
                        "value": "row-span-1",
                        "desc": "grid-row: span 1 / span 1;"
                    },
                    {
                        "value": "row-span-2",
                        "desc": "grid-row: span 2 / span 2;"
                    },
                    {
                        "value": "row-span-3",
                        "desc": "grid-row: span 3 / span 3;"
                    },
                    {
                        "value": "row-span-4",
                        "desc": "grid-row: span 4 / span 4;"
                    },
                    {
                        "value": "row-span-5",
                        "desc": "grid-row: span 5 / span 5;"
                    }
                ],
            }, {
                name: "Grid Auto Flow", children: [
                    {
                        "value": "grid-flow-row",
                        "desc": "grid-auto-flow: row;"
                    },
                    {
                        "value": "grid-flow-col",
                        "desc": "grid-auto-flow: column;"
                    },
                    {
                        "value": "grid-flow-dense",
                        "desc": "grid-auto-flow: dense;"
                    },
                    {
                        "value": "grid-flow-row-dense",
                        "desc": "grid-auto-flow: row dense;"
                    },
                    {
                        "value": "grid-flow-col-dense",
                        "desc": "grid-auto-flow: column dense;"
                    }
                ],
            }, {
                name: "Grid Auto Columns", children: [
                    {
                        "value": "auto-cols-auto",
                        "desc": "grid-auto-columns: auto;"
                    },
                    {
                        "value": "auto-cols-min",
                        "desc": "grid-auto-columns: min-content;"
                    },
                    {
                        "value": "auto-cols-max",
                        "desc": "grid-auto-columns: max-content;"
                    },
                    {
                        "value": "auto-cols-fr",
                        "desc": "grid-auto-columns: minmax(0, 1fr);"
                    }
                ],
            }, {
                name: "Grid Auto Rows", children: [
                    {value: "demo1", desc: "demo"},
                ],
            },
            {
                name: "Gap", children: [
                    {
                        "value": "gap-0",
                        "desc": "gap: 0px;"
                    },
                    {
                        "value": "gap-x-0",
                        "desc": "column-gap: 0px;"
                    },
                    {
                        "value": "gap-y-0",
                        "desc": "row-gap: 0px;"
                    },
                    {
                        "value": "gap-px",
                        "desc": "gap: 1px;"
                    },
                    {
                        "value": "gap-x-px",
                        "desc": "column-gap: 1px;"
                    },
                    {
                        "value": "gap-y-px",
                        "desc": "row-gap: 1px;"
                    }
                ],
            }, {
                name: "Justify Content", children: [
                    {
                        "value": "justify-normal",
                        "desc": "justify-content: normal;"
                    },
                    {
                        "value": "justify-start",
                        "desc": "justify-content: flex-start;"
                    },
                    {
                        "value": "justify-end",
                        "desc": "justify-content: flex-end;"
                    },
                    {
                        "value": "justify-center",
                        "desc": "justify-content: center;"
                    },
                    {
                        "value": "justify-between",
                        "desc": "justify-content: space-between;"
                    },
                    {
                        "value": "justify-around",
                        "desc": "justify-content: space-around;"
                    },
                    {
                        "value": "justify-evenly",
                        "desc": "justify-content: space-evenly;"
                    },
                    {
                        "value": "justify-stretch",
                        "desc": "justify-content: stretch;"
                    }
                ],
            }, {
                name: "Justify Items", children: [
                    {
                        "value": "justify-items-start",
                        "desc": "justify-items: start;"
                    },
                    {
                        "value": "justify-items-end",
                        "desc": "justify-items: end;"
                    },
                    {
                        "value": "justify-items-center",
                        "desc": "justify-items: center;"
                    },
                    {
                        "value": "justify-items-stretch",
                        "desc": "justify-items: stretch;"
                    }
                ],
            }, {
                name: "Justify Self", children: [
                    {
                        "value": "justify-self-auto",
                        "desc": "justify-self: auto;"
                    },
                    {
                        "value": "justify-self-start",
                        "desc": "justify-self: start;"
                    },
                    {
                        "value": "justify-self-end",
                        "desc": "justify-self: end;"
                    },
                    {
                        "value": "justify-self-center",
                        "desc": "justify-self: center;"
                    },
                    {
                        "value": "justify-self-stretch",
                        "desc": "justify-self: stretch;"
                    }
                ],
            }, {
                name: "Align Content", children: [
                    {
                        "value": "content-normal",
                        "desc": "align-content: normal;"
                    },
                    {
                        "value": "content-center",
                        "desc": "align-content: center;"
                    },
                    {
                        "value": "content-start",
                        "desc": "align-content: flex-start;"
                    },
                    {
                        "value": "content-end",
                        "desc": "align-content: flex-end;"
                    },
                    {
                        "value": "content-between",
                        "desc": "align-content: space-between;"
                    },
                    {
                        "value": "content-around",
                        "desc": "align-content: space-around;"
                    },
                    {
                        "value": "content-evenly",
                        "desc": "align-content: space-evenly;"
                    },
                    {
                        "value": "content-baseline",
                        "desc": "align-content: baseline;"
                    },
                    {
                        "value": "content-stretch",
                        "desc": "align-content: stretch;"
                    }
                ],
            }, {
                name: "Align Items", children: [
                    {
                        "value": "items-start",
                        "desc": "align-items: flex-start;"
                    },
                    {
                        "value": "items-end",
                        "desc": "align-items: flex-end;"
                    },
                    {
                        "value": "items-center",
                        "desc": "align-items: center;"
                    },
                    {
                        "value": "items-baseline",
                        "desc": "align-items: baseline;"
                    },
                    {
                        "value": "items-stretch",
                        "desc": "align-items: stretch;"
                    }
                ],
            }, {
                name: "Align Self", children: [
                    {
                        "value": "self-auto",
                        "desc": "align-self: auto;"
                    },
                    {
                        "value": "self-start",
                        "desc": "align-self: flex-start;"
                    },
                    {
                        "value": "self-end",
                        "desc": "align-self: flex-end;"
                    },
                    {
                        "value": "self-center",
                        "desc": "align-self: center;"
                    },
                    {
                        "value": "self-stretch",
                        "desc": "align-self: stretch;"
                    },
                    {
                        "value": "self-baseline",
                        "desc": "align-self: baseline;"
                    }
                ],
            }, {
                name: "Place Content", children: [
                    {
                        "value": "content-normal",
                        "desc": "place-content: normal;"
                    },
                    {
                        "value": "content-center",
                        "desc": "place-content: center;"
                    },
                    {
                        "value": "content-start",
                        "desc": "place-content: flex-start;"
                    },
                    {
                        "value": "content-end",
                        "desc": "place-content: flex-end;"
                    },
                    {
                        "value": "content-between",
                        "desc": "place-content: space-between;"
                    },
                    {
                        "value": "content-around",
                        "desc": "place-content: space-around;"
                    },
                    {
                        "value": "content-evenly",
                        "desc": "place-content: space-evenly;"
                    },
                    {
                        "value": "content-stretch",
                        "desc": "place-content: stretch;"
                    }
                ],
            }, {
                name: "Place Items", children: [
                    {value: "demo1", desc: "demo"},
                ],
            }, {
                name: "demo", children: [
                    {
                        "value": "items-auto",
                        "desc": "place-items: auto auto;"
                    },
                    {
                        "value": "items-start",
                        "desc": "place-items: start start;"
                    },
                    {
                        "value": "items-end",
                        "desc": "place-items: end end;"
                    },
                    {
                        "value": "items-center",
                        "desc": "place-items: center center;"
                    },
                    {
                        "value": "items-stretch",
                        "desc": "place-items: stretch stretch;"
                    }
                ],
            },
            {
                name: "Place Self", children: [
                    {
                        "value": "self-auto",
                        "desc": "place-self: auto auto;"
                    },
                    {
                        "value": "self-start",
                        "desc": "place-self: start start;"
                    },
                    {
                        "value": "self-end",
                        "desc": "place-self: end end;"
                    },
                    {
                        "value": "self-center",
                        "desc": "place-self: center center;"
                    },
                    {
                        "value": "self-stretch",
                        "desc": "place-self: stretch stretch;"
                    }
                ],
            },
        ]
    },
    {
        name: "间隔", children: [
            {
                name: "Padding", children: [
                    {
                        "value": "padding",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-left, padding-right",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-top, padding-bottom",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-inline-start",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-inline-end",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-top",
                        "desc": "0px"
                    },
                    {
                        "value": "padding-right",
                        "desc": "0px"
                    }
                ],
            },
            {
                name: "Margin", children: [
                    {
                        "value": "margin",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-left",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-right",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-top",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-bottom",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-inline-start",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-inline-end",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-top",
                        "desc": "0px"
                    },
                    {
                        "value": "margin-right",
                        "desc": "0px"
                    }
                ],
            },
            {
                name: "Space Between", children: [
                    {
                        "value": "space-x-0",
                        "desc": "0px",
                    },
                    {
                        "value": "space-y-0",
                        "desc": "0px",
                    },
                    {
                        "value": "space-x-0.5",
                        "desc": "0.125rem",
                    },
                    {
                        "value": "space-y-0.5",
                        "desc": "0.125rem",
                    },
                    {
                        "value": "space-x-1",
                        "desc": "0.25rem",
                    },
                    {
                        "value": "space-y-1 ",
                        "desc": "0.25rem",
                    },
                ],
            },
        ]
    },
    {
        name: "尺寸", children: [
            {
                name: "Width", children: [
                    {"value": "w-0", "desc": "width: 0px"},
                    {"value": "w-px", "desc": "width: 1px"},
                    {"value": "w-0.5", "desc": "width: 0.125rem /* 2px */"},
                    {"value": "w-1", "desc": "width: 0.25rem /* 4px */"},
                    {"value": "w-1.5", "desc": "width: 0.375rem /* 6px */"},
                    {"value": "w-2", "desc": "width: 0.5rem /* 8px */"},
                    {"value": "w-2.5", "desc": "width: 0.625rem /* 10px */"},
                    {"value": "w-3", "desc": "width: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Min-Width", children: [
                    {"value": "min-w-0", "desc": "min-width: 0px"},
                    {"value": "min-w-1", "desc": "min-width: 0.25rem /* 4px */"},
                    {"value": "min-w-2", "desc": "min-width: 0.5rem /* 8px */"},
                    {"value": "min-w-3", "desc": "min-width: 0.75rem /* 12px */"},
                    {"value": "min-w-4", "desc": "min-width: 1rem /* 16px */"},
                    {"value": "min-w-5", "desc": "min-width: 1.25rem /* 20px */"},
                    {"value": "min-w-6", "desc": "min-width: 1.5rem /* 24px */"},
                    {"value": "min-w-7", "desc": "min-width: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Max-Width", children: [
                    {"value": "max-w-0", "desc": "max-width: 0px"},
                    {"value": "max-w-px", "desc": "max-width: 1px"},
                    {"value": "max-w-0.5", "desc": "max-width: 0.125rem /* 2px */"},
                    {"value": "max-w-1", "desc": "max-width: 0.25rem /* 4px */"},
                    {"value": "max-w-1.5", "desc": "max-width: 0.375rem /* 6px */"},
                    {"value": "max-w-2", "desc": "max-width: 0.5rem /* 8px */"},
                    {"value": "max-w-2.5", "desc": "max-width: 0.625rem /* 10px */"},
                    {"value": "max-w-3", "desc": "max-width: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Height", children: [
                    {"value": "h-0", "desc": "height: 0px"},
                    {"value": "h-px", "desc": "height: 1px"},
                    {"value": "h-0.5", "desc": "height: 0.125rem /* 2px */"},
                    {"value": "h-1", "desc": "height: 0.25rem /* 4px */"},
                    {"value": "h-1.5", "desc": "height: 0.375rem /* 6px */"},
                    {"value": "h-2", "desc": "height: 0.5rem /* 8px */"},
                    {"value": "h-2.5", "desc": "height: 0.625rem /* 10px */"},
                    {"value": "h-3", "desc": "height: 0.75rem /* 12px */"}
                ],
            },
            {
                name: "Min-Height", children: [
                    {"value": "min-h-0", "desc": "min-height: 0px"},
                    {"value": "min-h-1", "desc": "min-height: 0.25rem /* 4px */"},
                    {"value": "min-h-2", "desc": "min-height: 0.5rem /* 8px */"},
                    {"value": "min-h-3", "desc": "min-height: 0.75rem /* 12px */"},
                    {"value": "min-h-4", "desc": "min-height: 1rem /* 16px */"},
                    {"value": "min-h-5", "desc": "min-height: 1.25rem /* 20px */"},
                    {"value": "min-h-6", "desc": "min-height: 1.5rem /* 24px */"}
                ],
            },
            {
                name: "Max-Height", children: [
                    {"value": "max-h-0", "desc": "max-height: 0px"},
                    {"value": "max-h-px", "desc": "max-height: 1px"},
                    {"value": "max-h-0.5", "desc": "max-height: 0.125rem /* 2px */"},
                    {"value": "max-h-1", "desc": "max-height: 0.25rem /* 4px */"},
                    {"value": "max-h-1.5", "desc": "max-height: 0.375rem /* 6px */"},
                    {"value": "max-h-2", "desc": "max-height: 0.5rem /* 8px */"},
                    {"value": "max-h-2.5", "desc": "max-height: 0.625rem /* 10px */"}
                ],
            },
            {
                name: "size", children: [
                    {"value": "size-0", "desc": "width: 0px;height: 0px"},
                    {"value": "size-px", "desc": "width: 1px;height: 1px"},
                    {"value": "size-0.5", "desc": "width: 0.125rem /* 2px */height: 0.125rem /* 2px */"},
                    {"value": "size-1", "desc": "width: 0.25rem /* 4px */height: 0.25rem /* 4px */"},
                    {"value": "size-1.5", "desc": "width: 0.375rem /* 6px */height: 0.375rem /* 6px */"},
                    {"value": "size-2", "desc": "width: 0.5rem /* 8px */height: 0.5rem /* 8px */"},
                    {"value": "size-2.5", "desc": "width: 0.625rem /* 10px */height: 0.625rem /* 10px */"}
                ]
            }
        ]
    },
    {
        name: "排版", children: [
            {
                name: "Font Family", children: [
                    {
                        value: "font-sans",
                        desc: "font-family: ui-sans-serif, system-ui, sans-serif Apple Color Emoji Segoe UI Emoji Segoe UI Symbol Noto Color Emoji"
                    },
                    {
                        value: "font-serif",
                        desc: "font-family: ui-serif, Georgia, Cambria Times New Roman Times, serif "
                    },
                    {
                        value: "font-mono",
                        desc: "font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono Courier New monospace;"
                    },
                ],
            },
            {
                name: "Font Size", children: [
                    {"value": "text-xs", "desc": "font-size: 0.75rem /* 12px */; line-height: 1rem /* 16px */"},
                    {"value": "text-sm", "desc": "font-size: 0.875rem /* 14px */; line-height: 1.25rem /* 20px */"},
                    {"value": "text-base", "desc": "font-size: 1rem /* 16px */; line-height: 1.5rem /* 24px */"},
                    {"value": "text-lg", "desc": "font-size: 1.125rem /* 18px */; line-height: 1.75rem /* 28px */"},
                    {"value": "text-xl", "desc": "font-size: 1.25rem /* 20px */; line-height: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Font Smoothing", children: [
                    {"value": "text-xs", "desc": "font-size: 0.75rem /* 12px */; line-height: 1rem /* 16px */"},
                    {"value": "text-sm", "desc": "font-size: 0.875rem /* 14px */; line-height: 1.25rem /* 20px */"},
                    {"value": "text-base", "desc": "font-size: 1rem /* 16px */; line-height: 1.5rem /* 24px */"},
                    {"value": "text-lg", "desc": "font-size: 1.125rem /* 18px */; line-height: 1.75rem /* 28px */"},
                    {"value": "text-xl", "desc": "font-size: 1.25rem /* 20px */; line-height: 1.75rem /* 28px */"}
                ],
            },
            {
                name: "Font Size", children: [
                    {
                        "value": "antialiased",
                        desc: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
                    }, {
                        "value": "subpixel-antialiased",
                        desc: "-webkit-font-smoothing: auto -moz-osx-font-smoothing: auto;"
                    }
                ],
            },
            {
                name: "Font Style", children: [
                    {value: "italic", desc: "font-style: italic;"},
                    {value: "not-italic", desc: "font-style: normal;"},
                ],
            }, {
                name: "Font Weight", children: [
                    {
                        "value": "font-thin",
                        "desc": "font-weight: 100"
                    },
                    {
                        "value": "font-extralight",
                        "desc": "font-weight: 200"
                    },
                    {
                        "value": "font-light",
                        "desc": "font-weight: 300"
                    },
                    {
                        "value": "font-normal",
                        "desc": "font-weight: 400"
                    },
                    {
                        "value": "font-medium",
                        "desc": "font-weight: 500"
                    },
                    {
                        "value": "font-semibold",
                        "desc": "font-weight: 600"
                    },
                    {
                        "value": "font-bold",
                        "desc": "font-weight: 700"
                    },
                    {
                        "value": "font-extrabold",
                        "desc": "font-weight: 800"
                    },
                    {
                        "value": "font-black",
                        "desc": "font-weight: 900"
                    }
                ],
            }, {
                name: "Font Variant Numeric", children: [
                    {
                        "value": "normal-nums",
                        "desc": "font-variant-numeric: normal"
                    },
                    {
                        "value": "ordinal",
                        "desc": "font-variant-numeric: ordinal"
                    },
                    {
                        "value": "slashed-zero",
                        "desc": "font-variant-numeric: slashed-zero"
                    },
                    {
                        "value": "lining-nums",
                        "desc": "font-variant-numeric: lining-nums"
                    },
                    {
                        "value": "oldstyle-nums",
                        "desc": "font-variant-numeric: oldstyle-nums"
                    },
                    {
                        "value": "proportional-nums",
                        "desc": "font-variant-numeric: proportional-nums"
                    },
                    {
                        "value": "tabular-nums",
                        "desc": "font-variant-numeric: tabular-nums"
                    },
                    {
                        "value": "diagonal-fractions",
                        "desc": "font-variant-numeric: diagonal-fractions"
                    },
                    {
                        "value": "stacked-fractions",
                        "desc": "font-variant-numeric: stacked-fractions"
                    }
                ],
            }, {
                name: "Letter Spacing", children: [
                    {
                        "value": "racking-tighter",
                        "desc": "letter-spacing: -0.05em"
                    },
                    {
                        "value": "tracking-tight",
                        "desc": "letter-spacing: -0.025em"
                    },
                    {
                        "value": "tracking-normal",
                        "desc": "letter-spacing: 0em"
                    },
                    {
                        "value": "tracking-wide",
                        "desc": "letter-spacing: 0.025em"
                    },
                    {
                        "value": "tracking-wider",
                        "desc": "letter-spacing: 0.05em"
                    },
                    {
                        "value": "tracking-widest",
                        "desc": "letter-spacing: 0.1em"
                    }
                ],
            }, {
                name: "Line Clamp", children: [
                    {
                        "value": "line-clamp-1",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                    },
                    {
                        "value": "line-clamp-2",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                    },
                    {
                        "value": "line-clamp-3",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;"
                    },
                    {
                        "value": "line-clamp-4",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;"
                    },
                    {
                        "value": "line-clamp-5",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;"
                    },
                    {
                        "value": "line-clamp-6",
                        "desc": "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;"
                    },
                    {
                        "value": "line-clamp-none",
                        "desc": "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;"
                    }
                ],
            }, {
                name: "Line Height", children: [
                    {
                        "value": "leading-3",
                        "desc": "line-height: 0.75rem; /* 12px */"
                    },
                    {
                        "value": "leading-4",
                        "desc": "line-height: 1rem; /* 16px */"
                    },
                    {
                        "value": "leading-5",
                        "desc": "line-height: 1.25rem; /* 20px */"
                    },
                    {
                        "value": "leading-6",
                        "desc": "line-height: 1.5rem; /* 24px */"
                    },
                    {
                        "value": "leading-7",
                        "desc": "line-height: 1.75rem; /* 28px */"
                    },
                    {
                        "value": "leading-8",
                        "desc": "line-height: 2rem; /* 32px */"
                    },
                    {
                        "value": "leading-9",
                        "desc": "line-height: 2.25rem; /* 36px */"
                    },
                    {
                        "value": "leading-10",
                        "desc": "line-height: 2.5rem; /* 40px */"
                    },
                    {
                        "value": "leading-none",
                        "desc": "line-height: 1;"
                    },
                    {
                        "value": "leading-tight",
                        "desc": "line-height: 1.25;"
                    },
                    {
                        "value": "leading-snug",
                        "desc": "line-height: 1.375;"
                    },
                    {
                        "value": "leading-normal",
                        "desc": "line-height: 1.5;"
                    },
                    {
                        "value": "leading-relaxed",
                        "desc": "line-height: 1.625;"
                    },
                    {
                        "value": "leading-loose",
                        "desc": "line-height: 2;"
                    }
                ],
            }, {
                name: "List Style Image", children: [
                    {value: "list-image-none", desc: "list-style-image: none;"},
                ],
            }, {
                name: "List Style Position", children: [
                    {
                        "value": "list-inside",
                        "desc": "list-style-position: inside"
                    },
                    {
                        "value": "list-outside",
                        "desc": "list-style-position: outside"
                    }
                ],
            }, {
                name: "List Style Type", children: [
                    {
                        "value": "list-none",
                        "desc": "list-style-type: none"
                    },
                    {
                        "value": "list-disc",
                        "desc": "list-style-type: disc"
                    },
                    {
                        "value": "list-decimal",
                        "desc": "list-style-type: decimal"
                    }
                ],
            }, {
                name: "Text Align", children: [
                    {
                        "value": "text-left",
                        "desc": "text-align: left"
                    },
                    {
                        "value": "text-center",
                        "desc": "text-align: center"
                    },
                    {
                        "value": "text-right",
                        "desc": "text-align: right"
                    },
                    {
                        "value": "text-justify",
                        "desc": "text-align: justify"
                    },
                    {
                        "value": "text-start",
                        "desc": "text-align: start"
                    },
                    {
                        "value": "text-end",
                        "desc": "text-align: end"
                    }
                ],
            },
            {
                name: "Text Color", children: [
                    {
                        "value": "text-inherit",
                        "desc": "color: inherit"
                    },
                    {
                        "value": "text-current",
                        "desc": "color: currentColor"
                    },
                    {
                        "value": "text-transparent",
                        "desc": "color: transparent"
                    },
                    {
                        "value": "text-black",
                        "desc": "color: rgb(0, 0, 0)"
                    },
                    {
                        "value": "text-white",
                        "desc": "color: rgb(255, 255, 255)"
                    }
                ],
            }, {
                name: "Text Decoration", children: [
                    {
                        "value": "underline",
                        "desc": "text-decoration-line: underline"
                    },
                    {
                        "value": "overline",
                        "desc": "text-decoration-line: overline"
                    },
                    {
                        "value": "line-through",
                        "desc": "text-decoration-line: line-through"
                    },
                    {
                        "value": "no-underline",
                        "desc": "text-decoration-line: none"
                    }
                ],
            }, {
                name: "Text Decoration Color", children: [
                    {
                        "value": "decoration-inherit",
                        "desc": "text-decoration-color: inherit"
                    },
                    {
                        "value": "decoration-current",
                        "desc": "text-decoration-color: currentColor"
                    },
                    {
                        "value": "decoration-transparent",
                        "desc": "text-decoration-color: transparent"
                    },
                    {
                        "value": "decoration-black",
                        "desc": "text-decoration-color: #000"
                    },
                    {
                        "value": "decoration-white",
                        "desc": "text-decoration-color: #fff"
                    }
                ],
            }, {
                name: "Text Decoration Style", children: [
                    {
                        "value": "decoration-solid",
                        "desc": "text-decoration-style: solid"
                    },
                    {
                        "value": "decoration-double",
                        "desc": "text-decoration-style: double"
                    },
                    {
                        "value": "decoration-dotted",
                        "desc": "text-decoration-style: dotted"
                    },
                    {
                        "value": "decoration-dashed",
                        "desc": "text-decoration-style: dashed"
                    },
                    {
                        "value": "decoration-wavy",
                        "desc": "text-decoration-style: wavy"
                    }
                ],
            }, {
                name: "Text Decoration Thickness", children: [
                    {
                        "value": "decoration-auto",
                        "desc": "text-decoration-thickness: auto"
                    },
                    {
                        "value": "decoration-from-font",
                        "desc": "text-decoration-thickness: from-font"
                    },
                    {
                        "value": "decoration-0",
                        "desc": "text-decoration-thickness: 0px"
                    },
                    {
                        "value": "decoration-1",
                        "desc": "text-decoration-thickness: 1px"
                    },
                    {
                        "value": "decoration-2",
                        "desc": "text-decoration-thickness: 2px"
                    },
                    {
                        "value": "decoration-4",
                        "desc": "text-decoration-thickness: 4px"
                    },
                    {
                        "value": "decoration-8",
                        "desc": "text-decoration-thickness: 8px"
                    }
                ],
            }, {
                name: "Text Underline Offset", children: [
                    {
                        "value": "underline-offset-auto",
                        "desc": "text-underline-offset: auto"
                    },
                    {
                        "value": "underline-offset-0",
                        "desc": "text-underline-offset: 0px"
                    },
                    {
                        "value": "underline-offset-1",
                        "desc": "text-underline-offset: 1px"
                    },
                    {
                        "value": "underline-offset-2",
                        "desc": "text-underline-offset: 2px"
                    },
                    {
                        "value": "underline-offset-4",
                        "desc": "text-underline-offset: 4px"
                    },
                    {
                        "value": "underline-offset-8",
                        "desc": "text-underline-offset: 8px"
                    }
                ],
            }, {
                name: "Text Transform", children: [
                    {
                        "value": "uppercase",
                        "desc": "text-transform: uppercase"
                    },
                    {
                        "value": "lowercase",
                        "desc": "text-transform: lowercase"
                    },
                    {
                        "value": "capitalize",
                        "desc": "text-transform: capitalize"
                    },
                    {
                        "value": "normal-case",
                        "desc": "text-transform: none"
                    }
                ],
            }, {
                name: "Text Overflow", children: [
                    {
                        "value": "truncate",
                        "desc": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    },
                    {
                        "value": "text-ellipsis",
                        "desc": "text-overflow: ellipsis"
                    },
                    {
                        "value": "text-clip",
                        "desc": "text-overflow: clip"
                    }
                ],
            }, {
                name: "Text Wrap", children: [
                    {
                        "value": "text-wrap",
                        "desc": "white-space: wrap;"
                    },
                    {
                        "value": "text-nowrap",
                        "desc": "white-space: nowrap;"
                    },
                    {
                        "value": "text-balance",
                        "desc": "This is not a standard CSS property."
                    },
                    {
                        "value": "text-pretty",
                        "desc": "This is not a standard CSS property."
                    }
                ],
            }, {
                name: "Text Indent", children: [
                    {
                        "value": "indent-0",
                        "desc": "text-indent: 0px;"
                    },
                    {
                        "value": "indent-px",
                        "desc": "text-indent: 1px;"
                    },
                    {
                        "value": "indent-0.5",
                        "desc": "text-indent: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "indent-1",
                        "desc": "text-indent: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "indent-1.5",
                        "desc": "text-indent: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "indent-2",
                        "desc": "text-indent: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "indent-2.5",
                        "desc": "text-indent: 0.625rem; /* 10px */"
                    }
                ],
            }, {
                name: "Vertical Align", children: [
                    {
                        "value": "align-baseline",
                        "desc": "vertical-align: baseline;"
                    },
                    {
                        "value": "align-top",
                        "desc": "vertical-align: top;"
                    },
                    {
                        "value": "align-middle",
                        "desc": "vertical-align: middle;"
                    },
                    {
                        "value": "align-bottom",
                        "desc": "vertical-align: bottom;"
                    },
                    {
                        "value": "align-text-top",
                        "desc": "vertical-align: text-top;"
                    },
                    {
                        "value": "align-text-bottom",
                        "desc": "vertical-align: text-bottom;"
                    },
                    {
                        "value": "align-sub",
                        "desc": "vertical-align: sub;"
                    },
                    {
                        "value": "align-super",
                        "desc": "vertical-align: super;"
                    }
                ],
            }, {
                name: "Whitespace", children: [
                    {
                        "value": "whitespace-normal",
                        "desc": "white-space: normal;"
                    },
                    {
                        "value": "whitespace-nowrap",
                        "desc": "white-space: nowrap;"
                    },
                    {
                        "value": "whitespace-pre",
                        "desc": "white-space: pre;"
                    },
                    {
                        "value": "whitespace-pre-line",
                        "desc": "white-space: pre-line;"
                    },
                    {
                        "value": "whitespace-pre-wrap",
                        "desc": "white-space: pre-wrap;"
                    },
                    {
                        "value": "whitespace-break-spaces",
                        "desc": "white-space: break-spaces;"
                    }
                ],
            }, {
                name: "Word Break", children: [
                    {
                        "value": "break-normal",
                        "desc": "overflow-wrap: normal; word-break: normal;"
                    },
                    {
                        "value": "break-words",
                        "desc": "overflow-wrap: break-word;"
                    },
                    {
                        "value": "break-all",
                        "desc": "word-break: break-all;"
                    },
                    {
                        "value": "break-keep",
                        "desc": "word-break: keep-all;"
                    }
                ],
            }, {
                name: "Hyphens", children: [
                    {
                        "value": "hyphens-none",
                        "desc": "hyphens: none;"
                    },
                    {
                        "value": "hyphens-manual",
                        "desc": "hyphens: manual;"
                    },
                    {
                        "value": "hyphens-auto",
                        "desc": "hyphens: auto;"
                    }
                ],
            }, {
                name: "Content", children: [
                    {value: "content-none", desc: "content: none;"},
                ],
            },
        ]
    },
    {
        "name": "背景", "children": [
            {
                name: "Background Attachment", "children": [
                    {
                        "value": "bg-fixed",
                        "desc": "background-attachment: fixed;"
                    },
                    {
                        "value": "bg-local",
                        "desc": "background-attachment: local;"
                    },
                    {
                        "value": "bg-scroll",
                        "desc": "background-attachment: scroll;"
                    }
                ]
            },
            {
                name: "Background Clip", "children": [
                    {
                        "value": "bg-clip-border",
                        "desc": "background-clip: border-box;"
                    },
                    {
                        "value": "bg-clip-padding",
                        "desc": "background-clip: padding-box;"
                    },
                    {
                        "value": "bg-clip-content",
                        "desc": "background-clip: content-box;"
                    },
                    {
                        "value": "bg-clip-text",
                        "desc": "background-clip: text;"
                    }
                ]
            },
            {
                name: "Background Color", "children": [
                    {
                        "value": "bg-inherit",
                        "desc": "background-color: inherit;"
                    },
                    {
                        "value": "bg-current",
                        "desc": "background-color: currentColor;"
                    },
                    {
                        "value": "bg-transparent",
                        "desc": "background-color: transparent;"
                    },
                    {
                        "value": "bg-black",
                        "desc": "background-color: rgb(0, 0, 0);"
                    },
                    {
                        "value": "bg-white",
                        "desc": "background-color: rgb(255, 255, 255);"
                    },
                    {
                        "value": "bg-slate-50",
                        "desc": "background-color: rgb(248, 250, 252);"
                    },
                    {
                        "value": "bg-slate-100",
                        "desc": "background-color: rgb(241, 245, 249);"
                    },
                    {
                        "value": "bg-slate-200",
                        "desc": "background-color: rgb(226, 232, 240);"
                    }
                ]
            },
            {
                name: "Background Origin", "children": [
                    {
                        "value": "bg-origin-border",
                        "desc": "background-origin: border-box;"
                    },
                    {
                        "value": "bg-origin-padding",
                        "desc": "background-origin: padding-box;"
                    },
                    {
                        "value": "bg-origin-content",
                        "desc": "background-origin: content-box;"
                    }
                ]
            },
            {
                name: "Background Position", "children": [
                    {
                        "value": "bg-bottom",
                        "desc": "background-position: bottom;"
                    },
                    {
                        "value": "bg-center",
                        "desc": "background-position: center;"
                    },
                    {
                        "value": "bg-left",
                        "desc": "background-position: left;"
                    },
                    {
                        "value": "bg-left-bottom",
                        "desc": "background-position: left bottom;"
                    },
                    {
                        "value": "bg-left-top",
                        "desc": "background-position: left top;"
                    },
                    {
                        "value": "bg-right",
                        "desc": "background-position: right;"
                    },
                    {
                        "value": "bg-right-bottom",
                        "desc": "background-position: right bottom;"
                    },
                    {
                        "value": "bg-right-top",
                        "desc": "background-position: right top;"
                    },
                    {
                        "value": "bg-top",
                        "desc": "background-position: top;"
                    }
                ]
            },
            {
                name: "Background Repeat", "children": [
                    {
                        "value": "bg-repeat",
                        "desc": "background-repeat: repeat;"
                    },
                    {
                        "value": "bg-no-repeat",
                        "desc": "background-repeat: no-repeat;"
                    },
                    {
                        "value": "bg-repeat-x",
                        "desc": "background-repeat: repeat-x;"
                    },
                    {
                        "value": "bg-repeat-y",
                        "desc": "background-repeat: repeat-y;"
                    },
                    {
                        "value": "bg-repeat-round",
                        "desc": "background-repeat: round;"
                    },
                    {
                        "value": "bg-repeat-space",
                        "desc": "background-repeat: space;"
                    }
                ]
            },
            {
                name: "Background Size", "children": [
                    {
                        "value": "bg-auto",
                        "desc": "background-size: auto;"
                    },
                    {
                        "value": "bg-cover",
                        "desc": "background-size: cover;"
                    },
                    {
                        "value": "bg-contain",
                        "desc": "background-size: contain;"
                    }
                ]
            },
            {
                name: "Background Image", "children": [
                    {
                        "value": "bg-none",
                        "desc": "background-image: none;"
                    },
                    {
                        "value": "bg-gradient-to-t",
                        "desc": "background-image: linear-gradient(to top, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-tr",
                        "desc": "background-image: linear-gradient(to top right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-r",
                        "desc": "background-image: linear-gradient(to right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-br",
                        "desc": "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-b",
                        "desc": "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-bl",
                        "desc": "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-l",
                        "desc": "background-image: linear-gradient(to left, var(--tw-gradient-stops));"
                    },
                    {
                        "value": "bg-gradient-to-tl",
                        "desc": "background-image: linear-gradient(to top left, var(--tw-gradient-stops));"
                    }
                ]
            },
            {
                name: "Gradient Color Stops", "children": [
                    {
                        "value": "from-inherit",
                        "desc": "--tw-gradient-from: inherit var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-current",
                        "desc": "--tw-gradient-from: currentColor var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-transparent",
                        "desc": "--tw-gradient-from: transparent var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);"
                    },
                    {
                        "value": "from-black",
                        "desc": "--tw-gradient-from: #000 var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);"
                    }
                ]
            }
        ]
    },
    {
        "name": "border边框", "children": [
            {
                name: "Border Radius", "children": [
                    {
                        "value": "rounded-none",
                        "desc": "border-radius: 0px;"
                    },
                    {
                        "value": "rounded-sm",
                        "desc": "border-radius: 0.125rem; /* 2px */"
                    },
                    {
                        "value": "rounded",
                        "desc": "border-radius: 0.25rem; /* 4px */"
                    },
                    {
                        "value": "rounded-md",
                        "desc": "border-radius: 0.375rem; /* 6px */"
                    },
                    {
                        "value": "rounded-lg",
                        "desc": "border-radius: 0.5rem; /* 8px */"
                    },
                    {
                        "value": "rounded-xl",
                        "desc": "border-radius: 0.75rem; /* 12px */"
                    }
                ]
            }, {
                name: "Border Width", "children": [
                    {
                        "value": "border-0",
                        "desc": "border-width: 0px;"
                    },
                    {
                        "value": "border-2",
                        "desc": "border-width: 2px;"
                    },
                    {
                        "value": "border-4",
                        "desc": "border-width: 4px;"
                    },
                    {
                        "value": "border-8",
                        "desc": "border-width: 8px;"
                    },
                    {
                        "value": "border",
                        "desc": "border-width: 1px;"
                    }
                ]
            }, {
                name: "Border Color", "children": [
                    {
                        "value": "border-inherit",
                        "desc": "border-color: inherit;"
                    },
                    {
                        "value": "border-current",
                        "desc": "border-color: currentColor;"
                    },
                    {
                        "value": "border-transparent",
                        "desc": "border-color: transparent;"
                    },
                    {
                        "value": "border-black",
                        "desc": "border-color: rgb(0 0 0);"
                    },
                    {
                        "value": "border-white",
                        "desc": "border-color: rgb(255 255 255);"
                    },
                    {
                        "value": "border-slate-50",
                        "desc": "border-color: rgb(248 250 252);"
                    },
                    {
                        "value": "border-slate-100",
                        "desc": "border-color: rgb(241 245 249);"
                    },
                    {
                        "value": "border-slate-200",
                        "desc": "border-color: rgb(226 232 240);"
                    }
                ]
            }, {
                name: "Border Style", "children": [
                    {
                        "value": "border-solid",
                        "desc": "border-style: solid;"
                    },
                    {
                        "value": "border-dashed",
                        "desc": "border-style: dashed;"
                    },
                    {
                        "value": "border-dotted",
                        "desc": "border-style: dotted;"
                    },
                    {
                        "value": "border-double",
                        "desc": "border-style: double;"
                    },
                    {
                        "value": "border-hidden",
                        "desc": "border-style: hidden;"
                    },
                    {
                        "value": "border-none",
                        "desc": "border-style: none;"
                    }
                ]
            }, {
                name: "Divide Width", "children": [
                    {
                        "value": "divide-x-0",
                        "desc": "border-right-width: 0px; border-left-width: 0px;"
                    },
                    {
                        "value": "divide-x-2",
                        "desc": "border-right-width: 0px; border-left-width: 2px;"
                    },
                    {
                        "value": "divide-x-4",
                        "desc": "border-right-width: 0px; border-left-width: 4px;"
                    },
                    {
                        "value": "divide-x-8",
                        "desc": "border-right-width: 0px; border-left-width: 8px;"
                    },
                    {
                        "value": "divide-x",
                        "desc": "border-right-width: 0px; border-left-width: 1px;"
                    },
                    {
                        "value": "divide-y-0",
                        "desc": "border-top-width: 0px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-2",
                        "desc": "border-top-width: 2px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-4",
                        "desc": "border-top-width: 4px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-8",
                        "desc": "border-top-width: 8px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y",
                        "desc": "border-top-width: 1px; border-bottom-width: 0px;"
                    },
                    {
                        "value": "divide-y-reverse",
                        "desc": "--tw-divide-y-reverse: 1;"
                    },
                    {
                        "value": "divide-x-reverse",
                        "desc": "--tw-divide-x-reverse: 1;"
                    }
                ]
            }, {
                name: "Divide Color", "children": [
                    {
                        "value": "divide-inherit",
                        "desc": "border-color: inherit;"
                    },
                    {
                        "value": "divide-current",
                        "desc": "border-color: currentColor;"
                    },
                    {
                        "value": "divide-transparent",
                        "desc": "border-color: transparent;"
                    },
                    {
                        "value": "divide-black",
                        "desc": "border-color: rgb(0 0 0);"
                    },
                    {
                        "value": "divide-white",
                        "desc": "border-color: rgb(255 255 255);"
                    }
                ]
            }, {
                name: "Divide Style", "children": [
                    {
                        "value": "divide-solid",
                        "desc": "border-style: solid;"
                    },
                    {
                        "value": "divide-dashed",
                        "desc": "border-style: dashed;"
                    },
                    {
                        "value": "divide-dotted",
                        "desc": "border-style: dotted;"
                    },
                    {
                        "value": "divide-double",
                        "desc": "border-style: double;"
                    },
                    {
                        "value": "divide-none",
                        "desc": "border-style: none;"
                    }
                ]
            }, {
                name: "Outline Width", "children": [
                    {"value": "outline-0", "desc": "outline-width: 0px;"},
                    {"value": "outline-1", "desc": "outline-width: 1px;"},
                    {"value": "outline-2", "desc": "outline-width: 2px;"},
                    {"value": "outline-4", "desc": "outline-width: 4px;"},
                    {"value": "outline-8", "desc": "outline-width: 8px;"}
                ]
            }, {
                name: "Outline Color", "children": [
                    {"value": "outline-inherit", "desc": "outline-color: inherit;"},
                    {"value": "outline-current", "desc": "outline-color: currentColor;"},
                    {"value": "outline-transparent", "desc": "outline-color: transparent;"},
                    {"value": "outline-black", "desc": "outline-color: #000;"},
                    {"value": "outline-white", "desc": "outline-color: #fff;"}
                ]
            }, {
                name: "Outline Style", "children": [
                    {"value": "outline-none", "desc": "outline: 2px solid transparent; outline-offset: 2px;"},
                    {"value": "outline", "desc": "outline-style: solid;"},
                    {"value": "outline-dashed", "desc": "outline-style: dashed;"},
                    {"value": "outline-dotted", "desc": "outline-style: dotted;"},
                    {"value": "outline-double", "desc": "outline-style: double;"}
                ]
            }, {
                name: "Outline Offset", "children": [
                    {"value": "outline-offset-0", "desc": "outline-offset: 0px;"},
                    {"value": "outline-offset-1", "desc": "outline-offset: 1px;"},
                    {"value": "outline-offset-2", "desc": "outline-offset: 2px;"},
                    {"value": "outline-offset-4", "desc": "outline-offset: 4px;"},
                    {"value": "outline-offset-8", "desc": "outline-offset: 8px;"}
                ]
            }, {
                name: "Ring Width", "children": [
                    {
                        "value": "ring-0",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-1",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-2",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-4",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {
                        "value": "ring-8",
                        "desc": "box-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);"
                    },
                    {"value": "ring-inset", "desc": "--tw-ring-inset: inset;"}
                ]
            }, {
                name: "Ring Color", "children": [
                    {"value": "ring-inherit", "desc": "--tw-ring-color: inherit;"},
                    {"value": "ring-current", "desc": "--tw-ring-color: currentColor;"},
                    {"value": "ring-transparent", "desc": "--tw-ring-color: transparent;"},
                    {"value": "ring-black", "desc": "--tw-ring-color: rgb(0 0 0);"},
                    {"value": "ring-white", "desc": "--tw-ring-color: rgb(255 255 255);"}
                ]
            }, {
                name: "Ring Offset Width", "children": [
                    {
                        "value": "ring-offset-0",
                        "desc": "--tw-ring-offset-width: 0px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-1",
                        "desc": "--tw-ring-offset-width: 1px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-2",
                        "desc": "--tw-ring-offset-width: 2px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-4",
                        "desc": "--tw-ring-offset-width: 4px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-8",
                        "desc": "--tw-ring-offset-width: 8px; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    }
                ]
            }, {
                name: "Ring Offset Color", "children": [
                    {
                        "value": "ring-offset-inherit",
                        "desc": "--tw-ring-offset-color: inherit; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-current",
                        "desc": "--tw-ring-offset-color: currentColor; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(-tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-transparent",
                        "desc": "--tw-ring-offset-color: transparent; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-black",
                        "desc": "--tw-ring-offset-color: #000; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);"
                    },
                    {
                        "value": "ring-offset-white",
                        "desc": "--tw-ring-offset-color: #fff; box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-sh"
                    }
                ]
            },
        ]
    },
    {
        "name": "效果", "children": [
            {
                name: "Box Shadow", "children": [
                    {"value": "shadow-sm", "desc": "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"},
                    {
                        "value": "shadow",
                        "desc": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-md",
                        "desc": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-lg",
                        "desc": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);"
                    },
                    {
                        "value": "shadow-xl",
                        "desc": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);"
                    },
                    {"value": "shadow-2xl", "desc": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"},
                    {"value": "shadow-inner", "desc": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);"},
                    {"value": "shadow-none", "desc": "box-shadow: 0 0 #0000;"}
                ]
            }, {
                name: "Box Shadow Color", "children": [
                    {"value": "shadow-inherit", "desc": "--tw-shadow-color: inherit;"},
                    {"value": "shadow-current", "desc": "--tw-shadow-color: currentColor;"},
                    {"value": "shadow-transparent", "desc": "--tw-shadow-color: transparent;"},
                    {"value": "shadow-black", "desc": "--tw-shadow-color: #000;"},
                    {"value": "shadow-white", "desc": "--tw-shadow-color: #fff;"}
                ]
            }, {
                name: "Opacity", "children": [
                    {"value": "opacity-0", "desc": "opacity: 0;"},
                    {"value": "opacity-5", "desc": "opacity: 0.05;"},
                    {"value": "opacity-10", "desc": "opacity: 0.1;"},
                    {"value": "opacity-15", "desc": "opacity: 0.15;"},
                    {"value": "opacity-20", "desc": "opacity: 0.2;"},
                    {"value": "opacity-25", "desc": "opacity: 0.25;"}
                ]
            }, {
                name: "Mix Blend Mode", "children": [
                    {"value": "mix-blend-normal", "desc": "mix-blend-mode: normal;"},
                    {"value": "mix-blend-multiply", "desc": "mix-blend-mode: multiply;"},
                    {"value": "mix-blend-screen", "desc": "mix-blend-mode: screen;"},
                    {"value": "mix-blend-overlay", "desc": "mix-blend-mode: overlay;"},
                    {"value": "mix-blend-darken", "desc": "mix-blend-mode: darken;"},
                    {"value": "mix-blend-lighten", "desc": "mix-blend-mode: lighten;"},
                    {"value": "mix-blend-color-dodge", "desc": "mix-blend-mode: color-dodge;"},
                    {"value": "mix-blend-color-burn", "desc": "mix-blend-mode: color-burn;"},
                    {"value": "mix-blend-hard-light", "desc": "mix-blend-mode: hard-light;"},
                    {"value": "mix-blend-soft-light", "desc": "mix-blend-mode: soft-light;"},
                    {"value": "mix-blend-difference", "desc": "mix-blend-mode: difference;"},
                    {"value": "mix-blend-exclusion", "desc": "mix-blend-mode: exclusion;"},
                    {"value": "mix-blend-hue", "desc": "mix-blend-mode: hue;"},
                    {"value": "mix-blend-saturation", "desc": "mix-blend-mode: saturation;"},
                    {"value": "mix-blend-color", "desc": "mix-blend-mode: color;"},
                    {"value": "mix-blend-luminosity", "desc": "mix-blend-mode: luminosity;"},
                    {"value": "mix-blend-plus-lighter", "desc": "mix-blend-mode: plus-lighter;"}
                ]
            }, {
                name: "Background Blend Mode", "children": [
                    {"value": "bg-blend-normal", "desc": "background-blend-mode: normal;"},
                    {"value": "bg-blend-multiply", "desc": "background-blend-mode: multiply;"},
                    {"value": "bg-blend-screen", "desc": "background-blend-mode: screen;"},
                    {"value": "bg-blend-overlay", "desc": "background-blend-mode: overlay;"},
                    {"value": "bg-blend-darken", "desc": "background-blend-mode: darken;"},
                    {"value": "bg-blend-lighten", "desc": "background-blend-mode: lighten;"},
                    {"value": "bg-blend-color-dodge", "desc": "background-blend-mode: color-dodge;"},
                    {"value": "bg-blend-color-burn", "desc": "background-blend-mode: color-burn;"},
                    {"value": "bg-blend-hard-light", "desc": "background-blend-mode: hard-light;"},
                    {"value": "bg-blend-soft-light", "desc": "background-blend-mode: soft-light;"},
                    {"value": "bg-blend-difference", "desc": "background-blend-mode: difference;"},
                    {"value": "bg-blend-exclusion", "desc": "background-blend-mode: exclusion;"},
                    {"value": "bg-blend-hue", "desc": "background-blend-mode: hue;"},
                    {"value": "bg-blend-saturation", "desc": "background-blend-mode: saturation;"},
                    {"value": "bg-blend-color", "desc": "background-blend-mode: color;"},
                    {"value": "bg-blend-luminosity", "desc": "background-blend-mode: luminosity;"}
                ]
            },
        ]
    },
    {
        "name": "Filters过滤", "children": [
            {
                name: "Blur", "children": [
                    {"value": "blur-none", "desc": "filter: blur(0);"},
                    {"value": "blur-sm", "desc": "filter: blur(4px);"},
                    {"value": "blur", "desc": "filter: blur(8px);"},
                    {"value": "blur-md", "desc": "filter: blur(12px);"},
                    {"value": "blur-lg", "desc": "filter: blur(16px);"},
                    {"value": "blur-xl", "desc": "filter: blur(24px);"},
                    {"value": "blur-2xl", "desc": "filter: blur(40px);"},
                    {"value": "blur-3xl", "desc": "filter: blur(64px);"}
                ]
            }, {
                name: "Brightness", "children": [
                    {"value": "brightness-0", "desc": "filter: brightness(0);"},
                    {"value": "brightness-50", "desc": "filter: brightness(0.5);"},
                    {"value": "brightness-75", "desc": "filter: brightness(0.75);"},
                    {"value": "brightness-90", "desc": "filter: brightness(0.9);"},
                    {"value": "brightness-95", "desc": "filter: brightness(0.95);"},
                    {"value": "brightness-100", "desc": "filter: brightness(1);"},
                    {"value": "brightness-105", "desc": "filter: brightness(1.05);"},
                    {"value": "brightness-110", "desc": "filter: brightness(1.1);"},
                    {"value": "brightness-125", "desc": "filter: brightness(1.25);"},
                    {"value": "brightness-150", "desc": "filter: brightness(1.5);"},
                    {"value": "brightness-200", "desc": "filter: brightness(2);"}
                ]
            }, {
                name: "Contrast", "children": [
                    {"value": "contrast-0", "desc": "contrast: 0;"},
                    {"value": "contrast-50", "desc": "contrast: 0.5;"},
                    {"value": "contrast-75", "desc": "contrast: 0.75;"},
                    {"value": "contrast-100", "desc": "contrast: 1;"},
                    {"value": "contrast-125", "desc": "contrast: 1.25;"},
                    {"value": "contrast-150", "desc": "contrast: 1.5;"},
                    {"value": "contrast-200", "desc": "contrast: 2;"}
                ]
            }, {
                name: "Drop Shadow", "children": [
                    {"value": "drop-shadow-sm", "desc": "filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));"},
                    {
                        "value": "drop-shadow",
                        "desc": "filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));"
                    },
                    {
                        "value": "drop-shadow-md",
                        "desc": "filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06));"
                    },
                    {
                        "value": "drop-shadow-lg",
                        "desc": "filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));"
                    },
                    {
                        "value": "drop-shadow-xl",
                        "desc": "filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));"
                    },
                    {"value": "drop-shadow-2xl", "desc": "filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15));"},
                    {"value": "drop-shadow-none", "desc": "filter: drop-shadow(0 0 rgba(0, 0, 0, 0));"}
                ]
            }, {
                name: "Grayscale", "children": [
                    {"value": "grayscale-0", "desc": "filter: grayscale(0);"},
                    {"value": "grayscale", "desc": "filter: grayscale(100%);"}
                ]
            }, {
                name: "Hue Rotate", "children": [
                    {"value": "hue-rotate-0", "desc": "filter: hue-rotate(0deg);"},
                    {"value": "hue-rotate-15", "desc": "filter: hue-rotate(15deg);"},
                    {"value": "hue-rotate-30", "desc": "filter: hue-rotate(30deg);"},
                    {"value": "hue-rotate-60", "desc": "filter: hue-rotate(60deg);"},
                    {"value": "hue-rotate-90", "desc": "filter: hue-rotate(90deg);"},
                    {"value": "hue-rotate-180", "desc": "filter: hue-rotate(180deg);"}
                ]
            }, {
                name: "Invert", "children": [
                    {"value": "invert-0", "desc": "filter: invert(0);"},
                    {"value": "invert", "desc": "filter: invert(100%);"}
                ]
            }, {
                name: "Saturate", "children": [
                    {"value": "saturate-0", "desc": "filter: saturate(0);"},
                    {"value": "saturate-50", "desc": "filter: saturate(0.5);"},
                    {"value": "saturate-100", "desc": "filter: saturate(1);"},
                    {"value": "saturate-150", "desc": "filter: saturate(1.5);"},
                    {"value": "saturate-200", "desc": "filter: saturate(2);"}
                ]
            }, {
                name: "Sepia", "children": [
                    {"value": "sepia-0", "desc": "filter: sepia(0);"},
                    {"value": "sepia", "desc": "filter: sepia(100%);"}
                ]
            }, {
                name: "Backdrop Blur", "children": [
                    {"value": "backdrop-blur-none", "desc": "backdrop-filter: blur(0);"},
                    {"value": "backdrop-blur-sm", "desc": "backdrop-filter: blur(4px);"},
                    {"value": "backdrop-blur", "desc": "backdrop-filter: blur(8px);"},
                    {"value": "backdrop-blur-md", "desc": "backdrop-filter: blur(12px);"},
                    {"value": "backdrop-blur-lg", "desc": "backdrop-filter: blur(16px);"},
                    {"value": "backdrop-blur-xl", "desc": "backdrop-filter: blur(24px);"},
                    {"value": "backdrop-blur-2xl", "desc": "backdrop-filter: blur(40px);"},
                    {"value": "backdrop-blur-3xl", "desc": "backdrop-filter: blur(64px);"}
                ]
            }, {
                name: "Backdrop Brightness", "children": [
                    {"value": "backdrop-brightness-0", "desc": "backdrop-filter: brightness(0);"},
                    {"value": "backdrop-brightness-50", "desc": "backdrop-filter: brightness(0.5);"},
                    {"value": "backdrop-brightness-75", "desc": "backdrop-filter: brightness(0.75);"},
                    {"value": "backdrop-brightness-90", "desc": "backdrop-filter: brightness(0.9);"},
                    {"value": "backdrop-brightness-95", "desc": "backdrop-filter: brightness(0.95);"},
                    {"value": "backdrop-brightness-100", "desc": "backdrop-filter: brightness(1);"},
                    {"value": "backdrop-brightness-105", "desc": "backdrop-filter: brightness(1.05);"},
                    {"value": "backdrop-brightness-110", "desc": "backdrop-filter: brightness(1.1);"},
                    {"value": "backdrop-brightness-125", "desc": "backdrop-filter: brightness(1.25);"},
                    {"value": "backdrop-brightness-150", "desc": "backdrop-filter: brightness(1.5);"},
                    {"value": "backdrop-brightness-200", "desc": "backdrop-filter: brightness(2);"}
                ]
            }, {
                name: "Backdrop Contrast", "children": [
                    {"value": "backdrop-contrast-0", "desc": "backdrop-filter: contrast(0);"},
                    {"value": "backdrop-contrast-50", "desc": "backdrop-filter: contrast(0.5);"},
                    {"value": "backdrop-contrast-75", "desc": "backdrop-filter: contrast(0.75);"},
                    {"value": "backdrop-contrast-100", "desc": "backdrop-filter: contrast(1);"},
                    {"value": "backdrop-contrast-125", "desc": "backdrop-filter: contrast(1.25);"},
                    {"value": "backdrop-contrast-150", "desc": "backdrop-filter: contrast(1.5);"},
                    {"value": "backdrop-contrast-200", "desc": "backdrop-filter: contrast(2);"}
                ]
            }, {
                name: "Backdrop Grayscale", "children": [
                    {"value": "backdrop-grayscale-0", "desc": "backdrop-filter: grayscale(0);"},
                    {"value": "backdrop-grayscale", "desc": "backdrop-filter: grayscale(100%);"}
                ]
            }, {
                name: "Backdrop Hue Rotate", "children": [
                    {"value": "backdrop-hue-rotate-0", "desc": "backdrop-filter: hue-rotate(0deg);"},
                    {"value": "backdrop-hue-rotate-15", "desc": "backdrop-filter: hue-rotate(15deg);"},
                    {"value": "backdrop-hue-rotate-30", "desc": "backdrop-filter: hue-rotate(30deg);"},
                    {"value": "backdrop-hue-rotate-60", "desc": "backdrop-filter: hue-rotate(60deg);"},
                    {"value": "backdrop-hue-rotate-90", "desc": "backdrop-filter: hue-rotate(90deg);"},
                    {"value": "backdrop-hue-rotate-180", "desc": "backdrop-filter: hue-rotate(180deg);"}
                ]
            }, {
                name: "Backdrop Invert", "children": [
                    {"value": "backdrop-invert-0", "desc": "backdrop-filter: invert(0);"},
                    {"value": "backdrop-invert", "desc": "backdrop-filter: invert(100%);"}
                ]
            }, {
                name: "Backdrop Opacity", "children": [
                    {"value": "backdrop-opacity-0", "desc": "backdrop-filter: opacity(0);"},
                    {"value": "backdrop-opacity-5", "desc": "backdrop-filter: opacity(0.05);"},
                    {"value": "backdrop-opacity-10", "desc": "backdrop-filter: opacity(0.1);"},
                    {"value": "backdrop-opacity-15", "desc": "backdrop-filter: opacity(0.15);"}
                ]
            }, {
                name: "Backdrop Saturate", "children": [
                    {"value": "backdrop-saturate-0", "desc": "backdrop-filter: saturate(0);"},
                    {"value": "backdrop-saturate-50", "desc": "backdrop-filter: saturate(0.5);"},
                    {"value": "backdrop-saturate-100", "desc": "backdrop-filter: saturate(1);"},
                    {"value": "backdrop-saturate-150", "desc": "backdrop-filter: saturate(1.5);"},
                    {"value": "backdrop-saturate-200", "desc": "backdrop-filter: saturate(2);"}
                ]
            }, {
                name: "Backdrop Sepia", "children": [
                    {"value": "backdrop-sepia-0", "desc": "backdrop-filter: sepia(0);"},
                    {"value": "backdrop-sepia", "desc": "backdrop-filter: sepia(100%);"}
                ]
            },
        ]
    },
    {
        "name": "表格table", "children": [
            {
                name: "Border Collapse", "children": [
                    {"value": "border-collapse", "desc": "border-collapse: collapse;"},
                    {"value": "border-separate", "desc": "border-collapse: separate;"}
                ]
            }, {
                name: "Border Spacing", "children": [
                    {"value": "border-spacing-0", "desc": "border-spacing: 0px 0px;"},
                    {"value": "border-spacing-x-0", "desc": "border-spacing: 0px var(--tw-border-spacing-y);"},
                    {"value": "border-spacing-y-0", "desc": "border-spacing: var(--tw-border-spacing-x) 0px;"}
                ]
            }, {
                name: "Table Layout", "children": [
                    {"value": "table-auto", "desc": "table-layout: auto;"},
                    {"value": "table-fixed", "desc": "table-layout: fixed;"}
                ]
            }, {
                name: "Caption Side", "children": [
                    {"value": "caption-top", "desc": "caption-side: top;"},
                    {"value": "caption-bottom", "desc": "caption-side: bottom;"}
                ]
            },
        ]
    },
    {
        "name": "Transitions & Animation", "children": [
            {
                name: "Transition Property", "children": [
                    {
                        "value": "transition-none",
                        "desc": "transition-property: none;"
                    },
                    {
                        "value": "transition-all",
                        "desc": "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition",
                        "desc": "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-colors",
                        "desc": "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-opacity",
                        "desc": "transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-shadow",
                        "desc": "transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    },
                    {
                        "value": "transition-transform",
                        "desc": "transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
                    }
                ]
            },
            {
                name: "Transition Duration", "children": [
                    {"value": "duration-0", "desc": "transition-duration: 0s;"},
                    {"value": "duration-75", "desc": "transition-duration: 75ms;"},
                    {"value": "duration-100", "desc": "transition-duration: 100ms;"},
                    {"value": "duration-150", "desc": "transition-duration: 150ms;"},
                    {"value": "duration-200", "desc": "transition-duration: 200ms;"},
                    {"value": "duration-300", "desc": "transition-duration: 300ms;"},
                    {"value": "duration-500", "desc": "transition-duration: 500ms;"},
                    {"value": "duration-700", "desc": "transition-duration: 700ms;"},
                    {"value": "duration-1000", "desc": "transition-duration: 1000ms;"}
                ]
            },
            {
                name: "Transition Timing Function", "children": [
                    {"value": "ease-linear", "desc": "transition-timing-function: linear;"},
                    {"value": "ease-in", "desc": "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);"},
                    {"value": "ease-out", "desc": "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);"},
                    {"value": "ease-in-out", "desc": "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);"}
                ]
            },
            {
                name: "Transition Delay", "children": [
                    {"value": "delay-0", "desc": "transition-delay: 0s;"},
                    {"value": "delay-75", "desc": "transition-delay: 75ms;"},
                    {"value": "delay-100", "desc": "transition-delay: 100ms;"},
                    {"value": "delay-150", "desc": "transition-delay: 150ms;"},
                    {"value": "delay-200", "desc": "transition-delay: 200ms;"},
                    {"value": "delay-300", "desc": "transition-delay: 300ms;"},
                    {"value": "delay-500", "desc": "transition-delay: 500ms;"},
                    {"value": "delay-700", "desc": "transition-delay: 700ms;"},
                    {"value": "delay-1000", "desc": "transition-delay: 1000ms;"}
                ]
            },
            {
                name: "Animation", "children": [
                    {"value": "animate-none ", "desc": "animation: none;"},
                    {"value": "animate-spin", "desc": "animation: spin 1s linear infinite;"},
                ]
            }
        ]
    },
    {
        "name": "Transforms", "children": [
            {
                name: "Scale", "children": [
                    {"value": "scale-0", "desc": "transform: scale(0);"},
                    {"value": "scale-x-0", "desc": "transform: scaleX(0);"},
                    {"value": "scale-y-0", "desc": "transform: scaleY(0);"},
                    {"value": "scale-50", "desc": "transform: scale(.5);"},
                    {"value": "scale-x-50", "desc": "transform: scaleX(.5);"}
                ]
            }, {
                name: "Rotate", "children": [
                    {"value": "rotate-0", "desc": "transform: rotate(0deg);"},
                    {"value": "rotate-1", "desc": "transform: rotate(1deg);"},
                    {"value": "rotate-2", "desc": "transform: rotate(2deg);"},
                    {"value": "rotate-3", "desc": "transform: rotate(3deg);"},
                    {"value": "rotate-6", "desc": "transform: rotate(6deg);"},
                    {"value": "rotate-12", "desc": "transform: rotate(12deg);"},
                    {"value": "rotate-45", "desc": "transform: rotate(45deg);"},
                    {"value": "rotate-90", "desc": "transform: rotate(90deg);"},
                    {"value": "rotate-180", "desc": "transform: rotate(180deg);"}
                ]
            }, {
                name: "Translate", "children": [
                    {"value": "translate-x-0", "desc": "transform: translateX(0px);"},
                    {"value": "translate-y-0", "desc": "transform: translateY(0px);"},
                    {"value": "translate-x-px", "desc": "transform: translateX(1px);"},
                    {"value": "translate-y-px", "desc": "transform: translateY(1px);"},
                    {"value": "translate-x-0.5", "desc": "transform: translateX(0.125rem);"},
                    {"value": "translate-y-0.5", "desc": "transform: translateY(0.125rem);"}
                ]
            }, {
                name: "Skew", "children": [
                    {"value": "skew-x-0", "desc": "transform: skewX(0deg);"},
                    {"value": "skew-y-0", "desc": "transform: skewY(0deg);"},
                    {"value": "skew-x-1", "desc": "transform: skewX(1deg);"},
                    {"value": "skew-y-1", "desc": "transform: skewY(1deg);"},
                    {"value": "skew-x-2", "desc": "transform: skewX(2deg);"},
                    {"value": "skew-y-2", "desc": "transform: skewY(2deg);"},
                    {"value": "skew-x-3", "desc": "transform: skewX(3deg);"},
                    {"value": "skew-y-3", "desc": "transform: skewY(3deg);"},
                    {"value": "skew-x-6", "desc": "transform: skewX(6deg);"},
                    {"value": "skew-y-6", "desc": "transform: skewY(6deg);"},
                    {"value": "skew-x-12", "desc": "transform: skewX(12deg);"},
                    {"value": "skew-y-12", "desc": "transform: skewY(12deg);"}
                ]
            }, {
                name: "Transform Origin", "children": [
                    {"value": "origin-center", "desc": "transform-origin: center;"},
                    {"value": "origin-top", "desc": "transform-origin: top;"},
                    {"value": "origin-top-right", "desc": "transform-origin: top right;"},
                    {"value": "origin-right", "desc": "transform-origin: right;"},
                    {"value": "origin-bottom-right", "desc": "transform-origin: bottom right;"},
                    {"value": "origin-bottom", "desc": "transform-origin: bottom;"},
                    {"value": "origin-bottom-left", "desc": "transform-origin: bottom left;"},
                    {"value": "origin-left", "desc": "transform-origin: left;"},
                    {"value": "origin-top-left", "desc": "transform-origin: top left;"}
                ]
            },
        ]
    },
    {
        "name": "Interactivity", "children": [
            {
                name: "Accent Color", "children": [
                    {"value": "accent-inherit", "desc": "accent-color: inherit;"},
                    {"value": "accent-current", "desc": "accent-color: currentColor;"},
                    {"value": "accent-transparent", "desc": "accent-color: transparent;"},
                    {"value": "accent-black", "desc": "accent-color: #000;"},
                    {"value": "accent-white", "desc": "accent-color: #fff;"}
                ]
            }, {
                name: "Appearance", "children": [
                    {"value": "appearance-none", "desc": "appearance: none;"},
                    {"value": "appearance-auto", "desc": "appearance: auto;"}
                ]
            }, {
                name: "Cursor", "children": [
                    {"value": "cursor-auto", "desc": "cursor: auto;"},
                    {"value": "cursor-default", "desc": "cursor: default;"},
                    {"value": "cursor-pointer", "desc": "cursor: pointer;"},
                    {"value": "cursor-wait", "desc": "cursor: wait;"},
                    {"value": "cursor-text", "desc": "cursor: text;"},
                    {"value": "cursor-move", "desc": "cursor: move;"},
                    {"value": "cursor-help", "desc": "cursor: help;"},
                    {"value": "cursor-not-allowed", "desc": "cursor: not-allowed;"},
                    {"value": "cursor-none", "desc": "cursor: none;"},
                    {"value": "cursor-context-menu", "desc": "cursor: context-menu;"},
                    {"value": "cursor-progress", "desc": "cursor: progress;"},
                    {"value": "cursor-cell", "desc": "cursor: cell;"},
                    {"value": "cursor-crosshair", "desc": "cursor: crosshair;"},
                    {"value": "cursor-vertical-text", "desc": "cursor: vertical-text;"},
                    {"value": "cursor-alias", "desc": "cursor: alias;"},
                    {"value": "cursor-copy", "desc": "cursor: copy;"},
                    {"value": "cursor-no-drop", "desc": "cursor: no-drop;"},
                    {"value": "cursor-grab", "desc": "cursor: grab;"},
                    {"value": "cursor-grabbing", "desc": "cursor: grabbing;"},
                    {"value": "cursor-all-scroll", "desc": "cursor: all-scroll;"},
                    {"value": "cursor-col-resize", "desc": "cursor: col-resize;"},
                    {"value": "cursor-row-resize", "desc": "cursor: row-resize;"},
                    {"value": "cursor-n-resize", "desc": "cursor: n-resize;"},
                    {"value": "cursor-e-resize", "desc": "cursor: e-resize;"},
                    {"value": "cursor-s-resize", "desc": "cursor: s-resize;"},
                    {"value": "cursor-w-resize", "desc": "cursor: w-resize;"},
                    {"value": "cursor-ne-resize", "desc": "cursor: ne-resize;"},
                    {"value": "cursor-nw-resize", "desc": "cursor: nw-resize;"},
                    {"value": "cursor-se-resize", "desc": "cursor: se-resize;"},
                    {"value": "cursor-sw-resize", "desc": "cursor: sw-resize;"},
                    {"value": "cursor-ew-resize", "desc": "cursor: ew-resize;"},
                    {"value": "cursor-ns-resize", "desc": "cursor: ns-resize;"},
                    {"value": "cursor-nesw-resize", "desc": "cursor: nesw-resize;"},
                    {"value": "cursor-nwse-resize", "desc": "cursor: nwse-resize;"},
                    {"value": "cursor-zoom-in", "desc": "cursor: zoom-in;"},
                    {"value": "cursor-zoom-out", "desc": "cursor: zoom-out;"}
                ]
            }, {
                name: "Caret Color", "children": [
                    {"value": "caret-inherit", "desc": "caret-color: inherit;"},
                    {"value": "caret-current", "desc": "caret-color: currentColor;"},
                    {"value": "caret-transparent", "desc": "caret-color: transparent;"},
                    {"value": "caret-black", "desc": "caret-color: #000;"},
                    {"value": "caret-white", "desc": "caret-color: #fff;"}
                ]
            }, {
                name: "Pointer Events", "children": [
                    {"value": "pointer-events-none", "desc": "pointer-events: none;"},
                    {"value": "pointer-events-auto", "desc": "pointer-events: auto;"}
                ]
            }, {
                name: "Resize", "children": [
                    {"value": "resize-none", "desc": "resize: none;"},
                    {"value": "resize-y", "desc": "resize: vertical;"},
                    {"value": "resize-x", "desc": "resize: horizontal;"},
                    {"value": "resize", "desc": "resize: both;"}
                ]
            }, {
                name: "Scroll Behavior", "children": [
                    {"value": "scroll-auto", "desc": "scroll-behavior: auto;"},
                    {"value": "scroll-smooth", "desc": "scroll-behavior: smooth;"}
                ]
            }, {
                name: "Scroll Margin", "children": [
                    {"value": "scroll-m-0", "desc": "scroll-margin: 0px;"},
                    {"value": "scroll-mx-0", "desc": "scroll-margin-left: 0px; scroll-margin-right: 0px;"},
                    {"value": "scroll-my-0", "desc": "scroll-margin-top: 0px; scroll-margin-bottom: 0px;"},
                    {"value": "scroll-ms-0", "desc": "scroll-margin-inline-start: 0px;"},
                    {"value": "scroll-me-0", "desc": "scroll-margin-inline-end: 0px;"},
                    {"value": "scroll-mt-0", "desc": "scroll-margin-top: 0px;"},
                    {"value": "scroll-mr-0", "desc": "scroll-margin-right: 0px;"},
                    {"value": "scroll-mb-0", "desc": "scroll-margin-bottom: 0px;"},
                    {"value": "scroll-ml-0", "desc": "scroll-margin-left: 0px;"}
                ]
            }, {
                name: "Scroll Padding", "children": [
                    {"value": "scroll-p-0", "desc": "scroll-padding: 0px;"},
                    {"value": "scroll-px-0", "desc": "scroll-padding-left: 0px; scroll-padding-right: 0px;"},
                    {"value": "scroll-py-0", "desc": "scroll-padding-top: 0px; scroll-padding-bottom: 0px;"},
                    {"value": "scroll-ps-0", "desc": "scroll-padding-inline-start: 0px;"},
                    {"value": "scroll-pe-0", "desc": "scroll-padding-inline-end: 0px;"}
                ]
            }, {
                name: "Scroll Snap Align", "children": [
                    {"value": "snap-start", "desc": "scroll-snap-align: start;"},
                    {"value": "snap-end", "desc": "scroll-snap-align: end;"},
                    {"value": "snap-center", "desc": "scroll-snap-align: center;"},
                    {"value": "snap-align-none", "desc": "scroll-snap-align: none;"}
                ]
            }, {
                name: "Scroll Snap Stop", "children": [
                    {"value": "snap-normal", "desc": "scroll-snap-stop: normal;"},
                    {"value": "snap-always", "desc": "scroll-snap-stop: always;"}
                ]
            }, {
                name: "Scroll Snap Type", "children": [
                    {"value": "snap-none", "desc": "scroll-snap-type: none;"},
                    {"value": "snap-x", "desc": "scroll-snap-type: x var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-y", "desc": "scroll-snap-type: y var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-both", "desc": "scroll-snap-type: both var(--tw-scroll-snap-strictness);"},
                    {"value": "snap-mandatory", "desc": "--tw-scroll-snap-strictness: mandatory;"},
                    {"value": "snap-proximity", "desc": "--tw-scroll-snap-strictness: proximity;"}
                ]
            }, {
                name: "Touch Action", "children": [
                    {"value": "touch-auto", "desc": "touch-action: auto;"},
                    {"value": "touch-none", "desc": "touch-action: none;"},
                    {"value": "touch-pan-x", "desc": "touch-action: pan-x;"},
                    {"value": "touch-pan-left", "desc": "touch-action: pan-left;"},
                    {"value": "touch-pan-right", "desc": "touch-action: pan-right;"},
                    {"value": "touch-pan-y", "desc": "touch-action: pan-y;"},
                    {"value": "touch-pan-up", "desc": "touch-action: pan-up;"},
                    {"value": "touch-pan-down", "desc": "touch-action: pan-down;"},
                    {"value": "touch-pinch-zoom", "desc": "touch-action: pinch-zoom;"},
                    {"value": "touch-manipulation", "desc": "touch-action: manipulation;"}
                ]
            }, {
                name: "User Select", "children": [
                    {"value": "select-none", "desc": "user-select: none;"},
                    {"value": "select-text", "desc": "user-select: text;"},
                    {"value": "select-all", "desc": "user-select: all;"},
                    {"value": "select-auto", "desc": "user-select: auto;"}
                ]
            }, {
                name: "Will Change", "children": [
                    {"value": "will-change-auto", "desc": "will-change: auto;"},
                    {"value": "will-change-scroll", "desc": "will-change: scroll-position;"},
                    {"value": "will-change-contents", "desc": "will-change: contents;"},
                    {"value": "will-change-transform", "desc": "will-change: transform;"}
                ]
            },
        ]
    },
    {
        "name": "SVG", "children": [
            {
                name: "Fill", "children": [
                    {"value": "fill-none", "desc": "fill: none;"},
                    {"value": "fill-inherit", "desc": "fill: inherit;"},
                    {"value": "fill-current", "desc": "fill: currentColor;"},
                    {"value": "fill-transparent", "desc": "fill: transparent;"},
                    {"value": "fill-black", "desc": "fill: #000;"},
                    {"value": "fill-white", "desc": "fill: #fff;"}
                ]
            }, {
                name: "Stroke", "children": [
                    {"value": "stroke-none", "desc": "stroke: none;"},
                    {"value": "stroke-inherit", "desc": "stroke: inherit;"},
                    {"value": "stroke-current", "desc": "stroke: currentColor;"},
                    {"value": "stroke-transparent", "desc": "stroke: transparent;"},
                    {"value": "stroke-black", "desc": "stroke: #000;"},
                    {"value": "stroke-white", "desc": "stroke: #fff;"}
                ]
            }, {
                name: "Stroke Width", "children": [
                    {"value": "stroke-0", "desc": "stroke-width: 0;"},
                    {"value": "stroke-1", "desc": "stroke-width: 1;"},
                    {"value": "stroke-2", "desc": "stroke-width: 2;"}
                ]
            },
        ]
    },
    {
        "name": "Accessibility", "children": [
            {
                name: "bbbb", "children": [
                    {"value": "sr-only", "desc": ""},
                    {"value": "not-sr-only", "desc": ""}
                ]
            }, {
                name: "Forced Color Adjust", "children": [
                    {"value": "forced-color-adjust-auto", "desc": ""},
                    {"value": "forced-color-adjust-none", "desc": ""}
                ]
            },
        ]
    },
]
export const tagLists: any = [
    {name: "div", desc: "div2", info: {}},
    {name: "html", desc: "html2", info: {}},
    {name: "head", desc: "", info: {}},
    {name: "span", desc: "", info: {}},
    {name: "title", desc: "", info: {}},
    {name: "link", desc: "", info: {}},
    {name: "style", desc: "", info: {}},
    {name: "a", desc: "", info: {}},
    {name: "script", desc: "", info: {}},
    {name: "strong", desc: "", info: {}},
    {name: "br", desc: "", info: {}},
    {name: "p", desc: "", info: {}},
    {name: "ul", desc: "", info: {}},
    {name: "ol", desc: "", info: {}},
    {name: "li", desc: "", info: {}},
    {name: "input", desc: "", info: {}},
    {name: "textarea", desc: "", info: {}},
    {name: "form", desc: "", info: {}},
    {name: "select", desc: "", info: {}},
    {name: "button", desc: "", info: {}},
    {name: "option", desc: "", info: {}},
    {name: "body", desc: "", info: {}},
    {name: "h1", desc: "", info: {}},
    {name: "h2", desc: "", info: {}},
    {name: "h3", desc: "", info: {}},
    {name: "h4", desc: "", info: {}},
    {name: "h5", desc: "", info: {}},
    {name: "h6", desc: "", info: {}},
    {name: "header", desc: "", info: {}},
    {name: "nav", desc: "", info: {}},
    {name: "article", desc: "", info: {}},
    {name: "col", desc: "", info: {}},
    {name: "table", desc: "", info: {}},
    {name: "td", desc: "", info: {}},
    {name: "th", desc: "", info: {}},
    {name: "tbody", desc: "", info: {}},
    {name: "thead", desc: "", info: {}},
    {name: "tfoot", desc: "", info: {}},
    {name: "img", desc: "", info: {}},
    {name: "video", desc: "", info: {}},


    {
        "name": "q-ajax-bar",
        "desc": "ajax栏",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/ajax-bar"
            },
            "props": {
                "position": {
                    "type": "String",
                    "desc": "窗口中应显示QAjaxBar的位置",
                    "default": "top",
                    "values": [
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "category": "style",
                    "required": false
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style",
                    "default": "2px",
                    "required": false
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "前进方向相反",
                    "category": "behavior"
                },
                "skip-hijack": {
                    "type": "Boolean",
                    "desc": "跳过Ajax劫持（不是被动道具）",
                    "category": "behavior"
                },
                "hijack-filter": {
                    "type": "Function",
                    "desc": "筛选应该触发start（）+stop（）的URL",
                    "params": {
                        "url": {
                            "type": "String",
                            "desc": "The URL being triggered",
                            "examples": [
                                "https://some.url/path"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Should the URL received as param trigger start() + stop()?"
                    },
                    "category": "behavior",
                    "addedIn": "v2.4.5"
                }
            },
            "events": {
                "start": {
                    "desc": "当条形图被触发显示时发出"
                },
                "stop": {
                    "desc": "条形图完成工作时发出"
                }
            },
            "methods": {
                "start": {
                    "desc": "通知栏您正在等待新进程完成",
                    "params": {
                        "speed": {
                            "type": "Number",
                            "default": 300,
                            "desc": "Delay (in milliseconds) between progress auto-increments; If delay is 0 then it disables auto-incrementing",
                            "required": false
                        }
                    },
                    "returns": {
                        "type": "Number",
                        "desc": "Number of active simultaneous sessions"
                    }
                },
                "increment": {
                    "desc": "手动触发条形进度增量",
                    "params": {
                        "amount": {
                            "type": "Number",
                            "desc": "Amount (0 < x <= 100) to increment with"
                        }
                    },
                    "returns": {
                        "type": "Number",
                        "desc": "Number of active simultaneous sessions"
                    }
                },
                "stop": {
                    "desc": "通知栏您正在等待的一个进程已完成",
                    "returns": {
                        "type": "Number",
                        "desc": "Number of active simultaneous sessions"
                    }
                }
            }
        }
    },
    {
        "name": "q-avatar",
        "desc": "头像",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/avatar"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "font-size": {
                    "type": "String",
                    "desc": "内容（图标、文本）的大小（以CSS为单位），包括单元名称",
                    "examples": [
                        "18px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "可选择的建议：一个字符串，/<img>标记"
                }
            }
        }
    },
    {
        "name": "q-badge",
        "desc": "标记",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/badge"
            },
            "props": {
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "floating": {
                    "type": "Boolean",
                    "desc": "告诉QBadge它是否应该浮动到相对定位的父元素的右上侧",
                    "category": "content"
                },
                "transparent": {
                    "type": "Boolean",
                    "desc": "应用0.8的不透明度；特别适用于浮动QBadge",
                    "category": "style"
                },
                "multi-line": {
                    "type": "Boolean",
                    "desc": "内容可以换行为多行",
                    "category": "content"
                },
                "label": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "徽章内容为字符串；如果指定，则覆盖默认插槽",
                    "examples": [
                        "John Doe",
                        22
                    ],
                    "category": "content"
                },
                "align": {
                    "type": "String",
                    "desc": "设置垂直对齐CSS道具",
                    "values": [
                        "top",
                        "middle",
                        "bottom"
                    ],
                    "category": "content"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "使用“轮廓”设计（仅限彩色文本和边框）",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "制作圆形徽章",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "如果不使用“label”属性，这就是QBadge内容的去向"
                }
            }
        }
    },
    {
        "name": "q-banner",
        "desc": "横幅",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/banner"
            },
            "props": {
                "inline-actions": {
                    "type": "Boolean",
                    "desc": "显示与内容在同一行上的操作",
                    "category": "content"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是Banner内容的去向"
                },
                "avatar": {
                    "desc": "用于显示化身的插槽（建议：QIcon、QAvatar）"
                },
                "action": {
                    "desc": "横幅动作的位置（建议：QBtn）"
                }
            }
        }
    },
    {
        "name": "q-bar",
        "desc": "栏",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/bar"
            },
            "props": {
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "组件背景颜色会照亮父对象的背景（与使其变暗的默认行为相反）；除非为其指定CSS背景色，否则有效",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-breadcrumbs",
        "desc": "面包屑组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/breadcrumbs"
            },
            "props": {
                "separator": {
                    "type": "String",
                    "desc": "用来分离面包屑的绳子",
                    "default": "/",
                    "examples": [
                        "-",
                        "|",
                        ">"
                    ],
                    "category": "content",
                    "required": false
                },
                "active-color": {
                    "type": "String",
                    "desc": "活动面包屑的颜色，可以是Quasar调色板中的任何颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "primary",
                    "required": false
                },
                "gutter": {
                    "type": "String",
                    "desc": "通过边值，可以控制面包屑元素之间的空间。",
                    "default": "sm",
                    "values": [
                        "none",
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl"
                    ],
                    "category": "content",
                    "required": false
                },
                "separator-color": {
                    "type": "String",
                    "desc": "用于为分隔符上色的颜色，可以是Quasar调色板中的任何颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "align": {
                    "type": "String",
                    "default": "left",
                    "desc": "指定如何水平对齐面包屑",
                    "values": [
                        "left",
                        "center",
                        "right",
                        "between",
                        "around",
                        "evenly"
                    ],
                    "category": "content",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                },
                "separator": {
                    "desc": "可以插入HTML或组件以分离面包屑"
                }
            }
        }
    },
    {
        "name": "q-breadcrumbs-el",
        "desc": "面包屑",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/breadcrumbs"
            },
            "props": {
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "exact": {
                    "type": "Boolean",
                    "desc": "相当于Vue路由器＜Router link＞的“精确”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-active-class"
                    ],
                    "category": "navigation"
                },
                "exact-active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-exact-active-class"
                    ],
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "https://quasar.dev"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；只能与'href'道具一起使用；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "label": {
                    "type": "String",
                    "desc": "面包屑的标签文本",
                    "examples": [
                        "Home",
                        "Index"
                    ],
                    "category": "content"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "span"
                    ],
                    "category": "content",
                    "default": "span",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是自定义内容的位置，除非“图标”和“标签”道具不够"
                }
            },
            "events": {
                "click": {
                    "desc": "单击组件时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object; If you are using route navigation ('to'/'replace' props) and you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
                        },
                        "go": {
                            "type": "Function",
                            "desc": "Available ONLY if you are using route navigation ('to'/'replace' props); When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
                            "required": false,
                            "addedIn": "v2.9",
                            "params": {
                                "opts": {
                                    "type": "Object",
                                    "desc": "Optional options",
                                    "required": false,
                                    "definition": {
                                        "to": {
                                            "type": [
                                                "String",
                                                "Object"
                                            ],
                                            "desc": "Equivalent to Vue Router <router-link> 'to' property; Specify it explicitly otherwise it will be set with same value as component's 'to' prop",
                                            "required": false,
                                            "examples": [
                                                "/home/dashboard",
                                                "{ name: 'my-route-name' }"
                                            ]
                                        },
                                        "replace": {
                                            "type": "Boolean",
                                            "desc": "Equivalent to Vue Router <router-link> 'replace' property; Specify it explicitly otherwise it will be set with same value as component's 'replace' prop",
                                            "required": false
                                        },
                                        "returnRouterError": {
                                            "type": "Boolean",
                                            "desc": "Return the router error, if any; Otherwise the returned Promise will always fulfill",
                                            "required": false
                                        }
                                    }
                                }
                            },
                            "returns": {
                                "type": "Promise<any>",
                                "desc": "Returns the router's navigation promise"
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-btn",
        "desc": "按钮",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/button"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "type": {
                    "type": "String",
                    "desc": "1） 定义按钮本机类型属性（submit、reset、button）或2）使用<a>标记的呈现组件，以便即使禁用也可以访问事件或3）使用“href”道具并指定“type”作为媒体标记",
                    "default": "button",
                    "examples": [
                        "a",
                        "submit",
                        "button",
                        "reset",
                        "image/png",
                        "href=\"https://quasar.dev\" target=\"_blank\""
                    ],
                    "category": "general",
                    "required": false
                },
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“to”和“replace”道具",
                    "examples": [
                        "https://quasar.dev",
                        "href=\"https://quasar.dev\" target=\"_blank\""
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；仅与“to”或“href”道具一起使用",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "label": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "将显示在按钮上的文本",
                    "examples": [
                        "Button Label"
                    ],
                    "category": "content"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-right": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "使用“大纲”设计",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "使用“平面”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "移除阴影",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为方形按钮应用更突出的边框半径",
                    "category": "style"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "使用“推送”设计",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style",
                    "addedIn": "v2.7.6"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "应用光泽效果",
                    "category": "style"
                },
                "fab": {
                    "type": "Boolean",
                    "desc": "使按钮大小和形状适合浮动动作按钮",
                    "category": "style"
                },
                "fab-mini": {
                    "type": "Boolean",
                    "desc": "使按钮的大小和形状适合小型浮动动作按钮",
                    "category": "style"
                },
                "padding": {
                    "type": "String",
                    "desc": "应用自定义填充（垂直[水平]）；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）；设置时还删除最小宽度和高度",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg",
                        "2px 2px 5px 7px"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "避免将标签文本变成大写（默认情况下会发生这种情况）",
                    "category": "content"
                },
                "no-wrap": {
                    "type": "Boolean",
                    "desc": "避免标签文本换行",
                    "category": "content"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "align": {
                    "type": "String",
                    "desc": "标签或内容对齐",
                    "default": "center",
                    "values": [
                        "left",
                        "right",
                        "center",
                        "around",
                        "between",
                        "evenly"
                    ],
                    "category": "content",
                    "required": false
                },
                "stack": {
                    "type": "Boolean",
                    "desc": "垂直堆叠图标和标签，而不是在同一行（就像默认情况下一样）",
                    "category": "content"
                },
                "stretch": {
                    "type": "Boolean",
                    "desc": "当在flexbox父对象上使用时，按钮将拉伸到父对象的高度",
                    "category": "content"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "将按钮置于加载状态（显示一个QSpinner——可以通过使用“加载”插槽覆盖）",
                    "category": "behavior|state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "round": {
                    "type": "Boolean",
                    "desc": "制作圆形按钮",
                    "category": "style"
                },
                "percentage": {
                    "type": "Number",
                    "desc": "百分比（0.0<x<100.0）；与“加载”道具一起使用；在后台显示进度条",
                    "category": "behavior"
                },
                "dark-percentage": {
                    "type": "Boolean",
                    "desc": "背景上的进度条应为深色；与“百分比”和“加载”道具一起使用",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "用于自定义内容，而不是依赖“图标”和“标签”道具"
                },
                "loading": {
                    "desc": "处于“加载”状态时覆盖默认的QSpinner"
                }
            },
            "events": {
                "click": {
                    "desc": "单击组件时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object; If you are using route navigation ('to'/'replace' props) and you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
                        },
                        "go": {
                            "type": "Function",
                            "desc": "Available ONLY if you are using route navigation ('to'/'replace' props); When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
                            "required": false,
                            "addedIn": "v2.9",
                            "params": {
                                "opts": {
                                    "type": "Object",
                                    "desc": "Optional options",
                                    "required": false,
                                    "definition": {
                                        "to": {
                                            "type": [
                                                "String",
                                                "Object"
                                            ],
                                            "desc": "Equivalent to Vue Router <router-link> 'to' property; Specify it explicitly otherwise it will be set with same value as component's 'to' prop",
                                            "required": false,
                                            "examples": [
                                                "/home/dashboard",
                                                "{ name: 'my-route-name' }"
                                            ]
                                        },
                                        "replace": {
                                            "type": "Boolean",
                                            "desc": "Equivalent to Vue Router <router-link> 'replace' property; Specify it explicitly otherwise it will be set with same value as component's 'replace' prop",
                                            "required": false
                                        },
                                        "returnRouterError": {
                                            "type": "Boolean",
                                            "desc": "Return the router error, if any; Otherwise the returned Promise will always fulfill",
                                            "required": false
                                        }
                                    }
                                }
                            },
                            "returns": {
                                "type": "Promise<any>",
                                "desc": "Returns the router's navigation promise"
                            }
                        }
                    }
                }
            },
            "methods": {
                "click": {
                    "desc": "模拟点击QBtn",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-btn-group",
        "desc": "按钮组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/button-group"
            },
            "props": {
                "spread": {
                    "type": "Boolean",
                    "desc": "水平分布到所有可用空间",
                    "category": "content"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "按钮采用“轮廓”设计",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "按钮采用“平面”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "删除按钮上的阴影",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为方形按钮应用更突出的边框半径",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style",
                    "addedIn": "v2.7.6"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "按钮采用“推”式设计",
                    "category": "style"
                },
                "stretch": {
                    "type": "Boolean",
                    "desc": "在柔性盒父对象上使用时，按钮将延伸到父对象的高度",
                    "category": "content"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "应用光泽效果",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QBtn"
                }
            }
        }
    },
    {
        "name": "q-btn-dropdown",
        "desc": "按钮下拉",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/button-dropdown"
            },
            "props": {
                "transition-show": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "required": false
                },
                "model-value": {
                    "desc": "控制菜单显示/隐藏状态；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": "Boolean",
                    "examples": [
                        "v-model=\"menuState\""
                    ]
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "type": {
                    "type": "String",
                    "desc": "1） 定义按钮本机类型属性（submit、reset、button）或2）使用<a>标记的呈现组件，以便即使禁用也可以访问事件或3）使用“href”道具并指定“type”作为媒体标记",
                    "default": "button",
                    "examples": [
                        "a",
                        "submit",
                        "button",
                        "reset",
                        "image/png",
                        "href=\"https://quasar.dev\" target=\"_blank\""
                    ],
                    "category": "general",
                    "required": false
                },
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“to”和“replace”道具",
                    "examples": [
                        "https://quasar.dev",
                        "href=\"https://quasar.dev\" target=\"_blank\""
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；仅与“to”或“href”道具一起使用",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "label": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "将显示在按钮上的文本",
                    "examples": [
                        "Button Label"
                    ],
                    "category": "content"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-right": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "使用“大纲”设计",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "使用“平面”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "移除阴影",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为方形按钮应用更突出的边框半径",
                    "category": "style"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "使用“推送”设计",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style",
                    "addedIn": "v2.7.6"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "应用光泽效果",
                    "category": "style"
                },
                "fab": {
                    "type": "Boolean",
                    "desc": "使按钮大小和形状适合浮动动作按钮",
                    "category": "style"
                },
                "fab-mini": {
                    "type": "Boolean",
                    "desc": "使按钮的大小和形状适合小型浮动动作按钮",
                    "category": "style"
                },
                "padding": {
                    "type": "String",
                    "desc": "应用自定义填充（垂直[水平]）；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）；设置时还删除最小宽度和高度",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg",
                        "2px 2px 5px 7px"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "避免将标签文本变成大写（默认情况下会发生这种情况）",
                    "category": "content"
                },
                "no-wrap": {
                    "type": "Boolean",
                    "desc": "避免标签文本换行",
                    "category": "content"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "align": {
                    "type": "String",
                    "desc": "标签或内容对齐",
                    "default": "center",
                    "values": [
                        "left",
                        "right",
                        "center",
                        "around",
                        "between",
                        "evenly"
                    ],
                    "category": "content",
                    "required": false
                },
                "stack": {
                    "type": "Boolean",
                    "desc": "垂直堆叠图标和标签，而不是在同一行（就像默认情况下一样）",
                    "category": "content"
                },
                "stretch": {
                    "type": "Boolean",
                    "desc": "当在flexbox父对象上使用时，按钮将拉伸到父对象的高度",
                    "category": "content"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "将按钮置于加载状态（显示一个QSpinner——可以通过使用“加载”插槽覆盖）",
                    "category": "behavior|state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "split": {
                    "type": "Boolean",
                    "desc": "将下拉图标拆分为自己的按钮",
                    "category": "content|behavior"
                },
                "dropdown-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "disable-main-btn": {
                    "type": "Boolean",
                    "desc": "禁用主按钮（与“拆分”道具一起使用很有用）",
                    "category": "behavior"
                },
                "disable-dropdown": {
                    "type": "Boolean",
                    "desc": "禁用下拉（如果使用“拆分”道具，则为下拉按钮）",
                    "category": "behavior"
                },
                "no-icon-animation": {
                    "type": "Boolean",
                    "desc": "切换状态时禁用下拉图标的旋转",
                    "category": "style"
                },
                "content-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于菜单的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":content-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "content-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于菜单的类定义",
                    "examples": [
                        "my-special-class",
                        ":content-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "cover": {
                    "type": "Boolean",
                    "desc": "允许菜单覆盖按钮。使用时，“菜单自身”和“菜单适合”道具不再有效",
                    "category": "position"
                },
                "persistent": {
                    "type": "Boolean",
                    "desc": "允许菜单不被菜单外的点击/轻击或按ESC键取消",
                    "category": "behavior"
                },
                "no-route-dismiss": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会关闭弹出窗口；如果还设置了“persistent”道具，则无需设置",
                    "category": "behavior"
                },
                "auto-close": {
                    "type": "Boolean",
                    "desc": "允许在菜单中单击/点击以关闭它；很有用，而不是将事件附加到单击/点击时应关闭菜单的每个菜单项",
                    "category": "behavior"
                },
                "menu-anchor": {
                    "type": "String",
                    "desc": "设置菜单相对于目标的起始位置或锚点的两个值",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "default": "bottom end",
                    "category": "position",
                    "required": false
                },
                "menu-self": {
                    "type": "String",
                    "desc": "两个值设置菜单自身相对于目标的位置",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "default": "top end",
                    "category": "position",
                    "required": false
                },
                "menu-offset": {
                    "type": "Array",
                    "desc": "两个数字的数组，以像素为单位水平和垂直偏移菜单",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "position"
                },
                "toggle-aria-label": {
                    "type": "String",
                    "desc": "要在下拉切换元素上使用的aria标签",
                    "examples": [
                        "Open menu"
                    ],
                    "category": "accessibility",
                    "addedIn": "v2.8.4"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                },
                "label": {
                    "desc": "通过此插槽自定义主按钮的内容，除非您使用“图标”和“标签”道具"
                },
                "loading": {
                    "desc": "处于“加载”状态时覆盖默认的QSpinner",
                    "addedIn": "v2.8"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏状态更改时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "click": {
                    "desc": "当用户点击/点击主按钮时发出（如果使用“拆分”，则不是图标）",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                }
            }
        }
    },
    {
        "name": "q-card",
        "desc": "卡片",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/card"
            },
            "props": {
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "form"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-card-section",
        "desc": "卡片内部组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/card"
            },
            "props": {
                "horizontal": {
                    "type": "Boolean",
                    "desc": "显示水平部分（没有填充，可以包含其他QCardSection）",
                    "category": "content"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "form"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-card-actions",
        "desc": "卡片操作",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/card"
            },
            "props": {
                "align": {
                    "type": "String",
                    "desc": "指定如何对齐操作",
                    "default": "left (for horizontal mode) / stretch (for vertical mode)",
                    "values": [
                        "left",
                        "center",
                        "right",
                        "between",
                        "around",
                        "evenly",
                        "stretch"
                    ],
                    "category": "content",
                    "required": false
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "一个接一个地显示操作",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QBtn"
                }
            }
        }
    },
    {
        "name": "q-carousel",
        "desc": "转盘",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/carousel"
            },
            "props": {
                "fullscreen": {
                    "type": "Boolean",
                    "sync": true,
                    "desc": "全屏幕模式",
                    "examples": [
                        "v-model:fullscreen=\"isFullscreen\""
                    ],
                    "category": "behavior",
                    "syncable": true
                },
                "no-route-fullscreen-exit": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会全屏退出",
                    "category": "behavior"
                },
                "model-value": {
                    "type": "Any",
                    "desc": "定义当前面板名称的组件的模型；如果使用数字，它不会定义面板的索引，而是定义面板的名称，该名称也可以是Integer；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令。",
                    "examples": [
                        "v-model=\"panelName\""
                    ],
                    "category": "model"
                },
                "keep-alive": {
                    "type": "Boolean",
                    "desc": "相当于在内容上使用Vue的原生＜keep-alive＞组件",
                    "category": "behavior"
                },
                "keep-alive-include": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生include道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-exclude": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生exclude道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-max": {
                    "type": "Number",
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生最大道具",
                    "category": "behavior"
                },
                "animated": {
                    "type": "Boolean",
                    "desc": "启用面板之间的转换（另请参阅“转换前一个”和“转换下一个”道具）",
                    "category": "behavior"
                },
                "infinite": {
                    "type": "Boolean",
                    "desc": "使组件显示为无穷大（当到达最后一个面板时，下一个面板将成为第一个面板）",
                    "category": "behavior"
                },
                "swipeable": {
                    "type": "Boolean",
                    "desc": "启用滑动事件（可能会干扰内容的触摸/鼠标事件）",
                    "category": "behavior"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "默认转换和滑动动作将在垂直轴上",
                    "category": "behavior"
                },
                "transition-prev": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-next": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "addedIn": "v2.2",
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "height": {
                    "type": "String",
                    "desc": "旋转木马的高度（以CSS为单位），包括单元名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "padding": {
                    "type": "Boolean",
                    "desc": "根据“箭头”和“导航”道具的使用情况，为每张幻灯片应用默认填充",
                    "category": "content"
                },
                "control-color": {
                    "type": "String",
                    "desc": "Quasar调色板中QCarousel按钮控件（箭头、导航）的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "control-text-color": {
                    "type": "String",
                    "desc": "Quasar调色板中QCarousel按钮控件（箭头、导航）的文本颜色的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "control-type": {
                    "type": "String",
                    "desc": "用于控件的按钮类型（箭头、导航）",
                    "values": [
                        "regular",
                        "flat",
                        "outline",
                        "push",
                        "unelevated"
                    ],
                    "category": "style"
                },
                "autoplay": {
                    "type": [
                        "Number",
                        "Boolean"
                    ],
                    "desc": "以固定的时间间隔（以毫秒为单位）跳转到下一张幻灯片（如果“true”或val>0）或上一张幻灯片false禁用自动播放，true启用自动播放5000ms",
                    "default": false,
                    "examples": [
                        ":autoplay=\"2500\"",
                        true,
                        false
                    ],
                    "category": "behavior",
                    "required": false
                },
                "arrows": {
                    "type": "Boolean",
                    "desc": "显示导航箭头按钮",
                    "category": "content"
                },
                "prev-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "next-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "navigation": {
                    "type": "Boolean",
                    "desc": "显示导航点",
                    "category": "content"
                },
                "navigation-position": {
                    "type": "String",
                    "desc": "侧边粘贴导航",
                    "default": "bottom/right",
                    "values": [
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "category": "content",
                    "required": false
                },
                "navigation-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "navigation-active-icon": {
                    "type": "String",
                    "desc": "活动（当前幻灯片）导航图标的图标名称遵循Quasar约定；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "thumbnails": {
                    "type": "Boolean",
                    "desc": "显示缩略图",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QCarousel幻灯片"
                },
                "control": {
                    "desc": "专用于QCarouselControl的插槽"
                },
                "navigation-icon": {
                    "desc": "导航图标插槽/btn；建议：QBtn",
                    "scope": {
                        "index": {
                            "type": "Number",
                            "desc": "The 0-based index of corresponding slide"
                        },
                        "maxIndex": {
                            "type": "Number",
                            "desc": "The available number of slides"
                        },
                        "name": {
                            "type": "Any",
                            "desc": "The name of the corresponding slide"
                        },
                        "active": {
                            "type": "Boolean",
                            "desc": "Is this the current slide?"
                        },
                        "btnProps": {
                            "type": "Object",
                            "desc": "Default QBtn props that can be binded to your own QBtn"
                        },
                        "onClick": {
                            "type": "Function",
                            "desc": "Default trigger when clicked/tapped on",
                            "params": {
                                "evt": {
                                    "type": "Event",
                                    "desc": "JS event object",
                                    "required": true
                                }
                            },
                            "returns": null
                        }
                    }
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件更改模型时发出；如果模型在外部发生更改，则会触发此事件_isn't_；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "New current panel name",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "before-transition": {
                    "desc": "在转换到新面板之前发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition is going",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition is happening",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "transition": {
                    "desc": "在组件转换到新面板后发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition has occurred",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition has happened",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            },
            "methods": {
                "toggleFullscreen": {
                    "desc": "将视图切换为全屏或非全屏"
                },
                "setFullscreen": {
                    "desc": "进入全屏视图"
                },
                "exitFullscreen": {
                    "desc": "离开全屏视图"
                },
                "next": {
                    "desc": "转到下一个面板"
                },
                "previous": {
                    "desc": "转到上一个面板"
                },
                "goTo": {
                    "desc": "转到特定面板",
                    "params": {
                        "panelName": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer",
                            "required": true,
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-carouselControl",
        "desc": "转盘控制",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/carousel"
            },
            "props": {
                "position": {
                    "type": "String",
                    "desc": "要粘贴的边/角",
                    "default": "bottom-right",
                    "values": [
                        "top-right",
                        "top-left",
                        "bottom-right",
                        "bottom-left",
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "category": "position",
                    "required": false
                },
                "offset": {
                    "type": "Array",
                    "desc": "两个数字的数组，用于水平和垂直偏移组件（以像素为单位）",
                    "default": "[18, 18]",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "position",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-carousel-slide",
        "desc": "转盘内容",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/carousel"
            },
            "props": {
                "name": {
                    "type": "Any",
                    "desc": "幻灯片名称",
                    "required": true,
                    "examples": [
                        "accounts",
                        "firstPanel",
                        ":name=\"1\"",
                        "accounts",
                        "firstSlide",
                        ":name=\"1\""
                    ],
                    "category": "model"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "img-src": {
                    "type": "String",
                    "desc": "指向幻灯片背景图像的URL（使用公用文件夹）",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"img/my-bg.png\"",
                        "(assets folder) src=\"~assets/my-img.png\"",
                        "(relative path format) :src=\"require('./my_img.jpg')\"",
                        "(URL) src=\"https://placeimg.com/500/300/nature\""
                    ],
                    "category": "model"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-chat-message",
        "desc": "聊天消息",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/chat"
            },
            "props": {
                "sent": {
                    "type": "Boolean",
                    "desc": "呈现为已发送的消息（因此来自当前用户）",
                    "category": "content"
                },
                "label": {
                    "type": "String",
                    "desc": "仅呈现标签标头/节",
                    "examples": [
                        "Friday, 18th"
                    ],
                    "category": "content"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "聊天气泡背景的颜色名称（来自Quasar调色板）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "聊天气泡文本的颜色名称（来自Quasar调色板）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "name": {
                    "type": "String",
                    "desc": "作者姓名",
                    "examples": [
                        "John Doe"
                    ],
                    "category": "content"
                },
                "avatar": {
                    "type": "String",
                    "desc": "作者头像的URL",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"boy-avatar.png\"",
                        "(assets folder) src=\"~assets/boy-avatar.png\"",
                        "(relative path format) :src=\"require('./my_img.jpg')\"",
                        "(URL) src=\"https://placeimg.com/500/300/nature\""
                    ],
                    "category": "content"
                },
                "text": {
                    "type": "Array",
                    "desc": "作为消息正文的字符串数组。字符串未经过消毒（请参阅文档中的详细信息）",
                    "examples": [
                        ":text=\"['How are you?']\"",
                        ":text=\"['I\\'m good, thank you!', 'And you?']\""
                    ],
                    "category": "content"
                },
                "stamp": {
                    "type": "String",
                    "desc": "创建时间戳",
                    "examples": [
                        "13:55",
                        "Yesterday at 13:51"
                    ],
                    "category": "content"
                },
                "size": {
                    "type": "String",
                    "desc": "1-12个（共12个）（与col-*相同）",
                    "examples": [
                        "4",
                        "6",
                        "12"
                    ],
                    "category": "style"
                },
                "label-html": {
                    "type": "Boolean",
                    "desc": "将标签渲染为HTML；这可能会导致XSS攻击，因此请确保首先对消息进行消毒",
                    "category": "behavior"
                },
                "name-html": {
                    "type": "Boolean",
                    "desc": "将名称渲染为HTML；这可能会导致XSS攻击，因此请确保首先对消息进行消毒",
                    "category": "behavior"
                },
                "text-html": {
                    "type": "Boolean",
                    "desc": "将文本渲染为HTML；这可能会导致XSS攻击，因此请确保首先对消息进行消毒",
                    "category": "behavior"
                },
                "stamp-html": {
                    "type": "Boolean",
                    "desc": "将印章渲染为HTML；这可能会导致XSS攻击，因此请确保首先对消息进行消毒",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "您可以使用此槽定义自定义消息（覆盖道具）"
                },
                "avatar": {
                    "desc": "头像插槽；建议：QAvatar，img"
                },
                "name": {
                    "desc": "名称插槽；覆盖“name”道具"
                },
                "stamp": {
                    "desc": "邮票插槽；覆盖“stamp”道具"
                },
                "label": {
                    "desc": "标签插槽；覆盖“标签”道具"
                }
            }
        }
    },
    {
        "name": "q-chip",
        "desc": "碎片",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/chip"
            },
            "props": {
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "size": {
                    "type": "String",
                    "desc": "Q芯片尺寸名称或包含单元名称的CSS单元",
                    "examples": [
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl",
                        "25px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-right": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-remove": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-selected": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "label": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "芯片的内容为字符串；如果指定，则覆盖默认插槽",
                    "examples": [
                        "John Doe",
                        "Book"
                    ],
                    "category": "content"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "确定是否应渲染QChip的组件模型",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": "Boolean",
                    "default": true
                },
                "selected": {
                    "type": "Boolean",
                    "sync": true,
                    "desc": "QChip的模型（如果选择与否）",
                    "examples": [
                        "v-model:selected=\"myState\""
                    ],
                    "category": "model",
                    "syncable": true
                },
                "square": {
                    "type": "Boolean",
                    "desc": "为边界半径设置一个较低的值，而不是默认值，使其接近正方形",
                    "category": "style"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "使用“轮廓”设计显示",
                    "category": "style"
                },
                "clickable": {
                    "type": "Boolean",
                    "desc": "QChip可以点击吗？如果是这种情况，那么它将添加悬停效果并发出“点击”事件",
                    "category": "state"
                },
                "removable": {
                    "type": "Boolean",
                    "desc": "如果设置了，则会显示一个“移除”图标，当点击该图标时，QChip会发出“移除”事件",
                    "category": "state"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "remove-aria-label": {
                    "type": "String",
                    "desc": "要在删除图标上使用的aria标签",
                    "examples": [
                        "Remove item"
                    ],
                    "category": "accessibility",
                    "addedIn": "v2.8.4"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                }
            },
            "slots": {
                "default": {
                    "desc": "如果不使用“label”属性，这就是QChip内容的去向"
                }
            },
            "events": {
                "click": {
                    "desc": "如果设置了“可点击”属性，则在Q芯片点击时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "update:selected": {
                    "desc": "Vue在“v-model:selected”上用于更新其值",
                    "params": {
                        "state": {
                            "type": "Boolean",
                            "desc": "Selected state"
                        }
                    }
                },
                "remove": {
                    "desc": "与“value”和“removable”道具一起使用。切换QChip的渲染状态时发出",
                    "params": {
                        "state": {
                            "type": "Boolean",
                            "desc": "Render state (render or not)"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-circular-progress",
        "desc": "循环进度",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/circular-progress"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "value": {
                    "type": "Number",
                    "default": 0,
                    "desc": "当前进度（必须介于最小值/最大值之间）",
                    "category": "model",
                    "required": false
                },
                "min": {
                    "type": "Number",
                    "default": 0,
                    "desc": "定义“无进展”的最小值（必须低于“最大值”）",
                    "category": "model",
                    "required": false
                },
                "max": {
                    "type": "Number",
                    "default": 100,
                    "desc": "定义100%进度的最大值（必须高于“min”）",
                    "category": "model",
                    "required": false
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中弧形进度的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "center-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件中心部分的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件轨迹的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "font-size": {
                    "type": "String",
                    "desc": "以CSS为单位的文本大小，包括单位名称。建议：使用“em”单位与组件大小同步",
                    "default": "0.25em",
                    "examples": [
                        "1em",
                        "16px",
                        "2rem"
                    ],
                    "category": "style",
                    "required": false
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "使进步的弧线变圆",
                    "category": "style",
                    "addedIn": "v2.8.4"
                },
                "thickness": {
                    "type": "Number",
                    "default": 0.2,
                    "desc": "进度弧的厚度与部件尺寸之比（0.0<x<1.0）",
                    "category": "style",
                    "required": false
                },
                "angle": {
                    "type": "Number",
                    "desc": "旋转进度弧的角度",
                    "default": 0,
                    "category": "content",
                    "required": false
                },
                "indeterminate": {
                    "type": "Boolean",
                    "desc": "将组件置于“不确定”状态；忽略“value”道具",
                    "category": "behavior"
                },
                "show-value": {
                    "type": "Boolean",
                    "desc": "启用默认槽并使用它（如果可用），否则它将“值”道具显示为文本；确保文本有足够的空间显示在组件内部",
                    "category": "content|behavior"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "颠倒前进的方向；仅用于确定的状态",
                    "category": "behavior"
                },
                "instant-feedback": {
                    "type": "Boolean",
                    "desc": "模型更改时没有动画",
                    "category": "behavior"
                },
                "animation-speed": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "动画速度（以毫秒为单位，无单位）",
                    "examples": [
                        500,
                        "1200"
                    ],
                    "category": "style",
                    "default": 600,
                    "addedIn": "v2.3",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "仅当设置了“显示值”道具时，才用于组件内容；确保内容有足够的空间显示在组件内部"
                }
            }
        }
    },
    {
        "name": "q-color",
        "desc": "颜色选择器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/color-picker"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "String",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"myColor\""
                    ]
                },
                "default-value": {
                    "type": "String",
                    "desc": "当模型没有时显示的默认值",
                    "examples": [
                        "default-value=\"#c0c0c0\""
                    ],
                    "category": "model"
                },
                "default-view": {
                    "type": "String",
                    "desc": "拾取器的默认视图",
                    "default": "spectrum",
                    "values": [
                        "spectrum",
                        "tune",
                        "palette"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "format-model": {
                    "type": "String",
                    "desc": "在模型上强制使用某种模型格式",
                    "default": "auto",
                    "values": [
                        "auto",
                        "hex",
                        "rgb",
                        "hexa",
                        "rgba"
                    ],
                    "category": "model",
                    "required": false
                },
                "palette": {
                    "type": "Array",
                    "desc": "使用调色板选项卡的自定义调色板",
                    "default": "(hard-coded palette)",
                    "examples": [
                        ":palette=\"[ '#019A9D', '#D9B801', 'rgb(23,120,0)', '#B2028A' ]\""
                    ],
                    "category": "content",
                    "required": false
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "no-header": {
                    "type": "Boolean",
                    "desc": "不渲染标头",
                    "category": "content"
                },
                "no-header-tabs": {
                    "type": "Boolean",
                    "desc": "不渲染标题选项卡（仅渲染输入）",
                    "category": "content",
                    "addedIn": "v2.2"
                },
                "no-footer": {
                    "type": "Boolean",
                    "desc": "不渲染页脚；当你想要一个特定的视图（“默认视图”道具）而不希望用户能够切换它时，这很有用",
                    "category": "content"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "null"
                            ],
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "change": {
                    "desc": "延迟模型值更改时发出（用户完成颜色选择后）",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-dialog",
        "desc": "对话框",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/dialog"
            },
            "props": {
                "transition-show": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "required": false
                },
                "model-value": {
                    "type": "Boolean",
                    "desc": "定义显示/隐藏状态的组件的模型；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "category": "model"
                },
                "persistent": {
                    "type": "Boolean",
                    "desc": "如果单击对话框外部或按ESC键，则用户无法关闭对话框；此外，应用程序路由更改不会取消它",
                    "category": "behavior"
                },
                "no-esc-dismiss": {
                    "type": "Boolean",
                    "desc": "用户不能通过点击ESC键来关闭对话框；如果还设置了“persistent”道具，则无需设置",
                    "category": "behavior"
                },
                "no-backdrop-dismiss": {
                    "type": "Boolean",
                    "desc": "用户无法通过单击对话框外部来关闭对话框；如果还设置了“persistent”道具，则无需设置",
                    "category": "behavior"
                },
                "no-route-dismiss": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会关闭对话框；如果还设置了“persistent”道具，则无需设置",
                    "category": "behavior"
                },
                "auto-close": {
                    "type": "Boolean",
                    "desc": "对话框内的任何点击/点击都将关闭它",
                    "category": "behavior"
                },
                "seamless": {
                    "type": "Boolean",
                    "desc": "将Dialog置于无缝模式；不使用背景，因此用户也可以与页面的其他部分进行交互",
                    "category": "content"
                },
                "maximized": {
                    "type": "Boolean",
                    "desc": "将对话框置于最大化模式",
                    "category": "content"
                },
                "full-width": {
                    "type": "Boolean",
                    "desc": "对话框将尝试以与窗口相同的宽度进行渲染",
                    "category": "content"
                },
                "full-height": {
                    "type": "Boolean",
                    "desc": "对话框将尝试以与窗口相同的高度进行渲染",
                    "category": "content"
                },
                "position": {
                    "type": "String",
                    "desc": "将对话框粘贴到其中一侧（顶部、右侧、底部或左侧）",
                    "default": "standard",
                    "values": [
                        "standard",
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "category": "content",
                    "required": false
                },
                "square": {
                    "type": "Boolean",
                    "desc": "强制内容具有方形边框",
                    "category": "style"
                },
                "no-refocus": {
                    "type": "Boolean",
                    "desc": "（辅助功能）当对话框被隐藏时，不要将焦点重新集中在以前有焦点的DOM元素上",
                    "category": "behavior"
                },
                "no-focus": {
                    "type": "Boolean",
                    "desc": "（辅助功能）当对话框显示时，不要将焦点切换到它上",
                    "category": "behavior"
                },
                "no-shake": {
                    "type": "Boolean",
                    "desc": "不要为了引起用户的注意而摇晃对话框",
                    "category": "behavior",
                    "addedIn": "v2.1.1"
                },
                "allow-focus-outside": {
                    "type": "Boolean",
                    "desc": "允许对话框之外的元素可聚焦；默认情况下，出于可访问性的原因，QDialog不允许外部焦点",
                    "category": "behavior",
                    "addedIn": "v2.7.2"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏状态更改时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "shake": {
                    "desc": "除非设置了“no shake”属性，否则在对话框抖动以吸引用户注意力时发出"
                },
                "escape-key": {
                    "desc": "按下ESC键时发出；如果Dialog为“persistent”或设置了“no esc key”，则不会发出"
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                },
                "focus": {
                    "desc": "焦点对话框；如果您有具有自动对焦属性的内容，它将直接对其进行对焦",
                    "params": {
                        "selector": {
                            "type": "String",
                            "required": false,
                            "desc": "Optional CSS selector to override default focusable element",
                            "examples": [
                                "[tabindex]:not([tabindex=\"-1\"])"
                            ],
                            "addedIn": "v2.6.5"
                        }
                    }
                },
                "shake": {
                    "desc": "Shakes对话框",
                    "params": {
                        "focusTarget": {
                            "type": "Element",
                            "desc": "Optional DOM Element to be focused after shake",
                            "examples": [
                                "document.getElementById('example')"
                            ],
                            "addedIn": "v2.10.1"
                        }
                    }
                }
            },
            "computedProps": {
                "contentEl": {
                    "type": "Element",
                    "desc": "渲染内容的DOM元素",
                    "addedIn": "v2.10.1"
                }
            }
        }
    },
    {
        "name": "q-editor",
        "desc": "富文本编辑器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/editor"
            },
            "props": {
                "fullscreen": {
                    "type": "Boolean",
                    "sync": true,
                    "desc": "全屏幕模式",
                    "examples": [
                        "v-model:fullscreen=\"isFullscreen\""
                    ],
                    "category": "behavior",
                    "syncable": true
                },
                "no-route-fullscreen-exit": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会全屏退出",
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "String",
                    "examples": [
                        "v-model=\"content\""
                    ]
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无边框）",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；工具栏按钮仅显示在一行上",
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "min-height": {
                    "type": "String",
                    "desc": "可编辑区域最小高度的CSS单位",
                    "default": "10rem",
                    "examples": [
                        "15rem",
                        "50vh"
                    ],
                    "category": "style",
                    "required": false
                },
                "max-height": {
                    "type": "String",
                    "desc": "输入区域最大高度的CSS单位",
                    "examples": [
                        "1000px",
                        "90vh"
                    ],
                    "category": "style"
                },
                "height": {
                    "type": "String",
                    "desc": "设置可编辑区域高度的CSS值",
                    "examples": [
                        "100px",
                        "50vh"
                    ],
                    "category": "style"
                },
                "definitions": {
                    "type": "Object",
                    "desc": "“工具栏”道具中包含的命令及其按钮的定义",
                    "examples": [
                        ":definitions=\"{ save: { tip: 'Save your work', icon: 'save', label: 'Save', handler: saveWork }, upload: { tip: 'Upload to cloud', icon: 'cloud_upload', label: 'Upload', handler: uploadIt } }\""
                    ],
                    "definition": {
                        "...commandName": {
                            "type": "Object",
                            "tsType": "QEditorCommand",
                            "autoDefineTsType": true,
                            "desc": "Command definition",
                            "definition": {
                                "label": {
                                    "type": "String",
                                    "desc": "Label of the button",
                                    "examples": [
                                        "Addresses"
                                    ]
                                },
                                "tip": {
                                    "type": "String",
                                    "desc": "Text to be displayed as a tooltip on hover",
                                    "examples": [
                                        "Add a contact from the Address Book"
                                    ]
                                },
                                "htmlTip": {
                                    "type": "String",
                                    "desc": "HTML formatted text to be displayed within a tooltip on hover",
                                    "examples": [
                                        "Add a <span class=\"red\">user</span> from the address book"
                                    ]
                                },
                                "icon": {
                                    "type": "String",
                                    "desc": "Icon of the button",
                                    "examples": [
                                        "fas fa-address-book"
                                    ]
                                },
                                "key": {
                                    "type": "Number",
                                    "desc": "Keycode of a key to be used together with the <ctrl> key for use as a shortcut to trigger this element",
                                    "examples": [
                                        "12",
                                        "36"
                                    ]
                                },
                                "handler": {
                                    "type": "Function",
                                    "desc": "Either this or \"cmd\" is required. Function for when button gets clicked/tapped.",
                                    "params": null,
                                    "returns": null,
                                    "examples": [
                                        "() => this.uploadFile()"
                                    ]
                                },
                                "cmd": {
                                    "type": "String",
                                    "desc": "Either this or \"handler\" is required. This must be a valid execCommand method according to the designMode API.",
                                    "examples": [
                                        "insertHTML",
                                        "justifyFull"
                                    ]
                                },
                                "param": {
                                    "type": "String",
                                    "desc": "Only set a param if using a \"cmd\". This is commonly text or HTML to inject, but is highly dependent upon the specific cmd being called.",
                                    "examples": [
                                        "<img src=\"://uploads/001.jpg\" alt=\"nice pic\" />"
                                    ]
                                },
                                "disable": {
                                    "type": [
                                        "Boolean",
                                        "Function"
                                    ],
                                    "desc": "Is button disabled?",
                                    "returns": {
                                        "type": "Boolean",
                                        "desc": "If true, the button will be disabled"
                                    },
                                    "examples": [
                                        "!user.active",
                                        "() => !checkIfUserIsActive()"
                                    ]
                                },
                                "type": {
                                    "type": "String",
                                    "desc": "Pass the value \"no-state\" if the button should not have an \"active\" state",
                                    "values": [
                                        null,
                                        "no-state"
                                    ],
                                    "examples": [
                                        "no-state"
                                    ]
                                },
                                "fixedLabel": {
                                    "type": "Boolean",
                                    "desc": "Lock the button label, so it doesn't change based on the child option selected."
                                },
                                "fixedIcon": {
                                    "type": "Boolean",
                                    "desc": "Lock the button icon, so it doesn't change based on the child option selected."
                                },
                                "highlight": {
                                    "type": "Boolean",
                                    "desc": "Highlight the toolbar button, when a child option has been selected."
                                }
                            }
                        }
                    },
                    "category": "toolbar"
                },
                "fonts": {
                    "type": "Object",
                    "desc": "具有字体定义的对象",
                    "examples": [
                        ":fonts=\"{ arial: 'Arial', arial_black: 'Arial Black', comic_sans: 'Comic Sans MS' }\""
                    ],
                    "category": "toolbar"
                },
                "toolbar": {
                    "type": "Array",
                    "desc": "对象/字符串数组的数组，用于定义工具栏中可用的元素和命令的构造",
                    "default": [
                        [
                            "left",
                            "center",
                            "right",
                            "justify"
                        ],
                        [
                            "bold",
                            "italic",
                            "underline",
                            "strike"
                        ],
                        [
                            "undo",
                            "redo"
                        ]
                    ],
                    "examples": [
                        [
                            "left",
                            "center",
                            "right",
                            "justify"
                        ]
                    ],
                    "category": "toolbar",
                    "required": false
                },
                "toolbar-color": {
                    "type": "String",
                    "desc": "工具栏中按钮和文本的字体颜色（来自Quasar Palette）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "toolbar"
                },
                "toolbar-text-color": {
                    "type": "String",
                    "desc": "工具栏命令的文本颜色（来自Quasar Palette）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "toolbar"
                },
                "toolbar-toggle-color": {
                    "type": "String",
                    "desc": "选择工具栏命令按钮的活动颜色（从Quasar Palette）",
                    "default": "primary",
                    "examples": [
                        "secondary",
                        "blue-3"
                    ],
                    "category": "toolbar",
                    "required": false
                },
                "toolbar-bg": {
                    "type": "String",
                    "desc": "工具栏背景色（来自Quasar Palette）",
                    "default": "grey-3",
                    "examples": [
                        "secondary",
                        "blue-3"
                    ],
                    "category": "toolbar",
                    "required": false
                },
                "toolbar-outline": {
                    "type": "Boolean",
                    "desc": "工具栏按钮呈现为“轮廓”",
                    "category": "toolbar|style"
                },
                "toolbar-push": {
                    "type": "Boolean",
                    "desc": "工具栏按钮呈现为“按钮”类型",
                    "category": "toolbar|style"
                },
                "toolbar-rounded": {
                    "type": "Boolean",
                    "desc": "工具栏按钮呈现为“圆形”",
                    "category": "toolbar|style"
                },
                "paragraph-tag": {
                    "type": "String",
                    "desc": "要使用的段落标记",
                    "values": [
                        "div",
                        "p"
                    ],
                    "category": "behavior"
                },
                "content-style": {
                    "type": "Object",
                    "tsType": "VueStyleObjectProp",
                    "desc": "具有CSS属性和值的对象，用于设置QEditor容器的样式",
                    "examples": [
                        ":content-style=\"{ backgroundColor: '#C0C0C0' }\""
                    ],
                    "category": "style"
                },
                "content-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "输入区域的CSS类",
                    "examples": [
                        "my-special-class",
                        ":content-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "placeholder": {
                    "type": "String",
                    "desc": "显示为占位符的文本",
                    "examples": [
                        "Type your story here ..."
                    ],
                    "category": "content"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "String",
                            "desc": "The pure HTML of the content",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "toggleFullscreen": {
                    "desc": "将视图切换为全屏或非全屏"
                },
                "setFullscreen": {
                    "desc": "进入全屏视图"
                },
                "exitFullscreen": {
                    "desc": "离开全屏视图"
                },
                "runCmd": {
                    "desc": "在插入符号位置和范围运行contentEditable命令",
                    "params": {
                        "cmd": {
                            "type": "String",
                            "desc": "Must be a valid execCommand method according to the designMode API",
                            "examples": [
                                "copy",
                                "cut",
                                "paste"
                            ],
                            "required": true
                        },
                        "param": {
                            "type": "String",
                            "desc": "The argument to pass to the command",
                            "examples": [
                                "<small>Small Text</small>"
                            ]
                        },
                        "update": {
                            "type": "Boolean",
                            "desc": "Refresh the toolbar",
                            "default": true,
                            "required": false
                        }
                    }
                },
                "refreshToolbar": {
                    "desc": "隐藏链接编辑器（如果可见），并强制实例重新渲染"
                },
                "focus": {
                    "desc": "关注内容可在保存的光标位置编辑"
                },
                "getContentEl": {
                    "desc": "检索编辑器的内容",
                    "returns": {
                        "type": "Element",
                        "desc": "Provides the pure HTML within the editable area"
                    }
                }
            },
            "computedProps": {
                "caret": {
                    "type": "Object",
                    "tsType": "QEditorCaret",
                    "desc": "当前插入符号状态"
                }
            }
        }
    },
    {
        "name": "q-expansion-item",
        "desc": "",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/expansion-item"
            },
            "props": {
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "exact": {
                    "type": "Boolean",
                    "desc": "相当于Vue路由器＜Router link＞的“精确”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-active-class"
                    ],
                    "category": "navigation"
                },
                "exact-active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-exact-active-class"
                    ],
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "https://quasar.dev"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；只能与'href'道具一起使用；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "model-value": {
                    "desc": "定义“打开”状态的组件的模型；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": "Boolean"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "expand-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "expanded-icon": {
                    "type": "String",
                    "desc": "展开QExpanditionItem时的图标名称（遵循Quasar约定）；使用时，还会禁用展开图标的旋转动画；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "expand-icon-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "将自定义类应用于展开图标项部分",
                    "examples": [
                        "text-purple"
                    ],
                    "category": "style"
                },
                "toggle-aria-label": {
                    "type": "String",
                    "desc": "要在扩展切换元素上使用的aria标签",
                    "examples": [
                        "Open details"
                    ],
                    "category": "accessibility",
                    "addedIn": "v2.8.4"
                },
                "label": {
                    "type": "String",
                    "desc": "标头标签（除非使用“标头”插槽）",
                    "examples": [
                        "My expansion item"
                    ],
                    "category": "content"
                },
                "label-lines": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "当指定行数上没有足够的空间进行渲染时，应用省略号；如果指定了多行，那么它将仅在webkit浏览器上工作，因为它使用了“-webkit line clamp”CSS属性！",
                    "examples": [
                        "1",
                        "3",
                        ":label-lines=\"2\""
                    ],
                    "category": "content"
                },
                "caption": {
                    "type": "String",
                    "desc": "页眉子标签（除非使用“页眉”插槽）",
                    "examples": [
                        "Unread message: 5"
                    ],
                    "category": "content"
                },
                "caption-lines": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "当指定行数上没有足够的空间进行渲染时，应用省略号；如果指定了多行，那么它将仅在webkit浏览器上工作，因为它使用了“-webkit line clamp”CSS属性！",
                    "examples": [
                        "1",
                        "3",
                        ":caption-lines=\"2\""
                    ],
                    "category": "content"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "duration": {
                    "type": "Number",
                    "desc": "动画持续时间（以毫秒为单位）",
                    "default": 300,
                    "category": "behavior",
                    "required": false
                },
                "header-inset-level": {
                    "type": "Number",
                    "desc": "将插入应用于页眉（除非使用“页眉”插槽）；当标题头像/左侧缺失，但您想将内容与其他有左侧的项目对齐时，或者当您正在构建菜单时，这很有用",
                    "examples": [
                        ":header-inset-level=\"1\""
                    ],
                    "category": "content"
                },
                "content-inset-level": {
                    "type": "Number",
                    "desc": "将插入应用于内容（更改内容填充）",
                    "examples": [
                        ":content-inset-level=\"1\""
                    ],
                    "category": "content"
                },
                "expand-separator": {
                    "type": "Boolean",
                    "desc": "打开扩展项时应用顶部和底部分隔符",
                    "category": "content"
                },
                "default-opened": {
                    "type": "Boolean",
                    "desc": "在初始渲染时将展开项置于打开状态；被v-model覆盖（如果使用）",
                    "category": "behavior"
                },
                "hide-expand-icon": {
                    "type": "Boolean",
                    "desc": "不显示展开图标",
                    "category": "content",
                    "addedIn": "v2.8.4"
                },
                "expand-icon-toggle": {
                    "type": "Boolean",
                    "desc": "仅将展开事件应用于展开图标，而不应用于整个页眉",
                    "category": "behavior"
                },
                "switch-toggle-side": {
                    "type": "Boolean",
                    "desc": "切换展开图标侧（从默认的“右”到“左”）",
                    "category": "content"
                },
                "dense-toggle": {
                    "type": "Boolean",
                    "desc": "使用密集模式展开图标",
                    "category": "style"
                },
                "group": {
                    "type": "String",
                    "desc": "将扩展项注册到组中（必须应用于该组中所有扩展项的唯一名称），以便在组内协调打开/关闭状态，也称为“手风琴模式”",
                    "examples": [
                        "my-emails"
                    ],
                    "category": "content|behavior"
                },
                "popup": {
                    "type": "Boolean",
                    "desc": "将扩展列表置于“弹出”模式",
                    "category": "behavior"
                },
                "header-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "将自定义样式应用于页眉",
                    "examples": [
                        "background: '#ff0000'",
                        ":header-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "header-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "将自定义类应用于标头",
                    "examples": [
                        "my-custom-class",
                        ":header-class=\"{ 'my-custom-class': someCondition }\""
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "用于扩展项内容的插槽"
                },
                "header": {
                    "desc": "用于覆盖默认标头的插槽",
                    "scope": {
                        "expanded": {
                            "type": "Boolean",
                            "desc": "QExpansionItem expanded status",
                            "addedIn": "v2.7.6"
                        },
                        "detailsId": {
                            "type": "String",
                            "desc": "QExpansionItem details panel id (for use in aria-controls)",
                            "addedIn": "v2.8.4"
                        },
                        "show": {
                            "type": "Function",
                            "desc": "Triggers component to show",
                            "params": {
                                "evt": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "JS event object"
                                }
                            },
                            "returns": null,
                            "addedIn": "v2.8.4"
                        },
                        "hide": {
                            "type": "Function",
                            "desc": "Triggers component to hide",
                            "params": {
                                "evt": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "JS event object"
                                }
                            },
                            "returns": null,
                            "addedIn": "v2.8.4"
                        },
                        "toggle": {
                            "type": "Function",
                            "desc": "Triggers component to toggle between show/hide",
                            "params": {
                                "evt": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "JS event object"
                                }
                            },
                            "returns": null,
                            "addedIn": "v2.8.4"
                        }
                    }
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏状态更改时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "after-show": {
                    "desc": "组件显示动画完成时发射"
                },
                "after-hide": {
                    "desc": "组件隐藏动画完成时发射"
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                }
            }
        }
    },
    {
        "name": "q-fab",
        "desc": "悬浮操作",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/floating-action-button"
            },
            "props": {
                "type": {
                    "type": "String",
                    "desc": "定义按钮HTML DOM类型",
                    "default": "a",
                    "values": [
                        "a",
                        "submit",
                        "button",
                        "reset"
                    ],
                    "category": "general",
                    "required": false
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "Fab按钮采用“轮廓”设计",
                    "category": "style"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "Fab按钮采用“推”式设计",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "Fab按钮采用“扁平”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "移除阴影",
                    "category": "style"
                },
                "padding": {
                    "type": "String",
                    "desc": "应用自定义填充（垂直[水平]）；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）；设置时还删除最小宽度和高度",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "在按钮上应用光泽效果",
                    "category": "style"
                },
                "external-label": {
                    "type": "Boolean",
                    "desc": "在FAB旁边显示标签，作为外部内容",
                    "category": "style|content"
                },
                "label": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "Fab扩展时将显示的标签",
                    "examples": [
                        "Button Label"
                    ],
                    "category": "content"
                },
                "label-position": {
                    "type": "String",
                    "desc": "图标周围标签的位置",
                    "values": [
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ],
                    "category": "style|content"
                },
                "hide-label": {
                    "type": "Boolean",
                    "desc": "隐藏标签；用于切换标签可见性的动画目的",
                    "category": "style|content"
                },
                "label-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于标签容器的类定义",
                    "examples": [
                        "my-special-class",
                        ":input-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "label-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于标签容器的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":input-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "将矩形方面应用于FAB",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "model-value": {
                    "desc": "控制晶圆厂动作的状态（显示/隐藏）；与v-model指令配合使用效果最好，否则与侦听“update:modelValue”事件一起使用",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": "Boolean"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "active-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "hide-icon": {
                    "type": "Boolean",
                    "desc": "隐藏图标（不使用任何图标）",
                    "category": "style|content"
                },
                "direction": {
                    "type": "String",
                    "desc": "将Fab Actions扩展到的方向",
                    "default": "right",
                    "values": [
                        "up",
                        "right",
                        "down",
                        "left"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "vertical-actions-align": {
                    "type": "String",
                    "desc": "Fab动作将展开的Fab一侧（仅当方向为“向上”或“向下”时）",
                    "default": "center",
                    "values": [
                        "left",
                        "center",
                        "right"
                    ],
                    "category": "style|content",
                    "required": false
                },
                "persistent": {
                    "type": "Boolean",
                    "desc": "默认情况下，当用户导航到另一条路线时，Fab操作是隐藏的，并且此道具禁用此行为",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是QFabActions可能进入的领域"
                },
                "tooltip": {
                    "desc": "专门为QTooltip设计的插槽"
                },
                "icon": {
                    "desc": "FAB关闭时显示的图标插槽；建议：QIcon",
                    "scope": {
                        "opened": {
                            "type": "Boolean",
                            "desc": "FAB is opened"
                        }
                    },
                    "addedIn": "v2.4"
                },
                "active-icon": {
                    "desc": "FAB打开时显示的图标插槽；建议：QIcon",
                    "scope": {
                        "opened": {
                            "type": "Boolean",
                            "desc": "FAB is opened"
                        }
                    },
                    "addedIn": "v2.4"
                },
                "label": {
                    "desc": "标签插槽",
                    "scope": {
                        "opened": {
                            "type": "Boolean",
                            "desc": "FAB is opened"
                        }
                    },
                    "addedIn": "v2.4"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏晶圆厂动作时发出；由v-model指令捕获",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "show": {
                    "desc": "扩展晶圆厂行动列表",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "折叠晶圆厂操作列表",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                }
            }
        }
    },
    {
        "name": "q-input",
        "desc": "输入框",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/input"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理表单时很有用；如果未指定，则采用值“for”prop（如果存在）",
                    "examples": [
                        "car_id",
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "mask": {
                    "type": "String",
                    "desc": "自定义遮罩或预定义遮罩名称之一",
                    "examples": [
                        "###-##",
                        "date",
                        "datetime",
                        "time",
                        "fulltime",
                        "phone",
                        "card"
                    ],
                    "category": "behavior"
                },
                "fill-mask": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "用指定字符填充字符串（如果值不是字符串，则使用下划线）以填充掩码的长度",
                    "examples": [
                        "true",
                        "'0'",
                        "'_'"
                    ],
                    "category": "behavior"
                },
                "reverse-fill-mask": {
                    "type": "Boolean",
                    "desc": "从遮罩右侧填充字符串",
                    "category": "behavior"
                },
                "unmasked-value": {
                    "type": "Boolean",
                    "desc": "模型将被取消掩码（不包含标记/分隔字符）",
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "String",
                        "Number",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"myText\""
                    ]
                },
                "error": {
                    "type": "Boolean",
                    "desc": "字段是否存在验证错误？",
                    "category": "behavior"
                },
                "error-message": {
                    "type": "String",
                    "desc": "验证错误消息（仅当“error”设置为“true”时才会显示）",
                    "examples": [
                        "Username must have at least 5 characters"
                    ],
                    "category": "content"
                },
                "no-error-icon": {
                    "type": "Boolean",
                    "desc": "出现错误时隐藏错误图标",
                    "category": "content"
                },
                "rules": {
                    "type": "Array",
                    "tsType": "ValidationRule",
                    "desc": "函数/字符串数组；如果是String，则它必须是嵌入的验证规则之一的名称",
                    "examples": [
                        ":rules=\"[ val => val.length <= 3 || 'Please use maximum 3 characters' ]\"",
                        ":rules=\"[ 'fulltime' ]\"",
                        ":rules=\"[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]\""
                    ],
                    "category": "behavior"
                },
                "reactive-rules": {
                    "type": "Boolean",
                    "desc": "默认情况下，规则的更改在模型更改之前不会触发新的验证；如果设置为true，则规则的更改将触发验证；性能会受到影响，所以只有在真正需要时才使用",
                    "category": "behavior"
                },
                "lazy-rules": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为布尔值true，则只有在字段第一次失去焦点后，它才会根据“规则”检查验证状态；如果设置为“ondemand”，则仅当手动调用组件的validate（）方法或包装器QForm提交自身时才会触发",
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "ondemand"
                    ],
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "一旦字段获得焦点，文本标签将“浮动”在输入字段上方",
                    "examples": [
                        "Username"
                    ],
                    "category": "content"
                },
                "stack-label": {
                    "type": "Boolean",
                    "desc": "无论字段内容如何（如果有），标签都将始终显示在字段上方",
                    "category": "content"
                },
                "hint": {
                    "type": "String",
                    "desc": "放置在包装表单组件下方的帮助程序（提示）文本",
                    "examples": [
                        "Fill in between 3 and 12 characters"
                    ],
                    "category": "content"
                },
                "hide-hint": {
                    "type": "Boolean",
                    "desc": "当字段没有焦点时隐藏辅助对象（提示）文本",
                    "category": "content"
                },
                "prefix": {
                    "type": "String",
                    "desc": "前缀",
                    "examples": [
                        "$"
                    ],
                    "category": "content"
                },
                "suffix": {
                    "type": "String",
                    "desc": "后缀",
                    "examples": [
                        "@gmail.com"
                    ],
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中标签的颜色名称；覆盖“color”道具；与“color”道具的不同之处在于，即使字段未聚焦，标签也将始终具有此颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "通过显示微调器向用户发出进程正在进行的信号；Spinner可以通过使用“加载”插槽进行自定义。",
                    "category": "behavior|content"
                },
                "clearable": {
                    "type": "Boolean",
                    "desc": "当设置了一个值（未定义或为空）时，附加可清除的图标；单击时，模型变为空",
                    "category": "behavior|content"
                },
                "clear-icon": {
                    "type": "String",
                    "desc": "与“可清除”道具一起使用时用于清除按钮的自定义图标",
                    "examples": [
                        "close"
                    ],
                    "category": "content"
                },
                "filled": {
                    "type": "Boolean",
                    "desc": "对字段使用“填充”设计",
                    "category": "style"
                },
                "outlined": {
                    "type": "Boolean",
                    "desc": "现场采用“轮廓”设计",
                    "category": "style"
                },
                "borderless": {
                    "type": "Boolean",
                    "desc": "对字段使用“无边框”设计",
                    "category": "style"
                },
                "standout": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "现场采用“突出”设计；指定聚焦时要应用的类（覆盖默认类）",
                    "examples": [
                        "standout",
                        "standout=\"bg-primary text-white\""
                    ],
                    "category": "style"
                },
                "label-slot": {
                    "type": "Boolean",
                    "desc": "启用标签槽；如果未设置“label”道具，则需要将其设置为强制使用“label“插槽",
                    "category": "content"
                },
                "bottom-slots": {
                    "type": "Boolean",
                    "desc": "启用底部插槽（“error”、“hint”、“counter”）",
                    "category": "content"
                },
                "hide-bottom-space": {
                    "type": "Boolean",
                    "desc": "当提示/错误/计数器不使用时，不要再为它们保留空间；因此，它也会禁用这些对象的动画；它还允许提示/错误区域根据其内容进行垂直拉伸",
                    "category": "style"
                },
                "counter": {
                    "type": "Boolean",
                    "desc": "在右下角显示自动计数器",
                    "category": "content"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形；覆盖“圆角”道具",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "item-aligned": {
                    "type": "Boolean",
                    "desc": "将内部内容对齐方式与QItem的对齐方式相匹配",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "autofocus": {
                    "type": "Boolean",
                    "desc": "初始组件渲染上的焦点场",
                    "category": "behavior"
                },
                "for": {
                    "type": "String",
                    "desc": "用于指定控件的“id”以及包装控件的标签的“for”属性；如果未指定“name”道具，则也会将其用于此属性",
                    "examples": [
                        "myFieldsId"
                    ],
                    "category": "behavior"
                },
                "shadow-text": {
                    "type": "String",
                    "desc": "要在控件中的文本末尾显示为阴影的文本；不适用于type=文件",
                    "examples": [
                        "rest of the fill value"
                    ],
                    "category": "content"
                },
                "type": {
                    "type": "String",
                    "desc": "输入类型",
                    "default": "text",
                    "values": [
                        "text",
                        "password",
                        "textarea",
                        "email",
                        "search",
                        "tel",
                        "file",
                        "number",
                        "url",
                        "time",
                        "date"
                    ],
                    "category": "general",
                    "required": false
                },
                "debounce": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "更新模型时的抖动量（以毫秒为单位）",
                    "category": "model"
                },
                "maxlength": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "指定模型的最大长度",
                    "category": "model"
                },
                "autogrow": {
                    "type": "Boolean",
                    "desc": "使字段及其内容自动换行（使用文本区域）",
                    "category": "content"
                },
                "input-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于基础输入标记的类定义",
                    "examples": [
                        "my-special-class",
                        ":input-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "input-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于基础输入标记的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":input-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "字段主要内容"
                },
                "prepend": {
                    "desc": "预备内场；建议：QIcon、QBtn"
                },
                "append": {
                    "desc": "附加到内部字段；建议：QIcon、QBtn"
                },
                "before": {
                    "desc": "准备外部字段；建议：QIcon、QBtn"
                },
                "after": {
                    "desc": "附加外部字段；建议：QIcon、QBtn"
                },
                "label": {
                    "desc": "标签插槽；仅当设置了“label slot”道具或设置了“label”道具时使用；使用时，“label”道具中的文本将被忽略"
                },
                "error": {
                    "desc": "错误插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "hint": {
                    "desc": "提示文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "counter": {
                    "desc": "计数器文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "loading": {
                    "desc": "组件处于加载模式时覆盖默认微调器；与“加载”道具一起使用"
                }
            },
            "events": {
                "clear": {
                    "desc": "使用“clearable”属性时，单击clear图标时会发出此事件",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "The previous value before clearing it"
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "Number",
                                "null"
                            ],
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "focus": {
                    "desc": "组件聚焦时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "blur": {
                    "desc": "组件失去焦点时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                }
            },
            "methods": {
                "resetValidation": {
                    "desc": "重置验证状态"
                },
                "validate": {
                    "desc": "触发验证",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Optional value to validate against"
                        }
                    },
                    "returns": {
                        "type": [
                            "Boolean",
                            "Promise<boolean>"
                        ],
                        "desc": "True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)",
                        "examples": [
                            "true",
                            "validate().then(outcome => { ... })"
                        ]
                    }
                },
                "focus": {
                    "desc": "焦点基础输入标记"
                },
                "blur": {
                    "desc": "失去对基础输入标记的关注"
                },
                "select": {
                    "desc": "选择输入文本"
                },
                "getNativeElement": {
                    "desc": "不赞成；直接访问“nativeEl”；获取本机输入/textarea DOM元素",
                    "returns": {
                        "type": "Element",
                        "desc": "The underlying native input/textarea DOM Element"
                    }
                }
            },
            "computedProps": {
                "hasError": {
                    "type": "Boolean",
                    "desc": "组件是否处于错误状态"
                },
                "nativeEl": {
                    "type": "Element",
                    "desc": "本机输入/文本区域DOM元素",
                    "addedIn": "v2.10.1"
                }
            }
        }
    },
    {
        "name": "q-select",
        "desc": "选择框",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/select"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理表单时很有用；如果未指定，则采用值“for”prop（如果存在）",
                    "examples": [
                        "car_id",
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "virtual-scroll-horizontal": {
                    "type": "Boolean",
                    "desc": "使虚拟列表在水平模式下工作",
                    "category": "behavior"
                },
                "virtual-scroll-slice-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "虚拟列表中要渲染的最小项目数",
                    "default": "30",
                    "examples": [
                        "virtual-scroll-slice-size=\"60\""
                    ],
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-before": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之前渲染的项目数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-after": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之后渲染的项目数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-item-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "项目的默认像素大小（垂直时为高度，水平时为宽度）；该值用于呈现初始列表；尝试使用接近项目最小大小的值",
                    "default": 24,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-sticky-size-start": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "列表开头的粘性部分（如果使用一个）的像素大小（垂直时为高度，水平时为宽度）；正确的值将提高滚动精度",
                    "default": "0",
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-sticky-size-end": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "列表末尾的粘性部分（如果使用）的像素大小（如果垂直，则为高度，如果水平，则为宽度）；正确的值将提高滚动精度",
                    "default": "0",
                    "category": "virtual-scroll",
                    "required": false
                },
                "table-colspan": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "表中的列数（如果使用表布局，则需要此项：固定）",
                    "category": "virtual-scroll|content"
                },
                "model-value": {
                    "desc": "部件的型号；如果使用“multiple”道具，则必须为Array；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Any",
                    "examples": [
                        "v-model=\"myModel\""
                    ]
                },
                "error": {
                    "type": "Boolean",
                    "desc": "字段是否存在验证错误？",
                    "category": "behavior"
                },
                "error-message": {
                    "type": "String",
                    "desc": "验证错误消息（仅当“error”设置为“true”时才会显示）",
                    "examples": [
                        "Username must have at least 5 characters"
                    ],
                    "category": "content"
                },
                "no-error-icon": {
                    "type": "Boolean",
                    "desc": "出现错误时隐藏错误图标",
                    "category": "content"
                },
                "rules": {
                    "type": "Array",
                    "tsType": "ValidationRule",
                    "desc": "函数/字符串数组；如果是String，则它必须是嵌入的验证规则之一的名称",
                    "examples": [
                        ":rules=\"[ val => val.length <= 3 || 'Please use maximum 3 characters' ]\"",
                        ":rules=\"[ 'fulltime' ]\"",
                        ":rules=\"[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]\""
                    ],
                    "category": "behavior"
                },
                "reactive-rules": {
                    "type": "Boolean",
                    "desc": "默认情况下，规则的更改在模型更改之前不会触发新的验证；如果设置为true，则规则的更改将触发验证；性能会受到影响，所以只有在真正需要时才使用",
                    "category": "behavior"
                },
                "lazy-rules": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为布尔值true，则只有在字段第一次失去焦点后，它才会根据“规则”检查验证状态；如果设置为“ondemand”，则仅当手动调用组件的validate（）方法或包装器QForm提交自身时才会触发",
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "ondemand"
                    ],
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "一旦字段获得焦点，文本标签将“浮动”在输入字段上方",
                    "examples": [
                        "Username"
                    ],
                    "category": "content"
                },
                "stack-label": {
                    "type": "Boolean",
                    "desc": "无论字段内容如何（如果有），标签都将始终显示在字段上方",
                    "category": "content"
                },
                "hint": {
                    "type": "String",
                    "desc": "放置在包装表单组件下方的帮助程序（提示）文本",
                    "examples": [
                        "Fill in between 3 and 12 characters"
                    ],
                    "category": "content"
                },
                "hide-hint": {
                    "type": "Boolean",
                    "desc": "当字段没有焦点时隐藏辅助对象（提示）文本",
                    "category": "content"
                },
                "prefix": {
                    "type": "String",
                    "desc": "前缀",
                    "examples": [
                        "$"
                    ],
                    "category": "content"
                },
                "suffix": {
                    "type": "String",
                    "desc": "后缀",
                    "examples": [
                        "@gmail.com"
                    ],
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中标签的颜色名称；覆盖“color”道具；与“color”道具的不同之处在于，即使字段未聚焦，标签也将始终具有此颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "通过显示微调器向用户发出进程正在进行的信号；Spinner可以通过使用“加载”插槽进行自定义。",
                    "category": "behavior|content"
                },
                "clearable": {
                    "type": "Boolean",
                    "desc": "当设置了一个值（未定义或为空）时，附加可清除的图标；单击时，模型变为空",
                    "category": "behavior|content"
                },
                "clear-icon": {
                    "type": "String",
                    "desc": "与“可清除”道具一起使用时用于清除按钮的自定义图标",
                    "examples": [
                        "close"
                    ],
                    "category": "content"
                },
                "filled": {
                    "type": "Boolean",
                    "desc": "对字段使用“填充”设计",
                    "category": "style"
                },
                "outlined": {
                    "type": "Boolean",
                    "desc": "现场采用“轮廓”设计",
                    "category": "style"
                },
                "borderless": {
                    "type": "Boolean",
                    "desc": "对字段使用“无边框”设计",
                    "category": "style"
                },
                "standout": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "现场采用“突出”设计；指定聚焦时要应用的类（覆盖默认类）",
                    "examples": [
                        "standout",
                        "standout=\"bg-primary text-white\""
                    ],
                    "category": "style"
                },
                "label-slot": {
                    "type": "Boolean",
                    "desc": "启用标签槽；如果未设置“label”道具，则需要将其设置为强制使用“label“插槽",
                    "category": "content"
                },
                "bottom-slots": {
                    "type": "Boolean",
                    "desc": "启用底部插槽（“error”、“hint”、“counter”）",
                    "category": "content"
                },
                "hide-bottom-space": {
                    "type": "Boolean",
                    "desc": "当提示/错误/计数器不使用时，不要再为它们保留空间；因此，它也会禁用这些对象的动画；它还允许提示/错误区域根据其内容进行垂直拉伸",
                    "category": "style"
                },
                "counter": {
                    "type": "Boolean",
                    "desc": "在右下角显示自动计数器",
                    "category": "content"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形；覆盖“圆角”道具",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "item-aligned": {
                    "type": "Boolean",
                    "desc": "将内部内容对齐方式与QItem的对齐方式相匹配",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "autofocus": {
                    "type": "Boolean",
                    "desc": "初始组件渲染上的焦点场",
                    "category": "behavior"
                },
                "for": {
                    "type": "String",
                    "desc": "用于指定控件的“id”以及包装控件的标签的“for”属性；如果未指定“name”道具，则也会将其用于此属性",
                    "examples": [
                        "myFieldsId"
                    ],
                    "category": "behavior"
                },
                "multiple": {
                    "type": "Boolean",
                    "desc": "允许多选；模型必须是数组",
                    "category": "model|selection"
                },
                "display-value": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "如果未使用“selected”插槽/作用域插槽，并且未使用“use chips”道具，则覆盖默认选择字符串",
                    "examples": [
                        "Options: x, y, z"
                    ],
                    "category": "selection"
                },
                "display-value-html": {
                    "type": "Boolean",
                    "desc": "将所选选项强制呈现为HTML；这可能会导致XSS攻击，因此请确保对内容进行消毒；使用“选定”或“选定项目”插槽时不适用！",
                    "category": "selection"
                },
                "options": {
                    "type": "Array",
                    "desc": "用户可以从中选择的可用选项。为了获得最佳性能，请冻结选项列表。",
                    "default": "[]",
                    "examples": [
                        ":options=\"[ 'BMW', 'Samsung Phone' ]\"",
                        ":options=\"[ { label: 'BMW', value: 'car' }, { label: 'Samsung Phone', value: 'phone' } ]\""
                    ],
                    "category": "options",
                    "required": false
                },
                "option-value": {
                    "type": [
                        "Function",
                        "String"
                    ],
                    "desc": "持有“值”的选项的属性；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "default": "value",
                    "params": {
                        "option": {
                            "type": [
                                "String",
                                "Object"
                            ],
                            "desc": "The current option being processed",
                            "examples": [
                                "'BMW'",
                                "'Samsung Phone'",
                                "{ label: 'BMW', value: 'car', cannotSelect: true }"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Any",
                        "desc": "Value of the current option",
                        "examples": [
                            "'car'",
                            "34"
                        ]
                    },
                    "examples": [
                        "option-value=\"modelNumber\"",
                        ":option-value=\"(item) => item === null ? null : item.modelNumber\""
                    ],
                    "category": "options",
                    "required": false
                },
                "option-label": {
                    "type": [
                        "Function",
                        "String"
                    ],
                    "desc": "持有“标签”的选项的属性；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "default": "label",
                    "params": {
                        "option": {
                            "type": [
                                "String",
                                "Object"
                            ],
                            "desc": "The current option being processed",
                            "examples": [
                                "'BMW'",
                                "'Samsung Phone'",
                                "{ label: 'BMW', value: 'car', cannotSelect: true }"
                            ]
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "Label of the current option",
                        "examples": [
                            "'BMW'",
                            "'Samsung Phone'"
                        ]
                    },
                    "examples": [
                        "option-label=\"itemName\"",
                        ":option-label=\"(item) => item === null ? 'Null value' : item.itemName\""
                    ],
                    "category": "options",
                    "required": false
                },
                "option-disable": {
                    "type": [
                        "Function",
                        "String"
                    ],
                    "desc": "告诉已禁用的选项的属性；属性的值必须是布尔值；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "default": "disable",
                    "params": {
                        "option": {
                            "type": [
                                "String",
                                "Object"
                            ],
                            "desc": "The current option being processed",
                            "examples": [
                                "'BMW'",
                                "'Samsung Phone'",
                                "{ label: 'BMW', value: 'car', cannotSelect: true }"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, the current option will be disabled"
                    },
                    "examples": [
                        "option-disable=\"cannotSelect\"",
                        ":option-disable=\"(item) => item === null ? true : item.cannotSelect\""
                    ],
                    "category": "options",
                    "required": false
                },
                "hide-selected": {
                    "type": "Boolean",
                    "desc": "隐藏所选内容；使用基础输入标签来固定所选选项的标签（而不是显示在输入的右侧）；仅适用于非“多个”选择",
                    "category": "selection"
                },
                "hide-dropdown-icon": {
                    "type": "Boolean",
                    "desc": "隐藏下拉图标",
                    "category": "content|behavior"
                },
                "dropdown-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "max-values": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "允许用户进行最大数量的选择",
                    "category": "selection"
                },
                "options-dense": {
                    "type": "Boolean",
                    "desc": "选项列表的密集模式；占用较少空间",
                    "category": "options"
                },
                "options-dark": {
                    "type": "Boolean",
                    "desc": "选项菜单将使用深色",
                    "category": "options"
                },
                "options-selected-class": {
                    "type": "String",
                    "desc": "活动/选定选项的CSS类名；将其设置为空字符串以停止应用默认值（即text-*，其中*是“color”道具值）",
                    "examples": [
                        "text-orange"
                    ],
                    "category": "options"
                },
                "options-html": {
                    "type": "Boolean",
                    "desc": "强制将选项渲染为HTML；这可能会导致XSS攻击，因此请确保对内容进行消毒；使用“选项”插槽时不适用！",
                    "category": "options"
                },
                "options-cover": {
                    "type": "Boolean",
                    "desc": "扩展菜单将覆盖组件（由于明显的原因，无法与“使用输入”道具一起使用）",
                    "category": "options"
                },
                "menu-shrink": {
                    "type": "Boolean",
                    "desc": "允许选项列表比字段窄（仅在菜单模式下）",
                    "category": "options"
                },
                "menu-anchor": {
                    "type": "String",
                    "desc": "两个值设置选项列表相对于字段的起始位置或锚点（仅在菜单模式下）",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "menu-self": {
                    "type": "String",
                    "desc": "两个值设置选项列表相对于其目标的自身位置（仅在菜单模式下）",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "menu-offset": {
                    "type": "Array",
                    "desc": "两个数字的数组，以像素为单位水平和垂直偏移选项列表（仅在菜单模式下）",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "position"
                },
                "popup-content-class": {
                    "type": "String",
                    "desc": "要归因于弹出内容的类定义",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                },
                "popup-content-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于弹出内容的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":popup-content-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "use-input": {
                    "type": "Boolean",
                    "desc": "使用用户可以键入的输入标记",
                    "category": "content"
                },
                "use-chips": {
                    "type": "Boolean",
                    "desc": "使用QChip显示当前选择的内容",
                    "category": "selection"
                },
                "fill-input": {
                    "type": "Boolean",
                    "desc": "用当前值填充输入；与“隐藏所选内容”一起使用很有用；不适用于“多重”选择",
                    "category": "behavior"
                },
                "new-value-mode": {
                    "type": "String",
                    "desc": "允许创建新值并定义添加新值时的行为：“添加”表示添加值（即使可能重复），“添加唯一”仅添加唯一值，“切换”添加或删除值（基于值是否存在）；当使用此道具时，侦听@new value变为可选（仅用于覆盖“new value mode”定义的行为）",
                    "values": [
                        "add",
                        "add-unique",
                        "toggle"
                    ],
                    "category": "behavior"
                },
                "map-options": {
                    "type": "Boolean",
                    "desc": "尝试从“options”数组映射模型的标签；有一个小的性能惩罚；如果您使用的是发射值，则可能需要使用映射选项在选择字段中显示标签文本，而不是值；请参阅上面的“影响模型”部分",
                    "category": "options"
                },
                "emit-value": {
                    "type": "Boolean",
                    "desc": "使用所选选项的值而不是整个选项更新模型",
                    "category": "model"
                },
                "input-debounce": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "以毫秒为单位取消对输入模型更新的影响",
                    "default": 500,
                    "category": "content",
                    "required": false
                },
                "input-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于基础输入标记的类定义",
                    "examples": [
                        "my-special-class",
                        ":input-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "input-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于基础输入标记的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":input-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "autocomplete": {
                    "type": "String",
                    "desc": "字段的自动完成属性",
                    "examples": [
                        "autocomplete=\"country\""
                    ],
                    "category": "behavior"
                },
                "transition-show": {
                    "type": "String",
                    "desc": "显示菜单/对话框时的转换；Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "behavior",
                    "default": "fade",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "隐藏菜单/对话框时的转换；Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "behavior",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "隐藏菜单/对话框时的转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "behavior",
                    "required": false
                },
                "behavior": {
                    "type": "String",
                    "desc": "覆盖桌面上显示为菜单和手机上显示为对话框的默认动态模式",
                    "values": [
                        "default",
                        "menu",
                        "dialog"
                    ],
                    "default": "default",
                    "category": "behavior",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "字段主要内容"
                },
                "prepend": {
                    "desc": "预备内场；建议：QIcon、QBtn"
                },
                "append": {
                    "desc": "附加到内部字段；建议：QIcon、QBtn"
                },
                "before": {
                    "desc": "准备外部字段；建议：QIcon、QBtn"
                },
                "after": {
                    "desc": "附加外部字段；建议：QIcon、QBtn"
                },
                "label": {
                    "desc": "标签插槽；仅当设置了“label slot”道具或设置了“label”道具时使用；使用时，“label”道具中的文本将被忽略"
                },
                "error": {
                    "desc": "错误插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "hint": {
                    "desc": "提示文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "counter": {
                    "desc": "计数器文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "loading": {
                    "desc": "组件处于加载模式时覆盖默认微调器；建议：纺纱机"
                },
                "selected": {
                    "desc": "覆盖默认选择槽；建议：QChip"
                },
                "before-options": {
                    "desc": "应在选项列表之前呈现的元素的模板槽"
                },
                "after-options": {
                    "desc": "应在选项列表之后呈现的元素的模板槽"
                },
                "no-option": {
                    "desc": "过滤选项后的菜单应该显示什么，而没有留下任何显示选项；建议：＜div＞",
                    "scope": {
                        "inputValue": {
                            "type": "String",
                            "desc": "Input textfield value, if any (not QSelect model)",
                            "examples": [
                                "typed something"
                            ]
                        }
                    }
                },
                "selected-item": {
                    "desc": "覆盖默认选择槽；建议：QChip",
                    "scope": {
                        "index": {
                            "type": "Number",
                            "desc": "Selection index"
                        },
                        "opt": {
                            "type": "Any",
                            "desc": "Selected option -- its value is taken from model"
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "Always true -- passed down as prop to QItem (when using QItem)"
                        },
                        "removeAtIndex": {
                            "type": "Function",
                            "desc": "Remove selected option located at specific index",
                            "params": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Index at which to remove selection"
                                }
                            },
                            "returns": null
                        },
                        "toggleOption": {
                            "type": "Function",
                            "desc": "Add/remove option from model",
                            "params": {
                                "opt": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Option to add to model"
                                }
                            },
                            "returns": null
                        },
                        "tabindex": {
                            "type": "Number",
                            "desc": "Tabindex HTML attribute value associated with respective option",
                            "values": [
                                0,
                                -1
                            ]
                        }
                    }
                },
                "option": {
                    "desc": "自定义选项的渲染方式；建议：QItem",
                    "scope": {
                        "index": {
                            "type": "Number",
                            "desc": "Option index"
                        },
                        "opt": {
                            "type": "Any",
                            "desc": "Option -- its value is taken from 'options' prop"
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "Is option selected?"
                        },
                        "focused": {
                            "type": "Boolean",
                            "desc": "Is option focused?"
                        },
                        "toggleOption": {
                            "type": "Function",
                            "desc": "Add/remove option from model",
                            "params": {
                                "opt": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Option to add to model"
                                }
                            },
                            "returns": null
                        },
                        "setOptionIndex": {
                            "type": "Function",
                            "desc": "Sets option from menu as 'focused'",
                            "params": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Index of option from menu"
                                }
                            },
                            "returns": null
                        },
                        "itemProps": {
                            "type": "Object",
                            "desc": "Computed properties passed down to QItem"
                        }
                    }
                }
            },
            "events": {
                "virtual-scroll": {
                    "desc": "发生虚拟滚动时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Object of properties on the new scroll position",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Index of the list item that was scrolled into view (0 based)"
                                },
                                "from": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the first list item that is rendered (0 based)"
                                },
                                "to": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the last list item that is rendered (0 based)"
                                },
                                "direction": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Direction of change",
                                    "values": [
                                        "increase",
                                        "decrease"
                                    ]
                                },
                                "ref": {
                                    "type": "Component",
                                    "required": true,
                                    "desc": "Vue reference to the QSelect",
                                    "tsType": "QSelect"
                                }
                            }
                        }
                    }
                },
                "clear": {
                    "desc": "使用“clearable”属性时，单击clear图标时会发出此事件",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "The previous value before clearing it"
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "input-value": {
                    "desc": "当文本输入中的值更改时发出",
                    "params": {
                        "value": {
                            "type": "String",
                            "desc": "New text value"
                        }
                    }
                },
                "remove": {
                    "desc": "从选择中删除选项时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Removal details",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Model index at which removal took place"
                                },
                                "value": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "The actual value that was removed"
                                }
                            }
                        }
                    }
                },
                "add": {
                    "desc": "将选项添加到选择中时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Addition details",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Model index at which addition took place"
                                },
                                "value": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "The actual value that was added"
                                }
                            }
                        }
                    }
                },
                "new-value": {
                    "desc": "能够创造新的价值观；在创建新值时发出；您可以用它重写“新值模式”属性",
                    "params": {
                        "inputValue": {
                            "type": "String",
                            "desc": "What the user typed",
                            "examples": [
                                "phone"
                            ]
                        },
                        "doneFn": {
                            "type": "Function",
                            "desc": "Adds (optional) value to the model; Do not forget to call it after you validate the newly created value; Call it with no parameters if nothing should be added",
                            "params": {
                                "item": {
                                    "type": "Any",
                                    "required": false,
                                    "desc": "Item to add"
                                },
                                "mode": {
                                    "type": "String",
                                    "required": false,
                                    "desc": "Override 'new-value-mode' (prop) behavior should you wish to",
                                    "values": [
                                        "add",
                                        "add-unique",
                                        "toggle"
                                    ],
                                    "default": "add"
                                }
                            },
                            "returns": null
                        }
                    }
                },
                "filter": {
                    "desc": "当用户想要筛选值时发出",
                    "params": {
                        "inputValue": {
                            "type": "String",
                            "desc": "What the user typed",
                            "examples": [
                                "phone"
                            ]
                        },
                        "doneFn": {
                            "type": "Function",
                            "desc": "Supply a function which makes the necessary updates",
                            "params": {
                                "callbackFn": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "Callback to call to make the actual updates",
                                    "params": null,
                                    "returns": null
                                },
                                "afterFn": {
                                    "type": "Function",
                                    "required": false,
                                    "desc": "Callback to call at the end after the update has been fully processed by QSelect",
                                    "params": {
                                        "ref": {
                                            "type": "Component",
                                            "tsType": "QSelect",
                                            "required": true,
                                            "desc": "Vue reference to the QSelect which triggered the filtering"
                                        }
                                    },
                                    "returns": null
                                }
                            },
                            "returns": null
                        },
                        "abortFn": {
                            "type": "Function",
                            "desc": "Call this function if something went wrong",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "filter-abort": {
                    "desc": "在中止筛选时发出；可能需要一个新的？"
                },
                "popup-show": {
                    "desc": "当显示选择选项菜单或对话框时发出。",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "popup-hide": {
                    "desc": "当选择选项菜单或对话框隐藏时发出。",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                }
            },
            "methods": {
                "scrollTo": {
                    "desc": "将虚拟滚动列表滚动到具有指定索引的项目（基于0）",
                    "params": {
                        "index": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "The index of the list item (0 based)",
                            "required": true
                        },
                        "edge": {
                            "type": "String",
                            "desc": "The edge to align to if the item is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns",
                            "values": [
                                "start",
                                "center",
                                "end",
                                "start-force",
                                "center-force",
                                "end-force"
                            ]
                        }
                    }
                },
                "reset": {
                    "desc": "重置虚拟滚动计算；需要自定义边缘案例"
                },
                "refresh": {
                    "desc": "刷新虚拟滚动列表；附加项目后使用",
                    "params": {
                        "index": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "The index of the list item to scroll to after refresh (0 based); If it's not specified the scroll position is not changed; Use a negative value to keep scroll position"
                        }
                    }
                },
                "resetValidation": {
                    "desc": "重置验证状态"
                },
                "validate": {
                    "desc": "触发验证",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Optional value to validate against"
                        }
                    },
                    "returns": {
                        "type": [
                            "Boolean",
                            "Promise<boolean>"
                        ],
                        "desc": "True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)",
                        "examples": [
                            "true",
                            "validate().then(outcome => { ... })"
                        ]
                    }
                },
                "focus": {
                    "desc": "焦点组件"
                },
                "blur": {
                    "desc": "模糊组件（失去焦点）"
                },
                "showPopup": {
                    "desc": "聚焦并打开弹出窗口"
                },
                "hidePopup": {
                    "desc": "隐藏弹出窗口"
                },
                "removeAtIndex": {
                    "desc": "删除位于特定索引的所选选项",
                    "params": {
                        "index": {
                            "type": "Number",
                            "required": true,
                            "desc": "Index at which to remove selection"
                        }
                    }
                },
                "add": {
                    "desc": "将选项添加到模型",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option to add to model"
                        },
                        "unique": {
                            "type": "Boolean",
                            "desc": "Option must be unique"
                        }
                    }
                },
                "toggleOption": {
                    "desc": "从模型中添加/删除选项",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option to add to model"
                        },
                        "keepOpen": {
                            "type": "Boolean",
                            "desc": "Don't close the menu and do not clear the filter"
                        }
                    }
                },
                "getOptionIndex": {
                    "desc": "从菜单中获取当前关注的选项索引；如果没有选择，则为-1",
                    "returns": {
                        "type": "Number",
                        "desc": "Index of option from menu; It's -1 if no option is focused"
                    },
                    "addedIn": "v2.5.4"
                },
                "setOptionIndex": {
                    "desc": "将菜单中的选项设置为“聚焦”-1无焦点",
                    "params": {
                        "index": {
                            "type": "Number",
                            "required": true,
                            "desc": "Index of option from menu; -1 to focus none"
                        }
                    }
                },
                "moveOptionSelection": {
                    "desc": "按索引偏移量移动菜单中的选定选项",
                    "params": {
                        "offset": {
                            "type": "Number",
                            "desc": "Number of options to move up or down",
                            "default": 1,
                            "required": false
                        },
                        "skipInputValue": {
                            "type": "Boolean",
                            "desc": "Don't set input-value on navigation"
                        }
                    }
                },
                "filter": {
                    "desc": "过滤器选项",
                    "params": {
                        "value": {
                            "type": "String",
                            "required": true,
                            "desc": "String to filter with",
                            "examples": [
                                "car"
                            ]
                        }
                    }
                },
                "updateMenuPosition": {
                    "desc": "重新计算菜单位置"
                },
                "updateInputValue": {
                    "desc": "如果指定了“use input”，则会更新它所包含的值",
                    "params": {
                        "value": {
                            "type": "String",
                            "required": true,
                            "desc": "String to set the input value to",
                            "examples": [
                                "hotel"
                            ]
                        },
                        "noFilter": {
                            "type": "Boolean",
                            "desc": "Set to true if you don't want the filter (if any) to be also triggered"
                        }
                    }
                },
                "isOptionSelected": {
                    "desc": "告诉是否选择了某个选项",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option entry"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Option is selected or not"
                    }
                },
                "getEmittingOptionValue": {
                    "desc": "获取QSelect在选择所述选项时将发出的模型值；如果设置了“发射值”，也会考虑",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option entry"
                        }
                    },
                    "returns": {
                        "type": "Any",
                        "desc": "Emitting model value of said option"
                    }
                },
                "getOptionValue": {
                    "desc": "获取一个选项的模型值；考虑“option-value”（如果使用），但不像getEmittingOptionValue（）那样查找“emit-value”",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option entry"
                        }
                    },
                    "returns": {
                        "type": "Any",
                        "desc": "Model value of said option"
                    }
                },
                "getOptionLabel": {
                    "desc": "获取选项的标签；考虑“选项标签”道具（如果使用）",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option entry"
                        }
                    },
                    "returns": {
                        "type": "Any",
                        "desc": "Label of said option"
                    }
                },
                "isOptionDisabled": {
                    "desc": "告诉某个选项是否被禁用；考虑“选项禁用”道具（如果使用）",
                    "params": {
                        "opt": {
                            "type": "Any",
                            "required": true,
                            "desc": "Option entry"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Option is disabled or not"
                    }
                }
            },
            "computedProps": {
                "hasError": {
                    "type": "Boolean",
                    "desc": "组件是否处于错误状态"
                }
            }
        }
    },
    {
        "name": "q-file",
        "desc": "文件选择器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/file"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理表单时很有用；如果未指定，则采用值“for”prop（如果存在）",
                    "examples": [
                        "car_id",
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "multiple": {
                    "type": "Boolean",
                    "desc": "允许多个文件上载",
                    "category": "behavior"
                },
                "accept": {
                    "type": "String",
                    "desc": "以逗号分隔的唯一文件类型说明符列表。映射到本机输入类型=文件元素的“accept”属性",
                    "examples": [
                        ".jpg, .pdf, image/*",
                        "image/jpeg, .pdf"
                    ],
                    "category": "behavior"
                },
                "capture": {
                    "type": "String",
                    "desc": "（可选）指定应捕获新文件，以及应使用哪个设备捕获由“accept”道具定义的类型的新媒体。映射到本机输入类型=文件元素的“capture”属性",
                    "values": [
                        "user",
                        "environment"
                    ],
                    "category": "behavior"
                },
                "max-file-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "单个文件的最大大小（字节）",
                    "examples": [
                        1024,
                        1048576
                    ],
                    "category": "behavior"
                },
                "max-total-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "所有文件的最大大小（以字节为单位）",
                    "category": "behavior"
                },
                "max-files": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "要包含的最大文件数",
                    "category": "behavior"
                },
                "filter": {
                    "type": "Function",
                    "desc": "为添加的文件自定义过滤器；只有通过此筛选器的文件才会添加到队列中并上载；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "files": {
                            "type": [
                                "FileList",
                                "Array"
                            ],
                            "desc": "Candidate files to be added to queue"
                        }
                    },
                    "returns": {
                        "type": "Array",
                        "desc": "Filtered files to be added to queue"
                    },
                    "examples": [
                        ":filter=\"files => files.filter(file => file.size === 1024)\""
                    ],
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "部件的型号；如果使用“multiple”道具，则必须是FileList或Array；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "File",
                        "FileList",
                        "Array",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"myModel\""
                    ]
                },
                "error": {
                    "type": "Boolean",
                    "desc": "字段是否存在验证错误？",
                    "category": "behavior"
                },
                "error-message": {
                    "type": "String",
                    "desc": "验证错误消息（仅当“error”设置为“true”时才会显示）",
                    "examples": [
                        "Username must have at least 5 characters"
                    ],
                    "category": "content"
                },
                "no-error-icon": {
                    "type": "Boolean",
                    "desc": "出现错误时隐藏错误图标",
                    "category": "content"
                },
                "rules": {
                    "type": "Array",
                    "tsType": "ValidationRule",
                    "desc": "函数/字符串数组；如果是String，则它必须是嵌入的验证规则之一的名称",
                    "examples": [
                        ":rules=\"[ val => val.length <= 3 || 'Please use maximum 3 characters' ]\"",
                        ":rules=\"[ 'fulltime' ]\"",
                        ":rules=\"[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]\""
                    ],
                    "category": "behavior"
                },
                "reactive-rules": {
                    "type": "Boolean",
                    "desc": "默认情况下，规则的更改在模型更改之前不会触发新的验证；如果设置为true，则规则的更改将触发验证；性能会受到影响，所以只有在真正需要时才使用",
                    "category": "behavior"
                },
                "lazy-rules": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为布尔值true，则只有在字段第一次失去焦点后，它才会根据“规则”检查验证状态；如果设置为“ondemand”，则仅当手动调用组件的validate（）方法或包装器QForm提交自身时才会触发",
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "ondemand"
                    ],
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "一旦字段获得焦点，文本标签将“浮动”在输入字段上方",
                    "examples": [
                        "Username"
                    ],
                    "category": "content"
                },
                "stack-label": {
                    "type": "Boolean",
                    "desc": "无论字段内容如何（如果有），标签都将始终显示在字段上方",
                    "category": "content"
                },
                "hint": {
                    "type": "String",
                    "desc": "放置在包装表单组件下方的帮助程序（提示）文本",
                    "examples": [
                        "Fill in between 3 and 12 characters"
                    ],
                    "category": "content"
                },
                "hide-hint": {
                    "type": "Boolean",
                    "desc": "当字段没有焦点时隐藏辅助对象（提示）文本",
                    "category": "content"
                },
                "prefix": {
                    "type": "String",
                    "desc": "前缀",
                    "examples": [
                        "$"
                    ],
                    "category": "content"
                },
                "suffix": {
                    "type": "String",
                    "desc": "后缀",
                    "examples": [
                        "@gmail.com"
                    ],
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中标签的颜色名称；覆盖“color”道具；与“color”道具的不同之处在于，即使字段未聚焦，标签也将始终具有此颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "通过显示微调器向用户发出进程正在进行的信号；Spinner可以通过使用“加载”插槽进行自定义。",
                    "category": "behavior|content"
                },
                "clearable": {
                    "type": "Boolean",
                    "desc": "当设置了一个值（未定义或为空）时，附加可清除的图标；单击时，模型变为空",
                    "category": "behavior|content"
                },
                "clear-icon": {
                    "type": "String",
                    "desc": "与“可清除”道具一起使用时用于清除按钮的自定义图标",
                    "examples": [
                        "close"
                    ],
                    "category": "content"
                },
                "filled": {
                    "type": "Boolean",
                    "desc": "对字段使用“填充”设计",
                    "category": "style"
                },
                "outlined": {
                    "type": "Boolean",
                    "desc": "现场采用“轮廓”设计",
                    "category": "style"
                },
                "borderless": {
                    "type": "Boolean",
                    "desc": "对字段使用“无边框”设计",
                    "category": "style"
                },
                "standout": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "现场采用“突出”设计；指定聚焦时要应用的类（覆盖默认类）",
                    "examples": [
                        "standout",
                        "standout=\"bg-primary text-white\""
                    ],
                    "category": "style"
                },
                "label-slot": {
                    "type": "Boolean",
                    "desc": "启用标签槽；如果未设置“label”道具，则需要将其设置为强制使用“label“插槽",
                    "category": "content"
                },
                "bottom-slots": {
                    "type": "Boolean",
                    "desc": "启用底部插槽（“error”、“hint”、“counter”）",
                    "category": "content"
                },
                "hide-bottom-space": {
                    "type": "Boolean",
                    "desc": "当提示/错误/计数器不使用时，不要再为它们保留空间；因此，它也会禁用这些对象的动画；它还允许提示/错误区域根据其内容进行垂直拉伸",
                    "category": "style"
                },
                "counter": {
                    "type": "Boolean",
                    "desc": "在右下角显示自动计数器",
                    "category": "content"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形；覆盖“圆角”道具",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "item-aligned": {
                    "type": "Boolean",
                    "desc": "将内部内容对齐方式与QItem的对齐方式相匹配",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "autofocus": {
                    "type": "Boolean",
                    "desc": "初始组件渲染上的焦点场",
                    "category": "behavior"
                },
                "for": {
                    "type": "String",
                    "desc": "用于指定控件的“id”以及包装控件的标签的“for”属性；如果未指定“name”道具，则也会将其用于此属性",
                    "examples": [
                        "myFieldsId"
                    ],
                    "category": "behavior"
                },
                "append": {
                    "type": "Boolean",
                    "desc": "将文件附加到当前模型，而不是替换它们；仅在使用“多重”模式时有效",
                    "category": "behavior"
                },
                "display-value": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "如果未使用“file”或“selected”作用域插槽，并且未使用“use chips”道具，则覆盖默认选择字符串",
                    "examples": [
                        "Options: x, y, z"
                    ],
                    "category": "selection"
                },
                "use-chips": {
                    "type": "Boolean",
                    "desc": "使用QChip显示拾取的文件",
                    "category": "selection"
                },
                "counter-label": {
                    "type": "Function",
                    "desc": "计数器标签；“计数器”道具是启用此道具所必需的",
                    "params": {
                        "props": {
                            "type": "Object",
                            "desc": "Object containing counter label information",
                            "definition": {
                                "totalSize": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "The total size of files in human readable format",
                                    "examples": [
                                        "1.42MB"
                                    ]
                                },
                                "filesNumber": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Number of picked files"
                                },
                                "maxFiles": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "required": true,
                                    "desc": "Maximum number of files (same as 'max-files' prop, if specified); When 'max-files' is not specified, this has 'void 0' as value"
                                }
                            }
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "String to display for the counter label"
                    },
                    "examples": [
                        ":counter-label=\"counterLabelFn\""
                    ],
                    "category": "behavior"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "input-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于基础选择容器的类定义",
                    "examples": [
                        "my-special-class",
                        ":input-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "input-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于基础选择容器的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":input-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "字段主要内容"
                },
                "prepend": {
                    "desc": "预备内场；建议：QIcon、QBtn"
                },
                "append": {
                    "desc": "附加到内部字段；建议：QIcon、QBtn"
                },
                "before": {
                    "desc": "准备外部字段；建议：QIcon、QBtn"
                },
                "after": {
                    "desc": "附加外部字段；建议：QIcon、QBtn"
                },
                "label": {
                    "desc": "标签插槽；仅当设置了“label slot”道具或设置了“label”道具时使用；使用时，“label”道具中的文本将被忽略"
                },
                "error": {
                    "desc": "错误插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "hint": {
                    "desc": "提示文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "counter": {
                    "desc": "计数器文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "loading": {
                    "desc": "组件处于加载模式时覆盖默认微调器；与“加载”道具一起使用"
                },
                "file": {
                    "desc": "覆盖默认节点以从用户拾取的列表中渲染文件",
                    "scope": {
                        "index": {
                            "type": "Number",
                            "desc": "Selection index"
                        },
                        "file": {
                            "type": "File",
                            "desc": "File object"
                        },
                        "ref": {
                            "type": "Component",
                            "tsType": "QFile",
                            "desc": "Reference to the QFile component"
                        }
                    }
                },
                "selected": {
                    "desc": "覆盖默认选择槽；建议：QChip",
                    "scope": {
                        "files": {
                            "type": [
                                "FileList",
                                "Array"
                            ],
                            "desc": "Array of File objects"
                        },
                        "ref": {
                            "type": "Component",
                            "tsType": "QFile",
                            "desc": "Reference to the QFile component"
                        }
                    }
                }
            },
            "events": {
                "rejected": {
                    "desc": "在拾取文件后发出，有些文件未通过验证道具（accept、最大文件大小、最大总大小、筛选器等）",
                    "params": {
                        "rejectedEntries": {
                            "type": "Array",
                            "tsType": "QRejectedEntry",
                            "desc": "Array of { failedPropValidation: string, file: File } Objects for files that do not pass the validation"
                        }
                    }
                },
                "clear": {
                    "desc": "使用“clearable”属性时，单击clear图标时会发出此事件",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "The previous value before clearing it"
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "pickFiles": {
                    "desc": "触发文件拾取；由于浏览器的安全策略，必须作为用户交互的直接结果（例如在点击处理程序中）调用",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "addFiles": {
                    "desc": "以编程方式添加文件",
                    "params": {
                        "files": {
                            "type": [
                                "FileList",
                                "Array"
                            ],
                            "desc": "Array of files (instances of File)",
                            "required": true
                        }
                    }
                },
                "resetValidation": {
                    "desc": "重置验证状态"
                },
                "validate": {
                    "desc": "触发验证",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Optional value to validate against"
                        }
                    },
                    "returns": {
                        "type": [
                            "Boolean",
                            "Promise<boolean>"
                        ],
                        "desc": "True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)",
                        "examples": [
                            "true",
                            "validate().then(outcome => { ... })"
                        ]
                    }
                },
                "focus": {
                    "desc": "焦点组件"
                },
                "blur": {
                    "desc": "模糊组件（失去焦点）"
                },
                "removeAtIndex": {
                    "desc": "删除位于模型中特定索引处的文件",
                    "params": {
                        "index": {
                            "type": "Number",
                            "desc": "Index at which to remove selection",
                            "required": true
                        }
                    }
                },
                "removeFile": {
                    "desc": "从模型中删除指定的文件",
                    "params": {
                        "file": {
                            "type": "File",
                            "desc": "File to remove (instance of File)",
                            "required": true
                        }
                    }
                },
                "getNativeElement": {
                    "desc": "不赞成；直接访问“nativeEl”；获取本机输入DOM元素",
                    "returns": {
                        "type": "Element",
                        "desc": "The underlying native input DOM Element"
                    }
                }
            },
            "computedProps": {
                "hasError": {
                    "type": "Boolean",
                    "desc": "组件是否处于错误状态"
                },
                "nativeEl": {
                    "type": "Element",
                    "desc": "本机输入DOM元素",
                    "addedIn": "v2.10.1"
                }
            }
        }
    },
    {
        "name": "q-form",
        "desc": "表单",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/form"
            },
            "props": {
                "autofocus": {
                    "type": "Boolean",
                    "desc": "将第一个可聚焦元素聚焦在初始组件渲染上",
                    "category": "behavior"
                },
                "no-error-focus": {
                    "type": "Boolean",
                    "desc": "提交表单时，不要试图将注意力集中在第一个出现验证错误的组件上",
                    "category": "behavior"
                },
                "no-reset-focus": {
                    "type": "Boolean",
                    "desc": "重置表单时不要试图将注意力集中在第一个组件上",
                    "category": "behavior"
                },
                "greedy": {
                    "type": "Boolean",
                    "desc": "验证表单中的所有字段（默认情况下，在通过同步验证找到第一个无效字段后停止）",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "submit": {
                    "desc": "当连接到提交按钮时所有验证都已通过时发出",
                    "params": {
                        "evt": {
                            "type": [
                                "Event",
                                "SubmitEvent"
                            ],
                            "desc": "Form submission event object"
                        }
                    }
                },
                "reset": {
                    "desc": "当连接到重置按钮时，所有验证都已重置时发出；建议手动重置此处理程序中的包装组件模型"
                },
                "validation-success": {
                    "desc": "在触发验证且所有内部Quasar组件模型有效后发出"
                },
                "validation-error": {
                    "desc": "在触发验证且至少有一个内部Quasar组件模型无效后发出",
                    "params": {
                        "ref": {
                            "type": "Component",
                            "desc": "Vue reference to the first component that triggered the validation error"
                        }
                    }
                }
            },
            "methods": {
                "focus": {
                    "desc": "关注表单中的第一个可聚焦元素/组件"
                },
                "validate": {
                    "desc": "触发对所有适用的内部Quasar组件的验证",
                    "params": {
                        "shouldFocus": {
                            "type": "Boolean",
                            "desc": "Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified"
                        }
                    },
                    "returns": {
                        "type": "Promise<boolean>",
                        "desc": "Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)",
                        "examples": [
                            "validate().then(outcome => { ... })"
                        ]
                    }
                },
                "resetValidation": {
                    "desc": "重置所有适用的内部Quasar组件的验证"
                },
                "submit": {
                    "desc": "手动触发表单验证并提交",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "reset": {
                    "desc": "手动触发表单重置",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "getValidationComponents": {
                    "desc": "获取支持验证的子级vue组件数组",
                    "returns": {
                        "type": "Array",
                        "desc": "Vue components that support Quasar validation API"
                    }
                }
            }
        }
    },
    {
        "name": "q-field",
        "desc": "字段",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/field"
            },
            "props": {
                "model-value": {
                    "type": "Any",
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "category": "model"
                },
                "error": {
                    "type": "Boolean",
                    "desc": "字段是否存在验证错误？",
                    "category": "behavior"
                },
                "error-message": {
                    "type": "String",
                    "desc": "验证错误消息（仅当“error”设置为“true”时才会显示）",
                    "examples": [
                        "Username must have at least 5 characters"
                    ],
                    "category": "content"
                },
                "no-error-icon": {
                    "type": "Boolean",
                    "desc": "出现错误时隐藏错误图标",
                    "category": "content"
                },
                "rules": {
                    "type": "Array",
                    "tsType": "ValidationRule",
                    "desc": "函数/字符串数组；如果是String，则它必须是嵌入的验证规则之一的名称",
                    "examples": [
                        ":rules=\"[ val => val.length <= 3 || 'Please use maximum 3 characters' ]\"",
                        ":rules=\"[ 'fulltime' ]\"",
                        ":rules=\"[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]\""
                    ],
                    "category": "behavior"
                },
                "reactive-rules": {
                    "type": "Boolean",
                    "desc": "默认情况下，规则的更改在模型更改之前不会触发新的验证；如果设置为true，则规则的更改将触发验证；性能会受到影响，所以只有在真正需要时才使用",
                    "category": "behavior"
                },
                "lazy-rules": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为布尔值true，则只有在字段第一次失去焦点后，它才会根据“规则”检查验证状态；如果设置为“ondemand”，则仅当手动调用组件的validate（）方法或包装器QForm提交自身时才会触发",
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "ondemand"
                    ],
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "一旦字段获得焦点，文本标签将“浮动”在输入字段上方",
                    "examples": [
                        "Username"
                    ],
                    "category": "content"
                },
                "stack-label": {
                    "type": "Boolean",
                    "desc": "无论字段内容如何（如果有），标签都将始终显示在字段上方",
                    "category": "content"
                },
                "hint": {
                    "type": "String",
                    "desc": "放置在包装表单组件下方的帮助程序（提示）文本",
                    "examples": [
                        "Fill in between 3 and 12 characters"
                    ],
                    "category": "content"
                },
                "hide-hint": {
                    "type": "Boolean",
                    "desc": "当字段没有焦点时隐藏辅助对象（提示）文本",
                    "category": "content"
                },
                "prefix": {
                    "type": "String",
                    "desc": "前缀",
                    "examples": [
                        "$"
                    ],
                    "category": "content"
                },
                "suffix": {
                    "type": "String",
                    "desc": "后缀",
                    "examples": [
                        "@gmail.com"
                    ],
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中标签的颜色名称；覆盖“color”道具；与“color”道具的不同之处在于，即使字段未聚焦，标签也将始终具有此颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "通过显示微调器向用户发出进程正在进行的信号；Spinner可以通过使用“加载”插槽进行自定义。",
                    "category": "behavior|content"
                },
                "clearable": {
                    "type": "Boolean",
                    "desc": "当设置了一个值（未定义或为空）时，附加可清除的图标；单击时，模型变为空",
                    "category": "behavior|content"
                },
                "clear-icon": {
                    "type": "String",
                    "desc": "与“可清除”道具一起使用时用于清除按钮的自定义图标",
                    "examples": [
                        "close"
                    ],
                    "category": "content"
                },
                "filled": {
                    "type": "Boolean",
                    "desc": "对字段使用“填充”设计",
                    "category": "style"
                },
                "outlined": {
                    "type": "Boolean",
                    "desc": "现场采用“轮廓”设计",
                    "category": "style"
                },
                "borderless": {
                    "type": "Boolean",
                    "desc": "对字段使用“无边框”设计",
                    "category": "style"
                },
                "standout": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "现场采用“突出”设计；指定聚焦时要应用的类（覆盖默认类）",
                    "examples": [
                        "standout",
                        "standout=\"bg-primary text-white\""
                    ],
                    "category": "style"
                },
                "label-slot": {
                    "type": "Boolean",
                    "desc": "启用标签槽；如果未设置“label”道具，则需要将其设置为强制使用“label“插槽",
                    "category": "content"
                },
                "bottom-slots": {
                    "type": "Boolean",
                    "desc": "启用底部插槽（“error”、“hint”、“counter”）",
                    "category": "content"
                },
                "hide-bottom-space": {
                    "type": "Boolean",
                    "desc": "当提示/错误/计数器不使用时，不要再为它们保留空间；因此，它也会禁用这些对象的动画；它还允许提示/错误区域根据其内容进行垂直拉伸",
                    "category": "style"
                },
                "counter": {
                    "type": "Boolean",
                    "desc": "在右下角显示自动计数器",
                    "category": "content"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形；覆盖“圆角”道具",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "item-aligned": {
                    "type": "Boolean",
                    "desc": "将内部内容对齐方式与QItem的对齐方式相匹配",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "autofocus": {
                    "type": "Boolean",
                    "desc": "初始组件渲染上的焦点场",
                    "category": "behavior"
                },
                "for": {
                    "type": "String",
                    "desc": "用于指定控件的“id”以及包装控件的标签的“for”属性；如果未指定“name”道具，则也会将其用于此属性",
                    "examples": [
                        "myFieldsId"
                    ],
                    "category": "behavior"
                },
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理表单时很有用；如果未指定，则采用值“for”prop（如果存在）",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "maxlength": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "指定模型的最大长度",
                    "category": "model"
                }
            },
            "slots": {
                "default": {
                    "desc": "字段主要内容"
                },
                "prepend": {
                    "desc": "预备内场；建议：QIcon、QBtn"
                },
                "append": {
                    "desc": "附加到内部字段；建议：QIcon、QBtn"
                },
                "before": {
                    "desc": "准备外部字段；建议：QIcon、QBtn"
                },
                "after": {
                    "desc": "附加外部字段；建议：QIcon、QBtn"
                },
                "label": {
                    "desc": "标签插槽；仅当设置了“label slot”道具或设置了“label”道具时使用；使用时，“label”道具中的文本将被忽略"
                },
                "error": {
                    "desc": "错误插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "hint": {
                    "desc": "提示文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "counter": {
                    "desc": "计数器文本插槽；仅当使用“底部插槽”道具时才启用；建议：＜div＞"
                },
                "loading": {
                    "desc": "组件处于加载模式时覆盖默认微调器；与“加载”道具一起使用"
                },
                "control": {
                    "desc": "控件插槽；建议QSlider，QRange，QKnob。。。",
                    "scope": {
                        "id": {
                            "type": "String",
                            "desc": "Element id used in the `for` attribute of the field label. Can be used to link the control to the label",
                            "examples": [
                                "qf_363270c0-7a83-62b1-8dcf-6dfd64ee38fa"
                            ]
                        },
                        "field": {
                            "type": "Element",
                            "desc": "DOM element of the field"
                        },
                        "editable": {
                            "type": "Boolean",
                            "desc": "Field is editable"
                        },
                        "focused": {
                            "type": "Boolean",
                            "desc": "Field has focus"
                        },
                        "floatingLabel": {
                            "type": "Boolean",
                            "desc": "Field's label is floating"
                        },
                        "modelValue": {
                            "type": "Any",
                            "desc": "Field's value",
                            "examples": [
                                0.241,
                                "Text"
                            ]
                        },
                        "emitValue": {
                            "type": "Function",
                            "desc": "Function that emits an @input event in the context of the field",
                            "params": {
                                "value": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Value to be emitted",
                                    "examples": [
                                        0,
                                        "Changed text"
                                    ]
                                }
                            },
                            "returns": null
                        }
                    }
                },
                "rawControl": {
                    "internal": true
                }
            },
            "events": {
                "clear": {
                    "desc": "使用“clearable”属性时，单击clear图标时会发出此事件",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "The previous value before clearing it"
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当模型更改时发出，仅当与“clearable”或“control”范围的插槽一起使用时发出。",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "focus": {
                    "desc": "组件聚焦时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                },
                "blur": {
                    "desc": "组件失去焦点时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        }
                    }
                }
            },
            "methods": {
                "resetValidation": {
                    "desc": "重置验证状态"
                },
                "validate": {
                    "desc": "触发验证",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Optional value to validate against"
                        }
                    },
                    "returns": {
                        "type": [
                            "Boolean",
                            "Promise<boolean>"
                        ],
                        "desc": "True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)",
                        "examples": [
                            "true",
                            "validate().then(outcome => { ... })"
                        ]
                    }
                },
                "focus": {
                    "desc": "聚焦场"
                },
                "blur": {
                    "desc": "模糊场（失去焦点）"
                }
            },
            "computedProps": {
                "hasError": {
                    "type": "Boolean",
                    "desc": "组件是否处于错误状态"
                }
            }
        }
    },
    {
        "name": "q-radio",
        "desc": "单选框",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/radio"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Number",
                        "String",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"option\""
                    ]
                },
                "val": {
                    "type": [
                        "Number",
                        "String",
                        "null",
                        "undefined"
                    ],
                    "required": true,
                    "desc": "用于更改模型值的选项的实际值",
                    "examples": [
                        "opt1",
                        50
                    ],
                    "category": "model"
                },
                "label": {
                    "type": "String",
                    "desc": "沿无线电控制显示的标签（或使用默认插槽而不是此道具）",
                    "examples": [
                        "label=\"Option 1\""
                    ],
                    "category": "label"
                },
                "left-label": {
                    "type": "Boolean",
                    "desc": "标签（如果指定）应显示在复选框的左侧",
                    "category": "label"
                },
                "checked-icon": {
                    "type": "String",
                    "desc": "选择时要使用的图标（而不是默认设计）",
                    "examples": [
                        "visibility"
                    ],
                    "category": "icons",
                    "addedIn": "v2.5"
                },
                "unchecked-icon": {
                    "type": "String",
                    "desc": "取消选择时要使用的图标（而不是默认设计）",
                    "examples": [
                        "visibility_off"
                    ],
                    "category": "icons",
                    "addedIn": "v2.5"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "keep-color": {
                    "type": "Boolean",
                    "desc": "取消选中复选框时是否应保留颜色（如果指定）？",
                    "category": "behavior"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认槽可以用作标签，除非指定了“label”道具；建议：字符串"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        },
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "set": {
                    "desc": "将收音机的v型设置为等于val"
                }
            }
        }
    },
    {
        "name": "q-checkbox",
        "desc": "复选框",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/checkbox"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Any",
                        "Array"
                    ],
                    "examples": [
                        "false",
                        "['car', 'building']"
                    ]
                },
                "val": {
                    "type": "Any",
                    "desc": "当模型（“value”）为Array时有效。它告诉组件在勾选/取消勾选时应添加/删除哪个值",
                    "examples": [
                        "car"
                    ],
                    "category": "model"
                },
                "true-value": {
                    "type": "Any",
                    "desc": "检查/勾选/打开时应考虑哪些型号值？",
                    "default": true,
                    "examples": [
                        "Agreed"
                    ],
                    "category": "model",
                    "required": false
                },
                "false-value": {
                    "type": "Any",
                    "desc": "什么模型值应该被视为未检查/未检查/关闭？",
                    "default": false,
                    "examples": [
                        "Disagree"
                    ],
                    "category": "model",
                    "required": false
                },
                "indeterminate-value": {
                    "type": "Any",
                    "desc": "什么模型值应该被视为“不确定”？",
                    "default": null,
                    "examples": [
                        0,
                        "not_answered"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "toggle-order": {
                    "type": "String",
                    "desc": "确定两种状态的切换顺序（'t'表示true的状态，'f'表示false的状态）；如果“toggle undefined”为true，则顺序为：indet->第一状态->第二状态->indet（and repeat），否则：indet-->第一状态->第一状态->第二状态->第一状态->二状态->。。。",
                    "default": "tf",
                    "values": [
                        "tf",
                        "ft"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "toggle-indeterminate": {
                    "type": "Boolean",
                    "desc": "当用户点击/点击组件时，我们是否也应该切换到不确定状态？",
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "沿组件显示的标签（或使用默认槽而不是此道具）",
                    "examples": [
                        "I agree with the Terms and Conditions"
                    ],
                    "category": "label"
                },
                "left-label": {
                    "type": "Boolean",
                    "desc": "标签（如果指定）应显示在组件的左侧",
                    "category": "label"
                },
                "checked-icon": {
                    "type": "String",
                    "examples": [
                        "visibility"
                    ],
                    "category": "icons",
                    "desc": "模型真实时要使用的图标（而不是默认设计）",
                    "addedIn": "v2.5"
                },
                "unchecked-icon": {
                    "type": "String",
                    "examples": [
                        "visibility_off"
                    ],
                    "category": "icons",
                    "desc": "切换错误时要使用的图标（而不是默认设计）",
                    "addedIn": "v2.5"
                },
                "indeterminate-icon": {
                    "type": "String",
                    "examples": [
                        "help"
                    ],
                    "category": "icons",
                    "desc": "模型不确定时要使用的图标（而不是默认设计）",
                    "addedIn": "v2.5"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "keep-color": {
                    "type": "Boolean",
                    "desc": "当组件被取消勾选/关闭时，是否应该保留颜色（如果指定的话）？",
                    "category": "behavior"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认槽可以用作标签，除非指定了“label”道具；建议：字符串"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        },
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "toggle": {
                    "desc": "切换（模型的）状态"
                }
            }
        }
    },
    {
        "name": "q-toggle",
        "desc": "switch切换",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/toggle"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Any",
                        "Array"
                    ],
                    "examples": [
                        "false",
                        "['car', 'building']"
                    ]
                },
                "val": {
                    "type": "Any",
                    "desc": "当模型（“value”）为Array时有效。它告诉组件在勾选/取消勾选时应添加/删除哪个值",
                    "examples": [
                        "car"
                    ],
                    "category": "model"
                },
                "true-value": {
                    "type": "Any",
                    "desc": "检查/勾选/打开时应考虑哪些型号值？",
                    "default": true,
                    "examples": [
                        "Agreed"
                    ],
                    "category": "model",
                    "required": false
                },
                "false-value": {
                    "type": "Any",
                    "desc": "什么模型值应该被视为未检查/未检查/关闭？",
                    "default": false,
                    "examples": [
                        "Disagree"
                    ],
                    "category": "model",
                    "required": false
                },
                "indeterminate-value": {
                    "type": "Any",
                    "desc": "什么模型值应该被视为“不确定”？",
                    "default": null,
                    "examples": [
                        0,
                        "not_answered"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "toggle-order": {
                    "type": "String",
                    "desc": "确定两种状态的切换顺序（'t'表示true的状态，'f'表示false的状态）；如果“toggle undefined”为true，则顺序为：indet->第一状态->第二状态->indet（and repeat），否则：indet-->第一状态->第一状态->第二状态->第一状态->二状态->。。。",
                    "default": "tf",
                    "values": [
                        "tf",
                        "ft"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "toggle-indeterminate": {
                    "type": "Boolean",
                    "desc": "当用户点击/点击组件时，我们是否也应该切换到不确定状态？",
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "沿组件显示的标签（或使用默认槽而不是此道具）",
                    "examples": [
                        "I agree with the Terms and Conditions"
                    ],
                    "category": "label"
                },
                "left-label": {
                    "type": "Boolean",
                    "desc": "标签（如果指定）应显示在组件的左侧",
                    "category": "label"
                },
                "checked-icon": {
                    "type": "String",
                    "examples": [
                        "visibility"
                    ],
                    "category": "icons",
                    "desc": "打开切换时要使用的图标"
                },
                "unchecked-icon": {
                    "type": "String",
                    "examples": [
                        "visibility_off"
                    ],
                    "category": "icons",
                    "desc": "关闭切换时要使用的图标"
                },
                "indeterminate-icon": {
                    "type": "String",
                    "examples": [
                        "help"
                    ],
                    "category": "icons",
                    "desc": "模型不确定时要使用的图标"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "keep-color": {
                    "type": "Boolean",
                    "desc": "当组件被取消勾选/关闭时，是否应该保留颜色（如果指定的话）？",
                    "category": "behavior"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-color": {
                    "type": "String",
                    "desc": "覆盖默认图标颜色（仅适用于真实状态）；Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认槽可以用作标签，除非指定了“label”道具；建议：字符串"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        },
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "toggle": {
                    "desc": "切换（模型的）状态"
                }
            }
        }
    },
    {
        "name": "q-btn-toggle",
        "desc": "按钮切换",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/button-toggle"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Any",
                    "examples": [
                        "v-model=\"selected\""
                    ]
                },
                "options": {
                    "type": "Array",
                    "desc": "定义每个选项的对象阵列",
                    "required": true,
                    "definition": {
                        "attrs": {
                            "type": "Object",
                            "desc": "Key-value for attributes to be set on the button",
                            "examples": [
                                "{ 'aria-label': 'Button label' }"
                            ]
                        },
                        "label": {
                            "type": "String",
                            "desc": "Label of option button; Use this prop and/or 'icon', but at least one is required",
                            "examples": [
                                "Option 1"
                            ]
                        },
                        "icon": {
                            "type": "String",
                            "desc": "Icon of option button; Use this prop and/or 'label', but at least one is required",
                            "examples": [
                                "map",
                                "ion-add",
                                "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                                "img:path/to/some_image.png"
                            ],
                            "category": "content"
                        },
                        "value": {
                            "type": "Any",
                            "desc": "Value of the option that will be used by component model",
                            "required": true
                        },
                        "slot": {
                            "type": "String",
                            "desc": "Slot name to use for this button content; Useful for customizing content or even add tooltips",
                            "examples": [
                                "mySlot"
                            ]
                        },
                        "...props": {
                            "type": "Any",
                            "desc": "Any other QBtn props (including class and style)"
                        }
                    },
                    "examples": [
                        "[ {label: 'One', value: 'one'}, {label: 'Two', value: 'two'} ]"
                    ],
                    "category": "model"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "toggle-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "primary",
                    "required": false
                },
                "toggle-text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "spread": {
                    "type": "Boolean",
                    "desc": "水平分布到所有可用空间",
                    "category": "content"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "使用“大纲”设计",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "使用“平面”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "移除阴影",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为方形按钮应用更突出的边框半径",
                    "category": "style"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "使用“推送”设计",
                    "category": "style"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "应用光泽效果",
                    "category": "style"
                },
                "size": {
                    "type": "String",
                    "desc": "按钮大小名称或包含单元名称的CSS单元",
                    "examples": [
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl",
                        "25px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "padding": {
                    "type": "String",
                    "desc": "应用自定义填充（垂直[水平]）；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）；设置时还删除最小宽度和高度",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg",
                        "2px 2px 5px 7px"
                    ],
                    "category": "style"
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "避免将标签文本变成大写（默认情况下会发生这种情况）",
                    "category": "content"
                },
                "no-wrap": {
                    "type": "Boolean",
                    "desc": "避免标签文本换行",
                    "category": "content"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "stack": {
                    "type": "Boolean",
                    "desc": "垂直堆叠图标和标签，而不是在同一行（就像默认情况下一样）",
                    "category": "content"
                },
                "stretch": {
                    "type": "Boolean",
                    "desc": "当在flexbox父对象上使用时，按钮将拉伸到父对象的高度",
                    "category": "content"
                },
                "clearable": {
                    "type": "Boolean",
                    "desc": "单击已选择的按钮时清除模型",
                    "category": "model"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QTooltip，QBadge"
                },
                "...": {
                    "desc": "与“options”道具的“slot”属性一起使用的任何其他动态插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "clear": {
                    "desc": "使用“clearable”属性时，单击已选择的按钮时会发出此事件"
                }
            }
        }
    },
    {
        "name": "q-option-group",
        "desc": "选项组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/option-group"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Any",
                    "examples": [
                        "v-model=\"group\""
                    ]
                },
                "options": {
                    "type": "Array",
                    "desc": "具有值、标签和禁用（可选）道具的对象数组。二进制组件将根据此数组创建；QToggle、QCheckbox或QRadio中的道具也可以添加为键/值对，以单独控制组件",
                    "definition": {
                        "label": {
                            "type": "String",
                            "desc": "Label to display along the component",
                            "required": true,
                            "examples": [
                                "Option 1",
                                "Option 2",
                                "Option 3"
                            ]
                        },
                        "value": {
                            "type": "Any",
                            "desc": "Value of the option that will be used by the component model",
                            "required": true,
                            "examples": [
                                "op1",
                                "op2",
                                "op3"
                            ]
                        },
                        "disable": {
                            "type": "Boolean",
                            "desc": "If true, the option will be disabled"
                        },
                        "...props": {
                            "type": "Any",
                            "desc": "Any other props from QToggle, QCheckbox, or QRadio",
                            "examples": [
                                "val=\"car\"",
                                ":true-value=\"trueValue\"",
                                "checked-icon=\"visibility\""
                            ]
                        }
                    },
                    "examples": [
                        ":options=\"[ { label: 'Option 1', value: 'op1' }, { label: 'Option 2', value: 'op2' }, { label: 'Option 3', value: 'op3', disable: true } ]\""
                    ],
                    "category": "model"
                },
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "type": {
                    "type": "String",
                    "desc": "要使用的输入组件的类型",
                    "values": [
                        "radio",
                        "checkbox",
                        "toggle"
                    ],
                    "default": "radio",
                    "category": "content",
                    "required": false
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "keep-color": {
                    "type": "Boolean",
                    "desc": "当输入组件被取消勾选时，是否应该保留颜色（如果指定的话）？",
                    "category": "behavior"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "left-label": {
                    "type": "Boolean",
                    "desc": "标签（如果指定）应显示在输入组件的左侧",
                    "category": "content"
                },
                "inline": {
                    "type": "Boolean",
                    "desc": "将输入组件显示为内联块，而不是每个组件都有自己的行",
                    "category": "content"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                }
            },
            "slots": {
                "label": {
                    "desc": "所有标签的通用槽",
                    "scope": {
                        "...self": {
                            "type": "Object",
                            "desc": "The corresponding option entry from the 'options' prop",
                            "definition": {
                                "label": {
                                    "type": "String",
                                    "desc": "Label to display along the component",
                                    "required": true,
                                    "examples": [
                                        "Option 1",
                                        "Option 2",
                                        "Option 3"
                                    ]
                                },
                                "value": {
                                    "type": "Any",
                                    "desc": "Value of the option that will be used by the component model",
                                    "required": true,
                                    "examples": [
                                        "op1",
                                        "op2",
                                        "op3"
                                    ]
                                },
                                "disable": {
                                    "type": "Boolean",
                                    "desc": "If true, the option will be disabled"
                                },
                                "...props": {
                                    "type": "Any",
                                    "desc": "Any other props from QToggle, QCheckbox, or QRadio",
                                    "examples": [
                                        "val=\"car\"",
                                        ":true-value=\"trueValue\"",
                                        "checked-icon=\"visibility\""
                                    ]
                                }
                            }
                        }
                    },
                    "addedIn": "v2.2"
                },
                "label-[name]": {
                    "desc": "插槽，用于定义'[name]'处选项的特定标签，其中name是基于0的索引；覆盖通用“标签”插槽（如果使用）",
                    "scope": {
                        "...self": {
                            "type": "Object",
                            "desc": "The corresponding option entry from the 'options' prop",
                            "definition": {
                                "label": {
                                    "type": "String",
                                    "desc": "Label to display along the component",
                                    "required": true,
                                    "examples": [
                                        "Option 1",
                                        "Option 2",
                                        "Option 3"
                                    ]
                                },
                                "value": {
                                    "type": "Any",
                                    "desc": "Value of the option that will be used by the component model",
                                    "required": true,
                                    "examples": [
                                        "op1",
                                        "op2",
                                        "op3"
                                    ]
                                },
                                "disable": {
                                    "type": "Boolean",
                                    "desc": "If true, the option will be disabled"
                                },
                                "...props": {
                                    "type": "Any",
                                    "desc": "Any other props from QToggle, QCheckbox, or QRadio",
                                    "examples": [
                                        "val=\"car\"",
                                        ":true-value=\"trueValue\"",
                                        "checked-icon=\"visibility\""
                                    ]
                                }
                            }
                        }
                    },
                    "addedIn": "v2.2"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-slider",
        "desc": "滑块",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/slider"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "min": {
                    "type": "Number",
                    "desc": "模型的最小值；设置轨迹的最小值",
                    "default": 0,
                    "examples": [
                        ":min=\"0\""
                    ],
                    "category": "model",
                    "required": false
                },
                "max": {
                    "type": "Number",
                    "desc": "模型的最大值；设置曲目的最大值",
                    "default": 100,
                    "category": "model",
                    "required": false
                },
                "inner-min": {
                    "type": "Number",
                    "desc": "模型的内部最小值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要高于或等于“min”道具；默认为“min”道具",
                    "category": "model",
                    "addedIn": "v2.4"
                },
                "inner-max": {
                    "type": "Number",
                    "desc": "模型的内部最大值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要低于或等于“最大”道具；默认为“最大”道具",
                    "category": "model",
                    "addedIn": "v2.4"
                },
                "step": {
                    "type": "Number",
                    "desc": "指定有效值之间的步长（>0.0）；当步长等于0时，它定义了无限粒度",
                    "default": 1,
                    "category": "model",
                    "required": false
                },
                "snap": {
                    "type": "Boolean",
                    "desc": "捕捉有效值，而不是自由滑动；建议：与“step”道具一起使用",
                    "category": "behavior"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "反向工作（改变方向）",
                    "category": "behavior"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "垂直方向显示",
                    "category": "behavior"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中轨道的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "track-img": {
                    "type": "String",
                    "desc": "在轨迹上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "inner-track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中内部轨迹的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "inner-track-img": {
                    "type": "String",
                    "desc": "在内部轨迹上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "selection-color": {
                    "type": "String",
                    "desc": "Quasar调色板中选择栏的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "selection-img": {
                    "type": "String",
                    "desc": "在选择栏上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "label": {
                    "type": "Boolean",
                    "desc": "当用户单击/点击滑块拇指并移动它时弹出标签",
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "label-text-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "switch-label-side": {
                    "type": "Boolean",
                    "desc": "切换标签的位置（顶部<->底部或左侧<->右侧）",
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "label-always": {
                    "type": "Boolean",
                    "desc": "始终显示标签",
                    "category": "behavior|content"
                },
                "markers": {
                    "type": [
                        "Boolean",
                        "Number"
                    ],
                    "desc": "在轨迹上显示标记，每个标记对应模型的每个可能值，或使用自定义步骤（指定数字时）",
                    "category": "content",
                    "examples": [
                        "markers",
                        ":markers=\"5\""
                    ]
                },
                "marker-labels": {
                    "type": [
                        "Boolean",
                        "Array",
                        "Object",
                        "Function"
                    ],
                    "tsType": "SliderMarkerLabels",
                    "desc": "配置标记标签（如果为true，则显示默认标签）；定义数组对象或具有键值的对象，其中键是模型，值是标记标签定义",
                    "definition": {
                        "value": {
                            "type": "Number",
                            "required": true,
                            "desc": "Value of equivalent model where to position the marker"
                        },
                        "label": {
                            "type": [
                                "Number",
                                "String"
                            ],
                            "desc": "Label to use"
                        },
                        "classes": {
                            "type": [
                                "String",
                                "Array",
                                "Object"
                            ],
                            "tsType": "VueClassProp",
                            "desc": "CSS classes to be attributed to the marker label",
                            "examples": [
                                "my-class-name"
                            ]
                        },
                        "style": {
                            "type": "Object",
                            "tsType": "VueStyleObjectProp",
                            "desc": "Style definitions to be attributed to the marker label",
                            "examples": [
                                "{ height: '24px' }"
                            ]
                        }
                    },
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "The marker value to transform",
                            "required": true
                        }
                    },
                    "returns": {
                        "type": [
                            "String",
                            "Object"
                        ],
                        "desc": "Marker definition Object or directly a String for the label of the marker",
                        "definition": {
                            "value": {
                                "type": "Number",
                                "desc": "Value of equivalent model where to position the marker"
                            },
                            "label": {
                                "type": [
                                    "Number",
                                    "String"
                                ],
                                "desc": "Label to use"
                            },
                            "classes": {
                                "type": [
                                    "String",
                                    "Array",
                                    "Object"
                                ],
                                "tsType": "VueClassProp",
                                "desc": "CSS classes to be attributed to the marker label",
                                "examples": [
                                    "my-class-name"
                                ]
                            },
                            "style": {
                                "type": "Object",
                                "tsType": "VueStyleObjectProp",
                                "desc": "Style definitions to be attributed to the marker label",
                                "examples": [
                                    "{ height: '24px' }"
                                ]
                            }
                        }
                    },
                    "category": "content",
                    "examples": [
                        true,
                        "[ { value: 0, label: '0%' }, { value: 5, classes: 'my-class', style: { width: '24px' } } ]",
                        "{ 0: '0%', 5: { label: '5%', classes: 'my-class', style: { width: '24px' } } }",
                        "val => (10 * val) + '%'",
                        "val => ({ label: (10 * val) + '%', classes: 'my-class', style: { width: '24px' } })"
                    ],
                    "addedIn": "v2.4"
                },
                "marker-labels-class": {
                    "type": "String",
                    "desc": "要应用于标记标签容器的CSS类",
                    "examples": [
                        "text-orange"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "switch-marker-labels-side": {
                    "type": "Boolean",
                    "desc": "切换标记标签的位置（顶部<->底部或左侧<->右侧）",
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "track-size": {
                    "type": "String",
                    "desc": "轨道大小（包括CSS单元）",
                    "default": "4px",
                    "examples": [
                        "35px"
                    ],
                    "category": "style",
                    "addedIn": "v2.4",
                    "required": false
                },
                "thumb-size": {
                    "type": "String",
                    "desc": "拇指大小（包括CSS单元）",
                    "default": "20px",
                    "examples": [
                        "20px"
                    ],
                    "category": "style",
                    "addedIn": "v2.4",
                    "required": false
                },
                "thumb-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "thumb-path": {
                    "type": "String",
                    "desc": "设置自定义拇指svg路径",
                    "default": "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0",
                    "examples": [
                        "M5 5 h10 v10 h-10 v-10"
                    ],
                    "category": "style",
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "model-value": {
                    "desc": "组件的型号（必须介于最小值/最大值之间）；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Number",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"positionModel\""
                    ]
                },
                "label-value": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "替代默认标签值",
                    "examples": [
                        ":label-value=\"model + 'px'\""
                    ],
                    "category": "content"
                }
            },
            "slots": {
                "marker-label": {
                    "desc": "过滤选项后的菜单应该显示什么，而没有留下任何显示选项；建议：＜div＞",
                    "addedIn": "v2.4",
                    "scope": {
                        "marker": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelConfig",
                            "desc": "Config for current marker label",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerList": {
                            "type": "Array",
                            "tsType": "SliderMarkerLabelArrayConfig",
                            "desc": "Array of marker label configs",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerMap": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelObjectConfig",
                            "desc": "Object with key-value where key is the model and the value is the marker label config",
                            "definition": {
                                "...key": {
                                    "type": "Object",
                                    "desc": "Marker label config",
                                    "definition": {
                                        "index": {
                                            "type": "Number",
                                            "desc": "Index of the marker label (0-based)"
                                        },
                                        "value": {
                                            "type": "Number",
                                            "desc": "Equivalent model value for the marker label"
                                        },
                                        "label": {
                                            "type": [
                                                "Number",
                                                "String"
                                            ],
                                            "desc": "Configured label for the marker"
                                        },
                                        "classes": {
                                            "type": "String",
                                            "desc": "Required CSS classes to be applied to the marker element"
                                        },
                                        "style": {
                                            "type": "Object",
                                            "tsType": "VueStyleObjectProp",
                                            "desc": "Style definitions to be attributed to the marker label",
                                            "examples": [
                                                "{ height: '24px' }"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "classes": {
                            "type": "String",
                            "desc": "Required CSS classes to be applied to the marker element"
                        },
                        "getStyle": {
                            "type": "Function",
                            "desc": "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
                            "params": {
                                "value": {
                                    "type": "Number",
                                    "desc": "The marker label equivalent model value",
                                    "required": true
                                }
                            },
                            "returns": {
                                "type": "Object",
                                "desc": "CSS style Object to apply to a marker element at respective model value"
                            }
                        }
                    }
                },
                "marker-label-group": {
                    "desc": "过滤选项后的菜单应该显示什么，而没有留下任何显示选项；建议：＜div＞",
                    "addedIn": "v2.4",
                    "scope": {
                        "markerList": {
                            "type": "Array",
                            "tsType": "SliderMarkerLabelArrayConfig",
                            "desc": "Array of marker label configs",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerMap": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelObjectConfig",
                            "desc": "Object with key-value where key is the model and the value is the marker label config",
                            "definition": {
                                "...key": {
                                    "type": "Object",
                                    "desc": "Marker label config",
                                    "definition": {
                                        "index": {
                                            "type": "Number",
                                            "desc": "Index of the marker label (0-based)"
                                        },
                                        "value": {
                                            "type": "Number",
                                            "desc": "Equivalent model value for the marker label"
                                        },
                                        "label": {
                                            "type": [
                                                "Number",
                                                "String"
                                            ],
                                            "desc": "Configured label for the marker"
                                        },
                                        "classes": {
                                            "type": "String",
                                            "desc": "Required CSS classes to be applied to the marker element"
                                        },
                                        "style": {
                                            "type": "Object",
                                            "tsType": "VueStyleObjectProp",
                                            "desc": "Style definitions to be attributed to the marker label",
                                            "examples": [
                                                "{ height: '24px' }"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "classes": {
                            "type": "String",
                            "desc": "Required CSS classes to be applied to the marker element"
                        },
                        "getStyle": {
                            "type": "Function",
                            "desc": "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
                            "params": {
                                "value": {
                                    "type": "Number",
                                    "desc": "The marker label equivalent model value",
                                    "required": true
                                }
                            },
                            "returns": {
                                "type": "Object",
                                "desc": "CSS style Object to apply to a marker element at respective model value"
                            }
                        }
                    }
                }
            },
            "events": {
                "change": {
                    "desc": "延迟模型值更改时发出（用户滑动后释放拇指）",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "pan": {
                    "desc": "当用户开始平移组件时触发",
                    "params": {
                        "phase": {
                            "type": "String",
                            "desc": "Phase of panning",
                            "values": [
                                "start",
                                "end"
                            ]
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "Number",
                                "null"
                            ],
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-range",
        "desc": "范围",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/range"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "min": {
                    "type": "Number",
                    "desc": "模型的最小值；设置轨迹的最小值",
                    "default": 0,
                    "examples": [
                        ":min=\"0\""
                    ],
                    "category": "model",
                    "required": false
                },
                "max": {
                    "type": "Number",
                    "desc": "模型的最大值；设置曲目的最大值",
                    "default": 100,
                    "category": "model",
                    "required": false
                },
                "inner-min": {
                    "type": "Number",
                    "desc": "模型的内部最小值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要高于或等于“min”道具；默认为“min”道具",
                    "category": "model",
                    "addedIn": "v2.4"
                },
                "inner-max": {
                    "type": "Number",
                    "desc": "模型的内部最大值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要低于或等于“最大”道具；默认为“最大”道具",
                    "category": "model",
                    "addedIn": "v2.4"
                },
                "step": {
                    "type": "Number",
                    "desc": "指定有效值之间的步长（>0.0）；当步长等于0时，它定义了无限粒度",
                    "default": 1,
                    "category": "model",
                    "required": false
                },
                "snap": {
                    "type": "Boolean",
                    "desc": "捕捉有效值，而不是自由滑动；建议：与“step”道具一起使用",
                    "category": "behavior"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "反向工作（改变方向）",
                    "category": "behavior"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "垂直方向显示",
                    "category": "behavior"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中轨道的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "track-img": {
                    "type": "String",
                    "desc": "在轨迹上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "inner-track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中内部轨迹的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "inner-track-img": {
                    "type": "String",
                    "desc": "在内部轨迹上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "selection-color": {
                    "type": "String",
                    "desc": "Quasar调色板中选择栏的颜色名称（也可以是“透明的”）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "selection-img": {
                    "type": "String",
                    "desc": "在选择栏上应用图案图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "~assets/my-pattern.png"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "label": {
                    "type": "Boolean",
                    "desc": "当用户单击/点击滑块拇指并移动它时弹出标签",
                    "category": "content"
                },
                "label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "label-text-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "switch-label-side": {
                    "type": "Boolean",
                    "desc": "切换标签的位置（顶部<->底部或左侧<->右侧）",
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "label-always": {
                    "type": "Boolean",
                    "desc": "始终显示标签",
                    "category": "behavior|content"
                },
                "markers": {
                    "type": [
                        "Boolean",
                        "Number"
                    ],
                    "desc": "在轨迹上显示标记，每个标记对应模型的每个可能值，或使用自定义步骤（指定数字时）",
                    "category": "content",
                    "examples": [
                        "markers",
                        ":markers=\"5\""
                    ]
                },
                "marker-labels": {
                    "type": [
                        "Boolean",
                        "Array",
                        "Object",
                        "Function"
                    ],
                    "tsType": "SliderMarkerLabels",
                    "desc": "配置标记标签（如果为true，则显示默认标签）；定义数组对象或具有键值的对象，其中键是模型，值是标记标签定义",
                    "definition": {
                        "value": {
                            "type": "Number",
                            "required": true,
                            "desc": "Value of equivalent model where to position the marker"
                        },
                        "label": {
                            "type": [
                                "Number",
                                "String"
                            ],
                            "desc": "Label to use"
                        },
                        "classes": {
                            "type": [
                                "String",
                                "Array",
                                "Object"
                            ],
                            "tsType": "VueClassProp",
                            "desc": "CSS classes to be attributed to the marker label",
                            "examples": [
                                "my-class-name"
                            ]
                        },
                        "style": {
                            "type": "Object",
                            "tsType": "VueStyleObjectProp",
                            "desc": "Style definitions to be attributed to the marker label",
                            "examples": [
                                "{ height: '24px' }"
                            ]
                        }
                    },
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "The marker value to transform",
                            "required": true
                        }
                    },
                    "returns": {
                        "type": [
                            "String",
                            "Object"
                        ],
                        "desc": "Marker definition Object or directly a String for the label of the marker",
                        "definition": {
                            "value": {
                                "type": "Number",
                                "desc": "Value of equivalent model where to position the marker"
                            },
                            "label": {
                                "type": [
                                    "Number",
                                    "String"
                                ],
                                "desc": "Label to use"
                            },
                            "classes": {
                                "type": [
                                    "String",
                                    "Array",
                                    "Object"
                                ],
                                "tsType": "VueClassProp",
                                "desc": "CSS classes to be attributed to the marker label",
                                "examples": [
                                    "my-class-name"
                                ]
                            },
                            "style": {
                                "type": "Object",
                                "tsType": "VueStyleObjectProp",
                                "desc": "Style definitions to be attributed to the marker label",
                                "examples": [
                                    "{ height: '24px' }"
                                ]
                            }
                        }
                    },
                    "category": "content",
                    "examples": [
                        true,
                        "[ { value: 0, label: '0%' }, { value: 5, classes: 'my-class', style: { width: '24px' } } ]",
                        "{ 0: '0%', 5: { label: '5%', classes: 'my-class', style: { width: '24px' } } }",
                        "val => (10 * val) + '%'",
                        "val => ({ label: (10 * val) + '%', classes: 'my-class', style: { width: '24px' } })"
                    ],
                    "addedIn": "v2.4"
                },
                "marker-labels-class": {
                    "type": "String",
                    "desc": "要应用于标记标签容器的CSS类",
                    "examples": [
                        "text-orange"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "switch-marker-labels-side": {
                    "type": "Boolean",
                    "desc": "切换标记标签的位置（顶部<->底部或左侧<->右侧）",
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "track-size": {
                    "type": "String",
                    "desc": "轨道大小（包括CSS单元）",
                    "default": "4px",
                    "examples": [
                        "35px"
                    ],
                    "category": "style",
                    "addedIn": "v2.4",
                    "required": false
                },
                "thumb-size": {
                    "type": "String",
                    "desc": "拇指大小（包括CSS单元）",
                    "default": "20px",
                    "examples": [
                        "20px"
                    ],
                    "category": "style",
                    "addedIn": "v2.4",
                    "required": false
                },
                "thumb-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "addedIn": "v2.4"
                },
                "thumb-path": {
                    "type": "String",
                    "desc": "设置自定义拇指svg路径",
                    "default": "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0",
                    "examples": [
                        "M5 5 h10 v10 h-10 v-10"
                    ],
                    "category": "style",
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "model-value": {
                    "desc": "类型为｛min，max｝的组件的模型（两个值必须介于全局最小值/最大值之间）；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Object",
                        "null",
                        "undefined"
                    ],
                    "definition": {
                        "min": {
                            "type": [
                                "Number",
                                "null"
                            ],
                            "desc": "Model value for left thumb"
                        },
                        "max": {
                            "type": [
                                "Number",
                                "null"
                            ],
                            "desc": "Model value for right thumb"
                        }
                    },
                    "examples": [
                        "v-model=\"positionModel\""
                    ]
                },
                "drag-range": {
                    "type": "Boolean",
                    "desc": "用户可以拖动范围，而不仅仅是两个拇指",
                    "category": "content"
                },
                "drag-only-range": {
                    "type": "Boolean",
                    "desc": "用户只能拖动范围，而不能拖动两个拇指",
                    "category": "content"
                },
                "left-label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中左标签背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels"
                },
                "left-label-text-color": {
                    "type": "String",
                    "desc": "Quasar调色板中左标签文本的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels"
                },
                "right-label-color": {
                    "type": "String",
                    "desc": "Quasar调色板中右侧标签背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels"
                },
                "right-label-text-color": {
                    "type": "String",
                    "desc": "Quasar调色板中右侧标签文本的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels"
                },
                "left-label-value": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "覆盖最小值的默认标签",
                    "examples": [
                        ":left-label-value=\"model.min + 'px'\""
                    ],
                    "category": "labels"
                },
                "right-label-value": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "覆盖最大值的默认标签",
                    "examples": [
                        ":right-label-value=\"model.max + 'px'\""
                    ],
                    "category": "labels"
                },
                "left-thumb-color": {
                    "type": "String",
                    "desc": "左手拇指的颜色名称（来自Quasar调色板）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels",
                    "addedIn": "v2.4"
                },
                "right-thumb-color": {
                    "type": "String",
                    "desc": "右手拇指的颜色名称（来自Quasar调色板）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "labels",
                    "addedIn": "v2.4"
                }
            },
            "slots": {
                "marker-label": {
                    "desc": "过滤选项后的菜单应该显示什么，而没有留下任何显示选项；建议：＜div＞",
                    "addedIn": "v2.4",
                    "scope": {
                        "marker": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelConfig",
                            "desc": "Config for current marker label",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerList": {
                            "type": "Array",
                            "tsType": "SliderMarkerLabelArrayConfig",
                            "desc": "Array of marker label configs",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerMap": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelObjectConfig",
                            "desc": "Object with key-value where key is the model and the value is the marker label config",
                            "definition": {
                                "...key": {
                                    "type": "Object",
                                    "desc": "Marker label config",
                                    "definition": {
                                        "index": {
                                            "type": "Number",
                                            "desc": "Index of the marker label (0-based)"
                                        },
                                        "value": {
                                            "type": "Number",
                                            "desc": "Equivalent model value for the marker label"
                                        },
                                        "label": {
                                            "type": [
                                                "Number",
                                                "String"
                                            ],
                                            "desc": "Configured label for the marker"
                                        },
                                        "classes": {
                                            "type": "String",
                                            "desc": "Required CSS classes to be applied to the marker element"
                                        },
                                        "style": {
                                            "type": "Object",
                                            "tsType": "VueStyleObjectProp",
                                            "desc": "Style definitions to be attributed to the marker label",
                                            "examples": [
                                                "{ height: '24px' }"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "classes": {
                            "type": "String",
                            "desc": "Required CSS classes to be applied to the marker element"
                        },
                        "getStyle": {
                            "type": "Function",
                            "desc": "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
                            "params": {
                                "value": {
                                    "type": "Number",
                                    "desc": "The marker label equivalent model value",
                                    "required": true
                                }
                            },
                            "returns": {
                                "type": "Object",
                                "desc": "CSS style Object to apply to a marker element at respective model value"
                            }
                        }
                    }
                },
                "marker-label-group": {
                    "desc": "过滤选项后的菜单应该显示什么，而没有留下任何显示选项；建议：＜div＞",
                    "addedIn": "v2.4",
                    "scope": {
                        "markerList": {
                            "type": "Array",
                            "tsType": "SliderMarkerLabelArrayConfig",
                            "desc": "Array of marker label configs",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "desc": "Index of the marker label (0-based)"
                                },
                                "value": {
                                    "type": "Number",
                                    "desc": "Equivalent model value for the marker label"
                                },
                                "label": {
                                    "type": [
                                        "Number",
                                        "String"
                                    ],
                                    "desc": "Configured label for the marker"
                                },
                                "classes": {
                                    "type": "String",
                                    "desc": "Required CSS classes to be applied to the marker element"
                                },
                                "style": {
                                    "type": "Object",
                                    "tsType": "VueStyleObjectProp",
                                    "desc": "Style definitions to be attributed to the marker label",
                                    "examples": [
                                        "{ height: '24px' }"
                                    ]
                                }
                            }
                        },
                        "markerMap": {
                            "type": "Object",
                            "tsType": "SliderMarkerLabelObjectConfig",
                            "desc": "Object with key-value where key is the model and the value is the marker label config",
                            "definition": {
                                "...key": {
                                    "type": "Object",
                                    "desc": "Marker label config",
                                    "definition": {
                                        "index": {
                                            "type": "Number",
                                            "desc": "Index of the marker label (0-based)"
                                        },
                                        "value": {
                                            "type": "Number",
                                            "desc": "Equivalent model value for the marker label"
                                        },
                                        "label": {
                                            "type": [
                                                "Number",
                                                "String"
                                            ],
                                            "desc": "Configured label for the marker"
                                        },
                                        "classes": {
                                            "type": "String",
                                            "desc": "Required CSS classes to be applied to the marker element"
                                        },
                                        "style": {
                                            "type": "Object",
                                            "tsType": "VueStyleObjectProp",
                                            "desc": "Style definitions to be attributed to the marker label",
                                            "examples": [
                                                "{ height: '24px' }"
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "classes": {
                            "type": "String",
                            "desc": "Required CSS classes to be applied to the marker element"
                        },
                        "getStyle": {
                            "type": "Function",
                            "desc": "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
                            "params": {
                                "value": {
                                    "type": "Number",
                                    "desc": "The marker label equivalent model value",
                                    "required": true
                                }
                            },
                            "returns": {
                                "type": "Object",
                                "desc": "CSS style Object to apply to a marker element at respective model value"
                            }
                        }
                    }
                }
            },
            "events": {
                "change": {
                    "desc": "延迟模型值更改时发出（用户滑动后释放拇指）",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "pan": {
                    "desc": "当用户开始平移组件时触发",
                    "params": {
                        "phase": {
                            "type": "String",
                            "desc": "Phase of panning",
                            "values": [
                                "start",
                                "end"
                            ]
                        }
                    }
                },
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-time",
        "desc": "时间选择器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/time"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "landscape": {
                    "type": "Boolean",
                    "desc": "以横向模式显示组件",
                    "category": "behavior"
                },
                "mask": {
                    "type": "String",
                    "desc": "用于分析和格式化值的掩码（格式化字符串）",
                    "category": "model",
                    "default": "HH:mm",
                    "examples": [
                        "HH:mm:ss",
                        "YYYY-MM-DD HH:mm:ss",
                        "HH:mm MMMM Do, YYYY"
                    ],
                    "required": false
                },
                "locale": {
                    "type": "Object",
                    "desc": "区域设置格式选项",
                    "examples": [
                        ":locale=\"{ monthsShort: ['Ian', 'Feb', 'Mar', '...'] }\""
                    ],
                    "definition": {
                        "days": {
                            "type": "Array",
                            "desc": "List of full day names (DDDD), starting with Sunday",
                            "examples": [
                                "['Duminica', 'Luni', 'Marti', '...']"
                            ]
                        },
                        "daysShort": {
                            "type": "Array",
                            "desc": "List of short day names (DDD), starting with Sunday",
                            "examples": [
                                "['Dum', 'Lun', 'Mar', '...']"
                            ]
                        },
                        "months": {
                            "type": "Array",
                            "desc": "List of full month names (MMMM), starting with January",
                            "examples": [
                                "['Ianuarie', 'Februarie', 'Martie', '...']"
                            ]
                        },
                        "monthsShort": {
                            "type": "Array",
                            "desc": "List of short month names (MMM), starting with January",
                            "examples": [
                                "['Ian', 'Feb', 'Mar', '...']"
                            ]
                        }
                    },
                    "category": "model"
                },
                "calendar": {
                    "type": "String",
                    "desc": "指定日历类型",
                    "default": "gregorian",
                    "values": [
                        "gregorian",
                        "persian"
                    ],
                    "category": "model",
                    "required": false
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "model-value": {
                    "desc": "组件的时间；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "String",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"currentTime\""
                    ]
                },
                "format24h": {
                    "type": "Boolean",
                    "desc": "强制显示24小时时间，而不是AM/PM系统",
                    "default": "(based on Quasar lang language being used)",
                    "category": "behavior",
                    "required": false
                },
                "default-date": {
                    "type": "String",
                    "desc": "模型未填充（未定义或为null）时要使用的默认日期（YYYY/MM/DD格式）",
                    "default": "current day",
                    "examples": [
                        "1995/02/23"
                    ],
                    "category": "model",
                    "required": false
                },
                "options": {
                    "type": "Function",
                    "desc": "可选配置用户允许设置的时间；被“小时选项”、“分钟选项”和“秒选项”覆盖（如果已设置）；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "hr": {
                            "type": "Number",
                            "desc": "Hour"
                        },
                        "min": {
                            "type": [
                                "Number",
                                "null"
                            ],
                            "desc": "Minutes"
                        },
                        "sec": {
                            "type": [
                                "Number",
                                "null"
                            ],
                            "desc": "Seconds"
                        }
                    },
                    "returns": null,
                    "examples": [
                        ":options=\"(hr, min, sec) => hr <= 6\""
                    ],
                    "category": "behavior"
                },
                "hour-options": {
                    "type": "Array",
                    "desc": "可选地配置用户允许设置的小时数；覆盖“选项”道具（如果也设置了该道具）",
                    "examples": [
                        ":hour-options=\"[ 3, 6, 9 ]\""
                    ],
                    "category": "behavior"
                },
                "minute-options": {
                    "type": "Array",
                    "desc": "可选地配置用户允许设置的分钟数；覆盖“选项”道具（如果也设置了该道具）",
                    "examples": [
                        ":minute-options=\"[0, 15, 30, 45]\""
                    ],
                    "category": "behavior"
                },
                "second-options": {
                    "type": "Array",
                    "desc": "可选配置用户允许设置的秒数；覆盖“选项”道具（如果也设置了该道具）",
                    "examples": [
                        ":second-options=\"[0, 7, 10, 23]\""
                    ],
                    "category": "behavior"
                },
                "with-seconds": {
                    "type": "Boolean",
                    "desc": "允许将时间设置为秒",
                    "category": "model|behavior"
                },
                "now-btn": {
                    "type": "Boolean",
                    "desc": "显示选择当前时间的按钮",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "这是附加按钮的位置"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "null"
                            ],
                            "desc": "New model value",
                            "required": true
                        },
                        "details": {
                            "type": "Object",
                            "desc": "Object of properties on the new model",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The year"
                                },
                                "month": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The month"
                                },
                                "day": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The day of the month"
                                },
                                "hour": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The hour"
                                },
                                "minute": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The minute"
                                },
                                "second": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The second"
                                },
                                "millisecond": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The millisecond"
                                },
                                "changed": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Did the model change?"
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "setNow": {
                    "desc": "将模型更改为当前时刻"
                }
            }
        }
    },
    {
        "name": "q-date",
        "desc": "日期选择器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/date"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "landscape": {
                    "type": "Boolean",
                    "desc": "以横向模式显示组件",
                    "category": "behavior"
                },
                "mask": {
                    "type": "String",
                    "desc": "用于分析和格式化值的掩码（格式化字符串）",
                    "category": "model",
                    "default": "YYYY/MM/DD",
                    "examples": [
                        "YYYY-MM-DD",
                        "MMMM Do, YYYY",
                        "YYYY-MM-DD HH:mm:ss"
                    ],
                    "required": false
                },
                "locale": {
                    "type": "Object",
                    "desc": "区域设置格式选项",
                    "examples": [
                        ":locale=\"{ monthsShort: ['Ian', 'Feb', 'Mar', '...'] }\""
                    ],
                    "definition": {
                        "days": {
                            "type": "Array",
                            "desc": "List of full day names (DDDD), starting with Sunday",
                            "examples": [
                                "['Duminica', 'Luni', 'Marti', '...']"
                            ]
                        },
                        "daysShort": {
                            "type": "Array",
                            "desc": "List of short day names (DDD), starting with Sunday",
                            "examples": [
                                "['Dum', 'Lun', 'Mar', '...']"
                            ]
                        },
                        "months": {
                            "type": "Array",
                            "desc": "List of full month names (MMMM), starting with January",
                            "examples": [
                                "['Ianuarie', 'Februarie', 'Martie', '...']"
                            ]
                        },
                        "monthsShort": {
                            "type": "Array",
                            "desc": "List of short month names (MMM), starting with January",
                            "examples": [
                                "['Ian', 'Feb', 'Mar', '...']"
                            ]
                        }
                    },
                    "category": "model"
                },
                "calendar": {
                    "type": "String",
                    "desc": "指定日历类型",
                    "default": "gregorian",
                    "values": [
                        "gregorian",
                        "persian"
                    ],
                    "category": "model",
                    "required": false
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "model-value": {
                    "desc": "组件的日期；如果使用“multiple”道具，则必须为Array；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "String",
                        "Array",
                        "Object",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"myDate\"",
                        "v-model=\"[myDate1, myDate2]\"",
                        "v-model=\"[{ from: myDateFrom, to: myDateTo }]\"",
                        "v-model=\"[myDate1, { from: myDateFrom, to: myDateTo }, myDate2]\""
                    ]
                },
                "title": {
                    "type": "String",
                    "desc": "指定时，它将覆盖默认的标题；不处于“最小”模式时有意义",
                    "examples": [
                        "Birthday"
                    ],
                    "category": "content"
                },
                "subtitle": {
                    "type": "String",
                    "desc": "指定时，它将覆盖默认的标题副标题；不处于“最小”模式时有意义",
                    "examples": [
                        "John Doe"
                    ],
                    "category": "content"
                },
                "default-year-month": {
                    "type": "String",
                    "desc": "当模型未填充（未定义或为空）时，要显示的默认年份和月份（YYYY/MM格式）；请确保它在导航最小/最大年月内（如果使用它们）",
                    "examples": [
                        "1986/02"
                    ],
                    "category": "model"
                },
                "default-view": {
                    "type": "String",
                    "desc": "默认情况下将显示的视图",
                    "default": "Calendar",
                    "values": [
                        "Calendar",
                        "Months",
                        "Years"
                    ],
                    "category": "model",
                    "required": false
                },
                "years-in-month-view": {
                    "type": "Boolean",
                    "desc": "在月份视图中显示年份选择器",
                    "category": "behavior"
                },
                "events": {
                    "type": [
                        "Array",
                        "Function"
                    ],
                    "desc": "要在日历上突出显示的事件列表；如果使用函数，它将日期作为字符串接收，并且必须返回布尔值（匹配与否）；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "params": {
                        "date": {
                            "type": "String",
                            "desc": "The current date being processed.",
                            "examples": [
                                "2018/11/05",
                                "2021/10/25"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, the current date will be highlighted"
                    },
                    "examples": [
                        ":events=\"['2018/11/05', '2018/11/06', '2018/11/09', '2018/11/23']\"",
                        ":events=\"date => date[9] % 3 === 0\""
                    ],
                    "category": "model"
                },
                "event-color": {
                    "type": [
                        "String",
                        "Function"
                    ],
                    "desc": "颜色名称（来自Quasar调色板）；如果使用函数，它将日期作为字符串接收，并且必须返回字符串（接收日期的颜色）；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "params": {
                        "date": {
                            "type": "String",
                            "desc": "The current date being processed.",
                            "examples": [
                                "2018/11/05",
                                "2021/10/25"
                            ]
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "Color for the current date.",
                        "examples": [
                            "teal",
                            "orange"
                        ]
                    },
                    "examples": [
                        "teal-10",
                        ":event-color=\"(date) => date[9] % 2 === 0 ? 'teal' : 'orange'\""
                    ],
                    "category": "style"
                },
                "options": {
                    "type": [
                        "Array",
                        "Function"
                    ],
                    "desc": "可选地配置可选择的日期；如果使用函数，它将日期作为字符串接收，并且必须返回布尔值（日期是否可接受）；如果使用一个函数，那么为了获得最佳性能，请从您的范围中引用它，不要内联定义它；与“范围”道具不兼容",
                    "params": {
                        "date": {
                            "type": "String",
                            "desc": "The current date being processed.",
                            "examples": [
                                "2018/11/05",
                                "2021/10/25"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, the current date will be made available for selection"
                    },
                    "examples": [
                        ":options=\"['2018/11/05', '2018/11/12', '2018/11/19', '2018/11/26' ]\"",
                        ":options=\"date => date[9] % 3 === 0\"",
                        ":options=\"date => date >= '2018/11/03' && date <= '2018/11/15'\""
                    ],
                    "category": "model"
                },
                "navigation-min-year-month": {
                    "type": "String",
                    "desc": "锁定用户在特定年份+月份以下导航（YYYY/MM格式）；此道具不用于校正模型；您可能还想使用“默认年-月”道具",
                    "examples": [
                        "2020/07"
                    ],
                    "category": "selection"
                },
                "navigation-max-year-month": {
                    "type": "String",
                    "desc": "锁定用户在特定年份+月份以上导航（YYYY/MM格式）；此道具不用于校正模型；您可能还想使用“默认年-月”道具",
                    "examples": [
                        "2020/10"
                    ],
                    "category": "selection"
                },
                "no-unset": {
                    "type": "Boolean",
                    "desc": "取消选择日期的功能；它不适用于在已经选择的日期上选择范围",
                    "category": "selection"
                },
                "first-day-of-week": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "设置一周中被视为第一天的日期（0-周日，1-周一，…）；这一天将显示在日历的最左列",
                    "default": "(based on configured Quasar lang language)",
                    "examples": [
                        "first-day-of-week=\"1\"",
                        ":first-day-of-week=\"selectedFirstDayOfTheWeek\""
                    ],
                    "category": "model",
                    "required": false
                },
                "today-btn": {
                    "type": "Boolean",
                    "desc": "显示选择当前日期的按钮",
                    "category": "content"
                },
                "minimal": {
                    "type": "Boolean",
                    "desc": "不显示标题",
                    "category": "content"
                },
                "multiple": {
                    "type": "Boolean",
                    "desc": "允许多选；模型必须是数组",
                    "category": "model|selection"
                },
                "range": {
                    "type": "Boolean",
                    "desc": "允许范围选择；与“options”道具部分兼容：选定的范围也可能包括“不可选择”的天数",
                    "category": "model|selection"
                },
                "emit-immediately": {
                    "type": "Boolean",
                    "desc": "用户浏览月份和年份时也会发出模型；仅用于单选（非多选，非范围）",
                    "category": "model"
                }
            },
            "slots": {
                "default": {
                    "desc": "这是附加按钮的位置"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "Array",
                                "Object",
                                "null"
                            ],
                            "desc": "New model value",
                            "required": true
                        },
                        "reason": {
                            "type": "String",
                            "desc": "Reason of the user interaction (what was picked)",
                            "values": [
                                "add-day",
                                "remove-day",
                                "add-range",
                                "remove-range",
                                "mask",
                                "locale",
                                "year",
                                "month"
                            ]
                        },
                        "details": {
                            "type": "Object",
                            "desc": "Object of properties on the new model",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The year of the date that the user has clicked/tapped on"
                                },
                                "month": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The month of the date that the user has clicked/tapped on"
                                },
                                "day": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The day of the month that the user has clicked/tapped on"
                                },
                                "from": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "Object of properties of the range starting point (only if range)",
                                    "definition": {
                                        "year": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The year"
                                        },
                                        "month": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The month"
                                        },
                                        "day": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The day of month"
                                        }
                                    }
                                },
                                "to": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "Object of properties of the range ending point (only if range)",
                                    "definition": {
                                        "year": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The year"
                                        },
                                        "month": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The month"
                                        },
                                        "day": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The day of month"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "navigation": {
                    "desc": "当用户导航到不同的月份或年份时（甚至当模型从外部来源更改时）发出",
                    "params": {
                        "view": {
                            "type": "Object",
                            "desc": "Definition of the current view (year, month)",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The year"
                                },
                                "month": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The month"
                                }
                            }
                        }
                    }
                },
                "range-start": {
                    "desc": "用户已开始范围选择",
                    "params": {
                        "from": {
                            "type": "Object",
                            "desc": "Definition of date from where the range begins",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The year"
                                },
                                "month": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The month"
                                },
                                "day": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The day of month"
                                }
                            }
                        }
                    }
                },
                "range-end": {
                    "desc": "用户已结束范围选择",
                    "params": {
                        "range": {
                            "type": "Object",
                            "desc": "Definition of the range",
                            "definition": {
                                "from": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Definition of date from where the range begins",
                                    "definition": {
                                        "year": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The year"
                                        },
                                        "month": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The month"
                                        },
                                        "day": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The day of month"
                                        }
                                    }
                                },
                                "to": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Definition of date to where the range ends",
                                    "definition": {
                                        "year": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The year"
                                        },
                                        "month": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The month"
                                        },
                                        "day": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "The day of month"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "setToday": {
                    "desc": "将模型更改为今天"
                },
                "setView": {
                    "desc": "更改当前视图",
                    "params": {
                        "view": {
                            "type": "String",
                            "required": true,
                            "desc": "QDate view name",
                            "values": [
                                "Calendar",
                                "Months",
                                "Years"
                            ]
                        }
                    }
                },
                "offsetCalendar": {
                    "desc": "递增或递减日历视图的月份或年份",
                    "params": {
                        "type": {
                            "type": "String",
                            "required": true,
                            "desc": "What to increment/decrement",
                            "values": [
                                "month",
                                "year"
                            ]
                        },
                        "descending": {
                            "type": "Boolean",
                            "desc": "Decrement?"
                        }
                    }
                },
                "setCalendarTo": {
                    "desc": "更改“日历”视图的当前年份和月份；如果使用导航最小/最大年-月并将当前视图设置为日历，则会更正此错误",
                    "params": {
                        "year": {
                            "type": "Number",
                            "desc": "The year"
                        },
                        "month": {
                            "type": "Number",
                            "desc": "The month"
                        }
                    }
                },
                "setEditingRange": {
                    "desc": "配置当前编辑范围",
                    "params": {
                        "from": {
                            "type": "Object",
                            "desc": "Definition of date from where the range begins",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "desc": "The year"
                                },
                                "month": {
                                    "type": "Number",
                                    "desc": "The month"
                                },
                                "day": {
                                    "type": "Number",
                                    "desc": "The day of month"
                                }
                            }
                        },
                        "to": {
                            "type": "Object",
                            "desc": "Definition of date to where the range ends",
                            "definition": {
                                "year": {
                                    "type": "Number",
                                    "desc": "The year"
                                },
                                "month": {
                                    "type": "Number",
                                    "desc": "The month"
                                },
                                "day": {
                                    "type": "Number",
                                    "desc": "The day of month"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-icon",
        "desc": "图标",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/icon"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "tag": {
                    "type": "String",
                    "desc": "要呈现的HTML标记，除非没有提供图标或是svg图标",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "i"
                    ],
                    "category": "content",
                    "default": "i",
                    "required": false
                },
                "name": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "model"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "left": {
                    "type": "Boolean",
                    "desc": "如果图标在某个东西的左侧，则很有用：在图标的右侧应用标准边距",
                    "category": "content"
                },
                "right": {
                    "type": "Boolean",
                    "desc": "如果图标在某个东西的右侧，则很有用：在图标的左侧应用标准边距",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QTooltip或QMenu"
                }
            }
        }
    },
    {
        "name": "q-img",
        "desc": "图像",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/img"
            },
            "props": {
                "ratio": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "强制零部件保持纵横比",
                    "examples": [
                        ":ratio=\"4/3\"",
                        ":ratio=\"16/9\"",
                        "ratio=\"1\"",
                        "(Number format) :ratio=\"16/9\"",
                        "(String format) ratio=\"1\""
                    ],
                    "category": "style"
                },
                "src": {
                    "type": "String",
                    "desc": "图像的路径",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"img/something.png\"",
                        "(assets folder) src=\"~assets/my-img.gif\"",
                        "(relative path format) :src=\"require('./my_img.jpg')\"",
                        "(URL) src=\"https://placeimg.com/500/300/nature\""
                    ],
                    "category": "model"
                },
                "srcset": {
                    "type": "String",
                    "desc": "语法与＜img＞srcset属性相同",
                    "link": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes",
                    "examples": [
                        "elva-fairy-320w.jpg 320w, elva-fairy-480w.jpg 480w"
                    ],
                    "category": "model"
                },
                "sizes": {
                    "type": "String",
                    "desc": "语法与＜img＞size属性相同",
                    "link": "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes",
                    "examples": [
                        "(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
                    ],
                    "category": "model"
                },
                "placeholder-src": {
                    "type": "String",
                    "desc": "在等待加载图像时，可以使用占位符图像",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"img/some-placeholder.png\"",
                        "(assets folder) src=\"~assets/my-placeholder.gif\"",
                        "(relative path format) :src=\"require('./placeholder.jpg')\"",
                        "(URL) src=\"https://placeimg.com/500/300/nature\""
                    ],
                    "category": "model"
                },
                "initial-ratio": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "当未指定“ratio”但仍需要初始纵横比时使用它",
                    "default": "16/9",
                    "examples": [
                        "(Number format) :initial-ratio=\"16/9\"",
                        "(String format) initial-ratio=\"1\""
                    ],
                    "category": "style",
                    "required": false
                },
                "width": {
                    "type": "String",
                    "desc": "强制图像宽度；还必须包括单位（px或%）",
                    "examples": [
                        "280px",
                        "70%"
                    ],
                    "category": "style"
                },
                "height": {
                    "type": "String",
                    "desc": "强制图像高度；还必须包括单位（px或%）",
                    "examples": [
                        "280px",
                        "70%"
                    ],
                    "category": "style"
                },
                "loading": {
                    "type": "String",
                    "desc": "懒散的或即时的负荷；与＜img＞加载属性语法相同",
                    "default": "lazy",
                    "values": [
                        "lazy",
                        "eager"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "crossorigin": {
                    "type": "String",
                    "desc": "语法与＜img＞交叉原点属性相同",
                    "values": [
                        "anonymous",
                        "use-credentials"
                    ],
                    "category": "behavior"
                },
                "decoding": {
                    "type": "String",
                    "desc": "语法与＜img＞解码属性相同",
                    "values": [
                        "sync",
                        "async",
                        "auto"
                    ],
                    "category": "behavior"
                },
                "referrerpolicy": {
                    "type": "String",
                    "desc": "语法与＜img＞referrpolicy属性相同",
                    "values": [
                        "no-referrer",
                        "no-referrer-when-downgrade",
                        "origin",
                        "origin-when-cross-origin",
                        "same-origin",
                        "strict-origin",
                        "strict-origin-when-cross-origin",
                        "unsafe-url"
                    ],
                    "category": "behavior"
                },
                "fetchpriority": {
                    "type": "String",
                    "desc": "提供获取图像时要使用的相对优先级的提示",
                    "default": "auto",
                    "values": [
                        "high",
                        "low",
                        "auto"
                    ],
                    "category": "behavior",
                    "addedIn": "v2.6.6",
                    "required": false
                },
                "fit": {
                    "type": "String",
                    "desc": "图像将如何融入容器；物体适合道具的等效物；可以与“位置”道具协调",
                    "default": "cover",
                    "values": [
                        "cover",
                        "fill",
                        "contain",
                        "none",
                        "scale-down"
                    ],
                    "category": "style",
                    "required": false
                },
                "position": {
                    "type": "String",
                    "desc": "将图像对齐到容器中；对象位置CSS道具的等效项",
                    "default": "50% 50%",
                    "examples": [
                        "0 0",
                        "20px 50px"
                    ],
                    "category": "style",
                    "required": false
                },
                "alt": {
                    "type": "String",
                    "desc": "如果图像无法显示，则为图像指定替代文本",
                    "examples": [
                        "Two cats"
                    ],
                    "category": "content"
                },
                "draggable": {
                    "type": "Boolean",
                    "desc": "添加本机“可拖动”属性",
                    "category": "behavior"
                },
                "img-class": {
                    "type": "String",
                    "desc": "要归属于本机img元素的CSS类",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                },
                "img-style": {
                    "type": "Object",
                    "tsType": "VueStyleObjectProp",
                    "desc": "将CSS应用于本机img元素",
                    "examples": [
                        ":img-style=\"{ transform: 'rotate(45deg)' }\" "
                    ],
                    "category": "style"
                },
                "spinner-color": {
                    "type": "String",
                    "desc": "默认微调器的颜色名称（除非使用“加载”插槽）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "spinner-size": {
                    "type": "String",
                    "desc": "默认Spinner的大小（以CSS为单位，包括单元名称）（除非使用“加载”插槽）",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "no-spinner": {
                    "type": "Boolean",
                    "desc": "在等待加载图像时，不要显示默认微调器；当有一个插槽时，它会被“加载”插槽覆盖",
                    "category": "behavior"
                },
                "no-native-menu": {
                    "type": "Boolean",
                    "desc": "禁用映像的本机上下文菜单",
                    "category": "behavior"
                },
                "no-transition": {
                    "type": "Boolean",
                    "desc": "在新旧图像之间切换时禁用默认转换",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认插槽可用于字幕。参见示例"
                },
                "loading": {
                    "desc": "加载图像时，此插槽显示在组件的顶部；建议：微调器或文本"
                },
                "error": {
                    "desc": "无法加载图像时使用的可选插槽；确保通过CSS为组件指定最小高度和最小宽度"
                }
            },
            "events": {
                "load": {
                    "desc": "当浏览器加载图像时发出",
                    "params": {
                        "src": {
                            "type": "String",
                            "desc": "URL of image that has been loaded; useful when using 'srcset' and/or 'sizes'",
                            "examples": [
                                "https://some-site.net/some-img.gif"
                            ]
                        }
                    }
                },
                "error": {
                    "desc": "当浏览器无法加载图像时发出",
                    "params": {
                        "src": {
                            "type": "Error",
                            "desc": "JS Error object"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-infinite-scroll",
        "desc": "无限滚动",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/infinite-scroll"
            },
            "props": {
                "offset": {
                    "type": "Number",
                    "desc": "组件应提前开始加载更多内容的“无限滚动”容器底部的偏移量（像素）",
                    "default": 500,
                    "category": "behavior",
                    "required": false
                },
                "debounce": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "去抖动量（以毫秒为单位）",
                    "default": 100,
                    "category": "behavior",
                    "required": false
                },
                "initial-index": {
                    "type": "Number",
                    "desc": "初始化分页索引（用于@load事件）",
                    "default": 0,
                    "category": "behavior",
                    "required": false
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "滚动区域的行为应该像信使一样——从滚动到底部开始，到达顶部时加载",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                },
                "loading": {
                    "desc": "加载内容时显示内容的插槽；示例：QSpinner"
                }
            },
            "events": {
                "load": {
                    "desc": "当无限滚动需要加载更多数据时发出",
                    "params": {
                        "index": {
                            "type": "Number",
                            "desc": "The index parameter can be used to make some sort of pagination on the content you load. It takes numeric values starting with 1 and incrementing with each call"
                        },
                        "done": {
                            "type": "Function",
                            "desc": "Function to call when you made all necessary updates. DO NOT forget to call it otherwise your loading message will continue to be displayed",
                            "params": {
                                "stop": {
                                    "type": "Boolean",
                                    "desc": "Stops QInfiniteScroll if it's Boolean 'true'; Specify it in case there's nothing more to load"
                                }
                            },
                            "returns": null
                        }
                    }
                }
            },
            "methods": {
                "poll": {
                    "desc": "检查滚动位置并在必要时加载更多内容"
                },
                "trigger": {
                    "desc": "告诉无限滚动加载更多内容，无论滚动位置如何"
                },
                "reset": {
                    "desc": "将调用索引重置为0"
                },
                "stop": {
                    "desc": "停止工作，无论滚动位置如何"
                },
                "resume": {
                    "desc": "开始工作。调用时检查滚动位置，如果触发，则加载更多内容"
                },
                "setIndex": {
                    "desc": "覆盖当前分页索引",
                    "params": {
                        "newIndex": {
                            "type": "Number",
                            "desc": "New pagination index",
                            "required": true
                        }
                    }
                },
                "updateScrollTarget": {
                    "desc": "更新滚动目标；当父元素发生变化从而滚动目标也发生变化时，这很有用"
                }
            }
        }
    },
    {
        "name": "q-inner-loading",
        "desc": "内部加载",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/inner-loading"
            },
            "props": {
                "transition-show": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "required": false
                },
                "size": {
                    "type": "String",
                    "desc": "内部Spinner的大小（以CSS为单位），包括单元名称或标准大小名称（xs|sm|md|lg|xl）（除非使用默认插槽）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style",
                    "default": "42px",
                    "required": false
                },
                "showing": {
                    "type": "Boolean",
                    "desc": "状态-是否加载",
                    "category": "state"
                },
                "color": {
                    "type": "String",
                    "desc": "内部微调器的Quasar调色板中组件的颜色名称（除非使用默认插槽）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "label": {
                    "type": "String",
                    "desc": "添加标签；使用默认插槽时获取覆盖",
                    "examples": [
                        "Please wait..."
                    ],
                    "category": "label",
                    "addedIn": "v2.2"
                },
                "label-class": {
                    "type": "String",
                    "desc": "将CSS类添加到标签中；仅适用于“标签”道具",
                    "examples": [
                        "text-red q-mt-xl"
                    ],
                    "category": "label",
                    "addedIn": "v2.2"
                },
                "label-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "将自定义样式应用于标签；仅适用于“标签”道具",
                    "examples": [
                        "font-size: 28px",
                        ":label-style=\"{ color: '#ff0000' }\""
                    ],
                    "category": "label",
                    "addedIn": "v2.2"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认插槽用于替换默认Spinner；建议：微调器或文本"
                }
            }
        }
    },
    {
        "name": "q-intersection",
        "desc": "交叉",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/intersection"
            },
            "props": {
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "span",
                        "blockquote"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                },
                "once": {
                    "type": "Boolean",
                    "desc": "只触发一次",
                    "category": "behavior"
                },
                "ssr-prerender": {
                    "type": "Boolean",
                    "desc": "如果使用SSR，则在服务器端预渲染内容（用于在折叠内容上方预渲染）",
                    "category": "behavior"
                },
                "root": {
                    "type": "Element",
                    "desc": "[交叉点API根道具]用于将视口的替代项定义为根（通过其DOM元素）；重要的是要记住，根需要是观测元素的祖先",
                    "examples": [
                        "$refs.myTable.$el",
                        "getElementById(\"myTable\")"
                    ],
                    "category": "behavior"
                },
                "margin": {
                    "type": "String",
                    "desc": "[交叉点API rootMargin prop]允许您指定根的边缘，有效地允许您扩大或缩小用于交叉点的区域",
                    "examples": [
                        "-20px 0px",
                        "10px 20px 30px 40px"
                    ],
                    "category": "behavior"
                },
                "threshold": {
                    "type": [
                        "Array",
                        "Number"
                    ],
                    "desc": "[交叉点API阈值道具]触发的阈值，指定为观察元素（可见面积/总面积）的比率或比率列表",
                    "examples": [
                        "[ 0, 0.25, 0.5, 0.75, 1 ]",
                        ":threshold=\"1\""
                    ],
                    "category": "behavior"
                },
                "transition": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "behavior"
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "behavior",
                    "addedIn": "v2.3.1",
                    "required": false
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "禁用可观察的可见性（内容将保持原样，可见或隐藏）",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "visibility": {
                    "desc": "可见性更改时激发",
                    "params": {
                        "isVisible": {
                            "type": "Boolean",
                            "desc": "Visibility status (true/false)"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-knob",
        "desc": "球形进度条",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/knob"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "表示旋钮给定值的任何数字。使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Number",
                    "examples": [
                        "v-model=\"myValue\""
                    ]
                },
                "min": {
                    "type": "Number",
                    "desc": "模型（旋钮值）应开始的最小值",
                    "category": "model"
                },
                "max": {
                    "type": "Number",
                    "desc": "模型（旋钮值）应达到的最大值",
                    "category": "model"
                },
                "inner-min": {
                    "type": "Number",
                    "desc": "模型的内部最小值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要高于或等于“min”道具；默认为“min”道具",
                    "category": "model",
                    "addedIn": "v2.5.4"
                },
                "inner-max": {
                    "type": "Number",
                    "desc": "模型的内部最大值；如果您需要模型值位于轨迹的最小-最大值之内，请使用；需要低于或等于“最大”道具；默认为“最大”道具",
                    "category": "model",
                    "addedIn": "v2.5.4"
                },
                "step": {
                    "type": "Number",
                    "default": 1,
                    "desc": "一个数字，表示在调整旋钮时模型值的步长",
                    "category": "model",
                    "required": false
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "颠倒前进方向",
                    "category": "behavior"
                },
                "instant-feedback": {
                    "type": "Boolean",
                    "desc": "模型更改时没有动画",
                    "category": "behavior"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "center-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件中心部分的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件轨迹的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "font-size": {
                    "type": "String",
                    "desc": "以CSS为单位的文本大小，包括单位名称。建议：使用“em”单位与组件大小同步",
                    "default": "0.25em",
                    "examples": [
                        "1em",
                        "16px",
                        "2rem"
                    ],
                    "category": "style",
                    "required": false
                },
                "thickness": {
                    "type": "Number",
                    "default": 0.2,
                    "desc": "进度弧的厚度与部件尺寸之比（0.0<x<1.0）",
                    "category": "style",
                    "required": false
                },
                "angle": {
                    "type": "Number",
                    "desc": "旋转进度弧的角度",
                    "default": 0,
                    "category": "content",
                    "required": false
                },
                "show-value": {
                    "type": "Boolean",
                    "desc": "启用默认槽并使用它（如果可用），否则它将“值”道具显示为文本；确保文本有足够的空间显示在组件内部",
                    "category": "content|behavior"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "change": {
                    "desc": "在旋钮调整结束时激发，并提供模型的值",
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "New model value"
                        }
                    }
                },
                "drag-value": {
                    "desc": "拖动时模型的值仍在进行中",
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "New model value"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-linear-progress",
        "desc": "线性进度",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/linear-progress"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "value": {
                    "type": "Number",
                    "desc": "进度值（0.0<x<1.0）",
                    "default": 0,
                    "category": "model",
                    "required": false
                },
                "buffer": {
                    "type": "Number",
                    "desc": "可选缓冲区值（0.0<x<1.0）",
                    "category": "behavior"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "track-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件轨迹的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "前进方向相反",
                    "category": "behavior"
                },
                "stripe": {
                    "type": "Boolean",
                    "desc": "绘制条纹；仅用于确定状态（出于性能原因）",
                    "category": "content"
                },
                "indeterminate": {
                    "type": "Boolean",
                    "desc": "将组件置于不确定模式",
                    "category": "behavior"
                },
                "query": {
                    "type": "Boolean",
                    "desc": "将组件置于查询模式",
                    "category": "behavior"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为零部件的方形应用小的标准边界半径",
                    "category": "style"
                },
                "instant-feedback": {
                    "type": "Boolean",
                    "desc": "模型更改时没有转换",
                    "category": "behavior"
                },
                "animation-speed": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "动画速度（以毫秒为单位，无单位）",
                    "examples": [
                        500,
                        "1200"
                    ],
                    "category": "style",
                    "default": 2100,
                    "addedIn": "v2.3",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QTooltip"
                }
            }
        }
    },
    {
        "name": "q-list",
        "desc": "列表",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/list-and-list-items"
            },
            "props": {
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "separator": {
                    "type": "Boolean",
                    "desc": "在包含的项目之间应用分隔符",
                    "category": "content"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "padding": {
                    "type": "Boolean",
                    "desc": "在顶部和底部应用类似填充物的材质设计",
                    "category": "content"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "ul",
                        "ol"
                    ],
                    "category": "content",
                    "default": "div",
                    "addedIn": "v2.10.1",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是内容的去向；建议：QItem，Q扩展项。。。"
                }
            }
        }
    },
    {
        "name": "q-item",
        "desc": "列表项",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/list-and-list-items"
            },
            "props": {
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "exact": {
                    "type": "Boolean",
                    "desc": "相当于Vue路由器＜Router link＞的“精确”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-active-class"
                    ],
                    "category": "navigation"
                },
                "exact-active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-exact-active-class"
                    ],
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "https://quasar.dev"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；只能与'href'道具一起使用；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "active": {
                    "type": "Boolean",
                    "desc": "将项目置于“活动”状态",
                    "category": "state",
                    "default": null,
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "clickable": {
                    "type": "Boolean",
                    "desc": "QItem可点击吗？如果是这种情况，那么它将添加悬停效果并发出“点击”事件",
                    "category": "state"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "inset-level": {
                    "type": "Number",
                    "desc": "应用插入；当头像/左侧缺失，但您想将内容与其他有左侧的项目对齐时，或者当您正在构建菜单时，这很有用",
                    "examples": [
                        ":inset-level=\"1\""
                    ],
                    "category": "content"
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "tag": {
                    "type": "String",
                    "desc": "要呈现的HTML标记；建议：在封装Q复选框/QRadio/QLogge时使用“标签”，这样当用户点击/点击整个项目时，就会触发上述组件的型号更改",
                    "examples": [
                        "div",
                        "span",
                        "a",
                        "label",
                        "div"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                },
                "manual-focus": {
                    "type": "Boolean",
                    "desc": "将项目置于手动对焦状态；启用“聚焦”道具，该道具将决定项目是否聚焦，而不是依赖于本机悬停/聚焦状态",
                    "category": "state"
                },
                "focused": {
                    "type": "Boolean",
                    "desc": "仅当“手动聚焦”已启用/设置为true时，才确定聚焦状态",
                    "category": "state"
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是QItem的内容所在"
                }
            },
            "events": {
                "click": {
                    "desc": "单击组件时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object; If you are using route navigation ('to'/'replace' props) and you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
                        },
                        "go": {
                            "type": "Function",
                            "desc": "Available ONLY if you are using route navigation ('to'/'replace' props); When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
                            "required": false,
                            "addedIn": "v2.9",
                            "params": {
                                "opts": {
                                    "type": "Object",
                                    "desc": "Optional options",
                                    "required": false,
                                    "definition": {
                                        "to": {
                                            "type": [
                                                "String",
                                                "Object"
                                            ],
                                            "desc": "Equivalent to Vue Router <router-link> 'to' property; Specify it explicitly otherwise it will be set with same value as component's 'to' prop",
                                            "required": false,
                                            "examples": [
                                                "/home/dashboard",
                                                "{ name: 'my-route-name' }"
                                            ]
                                        },
                                        "replace": {
                                            "type": "Boolean",
                                            "desc": "Equivalent to Vue Router <router-link> 'replace' property; Specify it explicitly otherwise it will be set with same value as component's 'replace' prop",
                                            "required": false
                                        },
                                        "returnRouterError": {
                                            "type": "Boolean",
                                            "desc": "Return the router error, if any; Otherwise the returned Promise will always fulfill",
                                            "required": false
                                        }
                                    }
                                }
                            },
                            "returns": {
                                "type": "Promise<any>",
                                "desc": "Returns the router's navigation promise"
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-item-section",
        "desc": "列表项选项",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/list-and-list-items"
            },
            "props": {
                "avatar": {
                    "type": "Boolean",
                    "desc": "渲染化身项目侧面（不需要设置“侧面”道具）",
                    "category": "content"
                },
                "thumbnail": {
                    "type": "Boolean",
                    "desc": "侧面渲染缩略图项目（不需要设置“侧面”道具）",
                    "category": "content"
                },
                "side": {
                    "type": "Boolean",
                    "desc": "作为项的一侧进行渲染",
                    "category": "content"
                },
                "top": {
                    "type": "Boolean",
                    "desc": "将内容顶部对齐（适用于多行项目）",
                    "category": "content"
                },
                "no-wrap": {
                    "type": "Boolean",
                    "desc": "不换行文本（对项目的主要内容有用）",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "章节的实际内容"
                }
            }
        }
    },
    {
        "name": "q-item-label",
        "desc": "列表项选项",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/list-and-list-items"
            },
            "props": {
                "overline": {
                    "type": "Boolean",
                    "desc": "渲染覆盖线标签",
                    "category": "content"
                },
                "caption": {
                    "type": "Boolean",
                    "desc": "呈现标题标签",
                    "category": "content"
                },
                "header": {
                    "type": "Boolean",
                    "desc": "呈现标头标签",
                    "category": "content"
                },
                "lines": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "当指定行数上没有足够的空间进行渲染时，应用省略号；",
                    "category": "content|behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "标签的内容；建议：文本"
                }
            }
        }
    },
    {
        "name": "q-makeup-table",
        "desc": "表格",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/markup-table"
            },
            "props": {
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "separator": {
                    "type": "String",
                    "desc": "在行、列或所有单元格之间使用分隔符/边框",
                    "default": "horizontal",
                    "values": [
                        "horizontal",
                        "vertical",
                        "cell",
                        "none"
                    ],
                    "examples": [
                        "cell"
                    ],
                    "category": "content",
                    "required": false
                },
                "wrap-cells": {
                    "type": "Boolean",
                    "desc": "在表格单元格中换行文本",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-menu",
        "desc": "菜单",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/menu"
            },
            "props": {
                "transition-show": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "fade",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "required": false
                },
                "target": {
                    "type": [
                        "Boolean",
                        "String",
                        "Element"
                    ],
                    "desc": "配置目标元素以触发组件切换；'true表示启用父DOM元素，false表示禁用将事件附加到任何DOM元素；通过使用String（CSS选择器）或DOM元素，它将事件附加到指定的DOM元素（如果存在）",
                    "default": true,
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "(CSS selector)",
                        "(DOM Element)"
                    ],
                    "examples": [
                        ":target=\"false\"",
                        ":target=\"$refs.target\"",
                        "target=\".my-parent\"",
                        "target=\"#target-id\""
                    ],
                    "category": "behavior",
                    "required": false
                },
                "no-parent-event": {
                    "type": "Boolean",
                    "desc": "跳过将事件附加到目标DOM元素（触发元素显示）",
                    "category": "behavior"
                },
                "context-menu": {
                    "type": "Boolean",
                    "desc": "允许组件的行为类似于上下文菜单，该菜单通过鼠标右键单击（或长按移动设备）打开",
                    "category": "behavior"
                },
                "model-value": {
                    "type": "Boolean",
                    "desc": "定义显示/隐藏状态的组件的模型；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "category": "model"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "fit": {
                    "type": "Boolean",
                    "desc": "允许菜单至少与其目标的全宽相匹配",
                    "category": "position"
                },
                "cover": {
                    "type": "Boolean",
                    "desc": "允许菜单覆盖其目标。使用时，“self”和“fit”道具不再有效",
                    "category": "position"
                },
                "anchor": {
                    "type": "String",
                    "desc": "设置菜单相对于目标的起始位置或锚点的两个值",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "self": {
                    "type": "String",
                    "desc": "两个值设置菜单自身相对于目标的位置",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "offset": {
                    "type": "Array",
                    "desc": "两个数字的数组，以像素为单位水平和垂直偏移菜单",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "position"
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                },
                "touch-position": {
                    "type": "Boolean",
                    "desc": "当单击或触摸菜单的目标时，允许通过鼠标位置设置目标位置",
                    "category": "behavior"
                },
                "persistent": {
                    "type": "Boolean",
                    "desc": "允许菜单不被菜单外的点击/轻击或按ESC键取消",
                    "category": "behavior"
                },
                "no-route-dismiss": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会关闭弹出窗口；如果还设置了“persistent”道具，则无需设置",
                    "category": "behavior"
                },
                "auto-close": {
                    "type": "Boolean",
                    "desc": "允许在菜单中单击/点击以关闭它；很有用，而不是将事件附加到单击/点击时应关闭菜单的每个菜单项",
                    "category": "behavior"
                },
                "separate-close-popup": {
                    "type": "Boolean",
                    "desc": "与父菜单分离，将其标记为v-close-popup的单独关闭点（如果没有这一点，链接菜单将全部关闭）",
                    "category": "behavior"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "强制内容具有方形边框",
                    "category": "style"
                },
                "no-refocus": {
                    "type": "Boolean",
                    "desc": "（辅助功能）当Menu被隐藏时，不要将焦点重新集中在以前有焦点的DOM元素上",
                    "category": "behavior"
                },
                "no-focus": {
                    "type": "Boolean",
                    "desc": "（辅助功能）显示菜单时，不要将焦点切换到菜单上",
                    "category": "behavior"
                },
                "max-height": {
                    "type": "String",
                    "desc": "菜单的最大高度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "max-width": {
                    "type": "String",
                    "desc": "菜单的最大宽度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏状态更改时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "escape-key": {
                    "desc": "按下ESC键时发出；如果Menu为“persistent”，则不会发出"
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                },
                "updatePosition": {
                    "desc": "在某些自定义场景中，Quasar无法自动重新定位菜单而不会出现显著的性能缺陷，因此最佳解决方案是在需要时调用此方法"
                },
                "focus": {
                    "desc": "焦点菜单；如果您有具有自动对焦属性的内容，它将直接对其进行对焦"
                }
            },
            "computedProps": {
                "contentEl": {
                    "type": "Element",
                    "desc": "渲染内容的DOM元素",
                    "addedIn": "v2.10.1"
                }
            }
        }
    },
    {
        "name": "q-no-ssr",
        "desc": "无ssr",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/no-ssr"
            },
            "props": {
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "span",
                        "blockquote"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                },
                "placeholder": {
                    "type": "String",
                    "desc": "要在服务器端渲染上显示的文本（除非使用“占位符”插槽）",
                    "examples": [
                        "This is server-side only"
                    ],
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认槽用于在客户端上呈现内容"
                },
                "placeholder": {
                    "desc": "在服务器端渲染中用作占位符的插槽，将被客户端上的默认插槽取代；覆盖“占位符”道具"
                }
            }
        }
    },
    {
        "name": "q-resize-observer",
        "desc": "大小侦听器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/resize-observer"
            },
            "props": {
                "debounce": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "去抖动量（以毫秒为单位）",
                    "default": 100,
                    "examples": [
                        "0",
                        "530"
                    ],
                    "category": "behavior",
                    "required": false
                }
            },
            "events": {
                "resize": {
                    "desc": "父元素已调整大小（宽度或高度已更改）",
                    "params": {
                        "size": {
                            "type": "Object",
                            "desc": "New size",
                            "definition": {
                                "height": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Layout height"
                                },
                                "width": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Layout width"
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "trigger": {
                    "desc": "发出“调整大小”事件",
                    "params": {
                        "immediately": {
                            "type": "Boolean",
                            "desc": "Skip over the debounce amount"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-scroll-observer",
        "desc": "滚动侦听器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/scroll-observer"
            },
            "props": {
                "debounce": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "去抖动量（以毫秒为单位）",
                    "examples": [
                        "0",
                        "530"
                    ],
                    "category": "behavior"
                },
                "axis": {
                    "type": "String",
                    "desc": "检测更改的轴",
                    "values": [
                        "both",
                        "vertical",
                        "horizontal"
                    ],
                    "default": "vertical",
                    "category": "behavior",
                    "required": false
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                }
            },
            "events": {
                "scroll": {
                    "desc": "滚动位置更改时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Scroll details",
                            "definition": {
                                "position": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Scroll offset (from top and left)",
                                    "definition": {
                                        "top": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Scroll offset from top (vertical)"
                                        },
                                        "left": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Scroll offset from left (horizontal)"
                                        }
                                    }
                                },
                                "direction": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Direction of scroll",
                                    "values": [
                                        "up",
                                        "down",
                                        "left",
                                        "right"
                                    ]
                                },
                                "directionChanged": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Has scroll direction changed since event was last emitted?"
                                },
                                "delta": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Delta of distance (in pixels) since event was last emitted",
                                    "definition": {
                                        "top": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Vertical delta distance since event was last emitted"
                                        },
                                        "left": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Horizontal delta distance since event was last emitted"
                                        }
                                    }
                                },
                                "inflectionPoint": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Last scroll offset where scroll direction has changed",
                                    "definition": {
                                        "top": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Scroll offset from top (vertical)"
                                        },
                                        "left": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Scroll offset from left (horizontal)"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "trigger": {
                    "desc": "发出“滚动”事件",
                    "params": {
                        "immediately": {
                            "type": "Boolean",
                            "desc": "Skip over the debounce amount"
                        }
                    }
                },
                "getPosition": {
                    "desc": "以Object的形式获取当前滚动的详细信息：｛position，direction，directionChanged，inflectionPoint｝"
                }
            }
        }
    },
    {
        "name": "q-pagination",
        "desc": "分页",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/pagination"
            },
            "props": {
                "model-value": {
                    "desc": "当前页面（必须介于最小值/最大值之间）",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Number"
                },
                "min": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "最小页面（必须低于“max”）",
                    "default": 1,
                    "category": "model",
                    "required": false
                },
                "max": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "最后一页的页数（必须大于“min”）",
                    "required": true,
                    "category": "model"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色（当您将其与“输入”道具一起使用时很有用）",
                    "category": "style"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的按钮大小，包括单元名称",
                    "examples": [
                        "20px"
                    ],
                    "category": "style"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "input": {
                    "type": "Boolean",
                    "desc": "使用输入而不是按钮",
                    "category": "content"
                },
                "icon-prev": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-next": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-first": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-last": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "to-fn": {
                    "type": "Function",
                    "desc": "为页面按钮生成链接；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "page": {
                            "type": "Number",
                            "desc": "Page number to navigate to"
                        }
                    },
                    "returns": {
                        "type": [
                            "Object",
                            "String"
                        ],
                        "desc": "Object or String that can be passed to a <router-link> as `to` parameter"
                    },
                    "examples": [
                        ":to-fn=\"page => ({ query: { page } })\""
                    ],
                    "category": "content"
                },
                "boundary-links": {
                    "type": "Boolean",
                    "desc": "显示边界按钮链接",
                    "category": "content"
                },
                "boundary-numbers": {
                    "type": "Boolean",
                    "desc": "始终显示第一页和最后一页按钮（如果不使用“输入”）",
                    "category": "content"
                },
                "direction-links": {
                    "type": "Boolean",
                    "desc": "显示方向按钮",
                    "category": "content"
                },
                "ellipses": {
                    "type": "Boolean",
                    "desc": "页面可用时显示省略号（…）",
                    "category": "content"
                },
                "max-pages": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "default": 0,
                    "desc": "一次显示的最大页面链接数；0表示无限",
                    "category": "content",
                    "required": false
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "对非活动按钮使用“平面”设计（这是默认选项）",
                    "category": "style"
                },
                "outline": {
                    "type": "Boolean",
                    "desc": "对非活动按钮使用“轮廓”设计",
                    "category": "style"
                },
                "unelevated": {
                    "type": "Boolean",
                    "desc": "移除非活动按钮的阴影",
                    "category": "style"
                },
                "push": {
                    "type": "Boolean",
                    "desc": "非活动按钮采用“推”式设计",
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "非活动按钮的Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "primary",
                    "required": false
                },
                "text-color": {
                    "type": "String",
                    "desc": "ACTIVE按钮的Quasar调色板中的文本颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "active-design": {
                    "type": "String",
                    "desc": "活动按钮的设计，类似于平面/轮廓/按钮/无升降道具（但这些用于非活动按钮）",
                    "values": [
                        "flat",
                        "outline",
                        "push",
                        "unelevated"
                    ],
                    "category": "style",
                    "addedIn": "v2.10"
                },
                "active-color": {
                    "type": "String",
                    "desc": "ACTIVE按钮的Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "primary",
                    "required": false
                },
                "active-text-color": {
                    "type": "String",
                    "desc": "ACTIVE按钮的Quasar调色板中的文本颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "round": {
                    "type": "Boolean",
                    "desc": "为所有按钮制作一个圆形按钮",
                    "category": "style"
                },
                "rounded": {
                    "type": "Boolean",
                    "desc": "为所有按钮的方形按钮应用更突出的边框半径",
                    "category": "style"
                },
                "glossy": {
                    "type": "Boolean",
                    "desc": "为所有按钮应用光泽效果",
                    "category": "style"
                },
                "gutter": {
                    "type": "String",
                    "desc": "应用自定义檐沟；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）",
                    "default": "2px",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg",
                        "2px 2px 5px 7px"
                    ],
                    "category": "style",
                    "addedIn": "v2.10",
                    "required": false
                },
                "padding": {
                    "type": "String",
                    "desc": "应用自定义填充（垂直[水平]）；以CSS为单位的大小，包括单元名称或标准大小名称（none|xs|sm|md|lg|xl）；设置时还删除最小宽度和高度",
                    "examples": [
                        "16px",
                        "10px 5px",
                        "2rem",
                        "xs",
                        "md lg",
                        "2px 2px 5px 7px"
                    ],
                    "category": "style"
                },
                "input-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于输入的样式定义（如果使用）",
                    "examples": [
                        "background-color: #ff0000",
                        ":input-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "input-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于输入的类定义（如果使用）",
                    "examples": [
                        "my-special-class",
                        ":input-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置按钮材料波纹（通过将其设置为“false”或提供配置对象来禁用它）；不适用于边界和省略号按钮",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "set": {
                    "desc": "直接转到指定页面",
                    "params": {
                        "pageNumber": {
                            "type": "Number",
                            "desc": "Page number to go to"
                        }
                    }
                },
                "setByOffset": {
                    "desc": "按偏移量增加/减少当前页面",
                    "params": {
                        "offset": {
                            "type": "Number",
                            "desc": "Offset page, can be negative or positive"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-parallax",
        "desc": "视差",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/parallax"
            },
            "props": {
                "src": {
                    "type": "String",
                    "desc": "映像的路径（除非使用了“媒体”插槽）",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"img/something.png\"",
                        "(assets folder) src=\"~assets/my-img.png\"",
                        "(relative path format) :src=\"require('./my_img.jpg')\"",
                        "(URL) src=\"https://some-site.net/some-img.jpg\""
                    ],
                    "category": "model"
                },
                "height": {
                    "type": "Number",
                    "desc": "组件的高度（像素）",
                    "default": 500,
                    "category": "style",
                    "required": false
                },
                "speed": {
                    "type": "Number",
                    "desc": "视差效果的速度（0.0<x<1.0）",
                    "category": "behavior"
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认槽可用于显示在组件顶部的内容"
                },
                "media": {
                    "desc": "用于描述＜img＞或＜video＞标签的插槽"
                },
                "content": {
                    "desc": "用于描述显示在组件顶部的内容的作用域槽；如果指定，它将覆盖默认插槽",
                    "scope": {
                        "percentScrolled": {
                            "type": "Number",
                            "desc": "Percentage (0.0 < x < 1.0) of scroll in regards to QParallax"
                        }
                    }
                }
            },
            "events": {
                "scroll": {
                    "desc": "发生滚动时发出",
                    "params": {
                        "percentage": {
                            "type": "Number",
                            "desc": "Number between 0.0 and 1.0 defining the scrolled percentage of the component"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-popup-edit",
        "desc": "弹出编辑",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/popup-edit"
            },
            "props": {
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Any",
                    "examples": [
                        "v-model=\"myValue\""
                    ]
                },
                "title": {
                    "type": "String",
                    "desc": "可选标题（除非使用了“title”插槽）",
                    "examples": [
                        "Calories"
                    ],
                    "category": "content"
                },
                "buttons": {
                    "type": "Boolean",
                    "desc": "显示“设置”和“取消”按钮",
                    "category": "content"
                },
                "label-set": {
                    "type": "String",
                    "desc": "覆盖“设置”按钮标签",
                    "examples": [
                        "OK"
                    ],
                    "category": "content"
                },
                "label-cancel": {
                    "type": "String",
                    "desc": "覆盖“取消”按钮标签",
                    "examples": [
                        "Cancel"
                    ],
                    "category": "content"
                },
                "auto-save": {
                    "type": "Boolean",
                    "desc": "当用户点击/点击弹出窗口外时，自动保存模型（如果更改）；它不适用于ESC键",
                    "category": "behavior"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "primary",
                    "required": false
                },
                "validate": {
                    "type": "Function",
                    "desc": "验证模型，然后触发“保存”并关闭Popup；返回布尔值（'true'表示有效，'false'表示中止）；语法：validate（value）；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Model to validate",
                            "examples": [
                                "My car"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Is the model valid or not?"
                    },
                    "examples": [
                        ":validate=\"myValidation\""
                    ],
                    "category": "model"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "fit": {
                    "type": "Boolean",
                    "desc": "允许菜单至少与其目标的全宽相匹配",
                    "category": "position"
                },
                "cover": {
                    "type": "Boolean",
                    "default": true,
                    "desc": "允许菜单覆盖其目标。使用时，“self”和“fit”道具不再有效",
                    "category": "position",
                    "required": false
                },
                "anchor": {
                    "type": "String",
                    "desc": "设置菜单相对于目标的起始位置或锚点的两个值",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "self": {
                    "type": "String",
                    "desc": "两个值设置菜单自身相对于目标的位置",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "category": "position"
                },
                "offset": {
                    "type": "Array",
                    "desc": "两个数字的数组，以像素为单位水平和垂直偏移菜单",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "style"
                },
                "touch-position": {
                    "type": "Boolean",
                    "desc": "当单击或触摸菜单的目标时，允许通过鼠标位置设置目标位置",
                    "category": "behavior"
                },
                "persistent": {
                    "type": "Boolean",
                    "desc": "点击ESC键或点击弹出菜单外部以避免关闭菜单",
                    "category": "behavior"
                },
                "separate-close-popup": {
                    "type": "Boolean",
                    "desc": "与父菜单分离，将其标记为v-close-popup的单独关闭点（如果没有这一点，链接菜单将全部关闭）",
                    "category": "behavior"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "强制菜单具有方形边框",
                    "category": "style"
                },
                "max-height": {
                    "type": "String",
                    "desc": "菜单的最大高度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "max-width": {
                    "type": "String",
                    "desc": "菜单的最大宽度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "用于注射成型组件；不要破坏它",
                    "scope": {
                        "initialValue": {
                            "type": "Any",
                            "desc": "Initial value",
                            "examples": [
                                0.241,
                                "Text"
                            ]
                        },
                        "value": {
                            "type": "Any",
                            "desc": "Current value",
                            "examples": [
                                0.241,
                                "Text"
                            ]
                        },
                        "validate": {
                            "type": "Function",
                            "desc": "Function that checks if the value is valid",
                            "params": {
                                "value": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Value to be checked",
                                    "examples": [
                                        0,
                                        "Changed text"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "Boolean",
                                "desc": "Checked value is valid or not"
                            }
                        },
                        "set": {
                            "type": "Function",
                            "desc": "Function that sets the value and closes the popup",
                            "params": null,
                            "returns": null
                        },
                        "cancel": {
                            "type": "Function",
                            "desc": "Function that cancels the editing and reverts the value to the initialValue",
                            "params": null,
                            "returns": null
                        },
                        "updatePosition": {
                            "type": "Function",
                            "desc": "There are some custom scenarios for which Quasar cannot automatically reposition the component without significant performance drawbacks so the optimal solution is for you to call this method when you need it",
                            "params": null,
                            "returns": null
                        }
                    }
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当Popup被取消以将模型重置为其初始值时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "在弹出菜单显示之前发出"
                },
                "show": {
                    "desc": "在弹出菜单显示后立即发出"
                },
                "before-hide": {
                    "desc": "在Popup被驳回之前发出"
                },
                "hide": {
                    "desc": "Popup被驳回后立即发出"
                },
                "save": {
                    "desc": "在值已成功验证且应保存时发出",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Validated value to be saved"
                        },
                        "initialValue": {
                            "type": "Any",
                            "desc": "Initial value, before changes"
                        }
                    }
                },
                "cancel": {
                    "desc": "当用户取消更改时发出（按ESC键或在弹出菜单外单击或按“取消”按钮）",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "Edited value"
                        },
                        "initialValue": {
                            "type": "Any",
                            "desc": "Initial value, before changes"
                        }
                    }
                }
            },
            "methods": {
                "set": {
                    "desc": "触发模型更新；验证模型（如果是这种情况，则发出“保存”事件），然后关闭Popup"
                },
                "cancel": {
                    "desc": "触发模型重置为其初始值（发出“取消”事件），然后关闭弹出菜单"
                },
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "updatePosition": {
                    "desc": "在某些自定义场景中，Quasar无法自动重新定位组件而不会出现显著的性能缺陷，因此最佳解决方案是在需要时调用此方法"
                }
            }
        }
    },
    {
        "name": "q-popup-proxy",
        "desc": "弹出代理",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/popup-proxy"
            },
            "props": {
                "target": {
                    "type": [
                        "Boolean",
                        "String",
                        "Element"
                    ],
                    "desc": "配置目标元素以触发组件切换；'true表示启用父DOM元素，false表示禁用将事件附加到任何DOM元素；通过使用String（CSS选择器）或DOM元素，它将事件附加到指定的DOM元素（如果存在）",
                    "default": true,
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "(CSS selector)",
                        "(DOM Element)"
                    ],
                    "examples": [
                        ":target=\"false\"",
                        ":target=\"$refs.target\"",
                        "target=\".my-parent\"",
                        "target=\"#target-id\""
                    ],
                    "category": "behavior",
                    "required": false
                },
                "no-parent-event": {
                    "type": "Boolean",
                    "desc": "跳过将事件附加到目标DOM元素（触发元素显示）",
                    "category": "behavior"
                },
                "context-menu": {
                    "type": "Boolean",
                    "desc": "允许组件的行为类似于上下文菜单，该菜单通过鼠标右键单击（或长按移动设备）打开",
                    "category": "behavior"
                },
                "model-value": {
                    "desc": "定义组件的状态（显示/隐藏）；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": "Boolean"
                },
                "breakpoint": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "窗口宽度/高度的断点（以像素为单位）（以较小者为准），从该断点开始使用菜单而不是对话框",
                    "default": 450,
                    "category": "behavior",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                }
            }
        }
    },
    {
        "name": "q-pull-to-refresh",
        "desc": "拉动刷新",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/pull-to-refresh"
            },
            "props": {
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中图标的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bg-color": {
                    "type": "String",
                    "desc": "Quasar调色板中图标容器背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "icon": {
                    "type": "String",
                    "desc": "刷新内容时要显示的图标",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "no-mouse": {
                    "type": "Boolean",
                    "desc": "不监听鼠标事件",
                    "category": "behavior"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "此处显示内容（由组件控制的区域）"
                }
            },
            "events": {
                "refresh": {
                    "desc": "每当触发刷新时调用；此时，您的函数应该加载更多的数据",
                    "params": {
                        "done": {
                            "type": "Function",
                            "desc": "Call the done() function when your data has been refreshed",
                            "params": null,
                            "returns": null
                        }
                    }
                }
            },
            "methods": {
                "trigger": {
                    "desc": "触发刷新"
                },
                "updateScrollTarget": {
                    "desc": "更新滚动目标；当父元素发生变化从而滚动目标也发生变化时，这很有用"
                }
            }
        }
    },
    {
        "name": "q-rating",
        "desc": "评分",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/rating"
            },
            "props": {
                "name": {
                    "type": "String",
                    "desc": "用于指定控件的名称；在处理直接提交到URL的表单时很有用",
                    "examples": [
                        "car_id"
                    ],
                    "category": "behavior"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "model-value": {
                    "desc": "部件的型号；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Number",
                    "examples": [
                        "v-model=\"rating\"",
                        ":model-value=\"rating\"",
                        ":model-value=\"2\""
                    ]
                },
                "max": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "要显示的图标数",
                    "default": 5,
                    "category": "general",
                    "required": false
                },
                "icon": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果提供了阵列，则每个评级值将使用阵列中的相应图标（基于0）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-selected": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "选择时要使用的符合Quasar约定的图标名称（可选）；除非使用“img：”前缀，否则请确保已安装图标库；如果提供了阵列，则每个评级值将使用阵列中的相应图标（基于0）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-half": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "选择时要使用的符合Quasar约定的图标名称（可选）；除非使用“img：”前缀，否则请确保已安装图标库；如果提供了阵列，则每个评级值将使用阵列中的相应图标（基于0）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-aria-label": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "在图标的咏叹调标签上设置标签；如果提供了数组，则每个评级值将使用数组中相应的咏叹调标签（基于0）；如果提供字符串值，则会附加评级值；如果未提供，将使用图标的名称",
                    "examples": [
                        "Rating",
                        "[\"Bad\", \"Normal\", \"Good\"]"
                    ],
                    "category": "accessibility",
                    "addedIn": "v1.20.3"
                },
                "color": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "Quasar调色板中组件的颜色名称；v1.5.0+：如果提供阵列，则每个评级值将使用阵列中的相应颜色（基于0）",
                    "examples": [
                        "primary",
                        "teal-10",
                        "primary",
                        "teal-10",
                        "[\"accent\", \"grey-7\"] "
                    ],
                    "category": "style"
                },
                "color-selected": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "所选图标的Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "color-half": {
                    "type": [
                        "String",
                        "Array"
                    ],
                    "desc": "半选定图标的Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "no-dimming": {
                    "type": "Boolean",
                    "desc": "不会降低未选定图标的不透明度",
                    "category": "style"
                },
                "no-reset": {
                    "type": "Boolean",
                    "desc": "使用时，禁用单击/点击表示当前模型值的图标的默认行为，以将模型重置为0",
                    "category": "model"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                }
            },
            "slots": {
                "tip-[name]": {
                    "desc": "在“[名称]”处定义图标工具提示的插槽，其中名称是基于1的索引；建议：QTooltip"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-responsive",
        "desc": "响应式",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/responsive"
            },
            "props": {
                "ratio": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "内容的纵横比；如果值是String，则避免使用计算语句（如“16/9”），而是直接指定结果的String值（如“1.7777”）",
                    "examples": [
                        ":ratio=\"4/3\"",
                        ":ratio=\"16/9\"",
                        "ratio=\"1\""
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-scroll-area",
        "desc": "滚动区域",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/scroll-area"
            },
            "props": {
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "bar-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "具有CSS属性和值的对象，用于自定义滚动条样式（垂直和水平）",
                    "examples": [
                        ":bar-style=\"{ borderRadius: '5px', background: 'red', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "vertical-bar-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "具有CSS属性和值的对象，用于自定义垂直滚动条的样式；应用于“条形”道具的顶部",
                    "examples": [
                        ":bar-style=\"{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "horizontal-bar-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "具有CSS属性和值的对象，用于自定义水平滚动条的样式；应用于“条形”道具的顶部",
                    "examples": [
                        ":bar-style=\"{ bottom: '4px', borderRadius: '5px', background: 'red', height: '10px', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "thumb-style": {
                    "type": "Object",
                    "tsType": "VueStyleObjectProp",
                    "desc": "具有CSS属性和值的对象，用于自定义滚动条拇指的样式（垂直和水平）",
                    "examples": [
                        ":thumb-style=\"{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "vertical-thumb-style": {
                    "type": "Object",
                    "tsType": "VueStyleObjectProp",
                    "desc": "具有CSS属性和值的对象，用于自定义垂直滚动条的拇指样式；应用于“拇指样式”道具的顶部",
                    "examples": [
                        ":thumb-style=\"{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "horizontal-thumb-style": {
                    "type": "Object",
                    "tsType": "VueStyleObjectProp",
                    "desc": "具有CSS属性和值的对象，用于自定义水平滚动条的拇指样式；应用于“拇指样式”道具的顶部",
                    "examples": [
                        ":thumb-style=\"{ bottom: '4px', borderRadius: '5px', background: 'red', height: '10px', opacity: 1 }\""
                    ],
                    "category": "style"
                },
                "content-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "具有CSS属性和值的对象，用于设置QScrollArea容器的样式",
                    "examples": [
                        ":content-style=\"{ backgroundColor: '#C0C0C0' }\""
                    ],
                    "category": "style"
                },
                "content-active-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "具有CSS属性和值的对象，用于在滚动区域变为活动状态（鼠标悬停）时设置QScrollArea容器的样式",
                    "examples": [
                        ":content-active-style=\"{ backgroundColor: 'white' }\""
                    ],
                    "category": "style"
                },
                "visible": {
                    "type": "Boolean",
                    "desc": "手动控制滚动条的可见性；覆盖默认鼠标悬停/离开行为",
                    "category": "behavior"
                },
                "delay": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "当内容发生更改时，会出现滚动条；此延迟定义滚动条再次消失之前的时间量（以毫秒为单位）（如果组件没有悬停）",
                    "default": 1000,
                    "category": "behavior",
                    "required": false
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "scroll": {
                    "desc": "滚动信息更改时发出（并且已配置侦听器）",
                    "params": {
                        "info": {
                            "type": "Object",
                            "desc": "An object containing scroll information",
                            "definition": {
                                "ref": {
                                    "type": "Component",
                                    "tsType": "QScrollArea",
                                    "required": true,
                                    "desc": "Vue reference to the QScrollArea which triggered the event"
                                },
                                "verticalPosition": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Vertical scroll position (in px)"
                                },
                                "verticalPercentage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Vertical scroll percentage (0.0 <= x <= 1.0)"
                                },
                                "verticalSize": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Vertical scroll size (in px)"
                                },
                                "verticalContainerSize": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Height of the container (in px)"
                                },
                                "horizontalPosition": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Horizontal scroll position (in px)"
                                },
                                "horizontalPercentage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Horizontal scroll percentage (0.0 <= x <= 1.0)"
                                },
                                "horizontalSize": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Horizontal scroll size (in px)"
                                },
                                "horizontalContainerSize": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Width of the container (in px)"
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "getScrollTarget": {
                    "desc": "获取滚动DOM元素目标",
                    "returns": {
                        "type": "Element",
                        "desc": "DOM element upon which scrolling takes place"
                    }
                },
                "getScroll": {
                    "desc": "获取当前滚动信息",
                    "returns": {
                        "type": "Object",
                        "desc": "Scroll information",
                        "definition": {
                            "verticalPosition": {
                                "type": "Number",
                                "required": true,
                                "desc": "Vertical scroll position (in px)"
                            },
                            "verticalPercentage": {
                                "type": "Number",
                                "required": true,
                                "desc": "Vertical scroll percentage (0.0 <= x <= 1.0)"
                            },
                            "verticalSize": {
                                "type": "Number",
                                "required": true,
                                "desc": "Vertical scroll size (in px)"
                            },
                            "verticalContainerSize": {
                                "type": "Number",
                                "required": true,
                                "desc": "Height of the container (in px)"
                            },
                            "horizontalPosition": {
                                "type": "Number",
                                "required": true,
                                "desc": "Horizontal scroll position (in px)"
                            },
                            "horizontalPercentage": {
                                "type": "Number",
                                "required": true,
                                "desc": "Horizontal scroll percentage (0.0 <= x <= 1.0)"
                            },
                            "horizontalSize": {
                                "type": "Number",
                                "required": true,
                                "desc": "Horizontal scroll size (in px)"
                            },
                            "horizontalContainerSize": {
                                "type": "Number",
                                "required": true,
                                "desc": "Width of the container (in px)"
                            }
                        }
                    }
                },
                "getScrollPosition": {
                    "desc": "获取当前滚动位置",
                    "returns": {
                        "type": "Object",
                        "desc": "An object containing scroll position information",
                        "definition": {
                            "top": {
                                "type": "Number",
                                "required": true,
                                "desc": "Scroll offset from top (vertical)"
                            },
                            "left": {
                                "type": "Number",
                                "required": true,
                                "desc": "Scroll offset from left (horizontal)"
                            }
                        },
                        "examples": [
                            "{ top: 10, left: 0 }"
                        ]
                    }
                },
                "getScrollPercentage": {
                    "desc": "获取当前滚动位置的百分比（0.0<=x<=1.0）",
                    "returns": {
                        "type": "Object",
                        "desc": "An object containing scroll position information in percentage",
                        "definition": {
                            "top": {
                                "type": "Number",
                                "required": true,
                                "desc": "Scroll percentage (0.0 <= x <= 1.0) offset from top (vertical)"
                            },
                            "left": {
                                "type": "Number",
                                "required": true,
                                "desc": "Scroll percentage (0.0 <= x <= 1.0) offset from left (horizontal)"
                            }
                        },
                        "examples": [
                            "{ top: 0.212, left: 0 }"
                        ]
                    }
                },
                "setScrollPosition": {
                    "desc": "将滚动位置设置为偏移；如果指定了持续时间（以毫秒为单位），则为滚动设置动画",
                    "params": {
                        "axis": {
                            "type": "String",
                            "required": true,
                            "desc": "Scroll axis",
                            "values": [
                                "vertical",
                                "horizontal"
                            ]
                        },
                        "offset": {
                            "type": "Number",
                            "required": true,
                            "desc": "Scroll position offset from top (in pixels)"
                        },
                        "duration": {
                            "type": "Number",
                            "desc": "Duration (in milliseconds) enabling animated scroll"
                        }
                    }
                },
                "setScrollPercentage": {
                    "desc": "将滚动位置设置为总滚动大小的百分比（0.0<=x<=1.0）；如果指定了持续时间（以毫秒为单位），则为滚动设置动画",
                    "params": {
                        "axis": {
                            "type": "String",
                            "desc": "Scroll axis",
                            "values": [
                                "vertical",
                                "horizontal"
                            ],
                            "required": true
                        },
                        "offset": {
                            "type": "Number",
                            "desc": "Scroll percentage (0.0 <= x <= 1.0) of the total scrolling size",
                            "required": true
                        },
                        "duration": {
                            "type": "Number",
                            "desc": "Duration (in milliseconds) enabling animated scroll"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-separator",
        "desc": "分隔条",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/separator"
            },
            "props": {
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "spaced": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为true，则相应的方向边距将设置为8px；它也可以设置为CSS单位的大小，包括单位名称，或者xs|sm|md|lg|xl预定义的大小之一",
                    "default": "md",
                    "examples": [
                        "12px",
                        "sm",
                        "md"
                    ],
                    "category": "content",
                    "required": false
                },
                "inset": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "如果设置为布尔值true，则左右边距将设置为16px。如果设置为“item”，则它将与QItem的设计相匹配。如果设置为“项目缩略图”，则会将QItem的设计与左侧的缩略图相匹配",
                    "examples": [
                        "item",
                        "item-thumbnail"
                    ],
                    "category": "content"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "如果设置为true，分隔符将是垂直的。",
                    "category": "content"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                }
            }
        }
    },
    {
        "name": "q-skeleton",
        "desc": "骨架屏",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/skeleton"
            },
            "props": {
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "type": {
                    "type": "String",
                    "desc": "骨架占位符的类型",
                    "values": [
                        "text",
                        "rect",
                        "circle",
                        "QBtn",
                        "QBadge",
                        "QChip",
                        "QToolbar",
                        "QCheckbox",
                        "QRadio",
                        "QToggle",
                        "QSlider",
                        "QRange",
                        "QInput",
                        "QAvatar"
                    ],
                    "default": "rect",
                    "category": "content",
                    "required": false
                },
                "animation": {
                    "type": "String",
                    "desc": "骨架占位符的动画效果",
                    "values": [
                        "wave",
                        "pulse",
                        "pulse-x",
                        "pulse-y",
                        "fade",
                        "blink",
                        "none"
                    ],
                    "default": "wave",
                    "category": "style",
                    "required": false
                },
                "animation-speed": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "动画速度（以毫秒为单位，无单位）",
                    "examples": [
                        500,
                        "1200"
                    ],
                    "category": "style",
                    "default": 300,
                    "addedIn": "v2.2",
                    "required": false
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单位名称；覆盖“高度”和“宽度”道具，并将该值应用于高度和宽度",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "width": {
                    "type": "String",
                    "desc": "宽度（以CSS为单位），包括单位名称；应用自定义宽度；使用此道具或通过CSS；如果使用，则被“size”道具覆盖",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "height": {
                    "type": "String",
                    "desc": "以CSS为单位的高度，包括单位名称；应用自定义高度；使用此道具或通过CSS；如果使用，则被“size”道具覆盖",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "style"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的HTML标记",
                    "examples": [
                        "div",
                        "span",
                        "div",
                        "span"
                    ],
                    "category": "content",
                    "default": "div",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-slideItem",
        "desc": "可滑动项",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/slide-item"
            },
            "props": {
                "left-color": {
                    "type": "String",
                    "desc": "Quasar调色板左侧背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "right-color": {
                    "type": "String",
                    "desc": "Quasar调色板右侧背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "top-color": {
                    "type": "String",
                    "desc": "Quasar调色板顶部背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "bottom-color": {
                    "type": "String",
                    "desc": "Quasar调色板底部背景的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是项目的部分所在的位置；建议：QItemSection"
                },
                "left": {
                    "desc": "滑动时的左侧内容"
                },
                "right": {
                    "desc": "滑动时的右侧内容"
                },
                "top": {
                    "desc": "滑动时的顶部内容"
                },
                "bottom": {
                    "desc": "滑动时的底部内容"
                }
            },
            "events": {
                "left": {
                    "desc": "当用户完成向左滑动项目时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "reset": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "When called, it resets the component to its initial non-slided state",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                },
                "right": {
                    "desc": "当用户完成向右滑动项目时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "reset": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "When called, it resets the component to its initial non-slided state",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                },
                "top": {
                    "desc": "当用户完成向上滑动项目时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "reset": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "When called, it resets the component to its initial non-slided state",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                },
                "bottom": {
                    "desc": "当用户完成向下滑动项目时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "reset": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "When called, it resets the component to its initial non-slided state",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                },
                "slide": {
                    "desc": "当用户将项目滑动到可用的一侧时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "side": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Side to which sliding is taking effect",
                                    "values": [
                                        "left",
                                        "right",
                                        "top",
                                        "bottom"
                                    ]
                                },
                                "ratio": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Ratio of how much of the required slide was performed (0 <= x <= 1)"
                                },
                                "isReset": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Ratio has been reset"
                                }
                            }
                        }
                    }
                },
                "action": {
                    "desc": "当用户完成将项目滑动到两侧时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Details",
                            "definition": {
                                "side": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Side to which sliding has taken effect",
                                    "values": [
                                        "left",
                                        "right",
                                        "top",
                                        "bottom"
                                    ]
                                },
                                "reset": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "When called, it resets the component to its initial non-slided state",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "reset": {
                    "desc": "重置为初始状态（未滑动到任何一侧）"
                }
            }
        }
    },
    {
        "name": "q-slide-transition",
        "desc": "幻灯片过渡",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/slide-transition"
            },
            "props": {
                "appear": {
                    "type": "Boolean",
                    "desc": "如果设置为true，则过渡将应用于初始渲染。",
                    "category": "behavior"
                },
                "duration": {
                    "type": "Number",
                    "desc": "启用动画滚动的持续时间（以毫秒为单位）。",
                    "default": 300,
                    "category": "behavior",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "这就是内容的去向"
                }
            },
            "events": {
                "show": {
                    "desc": "组件显示动画完成时发射"
                },
                "hide": {
                    "desc": "组件隐藏动画完成时发射"
                }
            }
        }
    },
    {
        "name": "q-space",
        "desc": "间距",
        "info": {}
    },
    {
        "name": "q-spinner",
        "desc": "旋转器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/spinners"
            },
            "props": {
                "size": {
                    "type": "String",
                    "desc": "以CSS为单位的大小，包括单元名称或标准大小名称（xs|sm|md|lg|xl）",
                    "examples": [
                        "16px",
                        "2rem",
                        "xs",
                        "md"
                    ],
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "thickness": {
                    "type": "Number",
                    "desc": "替代用于笔划宽度的值",
                    "default": 5,
                    "category": "style",
                    "required": false
                }
            }
        }
    },
    {
        "name": "q-splitter",
        "desc": "拆分器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/splitter"
            },
            "props": {
                "model-value": {
                    "desc": "以指定的单位定义第一个面板（如果使用反向，则为第二个面板）大小的组件模型（对于“%”，它是分割比百分比-0.0<x<100.0；对于“px”，它的大小以px为单位）；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": true,
                    "syncable": true,
                    "category": "model",
                    "type": "Number",
                    "examples": [
                        "v-model=\"ratio\""
                    ]
                },
                "reverse": {
                    "type": "Boolean",
                    "desc": "将模型大小应用于第二个面板（默认情况下应用于第一个面板）",
                    "category": "model"
                },
                "unit": {
                    "type": "String",
                    "desc": "模型的CSS单元",
                    "default": "%",
                    "values": [
                        "%",
                        "px"
                    ],
                    "category": "model",
                    "required": false
                },
                "emit-immediately": {
                    "type": "Boolean",
                    "desc": "用户在分隔符上平移时发射模型",
                    "category": "model"
                },
                "horizontal": {
                    "type": "Boolean",
                    "desc": "允许拆分器水平拆分其两个面板，而不是垂直拆分",
                    "category": "content"
                },
                "limits": {
                    "type": "Array",
                    "desc": "两个值的数组，表示两个面板的最小和最大分割尺寸；当设置了“px”单位时，您可以使用Infinity作为第二个值，使其在另一侧未绑定",
                    "default": "For '%' unit: [10, 90]; For 'px' unit: [50, Infinity]",
                    "examples": [
                        ":limits=\"[30, 70]\"",
                        ":limits=\"[0, Infinity]\""
                    ],
                    "category": "content|model",
                    "required": false
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "before-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于“before”面板的类定义",
                    "examples": [
                        "bg-deep-orange",
                        ":before-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "after-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于“after”面板的类定义",
                    "examples": [
                        "bg-deep-orange",
                        ":after-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "separator-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要归因于拆分器分隔符的类定义",
                    "examples": [
                        "bg-deep-orange",
                        ":separator-class=\"{ 'my-special-class': <condition> }\""
                    ],
                    "category": "style"
                },
                "separator-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "要归因于拆分器分隔符的样式定义",
                    "examples": [
                        "background-color: #ff0000",
                        ":separator-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "在分隔符上应用默认较浅的颜色；当背景较暗时使用；在通过分隔符类或分隔符样式的道具重写时避免使用",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "默认插槽中devland未插槽的组件内容；建议：QTooltip，QMenu"
                },
                "before": {
                    "desc": "左侧/顶部面板的内容"
                },
                "after": {
                    "desc": "右侧/底部面板的内容"
                },
                "separator": {
                    "desc": "要放置在分离器内的内容；默认情况下，它居中"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件的模型值发生变化时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Number",
                            "desc": "New model value (0.0 < x < 100.0) defining the ratio between panels"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-stepper",
        "desc": "步进器组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/stepper"
            },
            "props": {
                "model-value": {
                    "type": "Any",
                    "desc": "定义当前面板名称的组件的模型；如果使用数字，它不会定义面板的索引，而是定义面板的名称，该名称也可以是Integer；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令。",
                    "examples": [
                        "v-model=\"panelName\""
                    ],
                    "category": "model"
                },
                "keep-alive": {
                    "type": "Boolean",
                    "desc": "相当于在内容上使用Vue的原生＜keep-alive＞组件",
                    "category": "behavior"
                },
                "keep-alive-include": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生include道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-exclude": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生exclude道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-max": {
                    "type": "Number",
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生最大道具",
                    "category": "behavior"
                },
                "animated": {
                    "type": "Boolean",
                    "desc": "启用面板之间的转换（另请参阅“转换前一个”和“转换下一个”道具）",
                    "category": "behavior"
                },
                "infinite": {
                    "type": "Boolean",
                    "desc": "使组件显示为无穷大（当到达最后一个面板时，下一个面板将成为第一个面板）",
                    "category": "behavior"
                },
                "swipeable": {
                    "type": "Boolean",
                    "desc": "启用滑动事件（可能会干扰内容的触摸/鼠标事件）",
                    "category": "behavior"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "将步进器置于垂直模式（默认情况下不是水平模式）",
                    "category": "behavior"
                },
                "transition-prev": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "slide-right/slide-down",
                    "required": false
                },
                "transition-next": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "slide-left/slide-up",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "addedIn": "v2.2",
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "alternative-labels": {
                    "type": "Boolean",
                    "desc": "使用替代标签-将图标堆叠在标签顶部（仅适用于水平步进器）",
                    "category": "header"
                },
                "header-nav": {
                    "type": "Boolean",
                    "desc": "允许在标题中导航",
                    "category": "behavior"
                },
                "contracted": {
                    "type": "Boolean",
                    "desc": "隐藏窄窗口上的标题标签",
                    "category": "header|behavior"
                },
                "inactive-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "inactive-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "done-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "done-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "active-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "active-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "error-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "error-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "header-class": {
                    "type": "String",
                    "desc": "要归因于标头的类定义",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QStep"
                },
                "navigation": {
                    "desc": "全球导航专用插槽；建议：QStepperNavigation"
                },
                "message": {
                    "desc": "专用于将消息放在每一步的顶部（如果是水平步进器）或高于每一步（如果是垂直）的插槽；建议：QBanner，div.q-pa-lg"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件更改模型时发出；如果模型在外部发生更改，则会触发此事件_isn't_；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "New current panel name",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "before-transition": {
                    "desc": "在转换到新面板之前发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition is going",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition is happening",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "transition": {
                    "desc": "在组件转换到新面板后发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition has occurred",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition has happened",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            },
            "methods": {
                "next": {
                    "desc": "转到下一个面板"
                },
                "previous": {
                    "desc": "转到上一个面板"
                },
                "goTo": {
                    "desc": "转到特定面板",
                    "params": {
                        "panelName": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer",
                            "required": true,
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-step",
        "desc": "步进器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/stepper"
            },
            "props": {
                "name": {
                    "type": "Any",
                    "desc": "面板名称",
                    "required": true,
                    "examples": [
                        "accounts",
                        "firstPanel",
                        ":name=\"1\""
                    ],
                    "category": "general"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "title": {
                    "type": "String",
                    "desc": "步骤标题",
                    "required": true,
                    "examples": [
                        "Ad Groups",
                        "Payment"
                    ],
                    "category": "header"
                },
                "caption": {
                    "type": "String",
                    "desc": "标题下显示的步骤的附加信息",
                    "examples": [
                        "Create an account",
                        "Payment details"
                    ],
                    "category": "header"
                },
                "prefix": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "步骤的前缀（最多2个字符），如果步骤没有错误、正在编辑或标记为已完成，则替换图标",
                    "examples": [
                        "1",
                        "2",
                        "A",
                        "B"
                    ],
                    "category": "header"
                },
                "done-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "done-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "active-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "active-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "error-icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；如果使用“none”（字符串）作为值，则它将遵循前缀或该状态的常规图标；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "header"
                },
                "error-color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "header"
                },
                "header-nav": {
                    "type": "Boolean",
                    "default": true,
                    "desc": "允许在标题中导航",
                    "category": "behavior",
                    "required": false
                },
                "done": {
                    "type": "Boolean",
                    "desc": "将步骤标记为“完成”",
                    "category": "state"
                },
                "error": {
                    "type": "Boolean",
                    "desc": "将步骤标记为有错误",
                    "category": "state"
                }
            },
            "slots": {
                "default": {
                    "desc": "步骤的内容；如果您想处理步骤导航并且没有全局导航，也可以包含QStepperNavigation"
                }
            }
        }
    },
    {
        "name": "q-stepper-navigation",
        "desc": "步进器导航按钮",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/stepper"
            },
            "slots": {
                "default": {
                    "desc": "自定义导航的内容，QStep或QStepper的子级（全局，通过“导航”槽）"
                }
            }
        }
    },
    {
        "name": "q-table",
        "desc": "表格",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/table"
            },
            "props": {
                "fullscreen": {
                    "type": "Boolean",
                    "sync": true,
                    "desc": "全屏幕模式",
                    "examples": [
                        "v-model:fullscreen=\"isFullscreen\""
                    ],
                    "category": "behavior",
                    "syncable": true
                },
                "no-route-fullscreen-exit": {
                    "type": "Boolean",
                    "desc": "更改路线应用程序不会全屏退出",
                    "category": "behavior"
                },
                "rows": {
                    "type": "Array",
                    "desc": "要显示的数据行",
                    "examples": [
                        ":rows=\"myData\""
                    ],
                    "category": "general"
                },
                "row-key": {
                    "type": [
                        "String",
                        "Function"
                    ],
                    "desc": "每行的属性，定义每行的唯一键（结果必须是基元，而不是Object、Array等）；属性的值必须是字符串或函数，该函数取一行并返回行中所需的（嵌套的）键；如果提供一个函数以获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "default": "id",
                    "params": {
                        "row": {
                            "type": "Object",
                            "desc": "The current row being processed",
                            "examples": [
                                "{ name: 'Lorem Ipsum', price: 19 }"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Any",
                        "desc": "Current row's key",
                        "examples": [
                            "'34f39dda-6206-4071-a9df-4393aabe49ac'",
                            "34"
                        ]
                    },
                    "examples": [
                        "row-key=\"name\"",
                        ":row-key=\"row => row.name\""
                    ],
                    "category": "general",
                    "required": false
                },
                "virtual-scroll": {
                    "type": "Boolean",
                    "desc": "使用QVirtualScroll显示数据（仅适用于非网格模式）",
                    "category": "virtual-scroll"
                },
                "virtual-scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                },
                "virtual-scroll-slice-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "虚拟列表中要渲染的最小行数",
                    "default": 30,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-before": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之前渲染的行数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-after": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之后渲染的行数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-item-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "默认大小（以一行的像素为单位）；该值用于呈现初始表格；尝试使用接近行的最小大小的值",
                    "default": "48 (24 if dense)",
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-sticky-size-start": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "粘性标头的大小（以像素为单位）（如果使用）；正确的值将提高滚动精度；也将用于非虚拟滚动表，以在使用scrollTo方法时修复顶部对齐",
                    "default": "0",
                    "category": "virtual-scroll|behavior",
                    "required": false
                },
                "virtual-scroll-sticky-size-end": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "粘性页脚部分的大小（以像素为单位）（如果使用）；正确的值将提高滚动精度",
                    "default": "0",
                    "category": "virtual-scroll",
                    "required": false
                },
                "table-colspan": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "表中的列数（如果使用表布局，则需要此项：固定）",
                    "category": "virtual-scroll|content"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style",
                    "default": "grey-8",
                    "required": false
                },
                "icon-first-page": {
                    "type": "String",
                    "desc": "图标名称遵循Quasar惯例，用于进入第一页；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-prev-page": {
                    "type": "String",
                    "desc": "图标名称遵循Quasar惯例，用于跳转到上一页；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-next-page": {
                    "type": "String",
                    "desc": "图标名称遵循Quasar惯例，用于进入下一页；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "icon-last-page": {
                    "type": "String",
                    "desc": "图标名称遵循Quasar惯例，用于进入最后一页；除非使用“img：”前缀，否则请确保已安装图标库",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "grid": {
                    "type": "Boolean",
                    "desc": "将数据显示为网格而不是默认表",
                    "category": "behavior"
                },
                "grid-header": {
                    "type": "Boolean",
                    "desc": "也显示网格模式的标题",
                    "category": "behavior|content"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；连接$q.screen以实现响应行为",
                    "category": "style"
                },
                "columns": {
                    "type": "Array",
                    "desc": "列定义（对象阵列）",
                    "examples": [
                        ":columns=\"tableColumns\""
                    ],
                    "category": "column",
                    "definition": {
                        "name": {
                            "type": "String",
                            "required": true,
                            "desc": "Unique id, identifies column, (used by pagination.sortBy, 'body-cell-[name]' slot, ...)",
                            "examples": [
                                "desc"
                            ]
                        },
                        "label": {
                            "type": "String",
                            "required": true,
                            "desc": "Label for header",
                            "examples": [
                                "Dessert (100g serving)"
                            ]
                        },
                        "field": {
                            "type": [
                                "String",
                                "Function"
                            ],
                            "required": true,
                            "desc": "Row Object property to determine value for this column or function which maps to the required property",
                            "params": {
                                "row": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "The current row being processed",
                                    "examples": [
                                        "{ name: 'Lorem Ipsum', prices: { active: 19, old: 25, list: 29 } }"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "Any",
                                "desc": "Value for this column",
                                "examples": [
                                    "19"
                                ]
                            },
                            "examples": [
                                "name",
                                "row => row.prices.active"
                            ]
                        },
                        "required": {
                            "type": "Boolean",
                            "desc": "If we use visible-columns, this col will always be visible"
                        },
                        "align": {
                            "type": "String",
                            "desc": "Horizontal alignment of cells in this column",
                            "values": [
                                "left",
                                "right",
                                "center"
                            ],
                            "default": "right",
                            "required": false
                        },
                        "sortable": {
                            "type": "Boolean",
                            "desc": "Tell QTable you want this column sortable",
                            "default": false,
                            "required": false
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Compare function if you have some custom data or want a specific way to compare two rows",
                            "examples": [
                                "(a, b, rowA, rowB) => parseInt(a, 10) - parseInt(b, 10)"
                            ],
                            "params": {
                                "a": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Value of the first comparison term",
                                    "examples": [
                                        123,
                                        "abc"
                                    ]
                                },
                                "b": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Value of the second comparison term",
                                    "examples": [
                                        123,
                                        "abc"
                                    ]
                                },
                                "rowA": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Full Row object in which is contained the first term",
                                    "examples": [
                                        "{ name: 'Potassium', value: 'K' }"
                                    ]
                                },
                                "rowB": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Full Row object in which is contained the second term",
                                    "examples": [
                                        "{ name: 'Fluorine', value: 'F' }"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "Number",
                                "desc": "Comparison result of term 'a' with term 'b'. Less than 0 when 'a' should come first; greater than 0 if 'b' should come first; equal to 0 if their position must not be changed with respect to each other",
                                "examples": [
                                    "-1",
                                    "0",
                                    "1"
                                ]
                            }
                        },
                        "sortOrder": {
                            "type": "String",
                            "desc": "Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); Overrides the 'column-sort-order' prop",
                            "values": [
                                "ad",
                                "da"
                            ],
                            "default": "ad",
                            "required": false
                        },
                        "format": {
                            "type": "Function",
                            "desc": "Function you can apply to format your data",
                            "examples": [
                                "(val, row) => `${val}%`",
                                "val => val ? /* Unicode checkmark checked */ '☑' : /* Unicode checkmark unchecked */ '☐'"
                            ],
                            "params": {
                                "val": {
                                    "type": "Any",
                                    "required": true,
                                    "desc": "Value of the cell",
                                    "examples": [
                                        123,
                                        "abc"
                                    ]
                                },
                                "row": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Full Row object in which the cell is contained",
                                    "examples": [
                                        "{ name: 'Potassium', value: 'K' }"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "Any",
                                "desc": "The resulting formatted value",
                                "examples": [
                                    "20%"
                                ]
                            }
                        },
                        "style": {
                            "type": [
                                "String",
                                "Function"
                            ],
                            "desc": "Style to apply on normal cells of the column",
                            "params": {
                                "row": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "The current row being processed",
                                    "examples": [
                                        "{ name: 'Frozen Yogurt', calories: 159 }"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "String"
                            },
                            "examples": [
                                "'width: 500px'",
                                "row => (row.calories % 2 === 0 ? 'width: 10px' : 'font-size: 2em; font-weight: bold')"
                            ]
                        },
                        "classes": {
                            "type": [
                                "String",
                                "Function"
                            ],
                            "desc": "Classes to add on normal cells of the column",
                            "params": {
                                "row": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "The current row being processed",
                                    "examples": [
                                        "{ name: 'Frozen Yogurt', calories: 159 }"
                                    ]
                                }
                            },
                            "returns": {
                                "type": "String"
                            },
                            "examples": [
                                "'my-special-class bg-primary'",
                                "row => (row.calories % 2 === 0 ? 'bg-green text-white' : 'bg-yellow')"
                            ]
                        },
                        "headerStyle": {
                            "type": "String",
                            "desc": "Style to apply on header cells of the column",
                            "examples": [
                                "width: 500px"
                            ]
                        },
                        "headerClasses": {
                            "type": "String",
                            "desc": "Classes to add on header cells of the column",
                            "examples": [
                                "my-special-class"
                            ]
                        }
                    }
                },
                "visible-columns": {
                    "type": "Array",
                    "desc": "定义列名的字符串数组（“columns”道具定义中每列的“name”属性）；标记为“必需”的列不受此属性的影响",
                    "examples": [
                        ":visible-columns=\"myCols\"",
                        "[ 'desc', 'carbs', 'protein' ]"
                    ],
                    "category": "column"
                },
                "loading": {
                    "type": "Boolean",
                    "desc": "将表置于“加载”状态；通知用户幕后发生的事情",
                    "category": "behavior|content"
                },
                "title": {
                    "type": "String",
                    "desc": "表格标题",
                    "examples": [
                        "Device list"
                    ],
                    "category": "content"
                },
                "hide-header": {
                    "type": "Boolean",
                    "desc": "隐藏表头图层",
                    "category": "content"
                },
                "hide-bottom": {
                    "type": "Boolean",
                    "desc": "隐藏表底层，不管它必须显示什么",
                    "category": "content"
                },
                "hide-selected-banner": {
                    "type": "Boolean",
                    "desc": "隐藏所选行横幅（如果有）",
                    "category": "content"
                },
                "hide-no-data": {
                    "type": "Boolean",
                    "desc": "隐藏默认的无数据底层",
                    "category": "content"
                },
                "hide-pagination": {
                    "type": "Boolean",
                    "desc": "隐藏底部的分页控件",
                    "category": "content"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "separator": {
                    "type": "String",
                    "desc": "在行、列或所有单元格之间使用分隔符/边框",
                    "default": "horizontal",
                    "values": [
                        "horizontal",
                        "vertical",
                        "cell",
                        "none"
                    ],
                    "category": "content",
                    "required": false
                },
                "wrap-cells": {
                    "type": "Boolean",
                    "desc": "在表格单元格中换行文本",
                    "category": "content"
                },
                "binary-state-sort": {
                    "type": "Boolean",
                    "desc": "当用户切换列排序方向时，跳过第三种状态（未排序）",
                    "category": "sorting"
                },
                "column-sort-order": {
                    "type": "String",
                    "desc": "设置列排序顺序：“ad”（升序-降序）或“da”（降序-升序）；它将应用于所有列，除非列在“columns”定义道具中指定了自己的sortOrder",
                    "values": [
                        "ad",
                        "da"
                    ],
                    "default": "ad",
                    "category": "sorting",
                    "required": false
                },
                "no-data-label": {
                    "type": "String",
                    "desc": "在没有可用数据时覆盖要显示的默认文本",
                    "examples": [
                        "No devices available"
                    ],
                    "category": "content"
                },
                "no-results-label": {
                    "type": "String",
                    "desc": "当用户筛选表但未找到匹配的结果时，覆盖要显示的默认文本",
                    "examples": [
                        "No matched records"
                    ],
                    "category": "content"
                },
                "loading-label": {
                    "type": "String",
                    "desc": "覆盖表处于加载状态时显示的默认文本（请参阅“加载”道具）",
                    "examples": [
                        "Loading devices..."
                    ],
                    "category": "content"
                },
                "selected-rows-label": {
                    "type": "Function",
                    "desc": "当用户选择至少一行时要显示的文本；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "numberOfRows": {
                            "type": "Number",
                            "desc": "Number of rows available"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "Label to display",
                        "examples": [
                            "5 rows are selected"
                        ]
                    },
                    "examples": [
                        ":selected-rows-label=\"getSelectedString\""
                    ],
                    "category": "selection"
                },
                "rows-per-page-label": {
                    "type": "String",
                    "desc": "用于覆盖表底部每页标签默认行的文本",
                    "examples": [
                        "Records per page:"
                    ],
                    "category": "pagination"
                },
                "pagination-label": {
                    "type": "Function",
                    "desc": "覆盖表底部默认分页标签的文本（除非使用了“分页”范围的槽）；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "firstRowIndex": {
                            "type": "Number",
                            "desc": "Index of first displayed row"
                        },
                        "endRowIndex": {
                            "type": "Number",
                            "desc": "Index of last displayed row"
                        },
                        "totalRowsNumber": {
                            "type": "Number",
                            "desc": "Number of total rows available in data"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "Label to display",
                        "examples": [
                            "1-10 of 132"
                        ]
                    },
                    "examples": [
                        ":pagination-label=\"getPaginationLabel\""
                    ],
                    "category": "pagination"
                },
                "table-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "CSS样式应用于原生HTML＜table＞元素的包装器（它是一个DIV）",
                    "examples": [
                        "background-color: #ff0000",
                        ":table-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "table-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "CSS类应用于原生HTML＜table＞元素的包装器（它是一个DIV）",
                    "examples": [
                        "my-special-class",
                        ":table-class=\"{ 'my-special-class': [Boolean condition] }\""
                    ],
                    "category": "style"
                },
                "table-header-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "CSS样式应用于本地HTML＜table＞的标头（这是一个TR）",
                    "examples": [
                        "background-color: #ff0000",
                        ":table-header-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "table-header-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "CSS类应用于本地HTML＜table＞的头（这是一个TR）",
                    "examples": [
                        "my-special-class",
                        ":table-header-class=\"{ 'my-special-class': [Boolean condition] }\""
                    ],
                    "category": "style"
                },
                "card-container-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "应用于卡片容器的CSS样式（在网格模式下）",
                    "examples": [
                        "background-color: #ff0000",
                        ":card-container-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "card-container-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "应用于卡片容器的CSS类（在网格模式下）",
                    "examples": [
                        "my-special-class",
                        "justify-center",
                        ":card-container-class=\"{ 'my-special-class': [Boolean condition] }\""
                    ],
                    "category": "style"
                },
                "card-style": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueStyleProp",
                    "desc": "应用于卡（在网格模式下）或容器卡（不在网格模式时）的CSS样式",
                    "examples": [
                        "background-color: #ff0000",
                        ":card-style=\"{ backgroundColor: '#ff0000' }\""
                    ],
                    "category": "style"
                },
                "card-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "应用于卡（处于网格模式时）或容器卡（不处于网格模式下）的CSS类",
                    "examples": [
                        "my-special-class",
                        ":card-class=\"{ 'my-special-class': [Boolean condition] }\""
                    ],
                    "category": "style"
                },
                "title-class": {
                    "type": [
                        "String",
                        "Array",
                        "Object"
                    ],
                    "tsType": "VueClassProp",
                    "desc": "要应用于标题的CSS类（如果使用“title”道具）",
                    "examples": [
                        "my-special-class",
                        "text-h1",
                        ":title-class=\"{ 'text-h1': [Boolean condition] }\""
                    ],
                    "category": "style"
                },
                "filter": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "用于筛选表的字符串/对象；当使用对象时，它还需要指定“筛选方法”，因为它将是自定义筛选",
                    "examples": [
                        ":filter=\"myFilterInput\""
                    ],
                    "category": "filter"
                },
                "filter-method": {
                    "type": "Function",
                    "desc": "实际的过滤机制；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "rows": {
                            "type": "Array",
                            "desc": "Array of rows"
                        },
                        "terms": {
                            "type": [
                                "String",
                                "Object"
                            ],
                            "desc": "Terms to filter with (is essentially the 'filter' prop value)"
                        },
                        "cols": {
                            "type": "Array",
                            "desc": "Column definitions"
                        },
                        "getCellValue": {
                            "type": "Function",
                            "desc": "Optional function to get a cell value",
                            "params": {
                                "col": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Column name from column definitions"
                                },
                                "row": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "The row object"
                                }
                            },
                            "returns": {
                                "type": "Any",
                                "desc": "Parsed/Processed cell value",
                                "examples": [
                                    "Ice Cream Sandwich"
                                ]
                            }
                        }
                    },
                    "returns": {
                        "type": "Array",
                        "desc": "Filtered rows"
                    },
                    "default": "(see source code)",
                    "examples": [
                        "(see source code)"
                    ],
                    "category": "filter",
                    "required": false
                },
                "pagination": {
                    "type": "Object",
                    "desc": "分页对象；您还可以使用“v-model:分页”进行同步；当不同步时，它只是在第一次渲染时初始化分页",
                    "definition": {
                        "sortBy": {
                            "type": "String",
                            "desc": "Column name (from column definition)",
                            "examples": [
                                "calories"
                            ]
                        },
                        "descending": {
                            "type": "Boolean",
                            "desc": "Is sorting in descending order?"
                        },
                        "page": {
                            "type": "Number",
                            "desc": "Page number (1-based)"
                        },
                        "rowsPerPage": {
                            "type": "Number",
                            "desc": "How many rows per page? 0 means Infinite"
                        },
                        "rowsNumber": {
                            "type": "Number",
                            "desc": "For server-side fetching only. How many total database rows are there to be added to the table. If set, causes the QTable to emit @request when data is required."
                        }
                    },
                    "syncable": true,
                    "examples": [
                        ":pagination=\"myInitialPagination\"",
                        "v-model:pagination=\"myPagination\""
                    ],
                    "category": "pagination"
                },
                "rows-per-page-options": {
                    "type": "Array",
                    "desc": "供用户选择的选项（数字）；数字0表示“在一页中显示所有行”",
                    "default": "[ 3, 5, 7, 10, 15, 20, 25, 50, 0 ]",
                    "examples": [
                        ":rows-per-page-options=\"[10, 20]\""
                    ],
                    "category": "pagination",
                    "required": false
                },
                "selection": {
                    "type": "String",
                    "desc": "选择类型",
                    "default": "none",
                    "values": [
                        "single",
                        "multiple",
                        "none"
                    ],
                    "category": "selection",
                    "required": false
                },
                "selected": {
                    "type": "Array",
                    "desc": "保留用户选择数组",
                    "default": "[]",
                    "syncable": true,
                    "examples": [
                        "v-model:selected=\"selection\""
                    ],
                    "category": "selection",
                    "required": false
                },
                "expanded": {
                    "type": "Array",
                    "desc": "保留具有扩展行键的数组",
                    "default": "[]",
                    "syncable": true,
                    "examples": [
                        "v-model:expanded=\"expanded\""
                    ],
                    "category": "expansion",
                    "required": false
                },
                "sort-method": {
                    "type": "Function",
                    "desc": "实际的排序机制。函数（rows，sortBy，descending）=>已排序的行；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "rows": {
                            "type": "Array",
                            "desc": "Array with rows"
                        },
                        "sortBy": {
                            "type": "String",
                            "desc": "Column name (from column definition)",
                            "examples": [
                                "calories"
                            ]
                        },
                        "descending": {
                            "type": "Boolean",
                            "desc": "Is sorting in descending order?"
                        }
                    },
                    "returns": {
                        "type": "Array",
                        "desc": "Sorted rows"
                    },
                    "default": "(see source code)",
                    "examples": [
                        "(see source code)"
                    ],
                    "category": "sorting",
                    "required": false
                }
            },
            "slots": {
                "loading": {
                    "desc": "当表处于加载状态时，覆盖默认效果；建议：QInnerLoading"
                },
                "item": {
                    "desc": "在“网格”模式下用于定义项目的插槽；建议：QCard",
                    "scope": {
                        "key": {
                            "type": "Any",
                            "desc": "Row/Item's key"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "Row/Item object"
                        },
                        "rowIndex": {
                            "type": "Number",
                            "desc": "Row/Item's index (0 based) in the filtered and sorted table"
                        },
                        "pageIndex": {
                            "type": "Number",
                            "desc": "Row/Item's index (0 based) in the current page of the filtered and sorted table"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row/item selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row/item expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "body": {
                    "desc": "槽，用于定义正文行的外观；建议：QTr+Td",
                    "scope": {
                        "key": {
                            "type": "Any",
                            "desc": "Row's key"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "Row object"
                        },
                        "rowIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the filtered and sorted table"
                        },
                        "pageIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the current page of the filtered and sorted table"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        },
                        "__trClass": {
                            "type": "String",
                            "desc": "Internal prop passed down to QTr (if used)"
                        }
                    }
                },
                "body-cell": {
                    "desc": "插槽，用于定义所有身体细胞的外观；建议：QTd",
                    "scope": {
                        "col": {
                            "type": "Object",
                            "desc": "Column definition for column associated with table cell"
                        },
                        "value": {
                            "type": "Any",
                            "desc": "Parsed/Formatted value of table cell"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Row's key"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "Row object"
                        },
                        "rowIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the filtered and sorted table"
                        },
                        "pageIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the current page of the filtered and sorted table"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "body-cell-[name]": {
                    "desc": "槽，用于定义特定列单元格的外观；将“[name]”替换为列名（来自列定义对象）",
                    "scope": {
                        "col": {
                            "type": "Object",
                            "desc": "Column definition for column associated with table cell"
                        },
                        "value": {
                            "type": "Any",
                            "desc": "Parsed/Formatted value of table cell"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Row's key"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "Row object"
                        },
                        "rowIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the filtered and sorted table"
                        },
                        "pageIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the current page of the filtered and sorted table"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "header": {
                    "desc": "插槽，用于定义标头的外观；建议：QTr+QTh",
                    "scope": {
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        },
                        "__trClass": {
                            "type": "String",
                            "desc": "Internal prop passed down to QTr (if used)"
                        },
                        "header": {
                            "type": "Boolean",
                            "desc": "Internal prop passed down to QTh (if used); Always 'true'"
                        }
                    }
                },
                "header-cell": {
                    "desc": "插槽，用于定义每个标头单元格的外观；建议：QTh",
                    "scope": {
                        "col": {
                            "type": "Object",
                            "desc": "Column definition associated to header cell"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "header-cell-[name]": {
                    "desc": "槽，用于定义特定标题单元格的外观；将“[name]”替换为列名（来自列定义对象）",
                    "scope": {
                        "col": {
                            "type": "Object",
                            "desc": "Column definition associated to header cell"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "body-selection": {
                    "desc": "用于定义正文选择列外观的槽；建议：Q复选框",
                    "scope": {
                        "key": {
                            "type": "Any",
                            "desc": "Row's key"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "Row object"
                        },
                        "rowIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the filtered and sorted table"
                        },
                        "pageIndex": {
                            "type": "Number",
                            "desc": "Row's index (0 based) in the current page of the filtered and sorted table"
                        },
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "header-selection": {
                    "desc": "用于定义标题选择列外观的插槽（仅适用于多选模式）；建议：Q复选框",
                    "scope": {
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        },
                        "colsMap": {
                            "type": "Object",
                            "desc": "Column mapping (key is column name, value is column object)"
                        },
                        "sort": {
                            "type": "Function",
                            "desc": "Trigger a table sort",
                            "params": {
                                "col": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "required": true,
                                    "desc": "Column name or column definition object",
                                    "examples": [
                                        "calories"
                                    ]
                                }
                            },
                            "returns": null
                        },
                        "selected": {
                            "type": "Boolean",
                            "desc": "(Only if using selection) Is row selected? Can directly be assigned new Boolean value which changes selection state",
                            "reactive": true
                        },
                        "expand": {
                            "type": "Boolean",
                            "desc": "Is row expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "color": {
                            "type": "String",
                            "desc": "Color name for component from the Quasar Color Palette",
                            "examples": [
                                "primary",
                                "teal-10"
                            ],
                            "category": "style"
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "Notify the component that the background is a dark color",
                            "category": "style"
                        },
                        "dense": {
                            "type": "Boolean",
                            "desc": "Dense mode; occupies less space",
                            "category": "style"
                        }
                    }
                },
                "top-row": {
                    "desc": "插槽，用于定义顶部额外行的外观",
                    "scope": {
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        }
                    }
                },
                "bottom-row": {
                    "desc": "插槽，用于定义底部额外行的外观",
                    "scope": {
                        "cols": {
                            "type": "Object",
                            "desc": "Column definitions"
                        }
                    }
                },
                "top": {
                    "desc": "用于定义桌面外观的插槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "bottom": {
                    "desc": "用于定义桌子底部外观的插槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "pagination": {
                    "desc": "用于覆盖默认分页标签和按钮的插槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "top-left": {
                    "desc": "用于定义桌面左侧部分外观的插槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "top-right": {
                    "desc": "用于定义桌面右侧部分外观的插槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "top-selection": {
                    "desc": "定义当用户至少选择了一行时顶部表格部分的样子的槽",
                    "scope": {
                        "pagination": {
                            "type": "Object",
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "pagesNumber": {
                            "type": "Number",
                            "desc": "Number of pages available"
                        },
                        "isFirstPage": {
                            "type": "Boolean",
                            "desc": "Are we on first page?"
                        },
                        "isLastPage": {
                            "type": "Boolean",
                            "desc": "Are we on last page?"
                        },
                        "firstPage": {
                            "type": "Function",
                            "desc": "Navigates to first page",
                            "params": null,
                            "returns": null
                        },
                        "prevPage": {
                            "type": "Function",
                            "desc": "Navigates to previous page, if available",
                            "params": null,
                            "returns": null
                        },
                        "nextPage": {
                            "type": "Function",
                            "desc": "Navigates to next page, if available",
                            "params": null,
                            "returns": null
                        },
                        "lastPage": {
                            "type": "Function",
                            "desc": "Navigates to last page",
                            "params": null,
                            "returns": null
                        },
                        "inFullscreen": {
                            "type": "Boolean",
                            "desc": "Is table in fullscreen mode?"
                        },
                        "toggleFullscreen": {
                            "type": "Function",
                            "desc": "Toggles fullscreen mode",
                            "params": null,
                            "returns": null
                        }
                    }
                },
                "no-data": {
                    "desc": "插槽，用于定义当没有显示内容时底部的外观",
                    "scope": {
                        "message": {
                            "type": "String",
                            "desc": "The suggested message",
                            "examples": [
                                "No data available"
                            ]
                        },
                        "icon": {
                            "type": "String",
                            "desc": "The suggested icon name (following Quasar convention)",
                            "examples": [
                                "warning"
                            ]
                        }
                    }
                }
            },
            "events": {
                "row-click": {
                    "desc": "当用户点击/点击一行时发出；在使用主体/行/项范围的插槽时不发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "The row upon which user has clicked/tapped"
                        },
                        "index": {
                            "type": "Number",
                            "desc": "Index of the row in the current page"
                        }
                    }
                },
                "row-dblclick": {
                    "desc": "当用户快速双击/点击一行时发出；在使用主体/行/项范围的插槽时不发出；使用前请检查JS dblclick事件支持",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "The row upon which user has double clicked/tapped"
                        },
                        "index": {
                            "type": "Number",
                            "desc": "Index of the row in the current page"
                        }
                    }
                },
                "row-contextmenu": {
                    "desc": "当用户右键单击/长按一行时发出；在使用主体/行/项范围的插槽时不发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object"
                        },
                        "row": {
                            "type": "Object",
                            "desc": "The row upon which user has right clicked/long tapped"
                        },
                        "index": {
                            "type": "Number",
                            "desc": "Index of the row in the current page"
                        }
                    }
                },
                "request": {
                    "desc": "在触发服务器请求时发出",
                    "params": {
                        "requestProp": {
                            "type": "Object",
                            "desc": "Props of the request",
                            "definition": {
                                "pagination": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "Pagination object",
                                    "definition": {
                                        "sortBy": {
                                            "type": "String",
                                            "required": true,
                                            "desc": "Column name (from column definition)",
                                            "examples": [
                                                "calories"
                                            ]
                                        },
                                        "descending": {
                                            "type": "Boolean",
                                            "required": true,
                                            "desc": "Is sorting in descending order?"
                                        },
                                        "page": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "Page number (1-based)"
                                        },
                                        "rowsPerPage": {
                                            "type": "Number",
                                            "required": true,
                                            "desc": "How many rows per page? 0 means Infinite"
                                        }
                                    }
                                },
                                "filter": {
                                    "type": [
                                        "String",
                                        "Object"
                                    ],
                                    "desc": "String/Object to filter table with (the 'filter' prop)"
                                },
                                "getCellValue": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "Function to get a cell value",
                                    "params": {
                                        "col": {
                                            "type": "Object",
                                            "required": true,
                                            "desc": "Column name from column definitions"
                                        },
                                        "row": {
                                            "type": "Object",
                                            "required": true,
                                            "desc": "The row object"
                                        }
                                    },
                                    "returns": {
                                        "type": "Any",
                                        "desc": "Parsed/Processed cell value",
                                        "examples": [
                                            "Ice Cream Sandwich"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "selection": {
                    "desc": "当用户选择/取消选择行时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Selection details",
                            "definition": {
                                "rows": {
                                    "type": "Array",
                                    "required": true,
                                    "desc": "Array of row objects that were selected/unselected"
                                },
                                "keys": {
                                    "type": "Array",
                                    "required": true,
                                    "desc": "Array of the keys of rows that were selected/unselected"
                                },
                                "added": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Were the rows added to selection (true) or removed from selection (false)"
                                },
                                "evt": {
                                    "type": "Event",
                                    "desc": "JS event object",
                                    "required": true
                                }
                            }
                        }
                    }
                },
                "update:pagination": {
                    "desc": "Vue在“v-model:paging”上用于更新其值",
                    "params": {
                        "newPagination": {
                            "type": "Object",
                            "desc": "The updated pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "required": true,
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "How many rows per page? 0 means Infinite"
                                },
                                "rowsNumber": {
                                    "type": "Number",
                                    "required": false,
                                    "desc": "For server-side fetching only. How many total database rows are there to be added to the table."
                                }
                            }
                        }
                    }
                },
                "update:selected": {
                    "desc": "Vue在“v-model:selected”道具上用于更新其值",
                    "params": {
                        "newSelected": {
                            "type": "Array",
                            "desc": "The updated selected array",
                            "examples": [
                                "[ { name: 'Frozen Yogurt', calories: 159, fat: 6 } ]"
                            ]
                        }
                    }
                },
                "update:expanded": {
                    "desc": "Vue在“v-model:expanded”道具上用于更新其值",
                    "params": {
                        "newExpanded": {
                            "type": "Array",
                            "desc": "The updated expanded array",
                            "examples": [
                                "[ 'row-a', 'row-b' ]"
                            ]
                        }
                    }
                },
                "virtual-scroll": {
                    "desc": "如果使用虚拟滚动，则在发生虚拟滚动时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Object of properties on the new scroll position",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Index of the list item that was scrolled into view (0 based)"
                                },
                                "from": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the first list item that is rendered (0 based)"
                                },
                                "to": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the last list item that is rendered (0 based)"
                                },
                                "direction": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Direction of change",
                                    "values": [
                                        "increase",
                                        "decrease"
                                    ]
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "toggleFullscreen": {
                    "desc": "切换全屏模式"
                },
                "setFullscreen": {
                    "desc": "进入全屏视图"
                },
                "exitFullscreen": {
                    "desc": "离开全屏视图"
                },
                "requestServerInteraction": {
                    "desc": "触发服务器请求（发出“请求”事件）",
                    "params": {
                        "props": {
                            "type": "Object",
                            "required": false,
                            "desc": "Request details",
                            "definition": {
                                "pagination": {
                                    "type": "Object",
                                    "required": false,
                                    "desc": "Optional pagination object",
                                    "definition": {
                                        "sortBy": {
                                            "type": "String",
                                            "desc": "Column name (from column definition)",
                                            "examples": [
                                                "calories"
                                            ]
                                        },
                                        "descending": {
                                            "type": "Boolean",
                                            "desc": "Is sorting in descending order?"
                                        },
                                        "page": {
                                            "type": "Number",
                                            "desc": "Page number (1-based)"
                                        },
                                        "rowsPerPage": {
                                            "type": "Number",
                                            "desc": "How many rows per page? 0 means Infinite"
                                        },
                                        "rowsNumber": {
                                            "type": "Number",
                                            "desc": "For server-side fetching only. How many total database rows are there to be added to the table."
                                        }
                                    }
                                },
                                "filter": {
                                    "type": "Function",
                                    "desc": "Filtering method (the 'filter-method' prop)",
                                    "params": {
                                        "rows": {
                                            "type": "Array",
                                            "required": true,
                                            "desc": "Array of rows"
                                        },
                                        "terms": {
                                            "type": [
                                                "String",
                                                "Object"
                                            ],
                                            "required": true,
                                            "desc": "Terms to filter with (is essentially the 'filter' prop value)"
                                        },
                                        "cols": {
                                            "type": "Array",
                                            "desc": "Optional column definitions"
                                        },
                                        "getCellValue": {
                                            "type": "Function",
                                            "desc": "Optional function to get a cell value",
                                            "params": {
                                                "col": {
                                                    "type": "Object",
                                                    "desc": "Column name from column definitions"
                                                },
                                                "row": {
                                                    "type": "Object",
                                                    "desc": "The row object"
                                                }
                                            },
                                            "returns": {
                                                "type": "Any",
                                                "desc": "Parsed/Processed cell value",
                                                "examples": [
                                                    "Ice Cream Sandwich"
                                                ]
                                            }
                                        }
                                    },
                                    "returns": {
                                        "type": "Array",
                                        "desc": "Filtered rows"
                                    }
                                }
                            }
                        }
                    }
                },
                "setPagination": {
                    "desc": "除非使用外部分页对象（通过“v-model:pagition”道具），否则可以使用此方法并强制更改内部分页",
                    "params": {
                        "pagination": {
                            "type": "Object",
                            "required": true,
                            "desc": "Pagination object",
                            "definition": {
                                "sortBy": {
                                    "type": "String",
                                    "desc": "Column name (from column definition)",
                                    "examples": [
                                        "calories"
                                    ]
                                },
                                "descending": {
                                    "type": "Boolean",
                                    "desc": "Is sorting in descending order?"
                                },
                                "page": {
                                    "type": "Number",
                                    "desc": "Page number (1-based)"
                                },
                                "rowsPerPage": {
                                    "type": "Number",
                                    "desc": "How many rows per page? 0 means Infinite"
                                }
                            }
                        },
                        "forceServerRequest": {
                            "type": "Boolean",
                            "desc": "Also force a server request"
                        }
                    }
                },
                "firstPage": {
                    "desc": "导航到第一页"
                },
                "prevPage": {
                    "desc": "导航到上一页（如果可用）"
                },
                "nextPage": {
                    "desc": "导航到下一页（如果可用）"
                },
                "lastPage": {
                    "desc": "导航到最后一页"
                },
                "isRowSelected": {
                    "desc": "确定用户是否已选择行",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "Row key value",
                            "examples": [
                                "calories"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Is row selected or not?"
                    }
                },
                "clearSelection": {
                    "desc": "清除用户选择（使用空数组发出“update:selected”）"
                },
                "isRowExpanded": {
                    "desc": "确定行是否展开",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "Row key value",
                            "examples": [
                                "calories"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Is row expanded or not?"
                    }
                },
                "setExpanded": {
                    "desc": "设置展开的行键数组；特别有用的是，如果不使用外部“扩展”状态，否则只会发出带有值的“update:expanded”",
                    "params": {
                        "expanded": {
                            "type": "Array",
                            "required": true,
                            "desc": "Array containing keys of the expanded rows",
                            "examples": [
                                "[ 'row-a', 'row-b' ]"
                            ]
                        }
                    }
                },
                "sort": {
                    "desc": "触发表排序",
                    "params": {
                        "col": {
                            "type": [
                                "String",
                                "Object"
                            ],
                            "required": true,
                            "desc": "Column name or column definition object",
                            "examples": [
                                "calories"
                            ]
                        }
                    }
                },
                "resetVirtualScroll": {
                    "desc": "重置虚拟滚动（如果使用）计算；需要自定义边缘案例"
                },
                "scrollTo": {
                    "desc": "将表滚动到页面中具有指定索引的行（基于0）",
                    "params": {
                        "index": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "required": true,
                            "desc": "The index of the row in page (0 based)"
                        },
                        "edge": {
                            "type": "String",
                            "desc": "Only for virtual scroll - the edge to align to if the row is not visible already; If the '-force' version is used then it always aligns",
                            "values": [
                                "start",
                                "center",
                                "end",
                                "start-force",
                                "center-force",
                                "end-force"
                            ],
                            "default": "end (if scrolling towards the end) / start (if scrolling towards the start)",
                            "required": false
                        }
                    }
                }
            },
            "computedProps": {
                "filteredSortedRows": {
                    "desc": "过滤和排序的行（如果使用服务器端获取，则与行道具相同）",
                    "type": "Array",
                    "examples": [
                        "[ { name: 'Ice Cream Sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: 8, iron: 1 }, ... ]"
                    ]
                },
                "computedRows": {
                    "desc": "分页、过滤和排序的行（如果使用服务器端获取，则与行道具相同）",
                    "type": "Array",
                    "examples": [
                        "[ { name: 'Ice Cream Sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, sodium: 129, calcium: 8, iron: 1 }, ... ]"
                    ]
                },
                "computedRowsNumber": {
                    "desc": "计算的行数",
                    "type": "Number"
                }
            }
        }
    },
    {
        "name": "q-th",
        "desc": "",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/table"
            },
            "props": {
                "props": {
                    "type": "Object",
                    "desc": "QTable的头列作用域槽属性",
                    "examples": [
                        ":props=\"props\""
                    ],
                    "category": "general"
                },
                "auto-width": {
                    "type": "Boolean",
                    "desc": "尝试缩小标题列宽大小；适用于带有复选框/单选框/切换的列",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-tr",
        "desc": "",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/table"
            },
            "props": {
                "props": {
                    "type": "Object",
                    "desc": "QTable的行范围插槽属性",
                    "examples": [
                        ":props=\"props\""
                    ],
                    "category": "general"
                },
                "no-hover": {
                    "type": "Boolean",
                    "desc": "禁用悬停效果",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-td",
        "desc": "",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/table"
            },
            "props": {
                "props": {
                    "type": "Object",
                    "desc": "QTable的列范围槽属性",
                    "examples": [
                        ":props=\"props\""
                    ],
                    "category": "general"
                },
                "auto-width": {
                    "type": "Boolean",
                    "desc": "尝试缩小列宽大小；适用于带有复选框/单选框/切换的列",
                    "category": "content"
                },
                "no-hover": {
                    "type": "Boolean",
                    "desc": "禁用悬停效果",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-tabs",
        "desc": "选项卡组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tabs"
            },
            "props": {
                "model-value": {
                    "desc": "定义当前面板名称的组件的模型；使用此属性（以及“update:modelValue”事件的侦听器）或使用v-model指令",
                    "required": false,
                    "syncable": true,
                    "category": "model",
                    "type": [
                        "Number",
                        "String",
                        "null",
                        "undefined"
                    ],
                    "examples": [
                        "v-model=\"selectedTab\""
                    ]
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "使用垂直设计（选项卡一个在另一个顶部，而不是一个在水平方向相邻）",
                    "category": "content"
                },
                "outside-arrows": {
                    "type": "Boolean",
                    "desc": "为箭头保留空间，以便将它们放置在选项卡的两侧（箭头在不活动时会褪色）",
                    "category": "content"
                },
                "mobile-arrows": {
                    "type": "Boolean",
                    "desc": "在移动设备上强制显示箭头（如果需要）",
                    "category": "content"
                },
                "align": {
                    "type": "String",
                    "desc": "水平对齐选项卡容器中的选项卡",
                    "default": "center",
                    "values": [
                        "left",
                        "center",
                        "right",
                        "justify"
                    ],
                    "category": "content",
                    "required": false
                },
                "breakpoint": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "选项卡容器宽度的断点（以像素为单位），选项卡在该宽度处自动转向对齐对齐",
                    "default": 600,
                    "category": "content|behavior",
                    "required": false
                },
                "active-color": {
                    "type": "String",
                    "desc": "要归因于活动选项卡的文本的颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "active-bg-color": {
                    "type": "String",
                    "desc": "要归因于活动选项卡背景的颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "indicator-color": {
                    "type": "String",
                    "desc": "要归因于活动选项卡的指示符（下划线）的颜色",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "content-class": {
                    "type": "String",
                    "desc": "要归因于内容包装的类定义",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                },
                "active-class": {
                    "type": "String",
                    "desc": "要在活动选项卡上设置的类",
                    "examples": [
                        "my-active-class"
                    ],
                    "category": "style",
                    "addedIn": "v2.1.4"
                },
                "left-icon": {
                    "type": "String",
                    "desc": "当选项卡延伸超过选项卡容器的宽度时，替换用于向左滚动选项卡的默认箭头的图标的名称",
                    "examples": [
                        "arrow_left"
                    ],
                    "category": "content"
                },
                "right-icon": {
                    "type": "String",
                    "desc": "当选项卡延伸超过选项卡容器的宽度时，替换用于向右滚动选项卡的默认箭头的图标的名称",
                    "examples": [
                        "arrow_right"
                    ],
                    "category": "content"
                },
                "stretch": {
                    "type": "Boolean",
                    "desc": "在柔性盒父对象上使用时，选项卡将拉伸到父对象的高度",
                    "category": "content"
                },
                "shrink": {
                    "type": "Boolean",
                    "desc": "默认情况下，QTabs设置为增长到可用空间；然而，你可以用这个道具扭转这种局面；在QToolbar中放置零部件时有用（也是必需的）",
                    "category": "content"
                },
                "switch-indicator": {
                    "type": "Boolean",
                    "desc": "切换指示器位置（在选项卡左侧用于垂直模式，或在选项卡上方用于默认水平模式）",
                    "category": "content"
                },
                "narrow-indicator": {
                    "type": "Boolean",
                    "desc": "允许指示器的宽度与选项卡的内容（文本或图标）相同，而不是选项卡的整个宽度",
                    "category": "content"
                },
                "inline-label": {
                    "type": "Boolean",
                    "desc": "如果使用图标，则允许文本与图标内联",
                    "category": "content"
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "关闭选项卡中所有字母的大写（这是默认设置）",
                    "category": "content"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件需要更改模型时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Any",
                            "desc": "New model value",
                            "required": true
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-tab",
        "desc": "选项卡",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tabs"
            },
            "props": {
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "label": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "用于标记选项卡的数字或字符串",
                    "examples": [
                        "Home"
                    ],
                    "category": "content"
                },
                "alert": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "在选项卡中添加一个警告符号，通知用户有一些更新；如果其值不是布尔值，则可以指定颜色",
                    "examples": [
                        "alert",
                        "alert=\"purple\""
                    ],
                    "category": "content"
                },
                "alert-icon": {
                    "type": "String",
                    "desc": "在选项卡中添加一个浮动图标，通知用户有一些更新；仅当设置了“alert”时才显示；可以使用“alert”道具指定的颜色",
                    "examples": [
                        "alert-icon=\"alarm_on\""
                    ],
                    "category": "content"
                },
                "name": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "面板名称",
                    "default": "A random UID",
                    "examples": [
                        "home",
                        ":name=\"1\""
                    ],
                    "category": "general",
                    "required": false
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "关闭选项卡中所有字母的大写（这是默认设置）",
                    "category": "content"
                },
                "content-class": {
                    "type": "String",
                    "desc": "要归因于内容包装的类定义",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QMenu，QTooltip"
                }
            }
        }
    },
    {
        "name": "q-route-tab",
        "desc": "选项卡路由",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tabs"
            },
            "props": {
                "to": {
                    "type": [
                        "String",
                        "Object"
                    ],
                    "desc": "相当于Vue Router＜Router link＞的“to”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "/home/dashboard",
                        ":to=\"{ name: 'my-route-name' }\""
                    ],
                    "category": "navigation"
                },
                "exact": {
                    "type": "Boolean",
                    "desc": "相当于Vue路由器＜Router link＞的“精确”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "replace": {
                    "type": "Boolean",
                    "desc": "相当于Vue Router＜Router link＞的“replace”属性；被'href'道具取代（如果使用）",
                    "category": "navigation"
                },
                "active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-active-class"
                    ],
                    "category": "navigation"
                },
                "exact-active-class": {
                    "type": "String",
                    "desc": "等效于Vue Router＜Router link＞“活动类”属性；被'href'道具取代（如果使用）",
                    "examples": [
                        "my-exact-active-class"
                    ],
                    "category": "navigation"
                },
                "href": {
                    "type": "String",
                    "desc": "本机<a>链接href属性；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "https://quasar.dev"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "target": {
                    "type": "String",
                    "desc": "本机<a>链接目标属性；只能与'href'道具一起使用；优先于“到”/“精确”/“替换”/“活动类”/“准确活动类”道具",
                    "examples": [
                        "_blank",
                        "_self",
                        "_parent",
                        "_top"
                    ],
                    "category": "navigation",
                    "addedIn": "v2.4"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "label": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "用于标记选项卡的数字或字符串",
                    "examples": [
                        "Home"
                    ],
                    "category": "content"
                },
                "alert": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "在选项卡中添加一个警告符号，通知用户有一些更新；如果其值不是布尔值，则可以指定颜色",
                    "examples": [
                        "alert",
                        "alert=\"purple\""
                    ],
                    "category": "content"
                },
                "alert-icon": {
                    "type": "String",
                    "desc": "在选项卡中添加一个浮动图标，通知用户有一些更新；仅当设置了“alert”时才显示；可以使用“alert”道具指定的颜色",
                    "examples": [
                        "alert-icon=\"alarm_on\""
                    ],
                    "category": "content"
                },
                "name": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "面板名称",
                    "default": "A random UID",
                    "examples": [
                        "home",
                        ":name=\"1\""
                    ],
                    "category": "general",
                    "required": false
                },
                "no-caps": {
                    "type": "Boolean",
                    "desc": "关闭选项卡中所有字母的大写（这是默认设置）",
                    "category": "content"
                },
                "content-class": {
                    "type": "String",
                    "desc": "要归因于内容包装的类定义",
                    "examples": [
                        "my-special-class"
                    ],
                    "category": "style"
                },
                "ripple": {
                    "type": [
                        "Boolean",
                        "Object"
                    ],
                    "desc": "配置材料波纹（通过将其设置为“false”或提供配置对象来禁用它）",
                    "default": true,
                    "examples": [
                        false,
                        "{ early: true, center: true, color: 'teal', keyCodes: [] }"
                    ],
                    "category": "style",
                    "required": false
                },
                "tabindex": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "Tabindex HTML属性值",
                    "examples": [
                        "0",
                        "100"
                    ],
                    "category": "general"
                }
            },
            "slots": {
                "default": {
                    "desc": "建议：QMenu，QTooltip"
                }
            },
            "events": {
                "click": {
                    "desc": "单击组件时发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object; If you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
                        },
                        "go": {
                            "type": "Function",
                            "desc": "When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
                            "required": false,
                            "params": {
                                "opts": {
                                    "type": "Object",
                                    "desc": "Optional options",
                                    "required": false,
                                    "definition": {
                                        "to": {
                                            "type": [
                                                "String",
                                                "Object"
                                            ],
                                            "desc": "Equivalent to Vue Router <router-link> 'to' property; Specify it explicitly otherwise it will be set with same value as component's 'to' prop",
                                            "required": false,
                                            "examples": [
                                                "/home/dashboard",
                                                "{ name: 'my-route-name' }"
                                            ]
                                        },
                                        "replace": {
                                            "type": "Boolean",
                                            "desc": "Equivalent to Vue Router <router-link> 'replace' property; Specify it explicitly otherwise it will be set with same value as component's 'replace' prop",
                                            "required": false
                                        },
                                        "returnRouterError": {
                                            "type": "Boolean",
                                            "desc": "Return the router error, if any; Otherwise the returned Promise will always fulfill",
                                            "required": false
                                        }
                                    },
                                    "addedIn": "v2.9"
                                }
                            },
                            "returns": {
                                "type": "Promise<any>",
                                "desc": "Returns the router's navigation promise",
                                "addedIn": "v2.9"
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-tab-panels",
        "desc": "选项卡组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tab-panels"
            },
            "props": {
                "model-value": {
                    "type": "Any",
                    "desc": "定义当前面板名称的组件的模型；如果使用数字，它不会定义面板的索引，而是定义面板的名称，该名称也可以是Integer；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令。",
                    "examples": [
                        "v-model=\"panelName\""
                    ],
                    "category": "model"
                },
                "keep-alive": {
                    "type": "Boolean",
                    "desc": "相当于在内容上使用Vue的原生＜keep-alive＞组件",
                    "category": "behavior"
                },
                "keep-alive-include": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生include道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-exclude": {
                    "type": [
                        "String",
                        "Array",
                        "RegExp"
                    ],
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生exclude道具；值必须是有效的Vue组件名称",
                    "examples": [
                        "a,b",
                        "/a|b/",
                        "['a', 'b']"
                    ],
                    "category": "behavior"
                },
                "keep-alive-max": {
                    "type": "Number",
                    "desc": "相当于在＜keep-alive＞中使用Vue的原生最大道具",
                    "category": "behavior"
                },
                "animated": {
                    "type": "Boolean",
                    "desc": "启用面板之间的转换（另请参阅“转换前一个”和“转换下一个”道具）",
                    "category": "behavior"
                },
                "infinite": {
                    "type": "Boolean",
                    "desc": "使组件显示为无穷大（当到达最后一个面板时，下一个面板将成为第一个面板）",
                    "category": "behavior"
                },
                "swipeable": {
                    "type": "Boolean",
                    "desc": "启用滑动事件（可能会干扰内容的触摸/鼠标事件）",
                    "category": "behavior"
                },
                "vertical": {
                    "type": "Boolean",
                    "desc": "默认转换和滑动动作将在垂直轴上",
                    "category": "behavior"
                },
                "transition-prev": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "slide-right/slide-down",
                    "required": false
                },
                "transition-next": {
                    "type": "String",
                    "desc": "Quasar的嵌入过渡之一（仅当设置了“动画”道具时才有效）",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "slide-left/slide-up",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "addedIn": "v2.2",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "当组件更改模型时发出；如果模型在外部发生更改，则会触发此事件_isn't_；也被v-model使用",
                    "params": {
                        "value": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "New current panel name",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "before-transition": {
                    "desc": "在转换到新面板之前发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition is going",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition is happening",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                },
                "transition": {
                    "desc": "在组件转换到新面板后发出",
                    "params": {
                        "newVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name towards transition has occurred",
                            "examples": [
                                "dashboard"
                            ]
                        },
                        "oldVal": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel name from which transition has happened",
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            },
            "methods": {
                "next": {
                    "desc": "转到下一个面板"
                },
                "previous": {
                    "desc": "转到上一个面板"
                },
                "goTo": {
                    "desc": "转到特定面板",
                    "params": {
                        "panelName": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer",
                            "required": true,
                            "examples": [
                                "dashboard"
                            ]
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-tab-panel",
        "desc": "选项卡",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tab-panels"
            },
            "props": {
                "name": {
                    "type": "Any",
                    "desc": "面板名称",
                    "required": true,
                    "examples": [
                        "accounts",
                        "firstPanel",
                        ":name=\"1\""
                    ],
                    "category": "general"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-time-line",
        "desc": "时间线组",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/timeline"
            },
            "props": {
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "side": {
                    "type": "String",
                    "desc": "侧面以密集舒适的布局放置时间线条目；对于松散布局，它会被QTimelineEntry侧支柱覆盖",
                    "default": "right",
                    "values": [
                        "left",
                        "right"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "layout": {
                    "type": "String",
                    "desc": "时间线的布局。Dense将内容和标签放在一边。Comfortable将内容放在一边，标签放在另一边。宽松将内容放在两边。",
                    "default": "dense",
                    "values": [
                        "dense",
                        "comfortable",
                        "loose"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                }
            },
            "slots": {
                "default": {
                    "desc": "用于组件内容"
                }
            }
        }
    },
    {
        "name": "q-time-line-entry",
        "desc": "时间线",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/timeline"
            },
            "props": {
                "heading": {
                    "type": "Boolean",
                    "desc": "定义标题时间线项目",
                    "category": "content"
                },
                "tag": {
                    "type": "String",
                    "desc": "要使用的标记，如果仅为“heading”类型",
                    "examples": [
                        "div",
                        "span",
                        "h1"
                    ],
                    "category": "content",
                    "default": "h3",
                    "required": false
                },
                "side": {
                    "type": "String",
                    "desc": "侧面放置时间线条目；仅适用于QTimeline布局松散的情况。",
                    "default": "right",
                    "values": [
                        "left",
                        "right"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "avatar": {
                    "type": "String",
                    "desc": "到化身图像的URL；图标在使用时优先，因此它会替换化身",
                    "transformAssetUrls": true,
                    "examples": [
                        "(public folder) src=\"img/my-bg.png\"",
                        "(assets folder) src=\"~assets/my-img.png\"",
                        "(relative path format) :src=\"require('./my_img.jpg')\"",
                        "(URL) src=\"https://placeimg.com/500/300/nature\""
                    ],
                    "category": "content"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "title": {
                    "type": "String",
                    "desc": "时间线条目的标题；如果使用“title”槽，则被覆盖",
                    "examples": [
                        "December party"
                    ],
                    "category": "content"
                },
                "subtitle": {
                    "type": "String",
                    "desc": "时间线条目的副标题；如果使用“字幕”槽，则被覆盖",
                    "examples": [
                        "All invited"
                    ],
                    "category": "content"
                },
                "body": {
                    "type": "String",
                    "desc": "时间线条目的正文内容；使用此道具或默认插槽",
                    "examples": [
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    ],
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "日程表条目内容（正文）"
                },
                "title": {
                    "desc": "标题的可选插槽；使用时，它会覆盖“title”道具"
                },
                "subtitle": {
                    "desc": "字幕可选插槽；使用时，它会覆盖“字幕”道具"
                }
            }
        }
    },
    {
        "name": "q-toolbar",
        "desc": "工具栏",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/toolbar"
            },
            "props": {
                "inset": {
                    "type": "Boolean",
                    "desc": "将插入应用于内容（对后续工具栏有用）",
                    "category": "content"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-toolbar-title",
        "desc": "工具栏标题",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/toolbar"
            },
            "props": {
                "shrink": {
                    "type": "Boolean",
                    "desc": "默认情况下，QToolbarTitle设置为增长到可用空间。然而，你可以用这个道具扭转这种局面",
                    "category": "behavior"
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            }
        }
    },
    {
        "name": "q-tooltip",
        "desc": "工具提示",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tooltip"
            },
            "props": {
                "transition-show": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "jump-down",
                    "required": false
                },
                "transition-hide": {
                    "type": "String",
                    "desc": "Quasar的嵌入式转换之一",
                    "examples": [
                        "fade",
                        "slide-down"
                    ],
                    "category": "transition",
                    "default": "jump-up",
                    "required": false
                },
                "transition-duration": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "转换持续时间（以毫秒为单位，无单位）",
                    "default": 300,
                    "category": "transition",
                    "required": false
                },
                "model-value": {
                    "type": "Boolean",
                    "desc": "定义显示/隐藏状态的组件的模型；使用此属性（以及“update:model-value”事件的侦听器）或使用v-model指令",
                    "category": "model"
                },
                "max-height": {
                    "type": "String",
                    "desc": "工具提示的最大高度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "content"
                },
                "max-width": {
                    "type": "String",
                    "desc": "工具提示的最大宽度；以CSS为单位的大小，包括单位名称",
                    "examples": [
                        "16px",
                        "2rem"
                    ],
                    "category": "content"
                },
                "anchor": {
                    "type": "String",
                    "desc": "两个值设置工具提示相对于其目标的起始位置或锚点",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "default": "bottom middle",
                    "category": "position",
                    "required": false
                },
                "self": {
                    "type": "String",
                    "desc": "两个值设置工具提示相对于其目标的自身位置",
                    "values": [
                        "top left",
                        "top middle",
                        "top right",
                        "top start",
                        "top end",
                        "center left",
                        "center middle",
                        "center right",
                        "center start",
                        "center end",
                        "bottom left",
                        "bottom middle",
                        "bottom right",
                        "bottom start",
                        "bottom end"
                    ],
                    "default": "top middle",
                    "category": "position",
                    "required": false
                },
                "offset": {
                    "type": "Array",
                    "desc": "一个由两个数字组成的数组，用于以像素为单位水平和垂直偏移工具提示",
                    "default": "[14, 14]",
                    "examples": [
                        "[8, 8]",
                        "[5, 10]"
                    ],
                    "category": "position",
                    "required": false
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                },
                "target": {
                    "type": [
                        "Boolean",
                        "String"
                    ],
                    "desc": "配置目标元素以触发Tooltip切换；'true表示启用父DOM元素，false表示禁用将事件附加到任何DOM元素；通过使用String（CSS选择器），它将事件附加到指定的DOM元素（如果存在）",
                    "default": true,
                    "values": [
                        "(Boolean) true",
                        "(Boolean) false",
                        "(CSS selector)"
                    ],
                    "examples": [
                        ":target=\"false\"",
                        "target=\".my-parent\""
                    ],
                    "category": "behavior",
                    "required": false
                },
                "no-parent-event": {
                    "type": "Boolean",
                    "desc": "跳过将事件附加到目标DOM元素（触发元素显示）",
                    "category": "behavior"
                },
                "delay": {
                    "type": "Number",
                    "desc": "将工具提示配置为延迟显示",
                    "default": 0,
                    "category": "behavior",
                    "required": false
                },
                "hide-delay": {
                    "type": "Number",
                    "desc": "将工具提示配置为延迟消失",
                    "default": 0,
                    "category": "behavior",
                    "required": false
                }
            },
            "slots": {
                "default": {
                    "desc": "组件的devland未插槽内容中的默认插槽"
                }
            },
            "events": {
                "update:model-value": {
                    "desc": "显示/隐藏状态更改时发出；也被v-model使用",
                    "params": {
                        "value": {
                            "type": "Boolean",
                            "desc": "New state (showing/hidden)"
                        }
                    }
                },
                "show": {
                    "desc": "在组件触发show（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-show": {
                    "desc": "当组件触发show（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "hide": {
                    "desc": "在组件触发hide（）后发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                },
                "before-hide": {
                    "desc": "当组件触发hide（）但在完成之前发出",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": true
                        }
                    }
                }
            },
            "methods": {
                "show": {
                    "desc": "触发要显示的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "hide": {
                    "desc": "触发要隐藏的组件",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    }
                },
                "toggle": {
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object",
                            "required": false
                        }
                    },
                    "desc": "触发组件在显示/隐藏之间切换"
                },
                "updatePosition": {
                    "desc": "在某些自定义场景中，Quasar无法自动重新定位工具提示而不会出现显著的性能缺陷，因此最佳解决方案是在需要时调用此方法"
                }
            },
            "computedProps": {
                "contentEl": {
                    "type": "Element",
                    "desc": "渲染内容的DOM元素",
                    "addedIn": "v2.10.1"
                }
            }
        }
    },
    {
        "name": "q-tree",
        "desc": "树",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/tree"
            },
            "props": {
                "nodes": {
                    "type": "Array",
                    "tsType": "QTreeNode",
                    "desc": "指定树结构的节点数组",
                    "required": true,
                    "examples": [
                        "[ {...}, {...} ]"
                    ],
                    "category": "content"
                },
                "node-key": {
                    "type": "String",
                    "desc": "持有唯一节点id的每个节点对象的属性名称",
                    "required": true,
                    "examples": [
                        "key",
                        "id"
                    ],
                    "category": "content"
                },
                "label-key": {
                    "type": "String",
                    "desc": "包含节点标签的每个节点对象的属性名称",
                    "default": "label",
                    "examples": [
                        "name",
                        "description"
                    ],
                    "category": "content",
                    "required": false
                },
                "children-key": {
                    "type": "String",
                    "desc": "包含节点子级列表的每个节点对象的属性名",
                    "default": "children",
                    "examples": [
                        "roles",
                        "relatives"
                    ],
                    "category": "content",
                    "required": false
                },
                "no-connectors": {
                    "type": "Boolean",
                    "desc": "不显示节点之间的连接线",
                    "category": "style"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "control-color": {
                    "type": "String",
                    "desc": "Quasar调色板中控件（如复选框）的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "selected-color": {
                    "type": "String",
                    "desc": "选定节点的颜色名称（来自Quasar调色板）",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dense": {
                    "type": "Boolean",
                    "desc": "密集模式；占用较少空间",
                    "category": "style",
                    "addedIn": "v2.2.4"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "icon": {
                    "type": "String",
                    "desc": "遵循Quasar约定的图标名称；除非使用“img：”前缀，否则请确保已安装图标库；如果使用“none”（字符串）作为值，则不会呈现任何图标（但仍将使用屏幕不动产）",
                    "examples": [
                        "map",
                        "ion-add",
                        "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
                        "img:path/to/some_image.png"
                    ],
                    "category": "content"
                },
                "tick-strategy": {
                    "type": "String",
                    "desc": "用于选择节点的策略类型",
                    "default": "none",
                    "values": [
                        "none",
                        "strict",
                        "leaf",
                        "leaf-filtered"
                    ],
                    "category": "behavior",
                    "required": false
                },
                "ticked": {
                    "type": "Array",
                    "desc": "勾选的节点的键",
                    "sync": true,
                    "examples": [
                        "v-model:ticked=\"tickedKeys\""
                    ],
                    "category": "state",
                    "syncable": true
                },
                "expanded": {
                    "type": "Array",
                    "desc": "展开的节点的键",
                    "sync": true,
                    "examples": [
                        "v-model:expanded=\"expandedKeys\""
                    ],
                    "category": "state",
                    "syncable": true
                },
                "selected": {
                    "type": "Any",
                    "desc": "当前所选节点的密钥",
                    "sync": true,
                    "examples": [
                        "v-model:selected=\"selectedKey\""
                    ],
                    "category": "state",
                    "syncable": true
                },
                "no-selection-unset": {
                    "type": "Boolean",
                    "desc": "单击当前选定的节点时不允许取消选择",
                    "category": "behavior",
                    "addedIn": "v2.4.10"
                },
                "default-expand-all": {
                    "type": "Boolean",
                    "desc": "首次渲染时允许树展开其所有分支",
                    "category": "behavior"
                },
                "accordion": {
                    "type": "Boolean",
                    "desc": "允许将树设置为手风琴模式",
                    "category": "behavior"
                },
                "no-transition": {
                    "type": "Boolean",
                    "desc": "在展开/折叠节点时关闭过渡效果；作为副作用，性能也提高了很多；推荐用于大树",
                    "category": "behavior",
                    "addedIn": "v2.9.2"
                },
                "filter": {
                    "type": "String",
                    "desc": "用于筛选节点的文本值",
                    "examples": [
                        ":filter=\"searchText\""
                    ],
                    "category": "filter"
                },
                "filter-method": {
                    "type": "Function",
                    "desc": "用于过滤树节点的函数；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "default": "(see source code)",
                    "params": {
                        "node": {
                            "type": "Object",
                            "desc": "Node currently being filtered"
                        },
                        "filter": {
                            "type": "String",
                            "desc": "Filter text to match against"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Matches or not"
                    },
                    "category": "filter",
                    "required": false
                },
                "duration": {
                    "type": "Number",
                    "desc": "切换动画持续时间（以毫秒为单位）",
                    "default": 300,
                    "category": "style",
                    "required": false
                },
                "no-nodes-label": {
                    "type": "String",
                    "desc": "当没有节点可用时，覆盖默认的此类标签",
                    "examples": [
                        "No nodes to show!"
                    ],
                    "category": "content"
                },
                "no-results-label": {
                    "type": "String",
                    "desc": "由于筛选而没有可用节点时，覆盖默认的此类标签",
                    "examples": [
                        "No results"
                    ],
                    "category": "content"
                }
            },
            "slots": {
                "default-header": {
                    "desc": "用于定义节点标头的插槽",
                    "scope": {
                        "expanded": {
                            "type": "Boolean",
                            "desc": "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "ticked": {
                            "type": "Boolean",
                            "desc": "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
                            "reactive": true
                        },
                        "tree": {
                            "type": "Component",
                            "tsType": "QTree",
                            "desc": "QTree instance"
                        },
                        "node": {
                            "type": "Object",
                            "desc": "Node object"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Node's key"
                        },
                        "color": {
                            "type": "String",
                            "desc": "QTree instance 'color' supplied prop value",
                            "examples": [
                                "primary"
                            ]
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "QTree instance 'dark' supplied prop value"
                        }
                    }
                },
                "header-[name]": {
                    "desc": "用于描述节点头的头模板槽；由将其“header”属性设置为“[name]”的节点使用，其中“[name]”可以是任何字符串",
                    "scope": {
                        "expanded": {
                            "type": "Boolean",
                            "desc": "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "ticked": {
                            "type": "Boolean",
                            "desc": "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
                            "reactive": true
                        },
                        "tree": {
                            "type": "Component",
                            "tsType": "QTree",
                            "desc": "QTree instance"
                        },
                        "node": {
                            "type": "Object",
                            "desc": "Node object"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Node's key"
                        },
                        "color": {
                            "type": "String",
                            "desc": "QTree instance 'color' supplied prop value",
                            "examples": [
                                "primary"
                            ]
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "QTree instance 'dark' supplied prop value"
                        }
                    }
                },
                "default-body": {
                    "desc": "用于定义节点主体的插槽",
                    "scope": {
                        "expanded": {
                            "type": "Boolean",
                            "desc": "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "ticked": {
                            "type": "Boolean",
                            "desc": "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
                            "reactive": true
                        },
                        "tree": {
                            "type": "Component",
                            "tsType": "QTree",
                            "desc": "QTree instance"
                        },
                        "node": {
                            "type": "Object",
                            "desc": "Node object"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Node's key"
                        },
                        "color": {
                            "type": "String",
                            "desc": "QTree instance 'color' supplied prop value",
                            "examples": [
                                "primary"
                            ]
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "QTree instance 'dark' supplied prop value"
                        }
                    }
                },
                "body-[name]": {
                    "desc": "用于描述节点主体的主体模板槽；由将其“body”属性设置为“[name]”的节点使用，其中“[name]”可以是任何字符串",
                    "scope": {
                        "expanded": {
                            "type": "Boolean",
                            "desc": "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
                            "reactive": true
                        },
                        "ticked": {
                            "type": "Boolean",
                            "desc": "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
                            "reactive": true
                        },
                        "tree": {
                            "type": "Component",
                            "tsType": "QTree",
                            "desc": "QTree instance"
                        },
                        "node": {
                            "type": "Object",
                            "desc": "Node object"
                        },
                        "key": {
                            "type": "Any",
                            "desc": "Node's key"
                        },
                        "color": {
                            "type": "String",
                            "desc": "QTree instance 'color' supplied prop value",
                            "examples": [
                                "primary"
                            ]
                        },
                        "dark": {
                            "type": "Boolean",
                            "desc": "QTree instance 'dark' supplied prop value"
                        }
                    }
                }
            },
            "events": {
                "update:expanded": {
                    "desc": "当节点展开或折叠时触发；Vue在“v-model:update”上使用以更新其值",
                    "params": {
                        "expanded": {
                            "type": "Array",
                            "desc": "The expanded node keys",
                            "examples": [
                                "[ 'Node 1', 'Node 2' ]"
                            ]
                        }
                    }
                },
                "lazy-load": {
                    "desc": "节点的延迟加载完成时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Lazy loading details",
                            "definition": {
                                "node": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "The node to which the new nodes (the children) will be appended"
                                },
                                "key": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "The key of the node getting the newly loaded child nodes",
                                    "examples": [
                                        "New Node"
                                    ]
                                },
                                "done": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "The callback to be carried out when the loading is successful",
                                    "params": {
                                        "children": {
                                            "type": "Array",
                                            "desc": "Array of nodes",
                                            "default": "[]",
                                            "required": false
                                        }
                                    },
                                    "returns": null
                                },
                                "fail": {
                                    "type": "Function",
                                    "required": true,
                                    "desc": "The callback to be carried out should the loading fails",
                                    "params": null,
                                    "returns": null
                                }
                            }
                        }
                    }
                },
                "update:ticked": {
                    "desc": "通过复选框勾选/取消勾选节点时发出；Vue在“v-model：勾选”上使用以更新其值",
                    "params": {
                        "target": {
                            "type": "Array",
                            "desc": "The ticked node keys",
                            "examples": [
                                "[ 'Node 1', 'Node 2' ]"
                            ]
                        }
                    }
                },
                "update:selected": {
                    "desc": "当选定节点发生更改时发出；Vue在“v-model:selected”上使用以更新其值",
                    "params": {
                        "target": {
                            "type": "Any",
                            "desc": "The selected node key",
                            "examples": [
                                "Node 1"
                            ]
                        }
                    }
                },
                "after-show": {
                    "desc": "组件显示动画完成时发射"
                },
                "after-hide": {
                    "desc": "组件隐藏动画完成时发射"
                }
            },
            "methods": {
                "getNodeByKey": {
                    "desc": "获取具有给定密钥的节点",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "The key of a node",
                            "examples": [
                                "Node 1"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Object",
                        "desc": "Requested node"
                    }
                },
                "getTickedNodes": {
                    "desc": "获取勾选的节点数组",
                    "returns": {
                        "type": "Array",
                        "desc": "Ticked node objects"
                    }
                },
                "getExpandedNodes": {
                    "desc": "获取展开的节点阵列",
                    "returns": {
                        "type": "Array",
                        "desc": "Expanded node objects"
                    }
                },
                "isExpanded": {
                    "desc": "确定节点是否展开",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "The key of a node",
                            "examples": [
                                "Node 1"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Is specified node expanded?"
                    }
                },
                "expandAll": {
                    "desc": "用于展开树的所有分支"
                },
                "collapseAll": {
                    "desc": "用于折叠树的所有分支"
                },
                "setExpanded": {
                    "desc": "使用给定的键展开节点点处的树",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "The key of a node",
                            "examples": [
                                "Node 1"
                            ]
                        },
                        "state": {
                            "type": "Boolean",
                            "required": true,
                            "desc": "Set to 'true' to expand the branch of the tree, otherwise 'false' collapses it"
                        }
                    }
                },
                "isTicked": {
                    "desc": "方法来检查是否选中了节点的复选框",
                    "params": {
                        "key": {
                            "type": "Any",
                            "required": true,
                            "desc": "The key of a node",
                            "examples": [
                                "Node 1"
                            ]
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "Is specified node ticked?"
                    }
                },
                "setTicked": {
                    "desc": "方法以编程方式设置节点的复选框",
                    "params": {
                        "keys": {
                            "type": "Array",
                            "required": true,
                            "desc": "The keys of nodes to tick/untick",
                            "examples": [
                                "[ 'Node 1', 'Node 2' ]"
                            ]
                        },
                        "state": {
                            "type": "Boolean",
                            "required": true,
                            "desc": "Set to 'true' to tick the checkbox of nodes, otherwise 'false' unticks them"
                        }
                    }
                }
            }
        }
    },
    {
        "name": "q-uploader",
        "desc": "上传器",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/uploader"
            },
            "props": {
                "factory": {
                    "type": "Function",
                    "tsType": "QUploaderFactoryFn",
                    "desc": "函数，该函数应返回一个Object或用Object解析的Promise；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": [
                            "Object",
                            "Promise<any>"
                        ],
                        "desc": "Optional configuration for the upload process; You can override QUploader props in this Object (url, method, headers, formFields, fieldName, withCredentials, sendRaw); Props of these Object can also be Functions with the form of (file[s]) => value"
                    },
                    "category": "upload"
                },
                "url": {
                    "type": [
                        "String",
                        "Function"
                    ],
                    "desc": "处理上载的服务器的URL或路径。取String或factory函数，返回String。函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "examples": [
                        "https://example.com/path",
                        "files => `https://example.com?count=${files.length}`"
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "URL or path to the server which handles the upload"
                    },
                    "category": "upload"
                },
                "method": {
                    "type": [
                        "String",
                        "Function"
                    ],
                    "default": "POST",
                    "desc": "用于上传的HTTP方法；取String或返回String的工厂函数；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "values": [
                        "POST",
                        "PUT"
                    ],
                    "examples": [
                        "POST",
                        ":method=\"files => files.length > 10 ? 'POST' : 'PUT'\""
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "HTTP method to use for upload"
                    },
                    "category": "upload",
                    "required": false
                },
                "field-name": {
                    "type": [
                        "String",
                        "Function"
                    ],
                    "desc": "每个文件上传的字段名称；这将进入以下标题：“内容处置：表单数据；name=“__HERE_”；filename=“somefile.png”；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "default": "(file) => file.name",
                    "examples": [
                        "backgroundFile",
                        ":field-name=\"(file) => 'background' + file.name\""
                    ],
                    "params": {
                        "files": {
                            "type": "File",
                            "desc": "The current file being processed"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "Field name for the current file upload"
                    },
                    "category": "upload",
                    "required": false
                },
                "headers": {
                    "type": [
                        "Array",
                        "Function"
                    ],
                    "desc": "数组或返回数组的工厂函数；数组由具有标头定义的对象组成；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "definition": {
                        "name": {
                            "type": "String",
                            "required": true,
                            "desc": "Header name",
                            "examples": [
                                "Content-Type",
                                "Accept",
                                "Cache-Control"
                            ]
                        },
                        "value": {
                            "type": "String",
                            "required": true,
                            "desc": "Header value",
                            "examples": [
                                "application/json",
                                "no-cache"
                            ]
                        }
                    },
                    "examples": [
                        "[{name: 'Content-Type', value: 'application/json'}, {name: 'Accept', value: 'application/json'}]",
                        "() => [{name: 'X-Custom-Timestamp', value: Date.now()}]",
                        "files => [{name: 'X-Custom-Count', value: files.length}]"
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "An array consisting of objects with header definitions"
                    },
                    "category": "upload"
                },
                "form-fields": {
                    "type": [
                        "Array",
                        "Function"
                    ],
                    "desc": "数组或返回数组的工厂函数；数组由具有附加字段定义的对象组成（由要上传的Form使用）；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "definition": {
                        "name": {
                            "type": "String",
                            "required": true,
                            "desc": "Field name",
                            "examples": [
                                "Some field"
                            ]
                        },
                        "value": {
                            "type": "String",
                            "required": true,
                            "desc": "Field value",
                            "examples": [
                                "some-value"
                            ]
                        }
                    },
                    "examples": [
                        "[{name: 'my-field', value: 'my-value'}]",
                        "() => [{name: 'my-field', value: 'my-value'}]",
                        "files => [{name: 'my-field', value: 'my-value' + files.length}]"
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "String",
                        "desc": "An array consists of objects with additional fields definitions (used by Form to be uploaded)"
                    },
                    "category": "upload"
                },
                "with-credentials": {
                    "type": [
                        "Boolean",
                        "Function"
                    ],
                    "desc": "在管理上载的XHR上将withCredentials设置为true；将布尔函数或工厂函数作为布尔函数；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "examples": [
                        "with-credentials",
                        ":with-credentials=\"files => ...\""
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, withCredentials will be set to true on the XHR that manages the upload"
                    },
                    "category": "upload"
                },
                "send-raw": {
                    "type": [
                        "Boolean",
                        "Function"
                    ],
                    "desc": "发送原始文件而不包装到Form（）中；将布尔函数或工厂函数作为布尔函数；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "examples": [
                        "send-raw",
                        ":send-raw=\"files => ...\""
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, raw files will get sent without wrapping into a Form()"
                    },
                    "category": "upload"
                },
                "batch": {
                    "type": [
                        "Boolean",
                        "Function"
                    ],
                    "desc": "批量上传文件（在一个XHR请求中）；将布尔函数或工厂函数作为布尔函数；函数在上传前立即调用；如果使用一个函数，那么为了获得最佳性能，请从您的作用域中引用它，不要内联定义它",
                    "examples": [
                        "files => files.length > 10"
                    ],
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Uploaded files"
                        }
                    },
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, files will be uploaded in a batch (in one XHR request)"
                    },
                    "category": "upload"
                },
                "multiple": {
                    "type": "Boolean",
                    "desc": "允许多个文件上载",
                    "category": "behavior"
                },
                "accept": {
                    "type": "String",
                    "desc": "以逗号分隔的唯一文件类型说明符列表。映射到本机输入类型=文件元素的“accept”属性",
                    "examples": [
                        ".jpg, .pdf, image/*",
                        "image/jpeg, .pdf"
                    ],
                    "category": "behavior"
                },
                "capture": {
                    "type": "String",
                    "desc": "（可选）指定应捕获新文件，以及应使用哪个设备捕获由“accept”道具定义的类型的新媒体。映射到本机输入类型=文件元素的“capture”属性",
                    "values": [
                        "user",
                        "environment"
                    ],
                    "category": "behavior"
                },
                "max-file-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "单个文件的最大大小（字节）",
                    "examples": [
                        1024,
                        1048576
                    ],
                    "category": "behavior"
                },
                "max-total-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "所有文件的最大大小（以字节为单位）",
                    "category": "behavior"
                },
                "max-files": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "要包含的最大文件数",
                    "category": "behavior"
                },
                "filter": {
                    "type": "Function",
                    "desc": "为添加的文件自定义过滤器；只有通过此筛选器的文件才会添加到队列中并上载；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "files": {
                            "type": [
                                "FileList",
                                "Array"
                            ],
                            "desc": "Candidate files to be added to queue"
                        }
                    },
                    "returns": {
                        "type": "Array",
                        "desc": "Filtered files to be added to queue"
                    },
                    "examples": [
                        ":filter=\"files => files.filter(file => file.size === 1024)\""
                    ],
                    "category": "behavior"
                },
                "label": {
                    "type": "String",
                    "desc": "上传器的标签",
                    "examples": [
                        "Upload photo here"
                    ],
                    "category": "content"
                },
                "color": {
                    "type": "String",
                    "desc": "Quasar调色板中组件的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "text-color": {
                    "type": "String",
                    "desc": "覆盖文本颜色（如果需要）；Quasar调色板中的颜色名称",
                    "examples": [
                        "primary",
                        "teal-10"
                    ],
                    "category": "style"
                },
                "dark": {
                    "type": "Boolean",
                    "desc": "通知组件背景为深色",
                    "category": "style"
                },
                "square": {
                    "type": "Boolean",
                    "desc": "删除边界半径，使边界为方形",
                    "category": "style"
                },
                "flat": {
                    "type": "Boolean",
                    "desc": "应用“平面”设计（无默认阴影）",
                    "category": "style"
                },
                "bordered": {
                    "type": "Boolean",
                    "desc": "将默认边框应用于零部件",
                    "category": "style"
                },
                "no-thumbnails": {
                    "type": "Boolean",
                    "desc": "不显示图像文件的缩略图",
                    "category": "content"
                },
                "auto-upload": {
                    "type": "Boolean",
                    "desc": "添加后立即上载文件",
                    "category": "behavior"
                },
                "hide-upload-btn": {
                    "type": "Boolean",
                    "desc": "不显示上传按钮",
                    "category": "behavior"
                },
                "disable": {
                    "type": "Boolean",
                    "desc": "将组件置于禁用模式",
                    "category": "state"
                },
                "readonly": {
                    "type": "Boolean",
                    "desc": "将组件置于只读模式",
                    "category": "state"
                }
            },
            "slots": {
                "header": {
                    "desc": "自定义标头的插槽；范围是QUploader实例本身",
                    "scope": {
                        "...self": {
                            "type": "Component",
                            "tsType": "QUploader",
                            "desc": "QUploader instance"
                        }
                    }
                },
                "list": {
                    "desc": "自定义列表插槽；范围是QUploader实例本身",
                    "scope": {
                        "...self": {
                            "type": "Component",
                            "tsType": "QUploader",
                            "desc": "QUploader instance"
                        }
                    }
                }
            },
            "events": {
                "uploaded": {
                    "desc": "上传文件或一批文件时发出",
                    "params": {
                        "info": {
                            "type": "Object",
                            "desc": "Object containing information about the event",
                            "definition": {
                                "files": {
                                    "type": "Array",
                                    "required": true,
                                    "desc": "Uploaded files"
                                },
                                "xhr": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "XMLHttpRequest that has been used to upload this batch of files"
                                }
                            }
                        }
                    }
                },
                "failed": {
                    "desc": "当文件或一批文件在上载时遇到错误时发出",
                    "params": {
                        "info": {
                            "type": "Object",
                            "desc": "Object containing information about the event",
                            "definition": {
                                "files": {
                                    "type": "Array",
                                    "required": true,
                                    "desc": "Files which encountered error"
                                },
                                "xhr": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "XMLHttpRequest that has been used to upload this batch of files"
                                }
                            }
                        }
                    }
                },
                "uploading": {
                    "desc": "当文件或一批文件开始上载时发出",
                    "params": {
                        "info": {
                            "type": "Object",
                            "desc": "Object containing information about the event",
                            "definition": {
                                "files": {
                                    "type": "Array",
                                    "required": true,
                                    "desc": "Files which are now uploading"
                                },
                                "xhr": {
                                    "type": "Object",
                                    "required": true,
                                    "desc": "XMLHttpRequest used for uploading"
                                }
                            }
                        }
                    }
                },
                "factory-failed": {
                    "desc": "当向工厂功能提供被拒绝的Promise时发出",
                    "params": {
                        "err": {
                            "type": "Error",
                            "desc": "Error object which is the Promise rejection reason"
                        },
                        "files": {
                            "type": "Array",
                            "desc": "Files which were to get uploaded"
                        }
                    }
                },
                "rejected": {
                    "desc": "在拾取文件后发出，有些文件未通过验证道具（accept、最大文件大小、最大总大小、筛选器等）",
                    "params": {
                        "rejectedEntries": {
                            "type": "Array",
                            "tsType": "QRejectedEntry",
                            "desc": "Array of { failedPropValidation: string, file: File } Objects for files that do not pass the validation"
                        }
                    }
                },
                "added": {
                    "desc": "当文件添加到列表中时发出",
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Array of files that were added"
                        }
                    }
                },
                "removed": {
                    "desc": "从列表中删除文件时发出",
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Array of files that were removed"
                        }
                    }
                },
                "start": {
                    "desc": "已开始工作"
                },
                "finish": {
                    "desc": "已完成工作（无论成功与否）"
                }
            },
            "methods": {
                "pickFiles": {
                    "desc": "触发文件选择器对话框；事件必须来自用户交互事件处理程序",
                    "params": {
                        "evt": {
                            "type": "Event",
                            "desc": "JS event object of the original user interaction handler",
                            "required": true
                        }
                    }
                },
                "addFiles": {
                    "desc": "手动将文件添加到队列",
                    "params": {
                        "files": {
                            "type": "Array",
                            "desc": "Must be an array of instances of JS File type",
                            "required": true
                        }
                    }
                },
                "upload": {
                    "desc": "开始上传（与点击上传按钮相同）"
                },
                "abort": {
                    "desc": "中止上传所有文件（与单击中止按钮相同）"
                },
                "reset": {
                    "desc": "将上传程序重置为默认值；清空队列，中止当前上载"
                },
                "removeUploadedFiles": {
                    "desc": "从列表中删除已上载的文件"
                },
                "removeQueuedFiles": {
                    "desc": "删除等待上传开始的文件（与单击左侧清除按钮相同）"
                },
                "removeFile": {
                    "desc": "从队列中删除指定的文件",
                    "params": {
                        "file": {
                            "type": "File",
                            "desc": "The file to remove",
                            "required": true
                        }
                    }
                },
                "updateFileStatus": {
                    "desc": "更新文件的状态",
                    "params": {
                        "file": {
                            "type": "File",
                            "desc": "The file to update",
                            "required": true
                        },
                        "status": {
                            "type": "String",
                            "desc": "Status of file",
                            "values": [
                                "idle",
                                "failed",
                                "uploading",
                                "uploaded"
                            ],
                            "required": true
                        },
                        "uploadedSize": {
                            "type": "Number",
                            "desc": "The number of uploaded bytes of the file; Is required explicitly only when status is NOT 'uploaded'",
                            "required": true
                        }
                    }
                },
                "isAlive": {
                    "desc": "组件是否处于活动状态（已激活但未卸载）；有助于确定是否还需要进一步计算",
                    "returns": {
                        "type": "Boolean",
                        "desc": "If true, the current component is still activated and mounted"
                    }
                }
            },
            "computedProps": {
                "files": {
                    "type": "Array",
                    "desc": "所有文件的列表"
                },
                "queuedFiles": {
                    "type": "Array",
                    "desc": "等待上载的文件列表"
                },
                "uploadedFiles": {
                    "type": "Array",
                    "desc": "已上载的文件列表"
                },
                "uploadedSize": {
                    "type": "Number",
                    "desc": "所有上传文件的大小（字节）"
                },
                "uploadSizeLabel": {
                    "type": "String",
                    "desc": "所有文件的总大小标签",
                    "examples": [
                        "1.0MB"
                    ]
                },
                "uploadProgressLabel": {
                    "type": "String",
                    "desc": "上载进度标签（%）",
                    "examples": [
                        "52.76%"
                    ]
                },
                "canAddFiles": {
                    "type": "Boolean",
                    "desc": "是否可以将新文件添加到列表中"
                },
                "canUpload": {
                    "type": "Boolean",
                    "desc": "是否可以上传文件"
                },
                "isBusy": {
                    "type": "Boolean",
                    "desc": "组件状态设置为繁忙；用户不应能够与组件交互"
                },
                "isUploading": {
                    "type": "Boolean",
                    "desc": "组件正在上载文件"
                }
            }
        }
    },
    {
        "name": "q-video",
        "desc": "视频",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/video"
            },
            "props": {
                "ratio": {
                    "type": [
                        "String",
                        "Number"
                    ],
                    "desc": "内容的纵横比；如果值是String，则避免使用计算语句（如“16/9”），而是直接指定结果的String值（如“1.7777”）",
                    "examples": [
                        ":ratio=\"4/3\"",
                        ":ratio=\"16/9\"",
                        "ratio=\"1\""
                    ],
                    "category": "style"
                },
                "src": {
                    "type": "String",
                    "desc": "要在iframe中显示的源url",
                    "required": true,
                    "examples": [
                        "https://www.youtube.com/embed/k3_tw44QsZQ"
                    ],
                    "category": "model"
                },
                "title": {
                    "type": "String",
                    "desc": "（辅助功能）设置正在使用的内部iframe的本机“title”属性值",
                    "required": false,
                    "examples": [
                        "My Daily Marathon"
                    ],
                    "category": "accessibility",
                    "addedIn": "v2.4.3"
                },
                "fetchpriority": {
                    "type": "String",
                    "desc": "提供获取iframe文档时要使用的相对优先级的提示",
                    "default": "auto",
                    "values": [
                        "high",
                        "low",
                        "auto"
                    ],
                    "category": "behavior",
                    "addedIn": "v2.6.6",
                    "required": false
                },
                "loading": {
                    "type": "String",
                    "desc": "指示浏览器应如何加载iframe",
                    "default": "eager",
                    "values": [
                        "eager",
                        "lazy"
                    ],
                    "category": "behavior",
                    "addedIn": "v2.6.6",
                    "required": false
                },
                "referrerpolicy": {
                    "type": "String",
                    "desc": "指示在获取帧的资源时发送哪个引用器",
                    "default": "strict-origin-when-cross-origin",
                    "values": [
                        "no-referrer",
                        "no-referrer-when-downgrade",
                        "origin",
                        "origin-when-cross-origin",
                        "same-origin",
                        "strict-origin",
                        "strict-origin-when-cross-origin",
                        "unsafe-url"
                    ],
                    "category": "behavior",
                    "addedIn": "v2.6.6",
                    "required": false
                }
            }
        }
    },
    {
        "name": "q-virtual-scroll",
        "desc": "虚拟滚动",
        "info": {
            "type": "component",
            "meta": {
                "docsUrl": "https://v2.quasar.dev/vue-components/virtual-scroll"
            },
            "props": {
                "virtual-scroll-horizontal": {
                    "type": "Boolean",
                    "desc": "使虚拟列表在水平模式下工作",
                    "category": "behavior"
                },
                "virtual-scroll-slice-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "虚拟列表中要渲染的最小项目数",
                    "default": "30",
                    "examples": [
                        "virtual-scroll-slice-size=\"60\""
                    ],
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-before": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之前渲染的项目数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-slice-ratio-after": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "可见区域中要在其之后渲染的项目数的比率",
                    "default": 1,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-item-size": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "项目的默认像素大小（垂直时为高度，水平时为宽度）；该值用于呈现初始列表；尝试使用接近项目最小大小的值",
                    "default": 24,
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-sticky-size-start": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "列表开头的粘性部分（如果使用一个）的像素大小（垂直时为高度，水平时为宽度）；正确的值将提高滚动精度",
                    "default": "0",
                    "category": "virtual-scroll",
                    "required": false
                },
                "virtual-scroll-sticky-size-end": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "列表末尾的粘性部分（如果使用）的像素大小（如果垂直，则为高度，如果水平，则为宽度）；正确的值将提高滚动精度",
                    "default": "0",
                    "category": "virtual-scroll",
                    "required": false
                },
                "table-colspan": {
                    "type": [
                        "Number",
                        "String"
                    ],
                    "desc": "表中的列数（如果使用表布局，则需要此项：固定）",
                    "category": "virtual-scroll|content"
                },
                "type": {
                    "type": "String",
                    "desc": "内容类型：列表（默认）或表格",
                    "default": "list",
                    "values": [
                        "list",
                        "table"
                    ],
                    "category": "content",
                    "required": false
                },
                "items": {
                    "type": "Array",
                    "desc": "将传递到作用域插槽的可用列表项；为了获得最佳性能，冻结项目列表；如果未提供“itemsFn”，则为必需",
                    "default": "[]",
                    "examples": [
                        ":items=\"[ 'BMW', 'Samsung Phone' ]\"",
                        ":items=\"[ { label: 'BMW', value: 'car' }, { label: 'Samsung Phone', value: 'phone' } ]\""
                    ],
                    "category": "content",
                    "required": false
                },
                "items-size": {
                    "type": "Number",
                    "desc": "列表中可用项目的数量；必需，仅当提供了“itemsFn”时使用",
                    "default": "void 0",
                    "examples": [
                        ":items-size=\"100000\"",
                        ":items-size=\"500\""
                    ],
                    "category": "content",
                    "required": false
                },
                "items-fn": {
                    "type": "Function",
                    "desc": "函数返回要显示的项目的范围；应为大小长度从“from”索引开始的项返回一个数组；为了获得最佳性能，请从您的范围中引用它，不要内联定义它",
                    "params": {
                        "from": {
                            "type": "Number",
                            "desc": "Index of the first item (0 based)"
                        },
                        "size": {
                            "type": "Number",
                            "desc": "Number of items to return"
                        }
                    },
                    "returns": {
                        "type": "Array",
                        "desc": "List of scope for items to be displayed"
                    },
                    "examples": [
                        ":items-fn=\"(from, size) => { const items = []; for (let i = 0; i < size; i++) { items.push('Item ' + i) }; return items }\""
                    ],
                    "category": "content"
                },
                "scroll-target": {
                    "type": [
                        "Element",
                        "String"
                    ],
                    "desc": "CSS选择器或DOM元素用作自定义滚动容器，而不是自动检测的滚动容器",
                    "examples": [
                        ":scroll-target=\"$refs.scrollTarget\"",
                        "scroll-target=\".scroll-target-class\"",
                        "scroll-target=\"#scroll-target-id\"",
                        "scroll-target=\"body\""
                    ],
                    "category": "behavior"
                }
            },
            "slots": {
                "before": {
                    "desc": "应在列表之前呈现的元素的模板槽；建议：餐桌前的餐桌"
                },
                "after": {
                    "desc": "应在列表之后呈现的元素的模板槽；建议：坐在桌子后面"
                },
                "default": {
                    "desc": "用于定义列表项的模板槽；建议：QItem",
                    "scope": {
                        "index": {
                            "type": "Number",
                            "desc": "Item index in the options list"
                        },
                        "item": {
                            "type": "Any",
                            "desc": "Item data -- its value is taken from 'options' prop"
                        }
                    }
                }
            },
            "events": {
                "virtual-scroll": {
                    "desc": "发生虚拟滚动时发出",
                    "params": {
                        "details": {
                            "type": "Object",
                            "desc": "Object of properties on the new scroll position",
                            "definition": {
                                "index": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "Index of the list item that was scrolled into view (0 based)"
                                },
                                "from": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the first list item that is rendered (0 based)"
                                },
                                "to": {
                                    "type": "Number",
                                    "required": true,
                                    "desc": "The index of the last list item that is rendered (0 based)"
                                },
                                "direction": {
                                    "type": "String",
                                    "required": true,
                                    "desc": "Direction of change",
                                    "values": [
                                        "increase",
                                        "decrease"
                                    ]
                                },
                                "ref": {
                                    "type": "Component",
                                    "required": true,
                                    "desc": "Vue reference to the QVirtualScroll",
                                    "tsType": "QVirtualScroll"
                                }
                            }
                        }
                    }
                }
            },
            "methods": {
                "scrollTo": {
                    "desc": "将虚拟滚动列表滚动到具有指定索引的项目（基于0）",
                    "params": {
                        "index": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "The index of the list item (0 based)",
                            "required": true
                        },
                        "edge": {
                            "type": "String",
                            "desc": "The edge to align to if the item is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns",
                            "values": [
                                "start",
                                "center",
                                "end",
                                "start-force",
                                "center-force",
                                "end-force"
                            ]
                        }
                    }
                },
                "reset": {
                    "desc": "重置虚拟滚动计算；需要自定义边缘案例"
                },
                "refresh": {
                    "desc": "刷新虚拟滚动列表；附加项目后使用",
                    "params": {
                        "index": {
                            "type": [
                                "String",
                                "Number"
                            ],
                            "desc": "The index of the list item to scroll to after refresh (0 based); If it's not specified the scroll position is not changed; Use a negative value to keep scroll position"
                        }
                    }
                }
            }
        }
    }

]

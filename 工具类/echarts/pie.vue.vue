<template>
  <div style="width:100%;height:100%" :id="myId"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    title: {
      type: String,
      default: '【北京】Arpu分析',
    },
    left: {
      type: [Number, String],
      default: '40%'
    },
    islegend: {
      type: Boolean,
      default: () => true
    },
    center: {
      type: Array,
      default: () => ["20%", "50%"]
    },
    radius: {
      type: Array,
      default: () => ["60%", "80%"]
    },
    raft: {
      type: Number,
      default: 7
    },
    res: {
      type: Array,
      default: () => {
        return [{}];
      },
    },
    color: {
      type: [Array, Object],
      default: () => {
        return [
          "#807AE3",
          "#52C4FF",
          "#97E5AA",
          "#FADB70",
          "rgb(188, 116, 255)",
        ];
      },
    },
    myId: {
      type: String,
      default: "common-ring",
    },
  },
  data(){
    return{
      name:""
    }
  },
  computed: {
    option() {
      return {
        title: {
						text:  this.title,
						left:'center',
            textStyle: {
              color: '#515860',
              fontSize: 14,
              fontWeight: 500
            }
        },
        color: this.color,
        tooltip: {
          show: false,
        },
        legend: {
          show: this.islegend,
          textStyle: {
            align:'left',
            fontSize: 14,
            rich:{
              name: {
                width: 170,
                align: 'left',
                color: "#7A8188"
              },
              value: {
                width: 40,
                align: 'left',
                color: "#7A8188"
              }
            }
          },
          formatter: (i) => {
            let item = {};
            for (let index = 0; index < this.res.length; index++) {
              const element = this.res[index];
              if (element.name === i) {
                item = element;
                break;
              }
            }
            return `{name|${item.name}}{value|${item.value}人}`;
          },
          orient: "vertical",
          left: this.left,
          top: 'middle',
          itemWidth: 15,
          itemHeight: 10,
          icon: "circle",
        },
        series: {
          center: this.center,
          type: "pie",
          radius: this.radius,
          avoidLabelOverlap: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: "#fff",
          },
          label: {
            show: false,
            position: "center",
            formatter:
            //  '{a|{d}%}\n{b|{b}}',
            (i) => {
              let name = "";
              const dataname = i.data.name || "";
              const lineLength = this.raft,
                time = Math.ceil(dataname.length / lineLength);
              for (let idx = 0; idx < time; idx++) {
                name +=
                  dataname.slice(
                    idx * lineLength,
                    idx * lineLength + lineLength
                  ) + "\n";
              }
              let value =
                ((i.data.value / this.res.sum("value")) * 100).toFixed(2) || 0;
                if(value === 'NaN') value = 0
              return `{a| ${value + "%"}}\n{b| ${name} }`;
            },
            rich: {
              a: {  
                lineHeight: 28,
                fontSize: 16,
                color: "#000",
              },
              b: {
                fontSize: 12,
                color: "#7A8188"
              },
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "16",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: this.res,
        },
      };
    },
  },
  methods: {
    renderEchart() {
      const echart = echarts.init(document.getElementById(this.myId));
      echart.setOption(this.option);
      window.addEventListener("resize", () => {
        echart.resize();
      });
      // 图例点击和饼图的交互
      echart.on('legendselectchanged',(params)=>{
        console.log(params);
        const data = [];
        for(let i in params.selected){
          if(params.selected[i] === true){
            data.push(i)
          }
        }
        echart.dispatchAction({
          type: "downplay",
        });  
        if(!params.selected[params.name]){
          echart.dispatchAction({
            type: "highlight",
            name: data&&data[0],
          });
          echart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            name: data&&data[0]
          });    
        }
      })
      echart.dispatchAction({
        type: "downplay",
      });
      echart.on("click", (e) => {
        // console.log(e);
        this.$emit('handleType',e)
        this.name = e.name;
        echart.dispatchAction({
          type: "downplay",
        });
        echart.dispatchAction({
          type: "highlight",
          name: this.name,
        });
        echart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
           name: this.name,
        });
      });
      // var max = this.res[0];
      // var len = this.res.length;
      // for (var i = 1; i < len; i++) {
      //   if (this.res[i].value > max.value) {
      //     max = this.res[i];
      //   }
      // }
      echart.dispatchAction({
        type: "highlight",
        dataIndex: 0
      });
    },
  },
  watch: {
    res() {
      this.renderEchart();
    },
  },
  mounted() {
    this.renderEchart();
  },
};
</script>
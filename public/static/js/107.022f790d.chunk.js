"use strict";(self.webpackChunkbeancount_web=self.webpackChunkbeancount_web||[]).push([[107],{7287:(t,e,s)=>{s.d(e,{A:()=>a});var n=s(4760);const a=function(t,e){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e=Number(e).toFixed(2);const i=(0,n.b9)(t);return"Income"===i?e>0?`-${s}${Math.abs(e)} ${s?"":a}`:`+${s}${Math.abs(e)} ${s?"":a}`:"Assets"===i?e>0?`+${s}${Math.abs(e)} ${s?"":a}`:`-${s}${Math.abs(e)} ${s?"":a}`:"Expenses"===i||"Liabilities"===i?e>0?`-${s}${Math.abs(e)} ${s?"":a}`:`+${s}${Math.abs(e)} ${s?"":a}`:String(e)}},1419:(t,e,s)=>{s.d(e,{A:()=>r});var n=s(9636),a=s(8409),i=s.n(a),o=s(9284),l=s(4760),c=s(712);class h extends o.Component{constructor(){super(...arguments),this.currentYear=i()().format("YYYY"),this.currentMonth=i()().format("YYYY-M"),this.state={loading:!1,years:[this.currentYear],months:[this.currentMonth]},this.queryMonthList=()=>{this.setState({loading:!0}),(0,l.hd)("/api/auth/stats/months").then((t=>{let e=Array.from(new Set(t.map((t=>t.split("-")[0]))));this.setState({months:t,years:e})})).catch(console.error).finally((()=>{this.setState({loading:!1})}))}}componentDidMount(){this.queryMonthList()}render(){return(0,c.jsxs)(n.A,{size:"small",showSearch:!0,placeholder:"\u9009\u62e9\u6708\u4efd",style:{width:"120px"},...this.props,children:[!this.props.onlyShowMonth&&(0,c.jsx)(n.A.Option,{value:"",children:"\u4e0d\u9650"}),!this.props.onlyShowMonth&&this.state.years.reverse().map((t=>(0,c.jsx)(n.A.Option,{value:t,children:i()(t).format("YYYY\u5e74")},t))),this.state.months.reverse().map((t=>(0,c.jsx)(n.A.Option,{value:t,children:i()(t).format("YYYY\u5e74MM\u6708")},t)))]})}}const r=h},3962:(t,e,s)=>{s.d(e,{A:()=>i});var n=s(532),a=(s(9284),s(712));const i=t=>t.hide?(0,a.jsx)(n.A,{...t,value:"***",prefix:t.hide?"":t.prefix}):(0,a.jsx)(n.A,{...t})},2069:(t,e,s)=>{s.d(e,{A:()=>i});var n=s(9284),a=s(712);const i=t=>class extends n.Component{constructor(){super(...arguments),this.defaultCommodity={currency:"CNY",symbol:"\uffe5"},this.currentCommodity=window.localStorage.getItem("ledgerCurrency")}render(){return(0,a.jsx)(t,{...this.props,commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity})}}},4107:(t,e,s)=>{s.r(e),s.d(e,{default:()=>H});var n=s(5398),a=s(1365),i=s(1896),o=s(1035),l=s(9482),c=s(7691),h=s(9284),r=s(9492),d=s(1380),u=s(6806),p=s(4760),m=s(712);const y=[{value:"Assets",label:p.aY.Assets}];class x extends h.Component{constructor(){super(...arguments),this.state={loading:!1,balanceData:[],accountPrefix:(0,p.US)(this.props.selectedAccounts,y)[0].value},this.queryAccountBalance=t=>{let e,s;this.setState({loading:!0});const{accountPrefix:n}=this.state;if(t){const n=t.split("-").filter((t=>t));1===n.length?e=n[0]:2===n.length&&(e=n[0],s=n[1])}(0,p.hd)(`/api/auth/stats/account/balance?prefix=${n}&year=${e||""}&month=${s||""}`).then((t=>{t&&t.length>0&&t.forEach((t=>{t.date=(0,p.Yq)(t.date)})),this.setState({balanceData:t})})).finally((()=>{this.setState({loading:!1})}))},this.handleChangeAccount=t=>{this.setState({accountPrefix:t},(()=>{this.queryAccountBalance(this.props.selectedMonth)}))}}componentDidMount(){this.queryAccountBalance(this.props.selectedMonth)}componentWillReceiveProps(t){t.selectedMonth!==this.props.selectedMonth&&this.queryAccountBalance(t.selectedMonth),t.selectedAccounts!==this.props.selectedAccounts&&this.setState({accountPrefix:(0,p.US)(t.selectedAccounts,y)[0].value})}render(){return this.props.chartLoading?(0,m.jsx)("div",{style:{height:480,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})}):(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{style:{marginBottom:"1rem"},children:(0,m.jsx)(d.A,{options:(0,p.US)(this.props.selectedAccounts,y),value:this.state.accountPrefix,onChange:this.handleChangeAccount})}),(0,m.jsx)(r.A,{spinning:this.state.loading,children:(0,m.jsxs)(u.Chart,{appendPadding:[10,0,0,10],autoFit:!0,height:500,data:this.state.balanceData,scale:{amount:{alias:"\u5408\u8ba1",type:"linear-strict"},year:{range:[0,1]}},children:[(0,m.jsx)(u.Line,{position:"date*amount",tooltip:["date*amount",(t,e)=>({title:t,name:"\u5408\u8ba1",value:(0,p.vv)(e,this.props.commodity)})]}),(0,m.jsx)(u.Point,{position:"date*amount",tooltip:["date*amount",(t,e)=>({title:t,name:"\u5408\u8ba1",value:(0,p.vv)(e,this.props.commodity)})]})]})})]})}}const g=x,v=[{value:"Expenses",label:p.aY.Expenses}];class A extends h.Component{constructor(){super(...arguments),this.state={loading:!1,dayAmountData:[],type:"day",accountPrefix:(0,p.US)(this.props.selectedAccounts,v)[0].value},this.queryAccountDayTrend=t=>{let e,s;this.setState({loading:!0});const{accountPrefix:n,type:a}=this.state;if(t){const n=t.split("-").filter((t=>t));1===n.length?e=n[0]:2===n.length&&(e=n[0],s=n[1])}(0,p.hd)(`/api/auth/stats/account/trend?prefix=${n}&year=${e||""}&month=${s||""}&type=${a}`).then((t=>{t&&t.length>0&&t.forEach((t=>{t.date=(0,p.Yq)(t.date)})),this.setState({dayAmountData:t})})).finally((()=>{this.setState({loading:!1})}))},this.handleChangeAccount=t=>{this.setState({accountPrefix:t},(()=>{this.queryAccountDayTrend(this.props.selectedMonth)}))},this.handleChangeStatsType=t=>{this.setState({type:t},(()=>{this.queryAccountDayTrend(this.props.selectedMonth)}))}}componentDidMount(){this.queryAccountDayTrend(this.props.selectedMonth)}componentWillReceiveProps(t){t.selectedMonth!==this.props.selectedMonth&&this.queryAccountDayTrend(t.selectedMonth)}render(){return this.props.chartLoading?(0,m.jsx)("div",{style:{height:480,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[(0,m.jsx)(d.A,{options:(0,p.US)(this.props.selectedAccounts,v),value:this.state.accountPrefix,onChange:this.handleChangeAccount}),(0,m.jsx)(d.A,{options:[{value:"day",label:"\u6309\u5929"},{value:"month",label:"\u6309\u6708"},{value:"year",label:"\u6309\u5e74"},{value:"sum",label:"\u7d2f\u8ba1"}],value:this.state.type,onChange:this.handleChangeStatsType})]}),(0,m.jsx)(r.A,{spinning:this.state.loading,children:(0,m.jsx)(u.Chart,{height:480,autoFit:!0,data:this.state.dayAmountData,interactions:["active-region"],padding:[30,30,30,50],children:(0,m.jsx)(u.Interval,{position:"date*amount",tooltip:["date*amount",(t,e)=>({name:"\u5408\u8ba1",value:(0,p.vv)(e,this.props.commodity)})]})})})]})}}const f=A;class j extends h.Component{constructor(){super(...arguments),this.state={loading:!1,incomeExpenses:[]},this.queryMonthIncomeExpenses=()=>{this.setState({loading:!0}),(0,p.hd)("/api/auth/stats/month/total").then((t=>{t&&t.length>0&&t.forEach((t=>{t.month=(0,p.Yq)(t.month)})),this.setState({incomeExpenses:t})})).finally((()=>{this.setState({loading:!1})}))}}componentDidMount(){this.queryMonthIncomeExpenses()}render(){return this.props.chartLoading?(0,m.jsx)("div",{style:{height:400,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})}):(0,m.jsx)("div",{children:(0,m.jsx)(r.A,{spinning:this.state.loading,children:(0,m.jsx)(u.Chart,{animate:!1,padding:[10,20,80,40],autoFit:!0,height:400,data:this.state.incomeExpenses,children:(0,m.jsx)(u.LineAdvance,{shape:"smooth",point:!0,area:!0,position:"month*amount",color:"type",tooltip:["month*type*amount",(t,e,s)=>({title:t,name:e,value:(0,p.vv)(s,this.props.commodity)})]})})})})}}const S=j,b=[{value:"Expenses",label:p.aY.Expenses}];class M extends h.Component{constructor(){super(...arguments),this.state={loading:!1,payee:[],type:"sum",accountPrefix:"Expenses"},this.queryPayeeStatsValue=t=>{let e,s;this.setState({loading:!0});const{accountPrefix:n,type:a}=this.state;if(t){const n=t.split("-").filter((t=>t));1===n.length?e=n[0]:2===n.length&&(e=n[0],s=n[1])}(0,p.hd)(`/api/auth/stats/payee?prefix=${n}&year=${e||""}&month=${s||""}&type=${a}`).then((t=>{const e=t.slice(-25);this.setState({payee:e})})).finally((()=>{this.setState({loading:!1})}))},this.handleChangeAccount=t=>{this.setState({accountPrefix:t},(()=>{this.queryPayeeStatsValue(this.props.selectedMonth)}))},this.handleChangeStatsType=t=>{this.setState({type:t},(()=>{this.queryPayeeStatsValue(this.props.selectedMonth)}))}}componentDidMount(){this.queryPayeeStatsValue(this.props.selectedMonth)}componentWillReceiveProps(t){t.selectedMonth!==this.props.selectedMonth&&this.queryPayeeStatsValue(t.selectedMonth)}render(){return this.props.chartLoading?(0,m.jsx)("div",{style:{height:560,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[(0,m.jsx)(d.A,{options:(0,p.US)(this.props.selectedAccounts,b),value:this.state.accountPrefix,onChange:this.handleChangeAccount}),(0,m.jsx)(d.A,{options:[{value:"sum",label:"\u7d2f\u8ba1"},{value:"cot",label:"\u9891\u6b21"},{value:"avg",label:"\u5355\u7b14"}],value:this.state.type,onChange:this.handleChangeStatsType})]}),(0,m.jsx)(r.A,{spinning:this.state.loading,children:(0,m.jsxs)(u.Chart,{appendPadding:[0,70,0,0],height:Math.max(30*this.state.payee.length,120),data:this.state.payee,autoFit:!0,scale:{value:{formatter:t=>`${t}${"cot"===this.state.type?"\u6b21":"\u5143"}`}},children:[(0,m.jsx)(u.Coordinate,{transpose:!0}),(0,m.jsx)(u.Interval,{position:"payee*value",label:["value",t=>({position:"right",offsetX:-8,content:"cot"!==this.state.type?(0,p.vv)(t,this.props.commodity):`${t}\u6b21`,style:{fill:"#3c3c3c"}})],tooltip:["payee*value",(t,e)=>({title:t,name:"\u5408\u8ba1",value:"cot"!==this.state.type?(0,p.vv)(e,this.props.commodity):`${e}\u6b21`})]}),(0,m.jsx)(u.Interaction,{type:"active-region"})]})})]})}}const C=M;var P=s(3981);const $=[{value:"Expenses",label:p.aY.Expenses}];class k extends h.Component{constructor(){super(...arguments),this.state={loading:!1,subAccountPercentData:[],level:"1",accountPrefix:(0,p.US)(this.props.selectedAccounts,$)[0].value},this.queryStatsSubAccountPercent=t=>{let e,s;this.setState({loading:!0});const{accountPrefix:n,level:a}=this.state;if(t){const n=t.split("-").filter((t=>t));1===n.length?e=n[0]:2===n.length&&(e=n[0],s=n[1])}(0,p.hd)(`/api/auth/stats/account/percent?prefix=${n}&year=${e||""}&month=${s||""}&level=${a}`).then((t=>{let e=(0,P.A)(0);t.forEach((t=>{e=e.plus(t.amount)})),e=e.toFixed(2),this.setState({subAccountPercentData:t.map((t=>{const s=(0,P.A)(t.amount).toFixed(2);return{item:t.account,count:Number(s),percent:Number((0,P.A)(s/e).toFixed(5))}}))})})).finally((()=>{this.setState({loading:!1})}))},this.handleChangeAccount=t=>{this.setState({accountPrefix:t},(()=>{this.queryStatsSubAccountPercent(this.props.selectedMonth)}))},this.handleChangeAccountLevel=t=>{this.setState({level:t},(()=>{this.queryStatsSubAccountPercent(this.props.selectedMonth)}))}}componentDidMount(){this.queryStatsSubAccountPercent(this.props.selectedMonth)}componentWillReceiveProps(t){t.selectedMonth!==this.props.selectedMonth&&this.queryStatsSubAccountPercent(t.selectedMonth)}render(){return this.props.chartLoading?(0,m.jsx)("div",{style:{height:500,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})}):(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[(0,m.jsx)(d.A,{options:(0,p.US)(this.props.selectedAccounts,$),value:this.state.accountPrefix,onChange:this.handleChangeAccount}),(0,m.jsx)(d.A,{options:[{value:"1",label:"\u8d26\u6237\u7c7b\u578b"},{value:"",label:"\u6240\u6709\u8d26\u6237"}],value:this.state.level,onChange:this.handleChangeAccountLevel})]}),(0,m.jsx)(r.A,{spinning:this.state.loading,children:(0,m.jsxs)(u.Chart,{height:560,data:this.state.subAccountPercentData,scale:{percent:{formatter:t=>t=100*t+"%"}},autoFit:!0,onGetG2Instance:t=>{t.geometries[0].elements.forEach(((t,e)=>{t.setState("selected",0===e)}))},children:[(0,m.jsx)(u.Coordinate,{type:"theta",radius:.75}),(0,m.jsx)(u.Axis,{visible:!1}),(0,m.jsx)(u.Interval,{position:"percent",adjust:"stack",color:"item",style:{lineWidth:1,stroke:"#fff"},label:["count",{content:t=>`${(0,p.Pt)(t.item)}: ${(0,p.l9)(t.percent)}`}],tooltip:["item*percent*count",(t,e,s)=>({title:t,name:"\u5408\u8ba1",value:`${(0,p.vv)(s,this.props.commodity)} (${(0,p.l9)(e)})`})]}),(0,m.jsx)(u.Interaction,{type:"element-single-selected"})]})})]})}}const L=k;var w=s(1816),q=s.n(w);const E=[{value:"Assets",label:p.aY.Assets}],Y={x:{sync:!0},y:{sync:!0}},I=(0,u.getTheme)().colors20;class T extends h.Component{constructor(){super(...arguments),this._ds=new(q()),this._nodeValues={},this.state={sankeyData:{nodes:[],links:[]},dataView:{nodes:[],links:[]},loading:!1,accountPrefix:(0,p.cW)((0,p.US)(this.props.selectedAccounts,E))[0].value,level:""},this.querySankeyData=t=>{this.setState({loading:!0});const{accountPrefix:e,level:s}=this.state;let n,a;if(t){const e=t.split("-").filter((t=>t));1===e.length?n=e[0]:2===e.length&&(n=e[0],a=e[1])}(0,p.hd)(`/api/auth/stats/account/flow?prefix=${e}&year=${n||""}&month=${a||""}&level=${s}`).then((t=>{if(t&&t.links&&t.links.length>0){this._nodeValues={};const e=t.nodes;for(let n of t.links)this._nodeValues[e[n.source].name]=Number(this._nodeValues[e[n.source].name]||0)+-1*Number(n.value),this._nodeValues[e[n.target].name]=Number(this._nodeValues[e[n.target].name]||0)+Number(n.value);const s=this._ds.createView().source(t,{type:"graph",edges:t=>t.links});s.transform({type:"diagram.sankey",sort:(t,e)=>t.value>e.value?0:t.value<e.value?-1:0}),this.setState({sankeyData:t,dataView:s})}})).catch((function(t){console.log("Request failed",t)})).finally((()=>{this.setState({loading:!1})}))},this.handleChangeAccount=t=>{this.setState({accountPrefix:t,dataView:{nodes:[],links:[]}},(()=>{this.querySankeyData(this.props.selectedMonth)}))},this.handleChangeAccountLevel=t=>{this.setState({level:t,dataView:{nodes:[],links:[]}},(()=>{this.querySankeyData(this.props.selectedMonth)}))}}componentDidMount(){this.querySankeyData(this.props.selectedMonth)}componentWillReceiveProps(t){t.selectedMonth!==this.props.selectedMonth&&this.querySankeyData(t.selectedMonth),t.selectedAccounts!==this.props.selectedAccounts&&this.setState({accountPrefix:(0,p.cW)((0,p.US)(t.selectedAccounts,E))[0].value})}render(){const{chartLoading:t}=this.props,{dataView:e,loading:s}=this.state;if(t)return(0,m.jsx)("div",{style:{height:500,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(r.A,{})});const n=e&&e.edges?e.edges.map((t=>({source:t.source.name,target:t.target.name,x:t.x,y:t.y,value:t.value}))):[],a=e&&e.nodes?e.nodes.reduce(((t,e,s)=>(t[e.name]=I[s],t)),{}):{};return(0,m.jsxs)(h.Fragment,{children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[(0,m.jsx)(d.A,{options:(0,p.cW)((0,p.US)(this.props.selectedAccounts,E)),value:this.state.accountPrefix,onChange:this.handleChangeAccount}),(0,m.jsx)(d.A,{options:[{value:"1",label:"\u8d26\u6237\u7c7b\u578b"},{value:"",label:"\u6240\u6709\u8d26\u6237"}],value:this.state.level,onChange:this.handleChangeAccountLevel})]}),(0,m.jsx)(r.A,{spinning:s,children:0===e.nodes.length||0===n.length?(0,m.jsx)("div",{style:{height:"500px"}}):(0,m.jsxs)(u.Chart,{interactions:["element-highlight"],height:Math.min(30*e.nodes.length+200,1200),autoFit:!0,scale:Y,padding:[20,20,40],children:[(0,m.jsx)(u.Axis,{name:"x",visible:!1}),(0,m.jsx)(u.Axis,{name:"y",visible:!1}),(0,m.jsx)(u.Legend,{name:"source",visible:!1}),(0,m.jsx)(u.View,{padding:0,data:n,children:(0,m.jsx)(u.Geom,{type:"edge",position:"x*y",shape:"arc",color:["source",t=>a[t]],state:{default:{},active:{style:{lineWidth:1.5,strokeOpacity:2}}},style:{fillOpacity:.3,lineWidth:0},tooltip:["target*source*value",(t,e,s)=>({title:e+" > "+t,name:"\u5408\u8ba1",value:(0,p.vv)(s,this.props.commodity)})]})}),(0,m.jsx)(u.View,{padding:0,data:e.nodes,children:(0,m.jsx)(u.Geom,{type:"polygon",position:"x*y",color:"name",style:{stroke:"#fff"},state:{default:{},active:{style:{stroke:"red",lineWidth:1.5,strokeOpacity:.9}}},label:["name",t=>({content:(0,p.Pt)(t),offsetY:10,style:{fill:"#666"}})],tooltip:["name*value",t=>({title:t,name:"\u5408\u8ba1",value:(0,p.vv)(this._nodeValues[t],this.props.commodity)})]})})]})})]})}}const D=T;var V=s(3962),N=s(2475),U=s(2069),W=s(1419),F=s(8409),O=s.n(F),_=s(7287),B=s(9654);let R={};const z=t=>{let{value:e,onChange:s}=t;const[n,a]=(0,h.useState)([]),[i,o]=(0,h.useState)([]);(0,h.useEffect)((()=>{o((0,p.US)(e,[]).map((t=>t.value)))}),[e]),(0,h.useEffect)((()=>{(0,p.hd)("/api/auth/account/all").then((t=>{const e=[];for(let n of t){const t=n.account,e={key:(0,p.b9)(t)},s=n.type?n.type:{type:n.account,name:(0,p.Pt)(n.account)};if(R[e.key]){let t=R[e.key][s.key];t?t.children.push(n):(t={key:s.key,name:s.name,children:[n]},R[e.key].children.push(n.type),R[e.key][s.key]=t)}else{const t={};t.children=[s],t[s.key]={key:s.key,name:s.name,children:[n]},R[e.key]=t}}const s=["Expenses","Income","Assets","Liabilities","Equity"];for(let n of s)e.push({value:n,label:p.aY[n],children:((R[n]||{}).children||[]).filter((t=>t)).map((t=>{const e=R[n][t.key];return{value:e.key,label:e.name,children:(e.children||[]).map((t=>({label:(0,p.Pt)(t.account),value:t.account})))}}))});a(e)})).catch(console.error).finally((()=>{}))}),[]);return(0,m.jsx)(B.A,{value:i,style:{width:"240px"},size:"small",options:n,onChange:t=>{let[e,n,a]=t;const i=[{value:e,label:p.aY[e]},{value:n,label:R[e]&&R[e][n]?R[e][n].name:n},{value:a,label:(0,p.Pt)(a)}];localStorage.setItem("accounts",JSON.stringify(i)),s(i)},showSearch:{filter:(t,e)=>e.some((e=>e.label.toLowerCase().indexOf(t.toLowerCase())>-1))},placeholder:"\u8bf7\u9009\u62e9"})};class G extends h.Component{constructor(){super(...arguments),this.theme=this.context.theme,this.timeoutEvent=null,this.state={statsTab:localStorage.getItem("statsTabIndx")||"1",loading:!1,chartLoading:!1,Assets:0,Income:0,Expenses:0,Liabilities:0,hideMoney:JSON.parse(window.localStorage.getItem("hideMoney")||"false"),selectedMonth:O()().date()>=10?(0,p.Ew)():(0,p.H8)(),selectedAccounts:(0,p.US)(JSON.parse(window.localStorage.getItem("accounts")||"[]"),[])},this.queryStatsTotalAmount=()=>{this.setState({loading:!0});let t="",e="";const{selectedMonth:s}=this.state;if(s){const n=s.split("-").filter((t=>t));1===n.length?t=n[0]:2===n.length&&(t=n[0],e=n[1])}(0,p.hd)(`/api/auth/stats/total?year=${t}&month=${e}`).then((t=>{const{Income:e,Expenses:s,Liabilities:n,Assets:a}=t;this.setState({Assets:a,Income:e,Expenses:s,Liabilities:n})})).catch(console.error).finally((()=>{this.setState({loading:!1})}))},this.handleChangeMonth=t=>{this.setState({selectedMonth:t},(()=>{this.queryStatsTotalAmount()}))},this.handleChangeAccount=t=>{this.setState({selectedAccounts:t})},this.handleChangeTab=t=>{this.timeoutEvent&&clearTimeout(this.timeoutEvent),this.setState({chartLoading:!0,statsTab:t},(()=>{localStorage.setItem("statsTabIndx",t)})),this.timeoutEvent=setTimeout((()=>{this.setState({chartLoading:!1})}),300)},this.handleHideMoney=()=>{const t=!this.state.hideMoney;this.setState({hideMoney:t}),window.localStorage.setItem("hideMoney",t)}}componentDidMount(){this.queryStatsTotalAmount()}componentWillUnmount(){this.timeoutEvent&&clearTimeout(this.timeoutEvent)}render(){this.context.theme!==this.theme&&(this.theme=this.context.theme);const{loading:t,hideMoney:e,statsTab:s}=this.state,h=(0,_.A)("Liabilities:",this.state.Liabilities||0),r=Number(h.substring(1,100)),d=h.substring(0,1);return(0,m.jsxs)("div",{className:"stats-page",children:[(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(W.A,{value:this.state.selectedMonth,onChange:this.handleChangeMonth}),"\xa0\xa0",e?(0,m.jsx)(i.A,{size:"small",icon:(0,m.jsx)(n.A,{}),onClick:this.handleHideMoney}):(0,m.jsx)(i.A,{size:"small",icon:(0,m.jsx)(a.A,{}),onClick:this.handleHideMoney})]}),(0,m.jsx)("div",{children:(0,m.jsx)(z,{value:this.state.selectedAccounts,onChange:this.handleChangeAccount})})]}),(0,m.jsx)("div",{style:{height:"1rem"}}),(0,m.jsxs)("div",{children:[(0,m.jsx)(o.A,{gutter:16,children:(0,m.jsx)(l.A,{span:12,offset:6,children:(0,m.jsx)(V.A,{hide:e,style:{cursor:"pointer"},title:`${p.aY.Assets}\u603b\u989d`,value:this.state.Assets||0,loading:t})})}),(0,m.jsx)("div",{style:{height:"1rem"}}),(0,m.jsxs)(o.A,{gutter:16,children:[(0,m.jsx)(l.A,{span:8,children:(0,m.jsx)(V.A,{hide:e,title:`\u7d2f\u8ba1${p.aY.Income}`,value:-this.state.Income||0,loading:t,prefix:"+",valueStyle:{color:"#cf1322"}})}),(0,m.jsx)(l.A,{span:8,children:(0,m.jsx)(V.A,{hide:e,title:`\u7d2f\u8ba1${p.aY.Expenses}`,value:this.state.Expenses||0,loading:t,prefix:"-",valueStyle:{color:"#3f8600"}})}),(0,m.jsx)(l.A,{span:8,children:(0,m.jsx)(V.A,{hide:e,title:`\u7d2f\u8ba1${p.aY.Liabilities}`,value:r,loading:t,prefix:d,valueStyle:{color:"#3f8600"}})})]})]}),(0,m.jsxs)(c.A,{defaultActiveKey:"1",destroyInactiveTabPane:!0,activeKey:s,centered:!0,style:{marginTop:"2rem"},onChange:this.handleChangeTab,children:[(0,m.jsx)(c.A.TabPane,{tab:"\u6708\u5ea6\u6536\u652f\u7edf\u8ba1\u56fe",children:(0,m.jsx)(S,{chartLoading:this.state.chartLoading,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"1"),(0,m.jsx)(c.A.TabPane,{tab:"\u8d44\u4ea7\u8d1f\u503a\u7edf\u8ba1",children:(0,m.jsx)(g,{chartLoading:this.state.chartLoading,selectedAccounts:this.state.selectedAccounts,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"2"),(0,m.jsx)(c.A.TabPane,{tab:"\u635f\u76ca\u8d26\u6237\u7edf\u8ba1",children:(0,m.jsx)(f,{chartLoading:this.state.chartLoading,selectedAccounts:this.state.selectedAccounts,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"3"),(0,m.jsx)(c.A.TabPane,{tab:"\u8d26\u6237\u5206\u5e03\u5360\u6bd4",children:(0,m.jsx)(L,{chartLoading:this.state.chartLoading,selectedAccounts:this.state.selectedAccounts,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"4"),(0,m.jsx)(c.A.TabPane,{tab:"\u8d44\u4ea7\u6d41\u5411\u7edf\u8ba1",children:(0,m.jsx)(D,{chartLoading:this.state.chartLoading,selectedAccounts:this.state.selectedAccounts,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"6"),(0,m.jsx)(c.A.TabPane,{tab:"\u5546\u6237\u6d88\u8d39\u6392\u884c",children:(0,m.jsx)(C,{chartLoading:this.state.chartLoading,selectedAccounts:this.state.selectedAccounts,selectedMonth:this.state.selectedMonth,commodity:this.props.commodity})},"5")]})]})}}G.contextType=N.A;const H=(0,U.A)(G)}}]);
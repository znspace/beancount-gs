"use strict";(self.webpackChunkbeancount_web=self.webpackChunkbeancount_web||[]).push([[999],{2999:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var i=s(8380),r=s(6445),n=s(849),a=s(1141),l=s(3003),d=s(4747),h=s(5231),c=s(1896),o=s(5750),g=s(6668),m=s(2942),p=s(6694),u=s(9284),x=s(4760),j=s(2475),y=s(2069),A=s(712);const f={required:"${label} \u4e0d\u80fd\u4e3a\u7a7a\uff01"};class C extends u.Component{constructor(){super(...arguments),this.theme=this.context.theme,this.formRef=u.createRef(),this.state={loading:!1,expand:!1,newLedger:!1,selectedLedger:{},ledgers:[],config:{}},this.handleQueryLedgerList=()=>{this.setState({loading:!0}),(0,x.hd)("/api/ledger",{method:"GET"}).then((e=>{this.setState({ledgers:e,newLedger:0===e.length})})).finally((()=>{this.setState({loading:!1})}))},this.handleQueryServerConfig=()=>{this.setState({loading:!0}),(0,x.hd)("/api/config",{method:"GET"}).then((e=>{e.dataPath?this.setState({config:e}):window.location.href="/web/#/init"})).finally((()=>{this.setState({loading:!1})}))},this.handleCreateLedger=e=>{e.secret||!this.state.newLedger?this.handleReqCreateLedger(e):h.A.confirm({title:"\u63d0\u9192",icon:(0,A.jsx)(i.A,{}),content:"\u672a\u8bbe\u7f6e\u5bc6\u7801\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u4e0d\u5b89\u5168",okText:"\u786e\u8ba4\u4e0d\u8bbe\u7f6e\u5bc6\u7801",cancelText:"\u53d6\u6d88",onOk:()=>this.handleReqCreateLedger(e)})},this.handleReqCreateLedger=e=>{this.setState({loading:!0}),(0,x.hd)("/api/ledger",{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then((e=>{window.localStorage.setItem("ledgerId",e.ledgerId),e.title&&window.localStorage.setItem("ledgerTitle",e.title),e.currency&&window.localStorage.setItem("ledgerCurrency",JSON.stringify({currency:e.currency,symbol:e.currencySymbol})),this.props.history.replace("/")})).finally((()=>{this.setState({loading:!1})}))},this.handleSelectLedger=e=>{this.setState({selectedLedger:e})}}componentWillMount(){window.localStorage.getItem("ledgerId")&&(0,x.X3)()}componentDidMount(){this.handleQueryServerConfig(),this.handleQueryLedgerList()}render(){return this.context.theme!==this.theme&&(this.theme=this.context.theme),this.state.selectedLedger.mail||this.state.newLedger?(0,A.jsx)("div",{className:"ledger-page",children:(0,A.jsx)("div",{children:(0,A.jsxs)(g.A,{name:"add-account-form",size:"middle",layout:"vertical",ref:this.formRef,onFinish:this.handleCreateLedger,validateMessages:f,loading:this.state.loading,children:[(0,A.jsx)(g.A.Item,{name:"ledgerName",label:"\u8d26\u672c\u540d\u79f0",initialValue:this.state.selectedLedger.mail||"",rules:[{required:!0}],children:(0,A.jsx)(m.A,{placeholder:"\u4f60\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7684\u8d26\u672c\uff0c\u8d26\u672c\u4e4b\u95f4\u7684\u6570\u636e\u65e0\u6cd5\u4e92\u901a"})}),(0,A.jsx)(g.A.Item,{label:"\u4fee\u6539\u6e90\u6587\u4ef6\u65f6\u662f\u5426\u5907\u4efd\u6570\u636e",name:"isBak",valuePropName:"checked",rules:[{required:!0}],initialValue:this.state.config.isBak,children:(0,A.jsx)(p.A,{})}),(0,A.jsx)(g.A.Item,{name:"secret",label:"\u8d26\u672c\u5bc6\u7801",children:(0,A.jsx)(m.A,{type:"password",placeholder:"\u8d26\u672c\u5bc6\u7801"})}),!this.state.selectedLedger.mail&&(0,A.jsxs)(u.Fragment,{children:[(0,A.jsx)("div",{style:{fontSize:14,marginBottom:"2rem",textAlign:"center"},children:(0,A.jsxs)("a",{onClick:()=>{this.setState({expand:!this.state.expand})},children:[this.state.expand?(0,A.jsx)(l.A,{}):(0,A.jsx)(d.A,{})," \u66f4\u591a\u8d26\u672c\u8bbe\u7f6e"]})}),this.state.expand&&(0,A.jsxs)(u.Fragment,{children:[(0,A.jsx)(g.A.Item,{label:"\u8d26\u672c\u5f00\u59cb\u65e5\u671f",name:"startDate",initialValue:this.state.config.startDate,rules:[{required:!0}],children:(0,A.jsx)(m.A,{type:"date",placeholder:"\u8d26\u672c\u5f00\u59cb\u65e5\u671f"})}),(0,A.jsx)(g.A.Item,{label:"\u5e01\u79cd",name:"operatingCurrency",initialValue:this.state.config.operatingCurrency,rules:[{required:!0}],children:(0,A.jsx)(m.A,{placeholder:"\u5e01\u79cd"})}),(0,A.jsx)(g.A.Item,{label:"\u5e73\u8861\u8d26\u6237\u540d\u79f0\u8bbe\u7f6e",name:"openingBalances",initialValue:this.state.config.openingBalances,rules:[{required:!0}],children:(0,A.jsx)(m.A,{placeholder:"\u5e73\u8861\u8d26\u6237\u540d\u79f0\u8bbe\u7f6e"})})]})]}),(0,A.jsx)(g.A.Item,{children:(0,A.jsx)(c.A,{type:"primary",block:!0,htmlType:"submit",children:"\u521b\u5efa/\u8fdb\u5165\u4e2a\u4eba\u8d26\u672c"})}),this.state.ledgers.length>0&&(0,A.jsx)(g.A.Item,{children:(0,A.jsx)(c.A,{block:!0,onClick:()=>{this.setState({selectedLedger:{},newLedger:!1})},children:"\u8fd4\u56de\u8d26\u672c"})})]})})}):(0,A.jsxs)("div",{className:"ledger-page",children:[(0,A.jsx)("div",{children:(0,A.jsx)(c.A,{block:!0,type:"dashed",icon:(0,A.jsx)(r.A,{}),onClick:()=>{this.setState({newLedger:!0})},children:"\u521b\u5efa\u65b0\u8d26\u672c"})}),this.state.ledgers.map((e=>(0,A.jsx)(o.A,{style:{width:"100%",marginTop:16,cursor:"pointer"},loading:this.state.loading,children:(0,A.jsx)(o.A.Meta,{onClick:()=>{this.handleSelectLedger(e)},title:e.title,description:(0,A.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,A.jsxs)("div",{children:[(0,A.jsxs)("span",{children:[(0,A.jsx)(n.A,{}),"\xa0",e.mail]}),"\xa0\xa0",e.createDate&&(0,A.jsxs)("span",{children:[(0,A.jsx)(a.A,{}),"\xa0",e.createDate]})]}),(0,A.jsx)("div",{children:(0,A.jsx)("span",{children:e.operatingCurrency})})]})})})))]})}}C.contextType=j.A;const w=(0,y.A)(C)},2069:(e,t,s)=>{s.d(t,{A:()=>n});var i=s(9284),r=s(712);const n=e=>class extends i.Component{constructor(){super(...arguments),this.defaultCommodity={currency:"CNY",symbol:"\uffe5"},this.currentCommodity=window.localStorage.getItem("ledgerCurrency")}render(){return(0,r.jsx)(e,{...this.props,commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity})}}}}]);
(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[17],{147:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},149:function(e,t,n){"use strict";var r=n(147),c=n(58),o=n(59),a=n(61),i=n(60),l=n(0),u=n(4);t.a=function(e){return function(t){Object(a.a)(l,t);var n=Object(i.a)(l);function l(){var e;Object(c.a)(this,l);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).defaultCommodity={currency:"CNY",symbol:"\uffe5"},e.currentCommodity=window.localStorage.getItem("ledgerCurrency"),e}return Object(o.a)(l,[{key:"render",value:function(){return Object(u.jsx)(e,Object(r.a)(Object(r.a)({},this.props),{},{commodity:this.currentCommodity?JSON.parse(this.currentCommodity):this.defaultCommodity}))}}]),l}(l.Component)}},428:function(e,t,n){"use strict";n.r(t);var r=n(58),c=n(59),o=n(61),a=n(60),i=n(54),l=n(142),u=n(25),s=n(53),b=n(0),d=n(80),p=n(64),O=n(149),f=n(4),h=function(e){Object(o.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).ledgerTitle=localStorage.getItem("ledgerTitle")||"\u8d26\u672c",e.state={loading:!1},e.handleOpenDeleteModal=function(){l.a.confirm({title:"\u786e\u8ba4\u5220\u9664".concat(e.ledgerTitle,"\uff1f"),icon:Object(f.jsx)(i.a,{}),content:"\u5220\u9664\u540e\u5c06\u4e0d\u80fd\u6062\u590d",okText:"\u5220\u9664",onOk:e.handleDelete,okButtonProps:{danger:!0},cancelText:"\u53d6\u6d88"})},e.handleDelete=function(){e.setState({loading:!0}),Object(d.b)("/api/auth/ledger",{method:"DELETE"}).then((function(){localStorage.clear(),u.b.success("".concat(e.ledgerTitle,"\u5df2\u5220\u9664")),e.props.history.replace("/ledger")})).finally((function(){e.setState({loading:!1})}))},e}return Object(c.a)(n,[{key:"render",value:function(){return this.context.theme!==this.theme&&(this.theme=this.context.theme),Object(f.jsx)("div",{className:"setting-page",children:Object(f.jsx)(s.a,{block:!0,danger:!0,loading:this.state.loading,onClick:this.handleOpenDeleteModal,children:"\u5220\u9664\u8d26\u672c"})})}}]),n}(b.Component);h.contextType=p.a,t.default=Object(O.a)(h)}}]);
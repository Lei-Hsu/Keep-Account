(this["webpackJsonpkeep-accounts"]=this["webpackJsonpkeep-accounts"]||[]).push([[0],{429:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(130),_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),_style_style__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(46),uuid__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(714),_context_GlobalState__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(96),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(18),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,InputWrapper=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject||(_templateObject=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),InputItem=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.input(_templateObject2||(_templateObject2=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 60%;\n  height: 50px;\n  border: none;\n  outline: none;\n  text-align: center;\n"]))),Category=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject3||(_templateObject3=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 60%;\n  display: flex;\n  margin-top: 30px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n"]))),Kind=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.button(_templateObject4||(_templateObject4=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 23%;\n  height: 40px;\n  margin: 5px;\n  color: ",";\n  background: ",";\n  :active {\n    background: ",";\n  }\n  :hover {\n    background: ",";\n  }\n  :focus {\n    outline: none;\n  }\n"])),_style_style__WEBPACK_IMPORTED_MODULE_5__.a.second,_style_style__WEBPACK_IMPORTED_MODULE_5__.a.primary,_style_style__WEBPACK_IMPORTED_MODULE_5__.a.danger,_style_style__WEBPACK_IMPORTED_MODULE_5__.a.danger),Money=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.span(_templateObject5||(_templateObject5=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  margin-top: 10px;\n  color: ",";\n"])),_style_style__WEBPACK_IMPORTED_MODULE_5__.a.danger),InputMoneyArea=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.div(_templateObject6||(_templateObject6=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 100%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),InputMoney=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.input(_templateObject7||(_templateObject7=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 40%;\n  height: 50px;\n  border: none;\n  outline: none;\n  text-align: center;\n"]))),Plus=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.button(_templateObject8||(_templateObject8=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 10%;\n  height: 50px;\n"]))),Decrease=styled_components__WEBPACK_IMPORTED_MODULE_4__.a.button(_templateObject9||(_templateObject9=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  width: 10%;\n  height: 50px;\n"])));function InputArea(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),itemName=_useState2[0],setItemName=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState4=Object(_Users_mortysmith_Desktop_keep_accounts_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),money=_useState4[0],setMoney=_useState4[1],_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_GlobalState__WEBPACK_IMPORTED_MODULE_7__.a),addItems=_useContext.addItems,history=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.f)(),handleItemName=function(e){setItemName(e.target.value)},handleMoneyChange=function(e){setMoney(e.target.value)},plusAndDecrease=function plusAndDecrease(num){setMoney((function(pre){return eval(pre+num)}))},addItemsAction=function addItemsAction(e){if(e.preventDefault(),""===itemName)alert("\u8acb\u8f38\u5165\u5546\u54c1\u540d\u7a31");else{var item={id:Object(uuid__WEBPACK_IMPORTED_MODULE_6__.a)(),category:e.target.value,item:itemName,price:eval(money)};addItems(item),history.push("/")}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(InputWrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(InputItem,{onChange:handleItemName,placeholder:"\u8acb\u8f38\u5165\u8cfc\u8cb7\u7684\u5546\u54c1"}),eval(money)?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Money,{children:["\u91d1\u984d\uff1a",money]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Money,{children:"\u8acb\u8f38\u5165\u91d1\u984d"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(InputMoneyArea,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Decrease,{onClick:function(){return plusAndDecrease(-100)},children:"-100"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(InputMoney,{placeholder:"\u8acb\u8f38\u5165\u91d1\u984d",onChange:handleMoneyChange}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Plus,{onClick:function(){return plusAndDecrease("+100")},children:"+100"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Category,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u98f2\u98df",children:"\u98f2\u98df"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u4ea4\u901a\u6cb9\u9322",children:"\u4ea4\u901a\u6cb9\u9322"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u65e5\u5e38\u7528\u54c1",children:"\u65e5\u5e38\u7528\u54c1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u5a1b\u6a02",children:"\u5a1b\u6a02"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u5c45\u5bb6",children:"\u5c45\u5bb6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u5b78\u7fd2",children:"\u5b78\u7fd2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u91ab\u7642",children:"\u91ab\u7642"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u96fb\u8a71\u7db2\u8def",children:"\u96fb\u8a71\u7db2\u8def"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u6c34\u96fb\u74e6\u65af",children:"\u6c34\u96fb\u74e6\u65af"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u904b\u52d5\u5065\u8eab",children:"\u904b\u52d5\u5065\u8eab"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Kind,{onClick:function(e){return addItemsAction(e)},value:"\u6cbb\u88dd\u8cbb",children:"\u6cbb\u88dd\u8cbb"})]})]})}__webpack_exports__.a=InputArea},46:function(e,t,_){"use strict";_.d(t,"a",(function(){return n})),_.d(t,"b",(function(){return a}));var n={primary:"#86b825",second:"#fff9dc",danger:"#e6534b",normal:"#595056"},a={logo:"56px",lg:"24px",md:"18px",sm:"16px",xs:"14px",xss:"12px"}},712:function(e,t,_){},713:function(e,t,_){"use strict";_.r(t);var n,a,c=_(1),r=_.n(c),s=_(233),i=_.n(s),o=_(36),l=_(94),d=_(54),u=_(37),O=_(96),p=_(46),m=_(18),b=u.a.div(n||(n=Object(o.a)(["\n  width: 100%;\n  height: 130px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),p.a.primary),j=u.a.h1(a||(a=Object(o.a)(["\n  padding: 15px;\n  font-size: ",";\n  color: ",";\n"])),p.b.logo,p.a.second);var E,h,D,x,M,P,y,f,g=function(){var e=Object(c.useContext)(O.a).itemsList.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);return Object(m.jsx)(b,{children:Object(m.jsxs)(j,{children:["$",e]})})},I=u.a.div(E||(E=Object(o.a)(["\n  width: 100%;\n  min-height: 60vh;\n"]))),C=u.a.ul(h||(h=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: space-between;\n  list-style: none;\n"]))),A=u.a.li(D||(D=Object(o.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ",";\n"])),p.a.normal),L=u.a.span(x||(x=Object(o.a)(["\n  width: 25%;\n  color: ",";\n  font-weight: bold;\n"])),p.a.primary),T=u.a.span(M||(M=Object(o.a)(["\n  width: 25%;\n  color: ",";\n  font-size: ",";\n  text-align: left;\n"])),p.a.normal,p.b.md),U=u.a.div(P||(P=Object(o.a)([""]))),K=u.a.span(y||(y=Object(o.a)(["\n  padding: 10px;\n"]))),v=u.a.button(f||(f=Object(o.a)(["\n  outline: none;\n  width: 20px;\n  height: 25px;\n  background: ",";\n  border: none;\n  color: #fff;\n"])),p.a.danger);var B,k,R,W,w=function(){var e=Object(c.useContext)(O.a),t=e.itemsList,_=e.deleteItems;return Object(c.useEffect)((function(){localStorage.setItem("item",JSON.stringify(t))}),[t]),Object(m.jsx)(I,{children:Object(m.jsx)(C,{children:t.map((function(e){return Object(m.jsxs)(A,{children:[Object(m.jsx)(L,{children:e.category}),Object(m.jsx)(T,{children:e.item}),Object(m.jsxs)(U,{children:[Object(m.jsxs)(K,{children:["$",e.price]}),Object(m.jsx)(v,{onClick:function(){return _(e.id)},children:"X"})]})]},e.id)}))})})},S=u.a.div(B||(B=Object(o.a)(["\n  width: 50%;\n  height: 100%;\n  background: ",";\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),p.a.primary,p.b.lg,p.a.second),F=u.a.div(k||(k=Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 130px;\n  z-index: 1;\n"]))),q=Object(u.a)(S)(R||(R=Object(o.a)(["\n  background: ",";\n"])),p.a.primary),N=Object(u.a)(S)(W||(W=Object(o.a)(["\n  background: ",";\n"])),p.a.danger);var z=function(){return Object(m.jsxs)(F,{children:[Object(m.jsx)(q,{children:Object(m.jsx)(l.b,{to:"/add",children:"\u65b0\u589e"})}),Object(m.jsx)(N,{children:Object(m.jsx)(l.b,{to:"/statistics",children:"\u67e5\u770b\u7d71\u8a08"})})]})};var J,$=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsx)(z,{})]})},G=_(429),H=Object(u.a)(S)(J||(J=Object(o.a)(["\n  width: 100%;\n  background: ",";\n"])),p.a.danger);var X,Q,V=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(G.a,{}),Object(m.jsx)(F,{children:Object(m.jsx)(H,{children:Object(m.jsx)(l.b,{to:"/",children:"\u53d6\u6d88"})})})]})},Y=_(131),Z=_(280),ee=function(){var e=Object(c.useContext)(O.a).itemsList,t=function(t){var _=e.filter((function(e){return e.category===t})).map((function(e){return e.price}));return 0!==_.length?_.reduce((function(e,t){return e+t})):""},_=t("\u98f2\u98df"),n=t("\u4ea4\u901a\u6cb9\u9322"),a=t("\u65e5\u5e38\u7528\u54c1"),r=t("\u5a1b\u6a02"),s=t("\u5c45\u5bb6"),i=t("\u5b78\u7fd2"),o=t("\u91ab\u7642"),l=t("\u96fb\u8a71\u7db2\u8def"),d=t("\u6c34\u96fb\u74e6\u65af"),u=t("\u904b\u52d5\u5065\u8eab"),p=t("\u6cbb\u88dd\u8cbb");Z.a.registerTheme("new-theme",{defaultColor:"#86b825",colors20:["#86b825","#FF6B3B","#626681","#FFC100","#9FB40F","#76523B","#DAD5B5","#0E8E89","#E19348","#F383A2","#247FEA"]});var b={appendPadding:10,data:[{type:"\u98f2\u98df",value:_},{type:"\u4ea4\u901a\u6cb9\u9322",value:n},{type:"\u65e5\u5e38\u7528\u54c1",value:a},{type:"\u5a1b\u6a02",value:r},{type:"\u5c45\u5bb6",value:s},{type:"\u5b78\u7fd2",value:i},{type:"\u91ab\u7642",value:o},{type:"\u96fb\u8a71\u7db2\u8def",value:l},{type:"\u6c34\u96fb\u74e6\u65af",value:d},{type:"\u904b\u52d5\u5065\u8eab",value:u},{type:"\u6cbb\u88dd\u8cbb",value:p}],angleField:"value",colorField:"type",theme:"new-theme",radius:1,innerRadius:.64,statistic:{title:{customHtml:Object(m.jsx)("h3",{children:"\u7e3d\u91d1\u984d"})}},meta:{value:{formatter:function(e){return"".concat(e,"$")}}},label:{type:"inner",offset:"-50%",style:{textAlign:"center",fontSize:20,fontWeight:200,shadowColor:"white",shadowBlur:5},autoRotate:!1,content:"{value}"},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active"}]};return Object(m.jsx)(Z.b,Object(Y.a)({},b))},te=u.a.div(X||(X=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),_e=Object(u.a)(S)(Q||(Q=Object(o.a)(["\n  width: 100%;\n  background: ",";\n"])),p.a.danger);var ne,ae,ce=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(te,{children:Object(m.jsx)(ee,{})}),Object(m.jsx)(F,{children:Object(m.jsx)(_e,{children:Object(m.jsx)(l.b,{to:"/",children:"\u8fd4\u56de\u9996\u9801"})})})]})},re=u.a.div(ne||(ne=Object(o.a)(["\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),se=u.a.div(ae||(ae=Object(o.a)(["\n  width: 60vw;\n  min-height: 70vh;\n  padding-bottom: 130px;\n  margin: 20px 0;\n  background: #fff9dc;\n  position: relative;\n"])));var ie=function(){return Object(m.jsx)(l.a,{children:Object(m.jsx)(O.b,{children:Object(m.jsx)(re,{children:Object(m.jsxs)(se,{children:[Object(m.jsx)(g,{}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",children:Object(m.jsx)($,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/add",children:Object(m.jsx)(V,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/statistics",children:Object(m.jsx)(ce,{})})]})]})})})})};_(711),_(712);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root"))},96:function(e,t,_){"use strict";_.d(t,"a",(function(){return u})),_.d(t,"b",(function(){return O}));var n=_(130),a=_(1),c=_(246),r=_(131),s="DELETE_ITEMS",i="ADD_ITEMS",o=function(e,t){switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{itemsList:e.itemsList.filter((function(e){return e.id!==t.payload}))});case i:return Object(r.a)(Object(r.a)({},e),{},{itemsList:[].concat(Object(c.a)(e.itemsList),[t.payload])});default:return e}},l=_(18),d={itemsList:JSON.parse(localStorage.getItem("item"))||[]},u=Object(a.createContext)(d),O=function(e){var t=e.children,_=Object(a.useReducer)(o,d),c=Object(n.a)(_,2),r=c[0],O=c[1];return Object(l.jsx)(u.Provider,{value:{itemsList:r.itemsList,deleteItems:function(e){O({type:s,payload:e})},addItems:function(e){O({type:i,payload:e})}},children:t})}}},[[713,1,2]]]);
//# sourceMappingURL=main.32d13853.chunk.js.map
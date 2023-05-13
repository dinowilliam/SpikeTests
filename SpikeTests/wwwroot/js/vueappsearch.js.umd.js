(function(e,s){typeof exports=="object"&&typeof module<"u"?s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis<"u"?globalThis:e||self,s(e.Vue))})(this,function(e){"use strict";var q=Object.defineProperty;var I=(e,s,a)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var m=(e,s,a)=>(I(e,typeof s!="symbol"?s+"":s,a),a);class s{constructor(){m(this,"pageNumber")}}const a=e.defineComponent({name:"SearchResults",props:{response:{type:Array,required:!0}},data(){return{offset:Number,currentPage:Number,itemsPerPage:6,pageOfItems:this.response.slice(0,6)}},methods:{async onPageChange(t){this.currentPage=t,this.offset=(t-1)*this.itemsPerPage+1-1,this.pageOfItems=await this.response.slice(this.offset,this.offset+this.itemsPerPage),console.log("Internal Page: "+t),console.log("Current Page: "+this.currentPage)}},computed:{rows(){return this.response.length},pages(){let t;t=new Array;for(let n=this.startPageRange;n<=this.endPageRange;n+=1){let r=new s;r.pageNumber=n,t.push(r)}return t},pageQuantity(){return Math.ceil(this.response.length/this.itemsPerPage)},previousPage(){return this.currentPage>1?this.currentPage-1:1},nextPage(){return this.currentPage<this.pageQuantity?this.currentPage+1:this.pageQuantity()},startPageRange:function(){let t;return(this.currentPage=1)&&(t=1),this.currentPage>1&&(t=this.currentPage+1),t},endPageRange:function(){return this.startPageRange+40}}}),M="",p=(t,n)=>{const r=t.__vccOpts||t;for(const[i,l]of n)r[i]=l;return r},h={class:"text-start"},g={class:"d-flex text-body-secondary pt-3"},_=e.createElementVNode("span",{class:"me-1"},[e.createElementVNode("img",{src:" https://www.dinowilliam.com/lib/assets/logo.png",height:"16",width:"72",loading:"lazy"})],-1),f={class:"pb-3 mb-0 small lh-sm border-bottom"},u={class:"h6"},P=["href"],y={"aria-label":"Page navigation example"},N={class:"pagination justify-content-center"},k={class:"page-item disabled"},E={class:"page-item"},b=["onClick"],S={class:"page-item"};function V(t,n,r,i,l,d){return e.openBlock(),e.createElementBlock("div",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.pageOfItems,(o,c)=>(e.openBlock(),e.createElementBlock("div",h,[e.createElementVNode("div",g,[_,e.createElementVNode("p",f,[e.createElementVNode("p",u,e.toDisplayString(o.url),1),e.createElementVNode("p",null,[e.createElementVNode("a",{class:"h4",href:o.url},e.toDisplayString(o.title),9,P)]),e.createTextVNode(" "+e.toDisplayString(o.description),1)])])]))),256)),e.createElementVNode("nav",y,[e.createElementVNode("ul",N,[e.createElementVNode("li",k,[e.createElementVNode("a",{class:"page-link",onClick:n[0]||(n[0]=o=>t.onPageChange(t.previousPage))},"Previous")]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.pages,o=>(e.openBlock(),e.createElementBlock("li",E,[e.createElementVNode("a",{class:"page-link",onClick:c=>t.onPageChange(o.pageNumber)},e.toDisplayString(o.pageNumber),9,b)]))),256)),e.createElementVNode("li",S,[e.createElementVNode("a",{class:"page-link",onClick:n[1]||(n[1]=o=>t.onPageChange(t.nextPage))},"Next")])])])])}const $=p(a,[["render",V]]),B=e.defineComponent({name:"SearchForm",components:{SearchResults:$},data(){return{prompt:"",dataResponse:Array,showSearch:!0}},methods:{sendSearch(){var t={Prompt:this.prompt};const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return console.log(prompt),fetch("https://localhost:44354/Search",n).then(r=>r.json()).then(r=>(this.dataResponse=r,this.showSearch=!1))}},computed:{showResults(){return!this.showSearch}}}),Q="",w={key:0,class:"container-fluid mt-5"},C=e.createElementVNode("div",{class:"pt-5 pb-5"},null,-1),R=e.createElementVNode("div",{class:"mt-5",id:"logo"},[e.createElementVNode("img",{src:"/img/lucene-net-color.png"})],-1),A={class:"input-group pt-5 mb-3"},F=e.createElementVNode("button",{type:"submit",class:"btn btn-lg btn-dark col-md-4"},"Search",-1);function O(t,n,r,i,l,d){const o=e.resolveComponent("SearchResults");return e.openBlock(),e.createElementBlock(e.Fragment,null,[t.showSearch?(e.openBlock(),e.createElementBlock("div",w,[C,R,e.createElementVNode("form",{onSubmit:n[1]||(n[1]=e.withModifiers((...c)=>t.sendSearch&&t.sendSearch(...c),["prevent"]))},[e.createElementVNode("div",A,[e.withDirectives(e.createElementVNode("input",{type:"text",class:"form-control",id:"search",name:"search",placeholder:"","aria-label":"","aria-describedby":"","onUpdate:modelValue":n[0]||(n[0]=c=>t.prompt=c),required:""},null,512),[[e.vModelText,t.prompt]])]),F],32)])):e.createCommentVNode("",!0),t.showResults?(e.openBlock(),e.createBlock(o,{key:1,response:t.dataResponse},null,8,["response"])):e.createCommentVNode("",!0)],64)}const T=p(B,[["render",O]]),x=e.defineComponent({name:"App",components:{SearchForm:T}}),L="";function D(t,n,r,i,l,d){const o=e.resolveComponent("SearchForm");return e.openBlock(),e.createBlock(o)}const j=p(x,[["render",D]]);e.createApp(j).mount("#mainAppSearch")});
//# sourceMappingURL=vueappsearch.js.umd.js.map

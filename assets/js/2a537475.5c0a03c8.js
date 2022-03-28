"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:3},l="Mutable queues",p={unversionedId:"walkthroughs/mutable-queue",id:"walkthroughs/mutable-queue",title:"Mutable queues",description:"This example aims to provide a formal specification for a mutable queue data",source:"@site/docs/walkthroughs/mutable-queue.md",sourceDirName:"walkthroughs",slug:"/walkthroughs/mutable-queue",permalink:"/gospel/walkthroughs/mutable-queue",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fibonacci numbers",permalink:"/gospel/walkthroughs/fibonacci"},next:{title:"Union-find",permalink:"/gospel/walkthroughs/union-find"}},u={},d=[{value:"Modeling the queue datastructure",id:"modeling-the-queue-datastructure",level:2},{value:"Pushing into the queue",id:"pushing-into-the-queue",level:2},{value:"Various flavors of <code>pop</code>",id:"various-flavors-of-pop",level:2},{value:"Exceptional version",id:"exceptional-version",level:3},{value:"Unsafe version",id:"unsafe-version",level:3},{value:"Defensive version",id:"defensive-version",level:3},{value:"A small break: <code>is_empty</code>",id:"a-small-break-is_empty",level:2},{value:"Creating queues",id:"creating-queues",level:2},{value:"Merging queues",id:"merging-queues",level:2},{value:"In-place transfer",id:"in-place-transfer",level:3},{value:"Destructive operations",id:"destructive-operations",level:3},{value:"A constructive version",id:"a-constructive-version",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mutable-queues"},"Mutable queues"),(0,o.kt)("p",null,"This example aims to provide a formal specification for a mutable queue data\nstructure, similar to OCaml's standard library ",(0,o.kt)("inlineCode",{parentName:"p"},"Queue"),"."),(0,o.kt)("p",null,"This work is adapted from the article ",(0,o.kt)("em",{parentName:"p"},"GOSPEL -Providing OCaml with a Formal\nSpecification Language"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", which also\nfeatures an implementation of the following specification that was formally\nverified using Why3gospel."),(0,o.kt)("h2",{id:"modeling-the-queue-datastructure"},"Modeling the queue datastructure"),(0,o.kt)("p",null,"Let's start by defining the type of queues: the ",(0,o.kt)("inlineCode",{parentName:"p"},"'a t")," type represents a\npolymorphic queue, storing elements of type ",(0,o.kt)("inlineCode",{parentName:"p"},"'a"),". To enable reasoning about the\nelements of a queue, we attach one model to its type declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'a t\n(*@ mutable model view: 'a seq *)\n")),(0,o.kt)("p",null,"The model ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," represents the mathematical sequence of elements stored in\nthe queue. The type ",(0,o.kt)("inlineCode",{parentName:"p"},"'a seq")," is the type of logical sequences defined in the\nGospel standard library and is for specifications only. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mutable"),"\nkeyword states that the ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," field can change over time."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This shows how Gospel annotations provide extra insight and are also relevant\nfor documentation: the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutable")," keyword states that the type ",(0,o.kt)("inlineCode",{parentName:"p"},"'a t")," is mutable,\nwhich cannot be deduced from its OCaml declaration alone."))),(0,o.kt)("h2",{id:"pushing-into-the-queue"},"Pushing into the queue"),(0,o.kt)("p",null,"Let us now declare and specify a ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," operation for these queues:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"val push: 'a -> 'a t -> unit\n(*@ push v q\n    modifies q\n    ensures  q.view = Seq.cons v (old q.view) *)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first line of the specification is the header; it names the two arguments\nof ",(0,o.kt)("inlineCode",{parentName:"li"},"push"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"v")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"q"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"modifies")," clause states that the function ",(0,o.kt)("inlineCode",{parentName:"li"},"push")," may mutate the contents\nof ",(0,o.kt)("inlineCode",{parentName:"li"},"q"),"."),(0,o.kt)("li",{parentName:"ul"},"Finally, the ",(0,o.kt)("inlineCode",{parentName:"li"},"ensures")," clause introduces a post-condition that describes the\nmodel ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"q")," after a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"push"),": the new ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," extends the old\nvalue of ",(0,o.kt)("inlineCode",{parentName:"li"},"view")," with the element ",(0,o.kt)("inlineCode",{parentName:"li"},"v")," at the front. We use the keyword ",(0,o.kt)("inlineCode",{parentName:"li"},"old")," to\nrefer to the value of an expression (here, ",(0,o.kt)("inlineCode",{parentName:"li"},"q.view"),") in the pre-state, ",(0,o.kt)("em",{parentName:"li"},"i.e."),",\nbefore the function call.")),(0,o.kt)("p",null,"Note that the module ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq")," is part of the Gospel standard library and should not\nbe confused with module ",(0,o.kt)("inlineCode",{parentName:"p"},"Seq")," from the OCaml standard library."),(0,o.kt)("h2",{id:"various-flavors-of-pop"},"Various flavors of ",(0,o.kt)("inlineCode",{parentName:"h2"},"pop")),(0,o.kt)("p",null,"Let us now move to another function, ",(0,o.kt)("inlineCode",{parentName:"p"},"pop"),", and illustrate three ways of\nhandling assumptions from the client in Gospel specifications."),(0,o.kt)("h3",{id:"exceptional-version"},"Exceptional version"),(0,o.kt)("p",null,"In this version, similar to the one provided by the OCaml standard library,\n",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," raises an ",(0,o.kt)("inlineCode",{parentName:"p"},"Empty")," exception if its argument is an empty queue. We specify\nthis behaviour as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"exception Empty\n\nval pop: 'a t -> 'a\n(*@ v = pop q\n    modifies q\n    ensures  old q.view = q.view ++ Seq.cons v empty\n    raises   Empty -> q.view = old q.view = empty *)\n")),(0,o.kt)("p",null,"We have two post-conditions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first one, introduced with ",(0,o.kt)("inlineCode",{parentName:"li"},"ensures"),", states the post-condition that holds\nwhenever the function ",(0,o.kt)("inlineCode",{parentName:"li"},"pop")," returns a value ",(0,o.kt)("inlineCode",{parentName:"li"},"v"),"."),(0,o.kt)("li",{parentName:"ul"},"The second one, introduced by ",(0,o.kt)("inlineCode",{parentName:"li"},"raises"),", states the exceptional post-condition\nthat holds whenever the call raises the exception ",(0,o.kt)("inlineCode",{parentName:"li"},"Empty"),".")),(0,o.kt)("p",null,"Similarly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," case, the clause ",(0,o.kt)("inlineCode",{parentName:"p"},"modifies")," indicates that this function\ncall may mutate ",(0,o.kt)("inlineCode",{parentName:"p"},"q"),". Note that this applies to the exceptional case as well, and\nthat's why we state that ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," is both empty and not modified."),(0,o.kt)("h3",{id:"unsafe-version"},"Unsafe version"),(0,o.kt)("p",null,"Now, let us consider an unsafe variant of ",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," that should only be called on a\nnon-empty queue, leaving the responsibility of that property to the client code.\nThe function does not raise ",(0,o.kt)("inlineCode",{parentName:"p"},"Empty")," anymore but instead expects a non-empty\nargument. We can thus add the following pre-condition to the contract using the\nkeyword ",(0,o.kt)("inlineCode",{parentName:"p"},"requires"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"val unsafe_pop: 'a t -> 'a\n(*@ v = pop q\n    requires q.view <> empty\n    modifies q\n    ensures  old q.view = q.view ++ (Seq.cons v empty) *)\n")),(0,o.kt)("h3",{id:"defensive-version"},"Defensive version"),(0,o.kt)("p",null,"Instead of assuming that the precondition is guaranteed by the caller, we can\nalso adopt a more defensive approach where ",(0,o.kt)("inlineCode",{parentName:"p"},"pop")," raises ",(0,o.kt)("inlineCode",{parentName:"p"},"Invalid_argument"),"\nwhenever an empty queue is provided. Gospel provides a way to declare such a\nbehavior, using ",(0,o.kt)("inlineCode",{parentName:"p"},"checks")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"requires"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"val pop: 'a t -> 'a\n(*@ v = pop q\n      checks   q.view <> empty\n      modifies q\n      ensures  old q.view = q.view ++ (Seq.cons v empty) *)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"checks")," keyword means that function itself checks the pre-condition\n",(0,o.kt)("inlineCode",{parentName:"p"},"q.view <> empty")," and raises ",(0,o.kt)("inlineCode",{parentName:"p"},"Invalid_argument")," whenever it does not hold. Note\nthat ",(0,o.kt)("inlineCode",{parentName:"p"},"q.view")," is just a logical model and may not exist at all in the\nimplementation. However, the function checks a property that, from a logical\npoint of view, results in ",(0,o.kt)("inlineCode",{parentName:"p"},"q.view")," not being empty."),(0,o.kt)("h2",{id:"a-small-break-is_empty"},"A small break: ",(0,o.kt)("inlineCode",{parentName:"h2"},"is_empty")),(0,o.kt)("p",null,"Our next function needs a simpler specification. Consider the following\ndeclaration for an emptiness test, together with its contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"val is_empty: 'a t -> bool\n(*@ b = is_empty q\n      ensures b <-> q.view = empty *)\n")),(0,o.kt)("p",null,"The post-conditions captures that the function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if and only if the\nqueue is empty."),(0,o.kt)("p",null,"Although very simple, note that the above specification implies an important\nproperty: since no ",(0,o.kt)("inlineCode",{parentName:"p"},"modifies")," clause is present, the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," is read-only:\nwe know that a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"is_empty")," does not modify ",(0,o.kt)("inlineCode",{parentName:"p"},"q.view"),"."),(0,o.kt)("h2",{id:"creating-queues"},"Creating queues"),(0,o.kt)("p",null,"The next function features the creation of a queue. Its declaration and\nspecification are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"val create: unit -> 'a t\n(*@ q = create ()\n      ensures q.view = empty *)\n")),(0,o.kt)("p",null,"The newly created queue has no elements: its ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," model equals the ",(0,o.kt)("inlineCode",{parentName:"p"},"empty"),"\nsequence, as stated by the post-condition."),(0,o.kt)("p",null,"It is worth mentioning that the specification implicitly assumes ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," to be\ndisjoint from every previously allocated queue. This is an important design\nchoice of Gospel that follows a rule of thumbs: writing functions that return\nnon-fresh, mutable values is considered bad practice in OCaml."),(0,o.kt)("h2",{id:"merging-queues"},"Merging queues"),(0,o.kt)("p",null,"Let us conclude this specification with a functions to merge two queues. Several\napproaches are possible; we will showcase three of them."),(0,o.kt)("h3",{id:"in-place-transfer"},"In-place transfer"),(0,o.kt)("p",null,"Let us start with a concatenation that transfers all elements from one queue to\nanother, with the following specification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"val transfer: 'a t -> 'a t -> unit\n(*@ transfer src dst\n    modifies src, dst\n    ensures  src.view = empty\n    ensures  dst.view = old dst.view ++ old src.view *)\n")),(0,o.kt)("p",null,"Here, the contract states that both queues are modified. The queue ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," is\nemptied after the call and its elements are appended to the queue ",(0,o.kt)("inlineCode",{parentName:"p"},"dst"),". Notice\nthe use of ",(0,o.kt)("inlineCode",{parentName:"p"},"old")," in the second post-condition, which helps us refer to the state\nof the queues before they are passed to the function."),(0,o.kt)("h3",{id:"destructive-operations"},"Destructive operations"),(0,o.kt)("p",null,"One could think of a slightly different version of ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"destructive_transfer"),", that invalidates ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," when called. In other words, the\nvalue of ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," should be considered dirty and must not be used anymore in the\nrest of the program. Such use-cases are frequent in system programming, for\ninstance when dealing with file descriptors after ",(0,o.kt)("inlineCode",{parentName:"p"},"fclose")," calls. Gospel\nprovides ",(0,o.kt)("inlineCode",{parentName:"p"},"consumes")," clauses to capture this semantic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"val destructive_transfer: 'a t -> 'a t -> unit\n(*@ destructive_transfer src dst\n    consumes src\n    modifies dst\n    ensures  dst.view = old dst.view ++ old src.view *)\n")),(0,o.kt)("p",null,"Note that we do not need to give informations on ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," in the post-state, since\nits value must not be used anymore."),(0,o.kt)("h3",{id:"a-constructive-version"},"A constructive version"),(0,o.kt)("p",null,"Finally, a perhaps simpler version may consist in a ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," function creating a\nfresh queue with the elements of the queues passed as arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"val concat: 'a t -> 'a t -> 'a t\n(*@ new = concat q1 q2\n    ensures new.view = q1.view ++ q2.view *)\n")),(0,o.kt)("p",null,"In this version, no ",(0,o.kt)("inlineCode",{parentName:"p"},"modifies")," appears, meaning that none of the arguments are\nmodified by the function, thus specifying their model in the post-state is not\nnecessary."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Arthur Chargu\xe9raud, Jean-Christophe Filli\xe2tre, Cl\xe1udio Louren\xe7o, M\xe1rio\nPereira. GOSPEL -Providing OCaml with a Formal Specification Language. FM\n2019 - 23rd International Symposium on Formal Methods, Oct 2019, Porto,\nPortugal. \u27e8",(0,o.kt)("a",{parentName:"li",href:"https://hal.inria.fr/hal-02157484"},"hal-02157484"),"\u27e9",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);
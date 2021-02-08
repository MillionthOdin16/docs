(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(198)),o={id:"debian-installation",title:"Install Memgraph for Debian",sidebar_label:"Debian GNU/Linux"},l={unversionedId:"getting-started/installation/debian-installation",id:"getting-started/installation/debian-installation",isDocsHomePage:!1,title:"Install Memgraph for Debian",description:"This article briefly outlines the basic steps necessary to install the Memgraph Debian package.",source:"@site/docs/getting-started/installation/debian-installation.md",slug:"/getting-started/installation/debian-installation",permalink:"/docs/memgraph/getting-started/installation/debian-installation",editUrl:"https://github.com/g-despot/docs/tree/main/docs/getting-started/installation/debian-installation.md",version:"current",sidebar_label:"Debian GNU/Linux",sidebar:"memgraph",previous:{title:"Install Memgraph with Docker",permalink:"/docs/memgraph/getting-started/installation/docker-installation"},next:{title:"Install Memgraph RPM package",permalink:"/docs/memgraph/getting-started/installation/rpm-installation"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide {#installation-guide}",id:"installation-guide-installation-guide",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This article briefly outlines the basic steps necessary to install the Memgraph Debian package."),Object(i.a)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.a)("p",null,"Before you proceed with the installation guide make sure that you have:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Downloaded the latest ",Object(i.a)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",Object(i.a)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found here"),".")),Object(i.a)("h2",{id:"installation-guide-installation-guide"},"Installation guide {#installation-guide}"),Object(i.a)("p",null,"After downloading Memgraph as a Debian package, install it by running the\nfollowing:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"dpkg -i /path/to/memgraph_<version>.deb\n")),Object(i.a)("p",null,"You could get errors while installing the package with the above command if you\ndon't have all of Memgraph's dependencies installed. The issues mostly look\nlike the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),Object(i.a)("p",null,"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"apt-get install -f\n")),Object(i.a)("p",null,"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."),Object(i.a)("p",null,"On successful installation, Memgraph should already be running. To\nconfirm it, you can start it explicitly as follows:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"systemctl start memgraph\n")),Object(i.a)("p",null,"To verify that Memgraph is running, run the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"journalctl --unit memgraph\n")),Object(i.a)("p",null,"If successful, you should receive an output similar to the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational\nNov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687\n")),Object(i.a)("p",null,"At this point, Memgraph is ready for you to ",Object(i.a)("a",{parentName:"p",href:"/docs/memgraph/getting-started/querying/querying"},"submit queries"),"."),Object(i.a)("h3",{id:"configuration"},"Configuration"),Object(i.a)("p",null,"The Memgraph configuration is available in ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nIf the Memgraph configuration is altered, Memgraph needs to be restarted."),Object(i.a)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),Object(i.a)("p",null,"To shut down the Memgraph server, issue the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"systemctl stop memgraph\n")),Object(i.a)("h2",{id:"where-to-next"},"Where to next?"),Object(i.a)("p",null,"To learn how to query the database, take a look at the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/docs/memgraph/getting-started/querying/querying"},"Querying"))," guide or ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive tutorials.",Object(i.a)("br",null),"\nVisit the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"../connecting-applications"},"Building applications"))," page if you need to\nconnect to the database programmatically."),Object(i.a)("h2",{id:"getting-help"},"Getting help"),Object(i.a)("p",null,"Visit the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/docs/memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}c.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||g[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */(()=>{"use strict";var e,a,l,c,o,s,d,t={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var l=f[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,b),l.loaded=!0,l.exports}b.m=t,b.amdO={},e=[],b.O=(a,l,c,o)=>{if(!l){var s=1/0;for(f=0;f<e.length;f++){for(var[l,c,o]=e[f],d=!0,t=0;t<l.length;t++)(!1&o||s>=o)&&Object.keys(b.O).every((e=>b.O[e](l[t])))?l.splice(t--,1):(d=!1,o<s&&(s=o));d&&(e.splice(f--,1),a=c())}return a}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[l,c,o]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a}),a},l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var o=Object.create(null);b.r(o);var s={};a=a||[null,l({}),l([]),l(l)];for(var d=2&c&&e;"object"==typeof d&&!~a.indexOf(d);d=l(d))Object.getOwnPropertyNames(d).forEach((a=>s[a]=()=>e[a]));return s.default=()=>e,b.d(o,s),o},b.d=(e,a)=>{for(var l in a)b.o(a,l)&&!b.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,l)=>(b.f[l](e,a),a)),[])),b.u=e=>(({88:"locales/de-json",155:"locales/kn",165:"locales/cs",239:"lazy_loaded_ca_root_certificates",248:"locales/tr",275:"lazy_loaded_low_priority_components",319:"moment_locales/nl",673:"locales/es",677:"locales/bn-json",792:"locales/et",820:"locales/ko",887:"locales/ru-json",906:"locales/uk",907:"locales/fil",951:"moment_locales/th",1055:"moment_locales/el",1069:"moment_locales/sv",1081:"locales/zh-HK",1204:"locales/el",1234:"locales/bg-json",1244:"locales/gu-json",1248:"locales/mr",1381:"moment_locales/hr",1389:"locales/hu-json",1473:"moment_locales/ar",1520:"moment_locales/ms-MY",1529:"locales/lt",1592:"locales/mk-json",1628:"locales/da",1702:"vendors~lazy_loaded_low_priority_components",1770:"locales/sk",1791:"moment_locales/es",1967:"locales/az-json",1992:"locales/pt-json",2017:"moment_locales/sw",2023:"moment_locales/cs",2091:"locales/pt-BR",2101:"vendors~bootstrap_main",2135:"locales/th",2394:"moment_locales/es-DO",2422:"locales/he-json",2445:"moment_locales/fr",2556:"locales/hu",2619:"locales/ur-json",2739:"locales/ta",2771:"locales/mr-json",2790:"lazy_loaded_low_priority_components~",2830:"locales/it",2944:"locales/sv",2957:"moment_locales/ru",2966:"moment_locales/ar-MA",2967:"locales/sr-json",2974:"vendors~pdf",2979:"moment_locales/en-IE",3004:"locales/el-json",3017:"moment_locales/uz",3047:"moment_locales/zh-CN",3113:"moment_locales/ml",3370:"moment_locales/te",3421:"locales/zh-TW-json",3422:"moment_locales/mr",3501:"moment_locales/sl",3539:"locales/cs-json",3565:"locales/fil-json",3569:"moment_locales/ro",3721:"locales/ta-json",3722:"locales/hi",3748:"moment_locales/af",3853:"locales/hr-json",3892:"moment_locales/en-NZ",3934:"moment_locales/ar-XB",3998:"locales/sw",4046:"locales/nb-json",4132:"locales/id-json",4169:"locales/lt-json",4259:"locales/sl",4260:"locales/kk-json",4339:"moment_locales/hu",4361:"locales/ur",4451:"locales/ca-json",4468:"moment_locales/gu",4473:"moment_locales/et",4616:"moment_locales/en-CA",4680:"locales/zh-CN-json",4708:"locales/lv",4739:"locales/es-json",4768:"locales/sv-json",4771:"locales/te-json",4794:"locales/ml-json",4815:"vendors~lazy_loaded_relay",4818:"moment_locales/ko",4853:"locales/fa-json",4873:"locales/uz",4980:"moment_locales/pl",5027:"moment_locales/he",5125:"moment_locales/zh-TW",5128:"locales/id",5170:"moment_locales/sr",5182:"locales/ja",5211:"locales/[request]",5247:"moment_locales/it",5282:"locales/uk-json",5315:"locales/vi-json",5443:"locales/ms",5512:"svg",5608:"locales/ja-json",5632:"locales/ca",5650:"locales/te",5671:"moment_locales/ar-LY",5708:"locales/hr",5729:"locales/he",5740:"moment_locales/az",5790:"moment_locales/sr-CYRL",5862:"moment_locales/de",5881:"locales/it-json",5955:"locales/th-json",5959:"moment_locales/nb",5965:"moment_locales/sk",6032:"locales/pa-json",6038:"locales/gu",6098:"locales/sq-json",6163:"moment_locales/ur",6282:"moment_locales/ar-KW",6293:"locales/fr",6331:"locales/sr",6352:"vendors~lazy_loaded_business_direct_utils",6365:"locales/af",6483:"locales/zh-CN",6496:"moment_locales/sq",6511:"moment_locales/id",6547:"moment_locales/pt-BR",6568:"moment_locales/kn",6606:"locales/sw-json",6651:"locales/mk",6655:"locales/ml",6700:"locales/kn-json",6709:"moment_locales/hi",6884:"moment_locales/ar-DZ",6920:"moment_locales/lt",6933:"locales/en",6953:"locales/pt",7020:"locales/ko-json",7055:"locales/nl-json",7072:"locales/az",7074:"moment_locales/kk",7102:"locales/bg",7162:"locales/ro",7163:"locales/sk-json",7205:"lazy_loaded_high_priority_components",7216:"locales/de",7315:"moment_locales/da",7334:"locales/fr-json",7386:"moment_locales/fi",7494:"locales/en-json",7542:"locales/zh-TW",7626:"locales/sl-json",7654:"locales/uz-json",7662:"moment_locales/fa",7728:"moment_locales/bn",7739:"moment_locales/ms",7749:"locales/nb",7920:"locales/zh-HK-json",7938:"locales/lv-json",7964:"bootstrap_main",8054:"locales/ar",8117:"moment_locales/uz-LATN",8132:"moment_locales/pa-IN",8288:"locales/af-json",8292:"locales/ru",8295:"vendors~lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",8598:"locales/vi",8606:"locales/hi-json",8628:"locales/pl",8634:"moment_locales/ta",8678:"moment_locales/en-AU",8700:"locales/bn",8799:"moment_locales/fr-CH",8801:"locales/ar-json",8945:"locales/ro-json",8962:"locales/tr-json",9116:"moment_locales/pt",9227:"moment_locales/en-GB",9289:"moment_locales/ar-TN",9313:"moment_locales/tr",9488:"lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",9545:"moment_locales/mk",9566:"locales/pl-json",9599:"locales/et-json",9613:"locales/fi",9626:"locales/da-json",9646:"moment_locales/ar-SA",9682:"moment_locales/uk",9719:"locales/kk",9737:"locales/sq",9750:"locales/nl",9765:"moment_locales/fr-CA",9789:"locales/fi-json",9815:"locales/pa",9817:"moment_locales/ca",9911:"locales/ms-json",9995:"locales/ar-XB",9999:"locales/fa"}[e]||e)+"."+{88:"0fe95a85cfaf2758728a",155:"fd23f59459191eb15692",165:"b629e7f3dd54ff6db417",239:"d832e68824d797594421",248:"27e4e3883b53a965e057",275:"947c450c1dec809265cf",319:"83cbe9831383610b7fdc",673:"6d6cf54339a6607b83d3",677:"55d7841c07166b488b7a",792:"c8b0e52d6a31d597e2d8",820:"23d135405e453ac59776",887:"b5843855a4b1cfcd612e",906:"be1ae8c25731397357c9",907:"e2feec89e0f5779734eb",951:"81c8248690c3bee6b89b",1055:"1148c38ebfc9461ef42c",1069:"9b20d36ab6457d7240b9",1081:"8f0585d8ce0b556fc412",1204:"a7795f266190ee4888dd",1234:"8431a9334b8f7d7a9a49",1244:"7c7cce7bde23bfb90486",1248:"4e3af6778b5f41c89b04",1381:"1bd84052102c0eebfe3d",1389:"a1b86c1bdd6085ef18ff",1473:"c6a578a0f882665ccfce",1505:"12a73233b91e2daa4ed6",1520:"96c8b7c223ac076145c0",1529:"c1dd074551ea1fcf7be1",1592:"0162226b92bbdcb60ab9",1628:"f68d496ca600faaada5b",1702:"1f1eb49c3fa9aea80ccf",1770:"06b6904f58ce56aa79dc",1791:"5d00d5442a0b32975cd9",1967:"b31321e5a588eb4aff81",1992:"b8422b30842307551651",2017:"25389f8f2f5a19c26478",2023:"58fd9b1d7ca7e6232553",2091:"7b329b619264b12a81ba",2101:"c8e7af1e3df9523b5d83",2135:"d787796f7c8cea1cb615",2394:"fe9d41487fadadf19a5a",2422:"52fdba749be5c673ba20",2445:"7afc6c4e863b0ff716d7",2556:"3b56b750f9a6f18ef5e9",2619:"f942e320640c0162112e",2739:"d5641cbdf4ef248f0112",2771:"8fed762e3f437e6c7ba4",2776:"b87d45215fd3a1ecafe1",2790:"0022d28f7a056c25695a",2830:"1d4f998e25d25165793e",2944:"9cfb672758b5927b9b31",2957:"458f6a3df28a64ebf1a7",2966:"60849ece5618cb0cf09a",2967:"362478e5832aab688048",2974:"08cac1e0a1538c215d2f",2979:"52fcca7fb9e57d1beef6",3004:"64ad3245b85a972ed12b",3017:"534f6909aa3db3adaaa5",3047:"59fba06a85f8e7691979",3113:"9ddd84a938cb211b9477",3370:"7ce9f5f4d6cbd1bb4443",3421:"546b58d96147e07bbafa",3422:"5aacc295735c44379936",3501:"ebfd88cb856507d33d2a",3539:"25b67b4705a74630fb56",3565:"b2a178e055a6ffef8fe7",3569:"cb41d71c20427b9ac758",3721:"53db1f0b64aa334ce9da",3722:"4f91bfb39e3b3daca728",3748:"0787cfbffd5dbf589a49",3770:"cdf94478824fc927dc67",3853:"9007042fa9356179f299",3892:"c0f28e17ef21ad0b5a30",3934:"06d983df1641abe18dcd",3998:"e150e12728eb5bdd499f",4046:"732f54324513f3078d7e",4132:"7faa70151aaba9901acd",4169:"117da77847a8aad558b7",4259:"ee46613385ea9bcc9a70",4260:"5893bc57c14688e0235c",4339:"078d265cf68ba68bb2fc",4361:"e2b648871ebdc9eceb6d",4451:"9cc574005d1ddf6ffc49",4468:"3330aad871a099a01520",4473:"fb2a5df5221f9cf5adf2",4616:"348e57fa93cc3320c3e8",4680:"656c9f1358a26db8ef5d",4708:"43e606f89d1438bb836e",4739:"e7089a12e030c2a7740a",4768:"98b4c10b45ad5abe6975",4771:"2a2d81c7502dd7b5216f",4794:"68c5449a30f9800625b1",4815:"57e278f8f34ad27827d7",4818:"4b55fd4538f536760276",4853:"7fd5a0f706e447718fca",4873:"0494cc67efdfe9f81165",4980:"88275de5b031b65f02dc",5027:"de975a0a0955aca74cc9",5125:"824a10ee19179e755fbd",5128:"79f9035f76c4ce74221f",5170:"cdb251f1f98085c1d39c",5179:"40b8618e121ba96c086b",5182:"b468a4fd895a42055d52",5211:"49ef4442675cc104fdef",5247:"4dcdd410752430c77a68",5282:"31467173492e95981b34",5315:"624b6415f12ff5dea8e9",5377:"a49fd012f0a1fae75e4e",5443:"89984d92f1417282920f",5512:"de0add3e0e99c64f7309",5608:"a87508c2769b6db3a659",5632:"9c7dcd129c695bbb2c24",5650:"dc59025134ec228e9da5",5671:"bafe64d2ade59a1cdd15",5708:"5a418e9a62b273b180a6",5729:"f66c92dd6a4a75427f54",5740:"b13c09008e768b87eff3",5790:"9dd140c0c794c6d993a7",5862:"b9b860d9df89d21ebc49",5881:"ec7c008b558749467d24",5955:"be1860e73edfba23d140",5959:"7137d0039d6f44600aba",5965:"739dd3227233835d66d3",6032:"bccd4187d3396b3d50c7",6038:"7665a01c34d2f483bf56",6098:"62e75d820f33a05b067e",6163:"1fb662c3e9270cc9afff",6282:"95e2e311cceae5491629",6293:"552ab70ae4f13629fed4",6331:"e2639de666c8ddb4c253",6352:"c53bdffbefee8c18f4d8",6365:"85347d3c9152880e5459",6483:"2b3d743d6296ad54a0ef",6496:"edaf0fbff256f1ff24b0",6511:"65ead3da9b608e7d6244",6547:"0f0ddf3cecd2fb5016e5",6568:"fca20c539a28c8805726",6606:"d7c5b0478ddeb73f78a6",6651:"25a7910d8d25e7b8e577",6655:"7866308ddbe565e81fe6",6700:"0e1f50faa2a5b4020ca1",6709:"f3ea45fa423a925f6fd2",6801:"9d005c194f06afd54289",6884:"37c2493c1b20c4fcb765",6920:"5e3c1daecff112dac5f7",6933:"d8be203f077a181c21c6",6953:"082bdd459853eb647756",7020:"0533eb0b19a1c603894a",7055:"2cbb0f18c20963fb08a0",7072:"ddf29242e3a2bd56c5ff",7074:"4b629c2ab0992918e3fc",7102:"eec3ba2841cd3f05d3a4",7162:"e5fa956b92b03fb6f12c",7163:"ac2e118301cdf1751516",7205:"a56e694dd61a7d65ace4",7216:"5ab5cb5b29fe43a2c53c",7315:"452c45210a3cf5fd8f3b",7334:"9327eb254ed6a6b76045",7386:"5c03655a00dde9807e4b",7494:"3502305bdcc68358f1ae",7542:"a9c95a6c87198288004d",7626:"1518868413beee6a52df",7654:"ee2b33004d8892aa057f",7662:"471a0023c83377170f6a",7728:"3c394a08e77be7dda173",7739:"9692e22766ee7855ca38",7749:"6d0b768b1c528c70e2d4",7920:"e56b99ad3f09e2e10706",7938:"4fbe825a03d10b036dc6",7964:"0760a934d34cf2b1458a",8054:"a5d1fecf9b463ecee529",8117:"efe51522cd6c58e85c22",8132:"7fcc95ecf5b8ca57690b",8288:"49c02defe7920d1a1900",8292:"42bff94890165375e277",8295:"b6bfad225483e6d4abb9",8578:"9ada29005e4bffbcea54",8598:"2526246daea184e87a76",8606:"25cd52b470c3aae9b338",8628:"07396624fb13614d7708",8634:"723b489842ff8e8b22d8",8678:"2ed99a24ca30b04c6090",8700:"74bf0cf4ec541d031c35",8799:"25d9eab9f465d3f713e0",8801:"4daf55985cf5ed8c3b69",8945:"6161265d60631c95c3a5",8962:"b1c0ae548ecd17de08ff",9116:"215029cfbea8c785c1e7",9227:"1956b2b30e98812cc5cb",9289:"d37c589c8d66bbc2adeb",9313:"d785c5094ddd778054e5",9488:"ad08b3f8f08a23546ea9",9545:"b63d96194bf4fcff122a",9566:"ee7b764ede1c4c2a18de",9599:"4b67ae581c85a6cf6cd2",9613:"1e1cb8d5e33bcee17508",9626:"d7ff59af4f22e87b2c27",9646:"edf30e0eeade1450698c",9682:"1bbacc26ec9ff0efafff",9719:"d2ed873d734bcdf50605",9737:"a70effd1c72e2d75fb48",9750:"09480f3f79bdaa761da2",9765:"d59390277327cefe8b13",9789:"4708336c0ada8a34f3d7",9815:"5af284b732f16e1a063d",9817:"2d8acd348b0498b326e9",9911:"94089f0df43c868ba4a2",9995:"36d50282356bea448ad9",9999:"003e6a58c9c37ea54554"}[e]+".js"),b.miniCssF=e=>({275:"lazy_loaded_low_priority_components",7205:"lazy_loaded_high_priority_components",7964:"bootstrap_main",9488:"lazy_loaded_high_priority_components~lazy_loaded_low_priority_components"}[e]+"."+{275:"5ce8b3a67bcb380b7c20",7205:"d5bd1a799da6861a7f90",7964:"4d3d9a9e6d89a20cf9e1",9488:"bdc40abd622062cd88d1"}[e]+".css"),b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},o="whatsapp-web-client:",b.l=(e,a,l,s)=>{if(c[e])c[e].push(a);else{var d,t;if(void 0!==l)for(var f=document.getElementsByTagName("script"),n=0;n<f.length;n++){var r=f[n];if(r.getAttribute("src")==e||r.getAttribute("data-webpack")==o+l){d=r;break}}d||(t=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",o+l),d.src=e),c[e]=[a];var m=(a,l)=>{d.onerror=d.onload=null,clearTimeout(i);var o=c[e];if(delete c[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(l))),a)return a(l)},i=setTimeout(m.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=m.bind(null,d.onerror),d.onload=m.bind(null,d.onload),t&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/",s=e=>new Promise(((a,l)=>{var c=b.miniCssF(e),o=b.p+c;if(((e,a)=>{for(var l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var o=(d=l[c]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===a))return d}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var d;if((o=(d=s[c]).getAttribute("data-href"))===e||o===a)return d}})(c,o))return a();((e,a,l,c)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=s=>{if(o.onerror=o.onload=null,"load"===s.type)l();else{var d=s&&("load"===s.type?"missing":s.type),t=s&&s.target&&s.target.href||a,f=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=d,f.request=t,o.parentNode.removeChild(o),c(f)}},o.href=a,document.head.appendChild(o)})(e,o,a,l)})),d={3666:0},b.f.miniCss=(e,a)=>{d[e]?a.push(d[e]):0!==d[e]&&{275:1,7205:1,7964:1,9488:1}[e]&&a.push(d[e]=s(e).then((()=>{d[e]=0}),(a=>{throw delete d[e],a})))},(()=>{var e={3666:0};b.f.j=(a,l)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)l.push(c[2]);else if(3666!=a){var o=new Promise(((l,o)=>c=e[a]=[l,o]));l.push(c[2]=o);var s=b.p+b.u(a),d=new Error;b.l(s,(l=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var o=l&&("load"===l.type?"missing":l.type),s=l&&l.target&&l.target.src;d.message="Loading chunk "+a+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,c[1](d)}}),"chunk-"+a,a)}else e[a]=0},b.O.j=a=>0===e[a];var a=(a,l)=>{var c,o,[s,d,t]=l,f=0;for(c in d)b.o(d,c)&&(b.m[c]=d[c]);if(t)var n=t(b);for(a&&a(l);f<s.length;f++)o=s[f],b.o(e,o)&&e[o]&&e[o][0](),e[s[f]]=0;return b.O(n)},l=self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})()})();
//# sourceMappingURL=https://web.whatsapp.com/runtime.8cf201d8abe03ff2e3ca.js.map

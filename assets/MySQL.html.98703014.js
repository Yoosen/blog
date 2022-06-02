const e={key:"v-bc806904",path:"/interview/MySQL.html",title:"MySQL",lang:"zh-CN",frontmatter:{index:1,title:"MySQL",icon:"mysql",date:"2022-06-01T00:00:00.000Z",category:["\u9762\u8BD5"],star:!0,footer:null,summary:`MySQL\u7684\u9762\u8BD5\u9898\u76EE
`,head:[["meta",{property:"og:url",content:"https://yoosen.github.io/blog/blog/interview/MySQL.html"}],["meta",{property:"og:site_name",content:"Yoosen"}],["meta",{property:"og:title",content:"MySQL"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-06-02T03:44:15.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2022-06-01T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-06-02T03:44:15.000Z"}]]},excerpt:`<p>MySQL\u7684\u9762\u8BD5\u9898\u76EE</p>
`,headers:[{level:2,title:"1.0 MySQL \u7684\u5185\u90E8\u6784\u9020\uFF0C\u4E00\u822C\u53EF\u4EE5\u5206\u4E3A\u54EA\u4E24\u4E2A\u90E8\u5206",slug:"_1-0-mysql-\u7684\u5185\u90E8\u6784\u9020-\u4E00\u822C\u53EF\u4EE5\u5206\u4E3A\u54EA\u4E24\u4E2A\u90E8\u5206",children:[]},{level:2,title:"1.1 \u4E00\u6761 SQL \u8BED\u53E5\u7684\u6267\u884C\u8FC7\u7A0B",slug:"_1-1-\u4E00\u6761-sql-\u8BED\u53E5\u7684\u6267\u884C\u8FC7\u7A0B",children:[]},{level:2,title:"1.2 Order By \u662F\u5982\u4F55\u5DE5\u4F5C\u7684",slug:"_1-2-order-by-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684",children:[]},{level:2,title:"1.3 SQL \u8BED\u53E5\u4E2D\u5404\u5173\u952E\u5B57\u7684\u6267\u884C\u987A\u5E8F",slug:"_1-3-sql-\u8BED\u53E5\u4E2D\u5404\u5173\u952E\u5B57\u7684\u6267\u884C\u987A\u5E8F",children:[]},{level:2,title:"1.4 \u8BF4\u4E00\u8BF4 Drop,Delete,Truncate \u7684\u5171\u540C\u70B9\u548C\u533A\u522B",slug:"_1-4-\u8BF4\u4E00\u8BF4-drop-delete-truncate-\u7684\u5171\u540C\u70B9\u548C\u533A\u522B",children:[]},{level:2,title:"1.5 InnoDB \u548C MyIsam \u5BF9\u6BD4",slug:"_1-5-innodb-\u548C-myisam-\u5BF9\u6BD4",children:[]},{level:2,title:"1.6 Char \u548C Varchar \u7684\u533A\u522B",slug:"_1-6-char-\u548C-varchar-\u7684\u533A\u522B",children:[]},{level:2,title:"2.0 B \u6811\u548C B+ \u6811\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",slug:"_2-0-b-\u6811\u548C-b-\u6811\u6709\u4EC0\u4E48\u4E0D\u540C",children:[]},{level:2,title:"2.1 \u4E3A\u4EC0\u4E48\u7528 B+ \u6811\u505A\u7D22\u5F15",slug:"_2-1-\u4E3A\u4EC0\u4E48\u7528-b-\u6811\u505A\u7D22\u5F15",children:[]},{level:2,title:"2.2  \u4E3A\u4EC0\u4E48\u521B\u5EFA\u7D22\u5F15",slug:"_2-2-\u4E3A\u4EC0\u4E48\u521B\u5EFA\u7D22\u5F15",children:[]},{level:2,title:"2.3 \u4EC0\u4E48\u65F6\u5019\u4E0D\u9700\u8981\u52A0\u7D22\u5F15\uFF1F",slug:"_2-3-\u4EC0\u4E48\u65F6\u5019\u4E0D\u9700\u8981\u52A0\u7D22\u5F15",children:[]},{level:2,title:"2.4 \u7D22\u5F15\u5931\u6548",slug:"_2-4-\u7D22\u5F15\u5931\u6548",children:[]},{level:2,title:"2.5 \u4E3A\u4EC0\u4E48\u9009\u62E9\u81EA\u589E id \u505A\u4E3A\u4E3B\u952E",slug:"_2-5-\u4E3A\u4EC0\u4E48\u9009\u62E9\u81EA\u589E-id-\u505A\u4E3A\u4E3B\u952E",children:[]},{level:2,title:"2.6 \u805A\u96C6\u7D22\u5F15\u548C\u975E\u805A\u96C6\u7D22\u5F15\u7684\u533A\u522B",slug:"_2-6-\u805A\u96C6\u7D22\u5F15\u548C\u975E\u805A\u96C6\u7D22\u5F15\u7684\u533A\u522B",children:[]},{level:2,title:"2.7 Hash \u7D22\u5F15\u548C B+ \u6811\u7D22\u5F15\u7684\u533A\u522B",slug:"_2-7-hash-\u7D22\u5F15\u548C-b-\u6811\u7D22\u5F15\u7684\u533A\u522B",children:[]},{level:2,title:"2.8 \u4EC0\u4E48\u662F\u6700\u5DE6\u524D\u7F00",slug:"_2-8-\u4EC0\u4E48\u662F\u6700\u5DE6\u524D\u7F00",children:[]},{level:2,title:"2.9 \u4EC0\u4E48\u662F\u7D22\u5F15\u4E0B\u63A8\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u7D22\u5F15\u4E0B\u63A8",slug:"_2-9-\u4EC0\u4E48\u662F\u7D22\u5F15\u4E0B\u63A8-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u7D22\u5F15\u4E0B\u63A8",children:[]},{level:2,title:"2.10 \u8054\u5408\u7D22\u5F15\u662F\u5982\u4F55\u5B58\u50A8\u7684",slug:"_2-10-\u8054\u5408\u7D22\u5F15\u662F\u5982\u4F55\u5B58\u50A8\u7684",children:[]},{level:2,title:"2.11 \u7D22\u5F15\u7684\u4F18\u7F3A\u70B9",slug:"_2-11-\u7D22\u5F15\u7684\u4F18\u7F3A\u70B9",children:[]},{level:2,title:"2.12 \u552F\u4E00\u7D22\u5F15\u548C\u4E3B\u952E\u7D22\u5F15",slug:"_2-12-\u552F\u4E00\u7D22\u5F15\u548C\u4E3B\u952E\u7D22\u5F15",children:[]},{level:2,title:"2.13 \u7D22\u5F15\u7684\u5E94\u7528\u573A\u666F",slug:"_2-13-\u7D22\u5F15\u7684\u5E94\u7528\u573A\u666F",children:[]},{level:2,title:"2.14 \u4EC0\u4E48\u662F\u666E\u901A\u7D22\u5F15\uFF1F\u4EC0\u4E48\u662F\u552F\u4E00\u7D22\u5F15\uFF1F",slug:"_2-14-\u4EC0\u4E48\u662F\u666E\u901A\u7D22\u5F15-\u4EC0\u4E48\u662F\u552F\u4E00\u7D22\u5F15",children:[]},{level:2,title:"3.0 redolog",slug:"_3-0-redolog",children:[]},{level:2,title:"3.1 binlog",slug:"_3-1-binlog",children:[]},{level:2,title:"4.0 \u4E8B\u52A1\u7684\u7279\u6027",slug:"_4-0-\u4E8B\u52A1\u7684\u7279\u6027",children:[]},{level:2,title:"4.1 \u9694\u79BB\u7EA7\u522B",slug:"_4-1-\u9694\u79BB\u7EA7\u522B",children:[]},{level:2,title:"4.2 \u4EC0\u4E48\u662F\u5E7B\u8BFB\uFF0C\u810F\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF1F",slug:"_4-2-\u4EC0\u4E48\u662F\u5E7B\u8BFB-\u810F\u8BFB-\u4E0D\u53EF\u91CD\u590D\u8BFB",children:[]},{level:2,title:"4.3 \u4E8B\u52A1\u7684\u51E0\u79CD\u7279\u6027\u662F\u901A\u8FC7\u4EC0\u4E48\u5B9E\u73B0\u7684\uFF1F",slug:"_4-3-\u4E8B\u52A1\u7684\u51E0\u79CD\u7279\u6027\u662F\u901A\u8FC7\u4EC0\u4E48\u5B9E\u73B0\u7684",children:[{level:3,title:"4.4 MySQL \u5982\u4F55\u4FDD\u8BC1\u4E00\u81F4\u6027\u7684",slug:"_4-4-mysql-\u5982\u4F55\u4FDD\u8BC1\u4E00\u81F4\u6027\u7684",children:[]},{level:3,title:"4.5 \u5982\u4F55\u4FDD\u8BC1\u539F\u5B50\u6027\u7684",slug:"_4-5-\u5982\u4F55\u4FDD\u8BC1\u539F\u5B50\u6027\u7684",children:[]},{level:3,title:"4.6 \u5982\u4F55\u4FDD\u8BC1\u6301\u4E45\u6027\u7684",slug:"_4-6-\u5982\u4F55\u4FDD\u8BC1\u6301\u4E45\u6027\u7684",children:[]}]},{level:2,title:"5.0 MyIsam\u9501\u548CInnoDB\u9501\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F",slug:"_5-0-myisam\u9501\u548Cinnodb\u9501\u6709\u4EC0\u4E48\u4E0D\u540C",children:[]},{level:2,title:"5.1 \u5168\u5C40\u9501\u548C\u8868\u9501",slug:"_5-1-\u5168\u5C40\u9501\u548C\u8868\u9501",children:[]},{level:2,title:"5.2 \u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B",slug:"_5-2-\u6B7B\u9501\u548C\u6B7B\u9501\u68C0\u6D4B",children:[]},{level:2,title:"6.0 \u4EC0\u4E48\u662FMVCC",slug:"_6-0-\u4EC0\u4E48\u662Fmvcc",children:[{level:3,title:"6.1 \u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB",slug:"_6-1-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB",children:[]},{level:3,title:"6.2 MVCC\u5B9E\u73B0\u4E86\u54EA\u4E9B\u9694\u79BB\u7EA7\u522B",slug:"_6-2-mvcc\u5B9E\u73B0\u4E86\u54EA\u4E9B\u9694\u79BB\u7EA7\u522B",children:[]}]},{level:2,title:"7.0 MySQL\u4F18\u5316",slug:"_7-0-mysql\u4F18\u5316",children:[]},{level:2,title:"7.1 explain\u8BE6\u89E3",slug:"_7-1-explain\u8BE6\u89E3",children:[]},{level:2,title:"7.2 MySQL\u6162\u67E5\u8BE2\u4F18\u5316",slug:"_7-2-mysql\u6162\u67E5\u8BE2\u4F18\u5316",children:[]},{level:2,title:"7.3 \u5206\u5E93\u5206\u8868",slug:"_7-3-\u5206\u5E93\u5206\u8868",children:[]},{level:2,title:"8.0\u5982\u4F55\u4FDD\u8BC1\u5E42\u7B49\u6027",slug:"_8-0\u5982\u4F55\u4FDD\u8BC1\u5E42\u7B49\u6027",children:[]},{level:2,title:"8.1 \u5206\u9875\u67E5\u8BE2",slug:"_8-1-\u5206\u9875\u67E5\u8BE2",children:[]},{level:2,title:"8.2 \u5982\u4F55\u5206\u5E93\u5206\u8868",slug:"_8-2-\u5982\u4F55\u5206\u5E93\u5206\u8868",children:[]}],git:{createdTime:1654054885e3,updatedTime:1654141455e3,contributors:[{name:"Yoosen",email:"1255254248@qq.com",commits:4}]},readingTime:{minutes:27.78,words:8335},filePathRelative:"interview/MySQL.md"};export{e as data};
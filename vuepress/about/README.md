/*.tags0{font-size: 12px !important;color: #ccc !important;}灰*/ .tags00{font-size: 12px !important;color: #666 !important;}/*黑*/ /*.tags01{font-size: 12px !important;color: rgb(255,128,128) !important;}红 .tags02{font-size: 12px !important;color: rgb(128,255,128) !important;}绿 .tags03{font-size: 12px !important;color: rgb(128,128,255) !important;}蓝 .tags04{font-size: 12px !important;color: rgb(255,216,128) !important;}黄*/ /*.tags10{font-size: 20px !important;color: #666 !important;}*/ .tags11{font-size: 20px !important;color: rgb(255,128,128) !important;} .tags12{font-size: 20px !important;color: rgb(128,255,128) !important;} .tags13{font-size: 20px !important;color: rgb(128,128,255) !important;} .tags14{font-size: 20px !important;color: rgb(255,216,128) !important;} /*.tags20{font-size: 40px !important;color: #666 !important;}*/ .tags21{font-size: 40px !important;color: rgb(255,128,128) !important;} .tags22{font-size: 40px !important;color: rgb(128,255,128) !important;} .tags23{font-size: 40px !important;color: rgb(128,128,255) !important;} .tags24{font-size: 40px !important;color: rgb(255,216,128) !important;} /* 6.22自行添加 */ .btn1 { display: inline-block; width: 90px; height: 90px; background: #f1f1f1; margin: 10px; border-radius: 30%; box-shadow: 0 5px 15px -5px #00000070; color: #3498db; overflow: hidden; position: relative; text-align: center; } .btn1 i { line-height: 90px; font-size: 26px; transition: 0.2s linear; } .btn1:hover i { transform: scale(1.3); color: #f1f1f1; } .btn1::before { content: ''; position: absolute; width: 120%; height: 120%; background: #3498db; transform: rotate(45deg); left: -110%; top: 90%; } .btn1:hover::before { animation: flash 0.7s 1; top: -10%; left: -10%; } .bottom-p { margin: 230px 0 20px 0; } .space { height: 100px; } @keyframes flash { 0% { left: -100%; top: 90%; } 50% { left: 10%; top: -30%; } 100% { left: -10%; top: -10%; } }              (function(){ if(''){ if (prompt('请输入文章密码') !== ''){ alert('密码错误！'); history.back(); } } })();             var NexT = window.NexT || {}; var CONFIG = { root: '/', scheme: 'Pisces', version: '5.1.2', sidebar: {"position":"left","display":"post","offset":12,"offset_float":12,"b2t":false,"scrollpercent":true,"onmobile":false}, fancybox: true, tabs: true, motion: {"enable":true,"async":false,"transition":{"post_block":"fadeIn","post_header":"slideDownIn","post_body":"slideDownIn","coll_header":"slideLeftIn"}}, duoshuo: { userId: '0', author: '博主' }, algolia: { applicationID: '', apiKey: '', indexName: '', hits: {"per_page":10}, labels: {"input_placeholder":"Search for Posts","hits_empty":"We didn't find any results for the search: ${query}","hits_stats":"${hits} results found in ${time} ms"} } };  
## | 花·自飘零

 var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?ae2faba1b73dad6d1be9f46bcac215b8"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })();

花·自飘零

*     
    首页
*     
    分类
*     
    标签
*     
    归档
*     
    动画模仿
*     
    关于
*     
    搜索

> 一个人工智能学习者。

> 本博客文章采用知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议进行许可。允许转载，但必须标明原文链接。尊重原创博文。谢谢合作!

![Yoosen](/uploads/avatar.png)

> Yoosen

14 日志

10 分类

19 标签

Telegram QQ

© 2017 Yoosen

|

Hosted- Coding

| 皖ICP备17019382号

var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1264521823'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1264521823' type='text/javascript'%3E%3C/script%3E"));

(function(){ var bp = document.createElement('script'); var curProtocol = window.location.protocol.split(':')[0]; if (curProtocol === 'https'){ bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'; } else{ bp.src = 'http://push.zhanzhang.baidu.com/push.js'; } var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(bp, s); })();

0%

if (Object.prototype.toString.call(window.Promise) !== '[object Function]') { window.Promise = null; } // Popup Window; var isfetched = false; var isXml = true; // Search DB path; var search_path = "search.xml"; if (search_path.length === 0) { search_path = "search.xml"; } else if (/json$/i.test(search_path)) { isXml = false; } var path = "/" + search_path; // monitor main search box; var onPopupClose = function (e) { $('.popup').hide(); $('#local-search-input').val(''); $('.search-result-list').remove(); $('#no-result').remove(); $(".local-search-pop-overlay").remove(); $('body').css('overflow', ''); } function proceedsearch() { $("body") .append('<div class="search-popup-overlay local-search-pop-overlay"></div>') .css('overflow', 'hidden'); $('.search-popup-overlay').click(onPopupClose); $('.popup').toggle(); var $localSearchInput = $('#local-search-input'); $localSearchInput.attr("autocapitalize", "none"); $localSearchInput.attr("autocorrect", "off"); $localSearchInput.focus(); } // search function; var searchFunc = function(path, search_id, content_id) { 'use strict'; // start loading animation $("body") .append('<div class="search-popup-overlay local-search-pop-overlay">' + '<div id="search-loading-icon">' + '<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>' + '</div>' + '</div>') .css('overflow', 'hidden'); $("#search-loading-icon").css('margin', '20% auto 0 auto').css('text-align', 'center'); $.ajax({ url: path, dataType: isXml ? "xml" : "json", async: true, success: function(res) { // get the contents from search data isfetched = true; $('.popup').detach().appendTo('.header-inner'); var datas = isXml ? $("entry", res).map(function() { return { title: $("title", this).text(), content: $("content",this).text(), url: $("url" , this).text() }; }).get() : res; var input = document.getElementById(search_id); var resultContent = document.getElementById(content_id); var inputEventFunction = function() { var searchText = input.value.trim().toLowerCase(); var keywords = searchText.split(/[\\s\-]+/); if (keywords.length > 1) { keywords.push(searchText); } var resultItems = []; if (searchText.length > 0) { // perform local searching datas.forEach(function(data) { var isMatch = false; var hitCount = 0; var searchTextCount = 0; var title = data.title.trim(); var titleInLowerCase = title.toLowerCase(); var content = data.content.trim().replace(/<[^>]+>/g,""); var contentInLowerCase = content.toLowerCase(); var articleUrl = decodeURIComponent(data.url); var indexOfTitle = []; var indexOfContent = []; // only match articles with not empty titles if(title != '') { keywords.forEach(function(keyword) { function getIndexByWord(word, text, caseSensitive) { var wordLen = word.length; if (wordLen === 0) { return []; } var startPosition = 0, position = [], index = []; if (!caseSensitive) { text = text.toLowerCase(); word = word.toLowerCase(); } while ((position = text.indexOf(word, startPosition)) > -1) { index.push({position: position, word: word}); startPosition = position + wordLen; } return index; } indexOfTitle = indexOfTitle.concat(getIndexByWord(keyword, titleInLowerCase, false)); indexOfContent = indexOfContent.concat(getIndexByWord(keyword, contentInLowerCase, false)); }); if (indexOfTitle.length > 0 || indexOfContent.length > 0) { isMatch = true; hitCount = indexOfTitle.length + indexOfContent.length; } } // show search results if (isMatch) { // sort index by position of keyword [indexOfTitle, indexOfContent].forEach(function (index) { index.sort(function (itemLeft, itemRight) { if (itemRight.position !== itemLeft.position) { return itemRight.position - itemLeft.position; } else { return itemLeft.word.length - itemRight.word.length; } }); }); // merge hits into slices function mergeIntoSlice(text, start, end, index) { var item = index[index.length - 1]; var position = item.position; var word = item.word; var hits = []; var searchTextCountInSlice = 0; while (position + word.length <= end && index.length != 0) { if (word === searchText) { searchTextCountInSlice++; } hits.push({position: position, length: word.length}); var wordEnd = position + word.length; // move to next position of hit index.pop(); while (index.length != 0) { item = index[index.length - 1]; position = item.position; word = item.word; if (wordEnd > position) { index.pop(); } else { break; } } } searchTextCount += searchTextCountInSlice; return { hits: hits, start: start, end: end, searchTextCount: searchTextCountInSlice }; } var slicesOfTitle = []; if (indexOfTitle.length != 0) { slicesOfTitle.push(mergeIntoSlice(title, 0, title.length, indexOfTitle)); } var slicesOfContent = []; while (indexOfContent.length != 0) { var item = indexOfContent[indexOfContent.length - 1]; var position = item.position; var word = item.word; // cut out 100 characters var start = position - 20; var end = position + 80; if(start < 0){ start = 0; } if (end < position + word.length) { end = position + word.length; } if(end > content.length){ end = content.length; } slicesOfContent.push(mergeIntoSlice(content, start, end, indexOfContent)); } // sort slices in content by search text's count and hits' count slicesOfContent.sort(function (sliceLeft, sliceRight) { if (sliceLeft.searchTextCount !== sliceRight.searchTextCount) { return sliceRight.searchTextCount - sliceLeft.searchTextCount; } else if (sliceLeft.hits.length !== sliceRight.hits.length) { return sliceRight.hits.length - sliceLeft.hits.length; } else { return sliceLeft.start - sliceRight.start; } }); // select top N slices in content var upperBound = parseInt('1'); if (upperBound >= 0) { slicesOfContent = slicesOfContent.slice(0, upperBound); } // highlight title and content function highlightKeyword(text, slice) { var result = ''; var prevEnd = slice.start; slice.hits.forEach(function (hit) { result += text.substring(prevEnd, hit.position); var end = hit.position + hit.length; result += '<b class="search-keyword">' + text.substring(hit.position, end) + '</b>'; prevEnd = end; }); result += text.substring(prevEnd, slice.end); return result; } var resultItem = ''; if (slicesOfTitle.length != 0) { resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + highlightKeyword(title, slicesOfTitle[0]) + "</a>"; } else { resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + title + "</a>"; } slicesOfContent.forEach(function (slice) { resultItem += "<a href='" + articleUrl + "'>" + "<p class=\\"search-result\\">" + highlightKeyword(content, slice) + "...</p>" + "</a>"; }); resultItem += "</li>"; resultItems.push({ item: resultItem, searchTextCount: searchTextCount, hitCount: hitCount, id: resultItems.length }); } }) }; if (keywords.length === 1 && keywords[0] === "") { resultContent.innerHTML = '<div id="no-result"><i class="fa fa-search fa-5x" /></div>' } else if (resultItems.length === 0) { resultContent.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>' } else { resultItems.sort(function (resultLeft, resultRight) { if (resultLeft.searchTextCount !== resultRight.searchTextCount) { return resultRight.searchTextCount - resultLeft.searchTextCount; } else if (resultLeft.hitCount !== resultRight.hitCount) { return resultRight.hitCount - resultLeft.hitCount; } else { return resultRight.id - resultLeft.id; } }); var searchResultList = '<ul class=\\"search-result-list\\">'; resultItems.forEach(function (result) { searchResultList += result.item; }) searchResultList += "</ul>"; resultContent.innerHTML = searchResultList; } } if ('auto' === 'auto') { input.addEventListener('input', inputEventFunction); } else { $('.search-icon').click(inputEventFunction); input.addEventListener('keypress', function (event) { if (event.keyCode === 13) { inputEventFunction(); } }); } // remove loading animation $(".local-search-pop-overlay").remove(); $('body').css('overflow', ''); proceedsearch(); } }); } // handle and trigger popup window; $('.popup-trigger').click(function(e) { e.stopPropagation(); if (isfetched === false) { searchFunc(path, 'local-search-input', 'local-search-result'); } else { proceedsearch(); }; }); $('.popup-btn-close').click(onPopupClose); $('.popup').click(function(e){ e.stopPropagation(); }); $(document).on('keyup', function (event) { var shouldDismissSearchPopup = event.which === 27 && $('.search-popup').is(':visible'); if (shouldDismissSearchPopup) { onPopupClose(); } }); AV.initialize("PtYVBUhTgcce16KFVEWNGuJW-gzGzoHsz", "dDhAWDHTCxhJrICu181wu3wv"); function showTime(Counter) { var query = new AV.Query(Counter); var entries = []; var $visitors = $(".leancloud_visitors"); $visitors.each(function () { entries.push( $(this).attr("id").trim() ); }); query.containedIn('url', entries); query.find() .done(function (results) { var COUNT_CONTAINER_REF = '.leancloud-visitors-count'; if (results.length === 0) { $visitors.find(COUNT_CONTAINER_REF).text(0); return; } for (var i = 0; i < results.length; i++) { var item = results[i]; var url = item.get('url'); var time = item.get('time'); var element = document.getElementById(url); $(element).find(COUNT_CONTAINER_REF).text(time); } for(var i = 0; i < entries.length; i++) { var url = entries[i]; var element = document.getElementById(url); var countSpan = $(element).find(COUNT_CONTAINER_REF); if( countSpan.text() == '') { countSpan.text(0); } } }) .fail(function (object, error) { console.log("Error: " + error.code + " " + error.message); }); } function addCount(Counter) { var $visitors = $(".leancloud_visitors"); var url = $visitors.attr('id').trim(); var title = $visitors.attr('data-flag-title').trim(); var query = new AV.Query(Counter); query.equalTo("url", url); query.find({ success: function(results) { if (results.length > 0) { var counter = results[0]; counter.fetchWhenSave(true); counter.increment("time"); counter.save(null, { success: function(counter) { var $element = $(document.getElementById(url)); $element.find('.leancloud-visitors-count').text(counter.get('time')); }, error: function(counter, error) { console.log('Failed to save Visitor num, with error message: ' + error.message); } }); } else { var newcounter = new Counter(); /* Set ACL */ var acl = new AV.ACL(); acl.setPublicReadAccess(true); acl.setPublicWriteAccess(true); newcounter.setACL(acl); /* End Set ACL */ newcounter.set("title", title); newcounter.set("url", url); newcounter.set("time", 1); newcounter.save(null, { success: function(newcounter) { var $element = $(document.getElementById(url)); $element.find('.leancloud-visitors-count').text(newcounter.get('time')); }, error: function(newcounter, error) { console.log('Failed to create'); } }); } }, error: function(error) { console.log('Error:' + error.code + " " + error.message); } }); } $(function() { var Counter = AV.Object.extend("Counter"); if ($('.leancloud_visitors').length == 1) { addCount(Counter); } else if ($('.post-title-link').length > 1) { showTime(Counter); } }); MathJax.Hub.Config({ tex2jax: { inlineMath: [ ['$','$'], ["\\\\(","\\\\)"] ], processEscapes: true, skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'] } }); MathJax.Hub.Queue(function() { var all = MathJax.Hub.getAllJax(), i; for (i=0; i < all.length; i += 1) { all[i].SourceElement().parentNode.className += ' has-jax'; } }); var languages = new Array("C","C++","Java","C#","Python","HTML","CSS","JavaScript","SQL"); var randoms = new Array(4,3,2,1,3,2,1,4,2,1,3,4,1,2,3,4); $(document).ready(function(){ var tags_all = $(".tag-cloud-tags a"); tags_all.each(function(){ var x = parseInt(Math.random()*3); if(x > 0){ x = 1; } for(var i = 0;i<languages.length;i++){ if($(this).text() == languages[i]){ x = 2; break; } } var y =0; if(x != 0){ y = parseInt(Math.random()*16); y = randoms[y]; } $(this).addClass("tags"+x+y); }); });
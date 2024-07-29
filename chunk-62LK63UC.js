import{a as h}from"./chunk-4QGH7NG7.js";import{a as r}from"./chunk-CGZG3FDN.js";import{Bb as l,K as i,La as g,Lb as _,Ma as o,ga as d,qa as t}from"./chunk-SLJXJAH7.js";import{a as c,b as p,g as f}from"./chunk-ODN5LVDJ.js";var m=f(_());var y={category:h,title:"Angela Access Points",mdFile:"./index.md",keyword:"Angela Access Points"},n=y;var j=[];var k={},u=k;var L=`<h1 id="angela-access-points" class="ngde">Angela Access Points<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#angela-access-points"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">Angela \u5BF9\u5916\u90E8\u66B4\u9732\u4E86\u8BB8\u591A Access Points\uFF0C\u4EE5\u4FBF\u901A\u8FC7\u5916\u90E8\u811A\u672C\u62D3\u5C55 Angela\u3002</p><p class="ngde">Access Point \u662F\u66B4\u9732\u5728 <code class="ngde">window</code> \u5BF9\u8C61\u4E0A\u7684\u51FD\u6570\u3002\u5BF9\u4E8E Access Point <code class="ngde">getUser</code>\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code class="ngde">window.getUser()</code> \u6765\u8C03\u7528\u3002</p><p class="ngde">Access Points \u53EF\u4EE5\u662F\u5168\u5C40\u7684\u6216\u662F\u5C40\u90E8\u7684\uFF1A</p><ul class="ngde"><li class="ngde">\u5168\u5C40\u7684 Access Points \u5728\u6BCF\u4E2A\u9875\u9762\u4E0A\u90FD\u53EF\u7528</li><li class="ngde">\u5C40\u90E8\u7684 Access Points \u4EC5\u5728\u7279\u5B9A\u89C6\u56FE\u4E2D\u53EF\u7528\uFF0C\u5982\u5E2E\u52A9\u6587\u6863</li></ul><h2 id="\u5168\u5C40-access-points" class="ngde">\u5168\u5C40 Access Points<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#\u5168\u5C40-access-points"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="watchcommands" class="ngde">watchCommands<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#watchcommands"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8FD4\u56DE\u4E00\u4E2A <code class="ngde">Observable</code>\uFF0CAngela \u5185\u90E8\u89E6\u53D1 Command \u65F6\u4F1A\u8F93\u51FA\u8BE5 Command \u5BF9\u8C61\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">watchCommands</span>(<span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-built_in ngde">object</span>>;
</span></code></pre><h3 id="watchevents" class="ngde">watchEvents<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#watchevents"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8FD4\u56DE\u4E00\u4E2A <code class="ngde">Observable</code>\uFF0CAngela \u5185\u90E8\u89E6\u53D1 Event \u65F6\u4F1A\u8F93\u51FA\u8BE5 Event \u5BF9\u8C61\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">watchEvents</span>(<span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-built_in ngde">object</span>>;
</span></code></pre><h3 id="readcommandmetadata" class="ngde">readCommandMetadata<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#readcommandmetadata"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u63A5\u53D7\u4E00\u4E2A Command \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5 Command \u5BF9\u8C61\u7684\u5143\u6570\u636E\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">readCommandMetadata</span>(<span class="hljs-params ngde">command: <span class="hljs-built_in ngde">object</span></span>): <span class="hljs-built_in ngde">object</span>;
</span></code></pre><h3 id="readeventmetadata" class="ngde">readEventMetadata<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#readeventmetadata"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u63A5\u53D7\u4E00\u4E2A Event \u5BF9\u8C61\uFF0C\u8FD4\u56DE\u8BE5 Event \u5BF9\u8C61\u7684\u5143\u6570\u636E\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">readEventMetadata</span>(<span class="hljs-params ngde">event: <span class="hljs-built_in ngde">object</span></span>): <span class="hljs-built_in ngde">object</span>;
</span></code></pre><h3 id="queryauthtoken" class="ngde">queryAuthToken<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#queryauthtoken"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8FD4\u56DE\u4E00\u4E2A <code class="ngde">Observable</code>\uFF0C\u5F53\u8BA2\u9605\u65F6\uFF1A</p><ul class="ngde"><li class="ngde">\u5982\u679C\u7528\u6237\u5DF2\u767B\u5165\uFF0C\u4F1A\u7ACB\u5373\u8F93\u51FA\u7528\u6237\u7684\u8BA4\u8BC1 token</li><li class="ngde">\u5982\u679C\u7528\u6237\u672A\u767B\u5165\uFF0C\u4F1A\u7ACB\u5373\u8F93\u51FA <code class="ngde">null</code></li></ul><p class="ngde">\u7528\u6237\u767B\u5165\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u8F93\u51FA\u65B0\u7684\u503C\u3002</p><p class="ngde">\u7528\u6237\u7684\u8BA4\u8BC1 token \u53EF\u7528\u4E8E\u8C03\u7528 v2board \u53D7\u4FDD\u62A4\u7684 API\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">queryAuthToken</span>(<span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-built_in ngde">string</span> | <span class="hljs-literal ngde">null</span>>;
</span></code></pre><h3 id="queryuser" class="ngde">queryUser<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#queryuser"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8FD4\u56DE\u4E00\u4E2A <code class="ngde">Observable</code>\uFF0C\u5F53\u8BA2\u9605\u65F6\uFF1A</p><ul class="ngde"><li class="ngde">\u5982\u679C\u7528\u6237\u5DF2\u767B\u5165\uFF0C\u4F1A\u7ACB\u5373\u8F93\u51FA\u7528\u6237\u4FE1\u606F</li><li class="ngde">\u5982\u679C\u7528\u6237\u672A\u767B\u5165\uFF0C\u4F1A\u7B49\u5F85\u7528\u6237\u767B\u5165\u540E\u8F93\u51FA\u7528\u6237\u4FE1\u606F</li></ul><p class="ngde">\u7528\u6237\u4FE1\u606F\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u8F93\u51FA\u65B0\u7684\u503C\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">queryUser</span>(<span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde">User</span>>;
</span></code></pre><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">User</span> {
</span><span class="line ngde">  <span class="hljs-attr ngde">id</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">email</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  avatarUrl?: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  planId?: <span class="hljs-title class_ ngde">Plan</span>[<span class="hljs-string ngde">'id'</span>];
</span><span class="line ngde">  planExpireAt?: <span class="hljs-title class_ ngde">Date</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">trafficTotal</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">trafficUploaded</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">trafficDownloaded</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  trafficResetAt?: <span class="hljs-title class_ ngde">Date</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">subscriptionUrl</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">balance</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">commission</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">commissionInProgress</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">commissionTotal</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">commissionRate</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">referralSuccessCount</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">receiveExpiryReminder</span>: <span class="hljs-built_in ngde">boolean</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">receiveTrafficReminder</span>: <span class="hljs-built_in ngde">boolean</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">createdAt</span>: <span class="hljs-title class_ ngde">Date</span>;
</span><span class="line ngde">}
</span></code></pre><h3 id="queryuserplan" class="ngde">queryUserPlan<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#queryuserplan"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8FD4\u56DE\u4E00\u4E2A <code class="ngde">Observable</code>\uFF0C\u5F53\u8BA2\u9605\u65F6\uFF1A</p><ul class="ngde"><li class="ngde">\u5982\u679C\u7528\u6237\u5DF2\u767B\u5165\uFF0C\u4F1A\u7ACB\u5373\u8F93\u51FA\u7528\u6237\u7684\u8BA2\u9605\u8BA1\u5212\u4FE1\u606F</li><li class="ngde">\u5982\u679C\u7528\u6237\u672A\u767B\u5165\uFF0C\u4F1A\u7ACB\u5373\u8F93\u51FA <code class="ngde">null</code></li></ul><p class="ngde">\u7528\u6237\u6216\u8BA2\u9605\u8BA1\u5212\u4FE1\u606F\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4F1A\u8F93\u51FA\u65B0\u7684\u503C\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">queryUserPlan</span>(<span class="hljs-params ngde"></span>): <span class="hljs-title class_ ngde">Observable</span>&#x3C;<span class="hljs-title class_ ngde">Plan</span> | <span class="hljs-literal ngde">null</span>>;
</span></code></pre><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">Plan</span> {
</span><span class="line ngde">  <span class="hljs-attr ngde">id</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">name</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">description</span>: <span class="hljs-built_in ngde">string</span> | <span class="hljs-title class_ ngde">PlanFeature</span>[] | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">prices</span>: {
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">UnlimitedLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">OneMonthLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">OneQuarterLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">HalfYearLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">OneYearLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">TwoYearLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">ThreeYearLicense</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">    [<span class="hljs-title class_ ngde">PlanListing</span>.<span class="hljs-property ngde">TrafficSupplement</span>]: <span class="hljs-built_in ngde">number</span> | <span class="hljs-literal ngde">null</span>;
</span><span class="line ngde">  };
</span><span class="line ngde">  <span class="hljs-attr ngde">traffic</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  trafficResetType?: <span class="hljs-title class_ ngde">PlanTrafficResetType</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">selling</span>: <span class="hljs-built_in ngde">boolean</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">order</span>: <span class="hljs-built_in ngde">number</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">createdAt</span>: <span class="hljs-title class_ ngde">Date</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">updatedAt</span>: <span class="hljs-title class_ ngde">Date</span>;
</span><span class="line ngde">}
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">interface</span> <span class="hljs-title class_ ngde">PlanFeature</span> {
</span><span class="line ngde">  <span class="hljs-attr ngde">text</span>: <span class="hljs-built_in ngde">string</span>;
</span><span class="line ngde">  <span class="hljs-attr ngde">supported</span>: <span class="hljs-built_in ngde">boolean</span>;
</span><span class="line ngde">}
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">enum</span> <span class="hljs-title class_ ngde">PlanTrafficResetType</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde">Never</span> = <span class="hljs-string ngde">'Never'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">Monthly</span> = <span class="hljs-string ngde">'Monthly'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">MonthlyFirstDay</span> = <span class="hljs-string ngde">'MonthlyFirstDay'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">Yearly</span> = <span class="hljs-string ngde">'Yearly'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">YearlyFirstDay</span> = <span class="hljs-string ngde">'YearlyFirstDay'</span>,
</span><span class="line ngde">}
</span><span class="line ngde">
</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">enum</span> <span class="hljs-title class_ ngde">PlanListing</span> {
</span><span class="line ngde">  <span class="hljs-title class_ ngde">UnlimitedLicense</span> = <span class="hljs-string ngde">'UnlimitedLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">OneMonthLicense</span> = <span class="hljs-string ngde">'OneMonthLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">OneQuarterLicense</span> = <span class="hljs-string ngde">'OneQuarterLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">HalfYearLicense</span> = <span class="hljs-string ngde">'HalfYearLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">OneYearLicense</span> = <span class="hljs-string ngde">'OneYearLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">TwoYearLicense</span> = <span class="hljs-string ngde">'TwoYearLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">ThreeYearLicense</span> = <span class="hljs-string ngde">'ThreeYearLicense'</span>,
</span><span class="line ngde">  <span class="hljs-title class_ ngde">TrafficSupplement</span> = <span class="hljs-string ngde">'TrafficSupplement'</span>,
</span><span class="line ngde">}
</span></code></pre><h2 id="\u5E2E\u52A9\u6587\u6863-access-points" class="ngde">\u5E2E\u52A9\u6587\u6863 Access Points<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#\u5E2E\u52A9\u6587\u6863-access-points"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h2><h3 id="copy" class="ngde">copy<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#copy"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u590D\u5236\u6587\u672C\u5230\u526A\u8D34\u677F\u5E76\u63D0\u793A\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">copy</span>(<span class="hljs-params ngde">text: <span class="hljs-built_in ngde">string</span></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre><h3 id="jump" class="ngde">jump<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#jump"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u8DF3\u8F6C\u5230\u6307\u5B9A id \u7684\u5E2E\u52A9\u6587\u6863</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">jump</span>(<span class="hljs-params ngde">id: <span class="hljs-built_in ngde">string</span></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre><h3 id="showsubscriptiondetail" class="ngde">showSubscriptionDetail<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#showsubscriptiondetail"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u663E\u793A\u8BA2\u9605\u8BE6\u60C5\u5BF9\u8BDD\u6846</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">showSubscriptionDetail</span>(<span class="hljs-params ngde"></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre><h3 id="installsubscription" class="ngde">installSubscription<a title="Link to heading" class="ng-doc-header-link ngde" href="/fundamentals/access-points#installsubscription"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h3><p class="ngde">\u5BFC\u5165\u8BA2\u9605\u5230\u6307\u5B9A\u4EE3\u7406\u5BA2\u6237\u7AEF\u5E76\u63D0\u793A\u3002</p><pre class="ngde hljs"><code class="hljs language-ts code-lines ngde" lang="ts" name="" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-keyword ngde">function</span> <span class="hljs-title function_ ngde">installSubscription</span>(<span class="hljs-params ngde">name: <span class="hljs-built_in ngde">string</span></span>): <span class="hljs-built_in ngde">void</span>;
</span></code></pre><ng-doc-blockquote type="note" class="ngde"><p class="ngde"></p><p class="ngde">\u4F60\u53EF\u4EE5 <a href="/fundamentals/settings-yaml" class="ngde">settings.yaml</a> \u4E2D\u7684 <code class="ngde">proxyClients</code> \u5B57\u6BB5\u4E2D\u627E\u5230\u4EE3\u7406\u5BA2\u6237\u7AEF\u7684 <code class="ngde">name</code>\u3002</p></ng-doc-blockquote>`,P=(()=>{let s=class s extends l{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent=L,this.page=n,this.demoAssets=u}};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=i({type:s,selectors:[["ng-doc-page-fundamentals-access-points"]],standalone:!0,features:[g([{provide:l,useExisting:s},j,n.providers??[]]),d,o],decls:1,vars:0,template:function(e,v){e&1&&t(0,"ng-doc-page")},dependencies:[r],encapsulation:2,changeDetection:0});let a=s;return a})(),w=[p(c({},(0,m.isRoute)(n.route)?n.route:{}),{path:"",component:P,title:"Angela Access Points"})],M=w;export{P as DynamicComponent,M as default};
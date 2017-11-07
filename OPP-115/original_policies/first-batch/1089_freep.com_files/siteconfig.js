define(["jquery","underscore","mergedSiteConfig"],function(e,t,i){"use strict";var n={getSiteConfig:function(){return this.inited||(this.inited=!0,this.setupSiteConfig(i)),i},setupSiteConfig:function(e){!e.require||t.isEmpty(e.require.paths)&&t.isEmpty(e.require.shim)||require.config(e.require),n._replaceEnvVariables(e)},loadRoutes:function(){return e.Deferred(t.bind(function(e){var i=this.getSiteConfig(),n=t.pluck(i.apps,"path");require(n,t.bind(function(){var n=arguments,r=0;t.each(i.apps,function(e){e.AppClass=n[r++]}),this.urls=this._buildRoutes(i.pages,i.apps),e.resolve(this.urls)},this))},this))},_buildRoutes:function(e,i){return t.reduce(e,function(e,n){var r=i[n.appName],a=n.hosturls&&n.hosturls[location.hostname]||n.urls;return r||(n.appName&&(console.error("Invalid appName "+n.appName+" for Page "+n.name),n.appName="BaseApp"),r=i.BaseApp),n.modules=(n.init_modules||[]).concat(r.init_modules||[]),e.concat(t.map(a,function(e){var t=void 0===n.ajax&&void 0===r.ajax||void 0===n.ajax&&r.ajax===!0||n.ajax===!0;return{url:new RegExp(e),app:r,page:n,ajax:t}},this))},[])},getRouteInfo:function(i){return i&&(i=i.split("?")[0].split("#")[0],"/"===i[0]&&(i=i.substring(1)),i=e.trim(i)),null!==i&&t.find(this.urls,function(e){return e.url.test(i)})},_replaceEnvVariables:function(e){var i=t.templateSettings.interpolate;t.templateSettings.interpolate=/{{(.+?)}}/g,t.each(e.pages,function(e){if(e.urls){var i=[];t.each(e.urls,function(e){if(-1!=e.indexOf("{{")&&-1!=e.indexOf("}}"))try{e=t.template(e,window.site_vars||{})}catch(n){console.error("invalid url template: "+e),e=void 0}void 0!==e&&i.push(e)}),e.urls=i}}),t.templateSettings.interpolate=i}};return n});
//# sourceMappingURL=siteconfig.js
//# sourceMappingURL=siteconfig.js.map
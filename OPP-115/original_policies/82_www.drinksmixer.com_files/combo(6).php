YUI.add("popup-manager",function(a){var b=a.config.win,c=a.config.doc,d=a.Lang.isUndefined,e=a.Lang.isFunction,f={},g={},h=null;a.PopupManager={addCallback:function(a,b,c){f[a]=function(){b.apply(c||b,arguments)}},getScreenXY:function(){return{x:d(b.screenX)?b.screenLeft:b.screenX,y:d(b.screenY)?b.screenTop:b.screenY}},getBrowserSize:function(){var a=c.documentElement;return{width:d(b.outerWidth)?a.clientWidth:b.outerWidth,height:d(b.outerHeight)?a.clientHeight-22:b.outerHeight}},open:function(c){var d=c.width,h=c.height,i=this._calcCenter(d,h),j=c.id,k="width="+d+",height="+h+",left="+i.left+",top="+i.top;a.UA.ie>0&&(j="_blank"),g[c.id]=b.open(c.url,j,k),c.callback&&e(c.callback)&&a.PopupManager.addCallback(c.id,c.callback),a.Object.owns(f,"id")&&a.PopupManager.monitor(),g[c.id].focus()},monitor:function(){var b=!1;a.Object.each(g,function(c,d){if(g.hasOwnProperty(d)&&a.Object.owns(f,"id"))try{c.closed?a.PopupManager._triggerCallback(d):b=!0}catch(e){}}),b&&!h?h=a.later(300,a.PopupManager,a.PopupManager.monitor,"",!0):!b&&h&&(h.cancel(),h=null)},_calcCenter:function(a,b){var c=this.getScreenXY(),d=this.getBrowserSize(),e=parseInt(c.x+(d.width-a)/2,10),f=parseInt(c.y+(d.height-b)/2.5,10);return{left:e,top:f}},_triggerCallback:function(a){var b=f[a];delete f[a],delete g[a],b()}}},"@VERSION@",{})

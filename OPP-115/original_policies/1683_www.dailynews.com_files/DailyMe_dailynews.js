var Newstogram=function(){function h(){var a=document.createElement("script");a.setAttribute("type","text/javascript");document.getElementsByTagName("head")[0].appendChild(a);return a}function j(a,d,c){if(c){var b=new Date;b.setTime(b.getTime()+c*24*60*60*1E3);c="; expires="+b.toGMTString()}else c="";document.cookie=a+"="+d+c+"; path=/;"}function i(a){a=a+"=";for(var d=document.cookie.split(";"),c=0;c<d.length;c++){for(var b=d[c];b.charAt(0)==" ";)b=b.substring(1,b.length);if(b.indexOf(a)==0)return b.substring(a.length,
b.length)}return null}function g(a,d,c,b,e,m){a=k+"/hg.php?uid="+a+"&k="+l+"&s="+c+"&r="+b+"&q="+e+"&e="+m+"&cid="+d+"&callback=Newstogram.completed";h().setAttribute("src",a)}var k="http://da.newstogram.com",l="",f="";Math.uuid=function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");return function(d,c){var b=[];c=c||a.length;if(d)for(var e=0;e<d;e++)b[e]=a[0|Math.random()*c];else{b[8]=b[13]=b[18]=b[23]="-";b[14]="4";for(e=0;e<36;e++)if(!b[e]){d=0|Math.random()*
16;b[e]=a[e==19?d&3|8:d]}}return b.join("")}}();return{setUser:function(a){if(a!=null&&typeof a!="undefined")f=a},pageView:function(a,d){if(d==null||d=="")d=2;var c=document.referrer,b=window.location.search.substring(1);c=c==null||c==""?"0":c;b=b==null||b==""?"0":b;c=escape(c);b=escape(b);if((d==2||d==3)&&(a==null||a==""))a=document.location.href;a=escape(a);UID=i("DMUserTrack");if(f!=""&&(UID==null||UID=="")||f!=""&&(UID!=null||UID!="")&&UID.indexOf(":")<0)UID="check";if(UID==null||UID=="")UID=
Math.uuid();if(UID.indexOf(":")>0){tmpUID=UID.split(":");if(tmpUID.length>0){UID=tmpUID[0];f=tmpUID[1]!=f?tmpUID[1]:""}}f=escape(f);g(UID,f,a,c,b,d);return true},init:function(a){if(typeof a=="undefined"||a==null||a=="")throw"Missing apikey";l=a;return true},completed:function(a){j("DMUserTrack",a.Histogram.uid,365);return true}}}();function DMTrackCookie(h,j,i){try{var g=parseInt(/\,"(\d+)"/gi.exec(i)[1]);if(isNaN(g))g=null}catch(k){g=null}Newstogram.init(h);Newstogram.pageView(null,g)};
	
if (window.location.href.indexOf("ci_") >= 0)
{ 
document.write ("<script type='text/javascript' src='http://static.newstogram.com/MNG_Colorado/js/histogram.js'></script> <script>Newstogram.init('3757f0f1d1d84f0998a5923bb82e8904');Newstogram.pageView();</script>"); 
}
function setCookie(e,t,o){var n=new Date,o=(n.setTime(n.getTime()+24*o*60*60*1e3),"expires="+n.toUTCString());document.cookie=e+"="+t+";"+o+";path=/"}function getCookie(e){var o=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let t=0;t<n.length;t++){let e=n[t];for(;" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(o))return e.substring(o.length,e.length)}return""}export{setCookie,getCookie};
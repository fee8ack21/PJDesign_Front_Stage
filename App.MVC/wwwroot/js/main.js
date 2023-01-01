import*as Modal from"./view-components/modal.js";import*as CookieHelper from"./helpers/cookie.js";function handleWarningModal(){isWarningRead()||(Modal.layoutModal.resetStatus(),Modal.layoutModal.hideCancelBtn(),Modal.layoutModal.hideCloseIcon(),Modal.layoutModal.setIfOverlayClickable(!1),Modal.layoutModal.setTitle("系統通知"),Modal.layoutModal.setContent(["提醒您，本站僅為練習用，切勿採用本站任何資訊。","目前前台尚未套版，僅作功能參考。"]),Modal.layoutModal.setConfirmBtnCb(function(){CookieHelper.setCookie("isWarningRead",!0,1)}),Modal.layoutModal.show())}function isWarningRead(){return CookieHelper.getCookie("isWarningRead")&&$.parseJSON(CookieHelper.getCookie("isWarningRead").toLowerCase())}function handleLoader(){const o=$(".js-loader"),e="active";o.addClass(e),setTimeout(()=>{o.removeClass(e)},1e3)}function handleLoaderTypeWriter(){const a=$(".js-loader").find(".loader__text"),l="PJ Design";let n=0;!function o(){if(n<l.length){const e=a.html()+l.charAt(n);a.html(e),n++,setTimeout(o,150)}}()}function handleGoToBtnVisibility(){$(window).scroll(function(){var o=$(".js-go-to-btn"),e="active";100<$(window).scrollTop()?o.addClass(e):o.removeClass(e)})}function handleGoToBtnClick(){$(".js-go-to-btn").on("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"slow")})}$(function(){handleWarningModal(),handleLoader(),handleGoToBtnClick(),handleGoToBtnVisibility(),handleLoaderTypeWriter()});
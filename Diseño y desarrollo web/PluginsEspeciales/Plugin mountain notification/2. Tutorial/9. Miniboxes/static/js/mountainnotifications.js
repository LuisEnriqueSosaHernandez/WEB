// =======================================================================================
// 
// Mountain Pack v1
//
// Author: Klerith
// Page: http://codecanyon.net/user/klerith
// Email: fernando.herrera85@gmail.com BUT, first send me a message through codecanyon page.
//        That's because some people stole the code and ask me support when they are not a customer :(
//
// =======================================================================================
(function ($) 
{

// Global Variables

var NotificationBarEmptyText = "You currently have no new notifications.";  // On empty notification bar, shows this text
var ESCclosesNotificationBar = true;                                        // If you dont want to close on ESC Keypress
var CloseNotificationOnClick = false;                                       // Close the notification bar by clicking or touching outside
var OpenNotificationWithESC  = true;                                        // If the notification bar is closed, you can open it with ESC Key

var LabelMinimize = "Minimize";	// Minimize's button tooltip
var LabelMaximize = "Maximize";	// Maximize's button tooltip
var LabelClose    = "Close";	// Close's button tooltip




// Swiper library
var Swiper=function(a,b){function d(a){return document.querySelectorAll?document.querySelectorAll(a):jQuery(a)}function v(){var a=h-k;return b.freeMode&&(a=h-k),b.slidesPerView>e.slides.length&&(a=0),0>a&&(a=0),a}function x(){function f(a){var c=new Image;c.onload=function(){e.imagesLoaded++,e.imagesLoaded==e.imagesToLoad.length&&(e.reInit(),b.onImagesReady&&b.onImagesReady(e))},c.src=a}if(e.browser.ie10?(e.h.addEventListener(e.wrapper,e.touchEvents.touchStart,J,!1),e.h.addEventListener(document,e.touchEvents.touchMove,M,!1),e.h.addEventListener(document,e.touchEvents.touchEnd,N,!1)):(e.support.touch&&(e.h.addEventListener(e.wrapper,"touchstart",J,!1),e.h.addEventListener(e.wrapper,"touchmove",M,!1),e.h.addEventListener(e.wrapper,"touchend",N,!1)),b.simulateTouch&&(e.h.addEventListener(e.wrapper,"mousedown",J,!1),e.h.addEventListener(document,"mousemove",M,!1),e.h.addEventListener(document,"mouseup",N,!1))),b.autoResize&&e.h.addEventListener(window,"resize",e.resizeFix,!1),y(),e._wheelEvent=!1,b.mousewheelControl){void 0!==document.onmousewheel&&(e._wheelEvent="mousewheel");try{WheelEvent("wheel"),e._wheelEvent="wheel"}catch(a){}e._wheelEvent||(e._wheelEvent="DOMMouseScroll"),e._wheelEvent&&e.h.addEventListener(e.container,e._wheelEvent,B,!1)}if(b.keyboardControl&&e.h.addEventListener(document,"keydown",A,!1),b.updateOnImagesReady){document.querySelectorAll?e.imagesToLoad=e.container.querySelectorAll("img"):window.jQuery&&(e.imagesToLoad=d(e.container).find("img"));for(var c=0;e.imagesToLoad.length>c;c++)f(e.imagesToLoad[c].getAttribute("src"))}}function y(){if(b.preventLinks){var a=[];document.querySelectorAll?a=e.container.querySelectorAll("a"):window.jQuery&&(a=d(e.container).find("a"));for(var c=0;a.length>c;c++)e.h.addEventListener(a[c],"click",E,!1)}if(b.releaseFormElements)for(var f=document.querySelectorAll?e.container.querySelectorAll("input, textarea, select"):d(e.container).find("input, textarea, select"),c=0;f.length>c;c++)e.h.addEventListener(f[c],e.touchEvents.touchStart,F,!0);if(b.onSlideClick)for(var c=0;e.slides.length>c;c++)e.h.addEventListener(e.slides[c],"click",C,!1);if(b.onSlideTouch)for(var c=0;e.slides.length>c;c++)e.h.addEventListener(e.slides[c],e.touchEvents.touchStart,D,!1)}function z(){if(b.onSlideClick)for(var a=0;e.slides.length>a;a++)e.h.removeEventListener(e.slides[a],"click",C,!1);if(b.onSlideTouch)for(var a=0;e.slides.length>a;a++)e.h.removeEventListener(e.slides[a],e.touchEvents.touchStart,D,!1);if(b.releaseFormElements)for(var c=document.querySelectorAll?e.container.querySelectorAll("input, textarea, select"):d(e.container).find("input, textarea, select"),a=0;c.length>a;a++)e.h.removeEventListener(c[a],e.touchEvents.touchStart,F,!0);if(b.preventLinks){var f=[];document.querySelectorAll?f=e.container.querySelectorAll("a"):window.jQuery&&(f=d(e.container).find("a"));for(var a=0;f.length>a;a++)e.h.removeEventListener(f[a],"click",E,!1)}}function A(a){var b=a.keyCode||a.charCode;if(37==b||39==b||38==b||40==b){for(var c=!1,d=e.h.getOffset(e.container),f=e.h.windowScroll().left,g=e.h.windowScroll().top,h=e.h.windowWidth(),i=e.h.windowHeight(),j=[[d.left,d.top],[d.left+e.width,d.top],[d.left,d.top+e.height],[d.left+e.width,d.top+e.height]],k=0;j.length>k;k++){var l=j[k];l[0]>=f&&f+h>=l[0]&&l[1]>=g&&g+i>=l[1]&&(c=!0)}if(!c)return}o?((37==b||39==b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39==b&&e.swipeNext(),37==b&&e.swipePrev()):((38==b||40==b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40==b&&e.swipeNext(),38==b&&e.swipePrev())}function B(a){var d,c=e._wheelEvent;if(a.detail?d=-a.detail:"mousewheel"==c?d=a.wheelDelta:"DOMMouseScroll"==c?d=-a.detail:"wheel"==c&&(d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY),b.freeMode){o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y");var g,h;o?(g=e.getWrapperTranslate("x")+d,h=e.getWrapperTranslate("y"),g>0&&(g=0),-v()>g&&(g=-v())):(g=e.getWrapperTranslate("x"),h=e.getWrapperTranslate("y")+d,h>0&&(h=0),-v()>h&&(h=-v())),e.setWrapperTransition(0),e.setWrapperTranslate(g,h,0)}else 0>d?e.swipeNext():e.swipePrev();return b.autoplay&&e.stopAutoplay(),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function C(){e.allowSlideClick&&(e.clickedSlide=this,e.clickedSlideIndex=e.slides.indexOf(this),b.onSlideClick(e))}function D(){e.clickedSlide=this,e.clickedSlideIndex=e.slides.indexOf(this),b.onSlideTouch(e)}function E(a){return e.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,!1)}function F(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function J(a){if(b.preventLinks&&(e.allowLinks=!0),e.isTouched||b.onlyExternal)return!1;if(b.noSwiping&&a.target&&a.target.className&&a.target.className.indexOf(b.noSwipingClass)>-1)return!1;if(I=!1,e.isTouched=!0,G="touchstart"==a.type,!G||1==a.targetTouches.length){b.loop&&e.fixLoop(),e.callPlugins("onTouchStartBegin"),G||(a.preventDefault?a.preventDefault():a.returnValue=!1);var c=G?a.targetTouches[0].pageX:a.pageX||a.clientX,d=G?a.targetTouches[0].pageY:a.pageY||a.clientY;e.touches.startX=e.touches.currentX=c,e.touches.startY=e.touches.currentY=d,e.touches.start=e.touches.current=o?c:d,e.setWrapperTransition(0),e.positions.start=e.positions.current=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y"),o?e.setWrapperTranslate(e.positions.start,0,0):e.setWrapperTranslate(0,e.positions.start,0),e.times.start=(new Date).getTime(),j=void 0,b.moveStartThreshold>0&&(H=!1),b.onTouchStart&&b.onTouchStart(e),e.callPlugins("onTouchStartEnd")}}function M(a){if(e.isTouched&&!b.onlyExternal&&(!G||"mousemove"!=a.type)){var c=G?a.targetTouches[0].pageX:a.pageX||a.clientX,d=G?a.targetTouches[0].pageY:a.pageY||a.clientY;if(j===void 0&&o&&(j=!!(j||Math.abs(d-e.touches.startY)>Math.abs(c-e.touches.startX))),void 0!==j||o||(j=!!(j||Math.abs(d-e.touches.startY)<Math.abs(c-e.touches.startX))),j)return e.isTouched=!1,void 0;if(a.assignedToSwiper)return e.isTouched=!1,void 0;if(a.assignedToSwiper=!0,e.isMoved=!0,b.preventLinks&&(e.allowLinks=!1),b.onSlideClick&&(e.allowSlideClick=!1),b.autoplay&&e.stopAutoplay(),!G||1==a.touches.length){if(e.callPlugins("onTouchMoveStart"),a.preventDefault?a.preventDefault():a.returnValue=!1,e.touches.current=o?c:d,e.positions.current=(e.touches.current-e.touches.start)*b.touchRatio+e.positions.start,e.positions.current>0&&b.onResistanceBefore&&b.onResistanceBefore(e,e.positions.current),e.positions.current<-v()&&b.onResistanceBefore&&b.onResistanceAfter(e,Math.abs(e.positions.current+v())),b.resistance&&"100%"!=b.resistance){if(e.positions.current>0){var f=1-e.positions.current/k/2;e.positions.current=.5>f?k/2:e.positions.current*f}if(e.positions.current<-v()){var g=(e.touches.current-e.touches.start)*b.touchRatio+(v()+e.positions.start),f=(k+g)/k,h=e.positions.current-g*(1-f)/2,i=-v()-k/2;e.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"==b.resistance&&(e.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(e.positions.current=0),e.positions.current<-v()&&(!b.freeMode||b.freeModeFluid)&&(e.positions.current=-v())),!b.followFinger)return;return b.moveStartThreshold?Math.abs(e.touches.current-e.touches.start)>b.moveStartThreshold||H?(H=!0,o?e.setWrapperTranslate(e.positions.current,0,0):e.setWrapperTranslate(0,e.positions.current,0)):e.positions.current=e.positions.start:o?e.setWrapperTranslate(e.positions.current,0,0):e.setWrapperTranslate(0,e.positions.current,0),(b.freeMode||b.watchActiveIndex)&&e.updateActiveSlide(e.positions.current),b.grabCursor&&(e.container.style.cursor="move",e.container.style.cursor="grabbing",e.container.style.cursor="-moz-grabbin",e.container.style.cursor="-webkit-grabbing"),K||(K=e.touches.current),L||(L=(new Date).getTime()),e.velocity=(e.touches.current-K)/((new Date).getTime()-L)/2,2>Math.abs(e.touches.current-K)&&(e.velocity=0),K=e.touches.current,L=(new Date).getTime(),e.callPlugins("onTouchMoveEnd"),b.onTouchMove&&b.onTouchMove(e),!1}}}function N(){if(j&&e.swipeReset(),!b.onlyExternal&&e.isTouched){e.isTouched=!1,b.grabCursor&&(e.container.style.cursor="move",e.container.style.cursor="grab",e.container.style.cursor="-moz-grab",e.container.style.cursor="-webkit-grab"),e.positions.current||0===e.positions.current||(e.positions.current=e.positions.start),b.followFinger&&(o?e.setWrapperTranslate(e.positions.current,0,0):e.setWrapperTranslate(0,e.positions.current,0)),e.times.end=(new Date).getTime(),e.touches.diff=e.touches.current-e.touches.start,e.touches.abs=Math.abs(e.touches.diff),e.positions.diff=e.positions.current-e.positions.start,e.positions.abs=Math.abs(e.positions.diff);var c=e.positions.diff,d=e.positions.abs,f=e.times.end-e.times.start;if(5>d&&300>f&&0==e.allowLinks&&(b.freeMode||0==d||e.swipeReset(),b.preventLinks&&(e.allowLinks=!0),b.onSlideClick&&(e.allowSlideClick=!0)),setTimeout(function(){b.preventLinks&&(e.allowLinks=!0),b.onSlideClick&&(e.allowSlideClick=!0)},100),!e.isMoved)return e.isMoved=!1,b.onTouchEnd&&b.onTouchEnd(e),e.callPlugins("onTouchEnd"),void 0;e.isMoved=!1;var h=v();if(e.positions.current>0)return e.swipeReset(),b.onTouchEnd&&b.onTouchEnd(e),e.callPlugins("onTouchEnd"),void 0;if(-h>e.positions.current)return e.swipeReset(),b.onTouchEnd&&b.onTouchEnd(e),e.callPlugins("onTouchEnd"),void 0;if(b.freeMode){if(b.freeModeFluid){var q,l=1e3*b.momentumRatio,m=e.velocity*l,n=e.positions.current+m,p=!1,r=20*Math.abs(e.velocity)*b.momentumBounceRatio;-h>n&&(b.momentumBounce&&e.support.transitions?(-r>n+h&&(n=-h-r),q=-h,p=!0,I=!0):n=-h),n>0&&(b.momentumBounce&&e.support.transitions?(n>r&&(n=r),q=0,p=!0,I=!0):n=0),0!=e.velocity&&(l=Math.abs((n-e.positions.current)/e.velocity)),o?e.setWrapperTranslate(n,0,0):e.setWrapperTranslate(0,n,0),e.setWrapperTransition(l),b.momentumBounce&&p&&e.wrapperTransitionEnd(function(){I&&(b.onMomentumBounce&&b.onMomentumBounce(e),o?e.setWrapperTranslate(q,0,0):e.setWrapperTranslate(0,q,0),e.setWrapperTransition(300))}),e.updateActiveSlide(n)}return(!b.freeModeFluid||f>=300)&&e.updateActiveSlide(e.positions.current),b.onTouchEnd&&b.onTouchEnd(e),e.callPlugins("onTouchEnd"),void 0}i=0>c?"toNext":"toPrev","toNext"==i&&300>=f&&(30>d||!b.shortSwipes?e.swipeReset():e.swipeNext(!0)),"toPrev"==i&&300>=f&&(30>d||!b.shortSwipes?e.swipeReset():e.swipePrev(!0));var s=0;if("auto"==b.slidesPerView){for(var w,t=Math.abs(o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y")),u=0,x=0;e.slides.length>x;x++)if(w=o?e.slides[x].getWidth(!0):e.slides[x].getHeight(!0),u+=w,u>t){s=w;break}s>k&&(s=k)}else s=g*b.slidesPerView;"toNext"==i&&f>300&&(d>=.5*s?e.swipeNext(!0):e.swipeReset()),"toPrev"==i&&f>300&&(d>=.5*s?e.swipePrev(!0):e.swipeReset()),b.onTouchEnd&&b.onTouchEnd(e),e.callPlugins("onTouchEnd")}}function O(a,c,d){function k(){g+=h,j="toNext"==i?g>a:a>g,j?(o?e.setWrapperTranslate(Math.round(g),0):e.setWrapperTranslate(0,Math.round(g)),e._DOMAnimating=!0,window.setTimeout(function(){k()},1e3/60)):(b.onSlideChangeEnd&&b.onSlideChangeEnd(e),o?e.setWrapperTranslate(a,0):e.setWrapperTranslate(0,a),e._DOMAnimating=!1)}if(e.support.transitions||!b.DOMAnimation){o?e.setWrapperTranslate(a,0,0):e.setWrapperTranslate(0,a,0);var f="to"==c&&d.speed>=0?d.speed:b.speed;e.setWrapperTransition(f)}else{var g=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y"),f="to"==c&&d.speed>=0?d.speed:b.speed,h=Math.ceil((a-g)/f*(1e3/60)),i=g>a?"toNext":"toPrev",j="toNext"==i?g>a:a>g;if(e._DOMAnimating)return;k()}e.updateActiveSlide(a),b.onSlideNext&&"next"==c&&b.onSlideNext(e,a),b.onSlidePrev&&"prev"==c&&b.onSlidePrev(e,a),b.onSlideReset&&"reset"==c&&b.onSlideReset(e,a),("next"==c||"prev"==c||"to"==c&&1==d.runCallbacks)&&P()}function P(){if(e.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&e.support.transitions){if(e._queueStartCallbacks)return;e._queueStartCallbacks=!0,b.onSlideChangeStart(e),e.wrapperTransitionEnd(function(){e._queueStartCallbacks=!1})}else b.onSlideChangeStart(e);if(b.onSlideChangeEnd)if(e.support.transitions)if(b.queueEndCallbacks){if(e._queueEndCallbacks)return;e._queueEndCallbacks=!0,e.wrapperTransitionEnd(b.onSlideChangeEnd)}else e.wrapperTransitionEnd(b.onSlideChangeEnd);else b.DOMAnimation||setTimeout(function(){b.onSlideChangeEnd(e)},10)}function Q(){for(var a=e.paginationButtons,b=0;a.length>b;b++)e.h.removeEventListener(a[b],"click",S,!1)}function R(){for(var a=e.paginationButtons,b=0;a.length>b;b++)e.h.addEventListener(a[b],"click",S,!1)}function S(a){for(var b,c=a.target||a.srcElement,d=e.paginationButtons,f=0;d.length>f;f++)c===d[f]&&(b=f);e.swipeTo(b)}function U(){e.calcSlides(),b.loader.slides.length>0&&0==e.slides.length&&e.loadSlides(),b.loop&&e.createLoop(),e.init(),x(),b.pagination&&b.createPagination&&e.createPagination(!0),b.loop||b.initialSlide>0?e.swipeTo(b.initialSlide,0,!1):e.updateActiveSlide(0),b.autoplay&&e.startAutoplay()}if(document.body.__defineGetter__&&HTMLElement){var c=HTMLElement.prototype;c.__defineGetter__&&c.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&void 0!==a&&(a.nodeType||0!==d(a).length)){var e=this;e.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},e.positions={start:0,abs:0,diff:0,current:0},e.times={start:0,end:0},e.id=(new Date).getTime(),e.container=a.nodeType?a:d(a)[0],e.isTouched=!1,e.isMoved=!1,e.activeIndex=0,e.activeLoaderIndex=0,e.activeLoopIndex=0,e.previousIndex=null,e.velocity=0,e.snapGrid=[],e.slidesGrid=[],e.imagesToLoad=[],e.imagesLoaded=0,e.wrapperLeft=0,e.wrapperRight=0,e.wrapperTop=0,e.wrapperBottom=0;var f,g,h,i,j,k,l={mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,simulateTouch:!0,followFinger:!0,shortSwipes:!0,moveStartThreshold:!1,autoplay:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,useCSS3Transforms:!0,loop:!1,loopAdditionalSlides:0,calculateHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var m in l)if(m in b&&"object"==typeof b[m])for(var n in l[m])n in b[m]||(b[m][n]=l[m][n]);else m in b||(b[m]=l[m]);e.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var o="horizontal"===b.mode;e.touchEvents={touchStart:e.support.touch||!b.simulateTouch?"touchstart":e.browser.ie10?"MSPointerDown":"mousedown",touchMove:e.support.touch||!b.simulateTouch?"touchmove":e.browser.ie10?"MSPointerMove":"mousemove",touchEnd:e.support.touch||!b.simulateTouch?"touchend":e.browser.ie10?"MSPointerUp":"mouseup"};for(var p=e.container.childNodes.length-1;p>=0;p--)if(e.container.childNodes[p].className)for(var q=e.container.childNodes[p].className.split(" "),r=0;q.length>r;r++)q[r]===b.wrapperClass&&(f=e.container.childNodes[p]);e.wrapper=f,e._extendSwiperSlide=function(a){return a.append=function(){return b.loop?(a.insertAfter(e.slides.length-e.loopedSlides),e.removeLoopedSlides(),e.calcSlides(),e.createLoop()):e.wrapper.appendChild(a),e.reInit(),a},a.prepend=function(){return b.loop?(e.wrapper.insertBefore(a,e.slides[e.loopedSlides]),e.removeLoopedSlides(),e.calcSlides(),e.createLoop()):e.wrapper.insertBefore(a,e.wrapper.firstChild),e.reInit(),a},a.insertAfter=function(c){if(c===void 0)return!1;var d;return b.loop?(d=e.slides[c+1+e.loopedSlides],e.wrapper.insertBefore(a,d),e.removeLoopedSlides(),e.calcSlides(),e.createLoop()):(d=e.slides[c+1],e.wrapper.insertBefore(a,d)),e.reInit(),a},a.clone=function(){return e._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){e.wrapper.removeChild(a),e.reInit()},a.html=function(b){return b===void 0?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=e.slides.length-1;c>=0;c--)a===e.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===e.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return c?(a.setAttribute("data-"+b,c),a):a.getAttribute("data-"+b)},a.getWidth=function(b){return e.h.getWidth(a,b)},a.getHeight=function(b){return e.h.getHeight(a,b)},a.getOffset=function(){return e.h.getOffset(a)},a},e.calcSlides=function(a){var c=e.slides?e.slides.length:!1;e.slides=[],e.displaySlides=[];for(var d=0;e.wrapper.childNodes.length>d;d++)if(e.wrapper.childNodes[d].className)for(var f=e.wrapper.childNodes[d].className,g=f.split(" "),h=0;g.length>h;h++)g[h]===b.slideClass&&e.slides.push(e.wrapper.childNodes[d]);for(d=e.slides.length-1;d>=0;d--)e._extendSwiperSlide(e.slides[d]);c&&(c!==e.slides.length||a)&&(z(),y(),e.updateActiveSlide(),b.createPagination&&e.params.pagination&&e.createPagination(),e.callPlugins("numberOfSlidesChanged"))},e.createSlide=function(a,c,d){var c=c||e.params.slideClass,d=d||b.slideElement,f=document.createElement(d);return f.innerHTML=a||"",f.className=c,e._extendSwiperSlide(f)},e.appendSlide=function(a,b,c){return a?a.nodeType?e._extendSwiperSlide(a).append():e.createSlide(a,b,c).append():void 0},e.prependSlide=function(a,b,c){return a?a.nodeType?e._extendSwiperSlide(a).prepend():e.createSlide(a,b,c).prepend():void 0},e.insertSlideAfter=function(a,b,c,d){return a===void 0?!1:b.nodeType?e._extendSwiperSlide(b).insertAfter(a):e.createSlide(b,c,d).insertAfter(a)},e.removeSlide=function(a){if(e.slides[a]){if(b.loop){if(!e.slides[a+e.loopedSlides])return!1;e.slides[a+e.loopedSlides].remove(),e.removeLoopedSlides(),e.calcSlides(),e.createLoop()}else e.slides[a].remove();return!0}return!1},e.removeLastSlide=function(){return e.slides.length>0?(b.loop?(e.slides[e.slides.length-1-e.loopedSlides].remove(),e.removeLoopedSlides(),e.calcSlides(),e.createLoop()):e.slides[e.slides.length-1].remove(),!0):!1},e.removeAllSlides=function(){for(var a=e.slides.length-1;a>=0;a--)e.slides[a].remove()},e.getSlide=function(a){return e.slides[a]},e.getLastSlide=function(){return e.slides[e.slides.length-1]},e.getFirstSlide=function(){return e.slides[0]},e.activeSlide=function(){return e.slides[e.activeIndex]};var s=[];for(var t in e.plugins)if(b[t]){var u=e.plugins[t](e,b[t]);u&&s.push(u)}e.callPlugins=function(a,b){b||(b={});for(var c=0;s.length>c;c++)a in s[c]&&s[c][a](b)},e.browser.ie10&&!b.onlyExternal&&(o?e.wrapper.classList.add("swiper-wp8-horizontal"):e.wrapper.classList.add("swiper-wp8-vertical")),b.freeMode&&(e.container.className+=" swiper-free-mode"),e.initialized=!1,e.init=function(a,c){var d=e.h.getWidth(e.container),f=e.h.getHeight(e.container);if(d!==e.width||f!==e.height||a){e.width=d,e.height=f,k=o?d:f;var i=e.wrapper;if(a&&e.calcSlides(c),"auto"===b.slidesPerView){var j=0,l=0;b.slidesOffset>0&&(i.style.paddingLeft="",i.style.paddingRight="",i.style.paddingTop="",i.style.paddingBottom=""),i.style.width="",i.style.height="",b.offsetPxBefore>0&&(o?e.wrapperLeft=b.offsetPxBefore:e.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(o?e.wrapperRight=b.offsetPxAfter:e.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(o?(e.wrapperLeft=(k-this.slides[0].getWidth(!0))/2,e.wrapperRight=(k-e.slides[e.slides.length-1].getWidth(!0))/2):(e.wrapperTop=(k-e.slides[0].getHeight(!0))/2,e.wrapperBottom=(k-e.slides[e.slides.length-1].getHeight(!0))/2)),o?(e.wrapperLeft>=0&&(i.style.paddingLeft=e.wrapperLeft+"px"),e.wrapperRight>=0&&(i.style.paddingRight=e.wrapperRight+"px")):(e.wrapperTop>=0&&(i.style.paddingTop=e.wrapperTop+"px"),e.wrapperBottom>=0&&(i.style.paddingBottom=e.wrapperBottom+"px"));var m=0,n=0;e.snapGrid=[],e.slidesGrid=[];for(var p=0,q=0;e.slides.length>q;q++){var r=e.slides[q].getWidth(!0),s=e.slides[q].getHeight(!0);b.calculateHeight&&(p=Math.max(p,s));var t=o?r:s;if(b.centeredSlides){var u=q===e.slides.length-1?0:e.slides[q+1].getWidth(!0),v=q===e.slides.length-1?0:e.slides[q+1].getHeight(!0),w=o?u:v;if(t>k){for(var x=0;Math.floor(t/(k+e.wrapperLeft))>=x;x++)0===x?e.snapGrid.push(m+e.wrapperLeft):e.snapGrid.push(m+e.wrapperLeft+k*x);e.slidesGrid.push(m+e.wrapperLeft)}else e.snapGrid.push(n),e.slidesGrid.push(n);n+=t/2+w/2}else{if(t>k)for(var x=0;Math.floor(t/k)>=x;x++)e.snapGrid.push(m+k*x);else e.snapGrid.push(m);e.slidesGrid.push(m)}m+=t,j+=r,l+=s}b.calculateHeight&&(e.height=p),o?(h=j+e.wrapperRight+e.wrapperLeft,i.style.width=j+"px",i.style.height=e.height+"px"):(h=l+e.wrapperTop+e.wrapperBottom,i.style.width=e.width+"px",i.style.height=l+"px")}else if(b.scrollContainer){i.style.width="",i.style.height="";var y=e.slides[0].getWidth(!0),z=e.slides[0].getHeight(!0);h=o?y:z,i.style.width=y+"px",i.style.height=z+"px",g=o?y:z}else{if(b.calculateHeight){var p=0,z=0;o||(e.container.style.height=""),i.style.height="";for(var q=0;e.slides.length>q;q++)e.slides[q].style.height="",p=Math.max(e.slides[q].getHeight(!0),p),o||(z+=e.slides[q].getHeight(!0));var s=p;if(o)var z=s;k=e.height=s,o||(e.container.style.height=k+"px")}else var s=o?e.height:e.height/b.slidesPerView,z=o?e.height:e.slides.length*s;var r=o?e.width/b.slidesPerView:e.width,y=o?e.slides.length*r:e.width;g=o?r:s,b.offsetSlidesBefore>0&&(o?e.wrapperLeft=g*b.offsetSlidesBefore:e.wrapperTop=g*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(o?e.wrapperRight=g*b.offsetSlidesAfter:e.wrapperBottom=g*b.offsetSlidesAfter),b.offsetPxBefore>0&&(o?e.wrapperLeft=b.offsetPxBefore:e.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(o?e.wrapperRight=b.offsetPxAfter:e.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(o?(e.wrapperLeft=(k-g)/2,e.wrapperRight=(k-g)/2):(e.wrapperTop=(k-g)/2,e.wrapperBottom=(k-g)/2)),o?(e.wrapperLeft>0&&(i.style.paddingLeft=e.wrapperLeft+"px"),e.wrapperRight>0&&(i.style.paddingRight=e.wrapperRight+"px")):(e.wrapperTop>0&&(i.style.paddingTop=e.wrapperTop+"px"),e.wrapperBottom>0&&(i.style.paddingBottom=e.wrapperBottom+"px")),h=o?y+e.wrapperRight+e.wrapperLeft:z+e.wrapperTop+e.wrapperBottom,i.style.width=y+"px",i.style.height=z+"px";var m=0;e.snapGrid=[],e.slidesGrid=[];for(var q=0;e.slides.length>q;q++)e.snapGrid.push(m),e.slidesGrid.push(m),m+=g,e.slides[q].style.width=r+"px",e.slides[q].style.height=s+"px"}e.initialized?e.callPlugins("onInit"):e.callPlugins("onFirstInit"),e.initialized=!0}},e.reInit=function(a){e.init(!0,a)},e.resizeFix=function(a){if(e.callPlugins("beforeResizeFix"),e.init(b.resizeReInit||a),b.freeMode){var c=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y");if(-v()>c){var d=o?-v():0,f=o?0:-v();e.setWrapperTransition(0),e.setWrapperTranslate(d,f,0)}}else b.loop?e.swipeTo(e.activeLoopIndex,0,!1):e.swipeTo(e.activeIndex,0,!1);e.callPlugins("afterResizeFix")},e.destroy=function(){e.browser.ie10?(e.h.removeEventListener(e.wrapper,e.touchEvents.touchStart,J,!1),e.h.removeEventListener(document,e.touchEvents.touchMove,M,!1),e.h.removeEventListener(document,e.touchEvents.touchEnd,N,!1)):(e.support.touch&&(e.h.removeEventListener(e.wrapper,"touchstart",J,!1),e.h.removeEventListener(e.wrapper,"touchmove",M,!1),e.h.removeEventListener(e.wrapper,"touchend",N,!1)),b.simulateTouch&&(e.h.removeEventListener(e.wrapper,"mousedown",J,!1),e.h.removeEventListener(document,"mousemove",M,!1),e.h.removeEventListener(document,"mouseup",N,!1))),b.autoResize&&e.h.removeEventListener(window,"resize",e.resizeFix,!1),z(),b.paginationClickable&&Q(),b.mousewheelControl&&e._wheelEvent&&e.h.removeEventListener(e.container,e._wheelEvent,B,!1),b.keyboardControl&&e.h.removeEventListener(document,"keydown",A,!1),b.autoplay&&e.stopAutoplay(),e.callPlugins("onDestroy")},b.grabCursor&&(e.container.style.cursor="move",e.container.style.cursor="grab",e.container.style.cursor="-moz-grab",e.container.style.cursor="-webkit-grab"),e.allowSlideClick=!0,e.allowLinks=!0;var H,K,L,G=!1,I=!0;e.swipeNext=function(a){!a&&b.loop&&e.fixLoop(),e.callPlugins("onSwipeNext");var c=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y"),d=c;if("auto"==b.slidesPerView){for(var f=0;e.snapGrid.length>f;f++)if(-c>=e.snapGrid[f]&&e.snapGrid[f+1]>-c){d=-e.snapGrid[f+1];break}}else{var h=g*b.slidesPerGroup;d=-(Math.floor(Math.abs(c)/Math.floor(h))*h+h)}return-v()>d&&(d=-v()),d==c?!1:(O(d,"next"),!0)},e.swipePrev=function(a){!a&&b.loop&&e.fixLoop(),!a&&b.autoplay&&e.stopAutoplay(),e.callPlugins("onSwipePrev");var d,c=Math.ceil(o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y"));if("auto"==b.slidesPerView){d=0;for(var f=1;e.snapGrid.length>f;f++){if(-c==e.snapGrid[f]){d=-e.snapGrid[f-1];break}if(-c>e.snapGrid[f]&&e.snapGrid[f+1]>-c){d=-e.snapGrid[f];break}}}else{var h=g*b.slidesPerGroup;d=-(Math.ceil(-c/h)-1)*h}return d>0&&(d=0),d==c?!1:(O(d,"prev"),!0)},e.swipeReset=function(){e.callPlugins("onSwipeReset");var d,a=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y"),c=g*b.slidesPerGroup;if(-v(),"auto"==b.slidesPerView){d=0;for(var h=0;e.snapGrid.length>h;h++){if(-a===e.snapGrid[h])return;if(-a>=e.snapGrid[h]&&e.snapGrid[h+1]>-a){d=e.positions.diff>0?-e.snapGrid[h+1]:-e.snapGrid[h];break}}-a>=e.snapGrid[e.snapGrid.length-1]&&(d=-e.snapGrid[e.snapGrid.length-1]),-v()>=a&&(d=-v())}else d=0>a?Math.round(a/c)*c:0;return b.scrollContainer&&(d=0>a?a:0),-v()>d&&(d=-v()),b.scrollContainer&&k>g&&(d=0),d==a?!1:(O(d,"reset"),!0)},e.swipeTo=function(a,c,d){a=parseInt(a,10),e.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=e.loopedSlides);var f=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y");if(!(a>e.slides.length-1||0>a)){var h;return h="auto"==b.slidesPerView?-e.slidesGrid[a]:-a*g,-v()>h&&(h=-v()),h==f?!1:(d=d===!1?!1:!0,O(h,"to",{index:a,speed:c,runCallbacks:d}),!0)}},e._queueStartCallbacks=!1,e._queueEndCallbacks=!1,e.updateActiveSlide=function(a){if(e.initialized&&0!=e.slides.length){if(e.previousIndex=e.activeIndex,a>0&&(a=0),a===void 0&&(a=o?e.getWrapperTranslate("x"):e.getWrapperTranslate("y")),"auto"==b.slidesPerView){if(e.activeIndex=e.slidesGrid.indexOf(-a),0>e.activeIndex){for(var d=0;e.slidesGrid.length-1>d&&!(-a>e.slidesGrid[d]&&e.slidesGrid[d+1]>-a);d++);var f=Math.abs(e.slidesGrid[d]+a),h=Math.abs(e.slidesGrid[d+1]+a);e.activeIndex=h>=f?d:d+1}}else e.activeIndex=b.visibilityFullFit?Math.ceil(-a/g):Math.round(-a/g);if(e.activeIndex==e.slides.length&&(e.activeIndex=e.slides.length-1),0>e.activeIndex&&(e.activeIndex=0),e.slides[e.activeIndex]){e.calcVisibleSlides(a);for(var i=RegExp("\\s*"+b.slideActiveClass),j=RegExp("\\s*"+b.slideVisibleClass),d=0;e.slides.length>d;d++)e.slides[d].className=e.slides[d].className.replace(i,"").replace(j,""),e.visibleSlides.indexOf(e.slides[d])>=0&&(e.slides[d].className+=" "+b.slideVisibleClass);if(e.slides[e.activeIndex].className+=" "+b.slideActiveClass,b.loop){var k=e.loopedSlides;e.activeLoopIndex=e.activeIndex-k,e.activeLoopIndex>=e.slides.length-2*k&&(e.activeLoopIndex=e.slides.length-2*k-e.activeLoopIndex),0>e.activeLoopIndex&&(e.activeLoopIndex=e.slides.length-2*k+e.activeLoopIndex)}else e.activeLoopIndex=e.activeIndex;b.pagination&&e.updatePagination(a)}}},e.createPagination=function(a){b.paginationClickable&&e.paginationButtons&&Q();var c="",f=e.slides.length,g=f;b.loop&&(g-=2*e.loopedSlides);for(var h=0;g>h;h++)c+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";e.paginationContainer=b.pagination.nodeType?b.pagination:d(b.pagination)[0],e.paginationContainer.innerHTML=c,e.paginationButtons=[],document.querySelectorAll?e.paginationButtons=e.paginationContainer.querySelectorAll("."+b.paginationElementClass):window.jQuery&&(e.paginationButtons=d(e.paginationContainer).find("."+b.paginationElementClass)),a||e.updatePagination(),e.callPlugins("onCreatePagination"),b.paginationClickable&&R()},e.updatePagination=function(a){if(!(1>e.slides.length)){if(document.querySelectorAll)var c=e.paginationContainer.querySelectorAll("."+b.paginationActiveClass);else if(window.jQuery)var c=d(e.paginationContainer).find("."+b.paginationActiveClass);if(c){for(var f=e.paginationButtons,g=0;f.length>g;g++)f[g].className=b.paginationElementClass;var h=b.loop?e.loopedSlides:0;if(b.paginationAsRange){e.visibleSlides||e.calcVisibleSlides(a);for(var i=[],g=0;e.visibleSlides.length>g;g++){var j=e.slides.indexOf(e.visibleSlides[g])-h;b.loop&&0>j&&(j=e.slides.length-2*e.loopedSlides+j),b.loop&&j>=e.slides.length-2*e.loopedSlides&&(j=e.slides.length-2*e.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(g=0;i.length>g;g++)f[i[g]]&&(f[i[g]].className+=" "+b.paginationVisibleClass);b.loop?f[e.activeLoopIndex].className+=" "+b.paginationActiveClass:f[e.activeIndex].className+=" "+b.paginationActiveClass}else b.loop?f[e.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass:f[e.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass}}},e.calcVisibleSlides=function(a){var c=[],d=0,f=0,h=0;o&&e.wrapperLeft>0&&(a+=e.wrapperLeft),!o&&e.wrapperTop>0&&(a+=e.wrapperTop);for(var i=0;e.slides.length>i;i++){d+=f,f="auto"==b.slidesPerView?o?e.h.getWidth(e.slides[i],!0):e.h.getHeight(e.slides[i],!0):g,h=d+f;var j=!1;b.visibilityFullFit?(d>=-a&&-a+k>=h&&(j=!0),-a>=d&&h>=-a+k&&(j=!0)):(h>-a&&-a+k>=h&&(j=!0),d>=-a&&-a+k>d&&(j=!0),-a>d&&h>-a+k&&(j=!0)),j&&c.push(e.slides[i])}0==c.length&&(c=[e.slides[e.activeIndex]]),e.visibleSlides=c};var T=void 0;e.startAutoplay=function(){return T!==void 0?!1:(b.autoplay&&!b.loop&&(T=setInterval(function(){e.swipeNext(!0)||e.swipeTo(0)},b.autoplay)),b.autoplay&&b.loop&&(autoPlay=setInterval(function(){e.swipeNext()},b.autoplay)),e.callPlugins("onAutoplayStart"),void 0)},e.stopAutoplay=function(){T&&clearInterval(T),T=void 0,e.callPlugins("onAutoplayStop")},e.loopCreated=!1,e.removeLoopedSlides=function(){if(e.loopCreated)for(var a=0;e.slides.length>a;a++)e.slides[a].getData("looped")===!0&&e.wrapper.removeChild(e.slides[a])},e.createLoop=function(){if(0!=e.slides.length){e.loopedSlides=b.slidesPerView+b.loopAdditionalSlides;for(var a="",c="",d=0;e.loopedSlides>d;d++)a+=e.slides[d].outerHTML;for(d=e.slides.length-e.loopedSlides;e.slides.length>d;d++)c+=e.slides[d].outerHTML;for(f.innerHTML=c+f.innerHTML+a,e.loopCreated=!0,e.calcSlides(),d=0;e.slides.length>d;d++)(e.loopedSlides>d||d>=e.slides.length-e.loopedSlides)&&e.slides[d].setData("looped",!0);e.callPlugins("onCreateLoop")}},e.fixLoop=function(){if(e.activeIndex<e.loopedSlides){var a=e.slides.length-3*e.loopedSlides+e.activeIndex;e.swipeTo(a,0,!1)}else if(e.activeIndex>e.slides.length-2*b.slidesPerView){var a=-e.slides.length+e.activeIndex+e.loopedSlides;e.swipeTo(a,0,!1)}},e.loadSlides=function(){var a="";e.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),f=0;d>f;f++)a+="outer"==b.loader.slidesHTMLType?c[f]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+f+'">'+c[f]+"</"+b.slideElement+">";e.wrapper.innerHTML=a,e.calcSlides(!0),b.loader.loadAllSlides||e.wrapperTransitionEnd(e.reloadSlides,!0)},e.reloadSlides=function(){var a=b.loader.slides,c=parseInt(e.activeSlide().data("swiperindex"),10);
if(!(0>c||c>a.length-1)){e.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),f=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var h=-g*(c-d);o?e.setWrapperTranslate(h,0,0):e.setWrapperTranslate(0,h,0),e.setWrapperTransition(0)}if("reload"===b.loader.logic){e.wrapper.innerHTML="";for(var i="",j=d;f>=j;j++)i+="outer"==b.loader.slidesHTMLType?a[j]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+j+'">'+a[j]+"</"+b.slideElement+">";e.wrapper.innerHTML=i}else{for(var k=1e3,l=0,j=0;e.slides.length>j;j++){var m=e.slides[j].data("swiperindex");d>m||m>f?e.wrapper.removeChild(e.slides[j]):(k=Math.min(m,k),l=Math.max(m,l))}for(var j=d;f>=j;j++){if(k>j){var n=document.createElement(b.slideElement);n.className=b.slideClass,n.setAttribute("data-swiperindex",j),n.innerHTML=a[j],e.wrapper.insertBefore(n,e.wrapper.firstChild)}if(j>l){var n=document.createElement(b.slideElement);n.className=b.slideClass,n.setAttribute("data-swiperindex",j),n.innerHTML=a[j],e.wrapper.appendChild(n)}}}e.reInit(!0)}},U()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){function f(){if(a(c),c.params.queueEndCallbacks&&(c._queueEndCallbacks=!1),!b)for(var g=0;e.length>g;g++)d.removeEventListener(e[g],f,!1)}var c=this,d=c.wrapper,e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(var g=0;e.length>g;g++)d.addEventListener(e[g],f,!1)},getWrapperTranslate:function(a){var c,d,b=this.wrapper;if(window.WebKitCSSMatrix){var e=new WebKitCSSMatrix(window.getComputedStyle(b,null).webkitTransform);c=(""+e).split(",")}else{var e=window.getComputedStyle(b,null).MozTransform||window.getComputedStyle(b,null).OTransform||window.getComputedStyle(b,null).MsTransform||window.getComputedStyle(b,null).msTransform||window.getComputedStyle(b,null).transform||window.getComputedStyle(b,null).getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");c=(""+e).split(",")}return this.params.useCSS3Transforms?("x"==a&&(d=16==c.length?parseFloat(c[12]):window.WebKitCSSMatrix?e.m41:parseFloat(c[4])),"y"==a&&(d=16==c.length?parseFloat(c[13]):window.WebKitCSSMatrix?e.m42:parseFloat(c[5]))):("x"==a&&(d=parseFloat(b.style.left,10)||0),"y"==a&&(d=parseFloat(b.style.top,10)||0)),d||0},setWrapperTranslate:function(a,b,c){var d=this.wrapper.style;a=a||0,b=b||0,c=c||0,this.params.useCSS3Transforms?this.support.transforms3d?d.webkitTransform=d.MsTransform=d.msTransform=d.MozTransform=d.OTransform=d.transform="translate3d("+a+"px, "+b+"px, "+c+"px)":(d.webkitTransform=d.MsTransform=d.msTransform=d.MozTransform=d.OTransform=d.transform="translate("+a+"px, "+b+"px)",this.support.transforms||(d.left=a+"px",d.top=b+"px")):(d.left=a+"px",d.top=b+"px"),this.callPlugins("onSetWrapperTransform",{x:a,y:b,z:c})},setWrapperTransition:function(a){var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a})},h:{getWidth:function(a,b){var c=window.getComputedStyle(a,null).getPropertyValue("width"),d=parseFloat(c);return(isNaN(d)||c.indexOf("%")>0)&&(d=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(d+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),d},getHeight:function(a,b){if(b)return a.offsetHeight;var c=window.getComputedStyle(a,null).getPropertyValue("height"),d=parseFloat(c);return(isNaN(d)||c.indexOf("%")>0)&&(d=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(d+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),d},getOffset:function(a){var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var a=document.createElement("div");return"webkitPerspective"in a.style||"MozPerspective"in a.style||"OPerspective"in a.style||"MsPerspective"in a.style||"perspective"in a.style}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}()},browser:{ie8:function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!=a&&9>a}(),ie10:window.navigator.msPointerEnabled}},(window.jQuery||window.Zepto)&&function(a){a.fn.swiper=function(b){var c=new Swiper(a(this)[0],b);return a(this).data("swiper",c),c}}(window.jQuery||window.Zepto);	

var mpSB  = 0;
var mpMsg = 0;
var mpBan = 0;
var mpLog = 0;
var mpNot = 0;
var mpNotCounter = 0;
var mpMini = 0;
var mpMod = 0;
var mpSid = 0;

var funct = new Array();

var IsMobile = false;

var SwiperNoti = undefined;
var MouseOverNotification = false;
var NotificationBarOpen = false;


$(document).ready(function(){
	$("body").prepend('<div id="mpSmallbox"></div>');

	$("body").prepend('<button class="mpBotNotificationBar" id="mpNotiClose">Close</button><button class="mpBotNotificationBar" id="mpNotiClear">Clear</button>');

	var mpNoti  = "";
 		mpNoti += '<div id="mpNotificationPanel" OpenClose="close">';
 		mpNoti += '<div class="swiper-NotificationPanel swiper-container">';
 		mpNoti += '<div class="swiper-wrapper" id="mpSlides">';
 		mpNoti += '</div></div></div>'

	$("body").prepend(mpNoti);

	ReAjustSwiper();

	$("#mpNotificationPanel").bind("mouseover",function(){
		MouseOverNotification = true;
	});

	$("#mpNotificationPanel").bind("mouseleave",function(){
		MouseOverNotification = false;
	});

	// Clicking outside close menu bar
	if(CloseNotificationOnClick==true){
	
		$("body").on("click",function(){
			if(MouseOverNotification==false)
			$("#mpNotificationPanel").animate({
				right: "-350px"
			},300); //325
		})
	}


	// Enable ESC close buttom
	if(ESCclosesNotificationBar==true){
	     $('body').keyup(function(e){
	            if (e.keyCode == 27){
	                mpOpenCloseBar(300, OpenNotificationWithESC);
	            }
	        });   
	    }

	    ReLocateButtons();

	    $("#mpNotiClose").on("click",function(){
	    	mpOpenCloseBar();
	    });

	    $("#mpNotiClear").on("click",function(){
	    	
			// SwiperNoti.removeAllSlides();
			mpNotCounter = 0;
	    	ReAjustSwiper();
			
			
	    });
});


// Resize functions
$(window).on("resize",function(){

	// MessageBox Resize Window
	ResizeMSGs();

	// Banner Resize Windows
	ResizeBanner();

	// Resize Logins
	ResizeLoginBox();

	// Resize Position Smallboxes
	ResizeSmallBoxes();

	// Notification bar Buttons Positioning
	ReLocateButtons();

	// MiniBox Positioning
	RePositionMiniBox();

	// Modal Positioning
	RePositionModal();

	// SidePanel
	ReCalculatingSidePanel();


});

function ResizeBanner(){

	// Box positioning
	var windowHeight = $(window).height();
	var windowWidth  = $(window).width();

	$(".mpBanner").each(function(){

		var ThisBan = $(this);

		if(windowWidth>500){
			ThisBan.find(".mpBannerTextbox").css("width","500px");
		}

		var WidthTitle = ThisBan.find(".mpBannerTitle").width();
		var WidthText = ThisBan.find(".mpBannerTextbox").width();
		var WidthImg = ThisBan.find(".mpBannerImgboxImg").height();

		var NewWidth = WidthTitle + WidthText + WidthImg+110;

		if(windowWidth<NewWidth){
			NewWidth = windowWidth - 70;
		}else{
			NewWidth = 500;
		}

		if(windowWidth >660){
			ThisBan.find(".mpBannerContainer").css("width", 800 + "px");	
		}else{
			ThisBan.find(".mpBannerContainer").css("width", "100%");	
		}
		ThisBan.find(".mpBannerTextbox").css("width", NewWidth + "px");
	});

}


function ResizeMSGs(){

	// Box positioning
	var windowHeight = $(window).height();

	$(".mpMsgbox").each(function(){
		var ThisMsg = $(this);

		var ThisHeight = ThisMsg.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var windowWidth = $(window).width();
		var ThisWidth   = ThisMsg.find(".mpMsgContainer").width();

		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisMsg.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		var windowWidth = $(window).width();
		var OriginalWidth = ThisMsg.attr("size");
		ThisWidth = OriginalWidth.replace("px","").replace("%","");

		if(windowWidth > ThisWidth){
			// ------------------------ Has enought space to display the box
			ThisMsg.find(".mpMsgHeader").css("width",OriginalWidth);
			ThisMsg.find(".mpMsgContainer").css("width",OriginalWidth);
		}else{
			// ------------------------ Need adaptation, because the box dont fit in the screen
			ThisMsg.find(".mpMsgHeader").css("width", "98%");
			ThisMsg.find(".mpMsgContainer").css("width","98%");
		}
		
		// ==================================== Managin the height
		var imgHeight  = 0;
		var textHeight = 0;

		if(ThisMsg.find(".mpMsgImg").length>0){
			ThisMsg.find(".mpMsgImg").removeAttr("style");
			imgHeight = ThisMsg.find(".mpMsgImg").height();
		}

		var ContentHeight = ThisMsg.find(".mpMsgContent").removeAttr("style");

		textHeight = ThisMsg.find(".mpMsgContent").height();

		if(imgHeight < textHeight)
			ThisMsg.find(".mpMsgImg").css("height",textHeight + "px");

		ThisMsg.find(".mpMsgContent").css("margin-bottom","15px");
	});



}

function ResizeLoginBox(){
	// Box positioning
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var WindowOriginalWidth = windowWidth;

	$(".mpLoginBox").each(function(){
		var ThisLogin = $(this);

		var ThisHeight = ThisLogin.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var ThisWidth   = ThisLogin.find(".mpLoginContainer").width();
		var NoTitleNoContent = ThisLogin.attr("NoTitleNoContent");


		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisLogin.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		
		var OriginalWidthSize = ThisLogin.attr("size");
		OriginalWidth = OriginalWidthSize.replace("px","").replace("%","");


		if(WindowOriginalWidth > OriginalWidth){
			// ------------------------ Has enought space to display the box
			ThisLogin.find(".mpLoginHeader").css("width",OriginalWidthSize);
			ThisLogin.find(".mpLoginContainer").css("width",OriginalWidthSize);
		}else{
			// ------------------------ Need adaptation, because the box dont fit in the screen
			ThisLogin.find(".mpLoginHeader").css("width", (WindowOriginalWidth-10) + "px");
			ThisLogin.find(".mpLoginContainer").css("width",(WindowOriginalWidth-10) + "px");
		}
		
		var NewWidth = ThisLogin.find(".mpLoginContainer").width();
		


		if(NewWidth < 300){
			ThisLogin.find(".mpLoginForm").css("margin-left", "10px");
			ThisLogin.find(".mpFieldText").css("left", "90px");
			ThisLogin.find(".mpLoginText").css("font-size", "14px");

			ThisLogin.find(".mpInputcontrol").css({
				width: (WindowOriginalWidth-40) + "px",
				left: "-90px"
			});

			if(NoTitleNoContent == 0)
			{
				ThisLogin.find(".mlLoginImg").css({
					height: "35px",
	    			width: "35px",
				});
			}else{
				ThisLogin.find(".mlLoginImg").hide();
			}



			NewWidth = NewWidth - 110;
		}else{
			ThisLogin.find(".mlLoginImg").show();
			ThisLogin.find(".mpLoginForm").css("margin-left", "100px");
			ThisLogin.find(".mpFieldText").css("left", "180px");
			ThisLogin.find(".mpLoginText").css("font-size", "16px");
			
			ThisLogin.find(".mpInputcontrol").css({
				width: "90%",
				left: "0px"
			});

			ThisLogin.find(".mlLoginImg").css({
				height: "80px",
    			width: "80px",
			});

			NewWidth = NewWidth - 210;
		}

		
		ThisLogin.find(".mpFieldText").css("width", NewWidth + "px");

	});
	
}

function ReLocateButtons(){
	var windowWidth = $(window).width();

	var mpNotiClear = $("#mpNotiClear");
	var mpNotiClose = $("#mpNotiClose");

	if(windowWidth > 350){
		mpNotiClear.css("right","50px");
		mpNotiClose.css("right","185px");
	}
	else
	{	
		mpNotiClear.css("right","10px");
		mpNotiClose.css("right","145px");
	}
}


function ResizeSmallBoxes(){

	var windowWidth = $(window).width();
	var SpaceNeeded = 680;

	var NotiContainer = $("#mpNotificationPanel");
	var State = NotiContainer.attr("OpenClose");


	if(State=="open")
	{
		if(windowWidth > SpaceNeeded ){
				$("#mpSmallbox").clearQueue().animate({
				right:"370px"
			},300);
		}else{

			if(windowWidth<450){
				$("#mpSmallbox").clearQueue().animate({
					right:"0px"
				},300);
			}else{
				$("#mpSmallbox").clearQueue().animate({
					right:"25px"
				},300);
			}

			
		}
	}
	else
	{
		if(windowWidth<450){
				$("#mpSmallbox").clearQueue().animate({
					right:"0px"
				},300);
			}else{
				$("#mpSmallbox").clearQueue().animate({
					right:"25px"
				},300);
			}
	}
	
}


function ReAjustSwiper(){

	if(mpNotCounter==0){

		SwiperNoti = $(".swiper-NotificationPanel").swiper({
				mode:'vertical',
				loop: false,
				slidesPerView: 'auto',
				freeMode: true,
				visibilityFullFit:false,
				calculateHeight: false,
				autoResize: true,
				resizeReInit: true,
				// initialSlide: 0,
				freeModeFluid: true,
				mousewheelControl: true
			});

		SwiperNoti.removeAllSlides();

		var content = "";
		content += '<div id="mpEmpySlide" class="mpNotiSubContentEmpty">';
		content += '<div class="mpNotiContent" align="center">';
		content += NotificationBarEmptyText;
		content += '</div>';
		content += '</div>';


		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");
		SwiperNoti.prependSlide("&nbsp");

		var newSlide = SwiperNoti.createSlide(content);
		SwiperNoti.appendSlide(newSlide)
		SwiperNoti.swipeTo(0);

		$("#mpEmpySlide").clearQueue().animate({
			opacity: 1,
		})

		SwiperNoti.reInit();
	}
}


function RePositionMiniBox(){
	var windowWidth  = $(window).width();
	var windowHeight = $(window).height(); 

	$(".mpMiniBox").each(function(){

		var ThisMiniBox = $(this);

		var ThisHeight = ThisMiniBox.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;

		var MiddleHeight = windowHeight - ThisHeight;

		var windowWidth = $(window).width();
		var ThisWidth   = ThisMiniBox.width();

		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisMiniBox.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})

	});

}

function RePositionModal(FirstTime){
	var windowWidth   = $(window).width();
	var windowHeight  = $(window).height();

	$(".mpModalPopUp").each(function(){

		var ThisModal = $(this);

		var ThisHeight = ThisModal.height();

		windowHeight2 = windowHeight / 2;
		ThisHeight2 = ThisHeight / 2;

		var MiddleHeight = windowHeight2 - ThisHeight2 - 17;


		var ThisWidth   = ThisModal.width();

		windowWidth2    = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth2 - ThisWidth - 10;

		if(FirstTime==1){
			ThisModal.css({
				// position: "fixed",
				top: MiddleHeight + "px",
				left: MiddleWidth + "px"
			},300);
		}else{
			ThisModal.clearQueue().animate({
				// position: "fixed",
				top: MiddleHeight + "px",
				left: MiddleWidth + "px"
			},300);
		}



		// Sizing ... Height

		ThisHeight = ThisModal.attr("OriginalheightPx");

		if(windowHeight > ThisHeight){
			ThisModal.css("height",ThisModal.attr("Originalheight"));
		}else{
			ThisModal.css({
				height: (windowHeight-41) + "px",
				top: "3px",
			});
		}

		// Sizing ... Width
		
		ThisWidth = ThisModal.attr("OriginalwidthPx");

		if(windowWidth > ThisHeight){
			ThisModal.css("width",ThisModal.attr("OriginalWidth"));
		}else{
			ThisModal.css({
				width: (windowWidth-30) + "px",
				left: "5px",
			});
		}


	}); //End Each
}

function ReCalculatingSidePanel(){

	var windowWidth = $(window).width();
	var windowsHeight = $(window).height();

	$(".mpSidePanel").each(function(){

		var ThisSidePanel = $(this);
		var OriginalWidth = ThisSidePanel.attr("OriginalWidth");

		ThisSidePanel.css("width",OriginalWidth);
		var ThisWidth = ThisSidePanel.width();

		ThisSidePanel.css("height", windowsHeight + "px");

		if(parseInt(ThisWidth) > parseInt(windowWidth)){
			// console.log("entro")
			ThisSidePanel.css("width",windowWidth - 40);
		}else{
			ThisSidePanel.css("width",OriginalWidth);
		}

		


	})

}

// ========================================================================================================== mpSidePanel
$.mpSidePanel = function(settings,callback){

	var content = "";

	settings = $.extend({
        	html: "Hi!, this is some content to display in this side panel.",
        	width: "300px",
        	position: "left",
			blackscreen: false,
			title: "Side Panel",
			content: "Click here, to display the sidepanel again.",
			img: undefined,
			notificationbar: true,
			closebuttons: true,
			iframe: undefined,
			iframescrolling: false,
			animation: "bounceInLeft",
			timeout: undefined
        }, settings);

	

		mpSid +=1;

		if(settings.blackscreen==true){
				if($("#mpBlackScreenSidePanel").length==0){
			    	$("body").prepend('<div id="mpBlackScreenSidePanel"></div>');
			    	$("#mpBlackScreenSidePanel").animate({
			    		opacity: 1,
			    	},200);
			    }
		}

		if(settings.iframescrolling == true){
			settings.iframescrolling = "yes";
		}else{
			settings.iframescrolling = "no";
		}

		settings.position = settings.position.toLowerCase();

		content += '<div class="mpSidePanel mp'+ settings.position +' animated '+ settings.animation +'" id="mpSid'+ mpSid +'"  OriginalWidth="'+ settings.width +'">';

		if(settings.closebuttons==true){
				content += '<div class="mbBannerButtons mpBannerModalButtons">';
				content += '<button class="mpBannerbotClose" title="'+ LabelClose +'"></button>';
				content += '<button class="mpBannerbotMin" title="'+ LabelMinimize +'"></button>';
				content += '<button class="mpBannerbotMax" title="'+ LabelMaximize +'"></button>';
				content += '</div>';
		}

		if(settings.iframe != undefined){
			content += '<iframe width="100%" height="100%" frameborder="0" scrolling="'+ settings.iframescrolling +'" marginwidth="0" src="'+ settings.iframe +'"></iframe>';
		}
		else{
			content += '<div class="mpSidePanelContent">';
			content += settings.html;
			content += '</div>';
		}

		content += '</div>';


		$("body").prepend(content);

		var ThisSide = $("#mpSid"+mpSid);
		var ThisID   = "mpSid" + mpSid;

		ThisSide.css({
			width: settings.width,
		})


 		// ReCalculatingSidePanel();


 		function CloseSidePanel(ParentID){
			var ThisSidePanel = $("#"+ParentID);
	
			ThisSidePanel.removeClass(settings.animation).clearQueue();
			ThisSidePanel.animate({
						opacity:0
					},200,function(){
						ThisSidePanel.remove();

						var Remain = $(".mpSidePanel").length;
						if(Remain==0){

							$("#mpBlackScreenSidePanel").animate({
								opacity:0
							},200,function(){
								$(this).remove();
							});
						}

					});
		}


		// Timer 
		if(settings.timeout !=undefined){
				setTimeout(function() {
					CloseSidePanel(ThisID);
				}, settings.timeout);
		}

		// Maximize buttons
		ThisSide.find(".mpBannerbotMax").bind("click",function(){
			var windowWidth = $(window).width();
			var windowsHeight = $(window).height();

			ThisSide.css("z-index","102");

			ThisSide.animate({
				top: "0px",
				left: "0px",
				width: (windowWidth - 40) + "px",
				height: (windowsHeight - 55) + "px",
			},300);

			if (typeof callback == "function") 
            {   
                if(callback) callback("botMax");
            }
			
		});

		// Minimize button
		ThisSide.find(".mpBannerbotMin").bind("click",function(){
			var OriginalWidth  = ThisSide.attr("Originalwidth");
			var Originalheight = ThisSide.attr("Originalheight");

			ThisSide.css("z-index","101");

			ThisSide.animate({
				height:Originalheight,
				width: OriginalWidth
			},300,function(){
				RePositionModal();	
			})

			if (typeof callback == "function") 
            {   
                if(callback) callback("botMin");
            }
			
		});

		// Close Button
		ThisSide.find(".mpBannerbotClose").bind("click",function(){
			CloseSidePanel(ThisID);

			if (typeof callback == "function") 
            {   
                if(callback) callback("botClose");
            }
		});



		if(settings.notificationbar == true){

			var Now = new Date();
	        var DateFormat = "Just now at "  + Now.getHours() + ":" + Now.getMinutes();

	        var call = undefined;
			if (typeof callback == "function") 
            {   
                call = callback;
            }

            if(settings.iframescrolling == "yes"){
				settings.iframescrolling = true;
			}else{
				settings.iframescrolling = false;
			}



			$.mpNotificationPanel( 
					{
						
						title: settings.title,
						img: settings.img,
						clearbutton: true,
						items: [{
									title: settings.title,
									date: DateFormat,
									content: settings.content,
									callback: function(){
											$.mpSidePanel({
												html: settings.html,
												width: settings.width,
												position: settings.position,
												blackscreen: settings.blackscreen,
												title: settings.title,
												content: settings.content,
												img: settings.img,
												notificationbar: false,
												closebuttons: settings.closebuttons,
												iframe: settings.iframe,
												iframescrolling: settings.iframescrolling,
												animation: settings.animation,
												timeout: settings.timeout,
											},call)
										}
								}]
					});
			}

			ReCalculatingSidePanel();


}


// ========================================================================================================== mpInputBox
$.mpInputBox = function (settings,callback) 
    {
        var content = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
        	type: "text",
        	selectvalues: undefined,
        	withheader: true,
        	headertext: '',
        	width: "493px",
            title: undefined,
            content: '',
            img: undefined,
            draggable: true,
            placeholder: "",
            buttons: "[Accept]",
            animation: "fadeIn"
        }, settings);

        mpLog +=1;

        // Black Screen
        if($("#mpBlackScreen").length==0){
        	$("body").prepend('<div id="mpBlackScreen"></div>');
        	$("#mpBlackScreen").animate({
        		opacity: 1,
        	},200);
        }

        var NoTitleNoContent = 0;
        if(settings.title == undefined && settings.content== undefined)
        	NoTitleNoContent = 1;

        var BlackScreen = $("#mpBlackScreen");
        var ThisID = "mpLog"+ mpLog;

		content += '<div class="mpLoginBox animated '+ settings.animation +'" id="mpLog'+ mpLog +'" size="'+ settings.width +'" NoTitleNoContent="'+ NoTitleNoContent +'">';
		
		if(settings.withheader ==true){
			content += '<div class="mpLoginHeader" align="center" style="width: '+ settings.width +'">';
			content += settings.headertext;
			content += '</div>';
		}

		content += '<div class="mpLoginContainer" style="width: '+ settings.width +'">';

		if(settings.img != undefined){
			content += '<div class="mpLoginImgBox">';
			content += '<img src="'+ settings.img +'" class="mlLoginImg">';
			content += '</div>';
		}

		content += '<div class="mpLoginText">';

		if(settings.title!=undefined){
			content += '<span class="mpLoginTitle">'+ settings.title +'</span>';
		}

		content += settings.content;
		content += '</div>';
		content += '<div class="mpInputBoxContainer">';
		content += '<div class="mpFieldInput">';
		
		// Type of input
		switch(settings.type){
			case "text":
				content += '<input class="mpInputcontrol" type="text" placeholder="'+ settings.placeholder +'">';
			break;

			case "password":
				content += '<input class="mpInputcontrol" type="password" placeholder="'+ settings.placeholder +'">';
			break;

			case "select":
				if(settings.selectvalues==undefined){
					alert("selectvalues property is required, when you are trying to use a select type inputbox.");
					return 0;
				}
					content += '<select class="mpInputcontrol">';
					for (var i = 0; i <= settings.selectvalues.length-1; i++) 
			        {
			            if(settings.selectvalues[i]=="[")
			            {
			                Name = "";
			            }
			            else
			            {
			                if(settings.selectvalues[i]=="]")
			                {
			                    ButtonNumber = ButtonNumber + 1;
			                    Name = "<option value='"+ Name +"'> " + Name + "</option>";
			                    content += Name;
			                }
			                else
			                {
			                    Name += settings.selectvalues[i];
			                }
			            }
			        };
			        content += '</select>';

			break;
		}
		
		


		content += '</div>';
		content += '<div class="mpInputFieldSpace">';
		
		for (var i = 0; i <= settings.buttons.length-1; i++) 
		        {
		            if(settings.buttons[i]=="[")
		            {
		                Name = "";
		            }
		            else
		            {
		                if(settings.buttons[i]=="]")
		                {
		                    ButtonNumber = ButtonNumber + 1;
		                    Name = "<button class='mpInputButtonToPresss' parentID='"+ ThisID +"' name='"+ Name +"'> " + Name + "</button>";
		                    content += Name;
		                }
		                else
		                {
		                    Name += settings.buttons[i];
		                }
		            }
		        };
		
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';

		BlackScreen.prepend(content);

		var ThisLoging = $("#" + ThisID);
		
		if(settings.draggable===true)
			{
				// ThisLoging.draggable();
				ThisLoging.draggable({
				start: function(event, ui) {
					ThisLoging.removeClass(settings.animation).clearQueue().animate({
						opacity: "0.50",
					})
					
				},
				stop: function(){
					ThisLoging.clearQueue().animate({
						opacity: "1"
					})
				}
			});
			}
		else
			ThisLoging.find(".mpLoginHeader").css("cursor","inherit");


		var ThisHeight = ThisLoging.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var ThisWidth   = ThisLoging.find(".mpLoginContainer").width();

		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisLoging.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var WindowOriginalWidth = windowWidth;
		var ThisHeight = ThisLoging.height();

	

		var ThisHeight = ThisLoging.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var ThisWidth   = ThisLoging.find(".mpLoginContainer").width();
		var NoTitleNoContent = ThisLoging.attr("NoTitleNoContent");


		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisLoging.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		
		var OriginalWidthSize = ThisLoging.attr("size");
		OriginalWidth = OriginalWidthSize.replace("px","").replace("%","");


		if(WindowOriginalWidth > OriginalWidth){
			// ------------------------ Has enought space to display the box
			ThisLoging.find(".mpLoginHeader").css("width",OriginalWidthSize);
			ThisLoging.find(".mpLoginContainer").css("width",OriginalWidthSize);
		}else{
			// ------------------------ Need adaptation, because the box dont fit in the screen
			ThisLoging.find(".mpLoginHeader").css("width", (WindowOriginalWidth-10) + "px");
			ThisLoging.find(".mpLoginContainer").css("width",(WindowOriginalWidth-10) + "px");
		}
		
		var NewWidth = ThisLoging.find(".mpLoginContainer").width();
		


		if(NewWidth < 300){
			ThisLoging.find(".mpLoginForm").css("margin-left", "10px");
			ThisLoging.find(".mpFieldText").css("left", "90px");
			ThisLoging.find(".mpLoginText").css("font-size", "14px");

			if(NoTitleNoContent == 0)
			{
				ThisLoging.find(".mlLoginImg").css({
					height: "35px",
	    			width: "35px",
				});
			}else{
				ThisLoging.find(".mlLoginImg").hide();
			}



			NewWidth = NewWidth - 110;
		}else{
			ThisLoging.find(".mlLoginImg").show();
			ThisLoging.find(".mpLoginForm").css("margin-left", "100px");
			ThisLoging.find(".mpFieldText").css("left", "180px");
			ThisLoging.find(".mpLoginText").css("font-size", "16px");

			ThisLoging.find(".mlLoginImg").css({
				height: "80px",
    			width: "80px",
			});

			NewWidth = NewWidth - 210;
		}

		
		ThisLoging.find(".mpFieldText").css("width", NewWidth + "px");
		ResizeLoginBox();

		// ----------------------------- box Behavior
		ThisLoging.find(".mpField1").focus();

		function CloseThisInput(ParentID){
			var CloseThis = $("#"+ParentID);

			CloseThis.removeClass(settings.animation).clearQueue().animate({
				opacity: 0
			},200,function(){
				CloseThis.remove();
				var Remain = $("#mpMSGcontainer").find(".mpLoginBox").length;
				if(Remain==0){

					$("#mpBlackScreen").animate({
						opacity:0
					},200,function(){
						$(this).remove();
					});

				}
			})

		}


		ThisLoging.find(".mpInputButtonToPresss").bind("click",function(){

			var ButtonPress = $(this).attr("name");
			var Value = ThisLoging.find(".mpInputcontrol").val();

			if (typeof callback == "function") 
	            {   
	                if(callback) callback(Value, ButtonPress);
	            }

	        //------ Close the div
	        CloseThisInput(ThisID);

		});




		

	} // .mp InputBox


// ========================================================================================================== mpModalPopUp

$.mpModalPopUp = function(settings,callback){

	var content = "";

	settings = $.extend({
        	html: "Loading...",
        	width: "300px",
        	height: "300px",
			blackscreen: true,
			title: "Popup",
			content: "Click here, to display the PopUp again.",
			img: undefined,
			notificationbar: true,
			close: true,
			iframe: undefined,
			iframescrolling: false,
			draggable: true,
			animation: "bounceInDown",
			timeout: undefined
        }, settings);

		mpMod += mpMod+1;

		if(settings.blackscreen==true){
				if($("#mpBlackScreenModal").length==0){
			    	$("body").prepend('<div id="mpBlackScreenModal"></div>');
			    	$("#mpBlackScreenModal").animate({
			    		opacity: 1,
			    	},200);
			    }
		}

		var HasIframe = false;
		if(settings.iframe !=undefined)
			HasIframe = true;

		content += '<div class="mpModalPopUp animated '+ settings.animation +'" id="mpMod'+ mpMod +'" Originalwidth="'+ settings.width +'" Originalheight="'+ settings.height +'">';
		
		if(settings.close == true){
			// content += '<button class="mpModalPopClose">X</button>';
			content += '<div class="mbBannerButtons mpBannerModalButtons">';
			content += '<button class="mpBannerbotClose" title="'+ LabelClose +'"></button>';
			content += '<button class="mpBannerbotMin" title="'+ LabelMinimize +'"></button>';
			content += '<button class="mpBannerbotMax" title="'+ LabelMaximize +'"></button>';
			content += '</div>';
		}


		content += '<div class="mpModalPopUpContainer">';

		if(HasIframe==true){
			var Scrollable = "no"
			if(settings.iframescrolling == true)
				Scrollable = "yes";

			content += '<iframe width="100%" height="100%" frameborder="0" scrolling="'+ Scrollable +'" marginheight="0" marginwidth="0" src="'+ settings.iframe +'"></iframe>'
		}else{
			content += settings.html;
		}
		content += '</div>';
		content += '</div>';

		$("body").prepend(content);
		var ThisModal = $("#mpMod"+mpMod);
		var ThisID    = "mpMod" + mpMod;


		ThisModal.css({
			width: settings.width,
			height: settings.height
		});

		ThisModal.attr("OriginalheightPx",ThisModal.height()+40);
		ThisModal.attr("OriginalwidthPx",ThisModal.width() );

		RePositionModal(1);

		

		ThisModal.clearQueue().animate({
			opacity:1
		},300).css("opacity","0");


		// Draggable
		if(settings.draggable==true){
			ThisModal.draggable({
				start: function(event, ui) {
					$(".mpModalPopUp").css("z-index","110").removeClass(settings.animation).clearQueue();

					ThisModal.animate({
						opacity: "0.50",
					})

					ThisModal.css("z-index","111");

					
				},
				stop: function(){
					ThisModal.clearQueue().animate({
						opacity: "1"
					})
				}
			});
			ThisModal.css("cursor","move");


		}


		// Maximize buttons
		ThisModal.find(".mpBannerbotMax").bind("click",function(){
			var windowWidth = $(window).width();
			var windowsHeight = $(window).height();

			ThisModal.css("z-index","102");

			ThisModal.animate({
				top: "10px",
				left: "10px",
				width: (windowWidth - 40) + "px",
				height: (windowsHeight - 55) + "px",
			},300);

			if (typeof callback == "function") 
            {   
                if(callback) callback("botMax");
            }
			
		});

		// Minimize button
		ThisModal.find(".mpBannerbotMin").bind("click",function(){
			var OriginalWidth  = ThisModal.attr("Originalwidth");
			var Originalheight = ThisModal.attr("Originalheight");

			ThisModal.css("z-index","101");

			ThisModal.animate({
				height:Originalheight,
				width: OriginalWidth
			},300,function(){
				RePositionModal();	
			})

			if (typeof callback == "function") 
            {   
                if(callback) callback("botMin");
            }
			
		});

		// Close Button
		ThisModal.find(".mpBannerbotClose").bind("click",function(){
			CloseModal(ThisID);

			if (typeof callback == "function") 
            {   
                if(callback) callback("botClose");
            }
		})


		function CloseModal(ParentID){
			var ThisModal = $("#"+ParentID);
	
			ThisModal.removeClass(settings.animation);
			ThisModal.addClass("fadeOut fast").animate({
						opacity:0
					},100,function(){
						ThisModal.remove();

						var Remain = $(".mpModalPopUp").length;
						if(Remain==0){

							$("#mpBlackScreenModal").animate({
								opacity:0
							},200,function(){
								$(this).remove();
							});
						}

					});
		}

		// Close
		if(settings.close == true){

			ThisModal.find(".mpModalPopClose").bind("click",function(){

				CloseModal(ThisID);
			});
		} // End Settings Close


		// Timer 
		if(settings.timeout !=undefined){
				setTimeout(function() {
					CloseModal(ThisID);
				}, settings.timeout);
		}

		// Show on notification bar
		if(settings.notificationbar == true){
			
			var Now = new Date();
	        var DateFormat = "Just now at "  + Now.getHours() + ":" + Now.getMinutes();

	        var call = undefined;
			if (typeof callback == "function") 
            {   
                call = callback;
            }

			$.mpNotificationPanel( 
				{
					
					title: settings.title,
					img: settings.img,
					clearbutton: true,
					items: [{
								title: settings.title,
								date: DateFormat,
								content: settings.content,
								callback: function(){
										$.mpModalPopUp({
											html: settings.html,
											width: settings.width,
											height: settings.height,
											blackscreen: settings.blackscreen,
											title: settings.title,
											content: settings.content,
											img: settings.img,
											notificationbar: false,
											close: settings.close,
											iframe: settings.iframe,
											iframescrolling: settings.iframescrolling,
											draggable: settings.draggable,
											animation: settings.animation,
											timeout: settings.timeout
										},call)
									}
							}]
				});
		}

}




// ========================================================================================================== mpMiniBox
$.mpMiniBox = function(settings,callback){

	var content = "";

	settings = $.extend({
        	content: "Loading...",
			cssloading: true,
			blackscreen: true,
			img: undefined,
			blink: true,
			clicktoclose: false,
			closeonclick: false,
			timeout: undefined
        }, settings);

	 // Black Screen
	 if(settings.blackscreen==true){
	     if($("#mpBlackScreenMini").length==0){
	     	$("body").prepend('<div id="mpBlackScreenMini"></div>');
	     	$("#mpBlackScreenMini").animate({
	     		opacity: 1,
	     	},200);
	     }
	 }

	 mpMini += 1;

	 var LabelCss = "mpMiniBoxLabel";
	 var Pointer = "";

	 	if(settings.closeonclick == true){
	 		Pointer = "mpMiniPointer";
	 	}

		content += '<div class="mpMiniBox '+ Pointer +'" id="mpMiniBox'+ mpMini +'">';
		content += '<div class="mpMiniBoxImgContainer" align="center">';

		if(settings.cssloading == true){
				
				LabelCss = "mpMiniBoxLabelSpecial";

				content += '<div class="mpSpecialLoading">';
				content += '<div class="circle"></div>';
				content += '<div class="circle1"></div>';
				content += '</div>';
			}

		if(settings.cssloading == false && settings.img !=undefined){
				content += '<img src="'+ settings.img +'">';
			}

		content += '<div class="mpLoadingText '+ LabelCss +'" status="show">';
		content += settings.content;
		content += '</div>';

		content += '</div>';
		content += '</div>';


		$(".mpMiniBox").each(function(){
			$(this).remove();
		});

		$("body").prepend(content);

		var ThisID = "mpMiniBox"+mpMini;
		var ThisLoading = $("#"+ ThisID);


		ThisLoading.animate({
			opacity: 1
		})


		RePositionMiniBox();
		var BlinkInterval= "";

		if(settings.blink == true){
		
				BlinkInterval = setInterval(function(){	
					var ThisLabel = $(".mpLoadingText");
		
					var Status = ThisLabel.attr("status");
		
						if(Status=="show"){
								ThisLabel.animate({
									opacity:0
								},500,function(){
									ThisLabel.attr("status","hide");
								});
						}else{
							ThisLabel.animate({
									opacity:1
								},500,function(){
									ThisLabel.attr("status","show");
								});
						}
				},1000);
		
		}


		// TimeOut
		if(settings.timeout != undefined){

			setTimeout(function() {

				clearInterval(BlinkInterval);

				if(typeof callback == "function"){
						if(callback) callback();
				}
				
				ThisLoading.animate({
					opacity:0
				},300,function(){
					ThisLoading.remove();

					var Remain = $(".mpMiniBox").length;
					if(Remain==0){

						$("#mpBlackScreenMini").animate({
							opacity:0
						},200,function(){
							$(this).remove();
						});
					}

				});


			}, settings.timeout);


		}

		ThisLoading.bind("click",function(){
				if(settings.closeonclick == true){
					clearInterval(BlinkInterval);
					if(typeof callback == "function"){
						if(callback) callback();

						ThisLoading.removeClass(settings.animation).clearQueue().animate({
							opacity:0
						},300,function(){
							ThisLoading.remove();

							var Remain = $(".mpMiniBox").length;
							if(Remain==0){

								$("#mpBlackScreenMini").animate({
									opacity:0
								},200,function(){
									$(this).remove();
								});
							}
						})

					}
				}
			})
}




// ========================================================================================================== Notification Panel

$.mpNotificationPanel = function (settings,callback) 
    {
    	if(mpNotCounter==0){
			SwiperNoti.removeAllSlides();
    	}
    	SwiperNoti.swipeTo(0);


    	SwiperNoti.reInit();
        var content = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
        	title: "",
			img: undefined,
			clearbutton: true
        }, settings);

        mpNot +=1;
        mpNotCounter +=1;
		content += '<div class="mpNotititle" id="mpNot'+ mpNot +'">';

		if(settings.img !=undefined){
				content += '<div class="mpTitleimgbox">';
				content += '<img class="mpNotiImg" src="'+ settings.img +'">';
				content += '</div>';
		}

		content += '<div class="mpNotiTitlebox">';
		content += settings.title;
		content += '</div>';
		
		if(settings.clearbutton == true){
				content += '<div class="mpCloseNotiContainer">';
				content += '<button class="mpCloseNotiGroup" close="mpNot' + mpNot +'">X</button>';
				content += '</div>';
		}

		content += '</div>';




        var newSlide = SwiperNoti.createSlide(content);
		var InsertedHeader = SwiperNoti.prependSlide(newSlide)
		SwiperNoti.reInit();

		ReAjustSwiper();


		// Remove button
		if(settings.clearbutton == true){
			$("#mpNotificationPanel").on("click",".mpCloseNotiGroup",function(){

				var ClearReady = $(this).html();

				if(ClearReady=="clear"){
								
							var ToRemove = $(this).attr("close");
							for (var i = SwiperNoti.slides.length-1; i >=0; i--) {
							  var slide = SwiperNoti.slides[i]
							  var HasTheClass = slide.html().indexOf('close="'+ToRemove);
			
			   				  if(HasTheClass>0){
			   				  	mpNotCounter -=1;
			   				  	SwiperNoti.removeSlide(i);
			   				  	SwiperNoti.reInit();
			   				  	ReAjustSwiper();
			   				  	SwiperNoti.swipePrev();
			   				  }
							}
				}else{
					$(this).clearQueue().animate({
							width: "45px"
						},100,function(){
							$(this).html("clear");
						})	
				}

				
			})

		}


		var ThisID = "mpNot" + mpNot;
		var ThisSlide = $("#" + ThisID);

		ThisSlide.slideDown(150);
		


		if(settings.items == undefined)
			return 0


		// Create a notification for each point
		for(var i=0; i<=settings.items.length-1; i++){

			content = "";

			var Title    = "";
			var DateTime = "";
			var Content  = "";

			if(settings.items[i].title == undefined)
				Title = "&nbsp";
			else
				Title = settings.items[i].title;

			if(settings.items[i].date == undefined)
				DateTime = "&nbsp";
			else
				DateTime = settings.items[i].date;

			if(settings.items[i].content == undefined)
				Content = "&nbsp";
			else
				Content = settings.items[i].content;


			// if(settings.items[i].callback)
			// settings.items[i].callback.call(function(){console.log("123")});
			mpNot   +=1;
			mpNotCounter +=1;

			content += '<div id="mpItem'+ mpNot +'" index="'+ mpNot +'" class="mpNotiSubContent" close="' + ThisID +'">';

			content += '<div class="mpNotiSubTitle">';
			content += '<div class="left">'+ Title +'</div>';
			content += '<div class="right">' + DateTime + '</div>';
			content += '<br>';
			content += '</div>';
			content += '<div class="mpNotiContent">';
			content += Content;
			content += '</div>';

			if(i>0)
				content += '<div class="mpSpacerContainer" align="center" close="mpNot' + mpNot +'"><div class="mpSpacer"></div></div>';
			
			content += '</div>';

			
			var newSlide = SwiperNoti.createSlide(content);
			SwiperNoti.insertSlideAfter(0,newSlide)
			SwiperNoti.reInit();


			if(typeof settings.items[i].callback == "function"){
				funct[mpNot] = settings.items[i].callback;
					$("#mpItem"+mpNot).bind("click",function(){
						var index = $(this).attr("index");
			                funct[index].call();

					})
			}
		}

		ReAjustSwiper();
		
		// SwiperNoti = $(".swiper-NotificationPanel").swiper({
		// 		mode:'vertical',
		// 		loop: false,
		// 		slidesPerView: 'auto',
		// 		freeMode: true,
		// 		visibilityFullFit:false,
		// 		calculateHeight: false,
		// 		autoResize: true,
		// 		resizeReInit: true,
		// 		initialSlide: 0,
		// 		freeModeFluid: true,
		// 		mousewheelControl: true
		// 	});

		SwiperNoti.reInit();


    }







// ========================================================================================================== Login
$.mpLogin = function (settings,callback) 
    {
        var content = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
        	withheader: true,
        	headertext: '',
        	width: "493px",
            title: undefined,
            content: '',
            img: undefined,
            draggable: true,
            Label1: "Name",
            Label2: "Password",
            buttoncancel: "Cancel",
            buttonunlock: "Unlock",
            animation: ""
        }, settings);

        mpLog +=1;

        // Black Screen
        if($("#mpBlackScreen").length==0){
        	$("body").prepend('<div id="mpBlackScreen"></div>');
        	$("#mpBlackScreen").animate({
        		opacity: 1,
        	},200);
        }

        var NoTitleNoContent = 0;
        if(settings.title == undefined && settings.content== undefined)
        	NoTitleNoContent = 1;

        var BlackScreen = $("#mpBlackScreen");
        var ThisID = "mpLog"+ mpLog;

		content += '<div class="mpLoginBox animated '+ settings.animation +'" id="mpLog'+ mpLog +'" size="'+ settings.width +'" NoTitleNoContent="'+ NoTitleNoContent +'">';
		
		if(settings.withheader ==true){
			content += '<div class="mpLoginHeader" align="center" style="width: '+ settings.width +'">';
			content += settings.headertext;
			content += '</div>';
		}

		content += '<div class="mpLoginContainer" style="width: '+ settings.width +'">';

		if(settings.img != undefined){
			content += '<div class="mpLoginImgBox">';
			content += '<img src="'+ settings.img +'" class="mlLoginImg">';
			content += '</div>';
		}

		content += '<div class="mpLoginText">';

		if(settings.title!=undefined){
			content += '<span class="mpLoginTitle">'+ settings.title +'</span>';
		}

		content += settings.content;
		content += '</div>';
		content += '<div class="mpLoginForm">';
		content += '<div class="mpField">';
		content += '<label>'+ settings.Label1 +'</label>';
		content += '<input class="mpField1 mpFieldText" type="text" placeholder="'+ settings.Label1 +'">';
		content += '</div>';
		content += '<div class="mpField">';
		content += '<label>'+ settings.Label2 +'</label>';
		content += '<input class="mpField2 mpFieldText" type="password" placeholder="'+ settings.Label2 +'">';
		content += '</div>';
		content += '<div class="mbLoginButtonBox">';
		content += '<button class="mpLoginbotCancel">'+ settings.buttoncancel +'</button>';
		content += '<button class="mpLoginbotUnlock">'+ settings.buttonunlock +'</button>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';

		BlackScreen.prepend(content);

		var ThisLoging = $("#" + ThisID);
		
		if(settings.draggable===true){
			ThisLoging.draggable({
				start: function(event, ui) {
					$(".mpLoginBox").css("z-index","110").removeClass(settings.animation).clearQueue();

					ThisLoging.animate({
						opacity: "0.50",
					})

					ThisLoging.css("z-index","111");

					
				},
				stop: function(){
					ThisLoging.clearQueue().animate({
						opacity: "1"
					})
				}
			});
		}
		else
			ThisLoging.find(".mpLoginHeader").css("cursor","inherit");


		var ThisHeight = ThisLoging.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var ThisWidth   = ThisLoging.find(".mpLoginContainer").width();

		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisLoging.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var WindowOriginalWidth = windowWidth;
		var ThisHeight = ThisLoging.height();

	

		var ThisHeight = ThisLoging.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var ThisWidth   = ThisLoging.find(".mpLoginContainer").width();
		var NoTitleNoContent = ThisLoging.attr("NoTitleNoContent");


		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisLoging.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})


		// Box Resizing
		// ===================================== Managing the Size
		
		var OriginalWidthSize = ThisLoging.attr("size");
		OriginalWidth = OriginalWidthSize.replace("px","").replace("%","");


		if(WindowOriginalWidth > OriginalWidth){
			// ------------------------ Has enought space to display the box
			ThisLoging.find(".mpLoginHeader").css("width",OriginalWidthSize);
			ThisLoging.find(".mpLoginContainer").css("width",OriginalWidthSize);
		}else{
			// ------------------------ Need adaptation, because the box dont fit in the screen
			ThisLoging.find(".mpLoginHeader").css("width", (WindowOriginalWidth-10) + "px");
			ThisLoging.find(".mpLoginContainer").css("width",(WindowOriginalWidth-10) + "px");
		}
		
		var NewWidth = ThisLoging.find(".mpLoginContainer").width();
		


		if(NewWidth < 300){
			ThisLoging.find(".mpLoginForm").css("margin-left", "10px");
			ThisLoging.find(".mpFieldText").css("left", "90px");
			ThisLoging.find(".mpLoginText").css("font-size", "14px");

			if(NoTitleNoContent == 0)
			{
				ThisLoging.find(".mlLoginImg").css({
					height: "35px",
	    			width: "35px",
				});
			}else{
				ThisLoging.find(".mlLoginImg").hide();
			}



			NewWidth = NewWidth - 110;
		}else{
			ThisLoging.find(".mlLoginImg").show();
			ThisLoging.find(".mpLoginForm").css("margin-left", "100px");
			ThisLoging.find(".mpFieldText").css("left", "180px");
			ThisLoging.find(".mpLoginText").css("font-size", "16px");

			ThisLoging.find(".mlLoginImg").css({
				height: "80px",
    			width: "80px",
			});

			NewWidth = NewWidth - 210;
		}

		
		ThisLoging.find(".mpFieldText").css("width", NewWidth + "px");
		ResizeLoginBox();

		// ----------------------------- box Behavior
		ThisLoging.find(".mpField1").focus();

		function CloseLoginBox(ParentID){
			var CloseThis = $("#"+ParentID);

			CloseThis.removeClass(settings.animation).clearQueue().animate({
				opacity: 0
			},200,function(){
				CloseThis.remove();
				var Remain = $("#mpMSGcontainer").find(".mpLoginBox").length;
				if(Remain==0){

					$("#mpBlackScreen").removeClass(settings.animation).clearQueue().animate({
						opacity:0
					},200,function(){
						$(this).remove();
					});

				}
			})

		}


		ThisLoging.find(".mpLoginbotCancel").bind("click",function(){

			if (typeof callback == "function") 
	            {   
	                if(callback) callback("botClose","none","none");
	                //------ Close the div
	                
	            }
	        CloseLoginBox(ThisID);

		});

		ThisLoging.find(".mpLoginbotUnlock").bind("click",function(){

			var Name = ThisLoging.find(".mpField1").val();
			var Pass = ThisLoging.find(".mpField2").val();

			if(Name.length ==0){
				ThisLoging.find(".mpField1").focus();
				return 0;
			}

			if(Pass.length ==0){
				ThisLoging.find(".mpField2").focus();
				return 0;
			}


			if (typeof callback == "function") 
	            {   
	                if(callback) callback("botUnlock",Name, Pass);
	                //------ Close the div
	                
	            }
	        CloseLoginBox(ThisID);
		});


		

	} // .mp Login




// ========================================================================================================== Mp Banner
$.mpBanner = function (settings,callback) 
    {
        var content = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
        	position: "top",
            title: undefined,
            content: '',
            img: undefined,
            timeout: undefined,
            animation: "",
            notificationbar: false,
            withbuttons: true,
        }, settings);

        mpBan +=1;

        if(settings.position == "top")
			content += '<div class="mpBanner mpBannerTop animated '+ settings.animation +'" id="mpBan'+ mpBan+'">';
		else
			content += '<div class="mpBanner mpBannerBottom animated '+ settings.animation +'" id="mpBan'+ mpBan+'">';
			
			if(settings.withbuttons == true){
				content += '<div class="mbBannerButtons">';
				content += '<button class="mpBannerbotClose" title="'+ LabelClose +'"></button>';
				content += '<button class="mpBannerbotMin" title="'+ LabelMinimize +'"></button>';
				content += '<button class="mpBannerbotMax" title="'+ LabelMaximize +'"></button>';
				content += '</div>';
			}


			content += '<div align="center">';
			content += '<div class="mpBannerContainer">';

			if(settings.title != undefined){
				content += '<div class="mpBannerTitle">'+ settings.title +'</div>';
			}

			content += '<div class="mpBannerTextbox" align="center">';
			content += settings.content;
			content += '</div>';

			if(settings.img != undefined){
				content += '<div class="mpBannerImgbox">';
				content += '<img src="'+ settings.img +'" class="mpBannerImgboxImg">';
				content += '</div>';
			}

			content += '</div>';
			content += '</div>';
			content += '</div>';

			$("body").prepend(content);

			var ThisID  = "mpBan" + mpBan;
			var ThisBan = $("#" + ThisID);

			ThisBan.animate({
				opacity:1
			},300)

			ResizeBanner();

			function CloseBanner(ParentID){
				
				var ThisBanner = $("#"+ParentID);


				var isOnTop =  ThisBanner.hasClass("mpBannerTop");
				if(isOnTop == true){
						ThisBanner.removeClass(settings.animation).clearQueue().animate({
						opacity: 0,
						top: "-"+ThisBanner.height() + "px"
					},300,function(){$(this).remove()});

				}else{

					ThisBanner.removeClass(settings.animation).clearQueue().animate({
						opacity: 0,
						bottom: "-"+ThisBanner.height() + "px"
					},300,function(){$(this).remove()});

				}

				

			}

			// ============================================= Timeout function MSGbox
			if(settings.timeout!=undefined){
				setTimeout(function(){
					CloseBanner(ThisID);
				},settings.timeout)
			}

			//------------------------------------------------- Buttons Actions
			ThisBan.find(".mpBannerbotClose").bind("click",function(){
				if (typeof callback == "function") 
	            {   
	                if(callback) callback("botClose");
	            }

	            //------ Close the div
	            CloseBanner(ThisID);
				
			});

			ThisBan.find(".mpBannerbotMax").bind("click",function(){
				CloseBanner(ThisID);
				if (typeof callback == "function") 
	            {   
	                if(callback) callback("botMax");
	            }

				$("body").delay(300).clearQueue().queue(function(){
					$.mpMessageBox( 
						{
							withheader: false,
				        	headertext: '',
				        	// width: "460px",
				            title: settings.title,
				            content: settings.content,
				            img: settings.img,
				            timeout: undefined,
				            draggable: false,
				            buttons: "[close]",
				            animation: ""
						});
				})
			});

			ThisBan.find(".mpBannerbotMin").bind("click",function(){
				CloseBanner(ThisID);
				var call = undefined;

				if (typeof callback == "function") 
	            {   
	                if(callback) callback("botMin");
	                call = callback;
	            }

				$.mpNotificationPanel( 
				{
					
					title: settings.title,
					img: settings.img,
					clearbutton: true,
					items: [{
								title: settings.title,
								date: "Just now",
								content: settings.content,
								callback: function(){$.mpBanner({
											position: settings.position,
									        title: settings.title,
									        content: settings.content,
									        img: settings.img,
									        animation: settings.animation,
									        notificationbar: settings.notificationbar,
									        withbuttons: settings.withbuttons,
										},call)}
							}]
				});
			})



			// Notification Bar preventing close
			ThisBan.bind("mouseover",function(){
				MouseOverNotification = true;
			});

			ThisBan.bind("mouseleave",function(){
				MouseOverNotification = false;
			});

			// Create a new instance for the notification bar
			if(settings.notificationbar == true){

				var call = undefined;
				if (typeof callback == "function") 
	            {   
	                // if(callback) callback("botMin");
	                call = callback;
	            }

	            $.mpNotificationPanel( 
				{
					
					title: settings.title,
					img: settings.img,
					clearbutton: true,
					items: [{
								title: settings.title,
								date: "Just now",
								content: settings.content,
								callback: function(){$.mpBanner({
											position: settings.position,
									        title: settings.title,
									        content: settings.content,
									        img: settings.img,
									        animation: settings.animation,
									        notificationbar: false,
									        withbuttons: settings.withbuttons,
										},call)}
							}]
				});


			}

    } //.banner end





// ========================================================================================================== MessageBox
$.mpMessageBox = function (settings,callback) 
    {
        var content = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
        	withheader: true,
        	headertext: '',
        	width: "460px",
            title: undefined,
            content: '',
            img: undefined,
            timeout: undefined,
            draggable: true,
            buttons: undefined,
            animation: ""
        }, settings);

        mpMsg +=1;

        // Black Screen
        if($("#mpBlackScreen").length==0){
        	$("body").prepend('<div id="mpBlackScreen"></div>');
        	$("#mpBlackScreen").animate({
        		opacity: 1,
        	},200);
        }

        var BlackScreen = $("#mpBlackScreen");


        if($("#mpMSGcontainer").length == 0){
        	BlackScreen.append('<div id="mpMSGcontainer" align="center"></div>');
        }


        var MsgContainer = $("#mpMSGcontainer");
        var ThisID = "mpMsg"+ mpMsg;

			content += '<div class="mpMsgbox animated '+ settings.animation +'" id="mpMsg'+ mpMsg +'" size="'+ settings.width +'">';

			if(settings.withheader == true){
				content += '<div class="mpMsgHeader">';
				content += settings.headertext;
				content += '</div>';	
			}

			
			content += '<div class="mpMsgContainer">';
			content += '<br>';

			if(settings.img !=undefined){
				content += '<div class="mpMsgImg">';
				content += '<img src="' + settings.img + '">';
				content += '</div>';
			}

			content += '<div class="mpMsgContent" align="left">';

			if(settings.title !=undefined){
				content += '<span class="mpMsgTitle">'+ settings.title +'</span><br/>';
			}

			content += '<span class="mpMsgText">'+ settings.content +'</span>';
			content += '</div>';
			content += '';
			
			if(settings.buttons != undefined){
				content += '<div class="mpMsgButtons" align="right">';
				
				for (var i = 0; i <= settings.buttons.length-1; i++) 
		        {
		            if(settings.buttons[i]=="[")
		            {
		                Name = "";
		            }
		            else
		            {
		                if(settings.buttons[i]=="]")
		                {
		                    ButtonNumber = ButtonNumber + 1;
		                    Name = "<button parentID='"+ ThisID +"' name='"+ Name +"'> " + Name + "</button>";
		                    content += Name;
		                }
		                else
		                {
		                    Name += settings.buttons[i];
		                }
		            }
		        };

				content += '</div>';
			}  // .mpMsgButtons
			


			content += '</div>';
			content += '</div>';

		
		MsgContainer.append(content);
		var ThisMsg = $("#"+ThisID);

		if(settings.draggable===true)
			ThisMsg.draggable({
				start: function(event, ui) {
					ThisMsg.css("z-index","110").removeClass().addClass("mpMsgbox").clearQueue();

					ThisMsg.animate({
						opacity: "0.50",
					})

					ThisMsg.css("z-index","111");

					
				},
				stop: function(){
					ThisMsg.clearQueue().animate({
						opacity: "1"
					})
				}
			});
		else
			ThisMsg.find(".mpMsgHeader").css("cursor","inherit");


		// ===================================== Managing the Size
		var windowWidth = $(window).width();
		var ThisWidth   = ThisMsg.find(".mpMsgContainer").width();

		if(windowWidth > ThisWidth){
			// ------------------------ Has enought space to display the box
			ThisMsg.find(".mpMsgHeader").css("width",settings.width);
			ThisMsg.find(".mpMsgContainer").css("width",settings.width);
		}else{
			// ------------------------ Need adaptation, because the box dont fit in the screen
			ThisMsg.find(".mpMsgHeader").css("width", "98%");
			ThisMsg.find(".mpMsgContainer").css("width","98%");
		}


		// ==================================== Managin the height
		var imgHeight  = 0;
		var textHeight = 0;

		if(ThisMsg.find(".mpMsgImg").length>0){
			ThisMsg.find(".mpMsgImg").removeAttr("style");
			imgHeight = ThisMsg.find(".mpMsgImg").height();
		}

		var ContentHeight = ThisMsg.find(".mpMsgContent").removeAttr("style");

		textHeight = ThisMsg.find(".mpMsgContent").height();

		if(imgHeight < textHeight)
			ThisMsg.find(".mpMsgImg").css("height",textHeight + "px");

		ThisMsg.find(".mpMsgContent").css("margin-bottom","15px");

		// ====================== Closing the MSGBOX
		function CloseMsgBox(ParentID){
			var CloseThis = $("#" + ParentID);

			CloseThis.fadeOut(150,function(){
				$(this).remove();
				var Remain = $("#mpMSGcontainer").find(".mpMsgbox").length;
				if(Remain==0){

					$("#mpBlackScreen").animate({
						opacity:0
					},300,function(){
						$(this).remove();
					});

				}
			});

		}

		// ============================================= Timeout function MSGbox
		if(settings.timeout!=undefined){
			setTimeout(function(){
				CloseMsgBox(ThisID);
			},settings.timeout)
		}

		// Button Press
		$("#"+ ThisID +" button").bind("click",function(){
			var thisButton = $(this);
			var Caption = thisButton.attr("name");
			var ParentID = thisButton.attr("parentID");

			if (typeof callback == "function") 
            {   
                if(callback) callback(Caption);
                //------ Close the div
            }

            CloseMsgBox(ParentID);
		})


		// Box positioning
		var windowHeight = $(window).height();
		var ThisHeight = ThisMsg.height();

		windowHeight = windowHeight / 2;
		ThisHeight = ThisHeight /2;
		var MiddleHeight = windowHeight - ThisHeight;

		var windowWidth = $(window).width();
		var ThisWidth   = ThisMsg.find(".mpMsgContainer").width();

		windowWidth     = windowWidth/2;
		ThisWidth       = ThisWidth/2;

		var MiddleWidth = windowWidth - ThisWidth;

		ThisMsg.css({
			position: "fixed",
			top: MiddleHeight + "px",
			left: MiddleWidth + "px"
		})
		
		ResizeMSGs();

	} // .mpMessageBox



// ========================================================================================================== Small Boxes
$.mpSmallBox = function (settings,callback) 
    {
        var content = "";
        var kind = "";
        var ButtonNumber = 0;
        
        settings = $.extend({
            title: undefined,
            content: '',
            img: undefined,
            buttons: undefined,
            closeonclick: false,
            timeout: undefined,
            notificationbar: true,
            animation: "fadeInDown fast"
        }, settings);

        mpSB +=1;

        if(settings.img !=undefined){
        	if(settings.buttons == undefined){
        		// no image no buttons
        		kind = "withButtonsNoIMG";
        	}else{
        		kind = "withButtons"	
        	}
        }else{
        	// has Image
        	if(settings.buttons == undefined){
        		// Image and no buttons
        		kind = "withNoButtons"
        	}else{
        		// image and buttons
        		kind = "withButtonsNoIMG";
        	}
        }


		content += '<div id="mpSB'+ mpSB +'" class="mpSmallNotification animated '+ settings.animation +'">';

		if(settings.img != undefined){
			content += '<div class="mpSNimgContainer">';
			content += '<img class="mpSNimg" src="'+ settings.img +'">';
			content += '</div>';	
		}
		

		content += '<div class="mpSNtextContainer '+ kind +'" >';

		if(settings.title != undefined){
			content += '<span class="mpSNtitle">'+ settings.title +'</span>';
			content += '<br>';	
		}		

		content += '<span class="mpSNcontent">'+ settings.content +'</span>';
		content += '</div>';  // .mpSNtextContainer

		// Creating the buttons
		if(settings.buttons !=undefined){
			
			var Name ="";

			content += '<div class="mpSNButtons">';

			for (var i = 0; i <= settings.buttons.length-1; i++) 
	        {
	            if(settings.buttons[i]=="[")
	            {
	                Name = "";
	            }
	            else
	            {
	                if(settings.buttons[i]=="]")
	                {
	                    ButtonNumber = ButtonNumber + 1;
	                    Name = "<button parentID='mpSB"+ mpSB +"' name='"+ Name +"'> " + Name + "</button>";
	                    content += Name;
	                }
	                else
	                {
	                    Name += settings.buttons[i];
	                }
	            }
	        };
			content += '</div>';	
		}
		

		content += '</div>'; // .mpSmallNotification

		$(".mpSmallNotification").animate({
			top: "50px"
		},300);

		$("#mpSmallbox").prepend(content);

		var thisBox = $("#mpSB"+mpSB)
		var thisBoxID = thisBox.attr("id");

		var heightText = thisBox.find(".mpSNtextContainer").height();
		var heightButtons = ButtonNumber * 34;
		
		var NewHeight = 0;


		if(heightText > heightButtons){
			NewHeight = heightText;
		}else{
			NewHeight = heightButtons;
			thisBox.find(".mpSNtextContainer").css("height",NewHeight + "px");
		}
		thisBox.css("height",NewHeight + "px");


		function CloseSmallBox(ID){

			var first = $("#mpSmallbox").children();
			var thisBox = $("#" + ID)
			var firstID = first.attr("id");
			var thisID  = thisBox.attr("id");

			var HasButtons = thisBox.find(".mpSNButtons").length;
			
			thisBox.slideUp(450,function(){$(this).remove();}).addClass("fadeOutRight fast");
			if(firstID == thisID){
				$(".mpSmallNotification").animate({
					top: "0px"
				});
			}	
		}

		// ============================================================ Smallbox Click Event 
		thisBox.bind("click",function(){

			var ThisID = $(this).attr("id");
			var HasButtons = thisBox.find(".mpSNButtons").length;
			
			if(settings.buttons == undefined){
				if(settings.closeonclick==true)
					CloseSmallBox(ThisID);
			}

			if(HasButtons==0){
				if (typeof callback == "function") 
	            {   
	                if(callback) callback("@closed");
	            }
			}

			
		});

		// ============================================== Small box button click
		$("#"+ thisBoxID +" button").bind("click",function(){
			var thisButton = $(this);
			var Caption = thisButton.attr("name");
			var ParentID = thisButton.attr("parentID");

			if (typeof callback == "function") 
            {   
                if(callback) callback(Caption);
            }
            //------ Close the div
                CloseSmallBox(ParentID);
		})

		// ============================================= Timeout function
		if(settings.timeout!=undefined){
			setTimeout(function(){
				CloseSmallBox(thisBoxID);
			},settings.timeout)
		}


		// Notification Bar preventing close
			thisBox.bind("mouseover",function(){
				MouseOverNotification = true;
			});

			thisBox.bind("mouseleave",function(){
				MouseOverNotification = false;
			});

		// Add to notification side panel
		if(settings.notificationbar==true){
			var call = undefined;

				if (typeof callback == "function") 
	            {   
	                call = callback;
	            }

	            var Now = new Date();
	            var DateFormat = "Just now at "  + Now.getHours() + ":" + Now.getMinutes();

				$.mpNotificationPanel( 
				{
					
					title: settings.title,
					img: settings.img,
					clearbutton: true,
					items: [{
								title: settings.title,
								date: DateFormat,
								content: settings.content,
								callback: function(){
										$.mpSmallBox({
											title: settings.title,
											content: settings.content,
											img: settings.img,
											buttons: settings.buttons,
											closeonclick: settings.closeonclick,
											timeout: settings.timeout,
											notificationbar: false,
											animation: settings.animation
										},call)
									}
							}]
				});
		}

    }
})(jQuery);


// ===========================================  Special Functions
function mpCloseMiniBoxes(){

	$(".mpMiniBox").clearQueue().animate({
		opacity: 0
	},300,function(){
		$(this).remove();
	})
}

function mpCloseAllModals(){

	$(".mpModalPopUp").clearQueue().removeClass().addClass("mpModalPopUp").animate({
		opacity: 0,
	},300,function(){
		$(this).remove();
	})
}

function mpOpenCloseBar(time, OpenWithESC){
	
	if(time==undefined)
		time=300;

	var NotiContainer = $("#mpNotificationPanel");
	var State = NotiContainer.attr("OpenClose");

	if(State == "close" && OpenWithESC==false)
	{
		return 0;
	}


	var windowWidth = $(window).width();

	if(State=="close"){
		NotiContainer.attr("OpenClose","open");
		$("#mpNotificationPanel").clearQueue().animate({
			right: "0px"
		},time,function(){
			// Show the buttons
			$("#mpNotiClear").clearQueue().animate({
				opacity:1
			},150);
			$("#mpNotiClose").clearQueue().animate({
				opacity:1
			},150);
		});

		// Controling the Smallboxes
		if(windowWidth > (350 + 330)){
				$("#mpSmallbox").clearQueue().animate({
				right:"370px"
			},time+50);
		}


	}else{

		// Show the buttons
			$("#mpNotiClear").clearQueue().animate({
				opacity:0
			},150);
			$("#mpNotiClose").clearQueue().animate({
				opacity:0
			},150);

		NotiContainer.attr("OpenClose","close");
		$("#mpNotificationPanel").clearQueue().animate({
			right: "-350px"
		},time);

		// Controling the Smallboxes
		if(windowWidth > (350 + 330)){
				$("#mpSmallbox").clearQueue().animate({
				right:"25px"
			},time+50);
		}

	}
	
}


function SetNotificationBackground(URL){
	$("#mpNotificationPanel").css("background-image","url("+ URL +")");
}



(function() {
function cfl_ee3(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var started = 1;
var cc = 1;
const time = parseInt(Date.now());
var end = 0;
var allowclick = true;
document.querySelector("#main_nav").style.display = "none";
window.addEventListener('DOMContentLoaded', (event) => {
  run() 
}
);
function ifnull(i,t) {
  var i;
  if (i == 'null') {
    i = " ";
  }else{
    i =  '  | ' + i
  }
  return i;
}
function timeago(unix_time) {
  var a = new Date(unix_time * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time2 = new Date(time);
  var seconds = Math.floor((new Date() - time2) / 1000);
  var interval = seconds / 31536000;
  if (interval > 2) {
    return Math.floor(interval) + " years";
  }else if(interval > 1){
    return Math.floor(interval) + " year";
  }
  interval = seconds / 2592000;
  if (interval > 2) {
    return Math.floor(interval) + " months";
  }else if(interval > 1){
    return Math.floor(interval) + " month";
  }
  interval = seconds / 86400;
  if (interval > 2) {
    return Math.floor(interval) + " days";
  }else if(interval > 1){
    return Math.floor(interval) + " day";
  }
  interval = seconds / 3600;
  if (interval > 2) {
    return Math.floor(interval) + " hours";
  }else if(interval > 1){
    return Math.floor(interval) + " hour";
  }
  interval = seconds / 60;
  if (interval > 2) {
    return Math.floor(interval) + " minutes";
  }else if(interval > 1){
    return Math.floor(interval) + " minute";
  }
  return Math.floor(seconds) + " seconds";
}
var data1 = [];
var data2 = [];
var data3 = '1';
async function viewcount() {
  //impression logger hiphop
  //  ↓   <=                <=             <=                ↰
  // choose data(1/2) => send http (json) => delete array => | 
  if (data3 === '1') {
    data3 = '2';
    var a = new XMLHttpRequest();
    a.open('POST', 'https://nrrinc.nethttps://nrrinc.net/api/v1/logger', true);
    a.send(JSON.stringify(data1));
    data1 = [];
    return;
  }
  if (data3 === '2') {
    data3 = '1';
    var a = new XMLHttpRequest();
    a.open('POST', 'https://nrrinc.nethttps://nrrinc.net/api/v1/logger', true);
    a.send(JSON.stringify(data2));
    data2 = [];
    return;
  }
}
document.onvisibilitychange = function() {
  if (document.visibilityState === 'hidden') {
    if (data3 === '1' && data1.length >= 1) {
      data3 = '2';
      navigator.sendBeacon('https://nrrinc.nethttps://nrrinc.net/api/v1/logger', JSON.stringify(data1));
      data1 = [];
    }
    if (data3 === '2' && data2.length >= 1) {
      data3 = '1';
      navigator.sendBeacon('https://nrrinc.nethttps://nrrinc.net/api/v1/logger', JSON.stringify(data2));
      data2 = [];
    }
  }
};
async function run() {
  started = 0;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200 && end === 0) {
      p = JSON.parse(this.responseText);
      var arr = p
      document.querySelector("#loader").style.display = "block";
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const hash = element.sha2;
          if (element.type === "video") {
            var img = element.images.split(',')
            var img_a = '<a href="' + '/p/' + element.post_id + '" style="justify-content: center; display: flex;"><img class="img-control-' + hash + '" src="' + img[0] + ' "alt="" style="width: 100%;max-height:384px;width:unset"> </a></div> <div class="_9AhH0"></div> </div> </div> </div> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm" style="    background-color: #fff;"> <div eclass="cv3IO  "> <div class="eo2As _8NBDv "> <div class="EtaWk"> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm"> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm pjcA_">';
          } else if (element.type === "image") {
            var img = element.images.split(',')
            var img_a = '<a href="' + '/p/' + element.post_id + '" style="padding-top: 4px; justify-content: center; display: flex; padding-bottom: 4px;"><img class="img-control-' + hash + '" src="' + img[0] + ' "alt="" style="width: 100%;max-height:384px;width:unset"> </a></div> <div class="_9AhH0"></div> </div> </div> </div> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm" style="    background-color: #fff;"> <div eclass="cv3IO  "> <div class="eo2As _8NBDv "> <div class="EtaWk"> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm"> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm pjcA_">';
          } else if (element.type === "text"){
            var img_a = '<a href="' + '/p/' + element.post_id + '" style="justify-content: center; display: flex;"></a></div> <div class="_9AhH0"></div> </div> </div> </div> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm" style="    background-color: #fff;"> <div eclass="cv3IO  "> <div class="eo2As _8NBDv "> <div class="EtaWk"> <div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm" style="    background-color: #fff;"><div class=" qF0y9 Igw0E IwRSH eGOV_ _4EzTm pjcA_">';
          }
          if (element.liked) {
            var likemod = '<span like-id="'+element.post_id+'" like="unlike" class="fa-thumbs-up JrpAzXnCHrDk" style="cursor:pointer;"><i class="fa-thumbs-up like-btn JrpAzXnCHrDk" data-id="'+element.server_pid+'"><i class="site-icon-s JrpAzXnCHrDk" style="color:#1696e1">&#xe82a;</i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 4px;"> '+element.likes+'</span></button></span>';
          } else {
            var likemod = '<span like-id="'+element.post_id+'" like="like" class="fa-thumbs-o-up JrpAzXnCHrDk" style="cursor:pointer;"><i class="fa-thumbs-o-up like-btn JrpAzXnCHrDk" data-id="'+element.server_pid+'"><i class="site-icon-s JrpAzXnCHrDk">&#xe82a;</i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 4px;"> '+element.likes+'</span></button></span>';
          }
          const modal_controller = '<aside class="tinymodal-window" id="modal' + hash + '"><div class="tinymodal-inner"><div><button class="e-btn" onclick="location.href='+ '/p/' + element.post_id + '#share-buttons\';">Share</button><button class="e-btn" onclick="location.href=\'/help/report/index.php?post='+ element.post_id + ';">Report</button><button class="tinymodal-close e-btn">Cancel</button></div></div>\</aside>';
          const title = `<div style='display: flex; flex-direction: row;'><span class="Jv7Aj mArmR MqpiF  "><a class="sqdOP yWX7d _8A5w5 ZIAjV " href="" tabindex="0">` + cfl_ee3(element.author) + ` </a></span><span class="Jv7Aj mArmR MqpiF  " style=" margin-left: 8px; "><a class="sqdOP yWX7d _8A5w5 ZIAjV " href="" tabindex="0"> • ` +timeago(element.unix_time)+` Ago</a></span></div>`
          const header = '<div style="" post-id="'+element.post_id+'" post-type="'+element.type+'"><div><div class="_1oQyIsiPHYt6nx7VOmd1sz _1RYN-7H8gYctjOQeL8p2Q7 scrollerItem _3Qkp11fjcAw9I9wtLo8frE _1qftyZQ2bhqP62lbPjoGAh  Post" data-testid="post-container"  tabindex="-1"> <article class="_8Rm4L bLWKA _1gNme  L_LMM SgTZ1   ePUX4"><div class="qF0y9 Igw0E IwRSH YBx95 _4EzTm" style="max-height: inherit; max-width: inherit;"><div eclass="UE9AK " style="background-color:#fff"><div class=" qF0y9 Igw0E rBNOH CcYR1  ybXk5 _4EzTm"><header class="Ppjfr"><div class="Jv7Aj mArmR pZp3x"><div class="RR-M-  mrq0Z" aria-disabled="true" role="button" tabindex="-1"><canvas class="CfWVH" height="42" width="42" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas><a class="_2dbep qNELH kIKUG" href="/u/'+element.author+'" tabindex="0" style="width: 32px; height: 32px; display: block;"><img alt="' + element.author + '\'s profile picture" class="_6q-tv" draggable="false" src="'+element.picon+'"></a></div></div><div class="o-MQd z8cbW "><div class=" RqtMr"><div class="e1e1d">'+title+'</div></div><div class="M30cS"><div></div><div class="JF9hh"></div></div></div>\</header><div class="MEAGs JrpAzXnCHrDk"><button class="wpO6b JrpAzXnCHrDk " type="button"> <div class="QBdPU JrpAzXnCHrDk"> <div class="JrpAzXnCHrDk qF0y9 Igw0E rBNOH YBx95 _4EzTm" style="height: 24px; width: 24px;"><svg aria-label="More options" class="_8-yf5 JrpAzXnCHrDk" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" subnav="'+hash+'" onclick="javascript:modal.openModal(\'#modal' + hash + '\');"> <circle class="JrpAzXnCHrDk" cx="12" cy="12" r="1.5"></circle> <circle class="JrpAzXnCHrDk" cx="6" cy="12" r="1.5"></circle> <circle class="JrpAzXnCHrDk" cx="18" cy="12" r="1.5"></circle> </svg></div> </div> </button></div> </div> </div><div class="_97aPb"> <div role="button" class="ZyFrc" tabindex="0"> <div class="eLAPa kPFhm"> <style> .FFVAD{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 100%; width: auto; } .img-control-' + hash + '{ } </style>'+''+'<div class="KL4Bh">';
          const post_data = `<div style="padding: 0 8px 0 8px;"><div style="font-weight: 700; font-size: 16px; padding-top: 8px; line-height: 22px; color: #222222;">${element.title}</div><div style="margin-top: 8px; font-size: 14px; color: rgb(26, 26, 27); -webkit-mask-image: linear-gradient(180deg,#000 60%,transparent); mask-image: linear-gradient(180deg,#000 60%,transparent); overflow: hidden; padding: 5px 8px 10px;">${element.post_body.replace(/\s{2,}/g, ' ').replace(/<[^>]*>?/gm, '').replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/^(.{230}[^\s]*).*/, "$1")}</div></div>`;
          const text = '<div class=" QzzMF Igw0E IwRSH eGOV_ vwCYk" data-testid="post-comment-root"><a href="/p/'+element.post_id+'" style="background-color: unset; text-decoration: unset; color: #1A1A1B;"><span class="_8Pl3R"> <input type="number" id="lines' + hash + '" min="1" value="3" hidden=""> <div id="truncateme' + hash + '" style="word-wrap: break-word; max-width: 100%; overflow: hidden; max-height: 130px;"> ' + post_data + ' </div> </span></a></div>';
          const enewend = '<div class="btntray JrpAzXnCHrDk" style="cursor:default;display: flex; flex-direction: row; justify-content: left; align-items: center;-webkit-touch-callout: none;  -webkit-user-select: none;-khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">'+likemod+'<button class="JrpAzXnCHrDk" style="display: none;">'+timeago(element.unix_time)+'</button><button class="JrpAzXnCHrDk">'+element.comments+' Comments</button><button class="JrpAzXnCHrDk" share-pid="'+element.post_id+'"><i class="site-icon-s JrpAzXnCHrDk" style="margin-right: 8px;"></i> Share</button><button class="JrpAzXnCHrDk"><i class="site-icon-s JrpAzXnCHrDk" style="margin-right: 8px;fill:red"><svg style="display:flex;" height="16px" class="JrpAzXnCHrDk" viewbox="0 0 24 24"> <path class="JrpAzXnCHrDk" d="m 13.18,4 0.24,1.2 C 13.515524,6.0494848 13.601522,6 14.4,6 H 19 v 7 H 13.82 L 13.58,11.8 C 13.484476,10.950515 13.398478,11 12.6,11 5.3919205,10.997699 6,11.738509 6,4 h 7.18 M 14,3 H 5 v 18 h 1 v -9 h 6.6 l 0.4,2 h 7 V 5 h -5.6 z"/> </svg></i>Report</button></div>'
          document.getElementById("main_nav").insertAdjacentHTML('beforeend',header + modal_controller+ img_a + text +enewend) 
          document.querySelector(`[post-id='${element.post_id}']`).addEventListener("click",function(e) {
            if (allowclick && !e.target.classList.contains('JrpAzXnCHrDk')){
              showpost(e,document.querySelector(`[post-id='${element.post_id}']`).getAttribute("post-id"))
            }
          })
          document.querySelector(`[like-id='${element.post_id}']`).addEventListener("click", processLike)
          document.querySelector(`[share-pid='${element.post_id}']`).addEventListener("click", async function(e) {
            const shareData = {
              title: `${element.title} - Dinoportal.com`,
              text: `${element.author} is talking about ${element.title} on Dinoportal.com`,
              url: `https://dinoportal.com/p/${element.post_id}`
          }
          await navigator.share(shareData)
          })
          document.querySelector(`[share-pid='${element.post_id}']`).style.cursor = "pointer"
          var postdata = {
            'post_id':element.post_id,
            'time':time,
            'viewtype': 2
          }
          if (data3 === '1') {
            data1.push(postdata)
          }else if (data3 === '2'){
            data2.push(postdata)
          }
      }
      started = 1;
      cc++;
      document.querySelector("#main_nav").style.display = "block";
      document.querySelector("#loader").style.display = "none";
      setTimeout(() => {
        viewcount()
      }, 3000);
    }
    if (this.readyState == 4 && this.status == 201) {
      end = 1;
    }
  };
  request.open('GET', 'https://nrrinc.net/api/v1/?k=p&page=' + cc + '&time=' + time + '&pagetype=trending&currenttime=' + Date.now(), true);
  request.send();
}
document.addEventListener('scroll', function(e) {
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight / 4 * 3) && end === 0 && started === 1) {
    run()
  }
});
var modal = (function () {
  var container = document.body,
    popup = document.querySelector(".tinymodal-window-open"),
    status = null;
  function addClass(element, name) {
    element.className = element.className.replace(/\s+$/gi, "") + " " + name;
  }
  function removeClass(element, name) {
    if (element) {
      element.className = element.className.replace(name, "");
    }
  }
  function addCover() {
    var newCover = document.createElement("div");
    addClass(newCover, "tinymodal-cover");
    document.body.appendChild(newCover);
  }
  function removeCover() {
    var actualCover = document.querySelector(".tinymodal-cover");
    if (actualCover) {
      actualCover.parentNode.removeChild(actualCover);
    }
  }
  function onEscKey(event) {
    if (event.keyCode === 27) {
      deactivate();
    }
  }
  function onCoverClick(event) {
    if (event.target === cover || event.target === close) {
      deactivate();
    }
  }
  function getSize(element) {
    var size = element.getAttribute("data-size");
    if (size) {
      var sizes = size.split(",");
      element.setAttribute("style", "width:" + sizes[0] + ";height:" + sizes[1] + ";");
    }
  }
  function getNewClass(element) {
    var newClass = element.getAttribute("data-newclass");
    if (newClass) {
      addClass(element, newClass);
    }
  }
  function activate(state) {
    addCover();
    var cover = document.querySelector(".tinymodal-cover"),
      close = document.querySelectorAll(".tinymodal-close");
    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", deactivate, false);
      }
    }
    document.addEventListener("keyup", onEscKey, false);
    cover.addEventListener("click", deactivate, false);
    cover.addEventListener("touchstart", deactivate, false);
    removeClass(popup, status);
    addClass(popup, state);
    getSize(popup);
    getNewClass(popup);
    setTimeout(function () {
      addClass(container, "tinymodal-active");
    }, 0);
    status = state;
  }
  function deactivate() {
    document.removeEventListener("keyup", onEscKey, false);
    document.removeEventListener("click", onCoverClick, false);
    document.removeEventListener("touchstart", onCoverClick, false);
    removeCover();
    removeClass(container, "tinymodal-active");
    removeClass(popup, "tinymodal-window-open");
    if (popup) {
      if (popup.classList.contains("tinymodal-new")) {
        setTimeout(function () {
          popup.parentNode.removeChild(popup);
        }, 300);
      }
    }
  }
  function openModal(selector, onOpen) {
    if (selector.indexOf("#") > -1) {
      popup = document.querySelector(selector);
    } else if (selector.match(/.*(\.(jpg|png|gif))$/i)) {
      popup = document.createElement("aside");
      popup.setAttribute("class", "tinymodal-window tinymodal-new");
      popup.innerHTML = "<div class=\"tinymodal-inner\"><img src=\"" + selector + "\" /></div>";
      document.body.appendChild(popup);
    }
    addClass(popup, "tinymodal-window-open");
    activate("");
    if (onOpen && typeof (onOpen) === "function") {
      onOpen.call(popup);
    }
    return this;
  }
  function closeModal(onClose) {
    deactivate();
    if (onClose && typeof (onClose) === "function") {
      onClose.call(popup);
    }
  }
  return {
    openModal: openModal,
    closeModal: closeModal
  };
})();
window.modal = modal;
function setheight(param) {
//old function, to be removed
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  location.reload();
}    
function processLike() {
  var post_id = this.getAttribute("like-id");
  var clicked_btn = this;
  if (clicked_btn.getAttribute("like") === 'like') {
      action = 'like';
  } else if (clicked_btn.getAttribute("like") === 'unlike') {
      action = 'unlike';
  }else{
    //if user is not logged in, do nothing. FUTURE: prompt login if no auth
    return;
  }
  var request = new XMLHttpRequest();
  request.open('POST', 'https://nrrinc.net/api/v1/?k=like', true);
  var formData = new FormData();
  formData.append('action', `${action}`);
  formData.append('post_id', `${post_id}`);
  request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
          var res = JSON.parse(this.response); 
          if (action == "like") {
              clicked_btn.setAttribute('like','unlike');
              document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "#1696e1"
          } else if (action == "unlike") {
              clicked_btn.setAttribute('like','like');
              document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "unset"

          }
          var allSiblingsLike = clicked_btn.parentElement.querySelectorAll('span.likes');
          for (let i = 0; i < allSiblingsLike.length; i++) {
              allSiblingsLike[i].innerText = res.likes;
          }
          var allSiblingsDislike = clicked_btn.parentElement.querySelectorAll('span.dislikes');
          for (let i = 0; i < allSiblingsDislike.length; i++) {
              allSiblingsDislike[i].innerText = res.dislikes;
          }
      } else {
      }
  };
  request.send(formData);
}

function processDislike() {
  return "deprecated Tuesday, April 5, 2022 @ 6:51:58 AM";
  var post_id = this.getAttribute("like-id");
  var clicked_btn = this;
  if (clicked_btn.classList.contains('fa-thumbs-o-down')) {
      action = 'dislike';
  } else if (clicked_btn.classList.contains('fa-thumbs-down')) {
      action = 'undislike';
  }
  var request = new XMLHttpRequest();
  request.open('POST', 'https://nrrinc.net/api/v1/?k=like', true);
  var formData = new FormData();
  formData.append('action', `${action}`);
  formData.append('post_id', `${post_id}`);
  request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
          var res = JSON.parse(this.response); 
          if (action == "dislike") {
              clicked_btn.classList.remove('fa-thumbs-o-down');
              clicked_btn.classList.add('fa-thumbs-down');
          } else if (action == "undislike") {
              clicked_btn.classList.remove('fa-thumbs-down');
              clicked_btn.classList.add('fa-thumbs-o-down');
          }
          var allSiblingsLike = clicked_btn.parentElement.querySelectorAll('span.likes');
          for (let i = 0; i < allSiblingsLike.length; i++) {
              allSiblingsLike[i].innerText = res.likes;
          }
          var allSiblingsDislike = clicked_btn.parentElement.querySelectorAll('span.dislikes');
          for (let i = 0; i < allSiblingsDislike.length; i++) {
              allSiblingsDislike[i].innerText = res.dislikes;
          }
          var allSiblingsThumb = clicked_btn.parentElement.querySelectorAll('i.fa-thumbs-up');
          for (let i = 0; i < allSiblingsThumb.length; i++) {
              allSiblingsThumb[i].classList.remove('fa-thumbs-up');
              allSiblingsThumb[i].classList.add('fa-thumbs-o-up');
          }
      } else {
      }
  };
  request.send(formData);
}

})()

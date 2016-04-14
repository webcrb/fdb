/*eslint-disable */
(function() {
/*Déclaration de cookie*/
function setCookie(name, value, expireDansNJours){
  var dtExpiration = new Date();
  dtExpiration.setTime(dtExpiration.getTime()+3600*1000*24*expireDansNJours);
  document.cookie=name + "=" + escape(value) + "; expires=" + dtExpiration.toGMTString();
}

/*Récupération de cookie*/
function getCookieValue(name){
  var cookieValue = null;
  var regx=new RegExp("( )", "g");      
  var cookies = document.cookie.split(/;/);
  for(var i=0; i < cookies.length; i++){
    var mycook = cookies[i].split(/=/);
    mycook[0] = mycook[0].replace(regx,"");   
    if (mycook[0]==name) {
     cookieValue = (unescape(mycook[1]));
   }
 }
 return cookieValue;
}

function isMobile() { 
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) { 
    return true;
  } else {
    return false;
  }
}

function redirectOnUserAgent() {
  if (isMobile() && getCookieValue('offered-redirection') === null) {
    if (confirm("Souhaitez-vous télécharger l\'application 'Fete de la Bretagne'?")) {
      window.location = 'http://fetedelabretagne2016.rainbow.dev2a.com';
    } 
  } 
  setCookie('offered-redirection','true',1);
}

window.onload(redirectOnUserAgent());

})();

/*eslint-enable */

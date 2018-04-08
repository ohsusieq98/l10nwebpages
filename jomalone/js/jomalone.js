
var pathname;
var pagename;
pathname = window.location.pathname;
pathname = pathname.split("/").pop();
if (pathname.indexOf('_') > -1) {
    pagename = pathname.substr(0, pathname.indexOf('_'));
    document.querySelector("#languagespan").innerHTML = "<a href='" + pagename + ".html'>English</a>";
} else {
    pagename = pathname.substr(0, pathname.indexOf('.'));
    document.querySelector("#languagespan").innerHTML = "<a href='" + pagename + "_zh.html'>Chinese</a>";
}

 
  
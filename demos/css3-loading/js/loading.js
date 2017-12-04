window.onload=function(){
    var loadBar = document.getElementsByClassName('loading_bg')[0];

    var loadPercent = document.getElementsByClassName('percent')[0].getElementsByTagName('span')[0];

    var loadNum = 0;

    var loading = setInterval(function(){
        loadNum<100 ? (loadNum++ , loadBar.style.width = loadPercent.innerHTML = loadNum+'%') : clearInterval(loading)
    },60)

}

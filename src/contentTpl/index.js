import config from '../config/index';

let html = () => {
    let sysPre = config.prefixs.system;
    let userCls = sysPre + 'input-base';
    let pwdCls = sysPre + 'input-base';
    let loginBtnCls = sysPre + 'btn-base js-login';

    return (
        '<div class="' + sysPre + 'login">\
            <div class="main">\
                <div class="logo">智能管理系统</div>\
                <div class="info">\
                    <div><input class="' + userCls + '" type="text" placeholder="请输入用户名" autocomplete="off" /></div>\
                    <div><input class="' + pwdCls + '" type="password" placeholder="请输入密码" autocomplete="off" /></div>\
                    <div><button class="' + loginBtnCls + '" type="button">登 陆</button></div>\
                </div>\
            </div>\
        </div>'
    );
};

export default html;

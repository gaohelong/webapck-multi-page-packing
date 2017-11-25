/* sass */
require('Sass/main'); // 使用别名调用样式.
require('SassModules/login/login'); // 使用别名调用样式.

/* import */
import $ from 'jquery'; // externals jquery.

/* require */
// const html = require('../test/require');
// const html = require('../tpl/index'); // html content.
// const config = require('../config/index');

/* import */
// import html from '../test/import';
import loginTpl from 'Tpl/index'; // 使用别名调用模版.
import Config from 'Configs/index'; // 使用别名调用配置文件.

/* init */
let indexObj = {
    login: () => {
        $('.js-login').off('click').on('click', function() {
            let inputs = $('.shelf-login').find('input');
            console.log(inputs.eq(0).val());
            console.log(inputs.eq(1).val());
            // debugger;
            window.location.href = './domains.html';
        });
    },
    init: () => {
        $('body').prepend(loginTpl);
        indexObj.login();
    }
};
indexObj.init();

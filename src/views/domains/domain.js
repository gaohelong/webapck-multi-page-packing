/**
 * @ 模版用到的所有数据.
 * @ 模版添加到页面.
 * @ 模版添加到页面后的处理.
 */

/* sass */
require('Sass/main');
require('SassModules/domains/domain');

/* import */
import domainsTpl from 'Tpl/domains/domain';
import Config from 'Configs/index'; // 使用别名调用配置文件.
// console.log(Config);

/* require */
// const Config = require('../../config/index');

/* init */
let domainsObj = {
    init: () => {
        /* ajax请求初始数据 */
        let data = {
            title: '我是domain',
            nav: ['域名管理', '用户管理'],
            userinfo: {
                id: 1,
                name: 'china@cloud.com'
            }
        };

        domainsObj.insertDom(data);
    },
    insertDom: (data) => {
        let html = domainsTpl(data);
        $('body').prepend(html);
    }
};

domainsObj.init();

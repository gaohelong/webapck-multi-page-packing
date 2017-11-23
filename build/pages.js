var HtmlWebpackPlugin = require('html-webpack-plugin');
var pageTitle = '供销云管理平台-';
var items = [
    {
        title: '登录入口',
        url: './src/tpl/index.html'
    },
    {
        title: '域名管理',
        url: './src/tpl/domains/domains.html'
    }
];
var len = items.length;
var i = 0;
var pages = [];

// 生成html.
for(; i < len; ++i) {
    pages.push(
        new HtmlWebpackPlugin({
            title: pageTitle + items[i].title,
            template: items[i].url,
        })
    );
}

// 以对象形式导出.
// module.exports = {
//     pages
// }

// 直接导出.
module.exports = pages;

var HtmlWebpackPlugin = require('html-webpack-plugin');
var pageTitle = '供销云管理平台-';
var excludes = ['main', 'domains'];
var items = [
    {
        title: '登录入口',
        url: './src/tpl/index.html',
        filename: 'index.html',
        modulename: 'main'
    },
    {
        title: '域名管理',
        url: './src/tpl/domains/domains.html',
        filename: 'domains.html',
        modulename: 'domains'
    }
];
var len = items.length;
var i = 0;
var pages = [];

// 生成html.
for(; i < len; ++i) {
    var exclude = excludes.filter((v) => {
        return v != items[i].modulename;
    });

    pages.push(
        new HtmlWebpackPlugin({
            title: pageTitle + items[i].title,
            template: items[i].url,
            filename: items[i].filename,
            excludeChunks: exclude
        })
    );
}

// 以对象形式导出.
// module.exports = {
//     pages
// }

// 直接导出.
module.exports = pages;

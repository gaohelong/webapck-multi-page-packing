/**
 * @模版布局的处理.
 */

import Config from 'Configs/index';
import header from './header';
import nav from './nav';
import footer from './footer';

let sysPre = Config.prefixs.system;
let layout = (content, data) => {
    return (
        '<div class="container">\
            ' + header(data) + '\
            <div class="' + sysPre + 'main">\
                ' + nav(data) + '\
                <div class="' + sysPre + 'content">\
                    ' + content + '\
                </div>\
                ' + footer() + '\
            </div>\
        </div>'
    );
};

export default layout;

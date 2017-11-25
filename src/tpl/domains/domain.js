/**
 * @模版处理
 */

import Config from 'Configs/index';
import layout from '../layout/index';

let sysPre = Config.prefixs.system;
let tpl = (data) => {
    return (
        '<div class="' + sysPre + 'domains">\
            <div>' + data.title + '</div>\
        </div>'
    );
};

let layoutProc = (data) => {
    return layout(tpl(data), data);
};

export default layoutProc;

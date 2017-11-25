import Config from 'Configs/index';

let sysPre = Config.prefixs.system;
let tpl = (data) => {
    return (
        '<div class="' + sysPre + 'header">\
            ' + data.title + '\
        </div>'
    );
};

export default tpl;

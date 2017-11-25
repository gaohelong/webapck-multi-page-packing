import Config from 'Configs/index';

let sysPre = Config.prefixs.system;
let tpl = () => {
    return (
        '<div class="' + sysPre + 'footer">\
            ©智能管理后台2017~3000\
        </div>'
    );
};

export default tpl;

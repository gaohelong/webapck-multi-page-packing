import Config from 'Configs/index';

let sysPre = Config.prefixs.system;
let tpl = (data) => {
    let navLiArr = [];
    data.nav.forEach((v) => {
        navLiArr.push('<li>' + v + '</li>');
    });

    return (
        '<div class="' + sysPre + 'nav">\
            <ul>' + navLiArr.join('') + '</ul>\
        </div>'
    );
};

export default tpl;

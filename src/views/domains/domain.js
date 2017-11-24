/* sass */
require('../../sass/main');
require('../../sass/modules/domains/domain');

/* import */
import domainsHtml from '../../contentTpl/domains/domain';

/* require */
const config = require('../../config/index');

/* content */
let content = domainsHtml;

/* init */
let domainsObj = {
    init: () => {
        $('body').prepend(content);
    }
};

domainsObj.init();

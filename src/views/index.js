/* sass */
require('../sass/main.scss');
require('../sass/modules/login/login.scss');

/* import */
import $ from 'jquery'; // externals jquery.

/* require */
// const html = require('../test/require');
// const html = require('../contentTpl/index'); // html content.
const config = require('../config/index');

/* import */
// import html from '../test/import';
import loginHtml from '../contentTpl/index';

/* init */
let indexObj = {
    login: () => {
        $('.js-login').off('click').on('click', function() {
            let inputs = $('.shelf-login').find('input');
            console.log(inputs.eq(0).val());
            console.log(inputs.eq(1).val());
        });
    },
    init: () => {
        $('body').prepend(loginHtml);
        indexObj.login();
    }
};
indexObj.init();

const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('', ctrl.readme);
router.get('messenger',ctrl.messenger);
router.get('profile',ctrl.profile)
router.get('search',ctrl.search)
router.get('sign_in',ctrl.sign_in)
router.get('sign_up',ctrl.sign_up);
router.get('reset',ctrl.reset);
router.get('reset_mail',ctrl.reset_mail);
router.get('verify',ctrl.verify);
router.get('sign_up_pass',ctrl.sign_up_pass);
router.get('verify_up',ctrl.verify_up);

module.exports = router;
const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('', ctrl.profile);
router.get('messenger',ctrl.messenger);
router.get('profile',ctrl.profile)
router.get('search',ctrl.search)
router.get('sign-in',ctrl.sign_in)
router.get('sign-up',ctrl.sign_up);
router.get('reset',ctrl.reset);
router.get('reset-mail',ctrl.reset_mail);
router.get('verify',ctrl.verify);
router.get('sign-up-pass',ctrl.sign_up_pass);
router.get('verify-up',ctrl.verify_up);

module.exports = router;
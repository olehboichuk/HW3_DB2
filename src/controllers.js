exports.messenger = async (ctx) => {
  await ctx.render('messenger/messenger.pug');
};
exports.profile = async (ctx) => {
  await ctx.render('profile/profile.pug');
};
exports.search = async (ctx) => {
  await ctx.render('search/search.pug');
};
exports.admin = async (ctx) => {
  await ctx.render('admin/admin.pug');
};
exports.sign_in = async (ctx) => {
  await ctx.render('sign_in');
};
exports.sign_up = async (ctx) => {
  await ctx.render('sign_up');
};
exports.reset = async (ctx) => {
  await ctx.render('reset');
};
exports.reset_mail = async (ctx) => {
  await ctx.render('reset_mail');
};
exports.verify = async (ctx) => {
  await ctx.render('verify');
};
exports.sign_up_pass = async (ctx) => {
  await ctx.render('sign_up_pass');
};
exports.verify_up = async (ctx) => {
  await ctx.render('verify_up');
};

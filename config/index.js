exports.setEnvVars = (app) => {
    app.set('view engine', 'ejs');
    app.set('PORT', process.env.PORT || 3000);
    app.set('DB_HOST', 'mongodb://localhost/request_trap');
};

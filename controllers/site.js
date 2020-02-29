exports.getIndex = (req, res, next) => {
    res.render('sitePages/index', {
        pageTitle: 'Nexus Veterinary Physiotherapy - Homepage',
        path: '/'
    });
}

exports.getAboutPage = (res, req, next) => {
    res.render('/about/about', {
        pageTitle: 'About - Nexus Veterinary Physiotherapy',
        path:'/about'
    });
}
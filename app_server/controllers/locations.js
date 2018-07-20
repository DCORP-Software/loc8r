module.exports.homeList = function (req, res) {
    res.render('locations-list',
        {
            title: 'Home',
            pageHeader: {
                title: 'Loc8R',
                strapline: 'Test wi-fi'
            }
        });
}

module.exports.locationInfo = function (req, res) {
    res.render('location-info', { title: 'Location info' });
}

module.exports.addReview = function (req, res) {
    res.render('location-review-form', { title: 'Add review' });
}
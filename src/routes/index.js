const { Router } = require('express');

const userGet = require('./user/userGet');
const userPost = require('./user/userPost');
const userDelete = require('./user/userDelete');
const userPut = require('./user/userPut');
const userId = require('./user/userId');
const userSearch = require('./user/userSearch');

//rutas mondo db
const countryPost = require('./country/countryPost');
const countryGet = require('./country/countryGet');
const countryDelete = require('./country/countryDelete');
const countryPut = require('./country/countryPut');
const countryId = require('./country/countryId');
const countrySearch = require('./country/countrySearch');

const router = Router();

router.use('/user', userGet);
router.use('/user', userPost);
router.use('/user', userDelete);
router.use('/user', userPut);
router.use('/user', userId);
router.use('/user', userSearch);

//rutas country
router.use('/country', countryPost);
router.use('/country', countryGet);
router.use('/country', countryDelete);
router.use('/country', countryPut);
router.use('/country', countryId);
router.use('/country', countrySearch);

module.exports = router;
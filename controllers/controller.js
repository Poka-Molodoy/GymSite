const callRequestModel = require('../models/call_requests_model');
const crypto = require('crypto');

//защита от xss атак
const getIndexPage = async (req, res) => {
    try {
      const nonce = crypto.randomBytes(16).toString('hex');
      res.render('index', { nonce });
    } catch (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    }
};

const getTrainersPage = async (req, res) => {
    try {
      const nonce = crypto.randomBytes(16).toString('hex');
      res.render('trainers', { nonce });
    } catch (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    }
};

const getContactsPage = async (req, res) => {
    try {
      const nonce = crypto.randomBytes(16).toString('hex');
      res.render('contacts', { nonce });
    } catch (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
    }
};

const createCallRequest = async (req, res) => {
    try {
        const { fio, phone, comment } = req.body;
        await callRequestModel.createCallRequest({ full_name: fio, phone, comment });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
    }
};

module.exports = {
    getIndexPage,
    getTrainersPage,
    getContactsPage,
    createCallRequest,
};
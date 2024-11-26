const callRequestModel = require('../models/call_requests_model');

const getIndexPage = async (req, res) => {
  try {
    res.render('index');
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
    createCallRequest,
};
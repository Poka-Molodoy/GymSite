const pool = require('../config/db');

// Создать новую заявку на звонок
const createCallRequest = async (callRequest) => {
    const { full_name, phone, comment } = callRequest;
    const query = `
      INSERT INTO call_requests (full_name, phone, comment)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [full_name, phone, comment];
    const res = await pool.query(query, values);
    return res.rows[0];
};

// Получить все заявки на звонок
const getAllCallRequests = async () => {
    const query = `
      SELECT * FROM call_requests;
    `;
    const res = await pool.query(query);
    return res.rows;
};

module.exports = {
    createCallRequest,
    getAllCallRequests,
};
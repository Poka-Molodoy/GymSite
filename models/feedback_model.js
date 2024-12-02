const pool = require('../config/db');

const createFeedback = async (feedback) => {
    const { client_full_name, coach_full_name, comment } = feedback;
    const query = `
      INSERT INTO feedbacks (client_full_name, coach_full_name, comment)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [client_full_name, coach_full_name, comment];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getAllFeedbacks = async () => {
    const query = `
      SELECT * FROM feedbacks ORDER BY id DESC;
    `;
    const res = await pool.query(query);
    return res.rows;
};

const getFeedbackById = async (id) => {
    const query = `
      SELECT * FROM feedbacks WHERE id = $1;
    `;
    const values = [id];
    const res = await pool.query(query, values);
    return res.rows[0];
};

module.exports = {
    createFeedback,
    getAllFeedbacks,
    getFeedbackById,
};
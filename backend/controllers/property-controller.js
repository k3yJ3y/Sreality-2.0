const client = require('../util/db');

const ITEMS_PER_PAGE = 12;
const getProperties = async (req, res, next) => {
  currentPage = req.query?.page || 1;

  const offset = ITEMS_PER_PAGE * (currentPage - 1);

  let properties;

  try {
    const query = 'SELECT * FROM properties OFFSET $1 LIMIT $2';
    const values = [offset, 12];

    const result = await client.query(query, values);

    properties = result.rows;
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }

  res.status(200).json({ properties });
};

const getPropertiesPages = async (req, res, next) => {
  let totalPages;

  try {
    const query = `SELECT count(*) FROM properties`;

    const count = await client.query(query);

    totalPages = Math.ceil(Number(count.rows[0].count) / 12);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ message: 'Something went wrong.' });
  }

  res.status(200).json({ totalPages });
};

module.exports = { getProperties, getPropertiesPages };

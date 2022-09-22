import { pool } from "../../config/db";

export default async function handler(req, res) {
 
  switch (req.method) 
  {
    case "GET":      
      if(req.query.component=='category')
      {
        return await getCategoryBySlug(req, res);
      }
      if(req.query.component=='page')
      {
        return await getPageBySlug(req, res);
      }

    default:
      return res.status(400).send("Method not allowed");
  }
}


const getCategoryBySlug = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `pages` ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `pages` ");
  } catch (error) {
    return res.status(500).json({ error });
  }
};

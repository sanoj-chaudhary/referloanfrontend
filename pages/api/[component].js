import { pool } from "../../config/db";

export default async function handler(req, res) {
 
  switch (req.method) 
  {
    case "GET":      
      if(req.query.component=='partner')
      {
        return await getPartner(req, res);
      }
      if(req.query.component=='testimonial')
      {
        return await getTestimonial(req, res);
      }
      if(req.query.component=='video')
      {
        return await getVideo(req, res);
      }
    default:
      return res.status(400).send("Method not allowed");
  }
}


const getPartner = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `partners` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getVideo = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `videos` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getTestimonial = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
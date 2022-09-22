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
      if(req.query.component=='footerlink')
      {
        return await getFooterLink(req, res);
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

const getFooterLink = async (req, res) => {
  try 
  {
    const results1 = await pool.query("SELECT * FROM `settings` where `name` = 'footer_link' ");
   // const withoutFirstAndLast = results1.slice(1, -1);
   // const withoutFirstAndLast  = "1","2","3","4","5","6","7","8","22","24";
  //  const results2 = await pool.query("SELECT id,post_title FROM `pages` where `id` IN ("+withoutFirstAndLast+") ");

   // const withoutFirstAndLast = str.slice(1, -1);
    //SELECT * FROM `pages` where `id` IN (SELECT value FROM `settings` where `name` = 'footer_link');
    
    const results2 = await pool.query('SELECT id,post_title FROM `pages` where `id` IN ("1","2","3","4","5","6","7","8","22","24","25","43","44","137","138") ');
    return res.status(200).json(results2);
  } 
  catch (error) 
  {
    return res.status(500).json({ error });
  }
};
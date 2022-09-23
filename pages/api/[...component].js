import { pool } from "../../config/db";

export default async function handler(req, res) {
 
  switch (req.method) 
  {
    case "GET":      
      if(req.query.component=='partner')
      {
        return await getAllPartner(req, res);
      }
      if(req.query.component=='testimonial')
      {
        return await getAllTestimonial(req, res);
      }
      if(req.query.component=='video')
      {
        return await getAllVideo(req, res);
      }
      if(req.query.component=='headermenu')
      {
        return await getHeaderMenu(req, res);
      }
      if(req.query.component=='footerlink')
      {
        return await getFooterLink(req, res);
      }
      if(req.query.component[0]=='category')
      {
        if(req.query.component[1])
        {
          return await getCategoryBySlug(req, res);
        }
      }
      if(req.query.component[0]=='page')
      {
        if(req.query.component[1])
        {
          return await getPageBySlug(req, res);
        }
      }
      if(req.query.component[0]=='bank')
      {
        if(req.query.component[1])
        {
          return await getBankBySlug(req, res);
        }
      }
    default:
      return res.status(400).send("Method not allowed");
  }
}


const getAllPartner = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `partners` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllVideo = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `videos` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllTestimonial = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getHeaderMenu = async (req, res) => {
  try 
  {
    const results1 =  await pool.query("SELECT id,name,icon FROM `menu_types` ");
    
    // results1.forEach(function(result1)
    // {
    //    const menu_id  =    result1['id'];
    //    const results2 =    pool.query("SELECT * FROM `menus` LEFT JOIN `categories` ON categories.id = menus.cat_id WHERE `type1` = "+menu_id+" AND `page_id` = '0' AND `is_active` = '1' ");

      //  results2.forEach(function(result2)
      //  {
      //   const cat_id    =   results2['id'];
      //   const results3  =   pool.query("SELECT * FROM `menus` LEFT JOIN `pages` ON pages.id = menus.page_id WHERE `type1` = "+menu_id+" AND `cat_id` = "+cat_id+" AND `is_active` = '1' ");
    
      //   results3.forEach(function(result3)
      //   {
      //       const page_id    =  result3['id'];
      //       const page_name  =  result3['post_title'];    
      //   });
      //  })
    
   // })

    return res.status(200).json(results1);
  } 
  catch (error) 
  {
    return res.status(500).json({ error });
  }
};

const getFooterLink = async (req, res) => {
  try 
  {
    const results1            =   await pool.query("SELECT * FROM `settings` where `name` = 'footer_link' ");
   
    const withoutFirstAndLast =   results1[0]['value'].slice(1, -1);
   
    const results2            =   await pool.query('SELECT id,post_title FROM `pages` where `id` IN ('+withoutFirstAndLast+') ');

    return res.status(200).json(results2);
  } 
  catch (error) 
  {
    return res.status(500).json({ error });
  }
};

const getCategoryBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getBankBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
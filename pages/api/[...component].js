import { db } from "../../config/db";

export default async function handler(req, res) {
 
  switch (req.method) 
  {
    case "GET":      
    console.log(req.query.component)
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
    const results = await db.query("SELECT * FROM `partners` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllVideo = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `videos` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllTestimonial = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getHeaderMenu = async (req, res) => {
  try 
  {
    let category;
    let page;
    let menu_id;
    let cat_id;
    let temp = [];
    
    const menus = await db.query('SELECT id,name,icon FROM `menu_types` ');
    for ( let i in menus ) 
    {
      menu_id             =   menus[i].id;

      temp.push(menus[i]);

      if ( menu_id )
      {
          category =     await db.query("SELECT menus.id,menus.cat_id,categories.name,categories.slug,categories.full_url FROM `menus` LEFT JOIN `categories` ON categories.id = menus.cat_id WHERE menus.type1 = '"+menu_id+"' AND menus.page_id = '0' AND menus.is_active = '1' ");
          
          for ( let j in category ) 
          {
              menus[i]['category'] = category[j];
            
              cat_id = category[j].cat_id;

              if ( cat_id )
              {
                 page  =   await db.query("SELECT menus.id,menus.cat_id,pages.post_title,pages.post_slug,pages.full_url FROM `menus` LEFT JOIN `pages` ON pages.id = menus.page_id WHERE menus.type1 = '"+menu_id+"' AND menus.cat_id = '"+cat_id+"' AND menus.is_active = '1' ");
                 
              }
          }
      }
    }

    return res.status(200).json(temp);
  } 
  catch (error) 
  {
    return res.status(500).json({ error });
  }
};

const getFooterLink = async (req, res) => {
  try 
  {
    const results1            =   await db.query("SELECT * FROM `settings` where `name` = 'footer_link' ");
    const withoutFirstAndLast =   results1[0]['value'].slice(1, -1);
    const results2            =   await db.query('SELECT id,post_title FROM `pages` where `id` IN ('+withoutFirstAndLast+') ');

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
    const results = await db.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getBankBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT * FROM `pages` WHERE `post_slug` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
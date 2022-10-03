import { db } from "../../config/db";

export default async function handler(req, res) {
 
  switch (req.method) 
  {
    case "GET":      
    console.log(req.query.component[0])
      if(req.query.component=='partner')
      {
        return await getAllPartner(req, res);
      }
      if(req.query.component=='testimonial')
      {
        return await getAllTestimonial(req, res);
      }
      if(req.query.component=='allcategory')
      {
        return await getAllCategory(req, res);
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
      if(req.query.component=='footerlink2')
      {
        return await getFooterLink2(req, res);
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
      if(req.query.component[0]=='getpagebycatid')
      {
        if(req.query.component[1])
        {
          return await getPagesByCatId(req, res);
        }
      }
    case "POST": 
      if(req.query.component=='getcontentbysearch')
      {
        return await getContentBySearch(req, res);
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

const getAllCategory = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `categories` WHERE `is_active` = '1' ");
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
    
    if ( menus )
    {
      for ( let i in menus ) 
      {
        menu_id   =   menus[i].id;
        temp[i]   =   menus[i];

        category  =  await db.query("SELECT menus.id,menus.cat_id,categories.name,categories.slug,categories.full_url FROM `menus` LEFT JOIN `categories` ON categories.id = menus.cat_id WHERE menus.type1 = '"+menu_id+"' AND menus.page_id = '0' AND menus.is_active = '1' ");
        
        if ( category )
        {
          for ( let j in category ) 
          {
              cat_id               =   category[j].cat_id;
              menus[i]['category'] =   category;
              
              page  =  await db.query("SELECT menus.id,menus.cat_id,pages.post_title,pages.post_slug,pages.full_url FROM `menus` LEFT JOIN `pages` ON pages.id = menus.page_id WHERE menus.type1 = '"+menu_id+"' AND menus.cat_id = '"+cat_id+"' AND menus.is_active = '1' ");
              category[j]['page'] = page;
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
    const results2            =   await db.query('SELECT id,post_title,post_slug,full_url FROM `pages` where `id` IN ('+withoutFirstAndLast+') ');

    return res.status(200).json(results2);
  } 
  catch (error) 
  {
    return res.status(500).json({ error });
  }
};

const getFooterLink2 = async (req, res) => {
  try 
  {
    var temp = {'loan':[],'cc':[]};

    const results1    =   await db.query("SELECT id,post_title,post_slug,full_url FROM `pages` where pages.post_master = '1' AND pages.is_active = '1' AND pages.id IN (1,2,3,4,5,6) ");
    const results2    =   await db.query("SELECT id,post_title,post_slug,full_url FROM `pages` where pages.post_master = '2' AND pages.is_active = '1' AND pages.id IN (141,138,142,144,140,147) ");
   
    temp['loan'].push(results1);
    temp['cc'].push(results2);
    
    return res.status(200).json(temp);
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
    console.log(slug)
    const results = await db.query("SELECT post_content FROM `pages` WHERE `post_slug` = '"+slug+"' ");
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

const getPagesByCatId = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT id,post_master,post_title,post_slug,full_url FROM `pages` WHERE `post_master` = '"+slug+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getContentBySearch = async (req, res) => {
  try {
    const category    =   req.body.category;
    const product_id  =   req.body.product_id;
    const pincode     =   req.body.pincode;
    const emp_type    =   req.body.emp_type;
    
    const loan_amount =   req.body.loan_amount;
    const salary      =   req.body.salary;
    const turnover    =   req.body.turnover;
    const bank_id     =   req.body.bank_id;

    // Dummy data
    const data       =  {
                        0:{"bank_name" :"bank 1",
                        "interest":"10",
                        "fee":"10000"},
                        1:{"bank_name" :"bank 2",
                        "interest":"15",
                        "fee":"15000"},
                        2:{"bank_name" :"bank 3",
                        "interest":"20",
                        "fee":"20000"}
                       };
    
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
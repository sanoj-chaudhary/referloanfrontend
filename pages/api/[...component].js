import { db } from "../../config/db";
import NextCors from 'nextjs-cors';
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  switch (req.method) {
    case "GET":
      if (req.query.component == 'partner') {
        return await getAllPartner(req, res);
      }
      if (req.query.component == 'testimonial') {
        return await getAllTestimonial(req, res);
      }
      if (req.query.component == 'headermenu') {
        return await getHeaderMenu(req, res);
      }
      if (req.query.component == 'footerlink') {
        return await getFooterLink(req, res);
      }
      if (req.query.component == 'footerlink2') {
        return await getFooterLink2(req, res);
      }
      if (req.query.component[0] == 'get_search_info_local') {
        return await GetSearchInfoLocal(req, res);
      }
      if (req.query.component[0] == 'get_product_by_slug') {
        return await GetProductBySlug(req, res);
      }
      if (req.query.component[0] == 'get_product_by_catid') {
        return await GetProductByCatId(req, res);
      }
      if (req.query.component == 'allcategory') {
        return await getAllCategory(req, res);
      }
      
      
    case "POST":
      if (req.query.component == 'insert_search_info_local') {
        return await insertSearchInfoLocal(req, res);
      }

    default:
      return res.status(400).send("Method not allowed");
  }
}

const insertSearchInfoLocal = async (req, res) => {
  try {
    let cat_id = req.body.cat_id;
    let product_id = req.body.product_id;
    let employemnt_type = req.body.employemnt_type;
    let salary = req.body.salary;
    let turnover = req.body.turnover;
    let pincode = req.body.pincode;
    let interest_min = req.body.interest_min;
    let interest_max = req.body.interest_max;
    
    const split = product_id.split("_");
    
    const results = await db.query("INSERT INTO `search_info_local` SET `cat_id` = '"+cat_id+"',`product_id` = '"+split[0]+"',`slug` = '"+split[1]+"',`name` = '"+split[2]+"',`employemnt_type` = '"+employemnt_type+"', `salary` = '"+salary+"', `turnover` = '"+turnover+"', `pincode` = '"+pincode+"', `interest_min` = '"+interest_min+"', `interest_max` = '"+interest_max+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const GetSearchInfoLocal = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `search_info_local` WHERE `id` = '"+req.query.component[1]+"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const GetProductBySlug = async (req, res) => {
  try {
    let slug;
    if(req.query.component[2])
    {
      slug = req.query.component[1]+'/'+req.query.component[2];
    
    }
    else
    {
       slug = req.query.component[1];
    }
    const results = await db.query("SELECT * FROM `view_product` WHERE `slug` = '"+slug +"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const GetProductByCatId = async (req, res) => {
  try {
    let cat_id = req.query.component[1];

    const results = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '"+cat_id +"' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllPartner = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `partners` WHERE `is_active` = '1' ");
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
  try {
    let query_cat;
    let query_product;
    let query_bank_product;
    let query_page;
    
    let category_id;
    let product_id;
    let page_id;
    let temp = [];


    query_cat = await db.query("SELECT * FROM `view_category` WHERE `status` = '1' and `is_menu` = '1' and `slug` != '' ");

    if (query_cat) {
      for (let i in query_cat) {
        category_id = query_cat[i].id;
        temp[i] = query_cat[i];

        if(query_cat[i].hierarchy=='Product_BankProduct')
        {
          query_product = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '" + category_id + "' AND `status` = '1' and `is_menu` = '1' and `slug` != '' ORDER BY `searial_by` ");

          if (query_product) {
            for (let j in query_product) {
              product_id = query_product[j].id;
              temp[i]['product'] = query_product;
 
              query_bank_product = await db.query("SELECT *, IF(searial_by IS NULL, 99999, searial_by) as order_by FROM `view_bank_product` WHERE `status`='1' and `product_id` = '" + product_id + "' ORDER BY order_by  ");
              query_product[j]['bank_product'] = query_bank_product;
            }
          }
        }
        else
        {
          query_page = await db.query("SELECT * FROM `pages` WHERE `categories_id` = '" + category_id + "' AND status = '1' ");

          if (query_page) {
            for (let j in query_page) {
              page_id = query_page[j].id;
              temp[i]['page'] = query_page;
            }
          }
        }
        

      }
    }

    return res.status(200).json(temp);
  }
  catch (error) {
    return res.status(500).json({ error });
  }
};

const getFooterLink = async (req, res) => {
  try {
    var temp = { 'loanP': [], 'loanBP': [] , 'ccBP': [] };

    // Loan - 2, CC - 1, Other - 7
    const results1 = await db.query("SELECT id,name,slug FROM `view_product` where cat_id = '2' LIMIT 0,5 ");
    const results2 = await db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '2'  LIMIT 0,5 ");
    const results3 = await db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '1' LIMIT 0,5 ");

    temp['loanP'].push(results1);
    temp['loanBP'].push(results2);
    temp['ccBP'].push(results3);

    return res.status(200).json(temp);
  }
  catch (error) {
    return res.status(500).json({ error });
  }
};

const getFooterLink2 = async (req, res) => {
  try {
    var temp = { 'loan': [], 'cc': [] };

    // Loan - 2, CC - 1, Other - 7
    const results1 = await db.query("SELECT id, name , slug FROM `view_product` where cat_id = '2' LIMIT 0,5 ");
    const results2 = await db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '1' LIMIT 0,5 ");

    temp['loan'].push(results1);
    temp['cc'].push(results2);

    return res.status(200).json(temp);
  }
  catch (error) {
    return res.status(500).json({ error });
  }
};

// Make API For Mobile APP
const getAllCategory = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `categories` WHERE `status` = '1' AND `is_menu` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

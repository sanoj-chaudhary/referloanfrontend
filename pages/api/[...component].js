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
      console.log(req.query.component[0])
      if (req.query.component == 'partner') {
        return await getAllPartner(req, res);
      }
      if (req.query.component == 'testimonial') {
        return await getAllTestimonial(req, res);
      }
      if (req.query.component == 'allcategory') {
        return await getAllCategory(req, res);
      }
      if (req.query.component == 'video') {
        return await getAllVideo(req, res);
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
      if (req.query.component[0] == 'category') {
        if (req.query.component[1]) {
          return await getCategoryBySlug(req, res);
        }
      }
      if (req.query.component[0] == 'page') {
        if (req.query.component[1]) {
          return await getPageBySlug(req, res);
        }
      }
      if (req.query.component[0] == 'bank') {
        if (req.query.component[1]) {
          return await getBankBySlug(req, res);
        }
      }
      if (req.query.component[0] == 'getpagebycatid') {
        if (req.query.component[1]) {
          return await getPagesByCatId(req, res);
        }
      }
    case "POST":
      if(req.query.component == 'insertPage'){
        return await insertPage(req,res);
      }

      if (req.query.component == 'getcontentbysearch') {
        return await getContentBySearch(req, res);
      }
      if (req.query.component == 'apistructurebyapiid') {
        return await getApiDataStructureByApiId(req, res);
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
  try {
    let query_cat;
    let query_product;
    let query_bank_product;
    
    let category_id;
    let product_id;
    let temp = [];

    query_cat = await db.query("SELECT id,name FROM `categories` WHERE categories.status = '1' ");

    if (query_cat) {
      for (let i in query_cat) {
        category_id = query_cat[i].id;
        temp[i] = query_cat[i];

         query_product = await db.query("SELECT * FROM `products` WHERE products.categories_id = '" + category_id + "' AND products.status = '1' ");

         if (query_product) {
           for (let j in query_product) {
             product_id = query_product[j].id;
             temp[i]['product'] = query_product;

             query_bank_product = await db.query("SELECT * FROM `bank_products` WHERE bank_products.products_id = '" + product_id + "' AND bank_products.status = '1' ");
             query_product[j]['bank_product'] = query_bank_product;
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
    const results1 = await db.query("SELECT * FROM `products` where products.categories_id = '2' AND products.status = '1' LIMIT 0,5 ");
    const results2 = await db.query("SELECT * FROM `bank_products` where bank_products.products_id = '2' AND bank_products.status = '1' LIMIT 0,5 ");
    const results3 = await db.query("SELECT * FROM `bank_products` where bank_products.products_id = '1' AND bank_products.status = '1' LIMIT 0,5 ");

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
    const results1 = await db.query("SELECT * FROM `products` where products.categories_id = '2' AND products.status = '1' LIMIT 0,5 ");
    const results2 = await db.query("SELECT * FROM `bank_products` where bank_products.products_id = '1' AND bank_products.status = '1' LIMIT 0,5 ");

    temp['loan'].push(results1);
    temp['cc'].push(results2);

    return res.status(200).json(temp);
  }
  catch (error) {
    return res.status(500).json({ error });
  }
};

const getCategoryBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT * FROM `pages` WHERE `post_slug` = '" + slug + "' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getPageBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    console.log(slug)
    const results = await db.query("SELECT post_content FROM `pages` WHERE `post_slug` = '" + slug + "' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getBankBySlug = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT * FROM `pages` WHERE `post_slug` = '" + slug + "' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getPagesByCatId = async (req, res) => {
  try {
    const slug = req.query.component[1];
    const results = await db.query("SELECT id,post_master,post_title,post_slug,full_url FROM `pages` WHERE `post_master` = '" + slug + "' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getContentBySearch = async (req, res) => {
  try {
    const category = req.body.category;
    const product_id = req.body.product_id;
    const pincode = req.body.pincode;
    const emp_type = req.body.emp_type;

    const loan_amount = req.body.loan_amount;
    const salary = req.body.salary;
    const turnover = req.body.turnover;
    const bank_id = req.body.bank_id;

    // Dummy data
    const data = {
      "status": true,
      "data":
      {
        0: {
          "bank_id": "1",
          "bank_name": "bank 1",
          "interest": "10",
          "fee": "10000",
          'api_id': '1'
        },
        1: {
          "bank_id": "2",
          "bank_name": "bank 2",
          "interest": "20",
          "fee": "20000",
          'api_id': '21'
        },
        2: {
          "bank_id": "3",
          "bank_name": "bank 3",
          "interest": "30",
          "fee": "30000",
          'api_id': '31'
        },
        3: {
          "bank_id": "4",
          "bank_name": "bank 4",
          "interest": "40",
          "fee": "40000",
          'api_id': '12'
        }
      }
    };

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getApiDataStructureByApiId = async (req, res) => {
  try {
    const api_id = req.body.api_id;
console.log("form"+req.body)
    // Dummy data
    const data = {
      "status": true,
      "section":
      {
        "step1": {
          "column": {
            "column1": {
              "field_name": "First Name",
              "param_name": "first_name",
              "is_required": true,
              "is_visible": "1",
              "type": "text",
              "is_header": false,
              "pattern": "/[^a-zA-Z ]/g",
              'options': ""
            },
            "column2": {
              "field_name": "Last Name",
              "param_name": "last_name",
              "is_required": false,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "/[^a-zA-Z ]/g",
              'options': ""
            },
            "column3": {
              "field_name": "Email Id",
              "param_name": "email",
              "is_required": true,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "",
              'options': ""
            },
            "column4": {
              "field_name": "Phone No", 
              "param_name": "phone",
              "is_required": true,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "/[^0-9]/g",
              'options': ""
            }
          },
          "url": "http://127.0.0.1:3000/api/getdatabyapiid1"
        },
        "step2": {
          "column": {
            "column1": {
              "field_name": "Company Name",
              "param_name": "company_name",
              "is_required": true,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "/[^a-zA-Z]/g",
              'options': ""
            },
            "column2": {
              "field_name": "Address",
              "param_name": "address",
              "is_required": true,
              "is_visible": true,
              "type": "textarea",
              "is_header": false,
              "pattern": "/[^A-Za-z0-9 ().,-]/g",
              'options': ""
            },
            "column3": {
              "field_name": "State",
              "param_name": "state",
              "is_required": true,
              "is_visible": true,
              "type": "select",
              "is_header": false,
              "pattern": "",
              'options': {
                "0" :{
                  "id": "1",
                  "name": "Raj"
                },
                "1":{
                  "id": "2",
                  "name": "Pan"
                }
              }
            }
          },
          "url": "http://127.0.0.1:3000/api/getdatabyapiid2"
        },
        "step3": {
          "column": {
            "column1": {
              "field_name": "Salary",
              "param_name": "salary",
              "is_required": true,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "/[^0-9]/g",
              'options': ""
            },
            "column2": {
              "field_name": "Loan Amount",
              "param_name": "loan_amt",
              "is_required": true,
              "is_visible": true,
              "type": "text",
              "is_header": false,
              "pattern": "/[^0-9]/g",
              'options': ""
            }
          },
          "url": "http://127.0.0.1:3000/api/getdatabyapiid3"
        }
      }
    };

    return res.status(200).json({'name':'sanoj'});
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const insertPage = async (req, res) =>{
  try {
    if(req.body.action == 'insert'){
      const {id,name,slug,description,meta_title,meta_keyword,meta_description,categories_id,product_id,bank_product_id,bank_id,status} = req.body;
      const result = await db.query("INSERT INTO `pages`(`id`, `name`, `slug`, `description`, `meta_title`, `meta_keyword`, `meta_description`, `categories_id`, `product_id`, `bank_product_id`, `bank_id`, `status`)VALUES('"+id+"','"+name+"','"+slug+"','"+description+"','"+meta_title+"','"+meta_keyword+"','"+meta_description+"','"+categories_id+"','"+product_id+"','"+bank_product_id+"','"+bank_id+"','"+status+"')")

      return res.status(200).json({'action':result});
    }else if(req.body.action == 'update'){
      const {id,name,slug,description,meta_title,meta_keyword,meta_description,categories_id,product_id,bank_product_id,bank_id,status} = req.body;
      const updaeres = await db.query("UPDATE `pages` SET `id`='"+id+"',`name`='"+name+"',`slug`='"+slug+"',`description`='"+description+"',`meta_title`='"+meta_title+"',`meta_keyword`='"+meta_keyword+"',`meta_description`='"+meta_description+"',`categories_id`='"+categories_id+"',`product_id`='"+product_id+"',`bank_product_id`='"+bank_product_id+"',`bank_id`='"+bank_id+"',`status`='"+status+"' WHERE id='"+id+"'")

      if(updaeres.changedRows == 0){
        return res.status(500).json({ "message":"Something went wrong"});
      }
      return res.status(200).json({'action':updaeres});
    }else if(req.body.action == 'delete'){
      return res.status(200).json({'action':'delete'});
    }
  } catch (error) {
    return res.status(500).json({ "message":error.message });
  }
  
}
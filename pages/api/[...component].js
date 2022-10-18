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
    case "POST":
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
    
    let category_id;
    let product_id;
    let temp = [];


    query_cat = await db.query("SELECT id,name,slug FROM `view_category` WHERE `status` = '1' and `id` !=7 and `slug` != '' ");

    if (query_cat) {
      for (let i in query_cat) {
        category_id = query_cat[i].id;
        temp[i] = query_cat[i];

         query_product = await db.query("SELECT id,name , slug FROM `view_product` WHERE `cat_id` = '" + category_id + "' AND `status` = '1' and `is_menu` = '1' and `slug` != '' ");

         if (query_product) {
           for (let j in query_product) {
             product_id = query_product[j].id;
             temp[i]['product'] = query_product;

             query_bank_product = await db.query("SELECT id,name, slug FROM `view_bank_product` WHERE `product_id` = '" + product_id + "'  ");
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
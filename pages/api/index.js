import { pool } from "../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getPartner(req, res);
    case "GET":
      return await getVideo(req, res);
    case "POST":
      return await getTestimonial(req, res);
    case "POST":
      return await getHeaderMenu(req, res);
    case "POST":
      return await getCategoryBySlug(req, res);
    case "POST":
      return await getContentBySlug(req, res);
    case "POST":
      return await getFooterLink(req, res);
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

const getHeaderMenu = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `menus` ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getCategoryBySlug = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getContentBySlug = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getFooterLink = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM `pages` WHERE `post_slug` = '1' ");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


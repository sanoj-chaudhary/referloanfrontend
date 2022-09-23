import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "newcms_referloan_in",
  },
});

export { db };

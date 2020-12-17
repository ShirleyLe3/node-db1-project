const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();
// try{

// } catch (err) {
//     next(err)
// }
//---------------------------------------------------------
//                      READ
//---------------------------------------------------------
router.get("/", async (req, res, next) => {
  try {
    // 'SELECT * FROM accounts;'     port/accounts
    const accounts = await db.select("*").from("accounts");
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

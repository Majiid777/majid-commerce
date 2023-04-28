const express = require("express");
const { signUp,LogIn,auth,getAllUser,updateUser,deleteUser } = require("../controllers/user.controller");
const { signUpRules,validator } = require("../middleware/validator");
const verifyAuth = require("../middleware/verifyAuth");
const router = express.Router();

router.post("/signUp", signUpRules(), validator ,signUp);
router.post('/signIn',LogIn);
router.get('/auth',verifyAuth,auth);

router.get("/getAllUser", getAllUser);
router.put("/updateUser/:_id", updateUser);
router.delete("/deleteOneUser/:_id", deleteUser);

module.exports = router;


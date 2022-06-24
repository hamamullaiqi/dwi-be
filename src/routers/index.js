const express = require("express");
const { register, login, checkAuth } = require("../controllers/auth");
const { AddPembayaran } = require("../controllers/pembayaran");
const {
  getAllRegistrasi,
  getRegistrasi,
  addRegistrasi,
} = require("../controllers/registrasi");
const { auth } = require("../middlewares/checkAuth");
const { uploadFile } = require("../middlewares/uploadFile");
const router = express.Router();

//auth
router.post("/register", register);
router.post("/login", login);

//checkAuth
router.get("/check-auth", auth, checkAuth);

//Pembayaran
router.post(
  "/add-pembayarans",
  uploadFile("bukti_pembayaran"),
  auth,
  AddPembayaran
);

//registrasi
router.get("/registrasi/all", getAllRegistrasi);
router.get("/registrasi", getRegistrasi);
router.post("/registrasi/add", addRegistrasi);

module.exports = router;

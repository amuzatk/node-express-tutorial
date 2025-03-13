const express = require("express");
const router = express.Router();
const {
    deletePerson,
    updatePerson,
    createPersonPostman,
    createPerson,
    getPeople
} = require("../controllers/people");

// //first flavour
// router.get("/", getPeople);
// router.post('/', createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

//second flavour
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var CrowdFund_json_1 = __importDefault(require("../contracts/CrowdFund.json"));
router.get("/crowd-fund", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(CrowdFund_json_1.default));
    // const recoveryFunction = req.body.legacy
    //     ? recoverTypedSignatureLegacy
    //     : recoverTypedSignature;
    //
    // try {
    //     const recoveredAddress = recoveryFunction({
    //         data: req.body.data,
    //         sig: req.body.sig
    //     });
    //     res.send(JSON.stringify({ recoveredAddress }));
    // } catch (e) {
    //     console.log(e);
    //     res.status(400);
    //     const message =
    //         "Something went wrong when attempting to recover the typed signature. Please try again after checking your data and sig";
    //     res.send(JSON.stringify({ message }));
    // }
});
exports.ContractController = router;

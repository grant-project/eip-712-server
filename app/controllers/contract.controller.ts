import { Router, Request, Response } from "express";
const router: Router = Router();
import CrowdFund from '../contracts/CrowdFund.json';
import CrowdFundFactory from '../contracts/CrowdFundFactory.json';

router.get("/crowd-fund", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(CrowdFund))
});

router.get("/factory", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(CrowdFundFactory))
});

export const ContractController: Router = router;

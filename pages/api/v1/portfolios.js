import PortfolioApi from "@/lib/api/portfolios";

export default async function createPortfolio(req, res) {
    try {
        const data = req.body;
        await new PortfolioApi().createPortfolio(data);
        return res.json({ message: "Succesfully created portfolio" });
    } catch (e) {
        return res.status(e.status || 400).end(e.message);
    }
}

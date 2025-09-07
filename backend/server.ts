import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get Gemini API key from environment
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// POST endpoint for proposal generation
app.post("/api/generateProposal", async (req, res) => {
  try {
    const { tenderDetails, companyDetails } = req.body;

    // Call Gemini API
    const response = await fetch("https://api.gemini.com/v1/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GEMINI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemini-1.5",
        prompt: `Create a professional tender proposal using the following info:\n\nTender Details: ${tenderDetails}\nCompany Details: ${companyDetails}`,
        max_tokens: 1000
      }),
    });

    const data = await response.json();

    // Return proposal text
    res.json({ proposal: data.output_text || data.output || "No proposal generated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate proposal" });
  }
});

// Start server
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));

import { useState } from "react";
import ProposalForm from "./ProposalForm";

const ProposalPage: React.FC = () => {
  const [generatedText, setGeneratedText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateProposal = async (data: { tenderDetails: string; companyDetails: string }) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setGeneratedText(result.proposal);
    } catch (err) {
      console.error(err);
      setGeneratedText("Error generating proposal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <ProposalForm generateProposal={generateProposal} />

      {loading && <p className="text-center text-blue-600">Generating proposal...</p>}

      {generatedText && (
        <div className="p-4 border rounded bg-gray-50">
          <h4 className="font-semibold mb-2">Generated Proposal</h4>
          <pre className="whitespace-pre-wrap">{generatedText}</pre>
        </div>
      )}
    </div>
  );
};

export default ProposalPage;

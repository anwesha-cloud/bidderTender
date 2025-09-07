import { useState, FormEvent } from "react";

interface ProposalFormProps {
  generateProposal: (data: { tenderDetails: string; companyDetails: string }) => void;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ generateProposal }) => {
  const [tenderDetails, setTenderDetails] = useState("");
  const [companyDetails, setCompanyDetails] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    generateProposal({ tenderDetails, companyDetails });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        placeholder="Enter Tender Details"
        value={tenderDetails}
        onChange={(e) => setTenderDetails(e.target.value)}
        className="w-full p-2 border rounded"
        rows={5}
        required
      />
      <textarea
        placeholder="Enter Your Company Details"
        value={companyDetails}
        onChange={(e) => setCompanyDetails(e.target.value)}
        className="w-full p-2 border rounded"
        rows={5}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Generate Proposal
      </button>
    </form>
  );
};

export default ProposalForm;

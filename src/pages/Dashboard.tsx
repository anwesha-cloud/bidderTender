import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFilters from "@/components/SearchFilters";
import TenderCard from "@/components/TenderCard";
import ProposalPage from "./ProposalPage"; // AI Proposal Generator
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Shield, Globe } from "lucide-react";

// Mock tenders (use real data if available)
const mockTenders = [
  {
    id: "1",
    title: "Smart City Infrastructure Development Project - Phase 2",
    country: "India",
    region: "Mumbai",
    deadline: "2024-12-15",
    budget: "$2.5M - $5M",
    category: "Infrastructure",
    description:
      "Large-scale smart city development project focusing on IoT integration, traffic management systems, and sustainable urban planning solutions.",
    aiMatch: 94,
    isRecommended: true,
  },
  {
    id: "2",
    title: "Digital Transformation Services for Government Agencies",
    country: "United Kingdom",
    region: "London",
    deadline: "2024-11-20",
    budget: "$500K - $1M",
    category: "IT Services",
    description:
      "Comprehensive digital transformation services including cloud migration, cybersecurity implementation, and process automation for multiple government departments.",
    aiMatch: 87,
    isRecommended: true,
  },
  {
    id: "3",
    title: "Healthcare Equipment Supply and Maintenance Contract",
    country: "Canada",
    region: "Ontario",
    deadline: "2024-12-01",
    budget: "$1M - $3M",
    category: "Healthcare",
    description:
      "Supply, installation, and 5-year maintenance contract for advanced medical equipment across 15 regional hospitals and healthcare facilities.",
    aiMatch: 76,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Discover Your Next Opportunity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Use our AI-powered search to find the most relevant tenders for your business. 
              Get personalized recommendations based on your expertise and past performance.
            </p>
          </div>
          <SearchFilters />
        </section>

        {/* Tender Listings */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Recommended for You
              </h3>
              <p className="text-muted-foreground">
                AI-curated tenders based on your profile and preferences
              </p>
            </div>
            <Button variant="outline">
              View All Tenders
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTenders.map((tender) => (
              <TenderCard key={tender.id} tender={tender} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose TenderGlobal?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform gives you the competitive edge you need to win more tenders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Global Coverage</h4>
              <p className="text-muted-foreground">
                Access tenders from 200+ countries and territories worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-success to-accent p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-success-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">AI Proposals</h4>
              <p className="text-muted-foreground">
                Generate tailored proposals using advanced AI technology
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Smart Matching</h4>
              <p className="text-muted-foreground">
                Get personalized tender recommendations with AI-powered matching
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-warning to-accent p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-warning-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Secure Platform</h4>
              <p className="text-muted-foreground">
                Enterprise-grade security with encrypted transactions
              </p>
            </div>
          </div>
        </section>

        {/* AI Proposal Generator Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Generate Your AI Proposal
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quickly create professional proposals for any tender using AI.
            </p>
          </div>
          <ProposalPage />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold">TenderGlobal</span>
            </div>
            <p className="text-primary-foreground/80 mb-8">
              The world's most advanced AI-powered tender marketplace
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 TenderGlobal. Connecting businesses with global opportunities.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

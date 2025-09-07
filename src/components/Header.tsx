import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Globe, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient"; // Make sure you have Supabase client setup

const Header: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const user = supabase.auth.user();
    if (user) setUserEmail(user.email);

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.email) setUserEmail(session.user.email);
      else setUserEmail(null);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Globe className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TenderGlobal</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Tender Marketplace</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tenders" className="text-foreground hover:text-accent transition-colors">
              Browse Tenders
            </a>
            <a href="#ai-tools" className="text-foreground hover:text-accent transition-colors">
              AI Tools
            </a>
            <a href="#dashboard" className="text-foreground hover:text-accent transition-colors">
              Dashboard
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>

            {/* Show user email if logged in */}
            {userEmail ? (
              <span className="text-sm font-medium text-foreground">{userEmail}</span>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="hero">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

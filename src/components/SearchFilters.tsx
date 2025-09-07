import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Sparkles } from "lucide-react";
import { useState } from "react";

const SearchFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search tenders, keywords, or company names..." 
          className="pl-10 h-12 text-base"
        />
        <Button variant="hero" className="absolute right-2 top-2">
          <Sparkles className="h-4 w-4 mr-2" />
          AI Search
        </Button>
      </div>

      {/* Filter Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Select onValueChange={(value) => addFilter(`Country: ${value}`)}>
          <SelectTrigger>
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="australia">Australia</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => addFilter(`Category: ${value}`)}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="construction">Construction</SelectItem>
            <SelectItem value="it">IT Services</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="defense">Defense</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="supplies">Supplies</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => addFilter(`Budget: ${value}`)}>
          <SelectTrigger>
            <SelectValue placeholder="Budget Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50k">$0 - $50K</SelectItem>
            <SelectItem value="50k-250k">$50K - $250K</SelectItem>
            <SelectItem value="250k-1m">$250K - $1M</SelectItem>
            <SelectItem value="1m-10m">$1M - $10M</SelectItem>
            <SelectItem value="10m+">$10M+</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => addFilter(`Deadline: ${value}`)}>
          <SelectTrigger>
            <SelectValue placeholder="Deadline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Next 7 days</SelectItem>
            <SelectItem value="30d">Next 30 days</SelectItem>
            <SelectItem value="90d">Next 90 days</SelectItem>
            <SelectItem value="all">All active</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Advanced Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => addFilter("AI Recommended")}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          AI Recommended
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => addFilter("High Match Score")}
        >
          <Filter className="h-4 w-4 mr-2" />
          High Match Score
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => addFilter("Recently Added")}
        >
          Recently Added
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
          {activeFilters.map((filter, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="flex items-center gap-1"
            >
              {filter}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-destructive" 
                onClick={() => removeFilter(filter)}
              />
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setActiveFilters([])}
            className="text-xs"
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Showing 1,247 tenders</span>
        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-32 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
              <SelectItem value="recent">Recently Added</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
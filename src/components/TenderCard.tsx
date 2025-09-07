import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, FileText, Sparkles } from "lucide-react";

interface TenderCardProps {
  tender: {
    id: string;
    title: string;
    country: string;
    region: string;
    deadline: string;
    budget: string;
    category: string;
    description: string;
    aiMatch: number;
    isRecommended?: boolean;
  };
}

const TenderCard = ({ tender }: TenderCardProps) => {
  const getDaysUntilDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = getDaysUntilDeadline(tender.deadline);
  const urgencyColor = daysLeft <= 7 ? "warning" : daysLeft <= 14 ? "accent" : "success";

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      tender.isRecommended ? 'ring-2 ring-success border-success/50' : ''
    }`}>
      {tender.isRecommended && (
        <div className="absolute -top-2 -right-2 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <Sparkles className="h-3 w-3 mr-1" />
          AI Recommended
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-3">
          <CardTitle className="text-lg leading-tight line-clamp-2">
            {tender.title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {tender.category}
          </Badge>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {tender.country}, {tender.region}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {tender.description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
              <div className="font-medium">{daysLeft} days left</div>
              <div className="text-xs text-muted-foreground">
                {new Date(tender.deadline).toLocaleDateString()}
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
              <div className="font-medium">{tender.budget}</div>
              <div className="text-xs text-muted-foreground">Budget</div>
            </div>
          </div>
        </div>

        {tender.aiMatch && (
          <div className="bg-muted rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">AI Match Score</span>
              <span className="text-sm font-bold text-success">{tender.aiMatch}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-success to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${tender.aiMatch}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <Button variant="default" className="flex-1">
            <FileText className="h-4 w-4 mr-2" />
            View Details
          </Button>
          <Button variant="accent" className="flex-1">
            <Sparkles className="h-4 w-4 mr-2" />
            AI Proposal
          </Button>
        </div>
        
        <Badge 
          variant={urgencyColor === "warning" ? "destructive" : "secondary"}
          className="w-full justify-center"
        >
          {urgencyColor === "warning" ? "Urgent" : urgencyColor === "accent" ? "Soon" : "Active"}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default TenderCard;
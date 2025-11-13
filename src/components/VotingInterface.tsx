import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Lock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VotingInterface = () => {
  const [selectedVote, setSelectedVote] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);
  const { toast } = useToast();

  const proposals = [
    {
      id: "proposal-1",
      title: "DeFi Protocol Expansion",
      description: "Expand the protocol to support cross-chain transactions",
      stakeRequired: "1000 STAKE"
    },
    {
      id: "proposal-2",
      title: "Governance Update",
      description: "Implement quadratic voting mechanism for future proposals",
      stakeRequired: "500 STAKE"
    },
    {
      id: "proposal-3",
      title: "Treasury Allocation",
      description: "Allocate 20% of treasury to ecosystem development fund",
      stakeRequired: "2000 STAKE"
    }
  ];

  const handleVote = () => {
    if (!selectedVote) {
      toast({
        title: "No selection",
        description: "Please select a proposal to vote on",
        variant: "destructive"
      });
      return;
    }

    setHasVoted(true);
    toast({
      title: "Vote encrypted and submitted",
      description: "Your vote has been securely encrypted and recorded",
    });
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Active Proposals</h2>
          <p className="text-muted-foreground">Select a proposal and cast your encrypted vote</p>
        </div>

        <Card className="border-primary/20 glow-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Encrypted Ballot
            </CardTitle>
            <CardDescription>
              Your vote weight: <span className="text-primary font-mono blur-sm hover:blur-none transition-all cursor-pointer">█████ STAKE</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedVote} onValueChange={setSelectedVote} className="space-y-4">
              {proposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="flex items-start space-x-3 space-y-0 rounded-lg border border-border p-4 hover:border-primary/50 transition-all encrypted-pattern"
                >
                  <RadioGroupItem value={proposal.id} id={proposal.id} className="mt-1" />
                  <Label htmlFor={proposal.id} className="flex-1 cursor-pointer">
                    <div>
                      <h3 className="font-semibold mb-1">{proposal.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{proposal.description}</p>
                      <span className="text-xs text-primary font-mono">Min. stake: {proposal.stakeRequired}</span>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-center">
              {!hasVoted ? (
                <Button
                  size="lg"
                  onClick={handleVote}
                  className="glow-primary hover:glow-accent animate-pulse-glow"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Submit Encrypted Vote
                </Button>
              ) : (
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold">Vote recorded and encrypted</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VotingInterface;

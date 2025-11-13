import { Progress } from "@/components/ui/progress";
import { Users, Clock, TrendingUp } from "lucide-react";

const AggregationMeter = () => {
  const votingProgress = 67; // Percentage of votes cast
  const timeRemaining = "2d 14h 32m";
  const totalParticipants = 1247;

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-primary">Aggregation Status</h3>
          <p className="text-muted-foreground">
            Final results will be revealed transparently when voting concludes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Voting Progress</span>
              <span className="text-sm font-mono text-primary">{votingProgress}%</span>
            </div>
            <Progress value={votingProgress} className="h-3 glow-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Participants</p>
                <p className="text-xl font-bold font-mono">{totalParticipants.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border">
              <Clock className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Time Remaining</p>
                <p className="text-xl font-bold font-mono">{timeRemaining}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Reveal Progress</p>
                <p className="text-xl font-bold font-mono blur-sm hover:blur-none transition-all cursor-pointer">
                  ████
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Powered by encrypted voting protocol • Rainbow Wallet required
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AggregationMeter;

import { Shield, Lock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Encrypted Voting Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cast your vote on project proposals with complete privacy. Your stake weight and preferences remain encrypted until the final aggregation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Encrypted Votes",
              description: "Your voting choices are encrypted and hidden from all participants until reveal"
            },
            {
              icon: Lock,
              title: "Stake Privacy",
              description: "Your stake weight remains confidential throughout the voting process"
            },
            {
              icon: Eye,
              title: "Transparent Aggregation",
              description: "Final results revealed simultaneously to all participants after voting ends"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all encrypted-pattern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VotingInterface from "@/components/VotingInterface";
import AggregationMeter from "@/components/AggregationMeter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VotingInterface />
      <AggregationMeter />
    </div>
  );
};

export default Index;

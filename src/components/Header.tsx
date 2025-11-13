import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/silentstake-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SilentStake" className="w-10 h-10" />
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SilentStake
            </h1>
          </div>
          
          <Button className="glow-primary hover:glow-accent transition-all">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Rainbow Wallet
          </Button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-lg font-medium text-foreground">
            Your Vote Matters, Your Identity Stays Hidden.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

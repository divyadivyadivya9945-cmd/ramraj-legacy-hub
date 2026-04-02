import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login feature coming soon!",
      description: "Connect Lovable Cloud to enable real authentication.",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-heading font-bold text-primary">Ramraj <span className="text-gradient-gold">Cottons</span></h1>
          </Link>
          <p className="text-muted-foreground font-body text-sm mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-elegant border border-border space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-body">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-body">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <p className="text-center text-sm text-muted-foreground font-body">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-semibold hover:underline">Sign up</Link>
          </p>
        </form>

        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary font-body transition-colors">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

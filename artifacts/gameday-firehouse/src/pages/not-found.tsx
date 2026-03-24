import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_50%)]"></div>
      
      <div className="max-w-md w-full text-center relative z-10 p-8 rounded-2xl bg-card border border-border shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-5xl font-display font-bold text-white mb-2 uppercase tracking-wider">
          404 <span className="text-primary">Out of Bounds</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 font-medium">
          Looks like this page got ejected. The content you're looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className="inline-block">
          <Button size="lg" className="w-full sm:w-auto font-display text-xl tracking-wider">
            <Home className="mr-2 h-5 w-5" />
            Back to Home Base
          </Button>
        </Link>
      </div>
    </div>
  );
}

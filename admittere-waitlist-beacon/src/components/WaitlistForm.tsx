
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "Thanks for joining. We'll keep you updated on our launch.",
      });
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md mx-auto space-y-4">
      <div className="relative w-full">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-12 w-full"
          required
        />
      </div>
      <Button type="submit" className="h-12 px-8 bg-[#16a085] hover:bg-[#13806a]">
        Join Waitlist
      </Button>
    </form>
  );
};

export default WaitlistForm;

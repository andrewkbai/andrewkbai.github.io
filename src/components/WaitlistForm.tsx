import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const lastSubmitted = localStorage.getItem('submitted_email');

    if (lastSubmitted === email) {
      toast({
        title: "Already submitted!",
        description: "You already joined the waitlist.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('waitlist_tgchannel') // adjust your table name if needed
        .insert([{ email }]);

      if (error) {
        console.error('Insert error:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      } else {
        localStorage.setItem('submitted_email', email);
        toast({
          title: "You're on the list!",
          description: "Thanks for joining. We'll keep you updated.",
        });
        setEmail('');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md mx-auto space-y-4">
      <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
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

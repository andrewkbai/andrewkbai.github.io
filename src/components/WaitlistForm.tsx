import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { createClient } from '@supabase/supabase-js';

// 1) Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const emailRegex = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('waitlist_tgchannel')
        .insert([{ email }]);

      if (error) {
        console.error('Insert error:', error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      } else {
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

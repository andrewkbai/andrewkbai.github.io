import WaitlistForm from "@/components/WaitlistForm";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    title: "Expert Mind Put in AI",
    description: "An AI infused with the mind and strategy of top admissions experts. Trained only on what works - not just another ChatGPT wrapper."
  },
  {
    title: "Build a Story That Moves",
    description: "Through profile evaluation, activity planning, and personal essay brainstorming, Admittere helps you craft the standout narrative you never knew you had."
  },
  {
    title: "Your Journey Scheduled",
    description: "Our platform maps out exactly what to do, when to do it, and how to tackle extracurriculars, essays, and application deadlines — all in one seamless plan."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
     {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#16a085]">
          Admittere.<br />Your path to Excellence.
         </h1>
       <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl leading-relaxed mx-auto mt-6">
          Join the waitlist for a personal college admissions mentor that is <br />smarter, faster, and simply better.
      </p>
      <WaitlistForm />
    </div>
    </div>


      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1A1F2C]">
            Why Choose Admittere?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p>© 2025 Admittere.com | Making College Admissions Better For Everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

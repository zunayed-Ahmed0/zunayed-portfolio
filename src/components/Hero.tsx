import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/z.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-accent/8 rounded-full blur-3xl" />
        {/* Decorative dots pattern */}
        <div className="absolute top-1/3 right-1/3 opacity-30">
          <div className="grid grid-cols-8 gap-3">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary/40 rounded-full" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Portfolio Label */}
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-1/2 z-10">

        <span className="text-sm font-semibold tracking-[0.3em] text-accent uppercase opacity-90">
          
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left animate-fade-in-up">
              <h1 className="text-4xl font-bold">Zunayed Ahmed</h1>
              <span></span>
              <p className="text-lg text-muted-foreground max-w-xl mb-4">
                Passionate about technology, problem-solving, and clean design. Building efficient, 
                user-friendly digital products that combine creativity with logic.
              </p>
              <p className="text-base text-muted-foreground max-w-xl mb-8">
                <span className="text-foreground font-semibold">Aspiring Software Engineer</span> focused on creating meaningful solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="gradient-primary hover:opacity-90 transition-smooth shadow-medium group"
                  onClick={() => scrollToSection('#projects')}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-smooth"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/zunayed-Ahmed0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zunayed-ahmed-1356131a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:zunayed.a.ahmed20@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="relative animate-fade-in-up lg:animate-slide-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-card shadow-medium">
                  <img
                    src={profilePhoto}
                    alt="Zunayed Ahmed - Computer Science Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element behind image */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

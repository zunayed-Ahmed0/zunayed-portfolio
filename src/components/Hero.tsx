import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/zunayed.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/95"
    >
      {/* Floating decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side: text */}
          <div className="space-y-6 animate-fade-in-up">
            {/* <h1 className="text-5xl font-extrabold text-foreground leading-tight"> */}
             <h1 className="text-5xl font-extrabold text-foreground leading-tight">
  Hey There, I'm<span className="text-gradient relative inline-block">
    Zunayed Ahmed
    <span className="absolute left-0 bottom-0 w-full h-1 rounded-full gradient-primary"></span>
  </span>
</h1>
<p className="text-lg text-muted-foreground max-w-lg mt-4">
  I'm a passionate <span className="font-semibold text-foreground">Computer Science</span> student who is passionate about
  exploring cutting-edge technologies, solving challenging problems, AI, hackathons. 
  I enjoy building sleek, efficient, and user-friendly projects while sharpening my skills in 
   competitive programming, algorithms, and real-world software solutions.
</p>


            {/* Buttons */}
<div className="flex flex-wrap gap-4 mt-4">
  <Button
    size="lg"
      variant="outline"
    className="
      border-primary text-primary

      flex items-center gap-2
        hover:bg-primary hover:scale-105
      shadow-md hover:shadow-xl 
      transform hover:-translate-y-1 hover:scale-105 
      transform transition-all duration-300 ease-out
    "
    onClick={() => scrollToSection('#projects')}
  >
    View My Work
    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="
      border-primary text-primary
       flex items-center gap-2
      hover:bg-primary hover:scale-105
       shadow-md hover:shadow-xl 

      transform hover:-translate-y-1 hover:scale-105 
      transform transition-all duration-300 ease-out    "
    onClick={() => scrollToSection('#contact')}
  >
    Get In Touch
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

  </Button>
</div>


            {/* Social Icons */}
            <div className="flex gap-6 mt-6 text-muted-foreground">
              <a
                href="https://github.com/zunayed-Ahmed0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zunayed-ahmed-1356131a9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:zunayed.a.ahmed20@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
<div className="relative animate-fade-in-up lg:animate-slide-in-right flex justify-center lg:justify-center -ml-8">
  <div className="relative w-64 sm:w-80 md:w-96 lg:w-80 xl:w-96">
    {/* Profile Image Container */}
    <div className="aspect-square rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:shadow-4xl transition-shadow duration-500">
      <img
        src={profilePhoto}
        alt="Zunayed Ahmed - Computer Science Student"
        className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Decorative Glows / Blobs */}
    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/25 rounded-full blur-3xl animate-pulse-slow -z-10" />
    <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-spin-slow -z-10" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-secondary/10 rounded-full blur-2xl animate-bounce-slow -z-10" />

    {/* Floating Icons / Shapes */}
    {/* <div className="absolute -top-10 -right-10 w-12 h-12 bg-primary/40 rounded-full shadow-lg animate-bounce-slower -z-10" />
    <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-accent/30 rounded-full shadow-md animate-pulse-slow -z-10" />
    <div className="absolute -bottom-4 left-2 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-spin-slow -z-10" /> */}

    {/* Small floating dots */}
    {/* {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-primary/40 rounded-full animate-bounce-slow`}
        style={{
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`,
        }}
      />
    ))} */}
  </div>
  </div>
  </div>
      </div>
    </section>
    
  );
};

export default Hero;
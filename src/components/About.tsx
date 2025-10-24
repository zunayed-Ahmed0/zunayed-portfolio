import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/20 via-background to-background">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
          </div>

          <Card
            className={`p-6 sm:p-8 md:p-10 shadow-soft border-border/50 bg-card/80 backdrop-blur-sm ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
           <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
  <p>
    I'm <span className="text-foreground font-semibold">Zunayed Ahmed</span>, a curious and driven 
    <span className="text-foreground font-semibold"> Computer Science and Engineering student </span> 
    passionate about technology, problem-solving, and creating innovative digital solutions. I thrive on challenges and enjoy exploring new areas in tech.
  </p>

  <p>
    I actively participate in <span className="text-foreground font-semibold">competitive programming</span>, 
    hackathons, and coding competitions, constantly sharpening my skills in algorithms, data structures, and full-stack development. 
    I believe in turning complex problems into simple, efficient, and elegant solutions.
  </p>

  <p>
    Over time, I have developed <span className="text-foreground font-semibold">web and software projects</span> that 
    emphasize usability, performance, and clean design. I approach every project with <span className="text-foreground font-semibold">dedication, creativity, and a growth mindset</span>, learning from each experience.
  </p>

  <p className="text-foreground font-medium pt-4">
    I’m always excited to take on new challenges, collaborate with like-minded innovators, and build <span className="text-foreground font-semibold">projects that make an impact</span>. Let’s create something remarkable together!
  </p>
</div>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

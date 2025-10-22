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
                I'm a <span className="text-foreground font-semibold">Computer Science and Engineering student</span> passionate
                about technology, problem-solving, and clean design. My journey in tech is driven by curiosity and
                a constant desire to learn and create.
              </p>
              <p>
                My focus is on building <span className="text-foreground font-semibold">efficient, user-friendly digital products</span> that
                combine creativity with logic. I believe that great software is not just about functionality, but
                also about delivering exceptional user experiences.
              </p>
              <p>
                Whether it's solving complex algorithmic challenges, developing web applications, or working on
                innovative projects, I approach each task with <span className="text-foreground font-semibold">dedication and attention to detail</span>.
                I'm always eager to collaborate, learn from others, and contribute to meaningful projects.
              </p>
              <p className="text-foreground font-medium pt-4">
                Let's build something amazing together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

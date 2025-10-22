import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Database, Terminal, Brain } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: Code2,
      description: 'Proficient in multiple programming languages including C, C++, Python, and web technologies like HTML, CSS, and React. I build efficient solutions with clean, maintainable code.',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Competitive Programming',
      icon: Brain,
      description: 'Strong problem-solving skills through competitive programming. Experienced in algorithm design, data structures, and optimizing solutions for complex computational challenges.',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      title: 'Web Frameworks',
      icon: Terminal,
      description: 'Bringing ideas to life with modern frameworks. Experience building dynamic web applications using React for frontend and Django for backend development.',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      title: 'Database & Backend',
      icon: Database,
      description: 'Working with relational databases like MySQL to design efficient data models and create robust backend systems that scale.',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
    },
  ];

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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`p-8 hover:shadow-soft transition-smooth hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${category.bgColor} ${category.iconColor} p-3 rounded-lg flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-poppins mb-3">{category.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

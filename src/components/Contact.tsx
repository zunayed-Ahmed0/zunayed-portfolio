import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // You'll need to set up EmailJS service
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });
      
      formRef.current.reset();
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zunayed.a.ahmed20@gmail.com',
      href: 'mailto:zunayed.a.ahmed20@gmail.com',
      bgColor: 'bg-red-500/10',
      iconColor: 'text-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'zunayed-ahmed',
      href: 'https://www.linkedin.com/in/zunayed-ahmed-1356131a9',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'zunayed-Ahmed0',
      href: 'https://github.com/zunayed-Ahmed0',
      bgColor: 'bg-muted',
      iconColor: 'text-foreground',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-6 rounded-full" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-semibold font-poppins mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'll try to get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.label}
                    className="p-4 hover:shadow-soft transition-smooth hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className={`${item.bgColor} ${item.iconColor} p-3 rounded-lg group-hover:scale-110 transition-smooth`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-smooth">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`p-6 shadow-soft border-border/50 bg-card/80 backdrop-blur-sm ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="from_email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="transition-smooth focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="transition-smooth focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary hover:opacity-90 transition-smooth shadow-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

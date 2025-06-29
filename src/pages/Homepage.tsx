import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Zap,
  Rocket
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import FeatureCard from '../components/FeatureCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const Homepage = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: 'AI-Powered Founder Intelligence',
      description: 'Transform ideas into insights with intelligent business model analysis',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: 'Innovation Journey Orchestration',
      description: 'Guide every founder from concept to scale with intelligent program management',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: 'Ecosystem Impact Intelligence',
      description: 'Unlock the power of connected innovation with real-time ecosystem analytics',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    }
  ];

  const audiences = [
    {
      title: 'VCs & Venture Studios',
      description: 'Transform portfolio management with AI-powered founder tracking',
      href: '/vc-firms',
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      gradient: 'from-primary-500 to-electric-500'
    },
    {
      title: 'Accelerators & Incubators',
      description: 'Run world-class programs without duct-tape systems',
      href: '/accelerators',
      icon: <Sparkles className="h-8 w-8 text-white" />,
      gradient: 'from-electric-500 to-emerald-500'
    },
    {
      title: 'Corporate Innovation',
      description: 'Drive innovation with structured startup engagement',
      href: '/corporates',
      icon: <Target className="h-8 w-8 text-white" />,
      gradient: 'from-emerald-500 to-warm-500'
    },
    {
      title: 'Universities',
      description: 'Build launchpads for student entrepreneurship',
      href: '/universities',
      icon: <Globe className="h-8 w-8 text-white" />,
      gradient: 'from-warm-500 to-primary-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ochieng',
      role: 'Managing Partner, Nairobi Ventures',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'ForgeAI transformed how we track our portfolio companies. We now have real-time visibility into founder progress and can provide targeted support when needed.'
    },
    {
      name: 'Michael Akinwale',
      role: 'Director, Lagos Innovation Hub',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Our program efficiency improved by 300% after implementing ForgeAI. The AI-powered analysis helps us identify high-potential startups early in the process.'
    },
    {
      name: 'Fatima Hassan',
      role: 'Innovation Manager, EchoVC Partners',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'The ecosystem intelligence provided by ForgeAI gives us unprecedented insights into African innovation trends. It\'s a game-changer for strategic decision making.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 mesh-gradient"></div>
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard className="p-8" tint="white" opacity="5" hoverEffect="glow">
                  <motion.h1 
                    className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Unleash Africa's{' '}
                    <span className="text-gradient">
                      Innovation Potential
                    </span>
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-white/80 mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    AI-powered platform that transforms how innovation programs discover, develop, and scale breakthrough founders across the continent.
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <Button variant="primary" size="lg" icon={<Zap className="h-5 w-5" />}>
                      Ignite Innovation
                    </Button>
                    <Button variant="glass" size="lg">
                      Explore Platform
                    </Button>
                  </motion.div>
                  <motion.div 
                    className="mt-8 flex items-center space-x-6 text-sm text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                  >
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                      Empowering 50+ innovation ecosystems
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                      Built in Africa
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <GlassCard 
                  className="p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500" 
                  tint="blue" 
                  opacity="10"
                  animation="float"
                  hoverEffect="lift"
                >
                  <img
                    src="/src/assets/Ecosystem builders.png"
                    alt="African innovation ecosystem builders collaborating with AI technology"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-4 -left-4 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Active Programs</div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter value={127} />
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8" tint="white" opacity="5">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Transform Your Innovation Journey
                  </h2>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="glass-card p-2 rounded-lg">
                        <Users className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">From scattered tools to unified innovation intelligence</h3>
                        <p className="text-white/70">Centralize all your innovation data and insights in one powerful platform</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="glass-card p-2 rounded-lg">
                        <Brain className="h-5 w-5 text-electric-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">From manual reviews to AI-powered founder insights</h3>
                        <p className="text-white/70">Leverage intelligent analysis to identify breakthrough potential instantly</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="glass-card p-2 rounded-lg">
                        <BarChart3 className="h-5 w-5 text-warm-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">From isolated programs to connected ecosystem impact</h3>
                        <p className="text-white/70">Build thriving innovation networks with real-time collaboration and insights</p>
                      </div>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlassCard className="p-8" tint="emerald" opacity="10" hoverEffect="glow">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    One Platform, Infinite Possibilities
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Intelligent founder journey orchestration',
                      'AI-powered breakthrough identification',
                      'Real-time ecosystem performance intelligence',
                      'Automated success amplification workflows'
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="glass" className="w-full">
                      Discover Possibilities
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Breakthrough Innovation Intelligence
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  From AI-powered insights to ecosystem orchestration, 
                  everything you need to unleash extraordinary innovation outcomes.
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <GlassCard
                  key={index}
                  className="p-6"
                  tint="white"
                  opacity="10"
                  hoverEffect="lift"
                  delay={index * 0.1}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-electric-500 rounded-lg mb-4 glow-effect">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/70 mb-4">{feature.description}</p>
                  
                  <div className="rounded-lg overflow-hidden glass-card">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Built for Innovation Leaders
                </h2>
                <p className="text-xl text-white/80">
                  Tailored solutions for every type of innovation program across Africa
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-glow"
                >
                  <Link to={audience.href}>
                    <GlassCard 
                      className="p-6" 
                      tint="white" 
                      opacity="10" 
                      hoverEffect="lift"
                    >
                      <div className={`bg-gradient-to-r ${audience.gradient} p-6 rounded-xl text-white mb-4 glow-effect`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                              {audience.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{audience.title}</h3>
                              <p className="text-white/90">{audience.description}</p>
                            </div>
                          </div>
                          <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                { value: 50, suffix: '+', label: 'Innovation Ecosystems' },
                { value: 2500, suffix: '+', label: 'Breakthrough Founders' },
                { value: 12, suffix: '', label: 'African Countries' },
                { value: 89, suffix: '%', label: 'Success Amplification' }
              ].map((stat, index) => (
                <GlassCard 
                  key={index}
                  className="p-6 text-center" 
                  tint="white" 
                  opacity="10"
                  hoverEffect="glow"
                  delay={index * 0.1}
                >
                  <div className="text-4xl font-bold text-white mb-2 glow-effect">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Trusted by Innovation Leaders
                </h2>
                <p className="text-xl text-white/80">
                  See how ForgeAI is transforming innovation programs across Africa
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <GlassCard
                  key={index}
                  className="p-6"
                  tint="white"
                  opacity="10"
                  hoverEffect="lift"
                  delay={index * 0.1}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-white/20"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/70">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-12" tint="purple" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Ignite Your Innovation Ecosystem?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join leading innovation programs across Africa already using ForgeAI
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Start Your Journey
                  </Button>
                  <Button variant="glass" size="lg">
                    Discover Possibilities
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
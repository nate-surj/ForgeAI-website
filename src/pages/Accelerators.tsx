import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Users, 
  Calendar, 
  Target, 
  CheckCircle, 
  Clock,
  BarChart3,
  MessageSquare,
  ArrowRight,
  Rocket,
  Zap
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const Accelerators = () => {
  const transformationFocus = [
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      title: 'From fragmented workflows to seamless innovation orchestration',
      description: 'Transform scattered processes into unified, intelligent program management'
    },
    {
      icon: <Clock className="h-6 w-6 text-electric-400" />,
      title: 'From administrative burden to pure founder empowerment',
      description: 'Eliminate manual tasks and focus entirely on amplifying founder success'
    },
    {
      icon: <Target className="h-6 w-6 text-warm-400" />,
      title: 'From good programs to legendary ecosystem builders',
      description: 'Elevate your accelerator into a transformational force for innovation'
    }
  ];

  const solutions = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Intelligent Cohort Orchestration Interface',
      description: 'Centralized command center to orchestrate multiple cohorts, amplify founder progress, and coordinate breakthrough activities.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Multi-cohort success orchestration',
        'Founder empowerment profile management',
        'Breakthrough progress tracking dashboard',
        'Intelligent batch operations'
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: 'Automated Success Amplification Workflows',
      description: 'Streamline your program operations with intelligent automation that amplifies founder success at every milestone.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Automated breakthrough milestone reminders',
        'Custom success amplification workflows',
        'Smart empowerment notifications',
        'Intelligent calendar integration'
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Breakthrough Moment Celebration and Tracking Tools',
      description: 'Comprehensive tools to prepare founders for breakthrough moments and celebrate their journey to success.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Breakthrough pitch deck analysis',
        'Success presentation scoring',
        'Investor matching intelligence',
        'Celebration feedback compilation'
      ]
    }
  ];

  const impactAmplifier = {
    title: 'Exponential Founder Success Rates',
    metrics: [
      { label: 'Founder Success Rate', before: 45, after: 78, improvement: '+73%' },
      { label: 'Program Efficiency', before: 60, after: 92, improvement: '+53%' },
      { label: 'Breakthrough Moments', before: 12, after: 34, improvement: '+183%' },
      { label: 'Alumni Network Growth', before: 25, after: 67, improvement: '+168%' }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-purple-800 to-primary-700"></div>
      <div className="fixed inset-0 circuit-pattern opacity-20"></div>
      <ParticleBackground 
        colors={['rgba(139, 92, 246, 0.4)', 'rgba(107, 70, 193, 0.3)', 'rgba(168, 85, 247, 0.3)']}
        particleCount={35}
      />
      
      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8" tint="white" opacity="5" hoverEffect="glow">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Craft World-Class{' '}
                    <span className="text-gradient bg-gradient-to-r from-electric-400 to-emerald-400 bg-clip-text text-transparent">
                      Innovation Experiences
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    The intelligent command center that grows with your vision and amplifies every founder's journey
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                      Create Innovation Magic
                    </Button>
                    <Button variant="glass" size="lg">
                      Watch Accelerator Demo
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <GlassCard 
                  className="p-6" 
                  tint="purple" 
                  opacity="10"
                  animation="float"
                  hoverEffect="lift"
                >
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Accelerator team celebrating demo day success"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-6 -right-6 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Active Founders</div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter value={48} />
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transformation Focus */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Transform Your Innovation Approach
                </h2>
                <p className="text-xl text-white/80">
                  ForgeAI empowers accelerators to craft legendary innovation experiences that amplify every founder's potential
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transformationFocus.map((focus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6" tint="white" opacity="10" hoverEffect="lift">
                    <div className="glass-card p-3 rounded-lg mb-4 w-fit">
                      {focus.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{focus.title}</h3>
                    <p className="text-white/70">{focus.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Intelligent Innovation Orchestration
                </h2>
                <p className="text-xl text-white/80">
                  From application to breakthrough, orchestrate every aspect of your accelerator program with AI-powered intelligence
                </p>
              </GlassCard>
            </motion.div>

            <div className="space-y-16">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <GlassCard className="p-8" tint="white" opacity="10" hoverEffect="lift">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-electric-500 to-emerald-500 p-3 rounded-lg mr-4 glow-effect">
                          {solution.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{solution.title}</h3>
                      </div>
                      <p className="text-lg text-white/80 mb-6">{solution.description}</p>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                            <span className="text-white/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <GlassCard 
                      className="p-6" 
                      tint="purple" 
                      opacity="5" 
                      hoverEffect="lift"
                      animation="float"
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full rounded-lg"
                      />
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Amplifier */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="electric" opacity="15">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Impact Amplifier: Exponential Founder Success
                </h2>
                <p className="text-xl text-white/90">
                  Interactive tool showing exponential founder success rates with ForgeAI
                </p>
              </GlassCard>
            </motion.div>

            <GlassCard className="p-8" tint="white" opacity="10" hoverEffect="glow">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {impactAmplifier.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {impactAmplifier.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6" tint="purple" opacity="15" hoverEffect="lift">
                      <h4 className="text-lg font-semibold text-white mb-4">{metric.label}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Before ForgeAI</span>
                        <span className="text-red-400 font-bold">{metric.before}%</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/70">With ForgeAI</span>
                        <span className="text-emerald-400 font-bold">{metric.after}%</span>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-electric-400 glow-effect">
                          {metric.improvement}
                        </span>
                        <p className="text-white/70 text-sm">Improvement</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <GlassCard className="p-6 max-w-md mx-auto" tint="emerald" opacity="20">
                  <div className="text-3xl font-bold text-white mb-2 glow-effect">
                    <AnimatedCounter value={183} />% Average Improvement
                  </div>
                  <p className="text-lg text-white/90">Across all success metrics</p>
                </GlassCard>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8 text-center" tint="emerald" opacity="15" hoverEffect="glow">
                <div className="mb-6">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                    alt="Michael Akinwale"
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white/20"
                  />
                  <h3 className="text-xl font-semibold text-white">Michael Akinwale</h3>
                  <p className="text-white/80">Director, Lagos Innovation Hub</p>
                </div>
                <blockquote className="text-xl leading-relaxed mb-6 text-white/90">
                  "ForgeAI transformed our accelerator into an innovation magic factory. We went from managing programs to orchestrating breakthrough experiences. Our founders now achieve extraordinary outcomes we never thought possible."
                </blockquote>
                <div className="flex justify-center space-x-8">
                  <div>
                    <div className="text-2xl font-bold text-white glow-effect">300%</div>
                    <div className="text-white/80 text-sm">Innovation Magic Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white glow-effect">50+</div>
                    <div className="text-white/80 text-sm">Hours Saved/Month</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white glow-effect">95%</div>
                    <div className="text-white/80 text-sm">Founder Breakthrough Rate</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-12" tint="purple" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Create Innovation Magic?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join legendary accelerators across Africa using ForgeAI to craft world-class innovation experiences that amplify every founder's journey
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                    Create Innovation Magic
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule Accelerator Demo
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

export default Accelerators;
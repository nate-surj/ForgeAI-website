import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Network, 
  BarChart3, 
  Users, 
  Target,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';

const Solutions = () => {
  const ecosystemTools = [
    'AI Lean Canvas Scoring',
    'Founder Progress Tracking',
    'Cohort Management Dashboard',
    'Impact Analytics & Reporting'
  ];

  const founderTools = [
    'Business Model Validation',
    'AI Pitch Coach & Feedback',
    'Investor Matching Intelligence',
    'Growth Strategy Assistant'
  ];

  const coreFeatures = [
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: 'AI-Powered Analysis',
      description: 'Instant insights on business models, pitches, and market opportunities'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Seamless Operations',
      description: 'Streamlined workflows for cohorts, mentorship, and founder support'
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Impact Measurement',
      description: 'Real-time tracking of founder progress and ecosystem health'
    }
  ];

  const integrations = [
    { 
      name: 'Google Workspace', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png',
      alt: 'Google Workspace logo'
    },
    { 
      name: 'Slack', 
      logo: 'https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png',
      alt: 'Slack logo'
    },
    { 
      name: 'Airtable', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg',
      alt: 'Airtable logo'
    },
    { 
      name: 'Zoom', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg',
      alt: 'Zoom logo'
    },
    { 
      name: 'Calendly', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyn8Ng8PXWBZX5eLh8orPs-6Ntz65mAJHhg&s',
      alt: 'Calendly logo'
    },
    { 
      name: 'Stripe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
      alt: 'Stripe logo'
    },
    { 
      name: 'Mailchimp', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Mailchimp_Logo.svg',
      alt: 'Mailchimp logo'
    },
    { 
      name: 'Notion', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      alt: 'Notion logo'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Same as Homepage */}
      <div className="fixed inset-0 mesh-gradient"></div>
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8" tint="white" opacity="5" hoverEffect="glow">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Our Core Solutions
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  AI-powered tools that bridge the gap from idea to impact
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Tool Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ecosystem Builder Tools */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 h-full" tint="purple" opacity="10" hoverEffect="lift">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-primary-600 p-3 rounded-lg mr-4 glow-effect">
                      <Network className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Ecosystem Builder Tools</h2>
                  </div>
                  <p className="text-lg text-white/80 mb-6">
                    Complete platform for managing innovation programs
                  </p>
                  <ul className="space-y-3 mb-8">
                    {ecosystemTools.map((tool, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                        <span className="text-white/90">{tool}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">
                    Explore Platform
                  </Button>
                </GlassCard>
              </motion.div>

              {/* Founder Tools */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 h-full" tint="blue" opacity="10" hoverEffect="lift">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-electric-600 p-3 rounded-lg mr-4 glow-effect">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Founder Empowerment Tools</h2>
                  </div>
                  <p className="text-lg text-white/80 mb-6">
                    AI-powered guidance from ideation to growth
                  </p>
                  <ul className="space-y-3 mb-8">
                    {founderTools.map((tool, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                        <span className="text-white/90">{tool}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Start Free Trial
                  </Button>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="10" hoverEffect="lift">
                    <div className="bg-gradient-to-r from-primary-600 to-electric-500 p-3 rounded-lg mb-4 w-fit mx-auto glow-effect">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8" tint="white" opacity="5" hoverEffect="glow">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                  Integrates with your favorite tools
                </h2>
                
                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-6">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <GlassCard className="p-4" tint="white" opacity="15" hoverEffect="lift">
                        <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-white rounded-lg">
                          <img 
                            src={integration.logo} 
                            alt={integration.alt}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span 
                            className="text-gray-800 font-bold text-xs hidden"
                            style={{ display: 'none' }}
                          >
                            {integration.name.charAt(0)}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-white">{integration.name}</div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto">
                  <div className="flex space-x-4 pb-4">
                    {integrations.map((integration, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0"
                      >
                        <GlassCard className="p-4 w-20" tint="white" opacity="15" hoverEffect="lift">
                          <div className="w-10 h-10 mx-auto mb-1 flex items-center justify-center bg-white rounded-lg">
                            <img 
                              src={integration.logo} 
                              alt={integration.alt}
                              className="w-6 h-6 object-contain"
                              onError={(e) => {
                                // Fallback to text if image fails to load
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                            <span 
                              className="text-gray-800 font-bold text-xs hidden"
                              style={{ display: 'none' }}
                            >
                              {integration.name.charAt(0)}
                            </span>
                          </div>
                          <div className="text-xs font-medium text-white text-center">{integration.name}</div>
                        </GlassCard>
                      </motion.div>
                    ))}
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
                  Ready to get started?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Choose your path to innovation excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" className="glass-button">
                    Start Free Trial
                  </Button>
                  <Button variant="glass" size="lg">
                    Book Demo
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

export default Solutions;
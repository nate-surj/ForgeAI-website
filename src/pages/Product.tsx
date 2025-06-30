import React from 'react';
import { motion } from 'framer-motion';
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
  Rocket,
  MessageSquare,
  Clock,
  Shield,
  Puzzle
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';

const Product = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: 'AI-Powered Founder Intelligence',
      description: 'Transform ideas into insights with intelligent business model analysis that reveals breakthrough potential instantly.',
      image: "/assets/Founder_inteligence (1).png",
      features: [
        'Instant breakthrough potential scoring',
        'Market opportunity intelligence',
        'Competitive advantage assessment',
        'Revenue model optimization',
        'Success probability analysis'
      ]
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: 'Innovation Journey Orchestration',
      description: 'Guide every founder from visionary concept to market-ready venture with intelligent milestone management.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop',
      features: [
        'Comprehensive founder empowerment profiles',
        'Success milestone orchestration',
        'Progress amplification visualization',
        'Automated breakthrough check-ins',
        'Alumni success network integration'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: 'Ecosystem Impact Intelligence',
      description: 'Real-time dashboards and comprehensive analytics to measure and amplify program effectiveness across your innovation ecosystem.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop',
      features: [
        'Real-time breakthrough metrics',
        'Cross-program success analysis',
        'Impact amplification tracking',
        'ROI optimization insights',
        'Custom success reporting tools'
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'Collaboration Amplification',
      description: 'Seamless communication and collaboration features that amplify team effectiveness and founder success.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop',
      features: [
        'Team empowerment collaboration spaces',
        'Mentor-founder success matching',
        'Communication impact tracking',
        'Knowledge amplification sharing',
        'Video breakthrough conferencing'
      ]
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
      name: 'Outlook', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
      alt: 'Microsoft Outlook logo'
    },
    { 
      name: 'Notion', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      alt: 'Notion logo'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for emerging innovation programs',
      features: [
        'Up to 50 breakthrough founders',
        'Basic AI intelligence analysis',
        'Core success reporting',
        'Email empowerment support',
        'Standard integrations'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'For scaling innovation ecosystems',
      features: [
        'Up to 200 breakthrough founders',
        'Advanced AI intelligence analysis',
        'Custom success reporting',
        'Priority empowerment support',
        'All integrations',
        'Team collaboration amplification'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For transformational innovation ecosystems',
      features: [
        'Unlimited breakthrough founders',
        'White-label success solution',
        'Custom AI intelligence models',
        'Dedicated empowerment support',
        'API access',
        'Multi-program orchestration'
      ]
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-12" tint="white" opacity="5" hoverEffect="glow">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Where Breakthrough Ideas{' '}
                    <span className="text-gradient bg-gradient-to-r from-primary-600 to-electric-500 bg-clip-text text-transparent">
                      Become Reality
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    From visionary concepts to market-ready ventures - empower every stage of the innovation journey with AI-driven insights
                  </p>
                  <GlassCard className="p-6 mb-8" tint="white" opacity="10">
                    <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center">
                        <Zap className="h-12 w-12 text-electric-400 mx-auto mb-4 glow-effect" />
                        <p className="text-white font-semibold">Product Demo Video</p>
                        <p className="text-sm text-white/70">Interactive platform walkthrough showcasing founder success stories</p>
                      </div>
                    </div>
                  </GlassCard>
                  <Button variant="primary" size="lg" icon={<Zap className="h-5 w-5" />}>
                    Begin Your Innovation Journey
                  </Button>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {features.map((feature, index) => (
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
                        <div className="bg-gradient-to-r from-primary-600 to-electric-500 p-3 rounded-lg mr-4 glow-effect">
                          {feature.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                      </div>
                      <p className="text-lg text-white/80 mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.features.map((item, itemIndex) => (
                          <motion.li 
                            key={itemIndex} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          >
                            <div className="bg-emerald-500/20 p-1 rounded-full mr-3">
                              <ArrowRight className="h-4 w-4 text-emerald-400" />
                            </div>
                            <span className="text-white/90">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <GlassCard 
                      className="p-6 max-w-xl mx-auto flex items-center justify-center" 
                      tint="white" 
                      opacity="5" 
                      hoverEffect="lift"
                      animation="float"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full rounded-lg"
                      />
                    </GlassCard>
                  </div>
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
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="5">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Seamlessly Connects with the Tools You Love
                </h2>
                <p className="text-xl text-white/80">
                  Integrate effortlessly with your existing innovation ecosystem
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard 
                    className="p-6 text-center" 
                    tint="white" 
                    opacity="10" 
                    hoverEffect="lift"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-white rounded-lg">
                      <img 
                        src={integration.logo} 
                        alt={integration.alt}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span 
                        className="text-gray-800 font-bold text-lg hidden"
                        style={{ display: 'none' }}
                      >
                        {integration.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-white">{integration.name}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="glass">
                Build Something Amazing
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
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
                  Solutions That Scale with Your Ambitions
                </h2>
                <p className="text-xl text-white/80">
                  Start your innovation journey, scale as you grow
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard 
                    className={`p-8 relative ${tier.popular ? 'ring-2 ring-primary-500' : ''}`}
                    tint={tier.popular ? "purple" : "white"}
                    opacity={tier.popular ? "15" : "10"}
                    hoverEffect="lift"
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-primary-600 to-electric-500 text-white px-4 py-1 rounded-full text-sm font-medium glow-effect">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-white/70 ml-1">{tier.period}</span>
                      </div>
                      <p className="text-white/70 mt-2">{tier.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="bg-emerald-500/20 p-1 rounded-full mr-3">
                            <ArrowRight className="h-3 w-3 text-emerald-400" />
                          </div>
                          <span className="text-white/90 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={tier.popular ? 'primary' : 'glass'} 
                      className="w-full"
                    >
                      {tier.name === 'Enterprise' ? 'Contact Sales' : 'Discover Your Path'}
                    </Button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-12" tint="purple" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Experience the ForgeAI Difference
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Book a personalized demo and discover how ForgeAI can transform your innovation program into a breakthrough success story
                </p>
                <GlassCard className="p-8 max-w-md mx-auto" tint="white" opacity="20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Schedule Your Demo
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    />
                    <Button variant="primary" className="w-full">
                      Schedule Demo
                    </Button>
                  </div>
                </GlassCard>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
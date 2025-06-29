import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Building, 
  Users, 
  CheckCircle, 
  BarChart3,
  Globe,
  ArrowRight,
  Briefcase,
  Clock,
  Shield,
  TrendingUp,
  Rocket
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const Corporates = () => {
  const transformationFocus = [
    {
      icon: <Target className="h-6 w-6 text-emerald-400" />,
      title: 'From isolated pilots to strategic innovation pipelines',
      description: 'Transform scattered innovation projects into systematic breakthrough engines'
    },
    {
      icon: <Clock className="h-6 w-6 text-electric-400" />,
      title: 'From slow engagement to dynamic collaboration',
      description: 'Accelerate startup partnerships with intelligent matching and streamlined processes'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-warm-400" />,
      title: 'From experimental programs to transformational business impact',
      description: 'Create measurable business value through strategic innovation initiatives'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Strategic Startup-Corporate Matching Intelligence',
      description: 'AI-powered matching that connects breakthrough startups with relevant business units and strategic priorities.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Strategic alignment breakthrough scoring',
        'Capability-need intelligent matching',
        'Business unit integration orchestration',
        'Partnership pathway optimization'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Innovation Breakthrough Pipeline Tracking',
      description: 'Comprehensive tracking of innovation projects from ideation to transformational implementation.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Project breakthrough milestone tracking',
        'Budget and resource amplification allocation',
        'Risk assessment intelligence dashboard',
        'ROI transformation measurement tools'
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Transformation Impact Dashboard with Business Alignment',
      description: 'Real-time visibility into how innovation initiatives create transformational business impact.',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Strategic goal breakthrough mapping',
        'Impact transformation measurement',
        'Portfolio optimization intelligence',
        'Executive celebration reporting'
      ]
    }
  ];

  const integrations = [
    { name: 'SAP', description: 'ERP Integration' },
    { name: 'Salesforce', description: 'CRM Sync' },
    { name: 'Microsoft Teams', description: 'Collaboration' },
    { name: 'Tableau', description: 'Analytics' },
    { name: 'Workday', description: 'HR Systems' },
    { name: 'DocuSign', description: 'Contract Management' }
  ];

  const stats = [
    { value: 45, suffix: '%', label: 'Faster Startup Partnerships' },
    { value: 60, suffix: '%', label: 'Better Strategic Alignment' },
    { value: 3, suffix: 'x', label: 'More Successful Pilots' },
    { value: 25, suffix: '%', label: 'Increase in Innovation ROI' }
  ];

  const innovationAmplifier = {
    title: 'Enterprise Collaboration Success Showcase',
    partnerships: [
      { company: 'Leading African Bank', sector: 'Fintech', impact: '12 breakthrough partnerships launched', roi: '340%' },
      { company: 'Telecom Giant', sector: 'IoT Solutions', impact: '8 transformational pilots deployed', roi: '280%' },
      { company: 'Manufacturing Corp', sector: 'Supply Chain', impact: '15 innovation integrations', roi: '420%' }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Less bright navy/slate theme */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"></div>
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-400 rounded-full blur-3xl"></div>
      </div>
      <ParticleBackground 
        colors={['rgba(100, 116, 139, 0.3)', 'rgba(71, 85, 105, 0.3)', 'rgba(51, 65, 85, 0.2)']}
        particleCount={25}
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
                  <h1 className="text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    Ignite Corporate Innovation{' '}
                    <span className="text-gradient bg-gradient-to-r from-emerald-400 to-electric-400 bg-clip-text text-transparent">
                      That Changes Everything
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Bridge visionary startups with corporate excellence to create breakthrough solutions and lasting impact
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" icon={<Rocket className="h-5 w-5" />}>
                      Revolutionize Corporate Innovation
                    </Button>
                    <Button variant="glass" size="lg">
                      Watch Enterprise Demo
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
                  tint="blue" 
                  opacity="10"
                  animation="float"
                  hoverEffect="lift"
                >
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Corporate innovation team celebrating breakthrough partnership"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-6 -left-6 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Active Partnerships</div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter value={23} />
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
                  ForgeAI empowers corporations to ignite innovation that creates breakthrough solutions and lasting impact
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

        {/* Enterprise Features */}
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
                  Enterprise-Grade Innovation Intelligence
                </h2>
                <p className="text-xl text-white/80">
                  Built for large organizations with transformational innovation requirements
                </p>
              </GlassCard>
            </motion.div>

            <div className="space-y-16">
              {enterpriseFeatures.map((feature, index) => (
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
                        <div className="bg-gradient-to-r from-emerald-500 to-electric-500 p-3 rounded-lg mr-4 glow-effect">
                          {feature.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-lg text-white/80 mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                            <span className="text-white/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <GlassCard 
                      className="p-6" 
                      tint="blue" 
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

        {/* Innovation Amplifier */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="emerald" opacity="15">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Innovation Amplifier: Enterprise Collaboration Success
                </h2>
                <p className="text-xl text-white/90">
                  Showcase of breakthrough corporate-startup partnerships powered by ForgeAI
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovationAmplifier.partnerships.map((partnership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6" tint="white" opacity="10" hoverEffect="lift">
                    <div className="text-center mb-4">
                      <Building className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold text-white">{partnership.company}</h3>
                      <p className="text-white/70 text-sm">{partnership.sector}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-white/80 text-sm">{partnership.impact}</p>
                      </div>
                      <div className="text-center">
                        <span className="text-2xl font-bold text-emerald-400 glow-effect">
                          {partnership.roi}
                        </span>
                        <p className="text-white/70 text-sm">Innovation ROI</p>
                      </div>
                    </div>
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
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Seamless Enterprise Integration
                </h2>
                <p className="text-xl text-white/80">
                  Connects with your existing enterprise systems and workflows
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="15" hoverEffect="lift">
                    <div className="bg-gradient-to-r from-emerald-500 to-electric-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 glow-effect">
                      <Building className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-white/70">{integration.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="glass">
                View All Enterprise Integrations
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="emerald" opacity="15">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Measurable Innovation Impact
                </h2>
                <p className="text-xl text-white/90">
                  Corporations using ForgeAI see significant improvements in innovation outcomes
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="10" hoverEffect="glow">
                    <div className="text-4xl font-bold text-white mb-2 glow-effect">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/80">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8" tint="white" opacity="10" hoverEffect="glow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Enterprise Transformation Success Story
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                          <Target className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Challenge</h3>
                          <p className="text-white/80">Leading African bank struggling to identify and partner with relevant fintech startups across multiple markets</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4 mt-1">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Solution</h3>
                          <p className="text-white/80">Implemented ForgeAI's strategic startup-corporate matching intelligence with transformation impact dashboard</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-lg mr-4 mt-1">
                          <CheckCircle className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Results</h3>
                          <p className="text-white/80">12 breakthrough partnerships launched within 6 months, $2.3M in cost savings from automated processes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <GlassCard className="p-6" tint="emerald" opacity="15">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Breakthrough Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Partnership Success Rate</span>
                        <span className="text-2xl font-bold text-emerald-400 glow-effect">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Time to Partnership</span>
                        <span className="text-2xl font-bold text-electric-400 glow-effect">-65%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Innovation ROI</span>
                        <span className="text-2xl font-bold text-warm-400 glow-effect">340%</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="white" opacity="10">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Enterprise Security & Compliance
                </h2>
                <p className="text-xl text-white/80">
                  Built to meet the highest security and compliance standards
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="p-6 text-center" tint="white" opacity="15" hoverEffect="lift">
                <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Certified</h3>
                <p className="text-white/80">Advanced security controls and regular audits</p>
              </GlassCard>
              <GlassCard className="p-6 text-center" tint="white" opacity="15" hoverEffect="lift">
                <Globe className="h-12 w-12 text-electric-400 mx-auto mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliant</h3>
                <p className="text-white/80">Full compliance with international data protection</p>
              </GlassCard>
              <GlassCard className="p-6 text-center" tint="white" opacity="15" hoverEffect="lift">
                <Briefcase className="h-12 w-12 text-warm-400 mx-auto mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-2">Enterprise SSO</h3>
                <p className="text-white/80">Seamless integration with corporate identity systems</p>
              </GlassCard>
            </div>
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
              <GlassCard className="p-12" tint="emerald" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Revolutionize Corporate Innovation?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join leading corporations using ForgeAI to ignite innovation that changes everything and creates lasting impact
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" icon={<Rocket className="h-5 w-5" />}>
                    Revolutionize Corporate Innovation
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule Enterprise Demo
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

export default Corporates;
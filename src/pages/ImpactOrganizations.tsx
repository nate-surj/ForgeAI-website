import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Heart,
  TrendingUp,
  MapPin,
  Award,
  Zap,
  Sparkles,
  Rocket
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const ImpactOrganizations = () => {
  const transformationFocus = [
    {
      icon: <Target className="h-6 w-6 text-emerald-400" />,
      title: 'From fragmented initiatives to unified impact orchestration',
      description: 'Transform scattered development projects into systematic breakthrough engines for lasting change'
    },
    {
      icon: <Users className="h-6 w-6 text-electric-400" />,
      title: 'From limited visibility to comprehensive beneficiary empowerment',
      description: 'Track and amplify beneficiary progress with intelligent monitoring and celebration systems'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-warm-400" />,
      title: 'From experimental programs to transformational sustainable impact',
      description: 'Create measurable, lasting change through strategic development initiatives and breakthrough outcomes'
    }
  ];

  const impactFeatures = [
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'Multi-Program Impact Coordination Dashboard',
      description: 'Centralized oversight of all development initiatives across regions, partners, and focus areas with breakthrough intelligence.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Cross-program breakthrough impact tracking',
        'Regional performance amplification comparison',
        'Partner collaboration empowerment tools',
        'Resource allocation optimization intelligence'
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Beneficiary Progress Amplification Tracking',
      description: 'Comprehensive system to track individual and community breakthrough outcomes throughout the development journey.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Individual beneficiary empowerment profiles',
        'Community breakthrough impact measurement',
        'Long-term outcome amplification tracking',
        'Success story celebration documentation'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Cross-Regional Impact Intelligence Analytics',
      description: 'Advanced analytics to measure and compare development breakthrough impact across different regions and initiatives.',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'SDG alignment breakthrough tracking',
        'Impact attribution amplification analysis',
        'Cost-effectiveness celebration metrics',
        'Donor reporting automation intelligence'
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Transparent Fund Allocation Amplification',
      description: 'Real-time tracking of fund allocation and milestone achievement with full transparency and breakthrough celebration.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Real-time fund breakthrough tracking',
        'Milestone-based empowerment disbursement',
        'Impact-linked celebration funding',
        'Transparent breakthrough reporting'
      ]
    }
  ];

  const sdgMetrics = [
    { 
      sdg: 'SDG 1', 
      title: 'No Poverty', 
      value: 85, 
      suffix: '%',
      description: 'Beneficiaries with improved income breakthrough'
    },
    { 
      sdg: 'SDG 4', 
      title: 'Quality Education', 
      value: 92, 
      suffix: '%',
      description: 'Students completing breakthrough programs'
    },
    { 
      sdg: 'SDG 8', 
      title: 'Decent Work', 
      value: 78, 
      suffix: '%',
      description: 'Job creation breakthrough success rate'
    },
    { 
      sdg: 'SDG 17', 
      title: 'Partnerships', 
      value: 150, 
      suffix: '+',
      description: 'Active breakthrough partnerships'
    }
  ];

  const caseStudy = {
    organization: 'African Development Foundation',
    focus: 'Rural Entrepreneurship Development',
    challenge: 'Managing 50+ rural development programs across 12 African countries with limited visibility into beneficiary breakthrough progress and cross-program learning opportunities.',
    solution: 'Implemented ForgeAI to create a unified platform for multi-program coordination and beneficiary empowerment tracking.',
    results: [
      { metric: '40%', description: 'Improvement in program coordination breakthrough efficiency' },
      { metric: '65%', description: 'Better beneficiary outcome amplification tracking' },
      { metric: '25%', description: 'Increase in cross-program knowledge celebration sharing' }
    ],
    quote: 'ForgeAI transformed how we measure and manage development breakthrough impact. We now have real-time visibility into beneficiary progress across all our programs, enabling us to make data-driven decisions that maximize sustainable impact and create lasting change.',
    author: 'Dr. Amina Kone, Program Director'
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Warm dark green theme */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-green-700"></div>
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
      </div>
      <ParticleBackground 
        colors={['rgba(16, 185, 129, 0.4)', 'rgba(5, 150, 105, 0.3)', 'rgba(4, 120, 87, 0.3)']}
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
                    Scale Sustainable Impact Through{' '}
                    <span className="text-gradient bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                      Breakthrough Innovation
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Transform development initiatives into measurable breakthrough outcomes with transparent program management and beneficiary empowerment tracking
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                      Maximize Sustainable Impact
                    </Button>
                    <Button variant="glass" size="lg">
                      Watch Impact Demo
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
                  tint="emerald" 
                  opacity="10"
                  animation="float"
                  hoverEffect="lift"
                >
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Impact program manager celebrating breakthrough initiative success"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-6 -left-6 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Active Programs</div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter value={47} />
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
                  Transform Your Impact Approach
                </h2>
                <p className="text-xl text-white/80">
                  ForgeAI empowers impact organizations to scale sustainable breakthrough impact through structured innovation and transparent measurement
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

        {/* Impact Features */}
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
                  Comprehensive Impact Management Intelligence
                </h2>
                <p className="text-xl text-white/80">
                  Built specifically for development organizations to track, measure, and maximize breakthrough sustainable impact
                </p>
              </GlassCard>
            </motion.div>

            <div className="space-y-16">
              {impactFeatures.map((feature, index) => (
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
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-lg mr-4 glow-effect">
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
                      tint="emerald" 
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

        {/* SDG Impact Measurement */}
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
                  Real-Time SDG Alignment & Breakthrough Progress
                </h2>
                <p className="text-xl text-white/90">
                  Track your organization's contribution to the Sustainable Development Goals with breakthrough intelligence
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdgMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="10" hoverEffect="glow">
                    <div className="bg-white/20 rounded-lg p-3 mb-4 w-fit mx-auto">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-white/80 mb-1">{metric.sdg}</div>
                    <div className="text-lg font-semibold text-white mb-2">{metric.title}</div>
                    <div className="text-3xl font-bold text-white mb-2 glow-effect">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-white/80 text-sm">{metric.description}</div>
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
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Impact Breakthrough Success Story</h2>
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-emerald-400 mr-3 glow-effect" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{caseStudy.organization}</h3>
                      <p className="text-white/80">{caseStudy.focus}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <MapPin className="h-5 w-5 text-red-400 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-white/80">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="h-5 w-5 text-blue-400 mr-2" />
                      Solution
                    </h4>
                    <p className="text-white/80">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-emerald-400 mr-2" />
                      Results
                    </h4>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-lg font-bold text-emerald-400 mr-2 glow-effect">{result.metric}</span>
                          <span className="text-white/80 text-sm">{result.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-center border-t border-white/20 pt-8">
                  <p className="text-lg text-white/90 italic mb-4">"{caseStudy.quote}"</p>
                  <footer className="text-white/70">— {caseStudy.author}</footer>
                </blockquote>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Impact Measurement Tools */}
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
                  Advanced Impact Measurement Intelligence Tools
                </h2>
                <p className="text-xl text-white/80">
                  Comprehensive tools designed for development organizations to create breakthrough sustainable impact
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <BarChart3 className="h-8 w-8 text-emerald-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Impact Attribution Intelligence</h3>
                <p className="text-white/80">Advanced analytics to attribute breakthrough outcomes to specific interventions and programs</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Globe className="h-8 w-8 text-electric-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Cross-Regional Analysis</h3>
                <p className="text-white/80">Compare breakthrough impact across different regions and identify best practices for amplification</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Users className="h-8 w-8 text-emerald-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Beneficiary Journey Amplification</h3>
                <p className="text-white/80">Track individual and community breakthrough progress throughout the development process</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Target className="h-8 w-8 text-warm-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">SDG Mapping Intelligence</h3>
                <p className="text-white/80">Automatic mapping of activities and breakthrough outcomes to relevant SDG targets</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Award className="h-8 w-8 text-primary-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Donor Celebration Reporting</h3>
                <p className="text-white/80">Automated generation of donor reports with real-time breakthrough impact data</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <TrendingUp className="h-8 w-8 text-electric-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-white/80">AI-powered predictions for program breakthrough success and impact optimization</p>
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
                  Ready to Maximize Your Sustainable Impact?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join leading development organizations using ForgeAI to create measurable, lasting breakthrough change that transforms communities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                    Maximize Sustainable Impact
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule Impact Demo
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

export default ImpactOrganizations;
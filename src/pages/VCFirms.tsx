import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const VCFirms = () => {
  const transformationFocus = [
    {
      icon: <Users className="h-6 w-6 text-emerald-400" />,
      title: 'From scattered insights to unified portfolio intelligence',
      description: 'Centralize all portfolio data and insights in one powerful AI-driven platform'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-electric-400" />,
      title: 'From reactive support to proactive founder empowerment',
      description: 'Anticipate founder needs and provide strategic support before challenges arise'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-warm-400" />,
      title: 'From guesswork to data-driven value creation',
      description: 'Make investment decisions backed by comprehensive AI-powered analytics'
    }
  ];

  const solutions = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Portfolio Success Dashboard',
      description: 'Real-time visibility into all portfolio companies with AI-powered breakthrough insights and growth indicators.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Company breakthrough performance tracking',
        'Success probability assessment alerts',
        'Milestone achievement monitoring',
        'Market opportunity amplification analysis'
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: 'Founder Breakthrough Tracking Interface',
      description: 'Comprehensive founder journey management with automated success amplification and progress celebration.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Automated breakthrough progress reports',
        'Founder empowerment communication tracking',
        'Success milestone achievement alerts',
        'Strategic support need identification'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'ROI Amplification Analytics',
      description: 'Advanced analytics to measure portfolio performance and optimize future investment decisions with celebration metrics.',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Portfolio ROI amplification calculation',
        'Performance breakthrough benchmarking',
        'Investment success pattern analysis',
        'LP celebration reporting automation'
      ]
    }
  ];

  const stats = [
    { value: 40, suffix: '%', label: 'Average Portfolio Value Increase' },
    { value: 60, suffix: '%', label: 'Reduction in Manual Reporting' },
    { value: 85, suffix: '%', label: 'Faster Due Diligence Process' },
    { value: 3, suffix: 'x', label: 'More Founder Touchpoints' }
  ];

  const caseStudy = {
    company: 'EchoVC Partners',
    logo: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    challenge: 'Managing a diverse portfolio of 40+ startups across West Africa with limited visibility into founder progress and breakthrough potential.',
    solution: 'Implemented ForgeAI to centralize portfolio intelligence and automate founder empowerment tracking.',
    results: [
      { metric: '50%', description: 'Increase in portfolio company breakthrough success rate' },
      { metric: '30hrs', description: 'Saved per month on manual reporting processes' },
      { metric: '95%', description: 'Founders report dramatically improved support quality' }
    ],
    quote: 'ForgeAI transformed how we amplify our portfolio companies. We now have real-time breakthrough insights that help us provide targeted empowerment when founders need it most, turning potential into extraordinary outcomes.',
    author: 'Fatima Hassan, Innovation Manager'
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-navy-900 via-gray-800 to-navy-800"></div>
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-warm-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>
      <ParticleBackground 
        colors={['rgba(245, 158, 11, 0.4)', 'rgba(251, 191, 36, 0.3)', 'rgba(217, 119, 6, 0.3)']}
        particleCount={40}
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
                    Amplify Every Investment Into{' '}
                    <span className="text-gradient bg-gradient-to-r from-warm-400 to-yellow-400 bg-clip-text text-transparent">
                      Extraordinary Outcomes
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    AI-powered portfolio intelligence that transforms founder potential into measurable success stories
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg">
                      Unleash Portfolio Potential
                    </Button>
                    <Button variant="glass" size="lg">
                      Watch VC Demo
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
                  tint="orange" 
                  opacity="10"
                  animation="float"
                  hoverEffect="lift"
                >
                  <img
                    src="https://unsplash.com/photos/two-person-handshaking-vWchRczcQwM"
                    alt="VC celebrating portfolio success with digital dashboard"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-6 -left-6 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Portfolio Performance</div>
                  <div className="text-2xl font-bold text-white">
                    +<AnimatedCounter value={32} />%
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
                  Transform Your Investment Approach
                </h2>
                <p className="text-xl text-white/80">
                  ForgeAI empowers VCs to amplify every investment into breakthrough success stories
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

        {/* Solution Showcase */}
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
                  Complete Portfolio Intelligence
                </h2>
                <p className="text-xl text-white/80">
                  Transform your portfolio management with AI-powered insights and automated tracking
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
                        <div className="bg-gradient-to-r from-warm-500 to-yellow-500 p-3 rounded-lg mr-4 glow-effect">
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
                      tint="orange" 
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

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="orange" opacity="15">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Results That Matter
                </h2>
                <p className="text-xl text-white/90">
                  VCs using ForgeAI see measurable improvements in portfolio performance
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
                  <GlassCard 
                    className="p-6 text-center" 
                    tint="white" 
                    opacity="10"
                    hoverEffect="glow"
                  >
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

        {/* Success Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-8" tint="white" opacity="10" hoverEffect="glow">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Inspiring Portfolio Transformation Success Story</h2>
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.company}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-white/20"
                    />
                    <h3 className="text-xl font-semibold text-white">{caseStudy.company}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Target className="h-5 w-5 text-red-400 mr-2" />
                      Challenge
                    </h4>
                    <p className="text-white/80">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                      Solution
                    </h4>
                    <p className="text-white/80">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                      Results
                    </h4>
                    <div className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-lg font-bold text-warm-400 mr-2">{result.metric}</span>
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

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-12" tint="orange" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Amplify Your Portfolio Into Extraordinary Outcomes?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join leading VCs across Africa who use ForgeAI to transform founder potential into breakthrough success stories
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Unleash Portfolio Potential
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule VC Demo
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

export default VCFirms;
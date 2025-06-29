import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CheckCircle, 
  BarChart3,
  Target,
  ArrowRight,
  Award,
  TrendingUp,
  Sparkles,
  Rocket
} from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';

const Universities = () => {
  const transformationFocus = [
    {
      icon: <Sparkles className="h-6 w-6 text-emerald-400" />,
      title: 'From dormant ideas to thriving student ventures',
      description: 'Transform brilliant concepts into real businesses with structured support and guidance'
    },
    {
      icon: <Rocket className="h-6 w-6 text-electric-400" />,
      title: 'From academic theory to real-world entrepreneurial success',
      description: 'Bridge the gap between classroom learning and practical venture building'
    },
    {
      icon: <Award className="h-6 w-6 text-warm-400" />,
      title: 'From graduation to lifelong innovation leadership',
      description: 'Create lasting impact through continuous alumni engagement and success tracking'
    }
  ];

  const academicFeatures = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Student Entrepreneur Empowerment Tracking',
      description: 'Comprehensive system to track and amplify student entrepreneurship from ideation to breakthrough success.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Student visionary empowerment profiles',
        'Breakthrough project milestone tracking',
        'Team formation amplification tools',
        'Success readiness assessment intelligence'
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'Alumni Success Network Amplification',
      description: 'Connect current students with successful alumni entrepreneurs for mentorship and breakthrough opportunities.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Alumni entrepreneur success database',
        'Mentorship breakthrough matching',
        'Success story amplification tracking',
        'Network celebration event management'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: 'Academic Excellence Meets Entrepreneurial Impact Reporting',
      description: 'Specialized reporting that showcases how academic programs create real-world entrepreneurial impact.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Program breakthrough impact measurement',
        'Student success amplification metrics',
        'Grant celebration reporting automation',
        'Academic publication success data'
      ]
    }
  ];

  const successMetrics = [
    { 
      value: 85, 
      suffix: '%', 
      label: 'Student Engagement Amplification',
      description: 'More students actively participating in breakthrough entrepreneurship programs'
    },
    { 
      value: 40, 
      suffix: '%', 
      label: 'More Ventures Launched',
      description: 'Student projects that become real breakthrough businesses'
    },
    { 
      value: 60, 
      suffix: '%', 
      label: 'Better Alumni Connection',
      description: 'Improved tracking and engagement with graduate entrepreneurs'
    },
    { 
      value: 3, 
      suffix: 'x', 
      label: 'Success Rate Amplification',
      description: 'Student ventures that secure external funding and achieve breakthrough'
    }
  ];

  const graduateStats = [
    { metric: '150%', description: 'Increase in student venture breakthrough launches' },
    { metric: '40+', description: 'Alumni mentors actively engaged in empowerment' },
    { metric: '85%', description: 'Student satisfaction with program breakthrough support' },
    { metric: '25+', description: 'Countries where alumni have created impact' }
  ];

  const caseStudy = {
    university: 'University of Cape Town',
    program: 'Innovation & Entrepreneurship Hub',
    challenge: 'Managing 200+ student entrepreneurs across multiple faculties with limited visibility into breakthrough project progress and outcomes.',
    solution: 'Implemented ForgeAI to create a centralized platform for student venture empowerment tracking and alumni success network amplification.',
    results: [
      { metric: '150%', description: 'Increase in student venture breakthrough launches' },
      { metric: '40+', description: 'Alumni mentors actively engaged in empowerment' },
      { metric: '85%', description: 'Student satisfaction with program breakthrough support' }
    ],
    quote: 'ForgeAI helped us transform from a collection of individual projects into a thriving entrepreneurship ecosystem. Our students now have clear pathways from brilliant ideas to breakthrough ventures that create global impact.',
    author: 'Dr. Sarah Mbeki, Director of Innovation'
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Warm orange theme */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-800 via-amber-700 to-orange-600"></div>
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      <ParticleBackground 
        colors={['rgba(251, 146, 60, 0.4)', 'rgba(245, 158, 11, 0.3)', 'rgba(217, 119, 6, 0.3)']}
        particleCount={30}
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
                    Transform Brilliant Minds Into{' '}
                    <span className="text-gradient bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                      Breakthrough Founders
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Empower student visionaries with the tools, intelligence, and support to build the future from campus to global impact
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                      Unleash Student Innovation Potential
                    </Button>
                    <Button variant="glass" size="lg">
                      Watch University Demo
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
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="University students celebrating startup success in innovation lab"
                    className="w-full rounded-lg"
                  />
                </GlassCard>
                <GlassCard 
                  className="absolute -bottom-6 -right-6 p-4"
                  tint="emerald"
                  opacity="15"
                  hoverEffect="glow"
                >
                  <div className="text-sm font-medium text-white/80">Active Student Ventures</div>
                  <div className="text-2xl font-bold text-white">
                    <AnimatedCounter value={127} />
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
                  ForgeAI empowers universities to transform brilliant minds into breakthrough founders who create lasting global impact
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

        {/* Academic Features */}
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
                  Academic Excellence Meets Entrepreneurial Impact
                </h2>
                <p className="text-xl text-white/80">
                  Purpose-built features that transform academic institutions into breakthrough innovation launchpads
                </p>
              </GlassCard>
            </motion.div>

            <div className="space-y-16">
              {academicFeatures.map((feature, index) => (
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
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg mr-4 glow-effect">
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
                      tint="orange" 
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

        {/* Success Amplification */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <GlassCard className="p-8 max-w-4xl mx-auto" tint="amber" opacity="15">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Success Amplification: Graduate Startup Celebration Statistics
                </h2>
                <p className="text-xl text-white/90">
                  Universities using ForgeAI see extraordinary improvements in student entrepreneurship breakthrough outcomes
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="10" hoverEffect="glow">
                    <div className="text-4xl font-bold text-white mb-2 glow-effect">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-white font-semibold mb-2">{metric.label}</div>
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
                  <h2 className="text-3xl font-bold text-white mb-4">University Breakthrough Success Story</h2>
                  <div className="flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-amber-400 mr-3 glow-effect" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{caseStudy.university}</h3>
                      <p className="text-white/80">{caseStudy.program}</p>
                    </div>
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
                      <Sparkles className="h-5 w-5 text-blue-400 mr-2" />
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
                          <span className="text-lg font-bold text-amber-400 mr-2 glow-effect">{result.metric}</span>
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

        {/* Graduate Success Showcase */}
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
                  Graduate Startup Celebration Impact
                </h2>
                <p className="text-xl text-white/80">
                  Real breakthrough outcomes from student entrepreneurs who became global innovators
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {graduateStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center" tint="white" opacity="15" hoverEffect="lift">
                    <div className="text-3xl font-bold text-white mb-2 glow-effect">
                      {stat.metric}
                    </div>
                    <div className="text-white/80 text-sm">{stat.description}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Benefits */}
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
                  Built for Academic Excellence and Innovation Impact
                </h2>
                <p className="text-xl text-white/80">
                  Features that align with academic goals while creating real-world entrepreneurial breakthrough
                </p>
              </GlassCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <BookOpen className="h-8 w-8 text-amber-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Curriculum Integration</h3>
                <p className="text-white/80">Seamlessly integrate with existing entrepreneurship courses and breakthrough programs</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <BarChart3 className="h-8 w-8 text-electric-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Grant Celebration Reporting</h3>
                <p className="text-white/80">Automated reporting for research grants and institutional breakthrough funding</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Users className="h-8 w-8 text-emerald-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Faculty Collaboration</h3>
                <p className="text-white/80">Tools for faculty to mentor and track student entrepreneur breakthrough progress</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <GraduationCap className="h-8 w-8 text-warm-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Alumni Success Tracking</h3>
                <p className="text-white/80">Long-term tracking of graduate entrepreneur breakthrough success and global impact</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Target className="h-8 w-8 text-primary-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Impact Measurement</h3>
                <p className="text-white/80">Comprehensive metrics for program effectiveness and student breakthrough outcomes</p>
              </GlassCard>
              <GlassCard className="p-6" tint="white" opacity="15" hoverEffect="lift">
                <Globe className="h-8 w-8 text-electric-400 mb-4 glow-effect" />
                <h3 className="text-lg font-semibold text-white mb-3">Global Network</h3>
                <p className="text-white/80">Connect with other university entrepreneurship programs worldwide for breakthrough collaboration</p>
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
              <GlassCard className="p-12" tint="amber" opacity="15" hoverEffect="glow">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Unleash Student Innovation Potential?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join leading universities using ForgeAI to transform brilliant minds into breakthrough founders who create lasting global impact
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" icon={<Sparkles className="h-5 w-5" />}>
                    Unleash Student Innovation Potential
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule University Demo
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

export default Universities;
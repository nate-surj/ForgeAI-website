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
  Zap
} from 'lucide-react';
import Button from '../components/Button';
import AnimatedCounter from '../components/AnimatedCounter';

const ImpactOrganizations = () => {
  const painPoints = [
    {
      icon: <BarChart3 className="h-6 w-6 text-red-600" />,
      title: 'Fragmented reporting across multiple initiatives',
      description: 'Managing impact data across different programs, regions, and partners without unified visibility'
    },
    {
      icon: <Target className="h-6 w-6 text-orange-600" />,
      title: 'Difficult to measure long-term development impact',
      description: 'No systematic way to track beneficiary progress and outcomes over time'
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: 'Limited visibility into grantee progress',
      description: 'Losing track of funded organizations and their actual impact on communities'
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: 'Disconnected programs across regions and partners',
      description: 'Siloed initiatives that miss opportunities for collaboration and knowledge sharing'
    }
  ];

  const impactFeatures = [
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Multi-Program Coordination Dashboard',
      description: 'Centralized oversight of all development initiatives across regions, partners, and focus areas.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Cross-program impact tracking',
        'Regional performance comparison',
        'Partner collaboration tools',
        'Resource allocation optimization'
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-electric-600" />,
      title: 'Beneficiary Progress Tracking',
      description: 'Comprehensive system to track individual and community outcomes throughout the development journey.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Individual beneficiary profiles',
        'Community impact measurement',
        'Long-term outcome tracking',
        'Success story documentation'
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-600" />,
      title: 'Cross-Regional Impact Analytics',
      description: 'Advanced analytics to measure and compare development impact across different regions and initiatives.',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'SDG alignment tracking',
        'Impact attribution analysis',
        'Cost-effectiveness metrics',
        'Donor reporting automation'
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-warm-600" />,
      title: 'Transparent Fund Allocation',
      description: 'Real-time tracking of fund allocation and milestone achievement with full transparency.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      features: [
        'Real-time fund tracking',
        'Milestone-based disbursement',
        'Impact-linked funding',
        'Transparent reporting'
      ]
    }
  ];

  const sdgMetrics = [
    { 
      sdg: 'SDG 1', 
      title: 'No Poverty', 
      value: 85, 
      suffix: '%',
      description: 'Beneficiaries with improved income'
    },
    { 
      sdg: 'SDG 4', 
      title: 'Quality Education', 
      value: 92, 
      suffix: '%',
      description: 'Students completing programs'
    },
    { 
      sdg: 'SDG 8', 
      title: 'Decent Work', 
      value: 78, 
      suffix: '%',
      description: 'Job creation success rate'
    },
    { 
      sdg: 'SDG 17', 
      title: 'Partnerships', 
      value: 150, 
      suffix: '+',
      description: 'Active partnerships'
    }
  ];

  const caseStudy = {
    organization: 'African Development Foundation',
    focus: 'Rural Entrepreneurship Development',
    challenge: 'Managing 50+ rural development programs across 12 African countries with limited visibility into beneficiary progress and cross-program learning opportunities.',
    solution: 'Implemented ForgeAI to create a unified platform for multi-program coordination and beneficiary tracking.',
    results: [
      { metric: '40%', description: 'Improvement in program coordination efficiency' },
      { metric: '65%', description: 'Better beneficiary outcome tracking' },
      { metric: '25%', description: 'Increase in cross-program knowledge sharing' }
    ],
    quote: 'ForgeAI transformed how we measure and manage development impact. We now have real-time visibility into beneficiary progress across all our programs, enabling us to make data-driven decisions that maximize impact.',
    author: 'Dr. Amina Kone, Program Director'
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Scale Impact Through{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-electric-500 bg-clip-text text-transparent">
                  Structured Innovation
                </span>{' '}
                Programs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform development initiatives into measurable outcomes with transparent program management and beneficiary tracking
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Maximize Development Impact
                </Button>
                <Button variant="outline" size="lg">
                  Watch Impact Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Impact program manager reviewing initiative dashboard"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600">Active Programs</div>
                <div className="text-2xl font-bold text-emerald-600">
                  <AnimatedCounter value={47} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Challenge of Measuring Development Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most development organizations struggle to track and measure the real impact of their initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="bg-red-100 p-3 rounded-lg mb-4 w-fit">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Impact Management Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for development organizations to track, measure, and maximize impact
            </p>
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
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gray-100 rounded-2xl p-6">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Impact Measurement */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-Time SDG Alignment & Progress
            </h2>
            <p className="text-xl text-white/90">
              Track your organization's contribution to the Sustainable Development Goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-xl p-6 text-center"
              >
                <div className="bg-white/20 rounded-lg p-3 mb-4 w-fit mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm text-white/80 mb-1">{metric.sdg}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.title}</div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-white/80 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Success Story</h2>
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-emerald-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{caseStudy.organization}</h3>
                  <p className="text-gray-600">{caseStudy.focus}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  Challenge
                </h4>
                <p className="text-gray-600">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  Solution
                </h4>
                <p className="text-gray-600">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
                  Results
                </h4>
                <div className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-lg font-bold text-emerald-600 mr-2">{result.metric}</span>
                      <span className="text-gray-600 text-sm">{result.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-center border-t border-gray-200 pt-8">
              <p className="text-lg text-gray-700 italic mb-4">"{caseStudy.quote}"</p>
              <footer className="text-gray-600">— {caseStudy.author}</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Impact Measurement Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Impact Measurement Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed for development organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <BarChart3 className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact Attribution</h3>
              <p className="text-gray-600">Advanced analytics to attribute outcomes to specific interventions and programs</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Globe className="h-8 w-8 text-electric-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cross-Regional Analysis</h3>
              <p className="text-gray-600">Compare impact across different regions and identify best practices</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Users className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Beneficiary Journey</h3>
              <p className="text-gray-600">Track individual and community progress throughout the development process</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Target className="h-8 w-8 text-warm-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SDG Mapping</h3>
              <p className="text-gray-600">Automatic mapping of activities and outcomes to relevant SDG targets</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Award className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Donor Reporting</h3>
              <p className="text-gray-600">Automated generation of donor reports with real-time impact data</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-electric-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">AI-powered predictions for program success and impact optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-electric-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Maximize Your Development Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join leading development organizations using ForgeAI to create measurable, lasting change
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Start Impact Program
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Schedule Impact Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpactOrganizations;
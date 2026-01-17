import React, { useState } from 'react';
import { Building2, TrendingUp, Shield, CheckCircle, XCircle, AlertCircle, Upload, BarChart3, FileText, Users, DollarSign, Lock, Scale, Target, PieChart, Activity, AlertTriangle } from 'lucide-react';

const SimpleLineChart = ({ color }) => (
  <svg viewBox="0 0 100 30" className="w-full h-16 opacity-50">
    <path
      d="M0,25 C10,25 10,10 20,10 C30,10 30,20 40,20 C50,20 50,5 60,5 C70,5 70,15 80,15 C90,15 90,0 100,0 L100,30 L0,30 Z"
      fill={`url(#gradient-${color})`}
    />
    <path
      d="M0,25 C10,25 10,10 20,10 C30,10 30,20 40,20 C50,20 50,5 60,5 C70,5 70,15 80,15 C90,15 90,0 100,0"
      fill="none"
      stroke={color}
      strokeWidth="2"
    />
    <defs>
      <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.2" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const StartupInvestmentPlatform = () => {
  const [view, setView] = useState('welcome');
  const [formData, setFormData] = useState({
    companyName: '',
    stage: '',
    industry: '',
    problemStatement: '',
    solution: '',
    capitalNeeded: '',
    currentRevenue: ''
  });
  const [userRole, setUserRole] = useState(null); // 'founder' | 'analyst' | null

  const [submissions, setSubmissions] = useState([
    // Pre-populating with the static data you originally had in the table
    {
      companyName: 'FinFlow Technologies',
      stage: 'Early Revenue',
      industry: 'FinTech',
      evaluation: { 
        recommendation: 'Fund', 
        confidence: 79,
        // Mock data for pre-filled items to prevent crash on view
        classification: 'FinTech / Digital Banking',
        analogousIndustries: [],
        dimensions: { financial: { score: 80, metrics: {} }, technology: { score: 75, metrics: {} }, operations: { score: 70, metrics: {} }, strategy: { score: 85, metrics: {} } },
        risks: [],
        projections: { year1: { revenue: 0, growth: 0, roi: 0 }, year3: { revenue: 0, growth: 0, roi: 0 }, year5: { revenue: 0, growth: 0, roi: 0 } }
      }
    },
    {
      companyName: 'HealthSync AI',
      stage: 'MVP',
      industry: 'HealthTech',
      evaluation: { 
        recommendation: 'Partially Fund', 
        confidence: 68,
        classification: 'HealthTech',
        analogousIndustries: [],
        dimensions: { financial: { score: 65, metrics: {} }, technology: { score: 80, metrics: {} }, operations: { score: 60, metrics: {} }, strategy: { score: 70, metrics: {} } },
        risks: [],
        projections: { year1: { revenue: 0, growth: 0, roi: 0 }, year3: { revenue: 0, growth: 0, roi: 0 }, year5: { revenue: 0, growth: 0, roi: 0 } }
      }
    },
    {
      companyName: 'CryptoVault Pro',
      stage: 'Idea',
      industry: 'Blockchain',
      evaluation: { 
        recommendation: 'Decline', 
        confidence: 42,
        classification: 'Blockchain',
        analogousIndustries: [],
        dimensions: { financial: { score: 40, metrics: {} }, technology: { score: 50, metrics: {} }, operations: { score: 30, metrics: {} }, strategy: { score: 40, metrics: {} } },
        risks: [],
        projections: { year1: { revenue: 0, growth: 0, roi: 0 }, year3: { revenue: 0, growth: 0, roi: 0 }, year5: { revenue: 0, growth: 0, roi: 0 } }
      }
    }
  ]);

  const loadSampleStartup = () => {
    setFormData({
      companyName: 'PayStream Analytics',
      stage: 'Early Revenue',
      industry: 'FinTech / Embedded Finance',
      problemStatement: 'Small and medium businesses struggle to predict cash flow accurately, leading to 82% of business failures due to poor cash management. Traditional accounting software only shows historical data, leaving business owners blind to upcoming financial challenges. Banks have limited visibility into SMB financial health beyond credit scores, making lending decisions slower and riskier.',
      solution: 'PayStream Analytics uses AI to predict cash flow 90 days ahead with 94% accuracy by analyzing invoice patterns, payment histories, seasonal trends, and market signals. Our embedded finance platform integrates directly into existing banking apps, providing real-time insights to both businesses and their banks. For SMBs: predictive alerts prevent overdrafts and optimize payment timing. For banks: enhanced credit risk assessment enables faster loan approvals and proactive relationship management.',
      capitalNeeded: '$2,500,000',
      currentRevenue: '$340,000 ARR'
    });
  };
  const [evaluationData, setEvaluationData] = useState(null);

  // BMO Color Palette
  const colors = {
    primary: '#0075BE', // BMO Blue
    secondary: '#CC0000', // BMO Red
    success: '#00A94F',
    warning: '#FFB81C',
    background: '#F5F7FA',
    text: '#1A1A1A'
  };

  const handleSubmit = () => {
    // Simulate AI processing with dynamic evaluation based on form data
    const isPayStream = formData.companyName === 'PayStream Analytics';
    
    const mockEvaluation = {
      classification: isPayStream ? 'FinTech / Embedded Finance & Predictive Analytics' : 'FinTech / Digital Banking',
      analogousIndustries: isPayStream 
        ? ['Traditional Banking Software', 'Business Intelligence Platforms', 'Credit Risk Assessment Tools', 'SaaS Financial Management']
        : ['Traditional Banking', 'Payment Processing', 'Regulatory Compliance Software'],
      dimensions: {
        financial: {
          score: isPayStream ? 82 : 78,
          metrics: {
            capitalEfficiency: isPayStream ? 85 : 82,
            roiProjection: isPayStream ? 81 : 75,
            revenuePotential: isPayStream ? 80 : 77
          }
        },
        technology: {
          score: isPayStream ? 88 : 85,
          metrics: {
            feasibility: isPayStream ? 92 : 88,
            integrationComplexity: isPayStream ? 84 : 80,
            securityPosture: isPayStream ? 88 : 87
          }
        },
        operations: {
          score: isPayStream ? 76 : 72,
          metrics: {
            regulatoryReadiness: isPayStream ? 74 : 68,
            scalability: isPayStream ? 80 : 78,
            onboardingComplexity: isPayStream ? 74 : 70
          }
        },
        strategy: {
          score: isPayStream ? 86 : 81,
          metrics: {
            marketAlignment: isPayStream ? 90 : 85,
            customerReach: isPayStream ? 84 : 79,
            partnershipValue: isPayStream ? 85 : 80
          }
        }
      },
      risks: isPayStream ? [
        { 
          category: 'Regulatory', 
          level: 'Medium', 
          description: 'Must comply with financial data protection standards (PCI-DSS, SOC 2) and banking partnership regulations. AI-driven credit insights may require additional regulatory scrutiny.',
          mitigation: 'Engage compliance consultants early, obtain SOC 2 Type II certification, establish clear data governance framework, partner with regulated financial institutions to leverage their compliance infrastructure'
        },
        { 
          category: 'Market', 
          level: 'Low', 
          description: 'Competitive landscape includes established players like Intuit and emerging AI competitors. Customer acquisition in crowded market requires strong differentiation.',
          mitigation: 'Focus on embedded finance strategy to leverage bank distribution channels, emphasize superior prediction accuracy (94% vs industry average 75-80%), build strong bank partnership moat'
        },
        { 
          category: 'Technology', 
          level: 'Medium', 
          description: 'AI model accuracy depends on data quality and variety. Integration with diverse banking systems and accounting platforms presents technical complexity. Model drift risk as market conditions change.',
          mitigation: 'Implement robust data validation pipelines, build API-first architecture with standardized connectors, establish continuous model monitoring and retraining protocols, maintain 6-month runway of historical data for model updates'
        },
        {
          category: 'Operational',
          level: 'Low',
          description: 'Scaling customer success and implementation teams while maintaining service quality. Managing multiple bank partnership SLAs simultaneously.',
          mitigation: 'Develop self-service onboarding tools, create comprehensive documentation and training materials, implement tiered support model, automate routine implementation tasks'
        }
      ] : [
        { category: 'Regulatory', level: 'Medium', description: 'Requires compliance with banking regulations', mitigation: 'Partner with regulatory consultants, implement compliance framework early' },
        { category: 'Market', level: 'Low', description: 'Competitive landscape is evolving', mitigation: 'Focus on differentiation through superior UX and AI capabilities' },
        { category: 'Technology', level: 'Medium', description: 'Integration with legacy banking systems', mitigation: 'Adopt API-first architecture, phased rollout strategy' }
      ],
      recommendation: isPayStream ? 'Fund' : 'Fund',
      confidence: isPayStream ? 85 : 82,
      projections: isPayStream ? {
        year1: { revenue: 1200000, growth: 250, roi: 22, customers: 450, expansion: 'Launch with 3 tier-1 bank partnerships, expand SMB user base to 450 businesses' },
        year3: { revenue: 6800000, growth: 420, roi: 185, customers: 2800, expansion: 'Scale to 12 bank partnerships across US and Canada, achieve 2,800+ SMB customers, introduce predictive lending module' },
        year5: { revenue: 18500000, growth: 580, roi: 410, customers: 8500, expansion: 'International expansion (UK, Australia), enterprise tier for banks with 10k+ SMB customers, AI-powered working capital optimization suite' }
      } : {
        year1: { revenue: 850000, growth: 120, roi: 15 },
        year3: { revenue: 4200000, growth: 185, roi: 145 },
        year5: { revenue: 12800000, growth: 220, roi: 340 }
      },
      keyStrengths: isPayStream ? [
        'Strong product-market fit evidenced by $340k ARR with minimal marketing spend',
        'Compelling value proposition solving critical pain point (82% of SMB failures due to cash flow issues)',
        '94% prediction accuracy significantly exceeds industry benchmarks',
        'Dual revenue model (SMB subscriptions + bank licensing) provides diversification',
        'Embedded finance strategy creates distribution advantage and higher switching costs',
        'Clear path to bank partnerships through risk mitigation value proposition'
      ] : [],
      considerations: isPayStream ? [
        'Early stage revenue requires validation of scalability and unit economics',
        'Dependence on bank partnerships for distribution creates concentration risk',
        'Model accuracy must be maintained across diverse business types and economic conditions',
        'Customer acquisition cost and lifetime value metrics need continued monitoring',
        'Competitive moat relies heavily on prediction accuracy and bank relationships'
      ] : []
    };

    // CHANGED: Instead of setting evaluationData and view directly, add to submissions list
    const newSubmission = {
      ...formData,
      evaluation: mockEvaluation
    };

    setSubmissions([newSubmission, ...submissions]); // Add new submission to the TOP of the list
    setView('success'); // Send Founder to success page
    window.scrollTo(0, 0);
  };

  const openReport = (submission) => {
    setFormData(submission);
    setEvaluationData(submission.evaluation);
    setView('results');
    window.scrollTo(0, 0);
  };

  const SignInScreen = () => (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #005A8C 100%)` }}
    >
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full text-center">
        <Building2 size={56} className="mx-auto mb-4 text-blue-600" />
        <h1 className="text-3xl font-bold mb-2">BMO Innovation Platform</h1>
        <p className="text-gray-600 mb-8">
          Sign in to continue
        </p>
  
        <div className="space-y-4">
          <button
            onClick={() => {
              setUserRole('founder');
              setView('founder');
            }}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            <Users size={20} />
            Sign in as Founder
          </button>
  
          <button
            onClick={() => {
              setUserRole('analyst');
              setView('analyst');
            }}
            className="w-full flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            <Lock size={20} />
            Sign in as Analyst
          </button>
        </div>
      </div>
    </div>
  );
  

  const WelcomeScreen = () => (
    <div className="min-h-screen flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #005A8C 100%)` }}>
      <div className="text-center text-white p-8 max-w-3xl">
        <Building2 size={80} className="mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4">BMO Innovation Investment Platform</h1>
        <p className="text-xl mb-8 opacity-90">AI-Powered Startup Evaluation System</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setView('founder')}
           className="border-2 border-blue-900 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg
              hover:bg-blue-900 hover:border-white hover:text-white transition flex items-center gap-2"
          >
            <Users size={24} />
            Founder Portal
          </button>
          <button
            onClick={() => setView('analyst')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg
             hover:bg-white hover:text-blue-900 hover:border-blue-900
             transition flex items-center gap-2"
          >
            <BarChart3 size={24} />
            Analyst Dashboard
          </button>
        </div>
      </div>
    </div>
  );

  const SubmissionSuccess = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-lg w-full text-center">
        <div className="mb-6 flex justify-center">
            {/* Simple CSS animation for the checkmark */}
            <div className="rounded-full bg-green-100 p-4 animate-bounce">
                <CheckCircle size={64} style={{ color: colors.success }} />
            </div>
        </div>
        <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>Application Received!</h2>
        <p className="text-gray-600 text-lg mb-8">
          Thank you for submitting your proposal to BMO. Our AI system is currently reviewing your application. 
          Please stay tuned for a response.
        </p>
        <button 
            onClick={() => {
                setFormData({ companyName: '', stage: '', industry: '', problemStatement: '', solution: '', capitalNeeded: '', currentRevenue: '' });
                setView('founder');
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
            Submit Another Application
        </button>
        <button 
            onClick={() => { setUserRole(null); setView('welcome'); }}
            className="mt-4 text-gray-500 hover:text-gray-700 font-medium"
        >
            Sign Out
        </button>
      </div>
    </div>
  );

  const FounderIntake = () => (
    <div className="min-h-screen bg-gray-50">
      <div style={{ backgroundColor: colors.primary }} className="text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Building2 size={32} />
            <h1 className="text-2xl font-bold">Founder Application Portal</h1>
          </div>
          <button onClick={() => {
            setUserRole(null);
            setView('welcome');
            }}
            className="text-white opacity-80 hover:opacity-100"
            >
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: colors.text }}>Submit Your Startup</h2>
          <p className="text-gray-600 mb-8">Tell us about your vision. We're excited to learn about your innovation.</p>

          <div className="mb-6">
            <button
              onClick={loadSampleStartup}
              className="w-full bg-gray-100 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              📋 Load Sample Startup (PayStream Analytics)
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Company Name *</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                placeholder="Your Company Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Company Stage *</label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({...formData, stage: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select stage...</option>
                <option value="idea">Idea Stage</option>
                <option value="mvp">MVP / Prototype</option>
                <option value="early">Early Revenue</option>
                <option value="growth">Growth Stage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Industry / Sector *</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                placeholder="e.g., FinTech, HealthTech, AI/ML"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Problem Statement *</label>
              <textarea
                value={formData.problemStatement}
                onChange={(e) => setFormData({...formData, problemStatement: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none h-32"
                placeholder="What critical problem are you solving?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Solution Overview *</label>
              <textarea
                value={formData.solution}
                onChange={(e) => setFormData({...formData, solution: e.target.value})}
                className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none h-32"
                placeholder="Describe your solution and how it addresses the problem"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Capital Needed</label>
                <input
                  type="text"
                  value={formData.capitalNeeded}
                  onChange={(e) => setFormData({...formData, capitalNeeded: e.target.value})}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                  placeholder="$500,000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Current Annual Revenue</label>
                <input
                  type="text"
                  value={formData.currentRevenue}
                  onChange={(e) => setFormData({...formData, currentRevenue: e.target.value})}
                  className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:outline-none"
                  placeholder="$0 or current revenue"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.text }}>Upload Documents</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer">
                <Upload size={40} className="mx-auto mb-3 text-gray-400" />
                <p className="text-gray-600 mb-1">Drop files here or click to upload</p>
                <p className="text-sm text-gray-400">Pitch deck, financials, product demo links (PDF, PPT, XLSX)</p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              style={{ backgroundColor: colors.primary }}
              className="w-full text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Submit Application for AI Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ResultsView = () => {
    if (!evaluationData) return null;

    const getRecommendationColor = (rec) => {
      if (rec === 'Fund') return colors.success;
      if (rec === 'Partially Fund') return colors.warning;
      return colors.secondary;
    };

    const getRecommendationIcon = (rec) => {
      if (rec === 'Fund') return <CheckCircle size={40} />;
      if (rec === 'Partially Fund') return <AlertCircle size={40} />;
      return <XCircle size={40} />;
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div style={{ backgroundColor: colors.primary }} className="text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <BarChart3 size={32} />
              <h1 className="text-2xl font-bold">AI Evaluation Results</h1>
            </div>
            <button onClick={() => {
            setUserRole(null);
            setView('welcome');
            }}
            className="text-white opacity-80 hover:opacity-100"
            >
            Sign Out
          </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-8 space-y-6">
          {/* Recommendation Card */}
          <div className="bg-white rounded-lg shadow-lg p-8" style={{ borderLeft: `8px solid ${getRecommendationColor(evaluationData.recommendation)}` }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div style={{ color: getRecommendationColor(evaluationData.recommendation) }}>
                  {getRecommendationIcon(evaluationData.recommendation)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold" style={{ color: getRecommendationColor(evaluationData.recommendation) }}>
                    {evaluationData.recommendation}
                  </h2>
                  <p className="text-gray-600">AI Confidence: {evaluationData.confidence}%</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Company Submitted</p>
                <p className="font-semibold text-lg">{formData.companyName}</p>
              </div>
            </div>
          </div>

          {/* Industry Classification */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
              <Target size={24} style={{ color: colors.primary }} />
              Industry Classification & Context
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Primary Classification</p>
                <p className="font-semibold text-lg" style={{ color: colors.primary }}>{evaluationData.classification}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Analogous Industries for Benchmarking</p>
                <div className="flex gap-2 flex-wrap">
                  {evaluationData.analogousIndustries.map((ind, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Evaluation Dimensions */}
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(evaluationData.dimensions).map(([key, data]) => {
              const icons = {
                financial: <DollarSign size={24} />,
                technology: <Building2 size={24} />,
                operations: <Scale size={24} />,
                strategy: <Target size={24} />
              };
              
              return (
                <div key={key} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div style={{ color: colors.primary }}>{icons[key]}</div>
                    <h4 className="text-lg font-bold capitalize">{key} Viability</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Overall Score</span>
                      <span className="font-bold" style={{ color: data.score >= 75 ? colors.success : colors.warning }}>
                        {data.score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all"
                        style={{
                          width: `${data.score}%`,
                          backgroundColor: data.score >= 75 ? colors.success : colors.warning
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(data.metrics).map(([metric, value]) => (
                      <div key={metric} className="flex justify-between text-sm">
                        <span className="text-gray-600 capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-medium">{value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Risk Assessment */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
              <Shield size={24} style={{ color: colors.primary }} />
              Risk Assessment & Mitigation
            </h3>
            <div className="space-y-4">
              {evaluationData.risks.map((risk, i) => {
                const levelColor = risk.level === 'High' ? colors.secondary : risk.level === 'Medium' ? colors.warning : colors.success;
                return (
                  <div key={i} className="border-l-4 pl-4 py-2" style={{ borderColor: levelColor }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold">{risk.category} Risk</span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: levelColor }}>
                        {risk.level}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-2">{risk.description}</p>
                    <p className="text-sm text-gray-600"><strong>Mitigation:</strong> {risk.mitigation}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Financial Projections */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.text }}>
              <TrendingUp size={24} style={{ color: colors.primary }} />
              Financial Projections & Growth Trajectory
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(evaluationData.projections).map(([year, data]) => (
                <div key={year} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2 font-semibold">{year === 'year1' ? 'Year 1' : year === 'year3' ? 'Year 3' : 'Year 5'}</p>
                  <p className="text-2xl font-bold mb-1" style={{ color: colors.primary }}>
                    ${(data.revenue / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-sm text-gray-600 mb-1">Projected Revenue</p>
                  <div className="flex justify-around text-xs mt-3 mb-3">
                    <div>
                      <p className="text-gray-500">Growth</p>
                      <p className="font-bold text-green-600">+{data.growth}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">ROI</p>
                      <p className="font-bold text-green-600">{data.roi}%</p>
                    </div>
                  </div>
                  {data.customers && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">Customer Base</p>
                      <p className="font-bold text-sm">{data.customers.toLocaleString()}</p>
                    </div>
                  )}
                  {data.expansion && (
                    <p className="text-xs text-gray-600 mt-2 text-left">{data.expansion}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths & Considerations */}
          {evaluationData.keyStrengths && evaluationData.keyStrengths.length > 0 && (
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.success }}>
                  <CheckCircle size={24} />
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {evaluationData.keyStrengths.map((strength, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.warning }}>
                  <AlertCircle size={24} />
                  Considerations
                </h3>
                <ul className="space-y-2">
                  {evaluationData.considerations.map((consideration, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-yellow-500 font-bold">→</span>
                      <span>{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Human Oversight Note */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <div className="flex gap-3">
              <AlertCircle size={24} style={{ color: colors.primary }} className="flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2" style={{ color: colors.primary }}>Human Decision Authority</h4>
                <p className="text-gray-700">
                  This AI evaluation provides data-driven insights to support investment decisions. Final approval authority 
                  rests with BMO investment analysts and decision-makers. This recommendation will be reviewed in context 
                  of portfolio strategy, market conditions, and qualitative factors beyond AI assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AnalystDashboard = () => {
    // Mock aggregated statistics for the charts (representing the broader dataset)
    const portfolioStats = {
        totalCapital: '$42.5M',
        avgScore: 74,
        sectors: [
            { name: 'FinTech', count: 45, width: '45%' },
            { name: 'HealthTech', count: 28, width: '28%' },
            { name: 'CleanTech', count: 15, width: '15%' },
            { name: 'AgriTech', count: 12, width: '12%' }
        ],
        risk: {
            low: 35,    // Safe bets
            medium: 50, // Standard venture risk
            high: 15    // High risk / Moonshots
        }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div style={{ backgroundColor: colors.primary }} className="text-white p-6 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Lock size={32} />
              <div>
                <h1 className="text-2xl font-bold">VentureLens Analyst Dashboard</h1>
                <p className="text-blue-100 text-sm">Portfolio Overview & Governance</p>
              </div>
            </div>
            <button onClick={() => { setUserRole(null); setView('welcome'); }} className="text-white opacity-80 hover:opacity-100">
              Sign Out
            </button>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto p-8 space-y-8">
            
          {/* NEW: Top Level KPI Cards */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.primary }}>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Pending Reviews</p>
                        <h3 className="text-3xl font-bold text-gray-800">{submissions.length + 14}</h3>
                    </div>
                    <FileText size={24} className="text-gray-400" />
                </div>
                <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <TrendingUp size={12} /> +12% from last week
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.success }}>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Avg AI Confidence</p>
                        <h3 className="text-3xl font-bold text-gray-800">{portfolioStats.avgScore}%</h3>
                    </div>
                    <BarChart3 size={24} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">Based on 142 assessments</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4" style={{ borderColor: colors.warning }}>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Capital Demand</p>
                        <h3 className="text-3xl font-bold text-gray-800">{portfolioStats.totalCapital}</h3>
                    </div>
                    <DollarSign size={24} className="text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">Total requested funding</p>
            </div>

            {/* Responsible AI Monitor - Directly addresses 'Governance' in case */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-sm text-white">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-blue-200 text-sm font-medium">AI Governance</p>
                        <h3 className="text-xl font-bold">Healthy</h3>
                    </div>
                    <Shield size={24} className="text-blue-300" />
                </div>
                <div className="space-y-1 mt-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-blue-200">Fairness Check</span>
                        <span className="text-green-400">Pass</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-blue-200">Model Drift</span>
                        <span className="text-green-400">0.4% (Low)</span>
                    </div>
                </div>
            </div>
          </div>

          {/* NEW: Charts Row */}
          <div className="grid grid-cols-2 gap-8">
             
             {/* Sector Distribution Chart */}
             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <PieChart size={20} className="text-gray-500" />
                    Incoming Sector Distribution
                </h3>
                <div className="space-y-4">
                    {portfolioStats.sectors.map((sector, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">{sector.name}</span>
                                <span className="text-gray-500">{sector.count} deals</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div 
                                    className="h-3 rounded-full transition-all duration-1000"
                                    style={{ 
                                        width: sector.width, 
                                        backgroundColor: i === 0 ? colors.primary : colors.text 
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* Risk vs Volume Matrix */}
             <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Activity size={20} className="text-gray-500" />
                    Risk Profile Analysis
                </h3>
                <div className="flex items-end justify-between h-40 px-4 space-x-8">
                    {/* Low Risk Bar */}
                    <div className="w-1/3 flex flex-col items-center gap-2">
                        <span className="text-2xl font-bold text-gray-700">{portfolioStats.risk.low}%</span>
                        <div className="w-full bg-green-500 rounded-t-lg transition-all hover:opacity-90" style={{ height: '35%' }}></div>
                        <span className="text-sm font-medium text-gray-500">Low Risk</span>
                    </div>
                    {/* Medium Risk Bar */}
                    <div className="w-1/3 flex flex-col items-center gap-2">
                        <span className="text-2xl font-bold text-gray-700">{portfolioStats.risk.medium}%</span>
                        <div className="w-full bg-yellow-400 rounded-t-lg transition-all hover:opacity-90" style={{ height: '50%' }}></div>
                        <span className="text-sm font-medium text-gray-500">Medium Risk</span>
                    </div>
                    {/* High Risk Bar */}
                    <div className="w-1/3 flex flex-col items-center gap-2">
                        <span className="text-2xl font-bold text-gray-700">{portfolioStats.risk.high}%</span>
                        <div className="w-full bg-red-500 rounded-t-lg transition-all hover:opacity-90" style={{ height: '15%' }}></div>
                        <span className="text-sm font-medium text-gray-500">High Risk</span>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600 border border-gray-200">
                    <span className="font-bold">Insight:</span> FinTech proposals are currently showing 15% lower risk profiles than the 6-month average.
                </div>
             </div>
          </div>
  
          {/* Recent Submissions Table (Existing Logic) */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text }}>Incoming Submissions</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2" style={{ borderColor: colors.primary }}>
                    <th className="text-left p-3">Company</th>
                    <th className="text-left p-3">Stage</th>
                    <th className="text-left p-3">Industry</th>
                    <th className="text-left p-3">AI Score</th>
                    <th className="text-left p-3">Recommendation</th>
                    <th className="text-left p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub, index) => {
                      const rec = sub.evaluation.recommendation;
                      const score = sub.evaluation.confidence;
                      const color = rec === 'Fund' ? colors.success : rec === 'Partially Fund' ? colors.warning : colors.secondary;
                      const scoreColor = score > 75 ? 'text-green-600' : score > 50 ? 'text-yellow-600' : 'text-red-600';
                      
                      return (
                          <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-semibold">{sub.companyName}</td>
                          <td className="p-3">{sub.stage || 'N/A'}</td>
                          <td className="p-3">{sub.industry}</td>
                          <td className="p-3">
                              <span className={`font-bold ${scoreColor}`}>{score}%</span>
                          </td>
                          <td className="p-3">
                              <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: color }}>
                              {rec}
                              </span>
                          </td>
                          <td className="p-3">
                              <button 
                                  onClick={() => openReport(sub)}
                                  className="text-blue-600 hover:underline font-semibold"
                              >
                                  Review Details
                              </button>
                          </td>
                          </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="font-sans">
      {view === 'welcome' && <SignInScreen />}
      
      {view === 'founder' && userRole === 'founder' && <FounderIntake />}
      
      {/* CHANGED: Added Success View */}
      {view === 'success' && <SubmissionSuccess />}
      
      {/* CHANGED: Allow Analyst to see Results View now */}
      {view === 'results' && <ResultsView />} 
  
      {view === 'analyst' && userRole === 'analyst' && <AnalystDashboard />}
  
      {view !== 'welcome' && !userRole && <SignInScreen />}
    </div>
  );
};

export default StartupInvestmentPlatform;
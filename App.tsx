
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  TrendingUp, 
  Map as MapIcon, 
  Users, 
  PieChart as PieIcon, 
  Activity,
  Coffee,
  Navigation,
  ArrowRight,
  Info,
  DollarSign
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { SectionId } from './types';
import { FOUNDERS, REVENUE_DATA, SPACE_INFO } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const NavItem = ({ id, icon: Icon, label }: { id: SectionId, icon: any, label: string }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      <Icon size={18} />
      <span className="text-sm font-medium hidden md:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo(SectionId.Home)}>
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <Cloud size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">麦田云端 · 活力广场</span>
          </div>
          <div className="flex space-x-1 md:space-x-4">
            <NavItem id={SectionId.Summary} icon={Info} label="摘要" />
            <NavItem id={SectionId.Market} icon={TrendingUp} label="市场" />
            <NavItem id={SectionId.Products} icon={MapIcon} label="空间" />
            <NavItem id={SectionId.Finance} icon={DollarSign} label="财务" />
            <NavItem id={SectionId.Team} icon={Users} label="团队" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id={SectionId.Home} className="h-screen flex items-center justify-center relative overflow-hidden cloud-gradient">
        <div className="absolute top-20 right-20 opacity-20 animate-float">
          <Cloud size={200} className="text-blue-400" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <Cloud size={150} className="text-blue-300" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wider">
            商业计划书 · 创新楼顶经济
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 leading-tight">
            麦田云端<br/>
            <span className="text-blue-600 underline decoration-green-400 underline-offset-8">活力广场</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            将运动与茶歇搬上云端，打造西安“第五立面”社交新标杆。地铁50米直达，下班即开局。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => scrollTo(SectionId.Summary)}
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center space-x-2"
            >
              <span>查看计划书</span>
              <ArrowRight size={20} />
            </button>
            <div className="flex items-center space-x-4 text-slate-500">
              <div className="flex items-center space-x-1">
                <Navigation size={18} className="text-blue-500" />
                <span>西安 · 麦田广场 8F</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id={SectionId.Summary} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">项目摘要</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">我们的愿景</h3>
                <p className="text-slate-700 leading-relaxed">
                  本项目是一个创新型楼顶休闲运动空间，旨在解决当前实体经济面临的下行压力。
                  通过盘活长期闲置的商业楼顶空间，探索“体育+商场+地铁”的新型实体经济发展路径。
                  针对18-35岁年轻群体打造“近距离、可触摸、远离城市喧嚣”的云端静谧场所。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {SPACE_INFO.map((info, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-slate-500 text-sm mb-1">{info.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{info.value}</p>
                    <p className="text-slate-400 text-xs">{info.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/rooftop/800/600" 
                alt="Cloud Plaza" 
                className="rounded-[2.5rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden lg:block border border-slate-100">
                <div className="flex items-center space-x-2 text-green-500 mb-2">
                  <Activity size={24} />
                  <span className="font-bold">活力 · 赋能</span>
                </div>
                <p className="text-slate-600 text-sm">
                  预计首年收入 116-140 万元，创造 50 个大学生创业实践岗位。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section id={SectionId.Market} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">市场洞察</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <TrendingUp className="text-blue-500" />
                <span>行业趋势与前景 (2025-2030)</span>
              </h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { year: '2024', val: 5.73 },
                    { year: '2025', val: 8.5 },
                    { year: '2026', val: 12.1 },
                    { year: '2027', val: 15.8 },
                    { year: '2028', val: 18.2 },
                    { year: '2029', val: 20.0 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} label={{ value: '亿元', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="val" stroke="#2563eb" strokeWidth={4} dot={{ r: 6, fill: '#2563eb' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-slate-500 text-sm mt-4">匹克球运动全国市场规模预测 (CAGR 28%)</p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold mb-4">SWOT 分析</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold mt-1">S</span>
                    <span className="text-slate-600 text-sm">首创楼顶+新中式组合，地利50米。</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold mt-1">W</span>
                    <span className="text-slate-600 text-sm">初期认知度低，受季节性影响。</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold mt-1">O</span>
                    <span className="text-slate-600 text-sm">体育强国政策支持，蓝海竞争少。</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold mt-1">T</span>
                    <span className="text-slate-600 text-sm">大型商业综合体潜在模仿竞争。</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-lg font-bold mb-4">目标客群画像</h3>
                <div className="h-40">
                   <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: '白领', value: 40 },
                          { name: '大学生', value: 30 },
                          { name: '游客', value: 30 }
                        ]}
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        <Cell fill="#3b82f6" />
                        <Cell fill="#10b981" />
                        <Cell fill="#f59e0b" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div> 白领 40%</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div> 学生 30%</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div> 游客 30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product/Space Section */}
      <section id={SectionId.Products} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">核心空间与服务</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/pickle/800/600" alt="Pickleball" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">1400㎡ 运动区</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Activity className="text-blue-500" />
                  <span>国际标准匹克球场</span>
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>4个标准场地，全天候移动棚顶设计</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>分时租赁：高峰 60元/时，普通 30元/时</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>配备专业私教、新手教学与趣味赛事</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[2rem] bg-orange-50/30 border border-orange-100 hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://picsum.photos/seed/tea/800/600" alt="Tea House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">600㎡ 休闲区</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                  <Coffee className="text-orange-600" />
                  <span>新中式茶歇空间</span>
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span>含开放式茶席、私人包间、文化工作坊</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span>客单价 25-85元，精选陕西名茶饮品</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span>融合养生文化，举办夜间“云端夜话”</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section id={SectionId.Finance} className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">财务预测</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">预计首年收入</p>
                  <p className="text-3xl font-bold text-blue-400">116-140 万</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">5年累计净利</p>
                  <p className="text-3xl font-bold text-green-400">397-718 万</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">ROA (资产回报率)</p>
                  <p className="text-3xl font-bold text-yellow-400">207-310%</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
                  <p className="text-slate-400 text-sm mb-1">投资回收期</p>
                  <p className="text-3xl font-bold text-orange-400">1.5 - 3 年</p>
                </div>
              </div>
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
                <h3 className="font-bold mb-4 text-xl">收入结构占比</h3>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden flex">
                    <div className="bg-blue-500 h-full" style={{ width: '60%' }}></div>
                    <div className="bg-orange-500 h-full" style={{ width: '25%' }}></div>
                    <div className="bg-green-500 h-full" style={{ width: '10%' }}></div>
                    <div className="bg-purple-500 h-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div> 场地租赁 60%</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div> 茶饮销售 25%</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div> 赛事培训 10%</span>
                  <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div> 会员年费 5%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-slate-900 font-bold mb-6 flex items-center space-x-2">
                <PieIcon className="text-blue-500" />
                <span>年度营收情景分析 (万元/年)</span>
              </h3>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Legend iconType="circle" />
                    <Bar dataKey="conservative" name="保守" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="base" name="基准" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="optimistic" name="乐观" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id={SectionId.Team} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">核心团队</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-500">由西安体育学院大学生创业团队组成，青春活力与专业背景兼备。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {FOUNDERS.map((founder, idx) => (
              <div key={idx} className="group bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-6 relative">
                  <img src={founder.image} alt={founder.name} className="w-32 h-32 rounded-3xl object-cover mx-auto shadow-lg" />
                  <div className="absolute -bottom-2 right-1/2 translate-x-12 bg-blue-600 text-white p-1.5 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                    <Users size={16} />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{founder.role}</p>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {founder.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">近期成就</p>
                  {founder.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-center space-x-2 text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="bg-blue-600 inline-block p-4 rounded-3xl text-white mb-8 animate-float">
            <Cloud size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">开启您的云端活力之旅</h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            盘活城市闲置楼顶，赋能新兴体育产业。我们在麦田广场8层，期待您的关注。
          </p>
          <div className="flex justify-center space-x-8 text-slate-400 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-2xl">50+</span>
              <span className="text-xs uppercase">就业岗位</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-2xl">5万+</span>
              <span className="text-xs uppercase">年辐射客流</span>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-slate-900 font-bold text-2xl">10万+</span>
              <span className="text-xs uppercase">宣传覆盖</span>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm space-y-4 md:space-y-0">
            <span>© 2025 麦田云端 · 活力广场 创业团队. 保留所有权利.</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-600">服务条款</a>
              <a href="#" className="hover:text-blue-600">隐私政策</a>
              <a href="#" className="hover:text-blue-600">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

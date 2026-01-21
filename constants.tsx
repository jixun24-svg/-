
import { Founder, FinancialMetric } from './types';

export const FOUNDERS: Founder[] = [
  {
    name: '马果雯',
    role: '项目负责人',
    description: '负责整体协调，西安体育学院2023级学生，具备体育传媒与市场营销背景。',
    image: 'https://picsum.photos/seed/ma/400/400',
    achievements: ['全国大学生体育新闻写作大赛三等奖', '优秀学生会干部']
  },
  {
    name: '郝希希',
    role: '内容创作与社群运营',
    description: '擅长内容编写与策划，曾参与多项体育解说赛事。',
    image: 'https://picsum.photos/seed/hao/400/400',
    achievements: ['陕西省第一届体育解说员大赛二等奖', '理解当代中国英语演讲二等奖']
  },
  {
    name: '张雅婷',
    role: '资料收集与图文制作',
    description: '负责校验、结构梳理，对非遗文化有浓厚兴趣。',
    image: 'https://picsum.photos/seed/zhang/400/400',
    achievements: ['大学生职业生涯规划大赛优秀奖', '宪法知识竞赛三等奖']
  }
];

export const REVENUE_DATA: FinancialMetric[] = [
  { year: '2025', conservative: 100, base: 116, optimistic: 140 },
  { year: '2026', conservative: 110, base: 130, optimistic: 160 },
  { year: '2027', conservative: 120, base: 145, optimistic: 180 }
];

export const SPACE_INFO = [
  { label: '总面积', value: '2000㎡', sub: '实际可用约1500㎡' },
  { label: '匹克球场', value: '1400㎡', sub: '4个标准场地' },
  { label: '茶歇空间', value: '600㎡', sub: '含休息区、文化工作坊' },
  { label: '地理位置', value: '和平门D口', sub: '步行仅50米' }
];

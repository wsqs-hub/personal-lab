// ================================================================
//  全站文案中心 —— 想改网页上的任何字，改这个文件即可
//  每个字段都标了「显示在网页哪里」，改完保存约 2 分钟生效
//  改错没关系，去文件 History 一键回退
// ================================================================

export const site = {
  // ============ 顶部导航栏 ============
  nav: {
    logo: "Wiggins · Chem & Materials AI Lab", // 左上角站名
    home: "Home",
    lab: "Lab",
    methods: "Methods",
    notes: "Notes",
    about: "About",
  },

  // ============ 首页第一屏（大标题区）============
  hero: {
    tagline: "PERSONAL AI LAB",              // 姓名上方的小字
    name: "魏世强",                              // 大标题
    nameEn: "Wiggins",
    role: "Chemical & Materials AI Engineer",   // 头衔
    posZh: "从分子结构和物理描述符出发，构建面向性质预测、分子筛选与智能决策的 AI 系统。", // 定位句（中文）
    posEn: "Building AI systems from molecular structure and physical descriptors to property prediction, screening and intelligent decision-making.", // 定位句（英文）
    btnLab: "Explore Lab →",                    // 主按钮
    btnGithub: "GitHub",                        // 次按钮
    domains: ["Molecular AI", "Materials AI", "Process AI", "Optimization", "AI Engineering","chemical Engineering"], // 底部标签
  },

  // ============ 首页第二屏（能力地图）============
  whatIBuild: {
    title: "What I Build",
    titleZh: "我的技术能力地图",
    cards: [
      { title: "Molecular AI", keywords: ["Descriptors", "XTB", "QSAR", "GNN", "Property Pred."] },
      { title: "Materials AI", keywords: ["Polymer Pred.", "Structure–Property", "Tg", "Optical"] },
      { title: "Reaction AI", keywords: ["Yield Pred.", "Catalysis", "DRFP", "GNN"] },
      { title: "Process AI", keywords: ["Time-Series", "Anomaly Det.", "Scheduling", "Modeling"] },
      { title: "Intelligent Design", keywords: ["Active Learning", "Inverse Opt.", "Decision"] },
    ],
  },

  // ============ 首页第三屏（旗舰作品）============
  featured: {
    title: "Featured Lab",
    titleZh: "旗舰作品",
    viewAll: "View all →",
  },

  // ============ 首页第四屏（最新动态）============
  updates: {
    title: "Latest Updates",
    titleZh: "最新动态",
    viewLab: "View Lab →",
  },

  // ============ Lab 页 ============
  lab: {
    title: "Lab",
    subtitleZh: "独立实验与开源研究",
    subtitle: "Independent experiments & open-source studies — 持续迭代中",
    filters: ["All", "Molecular AI", "Reaction AI", "Polymer AI"],
    footerNote: "未来项目将在此追加：GNN 构效关系 / 贝叶斯优化 / 时序建模。",
  },

  // ============ Notes 页 ============
  notes: {
    title: "Notes",
  },

  // ============ Methods 页（六板块）============
  methods: {
    title: "Engineering AI Methods",
    sections: [
      {
        n: "§ 1",
        title: "Problem Definition · 问题定义",
        intro: "拿到业务需求的第一件事不是选模型，而是判断问题类型：",
        items: [
          "<b>Prediction</b>——要的是数值（性质、产率、负荷）？数据量和性质连续性决定回归难度。",
          "<b>Classification</b>——要的是判断（合格/不合格、异常/正常）？小心类别不平衡。",
          "<b>Optimization</b>——要的是方案（配方、排产、操作点）？先确认目标函数与约束。",
          "<b>Screening</b>——要的是排序？评估指标应该是 Top-K 命中率而非全局 R²。",
        ],
        outro: "常见误判：把 Screening 问题建成 Prediction 然后只追 R²——用户要的其实是排序质量。",
      },
      {
        n: "§ 2",
        title: "Representation · 表示层",
        intro: "化工 AI 的第一专业壁垒。化学对象怎么变成模型输入：",
        items: [
          "<b>分子指纹</b>——快、稳、基线首选，但丢失电子与三维信息。",
          "<b>描述符</b>——RDKit 结构描述符 + xTB 电子描述符（HOMO/LUMO/偶极/电荷），电子效应主导的性质必须补这一层。",
          "<b>分子图</b>——GNN 直接学习表示，数据量足够时上限最高。",
          "<b>语言模型嵌入</b>——polyBERT 一类，聚合物/大分子场景的强基线。",
          "<b>过程特征</b>——时序统计量、机理变量、工况上下文。",
        ],
        outro: "",
      },
      {
        n: "§ 3",
        title: "Modeling · 建模",
        intro: "一句话：<b>数据量决定模型复杂度上限，问题性质决定模型类别。</b>",
        items: [
          "几百~几千样本、表格特征 → XGBoost / LightGBM，很难被打败。",
          "几千~几万分子图 → GNN（chemprop 类 MPNN 是可靠起点）。",
          "时序过程数据 → 先统计模型与树模型，再上深度时序模型。",
          "上神经网络：表示学习本身就是需求（图/序列/图像）时。",
        ],
        outro: "",
      },
      {
        n: "§ 4",
        title: "Validation · 验证",
        intro: "验证设计比模型更重要。化工场景四大坑：",
        items: [
          "<b>Data Leakage</b>——同一分子的近缘拆到训练/测试两侧（scaffold split vs random split）。",
          "<b>Experimental Bias</b>——文献数据只报道成功案例，分布天然偏倚。",
          "<b>Distribution Shift</b>——上线后的化学空间和训练集不一样，必须监控适用域。",
          "<b>Overfitting</b>——小数据 + 大模型 = 精美记背。误差分析比单看 R² 诚实得多。",
        ],
        outro: "",
      },
      {
        n: "§ 5",
        title: "Optimization · 优化与决策",
        intro: "从「模型」到「价值」的最后一公里：",
        items: [
          "<b>候选空间明确</b>（分子库/配方库）→ 批量预测 + 排序 = 虚拟筛选。",
          "<b>候选空间连续</b> → 逆向优化：遗传算法 / SLSQP / 贝叶斯优化。",
          "<b>实验成本高</b> → 主动学习：用模型不确定性挑下一批最值得做的实验。",
          "<b>多目标冲突</b> → 多目标优化 + Pareto 前沿，把决策权交回工程师。",
        ],
        outro: "",
      },
      {
        n: "§ 6",
        title: "Deployment · 部署",
        intro: "模型在 Notebook 里不算完成。按用户形态选部署路径：",
        items: [
          "<b>给自己用</b> → 脚本 + 定时任务。",
          "<b>给同事用</b> → 局域网 API（FastAPI）+ 简单前端。",
          "<b>给世界看</b> → Hugging Face Spaces + Gradio，零运维公开 Demo。",
          "<b>上线后</b> → 跟踪预测分布漂移、定期回测、建立再训练机制。",
        ],
      },
    ],
  },

  // ============ About 页 ============
  about: {
    title: "About",
    lead: "化工与材料背景的 AI 工程师。擅长把化工问题翻译成 AI 问题：从分子/材料表征、构效关系建模，到筛选、优化与部署的完整链路。",
    experience: [
      {
        role: "国内某头部化工企业 · 研发工程师",
        date: "2024.07 – 至今",
        desc: "化工/材料领域 AI 模型研发与落地：配方优化、构效关系、视觉检测、时序预测、智能调度。独立完成需求分析 → 建模方案 → 开发 → 部署 → 跟踪全流程。",
      },
      {
        role: "石化盈科 · 过程控制事业部实习生",
        date: "2022.11 – 2024.06",
        desc: "化工调度优化模型开发：燃料气系统实时优化（Python + Aspen HYSYS）、聚丙烯供应链排产优化（Gurobi）。",
      },
    ],
    education: [
      {
        school: "华东理工大学 · 硕士 · 材料与化工",
        date: "2021.09 – 2024.06",
        desc: "化工过程系统模拟与优化 · 毕业课题：基于智能工厂燃料气系统实时优化模型",
      },
      {
        school: "辽宁石油化工大学 · 本科 · 化学工程与工艺",
        date: "2017.09 – 2021.06",
        desc: "",
      },
    ],
    skillsHot: ["Python", "PyTorch", "scikit-learn", "QSAR / 构效关系", "GNN"],
    skills: ["XGBoost / LightGBM", "RDKit", "主动学习", "逆向优化", "LangChain · RAG · Agent", "YOLO / OpenCV", "Aspen Plus / HYSYS", "Gurobi", "时序预测", "异常检测"],
    resumeBtn: "Download Resume →（脱敏版 PDF 待放）",
    disclaimer: "Projects presented on this website are independent personal projects based on public, synthetic, or independently generated data. No proprietary data, code, models, confidential information, or business-sensitive information from my employer is included.",
  },

  // ============ 页脚 ============
  footer: {
    slogan: "Building AI systems from molecular structure and physical descriptors to property prediction, screening and intelligent decision-making.",
    github: "GitHub",                                // GitHub 链接文字
    githubUrl: "https://github.com/wsqs-hub",        // GitHub 链接地址
    wechat: "微信公众号",                              // 公众号链接文字
    wechatName: "AI+化工与材料智能实践",                // 公众号名称（鼠标悬停可见）
    email: "Email",                                  // 邮箱链接文字
    emailAddress: "2592123736@qq.com",               // 邮箱地址
    disclaimer: "Disclaimer",
    copyright: "© 2026 Weishiqiang",
    builtWith: "Built with Astro · Deployed on GitHub Pages",
  },

  // ============ 项目详情页（每个项目页通用的标签）============
  project: {
    backToLab: "← Back to Lab",
    data: "Data",     // Data: Public 里的 Data
    code: "Code",     // Code: Coming Soon
    demo: "Demo",     // Demo: Coming Soon
    viewCode: "View Code ↗",
    tryDemo: "Try Demo",
    codeComing: "Code: Coming Soon",
    demoComing: "Demo: Coming Soon",
    updateLog: "UPDATE LOG",
    disclaimer: "Disclaimer — Projects presented on this website are independent personal projects based on public, synthetic, or independently generated data. No proprietary data, code, models, confidential information, or business-sensitive information from my employer is included.",
  },
};

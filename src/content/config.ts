import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============ 项目内容模型 ============
// 每个项目一个 .md 文件，放在 src/content/projects/ 下。
// 新增项目 = 复制任意一个现有 .md，改下面的 frontmatter 字段即可。
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),                              // 英文标题（项目名）
    titleZh: z.string().optional(),                 // 中文标题
    category: z.enum(['molecular-ai', 'reaction-ai', 'polymer-ai']), // 所属分类
    status: z.enum(['active', 'experimental', 'completed', 'archived']), // 状态徽章
    featured: z.boolean().default(false),           // 是否上首页 Featured
    order: z.number().default(99),                  // 首页 Featured 排序（越小越前）
    pipeline: z.string(),                           // 方法链路，如 "Structure → xTB → QSAR"
    started: z.string(),                            // 开始时间，如 "Aug 2026"
    updated: z.string(),                            // 最后更新，如 "Sep 2026"
    dataSource: z.string(),                         // 数据来源：Public / Literature / Synthetic / Self-generated
    code: z.string(),                               // 代码状态：open-source / partial / coming-soon
    demo: z.string(),                               // Demo 状态：available / coming-soon
    github: z.string().optional(),                  // 项目 GitHub 仓库链接（可空）
    demoUrl: z.string().optional(),                 // Demo 链接（可空）
    summary: z.string(),                            // 一句话概述
    updateLog: z.array(z.object({                   // 更新日志，倒序，手动追加
      date: z.string(),
      note: z.string(),
    })).default([]),
  }),
});

// ============ 文章内容模型 ============
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['ai-chemistry', 'ai-engineering', 'experiments', 'thinking']),
    date: z.string(),
    wechatUrl: z.string().optional(),               // 公众号全文链接（可空）
    relatedProjects: z.array(z.string()).default([]), // 关联项目 slug
  }),
});

export const collections = { projects, notes };

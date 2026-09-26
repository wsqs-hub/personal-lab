// 全站目录映射（状态徽章 + 分类标签）
// 想改徽章文字/颜色，改这里即可。

export const statusMap = {
  active: { label: 'Active', cls: 'b-green' },
  experimental: { label: 'Experimental', cls: 'b-amber' },
  completed: { label: 'Completed', cls: 'b-blue' },
  archived: { label: 'Archived', cls: 'b-gray' },
} as const;

export const categoryMap = {
  'molecular-ai': 'Molecular AI',
  'reaction-ai': 'Reaction AI',
  'polymer-ai': 'Polymer AI',
} as const;

export type ProjectStatus = keyof typeof statusMap;
export type ProjectCategory = keyof typeof categoryMap;

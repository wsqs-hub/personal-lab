---
title: "Organic Reaction Yield Prediction"
titleZh: "有机反应产率预测"
category: reaction-ai
status: active
featured: true
order: 2
pipeline: "Reaction → DRFP / GNN / +xTB → Yield"
started: "Sep 2026"
updated: "Sep 2026"
dataSource: "Public"
code: "coming-soon"
demo: "coming-soon"
summary: "从化学反应（反应物+催化剂+条件）预测产率，对比纯数据驱动（反应指纹/GNN）与加入 xTB 量子化学电子/位阻描述符的效果。"
updateLog:
  - date: "2026-09-26"
    note: "Project scope defined; datasets identified (Buchwald-Hartwig / Suzuki-Miyaura)"
---

## 01 · Problem

输入一个化学反应（反应物 + 催化剂 + 条件），预测它的**产率**。核心研究问题：**纯数据驱动（反应指纹 / GNN）vs 加入 xTB 量子化学电子/位阻描述符，哪个预测更好——尤其在按反应条件外推的场景下？**

## 02 · Why This Problem

合成化学家和催化工程师每天要回答：「这个偶联反应在这套条件下，大概能拿多少产率？值不值得进实验室试？」真实做法是挨个试，又慢又废试剂。如果「反应结构 + 条件 → 产率」能被预测，就能先虚拟排序，把实验资源集中在高潜力反应上——这正是高通量实验 + ML 在制药/精细化工里的真实落地方式。

## 03 · Data

| 数据集 | 反应 | 规模 |
|---|---|---|
| Buchwald-Hartwig HTE（Doyle 组 2018 Science） | Pd 催化 C–N 偶联 | 3,955 条 + 120 DFT 描述符 |
| Suzuki-Miyaura HTE（Perera 2018 Science） | Pd 催化 C–C 偶联 | 5,760 条 |

数据公开：`github.com/doylelab/rxnpredict`、`github.com/rxn4chemistry/rxn_yields`。`Data source: Public`

## 04 · Representation ★

三路对照：

- **路线 A**：DRFP 反应差分指纹（基线，标准做法）
- **路线 B**：GNN（分子图，双通道：反应物/产物）
- **路线 C**：GNN + **xTB 量子化学电子/位阻描述符**（物理化学增强）

为什么串起 xTB：产率由**位阻效应 + 电子效应**共同决定。已有研究（洪鑫组 SEMG-MIGNN）证明把量子化学算出的位阻/电子描述符嵌入分子图能提升外推能力——这正是 xTB 的切入点。

## 05 · Model

基线：DRFP + 随机森林/梯度提升树；进阶：chemprop GNN；路线 C 在 GNN 基础上注入 xTB 描述符特征。

## 06 · Evaluation

随机划分 + **按反应条件划分**（更严，测外推）双报告；R²/RMSE/MAE；对比「纯数据驱动 vs +量子化学描述符」的增益。产率数据天然偏斜（低产率多），需诚实处理。

## 07 · Result

（M3 里程碑后填充：两种划分下的对比表 + 外推能力分析）

## 08 · Limitations

> 反应产率标签噪声大、分布偏斜；真实产率受反应条件（溶剂、配体、温度）影响，外推是难点也是本项目的核心挑战；数据只覆盖钯催化偶联这一化学空间。

## 09 · Live Demo

Coming Soon — 规划：Gradio 界面，输入反应 SMILES → 输出预测产率。

## 10 · GitHub

Coming Soon — 独立仓库 `reaction-yield-prediction`。

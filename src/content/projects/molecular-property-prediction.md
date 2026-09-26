---
title: "Molecular Property Prediction"
titleZh: "有机分子物性预测"
category: molecular-ai
status: active
featured: true
order: 1
pipeline: "SMILES → Descriptor / GNN / +xTB → Property"
started: "Sep 2026"
updated: "Sep 2026"
dataSource: "Public"
code: "coming-soon"
demo: "coming-soon"
summary: "预测有机分子的熔点、沸点、闪点、密度等热力学/物理性质，系统对比三种分子表示（RDKit 描述符 / GNN / +XTB 电子描述符）的效果。"
updateLog:
  - date: "2026-09-26"
    note: "Project scope defined; data sources mapped"
---

## 01 · Problem

输入一个有机分子的结构（SMILES），预测它的熔点、沸点、闪点、密度、粘度等热力学/物理性质。核心研究问题是：**三种分子表示（RDKit 描述符 / 图神经网络 / 描述符+XTB 电子描述符）哪种更适合这些物性？**

## 02 · Why This Problem

化工、制药、配方行业每天都在问：这个新分子/新原料的沸点多少、会不会易燃（闪点）、密度多大。这些性质决定了它能不能做溶剂、能不能安全储运。传统上靠实验测定或查手册，但新分子结构无穷多，测不过来——「结构 → 多物性预测」是工业界真实且长期的需求。

## 03 · Data

起步先做**熔点 + 沸点**（数据最充足）：

| 物性 | 数据集 | 规模（约） |
|---|---|---|
| 熔点 | Bradley Open Melting Point | 28,000+ |
| 沸点 | EPI Suite / NIST / PubChem | 5,700~8,000 |
| 闪点 | Sun et al. / ADMElab | 8,300~14,700 |
| 密度 | ADMElab | 8,900+ |

`Data source: Public`

## 04 · Representation ★

三路对照实验（固定模型，只变「表示」）：

- **路线 A**：RDKit 描述符 + Morgan 指纹（基线，快而稳）
- **路线 B**：图神经网络 GNN（让模型自己学表示）
- **路线 C**：描述符 + **XTB 电子描述符**（HOMO/LUMO/偶极矩/原子电荷 → 补电子效应）

为什么电子描述符对这些物性有意义：**沸点/闪点受分子间作用力（极性、氢键）影响，本质是电子效应**——这正是指纹看不清、xTB 能补的地方。

## 05 · Model

固定树模型（XGBoost / LightGBM）以隔离「表示」变量；GNN 路线用 chemprop。模型不是本研究的变量。

## 06 · Evaluation

scaffold split（按骨架划分，比随机划分更严）+ R²/RMSE/MAE 分物性报告 + 三路线横向对比 + 误差分析（哪些分子预测差、为什么）。

## 07 · Result

（M3 里程碑后填充：三路表示在熔点/沸点上的对比表 + 误差分析）

## 08 · Limitations

> 电子描述符计算成本高于指纹；适用域受训练集化学空间限制；xTB 精度低于 DFT；跨体系泛化性待验证。

## 09 · Live Demo

Coming Soon — 规划：Hugging Face Space + Gradio，输入 SMILES → 输出多物性预测值。

## 10 · GitHub

Coming Soon — 独立仓库 `molecular-property-prediction`。

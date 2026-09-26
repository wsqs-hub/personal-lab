---
title: "Polymer Property Prediction"
titleZh: "聚合物材料性质预测"
category: polymer-ai
status: experimental
featured: true
order: 3
pipeline: "Polymer SMILES → Representation → Tg / Density / FFV ..."
started: "Sep 2026"
updated: "Sep 2026"
dataSource: "Public"
code: "coming-soon"
demo: "coming-soon"
summary: "从聚合物结构（SMILES）预测 Tg、密度、自由体积等核心材料性质；并在折射率上做小数据场景的扩展。"
updateLog:
  - date: "2026-09-26"
    note: "Project scope defined; Kaggle dataset identified"
---

## 01 · Problem

从聚合物结构（SMILES）预测玻璃化转变温度 Tg、密度、自由体积分数 FFV 等核心材料性质，用于高分子材料研发的虚拟筛选。

## 02 · Why This Problem

高分子材料（塑料、弹性体、涂层、光学膜）研发第一步是选材：这个聚合物的 Tg 够不够高、密度多大、折射率多少（决定能否做光学镜头/薄膜）。这些性质传统靠实验，慢且贵。候选聚合物结构成千上万、实验只能测几十个——「结构 → 多性质预测」能先虚拟筛掉大部分不合适的。

## 03 · Data

主任务数据条件最好：**NeurIPS 2025 Open Polymer Prediction** 官方竞赛数据集（Kaggle 公开免费下载），约 11,475 个聚合物（训练集 7,973），5 项性质（Tg/FFV/Tc/Density/Rg）由分子动力学模拟标注。

折射率扩展：CROW 数据库（`polymerdatabase.com`）+ 多篇 QSPR 论文补充材料（百级规模，小数据）。`Data source: Public`

## 04 · Representation ★

三路对照（复用项目 01 的管线）：

- **路线 A**：Morgan 指纹 + 描述符 + LightGBM（官方赛后报告验证的高分路线）
- **路线 B**：polyBERT 语言模型嵌入 / GNN
- **路线 C**：+ **XTB 电子描述符**（折射率尤其依赖极化率 → 电子描述符直接相关）

## 05 · Model

指纹/描述符 → LightGBM 多任务回归；语言模型嵌入 → 轻量 MLP。按性质分别评估。

## 06 · Evaluation

主任务：官方 wMAE + 分性质 R²/MAE；折射率小数据：留一法/交叉验证 + y-scrambling（小数据必须更严谨）。

## 07 · Result

（M2/M3 里程碑后填充：多性质 × 多表示的对比矩阵）

## 08 · Limitations

> 标签来自 MD 模拟而非实验（本身有模拟误差）；Tc（热导率）样本稀疏，预测难度大；SMILES → 聚合物链存在信息损失（分子量分布、序列结构未建模）。

## 09 · Live Demo

Coming Soon — 规划：HF Space + Gradio，输入聚合物 SMILES → 输出多性质预测值。

## 10 · GitHub

Coming Soon — 独立仓库 `polymer-property-prediction`。

export type TTransformationMetricValue = {
  /** Translation key into `t.transformation.metrics` */
  metricKey: string;
  before: string;
  after: string;
};

export const transformationMetrics: TTransformationMetricValue[] = [
  { metricKey: "monthlyLeads",    before: "12",       after: "280" },
  { metricKey: "acquisitionCost", before: "¥50,000",  after: "¥8,500" },
  { metricKey: "conversionRate",  before: "0.8%",     after: "5.2%" },
  { metricKey: "digitalChannels", before: "1",        after: "6" },
  { metricKey: "automationRate",  before: "0%",       after: "65%" },
];

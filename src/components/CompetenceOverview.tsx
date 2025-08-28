import { LayoutBlockVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiBarChart } from "@digi/arbetsformedlingen-react";
import type { ChartLineData } from "@digi/arbetsformedlingen/dist/types/components/_chart/chart-line/chart-line-data.interface";
import "../css/CompetenceOverview.css";

type CompetenceData = {
  label: string;
  value: number;
  color: string;
};

type CompetenceOverviewProps = {
  title: string;
  data: CompetenceData[];
};

export const CompetenceOverview = ({ 
  title = "Kompetensöversikt", 
  data
}: CompetenceOverviewProps) => {
  
  const chartData: ChartLineData = {
    title,
    x: "Kompetens",
    y: "Procent",
    data: {
      xValues: data.map((_, index) => index),
      xValueNames: data.map(item => item.label),
      series: [{
        title: "Kompetensnivå",
        yValues: data.map(item => item.value)
      }]
    },
    meta: {
      percentage: true,
      valueLabels: true
    }
  };

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding>
      <div className="competence-overview">
        <DigiBarChart
          afChartData={JSON.stringify(chartData)}
          afHeadingLevel="h3"
        />
      </div>
    </DigiLayoutBlock>
  );
};
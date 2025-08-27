import { LayoutBlockVariation, BarChartVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react";
import "../css/CompetenceOverview.css";

type CompetenceData = {
  label: string;
  value: number;
  color?: string;
};

type CompetenceOverviewProps = {
  title?: string;
  data: CompetenceData[];
  orientation?: BarChartVariation;
};

export const CompetenceOverview = ({ 
  title = "Kompetensöversikt", 
  data
}: CompetenceOverviewProps) => {

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding>
      <div className="competence-overview">
        <DigiTypography>
          <h3>{title}</h3>
          <div className="competence-list">
            {data.map((item, index) => (
              <div key={index} className="competence-item">
                <span className="competence-label">{item.label}</span>
                <div className="competence-bar-container">
                  <div 
                    className="competence-bar" 
                    style={{ width: `${item.value}%` }}
                  ></div>
                  <span className="competence-value">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </DigiTypography>
      </div>
    </DigiLayoutBlock>
  );
};
import React from 'react';

interface CompetenceData {
  label: string;
  value: number; 
}

interface HorizontalCompetenceChartProps {
  data: CompetenceData[];
  title?: string;
}

export const HorizontalCompetenceChart: React.FC<HorizontalCompetenceChartProps> = ({ 
  data, 
  title 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="horizontal-competence-chart">
      {title && <h4>{title}</h4>}
      <div className="chart-bars">
        {data.map((item, index) => (
          <div key={index} className="chart-row">
            <div className="chart-label">{item.label}</div>
            <div className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
              <span className="chart-value">{item.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
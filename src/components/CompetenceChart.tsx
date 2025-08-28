import type Occupation from '../models/Occupation'
import { DigiBarChart } from '@digi/arbetsformedlingen-react'
import { summarizeSkills } from '../helpers/summarizeSkills'
import type { ChartLineData } from '@digi/arbetsformedlingen'
import { BarChartVariation } from '@digi/arbetsformedlingen'
import '../css/CompChart.css'
type CompetenceChartProps = {
    occupations: Occupation[]
}

export const CompetenceChart = ({ occupations }: CompetenceChartProps) => {
    if (occupations.length === 0) {
        return null
    }

    const skillSummary = summarizeSkills(occupations)
    
    const topSkills = skillSummary.skillOccurrences
        .sort((a, b) => b.occurrences - a.occurrences)
        

    const chartData: ChartLineData = {
        data: {
            xValues: topSkills.map((_, index) => index),
            xValueNames: topSkills.map(({ skill }) => skill),
            series: [{
                yValues: topSkills.map(({ occurrences }) => occurrences),
                title: ''
            }]
        },
        x: 'Kompetenser',
        y: 'Antal',
        title: 'Kompetensöversikt'
    }

    return (
        <div className="competency-chart-container">
            <DigiBarChart 
                afChartData={chartData}
                afHeadingLevel="h3"
                afVariation={BarChartVariation.Horizontal}
            />
        </div>
    )
}
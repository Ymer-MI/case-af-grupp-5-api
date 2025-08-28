import '../css/CompChart.css'
import type Occupation from '../models/Occupation'
import { DigiBarChart } from '@digi/arbetsformedlingen-react'
import { summarizeSkills } from '../helpers/summarizeSkills'
import type { ChartLineData } from '@digi/arbetsformedlingen'
import { BarChartVariation } from '@digi/arbetsformedlingen'

type CompetenceChartProps = {
    occupations: Occupation[]
}

export const CompetenceChart = ({ occupations }: CompetenceChartProps) => {
    const skillSummary = summarizeSkills(occupations).skillOccurrences.sort((a, b) => b.occurrences - a.occurrences), chartData: ChartLineData = {
        data: {
            xValues: skillSummary.map((_, index) => index),
            xValueNames: skillSummary.map(({ skill }) => skill),
            series: [{
                yValues: skillSummary.map(({ occurrences }) => occurrences),
                title: ''
            }]
        },
        x: 'Kompetenser',
        y: 'Antal',
        title: 'Kompetensöversikt'
    }

    return occupations.length && <DigiBarChart afChartData={ chartData } afHeadingLevel='h3' afVariation={ BarChartVariation.Horizontal }/>
}
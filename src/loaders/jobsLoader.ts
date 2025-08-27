import type { LoaderFunctionArgs } from 'react-router'
import type { IParams } from '../models/IParams'
import { JobSearchService } from '../services/jobSearchService'

export default async ({ request }: LoaderFunctionArgs) => {
    const params = new URL(request.url).searchParams, q = params.get('q'), lim = params.get('limit'), off = params.get('offset'), parameters = {
        query: q,
        limit: lim ? +lim : undefined,
        offset: off ? +off: undefined
    } satisfies IParams as IParams

    return { parameters, occupations: q ? await new JobSearchService().getOccupations(q, {
        limit: parameters.limit,
        offset: parameters.offset
    }) : [] }
}
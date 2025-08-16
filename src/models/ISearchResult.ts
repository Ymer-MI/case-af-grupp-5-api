export interface ISearchResult {
    hits: IJobAds[];
}

interface IJobAds {
    occupation: {
        label: string
    }
}
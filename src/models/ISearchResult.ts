export interface ISearchResult {
    hits: IJobAds[];
}

export interface IJobAds {
    occupation: {
        label: string
    }
}
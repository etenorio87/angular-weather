
export interface ISearchResult {
  type?:        string;
  query?:       string[];
  features?:    IFeature[];
  attribution?: string;
}

export interface IFeature {
  id?:         string;
  type?:       string;
  place_type?: string[];
  relevance?:  number;
  properties?: IProperties;
  text?:       string;
  place_name?: string;
  bbox?:       number[];
  center?:     number[];
  geometry?:   IGeometry;
  context?:    IContext[];
}

export interface IContext {
  id?:         string;
  wikidata?:   string;
  text?:       string;
  short_code?: string;
}

export interface IGeometry {
  type?:        string;
  coordinates?: number[];
}

export interface IProperties {
  wikidata?: string;
}

export interface ISearchItem {
  label: string;
  value: IFeature;
}

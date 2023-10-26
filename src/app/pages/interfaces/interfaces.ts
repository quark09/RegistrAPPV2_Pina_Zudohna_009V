export interface Users {
    id: number;
    username: string;
    password: string;
    role: string;
    isactive: boolean;  // Agrega la propiedad isactive
}
  
export interface RespuestaTopHeadlines{
    status: Source;
    totalResults: number;
    articles: Article[];
}

export interface Article{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: string;
}

export interface Source{
    id?: string;
    name: string;
}
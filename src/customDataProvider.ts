import { DataProvider, fetchUtils } from 'react-admin';
import { dataProvider } from "./dataProvider";

const apiUrl = 'https://lreslndufqsfccnjwytb.supabase.co/functions/v1/newstory';

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
    const authToken = localStorage.getItem("user");
    const customHeaders = (options.headers ||
        new Headers({
            // Accept: 'application/json',
        })) as Headers;
    // add your own headers here
    customHeaders.set('Authorization', `Bearer ${authToken}`);
    customHeaders.set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZXNsbmR1ZnFzZmNjbmp3eXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDU0MTcsImV4cCI6MjAyMzg4MTQxN30.gZ9yty222zgWzS_sZ92wo43VEvs2CoC7-JadtR_cSs8');
    customHeaders.set('Content-Type', 'application/json');
    options.headers = customHeaders;
    return fetchUtils.fetchJson(url, options);
}

export const customDataProvider = (
    defaultSupabaseProvider: DataProvider
): DataProvider => {
    return {
        create: async (resource, params) => {
            if (resource == 'book_drafts') {
                const { json } = await httpClient(`${apiUrl}`, {
                    method: 'POST',
                    body: JSON.stringify(params.data)
                })
                return { data: json };
            } else {
                return defaultSupabaseProvider.create(resource, params);
            }
        },
        getList: (resource, params) => defaultSupabaseProvider.getList(resource, params),
        getOne: (resource, params) => defaultSupabaseProvider.getOne(resource, params),
        getMany: (resource, params) => defaultSupabaseProvider.getMany(resource, params),
        getManyReference: (resource, params) => defaultSupabaseProvider.getManyReference(resource, params),
        update: (resource, params) => defaultSupabaseProvider.update(resource, params),
        delete: (resource, params) => defaultSupabaseProvider.delete(resource, params),
        deleteMany: (resource, params) => defaultSupabaseProvider.deleteMany(resource, params),
        updateMany: (resource, params) => defaultSupabaseProvider.updateMany(resource, params)
    }
}

export const combDataProvider = customDataProvider(dataProvider);
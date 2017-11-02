import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {APIResponse} from "../../model/api-response.model";

@Injectable()
export class APIService {

    private apiUrl: string = "/api/";
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });

    constructor(private http: Http) {
    }

    public getApiUrlFromEndpoint(endpoint: string): string {
        return this.apiUrl + APIService.removeTrailingSlash(endpoint);
    }

    private static removeTrailingSlash(path: string): string {
        if (path && path.startsWith("/"))
            path = path.substring(1);
        return path;
    }

    /**
     * Given a Response, checks for errors and returns appropriately.
     * @param response The Response from the server.
     */
    private static handleResponse(response: Response) {
        console.log(response)
        let body: APIResponse = JSON.parse(response.text());
        if (body.ok === true)
            return body.content;
        else
            throw {error: body.error, message: body.message};
    }

    public get(path: string, additionalHeaders?: Headers): Promise<any> {

        // Merge additional headers with default headers.
        let options;
        if (additionalHeaders) {
            let newHeaders: Headers = new Headers(this.headers);
            additionalHeaders.forEach((values: string[], name: string) => {
                values.forEach((value: string) => newHeaders.append(name, value));
            });
            options = new RequestOptions({headers: newHeaders});
        }
        else options = new RequestOptions({headers: this.headers});

        // Make request
        return this.http.get(`${this.apiUrl}${APIService.removeTrailingSlash(path)}`, options)
            .toPromise().then(APIService.handleResponse).catch(APIService.handleResponse)
    }

    public post(path: string, data: any): Promise<any> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.post(`${this.apiUrl}${APIService.removeTrailingSlash(path)}`, JSON.stringify(data), options)
            .toPromise().then(APIService.handleResponse).catch(APIService.handleResponse)
    }

    public put(path: string, data: any): Promise<any> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.put(`${this.apiUrl}${APIService.removeTrailingSlash(path)}`, JSON.stringify(data), options)
            .toPromise().then(APIService.handleResponse).catch(APIService.handleResponse)
    }

    public patch(path: string, data?: any): Promise<any> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.patch(`${this.apiUrl}${APIService.removeTrailingSlash(path)}`, data != null ? JSON.stringify(data) : undefined, options)
            .toPromise().then(APIService.handleResponse).catch(APIService.handleResponse)
    }

    public del(path: string): Promise<any> {
        let options = new RequestOptions({headers: this.headers});

        return this.http.delete(`${this.apiUrl}${APIService.removeTrailingSlash(path)}`, options)
            .toPromise().then(APIService.handleResponse).catch(APIService.handleResponse)
    }

}
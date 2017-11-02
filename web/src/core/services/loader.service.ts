import {Injectable} from "@angular/core";
import {ReplaySubject} from "rxjs";

@Injectable()
export class LoaderService {

    private loading: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

    public startLoading() {
        this.loading.next(true);
    }

    public stopLoading() {
        this.loading.next(false);
    }

    public isLoading(): ReplaySubject<boolean> {
        return this.loading;
    }

}
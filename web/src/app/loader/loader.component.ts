import {Component} from "@angular/core";
import {LoaderService} from "../../core/services/loader.service";

@Component({
    selector: 'mt-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class MTLoaderComponent {

    loading: boolean;

    constructor(loaderService: LoaderService) {
        loaderService.isLoading().subscribe(loading => this.loading = loading);
    }

}
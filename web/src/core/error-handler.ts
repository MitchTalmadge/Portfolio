import {ErrorHandler} from "@angular/core";

export class CustomErrorHandler implements ErrorHandler {
    handleError(error) {
        //TODO: Raygun implementation
        console.error("Uncaught Error: " + error);
    }
}
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mt-showcase',
    templateUrl: 'showcase.component.html',
    styleUrls: ['showcase.component.css']
})

export class MTShowcaseComponent implements OnInit {

    @Input()
    public title: string;

    @Input()
    public images: string[] = [];

    /**
     * The index of the current image being displayed from the images array.
     */
    public currentImageIndex: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    /**
     * Displays the previous image.
     */
    public previousImage(): void {
        if (this.currentImageIndex == 0)
            this.currentImageIndex = this.images.length - 1;
        else
            this.currentImageIndex -= 1;
    }

    /**
     * Displays the next image.
     */
    public nextImage(): void {
        if (this.currentImageIndex == this.images.length - 1)
            this.currentImageIndex = 0;
        else
            this.currentImageIndex += 1;
    }
}
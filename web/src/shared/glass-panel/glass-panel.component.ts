import {Component, Directive, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mt-glass-panel',
    templateUrl: 'glass-panel.component.html',
    styleUrls: ['glass-panel.component.css']
})

export class MTGlassPanelComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}

@Directive({
    selector: 'mt-glass-panel-header'
})
export class MTGlassPanelHeaderDirective {

}

@Directive({
    selector: 'mt-glass-panel-body'
})
export class MTGlassPanelBodyDirective {

}
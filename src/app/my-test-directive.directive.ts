import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyTestDirective]'
})
export class MyTestDirectiveDirective {
  protected view: any;
  constructor(protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef) { }
  ngOnInit() {
    console.log("appMyTestDirective initialized");
    // this.view = this.viewContainer.createEmbeddedView(this.templateRef);
  }
}

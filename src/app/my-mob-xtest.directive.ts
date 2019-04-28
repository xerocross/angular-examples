import { Directive, ViewContainerRef, TemplateRef, HostListener, Renderer, OnInit, OnDestroy, Input } from '@angular/core';
import { autorun } from 'mobx';
// import { mobxAngularDebug } from '../utils/mobx-angular-debug';

@Directive({ selector: '[appMyMobXTest]' })
export class MyMobXTestDirective implements OnInit, OnDestroy {
  protected templateBindings = {};
  protected dispose: any;
  protected view: any;
  @Input() mobxAutorun;

  constructor(
    protected templateRef: TemplateRef<any>,
    protected viewContainer: ViewContainerRef,
    protected renderer: Renderer) {
    }



  ngOnInit() {
    console.log("ng-init");

    this.view = this.viewContainer.createEmbeddedView(this.templateRef);

    // detectChanges = ()=> {
    //   this.view.detectChanges();
    // }
    console.log(this.view.rootNodes[0]);
    this.view.rootNodes[0].addEventListener("click", () => {
      console.log("click");
      this.view.detectChanges();
    })
    if (this.dispose) this.dispose();

    if (this.shouldDetach()) {
      console.log("detach");
      this.view.detach();
    }
    this.autoDetect(this.view);
    // mobxAngularDebug(this.view, this.renderer, this.dispose);
  }

  shouldDetach() {
    return this.mobxAutorun && this.mobxAutorun.detach;
  }

  autoDetect(view) {
    const autorunName = view._view.component
      ? `${view._view.component.constructor.name}.detectChanges()` // angular 4+
      : `${view._view.parentView.context.constructor.name}.detectChanges()`; // angular 2

    this.dispose = autorun(
      () => {
        console.log("autorun");
        view['detectChanges']();
      },
      { name: autorunName }
    );
  }

  ngOnDestroy() {
    if (this.dispose) this.dispose();
  }
}
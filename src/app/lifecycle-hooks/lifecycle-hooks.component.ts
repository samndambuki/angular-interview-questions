import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css',
})
export class LifecycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('para') paragraph!: ElementRef;

  //runs when input changes
  ngOnChanges() {}
  //runs when component is initialized
  ngOnInit(): void {
    console.log('component initialized');
  }
  //runs when change is detected
  ngDoCheck() {
    console.log('change detected');
  }
  //runs after ng-content loads
  ngAfterContentInit() {
    console.log('content initialized');
  }
  //runs once after project content is checked
  ngAfterContentChecked() {
    console.log('content checked');
  }
  //runs once after view is initialized
  ngAfterViewInit() {
    console.log('view initialized');
    this.paragraph.nativeElement.style.color = 'red';
  }
  //runs once view is checked
  ngAfterViewChecked() {
    console.log('view checked');
  }
  //runs before component is destroyed
  ngOnDestroy() {
    console.log('component destroyed');
  }
}

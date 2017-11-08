import {Component} from '@angular/core'

@Component({
	selector: 'hello',
	template: '<strong>{{getMessage()}}</strong>'
}) 
export class HelloWorldComponent {
	getMessage(): string {
		return "Hello, this is message.";
	}
}
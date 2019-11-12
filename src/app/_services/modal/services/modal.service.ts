import { Injectable, ComponentRef, Output, EventEmitter } from '@angular/core';
import { DOMService } from '../../dom.service';
import { IModal } from '../modal';

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	@Output() modal_added: EventEmitter<IModal> = new EventEmitter(true); //Async; Doesn't need to wait
	@Output() modal_removing: EventEmitter<IModal> = new EventEmitter(false); //Sync; Let the subscriber act first

	private modalContentElementId: string = 'modal-content';
	private modalComponentRef: ComponentRef<any>;

	constructor(private domService: DOMService) { }

	show(component: any, isStatic?: boolean, isFullPage?: boolean, config?: object): void {
		this.modalComponentRef = this.domService.appendComponentTo(this.modalContentElementId, component, config)
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
		this.modal_added.emit(<IModal>{ //Send desired settings
			isStatic: isStatic,
			isFullPage: isFullPage
		});
	}

	hide(): void {
		this.modal_removing.emit();
		this.domService.removeComponent(this.modalComponentRef);
		document.getElementsByTagName('body')[0].style.overflow = 'auto';
	}
}

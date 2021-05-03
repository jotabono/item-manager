import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	styles: [
		`
      .form-control {
        margin-bottom: 15px;
      }
    `
	]
})

export class SearchComponent implements OnInit {
	form: FormGroup;
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.buildForm();
	}

	buildForm(): void {
		this.form = this.fb.group({
			title: new FormControl(''),
			description: new FormControl(''),
			pricefrom: new FormControl(''),
			priceto: new FormControl(''),
			email: new FormControl('')
		});
	}

	search(filters: any): void {
		Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
		this.groupFilters.emit(filters);
	}
}
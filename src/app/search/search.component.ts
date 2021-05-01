import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from '../items.service';

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
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	constructor(private fb: FormBuilder,
	private itemsService: ItemsService) {}
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
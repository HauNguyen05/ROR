import { Component, OnInit } from '@angular/core';
import { Book } from './Book.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  input = new Book("title", "", "", "", "", "", "", 1, "", "");
  formSubmit: FormGroup;
  submit: false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formSubmit = this.formBuilder.group({
      title: new FormControl(this.input.title, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      author: new FormControl(this.input.author, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      type: new FormControl(this.input.type, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      publisher: new FormControl(this.input.publisher, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      date: new FormControl(this.input.date, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      language: new FormControl(this.input.language, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z \.]*')])),
      country: new FormControl(this.input.country, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z \.]*')])),
      pages: new FormControl(this.input.pages, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      hashtag: new FormControl(this.input.hashtag, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])),
      content: new FormControl(this.input.content, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)]))
    }
    );
  }
  onClickSubmit(formSubmit) {
    if (this.formSubmit.invalid) {
      alert("You must enter all the fiel")
    }
    this.input = new Book(formSubmit.title, formSubmit.author, formSubmit.type, formSubmit.publisher, formSubmit.date, formSubmit.language, formSubmit.country, formSubmit.pages, formSubmit.hashtag, formSubmit.content);
    var book = JSON.stringify(this.input);
    localStorage.setItem("book", book);

  }
  bookinfo: any[] = [
    { name: "title", placeholder: "Title", icon: "fa fa-text-width icon" },
    { name: "author", placeholder: "Author", icon: "fa fa-user icon" },
    { name: "type", placeholder: "Type", icon: "fa fa-twitch icon" },
    { name: "date", placeholder: "Date Published", icon: "fa fa-calendar-o icon" },
    { name: "publisher", placeholder: "Publisher", icon: "fa fa-home icon" },
    { name: "language", placeholder: "Language", icon: "fa fa-language icon" },
    { name: "country", placeholder: "Country", icon: "fa fa-globe icon" },
    { name: "pages", placeholder: "Pages", icon: "fa fa-file-o icon" },
    { name: "hashtag", placeholder: "Hashtag", icon: "fa fa-hashtag icon" },
    { name: "content", placeholder: "Content", icon: "fa fa-book icon" }
  ]

}

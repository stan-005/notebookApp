import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  Note  from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NoteListComponent],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  noteForm: FormGroup;
  @Output() formSubmit = new EventEmitter<Note>();

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.noteForm.valid) {
      const newNote: Note = {
        ID: Date.now(),
        Title: this.noteForm.value.title,
        Content: this.noteForm.value.content,
        CreatedAt: new Date().toISOString()
      };
      this.formSubmit.emit(newNote);
      this.noteForm.reset();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import Note from '../../models/note.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  styleUrls: ['./note-list.component.css'],
  providers: [DatePipe]

})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    console.log("Noteslist called");
    
    this.noteService.getNotes().subscribe((data: Note[]) => {
      this.notes = data;
      this.notes.forEach((note) => {
        const date = new Date(note.CreatedAt);
        const createdAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        note.CreatedAt = createdAt;
      });
      console.log("inside getNotes")
      console.log(this.notes[0].CreatedAt);
      
          });
                  }
}

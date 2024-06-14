import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }
} 

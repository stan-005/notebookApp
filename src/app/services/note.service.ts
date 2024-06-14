import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [
    { id: 1, title: 'Sample Note 1', content: 'This is the content of note 1', createdAt: new Date() },
    { id: 2, title: 'Sample Note 2', content: 'This is the content of note 2', createdAt: new Date() }
  ];

  getNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: number): Note | undefined {
    return this.notes.find(note => note.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}

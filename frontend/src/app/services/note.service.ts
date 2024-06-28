import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Note from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = `http://localhost:4000/api/notes`;

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getNoteById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    console.log("Creating note:", note);
    return this.http.post<Note>(this.apiUrl, note)
      .pipe(
        tap((response: Note) => console.log("Note created:", response)),
        catchError((error) => {
          console.error("Error creating note:", error);
          throw error;
        })
      );
  }

  updateNote(id: string, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note);
  }

  deleteNote(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

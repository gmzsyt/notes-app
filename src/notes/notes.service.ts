import { Injectable } from '@nestjs/common';
import { NotesDbService } from './notes-db.service';

@Injectable()
export class NotesService {
  constructor(private readonly notesDbService: NotesDbService) {}

  async createNote(title: string, content: string): Promise<any> {
    return await this.notesDbService.createNote(title, content);
  }

  async getAllNotes(): Promise<any> {
    return await this.notesDbService.getAllNotes();
  }

  async getNoteById(noteId: string): Promise<any> {
    return await this.notesDbService.getNoteById(noteId);
  }

  async updateNote(noteId: string, noteData: any): Promise<any> {
    return await this.notesDbService.updateNote(noteId, noteData);
  }

  async deleteNote(noteId: string): Promise<any> {
    return await this.notesDbService.deleteNote(noteId);
  }
}

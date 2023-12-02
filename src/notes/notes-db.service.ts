import { Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';
import { Client } from 'pg';
import { Inject } from '@nestjs/common';

@Injectable()
export class NotesDbService {
  private readonly client: Client;

  constructor(@Inject(PG_CONNECTION) private readonly pgConnection: Client) {
    this.client = this.pgConnection;
  }

  async createNote(title: string, content: string): Promise<any> {
    try {
      const result = await this.client.query(
        'INSERT INTO notes(title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getAllNotes(): Promise<any> {
    try {
      const result = await this.client.query('SELECT * FROM notes');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getNoteById(noteId: string): Promise<any> {
    try {
      const result = await this.client.query('SELECT * FROM notes WHERE id = $1', [noteId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateNote(noteId: string, noteData: any): Promise<any> {
    try {
      const result = await this.client.query(
        'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
        [noteData.title, noteData.content, noteId]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteNote(noteId: string): Promise<any> {
    try {
      const result = await this.client.query('DELETE FROM notes WHERE id = $1 RETURNING *', [noteId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async createNote(@Body('title') title: string, @Body('content') content: string): Promise<any> {
    return await this.notesService.createNote(title, content);
  }

  @Get()
  async getAllNotes(): Promise<any> {
    return await this.notesService.getAllNotes();
  }

  @Get(':id')
  async getNoteById(@Param('id') noteId: string): Promise<any> {
    return await this.notesService.getNoteById(noteId);
  }

  @Put(':id')
  async updateNote(@Param('id') noteId: string, @Body() noteData: any): Promise<any> {
    return await this.notesService.updateNote(noteId, noteData);
  }

  @Delete(':id')
  async deleteNote(@Param('id') noteId: string): Promise<any> {
    return await this.notesService.deleteNote(noteId);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message + ' was clicked!');
  }

  getMessage(): string[] {
    return this.messages;
  }

  clear(): void {
    this.messages = [];
  }
}

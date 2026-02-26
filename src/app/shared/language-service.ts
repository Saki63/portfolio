import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private STORAGE_KEY = 'app_language';

  private languageSubject = new BehaviorSubject<string>(
    localStorage.getItem(this.STORAGE_KEY) || 'de'
  );

  language$ = this.languageSubject.asObservable();

  constructor() {}

  setLanguage(lang: string) {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.languageSubject.next(lang);
  }

  get currentLanguage(): string {
    return this.languageSubject.value;
  }
}
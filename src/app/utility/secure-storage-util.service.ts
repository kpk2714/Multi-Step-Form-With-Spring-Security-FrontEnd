import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class SecureStorageUtilService {

    constructor(private cookieService : CookieService){}

    private getUsername(): string {
        return localStorage.getItem('username') || '';
    }

    encrypt(data: string): string {
        return CryptoJS.AES.encrypt(data, this.getUsername()).toString();
    }
      
    decrypt(ciphertext: string): string {
        const bytes = CryptoJS.AES.decrypt(ciphertext, this.getUsername());
        return bytes.toString(CryptoJS.enc.Utf8);
    }
      
    setItem(key: string, value: string, days : number) {
        if(value!=null) {
            const encrypted = this.encrypt(value);
            this.cookieService.set(key, encrypted, days);
        } else {
            console.log(key + '->' + value);
        }
    }
      
    getItem(key: string): string | null {
        const encrypted = this.cookieService.get(key);
        return encrypted ? this.decrypt(encrypted) : null;
    }
      
    removeItem(key: string) {
        localStorage.removeItem(key);
    }

    deleteItem(key: string) {
        this.cookieService.delete(key);
    }

    encodeByBase64(key : string) {
        const base64EncodedKey = btoa(key);
        return base64EncodedKey;
    }

    decodeByBase64(encodedKey : string) {
        const decodedKey = atob(encodedKey);
        return decodedKey;
    }

    getSessionItem(key : string) {
        return sessionStorage.getItem(key);
    }

    removeSessionItem(key : string) {
        sessionStorage.removeItem(key);
    }

    setSessionItem(key : string, value : string) {
        sessionStorage.setItem(key, value);
    }
}

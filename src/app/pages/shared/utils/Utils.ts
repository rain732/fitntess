import { DatePipe } from '@angular/common';
import { ElementRef } from '@angular/core';

export class Utils {

    public static isNullOrEmpty(str: string) {
        return str === null || str.toString().match(/^ *$/) !== null;
    }

    public static isOnlyLettersAndNumbers(str: string): boolean {
        const regex = /^[A-Za-z0-9\u0621-\u064A\u0660-\u0669 ]+$/;
        return regex.test(str);
    }

    public static isSearchValid(str: string): boolean {
        const regex = /^[A-Z-a-z0-9_.-@\u0621-\u064A\u0660-\u0669 ]+$/;
        return regex.test(str);
    }

    public static isArabicLetters(str: string): boolean {
        const regex = /[\u0621-\u064A\u0660-\u0669 ]+/;
        return regex.test(str);
    }

    public static isArabicLettersAndNumbers(str: string): boolean {
        const regex = /[0-9\u0621-\u064A\u0660-\u0669 ]+/;
        return regex.test(str);
    }

    public static isLettersOnly(str: string): boolean {
        const regex = /[A-Za-z\u0621-\u064A\u0660-\u0669 ]+/;
        return regex.test(str);
    }

    public static isOnlyEnglishAndSpecialCharacters(str: string): boolean {
        const regex = /^[_.@a-zA-Z0-9-]+$/;
        return regex.test(str);
    }

    public static isOnlyNumbers(str: string): boolean {
        const regex = /^[0-9]+$/;
        return regex.test(str);
    }

    public static formatCreatedDate(date: string) {
        const datePipe = new DatePipe('en-US');
        const format = 'yyyy-MM-dd';
        return datePipe.transform(date, format);
    }

    public static isCorrectEmail(str: string): boolean {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(str);
    }

    public static isPriceWithTwoDecimalPlacesAllowed(str: any): boolean {
        const regex = /^[.0-9]+$/;
        return regex.test(str);
    }

    public static downloadAttachment(data: any): void {
        let element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:' + data.mimeType + ';base64,' + encodeURIComponent(data.fileStream)
        );
        element.setAttribute('download', data.fileName);
        element.style.display = 'none';
        element.target = '_blank';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }


}
// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('https://reqres.in/api/users', async ({ request }) => {
    return HttpResponse.json(responseData);
  }),
];

export const responseData = {
  "fullName": "Emre Şahiner",
  "email": "emre@workintech.com.tr",
  "departman": "adfadsf",
  "title": "asdfasdfasd",
  "gorevTanimlari": "fasdfasdf",
  "id": "645",
  "createdAt": "2024-01-03T09:04:02.251Z"
}

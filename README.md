# Driven Recharge

## Deploy

https://driven-recharge-747h.onrender.com/

## API

- GET to `/phones/:document`
- GET to `/recharges/:number`
- GET to `/summary/:document`
- POST to `/phones`:
```ts
{
    "name": string,
    "description": string,
    "number": string,
    "document": string,
    "carrier": 15 | 21 | 31 | 41
}
```
- POST to `/recharges`
```ts
{
    "phone_id": number,
    "value": number
}
```

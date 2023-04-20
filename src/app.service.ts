import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  RedirectLink(id: String) {
    return {url: 'https://sharering.page.link/?link=https://sharering.network/vql?query:641275f07cd216005d5481cc:9c25ce47-3f9d-427d-8932-d0ef25a4b31eandkey%3DU2FsdGVkX1%2B1xTRo0bB79V4GPXecla9M2HYHxOikZVg%3Dandqr_owner%3Dshareledger1fja6aazgvw6zfrh59xjc6w0jdpfhdkharz72lr&apn=network.sharering.travel'};
  }
}

import { Request, response, Response } from 'express';
import fetch from 'node-fetch';

export default{    
    async index(req:Request, res:Response) {       
        const code = req.query.code;

        const url = `https://wsloja.ifood.com.br/ifood-ws-v3/restaurants/${code}/menu?latitude=-30.0253397&longitude=-51.1967082&scheduling_time=1603467600000&x-ifood-session-id=b22fbbed-21a6-454d-a521-d1dc68bbbcd4&secret_key=9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8&account_id=26e25614-6e13-4c77-8761-2ebfc97554e0&access_key=69f181d5-0046-4221-b7b2-deef62bd60d5`;
        
        const options = { method: 'GET' };

        const response = await fetch(url, options)
            .then((res: { json: () => any; }) => res.json());
        console.log('RESPONSE: ', response);
        
        return res.json(response);
   }
}
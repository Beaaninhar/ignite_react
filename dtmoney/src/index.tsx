import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    trasaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      trasactions: [
        {
          id: 5,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAd: new Date('2021-07-22 09:00:00')
        },
        {
          id: 9,
          title: 'Compras da semana',
          type: 'withdraw',
          category: 'Mercado',
          amount: 250,
          createdAd: new Date('2021-08-22 11:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace ='api'

    this.get('/trasactions', () => {
      return this.schema.all('trasaction')
    })

    this.post('/trasactions', (schema,request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('trasaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

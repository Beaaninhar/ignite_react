import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    trasaction: Model,
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

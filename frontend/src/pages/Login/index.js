import React, { useState } from 'react';
import api from '../../services/api';

//import axios from 'axios';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('http://localhost:3333/sessions', { email });
     
      /*const response = await axios({
        url:'http://localhost:3333/sessions', 
        headers: {}, 
        method : 'post',
        data : {
          email : email
        } 
      });    TESTE */ 
     const { _id } = response.data;
  
     localStorage.setItem('user', _id);

     history.push('/dashboard');
  
    }

    return ( 
      <>  
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input type="email" 
                 id="email" 
                 placeholder="Digite seu e-mail"
                 value={email}
                 onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </>  
    )
}
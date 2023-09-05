'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from "react";

//Importar o toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const notify = (text: string) => toast(text);

  const router = useRouter();

  async function handleSubmit(event: SyntheticEvent){
    event.preventDefault();

    const result = await signIn('credentials', {
      email, senha, redirect: false
    })

    if(result?.error){
      console.log(result);
      notify('Usuário ou senha incorretos.')
      return;
    }

    router.replace('/inicio')
  }

  return (
    <div className="container-fluid h-100 container-auth">
      <div className="row h-100" style={{"minHeight": '100vh'}} >
          <div className="col d-flex flex-column justify-content-center bg-light">
              <div className="container-form mx-auto w-100 p-3">
                  <div className='row d-flex mb-4 g-2 text-center justify-content-center'>
                      <h2 className="label-inicio mt-5">Olá! Seja muito bem-vindo(a).</h2>
                      <h4 className="font-weight-light mb-5">Autentique-se para continuar.</h4>
                  </div>
                  <form method='POST' onSubmit={handleSubmit}>
                      <div className="form-row mb-4">
                          <div className="form-group col-12 px-2">
                              <span >Endereço de E-mail:</span>
                              <input type="email" className="form-control w-100 bordas-arredondadas" id="input_email" required onChange={(e) => setEmail(e.target.value)}/>
                          </div>
                      </div>
                      <div className="form-row mt-4">
                          <div className="form-group col-12 px-2">
                              <span >Senha:</span>
                              <input type="password" className="form-control w-100 bordas-arredondadas" id="input_senha" required onChange={(e) => setSenha(e.target.value)}/>
                          </div>
                      </div>
                      <div className="form-row mt-5">
                          <div className="form-group col-12 px-2">
                              <button type="submit" className="btn btn-primary btn-block w-100 bordas-arredondadas">Acessar</button>
                          </div>
                      </div>
                      <div className="form-row mt-2 d-flex justify-content-center">
                          <span className="text-right">Não possui uma conta? </span>
                      </div>
                  </form>
              </div>
          </div>
          <div className="col d-none d-md-block col-right bg-primary col-background">

          </div>
      </div>

      <ToastContainer />
  </div>
  )
}

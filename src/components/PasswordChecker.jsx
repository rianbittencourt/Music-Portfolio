
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const PasswordChecker = () => {
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false);
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }



 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === adminPassword) {
      setAuthenticated(true);

      // Use localStorage apenas no lado do cliente
      if (typeof window !== 'undefined') {
        localStorage.setItem('authenticated', 'true');
      }

      router.push('/admin/panel');
    } else {
      alert('Senha incorreta');
    }
  };

  // Se já estiver autenticado, não renderize o formulário
  if (authenticated) {
    router.push('/admin/panel');
    return null; // Evite a renderização do formulário
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Entre no Painel
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  placeholder="Digite a Senha de Admin"
                  id="password"
                  name="password"
                  type="password"
                  onChange={handlePasswordChange}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-center text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PasswordChecker

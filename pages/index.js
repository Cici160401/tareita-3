import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"


export default function Home() {

  const { data: session } = useSession()
  if(session) {
    return <>
      <header>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Bienvenido de vuelta <span className="text-pink-800">{session.user.name}</span></h1>

        <p className="mt-1.5 text-sm text-gray-900">Chequea las estadisticas de tus productos</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <Link
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          href={'/productos'}>
          <span className="text-sm font-medium"> Ver Productos </span>        
        </Link>

        <Link
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-orange-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
          href={'/productos'}>
        
          <span className="text-sm font-medium"> Ver Tienda </span>
        </Link>
      </div>
    </div>
  </div>
      </header>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
</>
  }
  return <>
    <div className="flex flex-col min-h-screen justify-center items-center max-w-4xl m-auto">
      <h1 className="text-4xl font-bold max-w-lg text-center text-pink-700">Bienvenido a Makeup Store</h1>
      <p className="font-light my-4"> Embelleciéndote! </p>
      <p className="font-medium my-4">Se necesita una cuenta para ingresar a este sitio web</p>
      
      <button
      className="inline-block rounded border border-pink-700 bg-pink-200 px-12 py-3 text-sm font-medium text-pink-800 hover:bg-transparent hover:text-pink-500 focus:outline-none focus:ring active:text-indigo-500" 
      onClick={() => signIn('google')}>
      Inicia sesión con google
      </button>
    </div>
  </>
}

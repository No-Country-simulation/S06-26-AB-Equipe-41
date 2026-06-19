import { User } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
//import api from '../API/axios'
import '../App.css'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    return (

        <div className="min-h-screen bg-white flex flex-col justify-center px-4 sm:px-6">

            <div className='flex items-center justify-center mb-6'>
                <div className='px-3 py-2 rounded-full bg-blue-600 text-white'>
                    <User size={24} className="sm:w-8 sm:h-8" />
                </div>
            </div>

            <h2 className="text-center text-2xl sm:text-3xl font-bold text-black mb-8">
                Entrar na Conta
            </h2>

                <div className=" mx-auto w-full max-w-sm">
        
                <form
                    
                    className="space-y-5"
                >

                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-3 text-base"
                        />
                    </div>

                    <div>

                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-600">
                                Palavra-passe
                            </label>
                        </div>

                            <div className="mt-2">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>

                        </div>

                        <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-500 py-3 text-white font-semibold hover:bg-blue-500 transition">
                        Entrar
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Não tens uma conta? 

                    <button type="button" onClick={() => navigate("/register")}
                        className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                    >
                        {"  "}  Cria agora
                    </button>
                </p>

            </div>

        </div>
    )
}
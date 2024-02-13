import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from "@mui/material";
import { useState } from "react";

import { Loading } from "../loader";

import Image from "next/image";
import Check from '../../../public/assets/contact/check.svg'
import Close from '../../../public/assets/contact/close.svg'
import { lock, unlock } from "@/utils/lockScreen";

const schema = object({
    name:string().required("Requis.").min(3, "3 à 16 caractères.").max(16, "3 to 16 caractères.").trim().uppercase(),
    email:string().required("Requis.").email("Email invalide.").trim().lowercase(),
    message:string().required("Requis.").min(10, "Message trop court")
}).required();

export function ContactForm () {
    const {reset, control, handleSubmit, formState: {errors}} = useForm ({ resolver:  yupResolver(schema)})
    const [loading, setLoading] = useState(false)
    const [logErr, setlogErr] = useState(false)
    const [mailSend, setMailSend] = useState(false)

    async function onSubmit(data) {
        const { name, email, message } = data
        setLoading(true)
        try {
            const response = await fetch('https://api.histoireconsult.fr/api/contact', {
                method: "POST",    
                // credentials: 'include', 
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    name:name, 
                    email:email, 
                    message:message, 
                })
            })
            if(response.status === 200) {
                reset()
                setLoading(false)
                setMailSend(true)
                window?.scrollTo({top: 0, left: 0});
                lock()
            } else {
                setLoading(false)
                setlogErr(true)
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.error('Request failed:' + err.message)
        }
    }

    return (
        <>
        {mailSend ? <MailSend setMailSend={setMailSend} setlogErr={setlogErr} /> : ''}
        {logErr ? <div className="text-sm text-[#d32f2f] text-center mb-5 scroll-mt-28" id="errorContact">Une des informations est incorrecte</div> : ''}
        {loading 
            ? <Loading />
            : <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-2 gap-10 relative place-self-center' id="contact">
                    <Controller name="name" control={control} defaultValue=""
                                render={
                                    ({field}) => (
                                        <TextField {...field}
                                            autoComplete="off"   
                                            id="name" type="text" 
                                            variant="standard" 
                                            label='Nom' placeholder='Entrez votre nom' 
                                            helperText= {errors?.name ? errors?.name?.message : ""}
                                            error={errors?.name ? Boolean(true) : Boolean(false)} 
                                        />
                                    )}
                    />
                    <Controller name="email" control={control} defaultValue=""
                                render={
                                    ({field}) => (
                                        <TextField {...field}
                                            autoComplete="off" 
                                            id="email" type="text" 
                                            variant="standard" 
                                            label='Email' placeholder='Entrez votre email' 
                                            helperText= {errors?.email ? errors?.email?.message : ""}
                                            error={errors?.email ? Boolean(true) : Boolean(false)}
                                            className="col-span-2"
                                        />
                                    )}
                    />
                    <Controller name="message" control={control} defaultValue=""
                                render={
                                    ({field}) => (
                                        <TextField {...field}
                                            autoComplete="off" 
                                            id="message" type="text" 
                                            variant="standard" 
                                            multiline
                                            minRows={4}
                                            label='Commentaire' placeholder='Entrez votre commentaire' 
                                            helperText= {errors?.message ? errors?.message?.message : ""}
                                            error={errors?.message ? Boolean(true) : Boolean(false)}
                                            className="col-span-2 pl"
                                        />
                                    )}
                    />
                    <p className='text-xs font-light col-span-2'>En envoyant ce mail, vous agréez à la <span className='font-bold'>politique de la protection des données*</span>.</p>
                    <button type="submit" className="bg-primary/70 text-white col-span-2 py-2 w-[300px] place-self-center mt-5 rounded-md transition-all duration-500 hover:bg-primary">ENVOYER</button>
            </form>
        }
        </>
    )
}


function MailSend ({setMailSend, setlogErr}) {
    return(
        <div className="w-[100vw] h-[100vh] flex bg-black/60 items-center justify-center overflow-hidden z-50 absolute top-0 left-0">
            <div className="flex flex-col bg-white w-[400px] pt-2 pb-5 px-7 relative sm:w-[90%] rounded-xl">
                <Image src={Close} alt="Close pictogram" 
                        onClick={() => {setMailSend(false); setlogErr(false); unlock()}} 
                        className='self-end -mr-5 h-7 w-auto cursor-pointer' />
                <>
                    <div className="mt-3 mb-7 h-9 w-9 self-center flex items-center justify-center border-2 border-primary animate-[2s_forwards_rotation]">
                        <Image src={Check} alt="Validate pictogram" />
                    </div>
                    <div className="text-center flex flex-col mb-5 items-center gap-1">
                        <p>Merci de votre message !</p>
                        <p>{`L'équipe d'HistHorizons vous répondra au plus vite.`}</p>
                    </div>
                </>
            </div>
        </div>
    )
}
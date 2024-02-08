import { useEffect, useState } from "react"

export const fetchData = () => {

    const [cripto, setCripto] = useState([])

    useEffect(() => {
        const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
        const apiCall = async () => {
            const data = await fetch(URL)
            const resp = await data.json()

            const criptoArray = resp.Data.map(res => {
                const objeto = {
                    id: res.CoinInfo.Name,
                    nombre: res.CoinInfo.FullName
                }
                return objeto
            })
            setCripto(criptoArray)
        }

        apiCall()
    }, [])

    return [cripto]
}
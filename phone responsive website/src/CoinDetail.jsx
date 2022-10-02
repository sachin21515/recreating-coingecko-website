import { useParams} from "react-router-dom"
import RenderCoinDetail from "./RenderCoinDetail"
import useCoinData from "./useCoinData"


export default function CoinDetail(props){
    const {data} = useCoinData()
const {coinId} = useParams()



const singleData = data.find(item=>item.id===`${coinId}`)


    return (
        <div className="coin-detail-main">
       
        { singleData && <RenderCoinDetail singleData={singleData} />}

        </div>
    )
}
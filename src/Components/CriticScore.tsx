import { Badge } from "@chakra-ui/react"

interface Props{
    score : number
}
const CriticScore = ( { score } : Props ) => {
    const color = score > 75 ? 'teal.500' : score > 50 ? 'yellow' : 'tomato'
  return (
    <Badge color ={color} fontSize='14px'  borderRadius = '6px' paddingX= {2}>{score}</Badge>
  )
}

export default CriticScore
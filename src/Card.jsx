import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faHeart, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState,useRef } from 'react'

export default function Card({item}){
const[clicked,setClicked]=useState(false)
const[unclick,setUnclick]=useState(false)

const [likes, setLikes] = useState(0);

const handleLikeClick = () => {
  setLikes(likes + 1);
};
const handleLikeUnClick = () => {
    
    if(likes <= 0){
        setLikes(0)
    }else{
        setLikes(likes - 1);
    }
  };
  
    return(
    <button key={item.id} style={{
        width:200,
        borderStyle:"solid",
        marginLeft:8,
        marginBottom:"1%",
        marginTop:"1%",
        height:"fit",
        borderRadius:15,
        borderColor:"goldenrod"

    }} >
        <span style={{
           
            width:"100%",
           display:"flex",
           flexDirection:"row",
           justifyContent:"space-evenly"
        }} >
            <img src={item.image} alt='my images'  style={{
                objectFit:"fill",
                height:100
            }} />
        

        </span>

        <p style={{
            fontWeight:"bold",
            
         }} >${item.price}</p>
        <p style={{
            fontWeight:"bolder",
            borderBottomColor:"black",
            borderBottomStyle:"solid",
            fontSize:17,
            color:"goldenrod",
            borderBottomWidth:1,
         }}>{item.category}</p>
         <p style={{
            fontWeight:"normal",
            fontStyle:"italic",
         }} >{item.title}</p>
        
        
        

        
        <div style={{
            display:"flex",
            flexDirection:"row",
            height:30,
            //backgroundColor:"green",
            justifyContent:"space-evenly",
           
            
            
            
        }} >
        <button style={{
           border:"none",
           
           
           
        }}  onDoubleClick={()=>{
            setUnclick(true)
            setClicked(false)
            handleLikeClick()
        }} >
        <FontAwesomeIcon icon={faHeart} style={clicked?{
            borderColor:"#1e8ee1",
            height:30,
            

        }:{
            color:"red",
            height:30,
        }} size={20} />
        </button>

        <p style={{
            color:"black"
        }}>{likes}</p>
        <p style={{
            color:"black"
        }}>likes</p>

        <button onClick={()=>{
            setClicked(true)
            setUnclick(false)
            handleLikeUnClick()
        }} >
        <FontAwesomeIcon icon={faMinus}/>
        </button>

        </div>

        <div style={{
            display:"flex",
            flexDirection:"row",
            height:30,
            //backgroundColor:"green",
            justifyContent:"space-evenly",
            borderBottomStyle:"solid",
            borderBottomWidth:1,
            borderBottomColor:"goldenrod"
            
            
        }} >
       <p style={{
        color:"#1e8ee1",
       

        height:30,
       }} >2</p>

        <p> units left</p>

        </div>

       <div style={{
        display:"flex",
        flexDirectionL:"row",
        marginTop:5,
        marginBottom:5,
       }} >
       <button style={{
       
        border:"none",
        color:"#1e8ee1"
    }} >view description</button>
    <button style={{
        backgroundColor:"orange",
        borderRadius:5,
        display:"flex",
        justifyContent:"space-evenly",
        width:"50%",
        borderStyle:"inset"
    }} > <FontAwesomeIcon icon={faCartPlus} style={{
            borderColor:"#1e8ee1",
            height:20,
            marginTop:10,
            marginBottom:5,

        }} /> 
        <p >cart</p>
        </button>
       </div>
       
    </button>
    )
}
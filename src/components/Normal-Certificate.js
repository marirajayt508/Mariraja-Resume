import TCS from '../Images/Certificate/1.jpg'
import '../CSS/Nc.css'
export const Nc = () =>{
    const certi_img = [TCS,TCS,TCS,TCS]
    return <div class="certi-body">
       {
           certi_img.map((a)=>{
               return <div><br/>
               <center><div class="card container"><br/>
              <center><img src={a} class="img-size"/></center>
            <br/></div></center></div>
           }
           )
       }
       <br/>
       </div>
}

/* <br/>
              <center><div class="card container">
             <center><img src={TCS} class="img-size"/></center>
           </div></center>*/
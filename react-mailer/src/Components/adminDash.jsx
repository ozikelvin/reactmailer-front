import React , {useState, useEffect} from 'react';
import NorNav from './norNav';
import axios from 'axios'
import {MakePrivAdmin} from './adHoc';

// const Users =({user,onDelete })=>{
//     <div>
//         <tr>
//             <td> { user.name } </td>
//             <td> { user.email } </td>
//             <button onClick={()=>onDelete(user._id)} >Delete</button>
//         </tr>
//     </div>
// }
// const Coupon =({coupon, onDelete })=>{
//     <div>
//         <tr>
//             <td> { coupon.coupon } </td>
//             <td> { coupon.used } </td>
//             <button onClick={()=>onDelete(coupon._id)} >Delete</button>
//         </tr>
//     </div>
// }


function AdminDash(){

    const [coupon, setCoupon] = useState([])
    const [users, setUsers] = useState([])

    // useEffect( ()=>{
    //     axios.get('http://localhost:3002/admin.v1/coupons')
    //     .then((response)=>{
    //         if(response.data > 0){
    //             setCoupon({ coupon: response.data.map(cop => cop) })
    //         }
    //     })
    //     .catch(err => console.log(err))

 //} )

return(
    <div>
        <NorNav />
            <div className='container'>
                <div>
                    <table>
                            <thead>
                                <tr>
                                    <td>User-Name</td>
                                    <td> Email </td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                    </table>
                </div>
            </div>
    </div>
)
}



export default  MakePrivAdmin(AdminDash)

import './Footer.css'
// window.addEventListener("DOMContentLoaded", ()=>{
//     document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
// })


const Footer=()=> {
    return (
        <div className="footer">
            <p>&copy; <span id="copyright-year">{ new Date().getFullYear()} </span>Grain&Trax.  All Rights Reserved.</p>
        </div>
    )
}


export default Footer

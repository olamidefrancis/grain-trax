import './Content.css'
import one from '../../Images/one.jpg'
import two from '../../Images/two.jpg'
import three from '../../Images/three.jpg'
import four from '../../Images/four.jpg'

// import five from '../../Images/five.jpg'

// let nextDom =  document.getElementById('next');
// let preDom = document.getElementById('prev');
// let carouselDom = document.querySelector('.carousel');
// let listItemDom = document.querySelector('.carousel .list');
// let thumbnailDom = document.querySelector('.carousel .thumbnail');

// nextDom.onclick = 
//   showSlider('next');


// function showSlider(type){
  
   
//     let itemSlider= document.querySelectorAll('.carousel .list .item');
//      console.log(carouselDom);
//     let itemThumbnail= document.querySelectorAll('.carousel .thumbnail .item');
//    if(type ==='next'){
//     listItemDom.appendChild(itemSlider[0]);
//     thumbnailDom.appendChild(itemThumbnail[0]);
     
//    }
// }



function Content() {



    
    return (
        <div className="carousel ">
         
            <div className="list">
                <div className="item">
                 
                    <img src={one} alt="one" />
 
                    <div className="content">
                        <div className="author">Author</div>
                        <div className="title">Title</div>
                        <div className="topic">Brokerage Firm</div>
                        <div className="description">Lorem ipsum dol.</div>
                        <div className="buttons">
                            <button>See More</button>
                             <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                 
                    <img src={two} alt="two" />
 
                    <div className="content">
                        <div className="author">Author</div>
                        <div className="title">Title</div>
                        <div className="topic">Brokerage Firm</div>
                        <div className="description">Lorem ipsum dol.</div>
                        <div className="buttons">
                            <button>See More</button>
                             <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                 
                    <img src={three} alt="three" />
 
                    <div className="content">
                        <div className="author">Author</div>
                        <div className="title">Title</div>
                        <div className="topic">Brokerage Firm</div>
                        <div className="description">Lorem ipsum dol.</div>
                        <div className="buttons">
                            <button>See More</button>
                             <button>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                 
                    <img src={four} alt="four" />
 
                    <div className="content">
                        <div className="author">Author</div>
                        <div className="title">Title</div>
                        <div className="topic">Brokerage Firm</div>
                        <div className="description">Lorem ipsum dol.</div>
                        <div className="buttons">
                            <button>See More</button>
                             <button>Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* thumbnail class */}

            <div className="thumbnail">
                  

                    <div className="item">
                 
                        <img src={two} alt="two" />
    
                        <div className="content">
                            <div className="author">Author</div>
                            <div className="title">Title</div>
                            <div className="topic">Brokerage Firm</div>
                            <div className="description">Lorem ipsum dol.</div>
                            
                        </div>
                    </div>

                    <div className="item">
                 
                        <img src={three} alt="three" />
    
                        <div className="content">
                            <div className="author">Author</div>
                            <div className="title">Title</div>
                            <div className="topic">Brokerage Firm</div>
                            <div className="description">Lorem ipsum dol.</div>
                            
                        </div>
                    </div>

                    <div className="item">
                 
                        <img src={four} alt="four" />
    
                        <div className="content">
                            <div className="author">Author</div>
                            <div className="title">Title</div>
                            <div className="topic">Brokerage Firm</div>
                            <div className="description">Lorem ipsum dol.</div>
                            
                        </div>
                    </div>

                    <div className="item">
                 
                        <img src={one} alt="one" />
 
                        <div className="content">
                            <div className="author">Author</div>
                            <div className="title">Title</div>
                            <div className="topic">Brokerage Firm</div>
                            <div className="description">Lorem ipsum dol.</div>
                            
                        </div>
                    </div>
            </div>

            <div className="arrows">
                <button id="prev">{'<'}</button>
                <button id="next" >{'>'}</button>
            </div>

            <div className="time">

            </div>

        </div>
    )
}




export default Content;

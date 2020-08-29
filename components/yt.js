function YT({video}){

 
    const thumbnailUrl = 'https://i.ytimg.com/vi/'+video['yt:videoId']+'/hqdefault.jpg'
    const linkUrl = 'https://www.youtube.com/watch?v='+video['yt:videoId']
  
console.log(video);
    return (
        <div className="is-widescreen section container column is-half">
        <div className="card ">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={thumbnailUrl} alt="Placeholder image " />
          </figure>
        </div>
        <div className="card-content">
        <div className="content">

        <h1 className="title" style={{color:'white'}}>{video.title}</h1>
        <p>{video['media:group']['media:description']}</p>
            <p><time>{(new Date(video.published)).toDateString()}</time></p>
            <br />
            <p>
            <a href={linkUrl} target="_blank">
                <button className="button is-info modal-button" data-target="modal" aria-haspopup="true">Watch Video</button>
                
                </a>
                
                </p>
 

            </div>
            </div>
   </div>
</div>

    )
 }
export default YT
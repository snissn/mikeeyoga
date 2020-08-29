import Layout from '../components/layout'
var parseString = require('xml2js').parseString;


import "isomorphic-fetch"

async function xml2json(xml) {
  return new Promise((resolve, reject) => {
      parseString(xml, { explicitArray : false, ignoreAttrs : true }, function (err, json) {
          if (err)
              reject(err);
          else
              resolve(json);
      });

  });
}



let youtube = fetch("https://thingproxy.freeboard.io/fetch/https://www.youtube.com/feeds/videos.xml?channel_id=UC5wC5_0J9Qa6MxXoI8DPUAg").then(res=>{
  res.text().then((xml,b)=>{
    parseString(xml, { explicitArray : false, ignoreAttrs : true },function (err, result) {
      const feed = result['feed']['entry']
      //console.dir((feed));
  });
    
  });
 })

 function Index({feed}){
    var video = feed[0];
   
   const videoUrl = 'https://www.youtube-nocookie.com/embed/'+video['yt:videoId']
 return (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <p><img  src="/public/Hello.png" /></p>
        <h1 className="title">Hello from Mikee</h1> 



        <p className="video" >
        
        <iframe width="500" height="900" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>

         
      </div>
    </section>


    <style jsx>{`
        
        section {
          background: #24589f;
          
        }
        .card{width:400px;}
        h1{
          color: #f8f8ff;

        }
        .video, .video > iframe{
          height:900px;
        }
  
      `}</style>


  </Layout>
);

      }

      Index.getInitialProps = async ctx => {
        let youtube = await fetch("https://thingproxy.freeboard.io/fetch/https://www.youtube.com/feeds/videos.xml?channel_id=UC5wC5_0J9Qa6MxXoI8DPUAg")
        
        let xml = await youtube.text();
        var x = await xml2json(xml);
         parseString(xml, { explicitArray : false, ignoreAttrs : true },function (err, result) {
          const feed = result['feed']['entry']
          //console.dir((feed));
      });
      const feed = x['feed']['entry']
        
        return {feed:feed}
      }
      export default Index;

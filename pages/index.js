import Layout from '../components/layout'
var parseString = require('xml2js').parseString;


import "isomorphic-fetch"

let youtube = fetch("https://thingproxy.freeboard.io/fetch/https://www.youtube.com/feeds/videos.xml?channel_id=UC5wC5_0J9Qa6MxXoI8DPUAg").then(res=>{
  res.text().then((xml,b)=>{
    parseString(xml, { explicitArray : false, ignoreAttrs : true },function (err, result) {
      const feed = result['feed']['entry']
      console.dir((feed));
  });
    
  });
 })

export default () => (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <p><img  src="/static/Hello.png" /></p>
        <h1 className="title">Hello from Mikee</h1> 



        <p className="video" >
        
        <iframe width="500" height="900" src="https://www.youtube-nocookie.com/embed/oU0tPLvUg-o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </p>





        
      </div>
    </section>


    <style jsx>{`
        
        section {
          background: #24589f;
        }
        h1{
          color: #f8f8ff;

        }
        .video, .video > iframe{
          height:900px;
        }
  
      `}</style>


  </Layout>
);
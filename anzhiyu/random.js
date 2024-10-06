var posts=["2024/07/05/hello-world/","2024/10/06/图论/","2024/07/06/数论/","2024/07/05/第一次/","2024/07/10/蓝桥杯/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
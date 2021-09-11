EventListener debugging logging

1. root Node에 이벤트들이 주렁주렁 달리는 형태인가? => No.
   dispatchDiscreate => discreteuppdates => dispatchEvent => attemptoDispatchEvent => dispatchEventForPlugin
   => processDispatchQueue
   에서 node에 등록된 이벤트를 호출한다.
   
   root Node에는 이벤트를 하나만 등록해두고, 이게 실행되면 node에 등록된 이벤트를 찾아서 실행하는 구조이다. 이 과정에서 queue에 등록하여 pending 이벤트를 기다리는 과정 등이 포함된다.


TODO: console.log가 아닌 debug기능으로 디버깅해보기.


16.8.0 버전의 stopPropagation은 잘 된다.
https://codesandbox.io/s/react16-stoppropagation-sdxcn?file=/src/App.js

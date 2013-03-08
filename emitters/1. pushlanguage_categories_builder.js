fromStream('github')
  .when({
     "PushEvent": function(s, ev) {
         linkTo('pushlanguage-' + ev.body.repo.language, ev)
     }   
   })      

fromCategory('pushlanguage')
  .foreachStream()
  .when({
      $init: function(s, ev) {
          return { count: 0 }
      },
      "PushEvent": function(s, ev) {
          s.count++
      }
   }).outputTo("PushByLanguage", "PushByLanguage-{0}")
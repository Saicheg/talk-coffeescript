//= require reveal.min
//= require lib/head.min
//= require_self

Reveal.initialize({
  controls: false,
  progress: true,
  history:  true,
  center:   true,

  theme:      'default', // available themes are in /css/theme
  transition: 'default', // default/cube/page/concave/zoom/linear/none

  width: '90%',

  // Optional libraries used to extend on reveal.js
  dependencies: [
  { src: '/javascripts/lib/classList.js', condition: function() { return !document.body.classList; } },
  { src: '/javascripts/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: '/javascripts/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: '/javascripts/plugin/highlight/highlight.js', async: false, callback: function() { hljs.initHighlightingOnLoad(); } },
  { src: '/javascripts/plugin/highlight/highlight-coffee.js', async: false },
  { src: '/javascripts/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
  { src: '/javascripts/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});
